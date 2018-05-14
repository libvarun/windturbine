// based on https://developers.google.com/maps/documentation/javascript/custom-markers
var map;
function initMap() {
    var center = coordinateCenter();

    map = new google.maps.Map(document.getElementById('map'), {
        zoom: 13,
        center: new google.maps.LatLng(center.Latitude, center.Longitude),
        mapTypeId: 'roadmap'
    });

    var slider = document.getElementById("myRange");
    slider.value = 0;

    slider.oninput = function () {
        showMarkers(this.value);
    }

    showMarkers(0);
}

var minMaxDate = getMinMaxDate();
var markers = [];

function showMarkers(range) {
    // trick as the min & max are too close... 
    minMaxDate.min -= 3 /*day*/ * (24 * 60 * 60);
    minMaxDate.max += 2 /*day*/ * (24 * 60 * 60);
    var currentTick = minMaxDate.min + ((minMaxDate.max - minMaxDate.min) * range / 100);

    var currentDate = new Date(currentTick)
    document.getElementById("currentDate").innerHTML = moment(currentDate).format("DD/MM/YY");

    // ToDo: need to replace these icons
    var iconBase = 'https://maps.google.com/mapfiles/kml/shapes/';

    for (var i = 0; i < markers.length; i++) {
        markers[i].setMap(null);
    }
    markers = new Array();

    // Create markers.
    coordinates.forEach(function (coord) {
        var timetable = getByLocation(coord.Position);
        var icon;

        // <div>Icons made by <a href="https://www.flaticon.com/authors/twitter" title="Twitter">Twitter</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a></div>
        // need to find better icons
        if (timetable.MP.getTime() < currentTick) icon = './img/letter-m.png';
        if (timetable.TP.getTime() < currentTick) icon = './img/letter-t.png';
        if (timetable.WTG.getTime() < currentTick) icon = './img/letter-w.png';
        if (timetable.COM.getTime() < currentTick) icon = './img/letter-c.png';

        if (icon == null) return; // skip?

        var marker = new google.maps.Marker({
            position: new google.maps.LatLng(coord.Latitude, coord.Longitude),
            icon: icon,
            map: map,
            title: coord.Position
        });
        markers.push(marker);
        marker.addListener('click', function () {
            var contentString = '<div id="content">' +
                '<div id="siteNotice">' +
                '</div>' +
                '<h1 id="firstHeading" class="firstHeading">' + timetable['Location'] + '</h1>' +
                '<div id="bodyContent">' +
                '<div><div class="info_box"><p>MP: ' + timetable['MP-completion date'] + '</p>' +
                '<p>TP: ' + timetable['TP-completion date'] + '</p>' +
                '<p>ARR: ' + timetable['ARR-completion date'] + '</p>' +
                '<p>WTG: ' + timetable['WTG-completion date'] + '</p>' +
                '<p>COM: ' + timetable['COM-completion date'] + '</p></div>'+
                '<div class="info_box">'+
                '<div class="color_box" style="background:#3498DB"></div>&nbsp;&nbsp;Less than avg time<br>'+
                '<div class="color_box" style="background:#F7DC6F"></div>&nbsp;&nbsp;Equal to avg time<br>'+
                '<div class="color_box" style="background:#D35400"></div>&nbsp;&nbsp;More than avg time<br>'+
                '</div></div>' +
                // just show a model...
                '<div id="forgeViewer">'+
                // '<iframe src="https://myhub.autodesk360.com/ue29cb533/shares/public/SHabee1QT1a327cf2b7ad9ec0de9a11e873c?mode=embed" width="640" height="480" allowfullscreen="true" webkitallowfullscreen="true" mozallowfullscreen="true"  frameborder="0"></iframe>' +
                '</div>' +
                '</div>';

            var infowindow = new google.maps.InfoWindow({
                content: contentString
            });
            infowindow.open(map, marker);
            var urn = "dXJuOmFkc2sud2lwcHJvZDpmcy5maWxlOnZmLnpleXM3WFBlVGd1cVBjX09EWkJia1E_dmVyc2lvbj0x";
            launchViewer(urn);
        });
    });
}

