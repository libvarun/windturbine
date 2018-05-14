function getMinMaxDate() {
    fixTimetable();
    var min = Number.MAX_SAFE_INTEGER;
    var max = 0
    timetable.forEach(function (entry) {
        if (entry.MP.getTime() < min) min = entry.MP.getTime();
        if (entry.MP.getTime() > max) max = entry.MP.getTime();

        if (entry.TP.getTime() < min) min = entry.TP.getTime();
        if (entry.TP.getTime() > max) max = entry.TP.getTime();

        if (entry.WTG.getTime() < min) min = entry.WTG.getTime();
        if (entry.WTG.getTime() > max) max = entry.WTG.getTime();

        if (entry.COM.getTime() < min) min = entry.COM.getTime();
        if (entry.COM.getTime() > max) max = entry.COM.getTime();
    })

    return { max: max, min: min };
}

function fixTimetable() {
    // fix timetable dates, once
    if (timetable.length > 0 && timetable[0].MP == undefined) {
        timetable.forEach(function (entry) {
            addDate(entry, "MP-completion date", "MP");
            addDate(entry, "TP-completion date", "TP");
            addDate(entry, "WTG-completion date", "WTG");
            addDate(entry, "COM-completion date", "COM");
        })
    }
}

function addDate(entry, source, destination) {
    var mp_s = entry[source];
    var mp = moment(mp_s, 'DD/MM/YYYY HH:mm').toDate();
    entry[destination] = mp;
}

function getByLocation(location) {
    for (var i = 0; i < timetable.length; i++)
        if (timetable[i].Location === location)
            return timetable[i];
}

