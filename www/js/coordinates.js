function coordinateCenter() {
    var lat = 0;
    var long = 0;
    coordinates.forEach(function (coord) {
        lat += coord.Latitude;
        long += coord.Longitude;
    })

    return { Latitude: (lat / coordinates.length), Longitude: (long / coordinates.length) };
}

// from XLS/CSV to JSON using https://www.csvjson.com/csv2json
var coordinates = [
    {
        "Position": "A06",
        "Latitude": 53.29606,
        "Longitude": 0.771225
    },
    {
        "Position": "A05",
        "Latitude": 53.30361,
        "Longitude": 0.771711
    },
    {
        "Position": "A04",
        "Latitude": 53.311802,
        "Longitude": 0.772268
    },
    {
        "Position": "A03",
        "Latitude": 53.319426,
        "Longitude": 0.773207
    },
    {
        "Position": "A02",
        "Latitude": 53.326701,
        "Longitude": 0.773198
    },
    {
        "Position": "A01",
        "Latitude": 53.334111,
        "Longitude": 0.776257
    },
    {
        "Position": "B07",
        "Latitude": 53.28178,
        "Longitude": 0.781871
    },
    {
        "Position": "B06",
        "Latitude": 53.289399,
        "Longitude": 0.77915
    },
    {
        "Position": "B05",
        "Latitude": 53.296781,
        "Longitude": 0.783029
    },
    {
        "Position": "B04",
        "Latitude": 53.304216,
        "Longitude": 0.78446
    },
    {
        "Position": "B03",
        "Latitude": 53.311564,
        "Longitude": 0.783164
    },
    {
        "Position": "B02",
        "Latitude": 53.327351,
        "Longitude": 0.784553
    },
    {
        "Position": "B01",
        "Latitude": 53.33468,
        "Longitude": 0.788994
    },
    {
        "Position": "C08",
        "Latitude": 53.281438,
        "Longitude": 0.794895
    },
    {
        "Position": "C07",
        "Latitude": 53.288742,
        "Longitude": 0.794129
    },
    {
        "Position": "C06",
        "Latitude": 53.296087,
        "Longitude": 0.796061
    },
    {
        "Position": "C05",
        "Latitude": 53.304208,
        "Longitude": 0.796633
    },
    {
        "Position": "C04",
        "Latitude": 53.31185,
        "Longitude": 0.798612
    },
    {
        "Position": "C03",
        "Latitude": 53.320392,
        "Longitude": 0.80104
    },
    {
        "Position": "C02",
        "Latitude": 53.328856,
        "Longitude": 0.79688
    },
    {
        "Position": "C01",
        "Latitude": 53.335001,
        "Longitude": 0.803908
    },
    {
        "Position": "D08",
        "Latitude": 53.276663,
        "Longitude": 0.804156
    },
    {
        "Position": "D07",
        "Latitude": 53.284227,
        "Longitude": 0.807669
    },
    {
        "Position": "D05",
        "Latitude": 53.309592,
        "Longitude": 0.813664
    },
    {
        "Position": "D04",
        "Latitude": 53.318757,
        "Longitude": 0.814847
    },
    {
        "Position": "D02",
        "Latitude": 53.328453,
        "Longitude": 0.811108
    },
    {
        "Position": "D01",
        "Latitude": 53.335009,
        "Longitude": 0.818568
    },
    {
        "Position": "E09",
        "Latitude": 53.248261,
        "Longitude": 0.815635
    },
    {
        "Position": "E08",
        "Latitude": 53.256724,
        "Longitude": 0.816003
    },
    {
        "Position": "E07",
        "Latitude": 53.263925,
        "Longitude": 0.817945
    },
    {
        "Position": "E06",
        "Latitude": 53.27058,
        "Longitude": 0.812841
    },
    {
        "Position": "E05",
        "Latitude": 53.277935,
        "Longitude": 0.818071
    },
    {
        "Position": "E04",
        "Latitude": 53.286479,
        "Longitude": 0.820666
    },
    {
        "Position": "E03",
        "Latitude": 53.294486,
        "Longitude": 0.821444
    },
    {
        "Position": "D06",
        "Latitude": 53.301449,
        "Longitude": 0.812835
    },
    {
        "Position": "E02",
        "Latitude": 53.30573,
        "Longitude": 0.827656
    },
    {
        "Position": "E01",
        "Latitude": 53.315238,
        "Longitude": 0.826933
    },
    {
        "Position": "D03",
        "Latitude": 53.325066,
        "Longitude": 0.82307
    },
    {
        "Position": "F07",
        "Latitude": 53.244151,
        "Longitude": 0.826146
    },
    {
        "Position": "F06",
        "Latitude": 53.252436,
        "Longitude": 0.826415
    },
    {
        "Position": "F05",
        "Latitude": 53.259126,
        "Longitude": 0.832343
    },
    {
        "Position": "F04",
        "Latitude": 53.267752,
        "Longitude": 0.832072
    },
    {
        "Position": "F03",
        "Latitude": 53.275176,
        "Longitude": 0.831951
    },
    {
        "Position": "F02",
        "Latitude": 53.282627,
        "Longitude": 0.831319
    },
    {
        "Position": "F01",
        "Latitude": 53.299073,
        "Longitude": 0.834372
    },
    {
        "Position": "G07",
        "Latitude": 53.239115,
        "Longitude": 0.841927
    },
    {
        "Position": "G06",
        "Latitude": 53.246736,
        "Longitude": 0.83976
    },
    {
        "Position": "G05",
        "Latitude": 53.254315,
        "Longitude": 0.843696
    },
    {
        "Position": "G04",
        "Latitude": 53.263516,
        "Longitude": 0.843878
    },
    {
        "Position": "G03",
        "Latitude": 53.271921,
        "Longitude": 0.844324
    },
    {
        "Position": "G02",
        "Latitude": 53.280522,
        "Longitude": 0.844642
    },
    {
        "Position": "G01",
        "Latitude": 53.289039,
        "Longitude": 0.844258
    },
    {
        "Position": "H07",
        "Latitude": 53.234907,
        "Longitude": 0.854367
    },
    {
        "Position": "H06",
        "Latitude": 53.242506,
        "Longitude": 0.854452
    },
    {
        "Position": "H05",
        "Latitude": 53.250345,
        "Longitude": 0.854359
    },
    {
        "Position": "H04",
        "Latitude": 53.258814,
        "Longitude": 0.85338
    },
    {
        "Position": "H03",
        "Latitude": 53.267868,
        "Longitude": 0.856376
    },
    {
        "Position": "H02",
        "Latitude": 53.277301,
        "Longitude": 0.856459
    },
    {
        "Position": "H01",
        "Latitude": 53.284997,
        "Longitude": 0.856478
    },
    {
        "Position": "J06",
        "Latitude": 53.230628,
        "Longitude": 0.867917
    },
    {
        "Position": "J05",
        "Latitude": 53.237975,
        "Longitude": 0.865963
    },
    {
        "Position": "J04",
        "Latitude": 53.246563,
        "Longitude": 0.865565
    },
    {
        "Position": "J03",
        "Latitude": 53.264594,
        "Longitude": 0.868836
    },
    {
        "Position": "J02",
        "Latitude": 53.273018,
        "Longitude": 0.867307
    },
    {
        "Position": "J01",
        "Latitude": 53.28086,
        "Longitude": 0.868447
    },
    {
        "Position": "K07",
        "Latitude": 53.22714,
        "Longitude": 0.879027
    },
    {
        "Position": "K06",
        "Latitude": 53.235235,
        "Longitude": 0.877683
    },
    {
        "Position": "K05",
        "Latitude": 53.243651,
        "Longitude": 0.877221
    },
    {
        "Position": "K04",
        "Latitude": 53.253015,
        "Longitude": 0.881015
    },
    {
        "Position": "K03",
        "Latitude": 53.260475,
        "Longitude": 0.879882
    },
    {
        "Position": "K02",
        "Latitude": 53.269262,
        "Longitude": 0.878532
    },
    {
        "Position": "K01",
        "Latitude": 53.278212,
        "Longitude": 0.879748
    },
    {
        "Position": "L07",
        "Latitude": 53.223154,
        "Longitude": 0.890984
    },
    {
        "Position": "L06",
        "Latitude": 53.23233,
        "Longitude": 0.889245
    },
    {
        "Position": "L05",
        "Latitude": 53.239505,
        "Longitude": 0.891304
    },
    {
        "Position": "L04",
        "Latitude": 53.247355,
        "Longitude": 0.888835
    },
    {
        "Position": "L03",
        "Latitude": 53.254232,
        "Longitude": 0.893878
    },
    {
        "Position": "L02",
        "Latitude": 53.266399,
        "Longitude": 0.889936
    },
    {
        "Position": "L01",
        "Latitude": 53.274552,
        "Longitude": 0.891077
    },
    {
        "Position": "M06",
        "Latitude": 53.227964,
        "Longitude": 0.900637
    },
    {
        "Position": "M05",
        "Latitude": 53.234723,
        "Longitude": 0.90618
    },
    {
        "Position": "M04",
        "Latitude": 53.244464,
        "Longitude": 0.900248
    },
    {
        "Position": "M03",
        "Latitude": 53.25103,
        "Longitude": 0.907077
    },
    {
        "Position": "M02",
        "Latitude": 53.262025,
        "Longitude": 0.899853
    },
    {
        "Position": "M01",
        "Latitude": 53.269636,
        "Longitude": 0.904219
    },
    {
        "Position": "N02",
        "Latitude": 53.241436,
        "Longitude": 0.912641
    },
    {
        "Position": "P02",
        "Latitude": 53.24883,
        "Longitude": 0.919522
    },
    {
        "Position": "N01",
        "Latitude": 53.258699,
        "Longitude": 0.911156
    },
    {
        "Position": "P01",
        "Latitude": 53.265892,
        "Longitude": 0.917343
    },
    {
        "Position": "R01",
        "Latitude": 53.25542,
        "Longitude": 0.924704
    },
    {
        "Position": "S01",
        "Latitude": 53.261608,
        "Longitude": 0.931002
    }
]