var turbinedata = [
	{
		"Location": "E01",
		"Installationoftower": "1.5",
		"Installationofnacelle": "1.67",
		"FirstbladeInstallation": "1",
		"SecondbladeInstallation": "1.42",
		"ThirdbladeInstallation": "3.17",
		"GrandTotal": "8.76"
	},
	{
		"Location": "D02",
		"Installationoftower": "1.67",
		"Installationofnacelle": "1.5",
		"FirstbladeInstallation": "1.67",
		"SecondbladeInstallation": "1.5",
		"ThirdbladeInstallation": "2.92",
		"GrandTotal": "9.26"
	},
	{
		"Location": "B05",
		"Installationoftower": "1.5",
		"Installationofnacelle": "1.5",
		"FirstbladeInstallation": "1.17",
		"SecondbladeInstallation": "1.42",
		"ThirdbladeInstallation": "2.25",
		"GrandTotal": "7.84"
	},
	{
		"Location": "C04",
		"Installationoftower": "1.33",
		"Installationofnacelle": "1.42",
		"FirstbladeInstallation": "1",
		"SecondbladeInstallation": "1.75",
		"ThirdbladeInstallation": "2.08",
		"GrandTotal": "7.58"
	},
	{
		"Location": "C05",
		"Installationoftower": "1.75",
		"Installationofnacelle": "1.17",
		"FirstbladeInstallation": "2.5",
		"SecondbladeInstallation": "1.42",
		"ThirdbladeInstallation": "1.83",
		"GrandTotal": "8.67"
	},
	{
		"Location": "D03",
		"Installationoftower": "1.92",
		"Installationofnacelle": "1.58",
		"FirstbladeInstallation": "1",
		"SecondbladeInstallation": "1.42",
		"ThirdbladeInstallation": "2.17",
		"GrandTotal": "8.09"
	},
	{
		"Location": "F01",
		"Installationoftower": "1",
		"Installationofnacelle": "1.58",
		"FirstbladeInstallation": "0.83",
		"SecondbladeInstallation": "1.58",
		"ThirdbladeInstallation": "1.83",
		"GrandTotal": "6.82"
	},
	{
		"Location": "E02",
		"Installationoftower": "1.33",
		"Installationofnacelle": "2",
		"FirstbladeInstallation": "1.17",
		"SecondbladeInstallation": "1.25",
		"ThirdbladeInstallation": "2.25",
		"GrandTotal": "8"
	},
	{
		"Location": "F02",
		"Installationoftower": "1.17",
		"Installationofnacelle": "1.33",
		"FirstbladeInstallation": "1",
		"SecondbladeInstallation": "1.92",
		"ThirdbladeInstallation": "2.58",
		"GrandTotal": "8"
	},
	{
		"Location": "E03",
		"Installationoftower": "1.42",
		"Installationofnacelle": "1.33",
		"FirstbladeInstallation": "1",
		"SecondbladeInstallation": "1.5",
		"ThirdbladeInstallation": "2.5",
		"GrandTotal": "7.75"
	},
	{
		"Location": "G01",
		"Installationoftower": "1.42",
		"Installationofnacelle": "1.25",
		"FirstbladeInstallation": "0.92",
		"SecondbladeInstallation": "1.5",
		"ThirdbladeInstallation": "2.42",
		"GrandTotal": "7.51"
	},
	{
		"Location": "H01",
		"Installationoftower": "1.25",
		"Installationofnacelle": "0.83",
		"FirstbladeInstallation": "1.42",
		"SecondbladeInstallation": "1.67",
		"ThirdbladeInstallation": "2.42",
		"GrandTotal": "7.59"
	},
	{
		"Location": "G02",
		"Installationoftower": "1.08",
		"Installationofnacelle": "1.42",
		"FirstbladeInstallation": "0.75",
		"SecondbladeInstallation": "2",
		"ThirdbladeInstallation": "2.25",
		"GrandTotal": "7.5"
	},
	{
		"Location": "F03",
		"Installationoftower": "1.67",
		"Installationofnacelle": "1.58",
		"FirstbladeInstallation": "0.83",
		"SecondbladeInstallation": "1.25",
		"ThirdbladeInstallation": "2.58",
		"GrandTotal": "7.91"
	},
	{
		"Location": "C06",
		"Installationoftower": "1.58",
		"Installationofnacelle": "1.33",
		"FirstbladeInstallation": "0.83",
		"SecondbladeInstallation": "1.42",
		"ThirdbladeInstallation": "2.08",
		"GrandTotal": "7.24"
	},
	{
		"Location": "D04",
		"Installationoftower": "1.83",
		"Installationofnacelle": "1.9100000000000001",
		"FirstbladeInstallation": "1",
		"SecondbladeInstallation": "1.67",
		"ThirdbladeInstallation": "2.34",
		"GrandTotal": "8.75"
	},
	{
		"Location": "A03",
		"Installationoftower": "1.75",
		"Installationofnacelle": "1.75",
		"FirstbladeInstallation": "0.83",
		"SecondbladeInstallation": "1.58",
		"ThirdbladeInstallation": "2.08",
		"GrandTotal": "7.99"
	},
	{
		"Location": "A04",
		"Installationoftower": "1.33",
		"Installationofnacelle": "1.5",
		"FirstbladeInstallation": "1",
		"SecondbladeInstallation": "1.42",
		"ThirdbladeInstallation": "3.33",
		"GrandTotal": "8.58"
	},
	{
		"Location": "A02",
		"Installationoftower": "1.75",
		"Installationofnacelle": "1.42",
		"FirstbladeInstallation": "1.17",
		"SecondbladeInstallation": "1.33",
		"ThirdbladeInstallation": "2.08",
		"GrandTotal": "7.75"
	},
	{
		"Location": "B03",
		"Installationoftower": "1.83",
		"Installationofnacelle": "1.75",
		"FirstbladeInstallation": "1.17",
		"SecondbladeInstallation": "1.67",
		"ThirdbladeInstallation": "2.75",
		"GrandTotal": "9.17"
	},
	{
		"Location": "A01",
		"Installationoftower": "1.6600000000000001",
		"Installationofnacelle": "1.75",
		"FirstbladeInstallation": "1.33",
		"SecondbladeInstallation": "2.17",
		"ThirdbladeInstallation": "2.17",
		"GrandTotal": "9.08"
	},
	{
		"Location": "B02",
		"Installationoftower": "1.42",
		"Installationofnacelle": "1.33",
		"FirstbladeInstallation": "0.92",
		"SecondbladeInstallation": "1.42",
		"ThirdbladeInstallation": "2.92",
		"GrandTotal": "8.01"
	},
	{
		"Location": "B01",
		"Installationoftower": "2",
		"Installationofnacelle": "1.42",
		"FirstbladeInstallation": "0.92",
		"SecondbladeInstallation": "1.83",
		"ThirdbladeInstallation": "2.58",
		"GrandTotal": "8.75"
	},
	{
		"Location": "A05",
		"Installationoftower": "1.42",
		"Installationofnacelle": "1.67",
		"FirstbladeInstallation": "0.83",
		"SecondbladeInstallation": "2",
		"ThirdbladeInstallation": "3.33",
		"GrandTotal": "9.25"
	},
	{
		"Location": "A06",
		"Installationoftower": "1.6600000000000001",
		"Installationofnacelle": "1.58",
		"FirstbladeInstallation": "1.17",
		"SecondbladeInstallation": "1.42",
		"ThirdbladeInstallation": "3.75",
		"GrandTotal": "9.58"
	},
	{
		"Location": "B04",
		"Installationoftower": "1.83",
		"Installationofnacelle": "2.33",
		"FirstbladeInstallation": "1.5",
		"SecondbladeInstallation": "1.92",
		"ThirdbladeInstallation": "2.92",
		"GrandTotal": "10.5"
	},
	{
		"Location": "B06",
		"Installationoftower": "2",
		"Installationofnacelle": "1.58",
		"FirstbladeInstallation": "1.08",
		"SecondbladeInstallation": "1",
		"ThirdbladeInstallation": "1.83",
		"GrandTotal": "7.49"
	},
	{
		"Location": "B07",
		"Installationoftower": "1.5",
		"Installationofnacelle": "1.33",
		"FirstbladeInstallation": "0.83",
		"SecondbladeInstallation": "1.5",
		"ThirdbladeInstallation": "2.25",
		"GrandTotal": "7.41"
	},
	{
		"Location": "C01",
		"Installationoftower": "1.75",
		"Installationofnacelle": "1.17",
		"FirstbladeInstallation": "1",
		"SecondbladeInstallation": "1.92",
		"ThirdbladeInstallation": "1",
		"GrandTotal": "6.84"
	},
	{
		"Location": "C02",
		"Installationoftower": "1.33",
		"Installationofnacelle": "1.75",
		"FirstbladeInstallation": "1.08",
		"SecondbladeInstallation": "1.33",
		"ThirdbladeInstallation": "2.92",
		"GrandTotal": "8.41"
	},
	{
		"Location": "C03",
		"Installationoftower": "1.75",
		"Installationofnacelle": "1.42",
		"FirstbladeInstallation": "1.75",
		"SecondbladeInstallation": "1.83",
		"ThirdbladeInstallation": "3.08",
		"GrandTotal": "9.83"
	},
	{
		"Location": "C07",
		"Installationoftower": "1.9100000000000001",
		"Installationofnacelle": "0.83",
		"FirstbladeInstallation": "0.75",
		"SecondbladeInstallation": "1.33",
		"ThirdbladeInstallation": "2.08",
		"GrandTotal": "6.9"
	},
	{
		"Location": "C08",
		"Installationoftower": "1.58",
		"Installationofnacelle": "1.58",
		"FirstbladeInstallation": "0.75",
		"SecondbladeInstallation": "1.58",
		"ThirdbladeInstallation": "3.5",
		"GrandTotal": "8.99"
	},
	{
		"Location": "D01",
		"Installationoftower": "2.17",
		"Installationofnacelle": "1.67",
		"FirstbladeInstallation": "0.83",
		"SecondbladeInstallation": "1",
		"ThirdbladeInstallation": "3.58",
		"GrandTotal": "9.25"
	},
	{
		"Location": "D05",
		"Installationoftower": "1.5",
		"Installationofnacelle": "1.58",
		"FirstbladeInstallation": "1.33",
		"SecondbladeInstallation": "1.33",
		"ThirdbladeInstallation": "2.17",
		"GrandTotal": "7.91"
	},
	{
		"Location": "D06",
		"Installationoftower": "1.58",
		"Installationofnacelle": "1",
		"FirstbladeInstallation": "1.1600000000000001",
		"SecondbladeInstallation": "1.58",
		"ThirdbladeInstallation": "2.67",
		"GrandTotal": "7.99"
	},
	{
		"Location": "D07",
		"Installationoftower": "2.08",
		"Installationofnacelle": "1.67",
		"FirstbladeInstallation": "2",
		"SecondbladeInstallation": "1.67",
		"ThirdbladeInstallation": "2.33",
		"GrandTotal": "9.75"
	},
	{
		"Location": "D08",
		"Installationoftower": "2.5",
		"Installationofnacelle": "1.42",
		"FirstbladeInstallation": "1.33",
		"SecondbladeInstallation": "1.5",
		"ThirdbladeInstallation": "2.33",
		"GrandTotal": "9.08"
	},
	{
		"Location": "E04",
		"Installationoftower": "1.58",
		"Installationofnacelle": "1.42",
		"FirstbladeInstallation": "1",
		"SecondbladeInstallation": "1.92",
		"ThirdbladeInstallation": "2.42",
		"GrandTotal": "8.34"
	},
	{
		"Location": "E05",
		"Installationoftower": "1.33",
		"Installationofnacelle": "1.4100000000000001",
		"FirstbladeInstallation": "1.08",
		"SecondbladeInstallation": "1.58",
		"ThirdbladeInstallation": "2.59",
		"GrandTotal": "7.99"
	},
	{
		"Location": "E06",
		"Installationoftower": "1.33",
		"Installationofnacelle": "1.83",
		"FirstbladeInstallation": "1.08",
		"SecondbladeInstallation": "1.75",
		"ThirdbladeInstallation": "2.58",
		"GrandTotal": "8.57"
	},
	{
		"Location": "E07",
		"Installationoftower": "1.58",
		"Installationofnacelle": "2.08",
		"FirstbladeInstallation": "1.25",
		"SecondbladeInstallation": "2",
		"ThirdbladeInstallation": "2.42",
		"GrandTotal": "9.33"
	},
	{
		"Location": "E08",
		"Installationoftower": "1.58",
		"Installationofnacelle": "1.92",
		"FirstbladeInstallation": "1.5",
		"SecondbladeInstallation": "1.92",
		"ThirdbladeInstallation": "1.83",
		"GrandTotal": "8.75"
	},
	{
		"Location": "E09",
		"Installationoftower": "3.33",
		"Installationofnacelle": "1.42",
		"FirstbladeInstallation": "1.08",
		"SecondbladeInstallation": "1.92",
		"ThirdbladeInstallation": "3.08",
		"GrandTotal": "10.83"
	},
	{
		"Location": "F04",
		"Installationoftower": "1.5",
		"Installationofnacelle": "1",
		"FirstbladeInstallation": "1.42",
		"SecondbladeInstallation": "1.67",
		"ThirdbladeInstallation": "2.67",
		"GrandTotal": "8.26"
	},
	{
		"Location": "F05",
		"Installationoftower": "1.42",
		"Installationofnacelle": "1.5",
		"FirstbladeInstallation": "1",
		"SecondbladeInstallation": "1.83",
		"ThirdbladeInstallation": "2.58",
		"GrandTotal": "8.33"
	},
	{
		"Location": "F06",
		"Installationoftower": "2.42",
		"Installationofnacelle": "1.58",
		"FirstbladeInstallation": "0.75",
		"SecondbladeInstallation": "1.58",
		"ThirdbladeInstallation": "2.25",
		"GrandTotal": "8.58"
	},
	{
		"Location": "F07",
		"Installationoftower": "1.42",
		"Installationofnacelle": "1.42",
		"FirstbladeInstallation": "1.08",
		"SecondbladeInstallation": "0.67",
		"ThirdbladeInstallation": "2.17",
		"GrandTotal": "6.76"
	},
	{
		"Location": "G03",
		"Installationoftower": "1.75",
		"Installationofnacelle": "1.17",
		"FirstbladeInstallation": "1.17",
		"SecondbladeInstallation": "2",
		"ThirdbladeInstallation": "2.33",
		"GrandTotal": "8.42"
	},
	{
		"Location": "G04",
		"Installationoftower": "2",
		"Installationofnacelle": "1.58",
		"FirstbladeInstallation": "1.25",
		"SecondbladeInstallation": "3.25",
		"ThirdbladeInstallation": "1.33",
		"GrandTotal": "9.41"
	},
	{
		"Location": "G05",
		"Installationoftower": "1.92",
		"Installationofnacelle": "1.08",
		"FirstbladeInstallation": "0.92",
		"SecondbladeInstallation": "1.75",
		"ThirdbladeInstallation": "2.17",
		"GrandTotal": "7.84"
	},
	{
		"Location": "G06",
		"Installationoftower": "3.42",
		"Installationofnacelle": "1.42",
		"FirstbladeInstallation": "1.17",
		"SecondbladeInstallation": "1.92",
		"ThirdbladeInstallation": "2.75",
		"GrandTotal": "10.68"
	},
	{
		"Location": "G07",
		"Installationoftower": "1.58",
		"Installationofnacelle": "2.42",
		"FirstbladeInstallation": "2",
		"SecondbladeInstallation": "1.83",
		"ThirdbladeInstallation": "3.08",
		"GrandTotal": "10.91"
	},
	{
		"Location": "H02",
		"Installationoftower": "1.33",
		"Installationofnacelle": "1.5",
		"FirstbladeInstallation": "2.5",
		"SecondbladeInstallation": "1.92",
		"ThirdbladeInstallation": "2.17",
		"GrandTotal": "9.42"
	},
	{
		"Location": "H03",
		"Installationoftower": "2.92",
		"Installationofnacelle": "1.5899999999999999",
		"FirstbladeInstallation": "1.17",
		"SecondbladeInstallation": "1.4100000000000001",
		"ThirdbladeInstallation": "2.25",
		"GrandTotal": "9.34"
	},
	{
		"Location": "H04",
		"Installationoftower": "2.41",
		"Installationofnacelle": "1.33",
		"FirstbladeInstallation": "0.92",
		"SecondbladeInstallation": "3.25",
		"ThirdbladeInstallation": "0.67",
		"GrandTotal": "8.58"
	},
	{
		"Location": "H05",
		"Installationoftower": "1.5",
		"Installationofnacelle": "1.83",
		"FirstbladeInstallation": "1.17",
		"SecondbladeInstallation": "1.75",
		"ThirdbladeInstallation": "2.42",
		"GrandTotal": "8.67"
	},
	{
		"Location": "H06",
		"Installationoftower": "1",
		"Installationofnacelle": "1.58",
		"FirstbladeInstallation": "1.25",
		"SecondbladeInstallation": "1.42",
		"ThirdbladeInstallation": "1.92",
		"GrandTotal": "7.17"
	},
	{
		"Location": "H07",
		"Installationoftower": "1.42",
		"Installationofnacelle": "1.75",
		"FirstbladeInstallation": "1.08",
		"SecondbladeInstallation": "1.67",
		"ThirdbladeInstallation": "3.42",
		"GrandTotal": "9.34"
	},
	{
		"Location": "J01",
		"Installationoftower": "1.08",
		"Installationofnacelle": "1.75",
		"FirstbladeInstallation": "1.42",
		"SecondbladeInstallation": "1.67",
		"ThirdbladeInstallation": "2.25",
		"GrandTotal": "8.17"
	},
	{
		"Location": "J02",
		"Installationoftower": "1",
		"Installationofnacelle": "1.42",
		"FirstbladeInstallation": "0.83",
		"SecondbladeInstallation": "1.67",
		"ThirdbladeInstallation": "2.33",
		"GrandTotal": "7.25"
	},
	{
		"Location": "J03",
		"Installationoftower": "1.67",
		"Installationofnacelle": "1.75",
		"FirstbladeInstallation": "1.92",
		"SecondbladeInstallation": "1.83",
		"ThirdbladeInstallation": "3",
		"GrandTotal": "10.17"
	},
	{
		"Location": "J04",
		"Installationoftower": "1.42",
		"Installationofnacelle": "1.33",
		"FirstbladeInstallation": "1.42",
		"SecondbladeInstallation": "1.5",
		"ThirdbladeInstallation": "2.08",
		"GrandTotal": "7.75"
	},
	{
		"Location": "J05",
		"Installationoftower": "1.67",
		"Installationofnacelle": "1.75",
		"FirstbladeInstallation": "1",
		"SecondbladeInstallation": "4",
		"ThirdbladeInstallation": "1.25",
		"GrandTotal": "9.67"
	},
	{
		"Location": "J06",
		"Installationoftower": "1.9100000000000001",
		"Installationofnacelle": "2.42",
		"FirstbladeInstallation": "0.92",
		"SecondbladeInstallation": "2",
		"ThirdbladeInstallation": "3.08",
		"GrandTotal": "10.33"
	},
	{
		"Location": "K01",
		"Installationoftower": "2",
		"Installationofnacelle": "2",
		"FirstbladeInstallation": "1.17",
		"SecondbladeInstallation": "0.92",
		"ThirdbladeInstallation": "2.75",
		"GrandTotal": "8.84"
	},
	{
		"Location": "K02",
		"Installationoftower": "1.5",
		"Installationofnacelle": "2.25",
		"FirstbladeInstallation": "0.92",
		"SecondbladeInstallation": "2.33",
		"ThirdbladeInstallation": "2.42",
		"GrandTotal": "9.42"
	},
	{
		"Location": "K03",
		"Installationoftower": "2.75",
		"Installationofnacelle": "2.33",
		"FirstbladeInstallation": "1.5",
		"SecondbladeInstallation": "1.75",
		"ThirdbladeInstallation": "3.42",
		"GrandTotal": "11.75"
	},
	{
		"Location": "K04",
		"Installationoftower": "2.33",
		"Installationofnacelle": "1.67",
		"FirstbladeInstallation": "1.5",
		"SecondbladeInstallation": "1.5",
		"ThirdbladeInstallation": "3.08",
		"GrandTotal": "10.08"
	},
	{
		"Location": "K05",
		"Installationoftower": "2.25",
		"Installationofnacelle": "1.75",
		"FirstbladeInstallation": "0.92",
		"SecondbladeInstallation": "2",
		"ThirdbladeInstallation": "2.75",
		"GrandTotal": "9.67"
	},
	{
		"Location": "K06",
		"Installationoftower": "2.92",
		"Installationofnacelle": "2.67",
		"FirstbladeInstallation": "1",
		"SecondbladeInstallation": "2.5",
		"ThirdbladeInstallation": "2.75",
		"GrandTotal": "11.84"
	},
	{
		"Location": "K07",
		"Installationoftower": "1.58",
		"Installationofnacelle": "1.83",
		"FirstbladeInstallation": "0.75",
		"SecondbladeInstallation": "2.5",
		"ThirdbladeInstallation": "2.75",
		"GrandTotal": "9.41"
	},
	{
		"Location": "L01",
		"Installationoftower": "1.58",
		"Installationofnacelle": "1.92",
		"FirstbladeInstallation": "1.08",
		"SecondbladeInstallation": "3.42",
		"ThirdbladeInstallation": "4",
		"GrandTotal": "12"
	},
	{
		"Location": "L02",
		"Installationoftower": "2.75",
		"Installationofnacelle": "1.92",
		"FirstbladeInstallation": "1.17",
		"SecondbladeInstallation": "1.92",
		"ThirdbladeInstallation": "2.5",
		"GrandTotal": "10.26"
	},
	{
		"Location": "L03",
		"Installationoftower": "2.75",
		"Installationofnacelle": "3.75",
		"FirstbladeInstallation": "1.67",
		"SecondbladeInstallation": "3.83",
		"ThirdbladeInstallation": "3.25",
		"GrandTotal": "15.25"
	},
	{
		"Location": "L04",
		"Installationoftower": "1.25",
		"Installationofnacelle": "1.5",
		"FirstbladeInstallation": "1",
		"SecondbladeInstallation": "1.4100000000000001",
		"ThirdbladeInstallation": "1.83",
		"GrandTotal": "6.99"
	},
	{
		"Location": "L05",
		"Installationoftower": "1.42",
		"Installationofnacelle": "1.25",
		"FirstbladeInstallation": "0.75",
		"SecondbladeInstallation": "1.42",
		"ThirdbladeInstallation": "2.25",
		"GrandTotal": "7.09"
	},
	{
		"Location": "L06",
		"Installationoftower": "1.33",
		"Installationofnacelle": "1.75",
		"FirstbladeInstallation": "1",
		"SecondbladeInstallation": "1.42",
		"ThirdbladeInstallation": "2.25",
		"GrandTotal": "7.75"
	},
	{
		"Location": "L07",
		"Installationoftower": "1.92",
		"Installationofnacelle": "2.42",
		"FirstbladeInstallation": "1.59",
		"SecondbladeInstallation": "2.25",
		"ThirdbladeInstallation": "3.42",
		"GrandTotal": "11.6"
	},
	{
		"Location": "M01",
		"Installationoftower": "1.58",
		"Installationofnacelle": "2.67",
		"FirstbladeInstallation": "2.17",
		"SecondbladeInstallation": "1.25",
		"ThirdbladeInstallation": "6",
		"GrandTotal": "13.67"
	},
	{
		"Location": "M02",
		"Installationoftower": "2.25",
		"Installationofnacelle": "1.92",
		"FirstbladeInstallation": "2.58",
		"SecondbladeInstallation": "3.99",
		"ThirdbladeInstallation": "2.25",
		"GrandTotal": "12.99"
	},
	{
		"Location": "M03",
		"Installationoftower": "2.83",
		"Installationofnacelle": "3.92",
		"FirstbladeInstallation": "1.75",
		"SecondbladeInstallation": "2.59",
		"ThirdbladeInstallation": "3.83",
		"GrandTotal": "14.92"
	},
	{
		"Location": "M04",
		"Installationoftower": "1.83",
		"Installationofnacelle": "1.5",
		"FirstbladeInstallation": "1.08",
		"SecondbladeInstallation": "1.42",
		"ThirdbladeInstallation": "2.75",
		"GrandTotal": "8.58"
	},
	{
		"Location": "M05",
		"Installationoftower": "1.92",
		"Installationofnacelle": "1.5",
		"FirstbladeInstallation": "1.33",
		"SecondbladeInstallation": "1.5",
		"ThirdbladeInstallation": "2.42",
		"GrandTotal": "8.67"
	},
	{
		"Location": "M06",
		"Installationoftower": "1.75",
		"Installationofnacelle": "1.75",
		"FirstbladeInstallation": "1.08",
		"SecondbladeInstallation": "1.25",
		"ThirdbladeInstallation": "2.25",
		"GrandTotal": "8.08"
	},
	{
		"Location": "N01",
		"Installationoftower": "1.75",
		"Installationofnacelle": "3.25",
		"FirstbladeInstallation": "2.42",
		"SecondbladeInstallation": "1.92",
		"ThirdbladeInstallation": "2.75",
		"GrandTotal": "12.09"
	},
	{
		"Location": "N02",
		"Installationoftower": "1.92",
		"Installationofnacelle": "1.5",
		"FirstbladeInstallation": "0.83",
		"SecondbladeInstallation": "0.83",
		"ThirdbladeInstallation": "2",
		"GrandTotal": "7.08"
	},
	{
		"Location": "P01",
		"Installationoftower": "2.17",
		"Installationofnacelle": "2",
		"FirstbladeInstallation": "0.83",
		"SecondbladeInstallation": "2.08",
		"ThirdbladeInstallation": "3",
		"GrandTotal": "10.08"
	},
	{
		"Location": "P02",
		"Installationoftower": "3.83",
		"Installationofnacelle": "2.75",
		"FirstbladeInstallation": "1.58",
		"SecondbladeInstallation": "3.25",
		"ThirdbladeInstallation": "3.17",
		"GrandTotal": "14.58"
	},
	{
		"Location": "R01",
		"Installationoftower": "3.33",
		"Installationofnacelle": "2.75",
		"FirstbladeInstallation": "2.08",
		"SecondbladeInstallation": "2.33",
		"ThirdbladeInstallation": "2.66",
		"GrandTotal": "13.15"
	},
	{
		"Location": "S01",
		"Installationoftower": "1.67",
		"Installationofnacelle": "1.75",
		"FirstbladeInstallation": "0.67",
		"SecondbladeInstallation": "1.58",
		"ThirdbladeInstallation": "2.5",
		"GrandTotal": "8.17"
	},
	{
		"Location": ""
	}
]