// from XLS/CSV to JSON using https://www.csvjson.com/csv2json
var timetable = [
    {
        "Location": "M04",
        "MP-sequence": 1,
        "MP-completion date": "29/06/16 22:33",
        "TP-sequence": 75,
        "TP-completion date": "12/12/16 15:25",
        "ARR-sequence": 33,
        "ARR-completion date": "05/04/17 20:07",
        "WTG-sequence": 28,
        "WTG-completion date": "15/07/17 21:25",
        "COM-sequence": 20,
        "COM-completion date": "05/08/17 18:00"
    },
    {
        "Location": "M05",
        "MP-sequence": 2,
        "MP-completion date": "01/07/16 16:20",
        "TP-sequence": 76,
        "TP-completion date": "13/12/16 08:40",
        "ARR-sequence": 27,
        "ARR-completion date": "31/03/17 17:25",
        "WTG-sequence": 29,
        "WTG-completion date": "21/07/17 09:40",
        "COM-sequence": 24,
        "COM-completion date": "10/08/17 18:00"
    },
    {
        "Location": "N02",
        "MP-sequence": 3,
        "MP-completion date": "02/07/16 13:50",
        "TP-sequence": 82,
        "TP-completion date": "28/12/16 18:19",
        "ARR-sequence": 25,
        "ARR-completion date": "28/03/17 23:59",
        "WTG-sequence": 31,
        "WTG-completion date": "24/07/17 05:15",
        "COM-sequence": 26,
        "COM-completion date": "14/08/17 18:00"
    },
    {
        "Location": "A01",
        "MP-sequence": 4,
        "MP-completion date": "03/07/16 12:30",
        "TP-sequence": 80,
        "TP-completion date": "19/12/16 04:38",
        "ARR-sequence": 71,
        "ARR-completion date": "11/05/17 20:19",
        "WTG-sequence": 71,
        "WTG-completion date": "24/10/17 11:05",
        "COM-sequence": 68,
        "COM-completion date": "11/11/17 18:00"
    },
    {
        "Location": "J06",
        "MP-sequence": 5,
        "MP-completion date": "05/07/16 03:50",
        "TP-sequence": 84,
        "TP-completion date": "31/12/16 05:20",
        "ARR-sequence": 20,
        "ARR-completion date": "25/03/17 22:11",
        "WTG-sequence": 14,
        "WTG-completion date": "13/06/17 23:40",
        "COM-sequence": 14,
        "COM-completion date": "24/07/17 02:40"
    },
    {
        "Location": "J05",
        "MP-sequence": 6,
        "MP-completion date": "05/07/16 19:40",
        "TP-sequence": 83,
        "TP-completion date": "29/12/16 11:18",
        "ARR-sequence": 19,
        "ARR-completion date": "25/03/17 03:00",
        "WTG-sequence": 24,
        "WTG-completion date": "06/07/17 11:00",
        "COM-sequence": 23,
        "COM-completion date": "09/08/17 19:00"
    },
    {
        "Location": "M06",
        "MP-sequence": 7,
        "MP-completion date": "06/07/16 13:00",
        "TP-sequence": 81,
        "TP-completion date": "21/12/16 23:19",
        "ARR-sequence": 26,
        "ARR-completion date": "31/03/17 03:15",
        "WTG-sequence": 46,
        "WTG-completion date": "26/08/17 02:50",
        "COM-sequence": 56,
        "COM-completion date": "11/10/17 18:00"
    },
    {
        "Location": "H06",
        "MP-sequence": 8,
        "MP-completion date": "07/07/16 05:05",
        "TP-sequence": 79,
        "TP-completion date": "18/12/16 06:11",
        "ARR-sequence": 28,
        "ARR-completion date": "01/04/17 14:36",
        "WTG-sequence": 64,
        "WTG-completion date": "03/10/17 21:25",
        "COM-sequence": 62,
        "COM-completion date": "26/10/17 18:00"
    },
    {
        "Location": "K01",
        "MP-sequence": 9,
        "MP-completion date": "09/07/16 17:06",
        "TP-sequence": 1,
        "TP-completion date": "09/07/16 23:59",
        "ARR-sequence": 3,
        "ARR-completion date": "07/09/16 14:40",
        "WTG-sequence": 26,
        "WTG-completion date": "12/07/17 22:30",
        "COM-sequence": 17,
        "COM-completion date": "31/07/17 01:40"
    },
    {
        "Location": "K02",
        "MP-sequence": 10,
        "MP-completion date": "10/07/16 13:03",
        "TP-sequence": 2,
        "TP-completion date": "10/07/16 17:37",
        "ARR-sequence": 2,
        "ARR-completion date": "06/09/16 21:20",
        "WTG-sequence": 18,
        "WTG-completion date": "23/06/17 17:40",
        "COM-sequence": 9,
        "COM-completion date": "09/07/17 20:00"
    },
    {
        "Location": "J03",
        "MP-sequence": 11,
        "MP-completion date": "11/07/16 16:33",
        "TP-sequence": 3,
        "TP-completion date": "11/07/16 19:58",
        "ARR-sequence": 1,
        "ARR-completion date": "05/09/16 07:39",
        "WTG-sequence": 9,
        "WTG-completion date": "30/05/17 17:10",
        "COM-sequence": 6,
        "COM-completion date": "23/06/17 00:10"
    },
    {
        "Location": "L01",
        "MP-sequence": 12,
        "MP-completion date": "12/07/16 11:00",
        "TP-sequence": 4,
        "TP-completion date": "12/07/16 14:17",
        "ARR-sequence": 4,
        "ARR-completion date": "08/09/16 15:55",
        "WTG-sequence": 4,
        "WTG-completion date": "15/05/17 22:45",
        "COM-sequence": 1,
        "COM-completion date": "08/06/17 19:00"
    },
    {
        "Location": "P02",
        "MP-sequence": 13,
        "MP-completion date": "14/07/16 04:12",
        "TP-sequence": 5,
        "TP-completion date": "14/07/16 09:07",
        "ARR-sequence": 14,
        "ARR-completion date": "19/09/16 20:34",
        "WTG-sequence": 2,
        "WTG-completion date": "11/05/17 16:30",
        "COM-sequence": 5,
        "COM-completion date": "20/06/17 18:00"
    },
    {
        "Location": "M02",
        "MP-sequence": 14,
        "MP-completion date": "14/07/16 22:03",
        "TP-sequence": 6,
        "TP-completion date": "15/07/16 01:18",
        "ARR-sequence": 9,
        "ARR-completion date": "14/09/16 09:35",
        "WTG-sequence": 13,
        "WTG-completion date": "11/06/17 15:30",
        "COM-sequence": 19,
        "COM-completion date": "31/07/17 01:40"
    },
    {
        "Location": "N01",
        "MP-sequence": 15,
        "MP-completion date": "15/07/16 11:30",
        "TP-sequence": 7,
        "TP-completion date": "15/07/16 14:58",
        "ARR-sequence": 10,
        "ARR-completion date": "14/09/16 19:44",
        "WTG-sequence": 3,
        "WTG-completion date": "13/05/17 04:40",
        "COM-sequence": 22,
        "COM-completion date": "07/08/17 18:00"
    },
    {
        "Location": "R01",
        "MP-sequence": 16,
        "MP-completion date": "16/07/16 07:40",
        "TP-sequence": 8,
        "TP-completion date": "16/07/16 10:55",
        "ARR-sequence": 16,
        "ARR-completion date": "21/09/16 06:10",
        "WTG-sequence": 5,
        "WTG-completion date": "21/05/17 09:45",
        "COM-sequence": 3,
        "COM-completion date": "12/06/17 19:00"
    },
    {
        "Location": "L02",
        "MP-sequence": 17,
        "MP-completion date": "18/07/16 02:36",
        "TP-sequence": 9,
        "TP-completion date": "18/07/16 06:43",
        "ARR-sequence": 5,
        "ARR-completion date": "09/09/16 12:45",
        "WTG-sequence": 11,
        "WTG-completion date": "02/06/17 21:40",
        "COM-sequence": 7,
        "COM-completion date": "30/06/17 18:00"
    },
    {
        "Location": "M01",
        "MP-sequence": 18,
        "MP-completion date": "18/07/16 21:26",
        "TP-sequence": 10,
        "TP-completion date": "19/07/16 00:55",
        "ARR-sequence": 6,
        "ARR-completion date": "10/09/16 15:20",
        "WTG-sequence": 6,
        "WTG-completion date": "23/05/17 00:30",
        "COM-sequence": 8,
        "COM-completion date": "30/06/17 18:00"
    },
    {
        "Location": "P01",
        "MP-sequence": 19,
        "MP-completion date": "21/07/16 09:45",
        "TP-sequence": 11,
        "TP-completion date": "21/07/16 13:38",
        "ARR-sequence": 8,
        "ARR-completion date": "13/09/16 19:45",
        "WTG-sequence": 17,
        "WTG-completion date": "21/06/17 23:00",
        "COM-sequence": 63,
        "COM-completion date": "28/10/17 18:00"
    },
    {
        "Location": "M03",
        "MP-sequence": 20,
        "MP-completion date": "23/07/16 17:35",
        "TP-sequence": 12,
        "TP-completion date": "23/07/16 21:35",
        "ARR-sequence": 12,
        "ARR-completion date": "18/09/16 20:00",
        "WTG-sequence": 1,
        "WTG-completion date": "09/05/17 15:10",
        "COM-sequence": 2,
        "COM-completion date": "08/06/17 19:00"
    },
    {
        "Location": "L03",
        "MP-sequence": 21,
        "MP-completion date": "24/07/16 11:55",
        "TP-sequence": 13,
        "TP-completion date": "24/07/16 15:40",
        "ARR-sequence": 13,
        "ARR-completion date": "19/09/16 08:30",
        "WTG-sequence": 10,
        "WTG-completion date": "01/06/17 16:55",
        "COM-sequence": 4,
        "COM-completion date": "14/06/17 20:00"
    },
    {
        "Location": "K04",
        "MP-sequence": 22,
        "MP-completion date": "25/07/16 07:36",
        "TP-sequence": 14,
        "TP-completion date": "25/07/16 11:06",
        "ARR-sequence": 11,
        "ARR-completion date": "15/09/16 23:10",
        "WTG-sequence": 8,
        "WTG-completion date": "25/05/17 22:10",
        "COM-sequence": 18,
        "COM-completion date": "31/07/17 01:40"
    },
    {
        "Location": "K03",
        "MP-sequence": 23,
        "MP-completion date": "26/07/16 01:22",
        "TP-sequence": 15,
        "TP-completion date": "26/07/16 04:56",
        "ARR-sequence": 7,
        "ARR-completion date": "11/09/16 08:00",
        "WTG-sequence": 7,
        "WTG-completion date": "24/05/17 08:30",
        "COM-sequence": 11,
        "COM-completion date": "16/07/17 18:00"
    },
    {
        "Location": "K05",
        "MP-sequence": 24,
        "MP-completion date": "29/07/16 18:55",
        "TP-sequence": 16,
        "TP-completion date": "29/07/16 22:25",
        "ARR-sequence": 15,
        "ARR-completion date": "20/09/16 14:10",
        "WTG-sequence": 16,
        "WTG-completion date": "17/06/17 00:30",
        "COM-sequence": 38,
        "COM-completion date": "15/09/17 09:40"
    },
    {
        "Location": "L05",
        "MP-sequence": 25,
        "MP-completion date": "30/07/16 14:46",
        "TP-sequence": 17,
        "TP-completion date": "30/07/16 19:00",
        "ARR-sequence": 21,
        "ARR-completion date": "26/03/17 12:46",
        "WTG-sequence": 40,
        "WTG-completion date": "12/08/17 20:25",
        "COM-sequence": 27,
        "COM-completion date": "05/09/17 05:30"
    },
    {
        "Location": "L06",
        "MP-sequence": 26,
        "MP-completion date": "31/07/16 08:22",
        "TP-sequence": 18,
        "TP-completion date": "31/07/16 12:00",
        "ARR-sequence": 17,
        "ARR-completion date": "22/09/16 00:42",
        "WTG-sequence": 35,
        "WTG-completion date": "01/08/17 21:10",
        "COM-sequence": 28,
        "COM-completion date": "05/09/17 05:30"
    },
    {
        "Location": "H05",
        "MP-sequence": 27,
        "MP-completion date": "01/08/16 03:15",
        "TP-sequence": 19,
        "TP-completion date": "01/08/16 06:42",
        "ARR-sequence": 34,
        "ARR-completion date": "06/04/17 10:30",
        "WTG-sequence": 36,
        "WTG-completion date": "05/08/17 01:30",
        "COM-sequence": 29,
        "COM-completion date": "05/09/17 20:00"
    },
    {
        "Location": "B04",
        "MP-sequence": 28,
        "MP-completion date": "03/08/16 01:42",
        "TP-sequence": 20,
        "TP-completion date": "03/08/16 05:15",
        "ARR-sequence": 67,
        "ARR-completion date": "09/05/17 14:10",
        "WTG-sequence": 65,
        "WTG-completion date": "08/10/17 11:15",
        "COM-sequence": 71,
        "COM-completion date": "17/11/17 18:00"
    },
    {
        "Location": "C01",
        "MP-sequence": 29,
        "MP-completion date": "03/08/16 19:40",
        "TP-sequence": 21,
        "TP-completion date": "03/08/16 23:00",
        "ARR-sequence": 75,
        "ARR-completion date": "13/05/17 11:54",
        "WTG-sequence": 89,
        "WTG-completion date": "15/12/17 01:50",
        "COM-sequence": 87,
        "COM-completion date": "03/01/18 18:00"
    },
    {
        "Location": "D02",
        "MP-sequence": 30,
        "MP-completion date": "04/08/16 21:40",
        "TP-sequence": 22,
        "TP-completion date": "05/08/16 01:20",
        "ARR-sequence": 74,
        "ARR-completion date": "12/05/17 23:15",
        "WTG-sequence": 73,
        "WTG-completion date": "31/10/17 21:15",
        "COM-sequence": 70,
        "COM-completion date": "15/11/17 18:00"
    },
    {
        "Location": "E01",
        "MP-sequence": 31,
        "MP-completion date": "05/08/16 20:40",
        "TP-sequence": 23,
        "TP-completion date": "06/08/16 00:15",
        "ARR-sequence": 77,
        "ARR-completion date": "14/05/17 10:00",
        "WTG-sequence": 67,
        "WTG-completion date": "13/10/17 00:00",
        "COM-sequence": 64,
        "COM-completion date": "29/10/17 18:00"
    },
    {
        "Location": "D01",
        "MP-sequence": 32,
        "MP-completion date": "08/08/16 01:48",
        "TP-sequence": 24,
        "TP-completion date": "08/08/16 14:52",
        "ARR-sequence": 66,
        "ARR-completion date": "06/05/17 23:56",
        "WTG-sequence": 72,
        "WTG-completion date": "25/10/17 21:40",
        "COM-sequence": 69,
        "COM-completion date": "12/11/17 19:00"
    },
    {
        "Location": "E03",
        "MP-sequence": 33,
        "MP-completion date": "09/08/16 03:50",
        "TP-sequence": 25,
        "TP-completion date": "09/08/16 07:25",
        "ARR-sequence": 88,
        "ARR-completion date": "21/05/17 07:00",
        "WTG-sequence": 58,
        "WTG-completion date": "22/09/17 22:40",
        "COM-sequence": 54,
        "COM-completion date": "10/10/17 18:00"
    },
    {
        "Location": "D03",
        "MP-sequence": 34,
        "MP-completion date": "10/08/16 00:30",
        "TP-sequence": 26,
        "TP-completion date": "10/08/16 04:08",
        "ARR-sequence": 76,
        "ARR-completion date": "13/05/17 23:11",
        "WTG-sequence": 70,
        "WTG-completion date": "20/10/17 16:20",
        "COM-sequence": 72,
        "COM-completion date": "20/11/17 18:00"
    },
    {
        "Location": "A02",
        "MP-sequence": 35,
        "MP-completion date": "10/08/16 16:36",
        "TP-sequence": 27,
        "TP-completion date": "10/08/16 20:26",
        "ARR-sequence": 78,
        "ARR-completion date": "15/05/17 19:50",
        "WTG-sequence": 81,
        "WTG-completion date": "21/11/17 03:55",
        "COM-sequence": 79,
        "COM-completion date": "12/12/17 18:00"
    },
    {
        "Location": "B03",
        "MP-sequence": 36,
        "MP-completion date": "13/08/16 22:00",
        "TP-sequence": 28,
        "TP-completion date": "14/08/16 01:16",
        "ARR-sequence": 70,
        "ARR-completion date": "11/05/17 08:55",
        "WTG-sequence": 66,
        "WTG-completion date": "10/10/17 11:25",
        "COM-sequence": 61,
        "COM-completion date": "26/10/17 18:00"
    },
    {
        "Location": "D04",
        "MP-sequence": 37,
        "MP-completion date": "14/08/16 18:12",
        "TP-sequence": 29,
        "TP-completion date": "14/08/16 21:40",
        "ARR-sequence": 82,
        "ARR-completion date": "18/05/17 04:25",
        "WTG-sequence": 68,
        "WTG-completion date": "15/10/17 03:45",
        "COM-sequence": 66,
        "COM-completion date": "03/11/17 18:00"
    },
    {
        "Location": "A04",
        "MP-sequence": 38,
        "MP-completion date": "15/08/16 06:28",
        "TP-sequence": 30,
        "TP-completion date": "15/08/16 10:19",
        "ARR-sequence": 68,
        "ARR-completion date": "09/05/17 23:59",
        "WTG-sequence": 88,
        "WTG-completion date": "12/12/17 14:00",
        "COM-sequence": 84,
        "COM-completion date": "01/01/18 18:00"
    },
    {
        "Location": "A03",
        "MP-sequence": 39,
        "MP-completion date": "15/08/16 22:20",
        "TP-sequence": 31,
        "TP-completion date": "16/08/16 01:51",
        "ARR-sequence": 69,
        "ARR-completion date": "10/05/17 21:18",
        "WTG-sequence": 74,
        "WTG-completion date": "03/11/17 04:25",
        "COM-sequence": 73,
        "COM-completion date": "26/11/17 18:00"
    },
    {
        "Location": "F07",
        "MP-sequence": 40,
        "MP-completion date": "17/08/16 19:20",
        "TP-sequence": 32,
        "TP-completion date": "17/08/16 23:08",
        "ARR-sequence": 39,
        "ARR-completion date": "09/04/17 00:18",
        "WTG-sequence": 34,
        "WTG-completion date": "31/07/17 15:00",
        "COM-sequence": 49,
        "COM-completion date": "05/10/17 18:00"
    },
    {
        "Location": "G07",
        "MP-sequence": 41,
        "MP-completion date": "18/08/16 08:37",
        "TP-sequence": 33,
        "TP-completion date": "18/08/16 12:08",
        "ARR-sequence": 30,
        "ARR-completion date": "03/04/17 14:00",
        "WTG-sequence": 12,
        "WTG-completion date": "04/06/17 06:35",
        "COM-sequence": 33,
        "COM-completion date": "05/09/17 20:10"
    },
    {
        "Location": "K07",
        "MP-sequence": 42,
        "MP-completion date": "18/08/16 23:29",
        "TP-sequence": 34,
        "TP-completion date": "19/08/16 03:22",
        "ARR-sequence": 23,
        "ARR-completion date": "27/03/17 10:00",
        "WTG-sequence": 19,
        "WTG-completion date": "25/06/17 01:40",
        "COM-sequence": 10,
        "COM-completion date": "12/07/17 18:00"
    },
    {
        "Location": "G06",
        "MP-sequence": 43,
        "MP-completion date": "19/08/16 20:59",
        "TP-sequence": 35,
        "TP-completion date": "20/08/16 00:36",
        "ARR-sequence": 37,
        "ARR-completion date": "08/04/17 01:03",
        "WTG-sequence": 27,
        "WTG-completion date": "14/07/17 09:00",
        "COM-sequence": 44,
        "COM-completion date": "22/09/17 18:00"
    },
    {
        "Location": "E09",
        "MP-sequence": 44,
        "MP-completion date": "25/08/16 12:32",
        "TP-sequence": 36,
        "TP-completion date": "25/08/16 17:05",
        "ARR-sequence": 40,
        "ARR-completion date": "09/04/17 11:19",
        "WTG-sequence": 21,
        "WTG-completion date": "01/07/17 21:05",
        "COM-sequence": 25,
        "COM-completion date": "14/08/17 18:00"
    },
    {
        "Location": "J01",
        "MP-sequence": 45,
        "MP-completion date": "26/08/16 05:52",
        "TP-sequence": 37,
        "TP-completion date": "26/08/16 09:23",
        "ARR-sequence": 44,
        "ARR-completion date": "12/04/17 01:18",
        "WTG-sequence": 33,
        "WTG-completion date": "30/07/17 05:15",
        "COM-sequence": 30,
        "COM-completion date": "05/09/17 20:00"
    },
    {
        "Location": "J02",
        "MP-sequence": 46,
        "MP-completion date": "27/08/16 15:28",
        "TP-sequence": 38,
        "TP-completion date": "27/08/16 19:35",
        "ARR-sequence": 43,
        "ARR-completion date": "11/04/17 11:06",
        "WTG-sequence": 45,
        "WTG-completion date": "24/08/17 12:15",
        "COM-sequence": 36,
        "COM-completion date": "14/09/17 20:30"
    },
    {
        "Location": "G05",
        "MP-sequence": 47,
        "MP-completion date": "28/08/16 09:47",
        "TP-sequence": 39,
        "TP-completion date": "28/08/16 14:48",
        "ARR-sequence": 35,
        "ARR-completion date": "06/04/17 20:36",
        "WTG-sequence": 30,
        "WTG-completion date": "22/07/17 22:45",
        "COM-sequence": 65,
        "COM-completion date": "30/10/17 18:00"
    },
    {
        "Location": "H02",
        "MP-sequence": 48,
        "MP-completion date": "31/08/16 22:18",
        "TP-sequence": 40,
        "TP-completion date": "01/09/16 02:15",
        "ARR-sequence": 85,
        "ARR-completion date": "19/05/17 23:20",
        "WTG-sequence": 78,
        "WTG-completion date": "13/11/17 21:30",
        "COM-sequence": 77,
        "COM-completion date": "05/12/17 18:00"
    },
    {
        "Location": "H01",
        "MP-sequence": 49,
        "MP-completion date": "01/09/16 16:30",
        "TP-sequence": 41,
        "TP-completion date": "01/09/16 20:30",
        "ARR-sequence": 84,
        "ARR-completion date": "18/05/17 23:50",
        "WTG-sequence": 80,
        "WTG-completion date": "16/11/17 12:30",
        "COM-sequence": 80,
        "COM-completion date": "20/12/17 18:00"
    },
    {
        "Location": "G01",
        "MP-sequence": 50,
        "MP-completion date": "02/09/16 06:40",
        "TP-sequence": 42,
        "TP-completion date": "02/09/16 10:35",
        "ARR-sequence": 89,
        "ARR-completion date": "21/05/17 18:15",
        "WTG-sequence": 55,
        "WTG-completion date": "15/09/17 05:15",
        "COM-sequence": 53,
        "COM-completion date": "09/10/17 18:00"
    },
    {
        "Location": "E08",
        "MP-sequence": 51,
        "MP-completion date": "02/09/16 22:02",
        "TP-sequence": 43,
        "TP-completion date": "03/09/16 01:55",
        "ARR-sequence": 38,
        "ARR-completion date": "08/04/17 10:00",
        "WTG-sequence": 38,
        "WTG-completion date": "10/08/17 14:45",
        "COM-sequence": 31,
        "COM-completion date": "05/09/17 20:10"
    },
    {
        "Location": "C08",
        "MP-sequence": 52,
        "MP-completion date": "07/09/16 09:43",
        "TP-sequence": 44,
        "TP-completion date": "07/09/16 13:30",
        "ARR-sequence": 51,
        "ARR-completion date": "19/04/17 03:55",
        "WTG-sequence": 54,
        "WTG-completion date": "10/09/17 10:35",
        "COM-sequence": 50,
        "COM-completion date": "06/10/17 18:00"
    },
    {
        "Location": "G02",
        "MP-sequence": 53,
        "MP-completion date": "08/09/16 00:40",
        "TP-sequence": 45,
        "TP-completion date": "08/09/16 06:40",
        "ARR-sequence": 61,
        "ARR-completion date": "28/04/17 03:41",
        "WTG-sequence": 59,
        "WTG-completion date": "23/09/17 20:45",
        "COM-sequence": 57,
        "COM-completion date": "13/10/17 18:00"
    },
    {
        "Location": "E06",
        "MP-sequence": 54,
        "MP-completion date": "08/09/16 18:59",
        "TP-sequence": 46,
        "TP-completion date": "08/09/16 23:00",
        "ARR-sequence": 49,
        "ARR-completion date": "17/04/17 03:30",
        "WTG-sequence": 63,
        "WTG-completion date": "01/10/17 04:30",
        "COM-sequence": 58,
        "COM-completion date": "16/10/17 18:30"
    },
    {
        "Location": "B07",
        "MP-sequence": 55,
        "MP-completion date": "09/09/16 08:25",
        "TP-sequence": 47,
        "TP-completion date": "09/09/16 12:30",
        "ARR-sequence": 60,
        "ARR-completion date": "24/04/17 08:24",
        "WTG-sequence": 84,
        "WTG-completion date": "02/12/17 15:20",
        "COM-sequence": 90,
        "COM-completion date": "09/01/18 18:00"
    },
    {
        "Location": "D08",
        "MP-sequence": 56,
        "MP-completion date": "14/09/16 12:50",
        "TP-sequence": 48,
        "TP-completion date": "14/09/16 17:45",
        "ARR-sequence": 50,
        "ARR-completion date": "17/04/17 12:42",
        "WTG-sequence": 49,
        "WTG-completion date": "31/08/17 15:00",
        "COM-sequence": 40,
        "COM-completion date": "20/09/17 18:00"
    },
    {
        "Location": "K06",
        "MP-sequence": 57,
        "MP-completion date": "15/09/16 06:45",
        "TP-sequence": 49,
        "TP-completion date": "15/09/16 11:40",
        "ARR-sequence": 22,
        "ARR-completion date": "27/03/17 00:35",
        "WTG-sequence": 23,
        "WTG-completion date": "04/07/17 14:00",
        "COM-sequence": 15,
        "COM-completion date": "25/07/17 01:40"
    },
    {
        "Location": "E04",
        "MP-sequence": 58,
        "MP-completion date": "16/09/16 07:08",
        "TP-sequence": 50,
        "TP-completion date": "16/09/16 11:20",
        "ARR-sequence": 54,
        "ARR-completion date": "21/04/17 02:55",
        "WTG-sequence": 42,
        "WTG-completion date": "17/08/17 01:00",
        "COM-sequence": 35,
        "COM-completion date": "08/09/17 02:50"
    },
    {
        "Location": "D07",
        "MP-sequence": 59,
        "MP-completion date": "22/09/16 15:35",
        "TP-sequence": 74,
        "TP-completion date": "09/12/16 07:00",
        "ARR-sequence": 58,
        "ARR-completion date": "23/04/17 08:42",
        "WTG-sequence": 44,
        "WTG-completion date": "20/08/17 15:45",
        "COM-sequence": 39,
        "COM-completion date": "15/09/17 13:35"
    },
    {
        "Location": "H07",
        "MP-sequence": 60,
        "MP-completion date": "30/09/16 15:33",
        "TP-sequence": 51,
        "TP-completion date": "30/09/16 22:13",
        "ARR-sequence": 29,
        "ARR-completion date": "02/04/17 10:10",
        "WTG-sequence": 48,
        "WTG-completion date": "28/08/17 09:55",
        "COM-sequence": 37,
        "COM-completion date": "15/09/17 04:45"
    },
    {
        "Location": "E05",
        "MP-sequence": 61,
        "MP-completion date": "01/10/16 07:48",
        "TP-sequence": 52,
        "TP-completion date": "01/10/16 13:00",
        "ARR-sequence": 48,
        "ARR-completion date": "16/04/17 14:18",
        "WTG-sequence": 47,
        "WTG-completion date": "27/08/17 05:00",
        "COM-sequence": 41,
        "COM-completion date": "20/09/17 18:00"
    },
    {
        "Location": "H04",
        "MP-sequence": 62,
        "MP-completion date": "02/10/16 00:22",
        "TP-sequence": 53,
        "TP-completion date": "02/10/16 05:40",
        "ARR-sequence": 52,
        "ARR-completion date": "19/04/17 18:00",
        "WTG-sequence": 25,
        "WTG-completion date": "10/07/17 02:10",
        "COM-sequence": 16,
        "COM-completion date": "26/07/17 01:40"
    },
    {
        "Location": "E07",
        "MP-sequence": 63,
        "MP-completion date": "03/10/16 17:06",
        "TP-sequence": 54,
        "TP-completion date": "03/10/16 20:34",
        "ARR-sequence": 47,
        "ARR-completion date": "15/04/17 01:42",
        "WTG-sequence": 56,
        "WTG-completion date": "16/09/17 21:50",
        "COM-sequence": 51,
        "COM-completion date": "08/10/17 18:00"
    },
    {
        "Location": "C05",
        "MP-sequence": 64,
        "MP-completion date": "06/10/16 12:53",
        "TP-sequence": 88,
        "TP-completion date": "19/01/17 18:07",
        "ARR-sequence": 65,
        "ARR-completion date": "02/05/17 14:00",
        "WTG-sequence": 51,
        "WTG-completion date": "03/09/17 01:05",
        "COM-sequence": 46,
        "COM-completion date": "28/09/17 18:00"
    },
    {
        "Location": "B02",
        "MP-sequence": 65,
        "MP-completion date": "07/10/16 10:15",
        "TP-sequence": 90,
        "TP-completion date": "18/05/17 10:30",
        "ARR-sequence": 90,
        "ARR-completion date": "22/05/17 06:00",
        "WTG-sequence": 90,
        "WTG-completion date": "17/12/17 00:30",
        "COM-sequence": 89,
        "COM-completion date": "09/01/18 18:00"
    },
    {
        "Location": "C02",
        "MP-sequence": 66,
        "MP-completion date": "08/10/16 13:18",
        "TP-sequence": 87,
        "TP-completion date": "18/01/17 22:52",
        "ARR-sequence": 73,
        "ARR-completion date": "12/05/17 13:48",
        "WTG-sequence": 75,
        "WTG-completion date": "04/11/17 10:35",
        "COM-sequence": 78,
        "COM-completion date": "11/12/17 18:00"
    },
    {
        "Location": "C03",
        "MP-sequence": 67,
        "MP-completion date": "10/10/16 06:14",
        "TP-sequence": 91,
        "TP-completion date": "20/05/17 15:30",
        "ARR-sequence": 91,
        "ARR-completion date": "22/05/17 16:00",
        "WTG-sequence": 91,
        "WTG-completion date": "18/12/17 10:00",
        "COM-sequence": 91,
        "COM-completion date": "13/01/18 18:00"
    },
    {
        "Location": "B01",
        "MP-sequence": 68,
        "MP-completion date": "13/10/16 05:14",
        "TP-sequence": 55,
        "TP-completion date": "13/10/16 09:25",
        "ARR-sequence": 72,
        "ARR-completion date": "12/05/17 05:05",
        "WTG-sequence": 76,
        "WTG-completion date": "06/11/17 10:10",
        "COM-sequence": 74,
        "COM-completion date": "27/11/17 18:00"
    },
    {
        "Location": "F02",
        "MP-sequence": 69,
        "MP-completion date": "14/10/16 23:49",
        "TP-sequence": 56,
        "TP-completion date": "15/10/16 04:00",
        "ARR-sequence": 55,
        "ARR-completion date": "21/04/17 13:30",
        "WTG-sequence": 41,
        "WTG-completion date": "16/08/17 02:05",
        "COM-sequence": 34,
        "COM-completion date": "06/09/17 18:05"
    },
    {
        "Location": "F03",
        "MP-sequence": 70,
        "MP-completion date": "15/10/16 14:57",
        "TP-sequence": 57,
        "TP-completion date": "15/10/16 18:49",
        "ARR-sequence": 45,
        "ARR-completion date": "12/04/17 17:50",
        "WTG-sequence": 43,
        "WTG-completion date": "18/08/17 05:30",
        "COM-sequence": 42,
        "COM-completion date": "20/09/17 18:00"
    },
    {
        "Location": "F04",
        "MP-sequence": 71,
        "MP-completion date": "16/10/16 06:55",
        "TP-sequence": 58,
        "TP-completion date": "16/10/16 10:50",
        "ARR-sequence": 46,
        "ARR-completion date": "14/04/17 15:36",
        "WTG-sequence": 50,
        "WTG-completion date": "01/09/17 22:55",
        "COM-sequence": 43,
        "COM-completion date": "20/09/17 18:00"
    },
    {
        "Location": "F05",
        "MP-sequence": 72,
        "MP-completion date": "20/10/16 08:56",
        "TP-sequence": 59,
        "TP-completion date": "20/10/16 12:40",
        "ARR-sequence": 41,
        "ARR-completion date": "10/04/17 04:24",
        "WTG-sequence": 37,
        "WTG-completion date": "08/08/17 12:00",
        "COM-sequence": 45,
        "COM-completion date": "23/09/17 19:40"
    },
    {
        "Location": "G04",
        "MP-sequence": 73,
        "MP-completion date": "21/10/16 19:32",
        "TP-sequence": 60,
        "TP-completion date": "21/10/16 22:55",
        "ARR-sequence": 42,
        "ARR-completion date": "10/04/17 21:42",
        "WTG-sequence": 22,
        "WTG-completion date": "03/07/17 00:10",
        "COM-sequence": 12,
        "COM-completion date": "24/07/17 02:40"
    },
    {
        "Location": "F06",
        "MP-sequence": 74,
        "MP-completion date": "22/10/16 12:42",
        "TP-sequence": 61,
        "TP-completion date": "22/10/16 16:19",
        "ARR-sequence": 36,
        "ARR-completion date": "07/04/17 08:24",
        "WTG-sequence": 39,
        "WTG-completion date": "11/08/17 16:50",
        "COM-sequence": 32,
        "COM-completion date": "05/09/17 20:10"
    },
    {
        "Location": "G03",
        "MP-sequence": 75,
        "MP-completion date": "23/10/16 04:05",
        "TP-sequence": 62,
        "TP-completion date": "23/10/16 07:35",
        "ARR-sequence": 86,
        "ARR-completion date": "20/05/17 07:05",
        "WTG-sequence": 77,
        "WTG-completion date": "10/11/17 01:40",
        "COM-sequence": 76,
        "COM-completion date": "01/12/17 18:00"
    },
    {
        "Location": "L07",
        "MP-sequence": 76,
        "MP-completion date": "26/10/16 07:40",
        "TP-sequence": 63,
        "TP-completion date": "26/10/16 11:25",
        "ARR-sequence": 24,
        "ARR-completion date": "28/03/17 13:24",
        "WTG-sequence": 15,
        "WTG-completion date": "15/06/17 05:00",
        "COM-sequence": 21,
        "COM-completion date": "06/08/17 18:00"
    },
    {
        "Location": "H03",
        "MP-sequence": 77,
        "MP-completion date": "26/10/16 23:35",
        "TP-sequence": 64,
        "TP-completion date": "27/10/16 03:00",
        "ARR-sequence": 53,
        "ARR-completion date": "20/04/17 10:07",
        "WTG-sequence": 62,
        "WTG-completion date": "30/09/17 06:20",
        "COM-sequence": 59,
        "COM-completion date": "17/10/17 18:00"
    },
    {
        "Location": "J04",
        "MP-sequence": 78,
        "MP-completion date": "28/10/16 00:08",
        "TP-sequence": 65,
        "TP-completion date": "28/10/16 04:00",
        "ARR-sequence": 31,
        "ARR-completion date": "04/04/17 10:30",
        "WTG-sequence": 20,
        "WTG-completion date": "26/06/17 16:40",
        "COM-sequence": 13,
        "COM-completion date": "24/07/17 02:40"
    },
    {
        "Location": "L04",
        "MP-sequence": 79,
        "MP-completion date": "28/10/16 19:04",
        "TP-sequence": 89,
        "TP-completion date": "21/01/17 10:58",
        "ARR-sequence": 32,
        "ARR-completion date": "05/04/17 05:36",
        "WTG-sequence": 52,
        "WTG-completion date": "04/09/17 04:45",
        "COM-sequence": 48,
        "COM-completion date": "04/10/17 18:00"
    },
    {
        "Location": "D06",
        "MP-sequence": 80,
        "MP-completion date": "30/10/16 18:51",
        "TP-sequence": 66,
        "TP-completion date": "30/10/16 22:48",
        "ARR-sequence": 87,
        "ARR-completion date": "20/05/17 16:12",
        "WTG-sequence": 69,
        "WTG-completion date": "19/10/17 08:30",
        "COM-sequence": 75,
        "COM-completion date": "27/11/17 19:00"
    },
    {
        "Location": "F01",
        "MP-sequence": 81,
        "MP-completion date": "31/10/16 08:05",
        "TP-sequence": 67,
        "TP-completion date": "31/10/16 11:32",
        "ARR-sequence": 83,
        "ARR-completion date": "18/05/17 14:40",
        "WTG-sequence": 85,
        "WTG-completion date": "03/12/17 13:20",
        "COM-sequence": 82,
        "COM-completion date": "25/12/17 18:00"
    },
    {
        "Location": "E02",
        "MP-sequence": 82,
        "MP-completion date": "31/10/16 21:49",
        "TP-sequence": 68,
        "TP-completion date": "01/11/16 01:24",
        "ARR-sequence": 81,
        "ARR-completion date": "17/05/17 06:45",
        "WTG-sequence": 83,
        "WTG-completion date": "25/11/17 03:10",
        "COM-sequence": 83,
        "COM-completion date": "28/12/17 19:00"
    },
    {
        "Location": "D05",
        "MP-sequence": 83,
        "MP-completion date": "01/11/16 14:33",
        "TP-sequence": 69,
        "TP-completion date": "01/11/16 17:55",
        "ARR-sequence": 80,
        "ARR-completion date": "16/05/17 20:50",
        "WTG-sequence": 87,
        "WTG-completion date": "05/12/17 12:30",
        "COM-sequence": 86,
        "COM-completion date": "01/01/18 18:00"
    },
    {
        "Location": "B05",
        "MP-sequence": 84,
        "MP-completion date": "08/11/16 05:52",
        "TP-sequence": 70,
        "TP-completion date": "08/11/16 10:23",
        "ARR-sequence": 59,
        "ARR-completion date": "23/04/17 21:30",
        "WTG-sequence": 61,
        "WTG-completion date": "28/09/17 11:10",
        "COM-sequence": 60,
        "COM-completion date": "23/10/17 18:00"
    },
    {
        "Location": "C04",
        "MP-sequence": 85,
        "MP-completion date": "08/11/16 20:55",
        "TP-sequence": 71,
        "TP-completion date": "09/11/16 00:15",
        "ARR-sequence": 79,
        "ARR-completion date": "16/05/17 11:48",
        "WTG-sequence": 82,
        "WTG-completion date": "24/11/17 10:20",
        "COM-sequence": 81,
        "COM-completion date": "23/12/17 18:00"
    },
    {
        "Location": "C06",
        "MP-sequence": 86,
        "MP-completion date": "09/11/16 08:37",
        "TP-sequence": 72,
        "TP-completion date": "09/11/16 12:04",
        "ARR-sequence": 56,
        "ARR-completion date": "22/04/17 01:24",
        "WTG-sequence": 57,
        "WTG-completion date": "21/09/17 19:30",
        "COM-sequence": 55,
        "COM-completion date": "11/10/17 18:00"
    },
    {
        "Location": "S01",
        "MP-sequence": 87,
        "MP-completion date": "10/11/16 00:22",
        "TP-sequence": 73,
        "TP-completion date": "10/11/16 04:25",
        "ARR-sequence": 18,
        "ARR-completion date": "22/03/17 11:53",
        "WTG-sequence": 32,
        "WTG-completion date": "26/07/17 05:00",
        "COM-sequence": 52,
        "COM-completion date": "08/10/17 18:00"
    },
    {
        "Location": "A06",
        "MP-sequence": 88,
        "MP-completion date": "12/11/16 22:20",
        "TP-sequence": 86,
        "TP-completion date": "10/01/17 14:49",
        "ARR-sequence": 63,
        "ARR-completion date": "29/04/17 11:06",
        "WTG-sequence": 53,
        "WTG-completion date": "09/09/17 12:45",
        "COM-sequence": 47,
        "COM-completion date": "04/10/17 18:00"
    },
    {
        "Location": "A05",
        "MP-sequence": 89,
        "MP-completion date": "13/11/16 06:34",
        "TP-sequence": 78,
        "TP-completion date": "15/12/16 20:50",
        "ARR-sequence": 64,
        "ARR-completion date": "29/04/17 23:50",
        "WTG-sequence": 60,
        "WTG-completion date": "25/09/17 02:20",
        "COM-sequence": 67,
        "COM-completion date": "03/11/17 19:00"
    },
    {
        "Location": "C07",
        "MP-sequence": 90,
        "MP-completion date": "13/11/16 17:02",
        "TP-sequence": 85,
        "TP-completion date": "10/01/17 00:25",
        "ARR-sequence": 57,
        "ARR-completion date": "22/04/17 09:42",
        "WTG-sequence": 79,
        "WTG-completion date": "15/11/17 02:50",
        "COM-sequence": 88,
        "COM-completion date": "07/01/18 18:00"
    },
    {
        "Location": "B06",
        "MP-sequence": 91,
        "MP-completion date": "14/11/16 07:18",
        "TP-sequence": 77,
        "TP-completion date": "15/12/16 05:55",
        "ARR-sequence": 62,
        "ARR-completion date": "28/04/17 19:02",
        "WTG-sequence": 86,
        "WTG-completion date": "04/12/17 13:50",
        "COM-sequence": 85,
        "COM-completion date": "01/01/18 18:00"
    }
]