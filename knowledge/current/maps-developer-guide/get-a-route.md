---
title: "Get a Route"
domain: maps-developer-guide
topic: get-a-route
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:53.812Z
estimatedTokens: 521
keywords: [Route, getRoute, Apex, two, waypoints, mode, transportation, travel, time, depends, appears, Salesforce, Maps, users, requested]
---

# Get a Route

> The getRoute() Apex method
      returns a route between two or more waypoints for the specified mode of transportation.
    The travel time depends on the mode of transportation. The route appears in Salesforce Maps for
    the users who requested the route, such as a delivery truck driver and the admin. This method
    doesn’t optimize the route. Instead, it finds a route between the waypoints in entered sequence.

# Get a Route

The getRoute() Apex method returns a route between two or more waypoints for the specified mode of transportation. The travel time depends on the mode of transportation. The route appears in Salesforce Maps for the users who requested the route, such as a delivery truck driver and the admin. This method doesn’t optimize the route. Instead, it finds a route between the waypoints in entered sequence.

## Signature

```

```

Where,

-   maps is the namespace that's available after you install Salesforce Maps.
-   API is the class that contains the global methods exposed to developers.
-   getRoute() is the method.

## Sample Code

This code finds a route for someone driving a car from one grocery store to another.

![Warning](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_warning.png&folder=maps_developer_guide)

#### Warning

If you invoke methods within a flow, process builder, or trigger, avoid uncommitted work errors when you perform one of the following.

-   Call the methods through a future method
-   Call the methods as queueable

Uncommitted work errors can also arise if calling out to Salesforce Maps methods more than one time in a single transaction and the Salesforce Maps token hasn’t refreshed in the last 24 hours. If these errors occur, separate each callout into individual transactions.

Different processes refresh the token, such as plotting a route or schedule. The refresh process is almost immediate after each qualifying action occurs.

**Input Format of the Request JSON String**

The input format supports standard and custom drive profiles. If your drivers require routes optimized for vehicles other than standard cars, [create a custom drive profile](https://help.salesforce.com/s/articleView?id=000389632&type=1&language=en_US "HTML (New Window)") first, and then add it to your driveProfile string.

```

```

**Example**

```

```

## Sample Response

Although the return value is an Apex Map<String, Object> object, this JSON response illustrates the essential data you receive in the resulting map.

```

```

## Code Examples

```apex
Map<String, Object> maps.API.getRoute(String requestJSON)
```

```
{
driveProfile: 'string' // Mode of transportation. Standard profile values are 'car' and 'bicycle'. For a custom profile, specify its record ID.
waypoints: [ {id:String, lat:Decimal, lng:Decimal, id:String}, ... ] // List of waypoints
hideGeoJSON: boolean // Optional. If set to true, the GeoJSON is excluded from the response
}
```

```apex
// Create a list of waypoints.
List<Map<String,Object>> waypoints = new List<Map<String,Object>>();
waypoints.add(new Map<String,Object>{
    'lat' => 33.917760,
    'lng' => -84.379750,
    'id' => 'groceryNorth'
});

waypoints.add(new Map<String,Object>{
    'lat' => 33.840630,
    'lng' => -84.381920,
    'id' => 'grocerySouth'
});

// Build the request.
Map<String,Object> request = new Map<String,Object>();
request.put('waypoints',waypoints);
request.put('driveProfile','car'); // For a custom drive profile, replace 'car' with the ID of your custom drive profile.
request.put('hideGeoJSON', true); // Optional. Add only if removing the GeoJSON from the response
String routeRequest = JSON.serialize(request);

// Call the getRoute() method with the waypoints and mode of transportation.
Map<String,Object> response = maps.API.getRoute(routeRequest);

// Log the resulting route.
system.debug(response);
```

```
{
  "profile": {
    "width": null,
    "weightPerAxle": null,
    "weight": null,
    "type": "car",
    "trailers": null,
    "length": null,
    "height": null,
    "hazmat": null,
    "axles": null
  },
  "request": {
    "profile": {
      "type": "car"
    },
    "timebased": false,
    "waypoints": [
      {
        "id": "groceryNorth",
        "lat": 33.91776,
        "lng": -84.37975
      },
      {
        "id": "grocerySouth",
        "lat": 33.84063,
        "lng": -84.38192
      }
    ]
  },
  "response": {
    "success": true,
    "geojson": {
      "features": [
        {
          "geometry": {
            "coordinates": [
              [
                [
                  -84.37935,
                  33.91775
                ],
                [
                  -84.37935,
                  33.91744
                ],
                [
                  -84.37913,
                  33.91743
                ],
                [
                  -84.37915,
                  33.91725
                ],
                [
                  -84.37916,
                  33.91717
                ],
                [
                  -84.37916,
                  33.91704
                ],
                [
                  -84.37916,
                  33.91698
                ],
                [
                  -84.37919,
                  33.91667
                ],
                [
                  -84.37919,
                  33.91661
                ],
                [
                  -84.37922,
                  33.91622
                ],
                [
                  -84.37923,
                  33.91609
                ],
                [
                  -84.37925,
                  33.91601
                ],
                [
                  -84.37925,
                  33.91592
                ],
                [
                  -84.37928,
                  33.91574
                ],
                [
                  -84.37929,
                  33.91558
                ],
                [
                  -84.37932,
                  33.91503
                ],
                [
                  -84.37932,
                  33.9148
                ],
                [
                  -84.37932,
                  33.91461
                ],
                [
                  -84.37929,
                  33.91418
                ],
                [
                  -84.37928,
                  33.914
                ],
                [
                  -84.37925,
                  33.91384
                ],
                [
                  -84.37925,
                  33.91371
                ],
                [
                  -84.37923,
                  33.91363
                ],
                [
                  -84.37922,
                  33.91348
                ],
                [
                  -84.37921,
                  33.91323
                ],
                [
                  -84.37913,
                  33.91276
                ],
                [
                  -84.37907,
                  33.91231
                ],
                [
                  -84.37905,
                  33.91212
                ],
                [
                  -84.379,
                  33.91167
                ],
                [
                  -84.37886,
                  33.9116
                ],
                [
                  -84.37871,
                  33.91157
                ],
                [
                  -84.37852,
                  33.91157
                ],
                [
                  -84.37777,
                  33.91165
                ],
                [
                  -84.37728,
                  33.9117
                ],
                [
                  -84.37643,
                  33.91176
                ],
                [
                  -84.3761,
                  33.91178
                ],
                [
                  -84.37571,
                  33.91176
                ],
                [
                  -84.37529,
                  33.91171
                ],
                [
                  -84.37417,
                  33.91152
                ],
                [
                  -84.37369,
                  33.91144
                ],
                [
                  -84.37343,
                  33.91139
                ],
                [
                  -84.37324,
                  33.91136
                ],
                [
                  -84.37313,
                  33.91139
                ],
                [
                  -84.37292,
                  33.91144
                ],
                [
                  -84.37153,
                  33.91117
                ],
                [
                  -84.37092,
                  33.91107
                ],
                [
                  -84.36998,
                  33.91088
                ],
                [
                  -84.36943,
                  33.91078
                ],
                [
                  -84.36906,
                  33.91072
                ],
                [
                  -84.36879,
                  33.91067
                ],
                [
                  -84.36782,
                  33.91049
                ],
                [
                  -84.3675,
                  33.91043
                ],
                [
                  -84.36641,
                  33.91025
                ],
                [
                  -84.36613,
                  33.91019
                ],
                [
                  -84.36534,
                  33.91009
                ],
                [
                  -84.3648,
                  33.91004
                ],
                [
                  -84.36428,
                  33.90999
                ],
                [
                  -84.36374,
                  33.90998
                ],
                [
                  -84.36349,
                  33.90999
                ],
                [
                  -84.36326,
                  33.91001
                ],
                [
                  -84.3631,
                  33.90993
                ],
                [
                  -84.363,
                  33.90993
                ],
                [
                  -84.36278,
                  33.90993
                ],
                [
                  -84.36248,
                  33.90994
                ],
                [
                  -84.36225,
                  33.90996
                ],
                [
                  -84.36181,
                  33.90999
                ],
                [
                  -84.36171,
                  33.90999
                ],
                [
                  -84.36162,
                  33.91001
                ],
                [
                  -84.36152,
                  33.91001
                ],
                [
                  -84.36094,
                  33.91006
                ],
                [
                  -84.36046,
                  33.91007
                ],
                [
                  -84.36024,
                  33.91007
                ],
                [
                  -84.36004,
                  33.91004
                ],
                [
                  -84.35985,
                  33.91001
                ],
                [
                  -84.35965,
                  33.90994
                ],
                [
                  -84.35949,
                  33.90987
                ],
                [
                  -84.35931,
                  33.90979
                ],
                [
                  -84.35917,
                  33.90969
                ],
                [
                  -84.35902,
                  33.90959
                ],
                [
                  -84.35888,
                  33.90948
                ],
                [
                  -84.35875,
                  33.90936
                ],
                [
                  -84.35862,
                  33.90923
                ],
                [
                  -84.3585,
                  33.90909
                ],
                [
                  -84.3584,
                  33.90894
                ],
                [
                  -84.3583,
                  33.90879
                ],
                [
                  -84.35821,
                  33.90864
                ],
                [
                  -84.35815,
                  33.90845
                ],
                [
                  -84.35811,
                  33.90829
                ],
                [
                  -84.35801,
                  33.90758
                ],
                [
                  -84.35801,
                  33.90731
                ],
                [
                  -84.35801,
                  33.90721
                ],
                [
                  -84.35804,
                  33.90692
                ],
                [
                  -84.3582,
                  33.90634
                ],
                [
                  -84.35837,
                  33.90592
                ],
                [
                  -84.35853,
                  33.90552
                ],
                [
                  -84.3586,
                  33.90531
                ],
                [
                  -84.35876,
                  33.90493
                ],
                [
                  -84.35901,
                  33.90441
                ],
                [
                  -84.35914,
                  33.90417
                ],
                [
                  -84.35968,
                  33.9032
                ],
                [
                  -84.35975,
                  33.90306
                ],
                [
                  -84.36027,
                  33.9022
                ],
                [
                  -84.3605,
                  33.9018
                ],
                [
                  -84.36052,
                  33.90177
                ],
                [
                  -84.36081,
                  33.9013
                ],
                [
                  -84.36122,
                  33.90061
                ],
                [
                  -84.36133,
                  33.90037
                ],
                [
                  -84.36168,
                  33.89976
                ],
                [
                  -84.36184,
                  33.89944
                ],
                [
                  -84.36229,
                  33.89863
                ],
                [
                  -84.36259,
                  33.89807
                ],
                [
                  -84.3631,
                  33.89714
                ],
                [
                  -84.36326,
                  33.89685
                ],
                [
                  -84.36332,
                  33.89672
                ],
                [
                  -84.36339,
                  33.8966
                ],
                [
                  -84.36342,
                  33.89638
                ],
                [
                  -84.36352,
                  33.89619
                ],
                [
                  -84.36358,
                  33.89611
                ],
                [
                  -84.36397,
                  33.89543
                ],
                [
                  -84.36422,
                  33.89503
                ],
                [
                  -84.36444,
                  33.89469
                ],
                [
                  -84.36448,
                  33.89459
                ],
                [
                  -84.36455,
                  33.89445
                ],
                [
                  -84.36457,
                  33.8944
                ],
                [
                  -84.36465,
                  33.89419
                ],
                [
                  -84.36476,
                  33.89395
                ],
                [
                  -84.36484,
                  33.89369
                ],
                [
                  -84.36493,
                  33.89344
                ],
                [
                  -84.365,
                  33.89318
                ],
                [
                  -84.36505,
                  33.89292
                ],
                [
                  -84.36507,
                  33.89273
                ],
                [
                  -84.36509,
                  33.89266
                ],
                [
                  -84.36516,
                  33.89215
                ],
                [
                  -84.36519,
                  33.89161
                ],
                [
                  -84.36519,
                  33.89109
                ],
                [
                  -84.36519,
                  33.8908
                ],
                [
                  -84.36518,
                  33.88977
                ],
                [
                  -84.36516,
                  33.8885
                ],
                [
                  -84.36513,
                  33.88722
                ],
                [
                  -84.36512,
                  33.88563
                ],
                [
                  -84.3651,
                  33.88468
                ],
                [
                  -84.36509,
                  33.8842
                ],
                [
                  -84.36509,
                  33.88399
                ],
                [
                  -84.36507,
                  33.88254
                ],
                [
                  -84.36507,
                  33.8813
                ],
                [
                  -84.36506,
                  33.88016
                ],
                [
                  -84.36507,
                  33.87937
                ],
                [
                  -84.36509,
                  33.87882
                ],
                [
                  -84.36509,
                  33.87847
                ],
                [
                  -84.36509,
                  33.8781
                ],
                [
                  -84.3651,
                  33.8773
                ],
                [
                  -84.36512,
                  33.87648
                ],
                [
                  -84.36507,
                  33.87545
                ],
                [
                  -84.36506,
                  33.87501
                ],
                [
                  -84.36506,
                  33.87478
                ],
                [
                  -84.36503,
                  33.87435
                ],
                [
                  -84.365,
                  33.87371
                ],
                [
                  -84.36497,
                  33.87306
                ],
                [
                  -84.36496,
                  33.87266
                ],
                [
                  -84.36497,
                  33.87221
                ],
                [
                  -84.36502,
                  33.87197
                ],
                [
                  -84.36506,
                  33.87173
                ],
                [
                  -84.36515,
                  33.87145
                ],
                [
                  -84.36522,
                  33.87123
                ],
                [
                  -84.36536,
                  33.87081
                ],
                [
                  -84.36547,
                  33.87061
                ],
                [
                  -84.36558,
                  33.87037
                ],
                [
                  -84.36586,
                  33.86994
                ],
                [
                  -84.36635,
                  33.86933
                ],
                [
                  -84.36654,
                  33.86912
                ],
                [
                  -84.36687,
                  33.86875
                ],
                [
                  -84.36741,
                  33.86815
                ],
                [
                  -84.36792,
                  33.86754
                ],
                [
                  -84.36809,
                  33.86734
                ],
                [
                  -84.36824,
                  33.86711
                ],
                [
                  -84.36838,
                  33.8669
                ],
                [
                  -84.3685,
                  33.86667
                ],
                [
                  -84.36863,
                  33.86645
                ],
                [
                  -84.36873,
                  33.8662
                ],
                [
                  -84.36882,
                  33.86597
                ],
                [
                  -84.36889,
                  33.86574
                ],
                [
                  -84.36895,
                  33.86548
                ],
                [
                  -84.36905,
                  33.86499
                ],
                [
                  -84.36912,
                  33.86447
                ],
                [
                  -84.36915,
                  33.8641
                ],
                [
                  -84.36925,
                  33.86289
                ],
                [
                  -84.36937,
                  33.86156
                ],
                [
                  -84.36947,
                  33.86029
                ],
                [
                  -84.3695,
                  33.85995
                ],
                [
                  -84.36954,
                  33.85932
                ],
                [
                  -84.36957,
                  33.85893
                ],
                [
                  -84.36966,
                  33.85792
                ],
                [
                  -84.36969,
                  33.85755
                ],
                [
                  -84.36969,
                  33.85752
                ],
                [
                  -84.36973,
                  33.85713
                ],
                [
                  -84.36976,
                  33.85673
                ],
                [
                  -84.3698,
                  33.85618
                ],
                [
                  -84.37002,
                  33.85525
                ],
                [
                  -84.37008,
                  33.85483
                ],
                [
                  -84.37017,
                  33.8543
                ],
                [
                  -84.37024,
                  33.85388
                ],
                [
                  -84.37027,
                  33.8533
                ],
                [
                  -84.37031,
                  33.85279
                ],
                [
                  -84.37031,
                  33.8525
                ],
                [
                  -84.37034,
                  33.85216
                ],
                [
                  -84.37037,
                  33.852
                ],
                [
                  -84.3704,
                  33.85192
                ],
                [
                  -84.37044,
                  33.85188
                ],
                [
                  -84.37056,
                  33.85179
                ],
                [
                  -84.37092,
                  33.85168
                ],
                [
                  -84.37121,
                  33.85156
                ],
                [
                  -84.37134,
                  33.85149
                ],
                [
                  -84.37149,
                  33.85138
                ],
                [
                  -84.37159,
                  33.85131
                ],
                [
                  -84.37169,
                  33.85124
                ],
                [
                  -84.37202,
                  33.85092
                ],
                [
                  -84.37233,
                  33.85063
                ],
                [
                  -84.37311,
                  33.84989
                ],
                [
                  -84.37313,
                  33.84986
                ],
                [
                  -84.37326,
                  33.84975
                ],
                [
                  -84.37347,
                  33.84954
                ],
                [
                  -84.37359,
                  33.84943
                ],
                [
                  -84.3739,
                  33.8491
                ],
                [
                  -84.37407,
                  33.84886
                ],
                [
                  -84.37419,
                  33.8487
                ],
                [
                  -84.3743,
                  33.84854
                ],
                [
                  -84.3741,
                  33.84846
                ],
                [
                  -84.37394,
                  33.84836
                ],
                [
                  -84.37388,
                  33.84833
                ],
                [
                  -84.37378,
                  33.84825
                ],
                [
                  -84.37369,
                  33.84817
                ],
                [
                  -84.37365,
                  33.84812
                ],
                [
                  -84.37362,
                  33.84805
                ],
                [
                  -84.37356,
                  33.84799
                ],
                [
                  -84.37345,
                  33.84783
                ],
                [
                  -84.37337,
                  33.84772
                ],
                [
                  -84.37334,
                  33.84765
                ],
                [
                  -84.3733,
                  33.84759
                ],
                [
                  -84.37329,
                  33.84754
                ],
                [
                  -84.37321,
                  33.8474
                ],
                [
                  -84.3731,
                  33.84715
                ],
                [
                  -84.373,
                  33.84695
                ],
                [
                  -84.37278,
                  33.84651
                ],
                [
                  -84.3726,
                  33.84615
                ],
                [
                  -84.3724,
                  33.84569
                ],
                [
                  -84.37233,
                  33.84556
                ],
                [
                  -84.37214,
                  33.84514
                ],
                [
                  -84.37204,
                  33.84495
                ],
                [
                  -84.37192,
                  33.84474
                ],
                [
                  -84.37188,
                  33.84466
                ],
                [
                  -84.37182,
                  33.84456
                ],
                [
                  -84.37166,
                  33.84423
                ],
                [
                  -84.37159,
                  33.84411
                ],
                [
                  -84.37141,
                  33.84379
                ],
                [
                  -84.37146,
                  33.84376
                ],
                [
                  -84.37188,
                  33.84352
                ],
                [
                  -84.37208,
                  33.84339
                ],
                [
                  -84.37224,
                  33.84329
                ],
                [
                  -84.37233,
                  33.84323
                ],
                [
                  -84.37249,
                  33.84312
                ],
                [
                  -84.37259,
                  33.84304
                ],
                [
                  -84.37285,
                  33.84283
                ],
                [
                  -84.37297,
                  33.84275
                ],
                [
                  -84.37304,
                  33.8427
                ],
                [
                  -84.37317,
                  33.8426
                ],
                [
                  -84.37329,
                  33.84252
                ],
                [
                  -84.37343,
                  33.84241
                ],
                [
                  -84.37359,
                  33.84228
                ],
                [
                  -84.37368,
                  33.84223
                ],
                [
                  -84.37414,
                  33.84191
                ],
                [
                  -84.37424,
                  33.84186
                ],
                [
                  -84.3744,
                  33.84175
                ],
                [
                  -84.37449,
                  33.8417
                ],
                [
                  -84.37468,
                  33.84157
                ],
                [
                  -84.37481,
                  33.84149
                ],
                [
                  -84.37507,
                  33.84135
                ],
                [
                  -84.37526,
                  33.84123
                ],
                [
                  -84.37533,
                  33.8412
                ],
                [
                  -84.37562,
                  33.84106
                ],
                [
                  -84.37603,
                  33.84086
                ],
                [
                  -84.37609,
                  33.84083
                ],
                [
                  -84.37616,
                  33.8408
                ],
                [
                  -84.37646,
                  33.84066
                ],
                [
                  -84.37684,
                  33.84051
                ],
                [
                  -84.377,
                  33.84043
                ],
                [
                  -84.3772,
                  33.84038
                ],
                [
                  -84.37736,
                  33.84035
                ],
                [
                  -84.37742,
                  33.84035
                ],
                [
                  -84.37755,
                  33.84033
                ],
                [
                  -84.37771,
                  33.84032
                ],
                [
                  -84.37793,
                  33.84032
                ],
                [
                  -84.37809,
                  33.84032
                ],
                [
                  -84.37828,
                  33.8403
                ],
                [
                  -84.37842,
                  33.84025
                ],
                [
                  -84.37861,
                  33.84022
                ],
                [
                  -84.37878,
                  33.84011
                ],
                [
                  -84.37899,
                  33.84001
                ],
                [
                  -84.37912,
                  33.83993
                ],
                [
                  -84.37921,
                  33.83988
                ],
                [
                  -84.37947,
                  33.8397
                ],
                [
                  -84.37987,
                  33.83941
                ],
                [
                  -84.38009,
                  33.83946
                ],
                [
                  -84.38039,
                  33.83954
                ],
                [
                  -84.38063,
                  33.83963
                ],
                [
                  -84.38074,
                  33.83969
                ],
                [
                  -84.38082,
                  33.83972
                ],
                [
                  -84.38111,
                  33.83983
                ],
                [
                  -84.38116,
                  33.83987
                ],
                [
                  -84.38131,
                  33.83995
                ],
                [
                  -84.38141,
                  33.84001
                ],
                [
                  -84.38169,
                  33.84014
                ],
                [
                  -84.38176,
                  33.84017
                ],
                [
                  -84.38192,
                  33.84025
                ],
                [
                  -84.38183,
                  33.84043
                ],
                [
                  -84.38199,
                  33.84051
                ],
                [
                  -84.38196,
                  33.84063
                ]
              ]
            ],
            "type": "LineString"
          },
          "properties": {},
          "type": "Feature"
        }
      ],
      "type": "FeatureCollection"
    },
    "waypoints": [
      {
        "maneuvers": [],
        "departuretime": 1619794087,
        "start": 1619794087,
        "arrivaltime": 1619794087,
        "idletime": 0,
        "totaltraveltime": 945,
        "nontraffictime": 798,
        "traffictime": 147,
        "distance": 9274,
        "duration": 0,
        "lng": -84.37975,
        "lat": 33.91776,
        "id": "groceryNorth",
        "success": true
      },
      {
        "maneuvers": [],
        "departuretime": 1619795032,
        "start": 1619795032,
        "arrivaltime": 1619795032,
        "idletime": 0,
        "totaltraveltime": 0,
        "nontraffictime": 0,
        "traffictime": 0,
        "distance": 0,
        "duration": 0,
        "lng": -84.38192,
        "lat": 33.84063,
        "id": "grocerySouth",
        "success": true
      }
    ],
    "summary": {
      "totaltraveltime": 945,
      "nontraffictime": 798,
      "traffictime": 147,
      "distance": 9274
    },
    "boundingbox": {
      "southwest": {
        "lng": -84.38192,
        "lat": 33.84063
      },
      "northeast": {
        "lng": -84.37975,
        "lat": 33.91776
      }
    },
    "status": "Completed",
    "jobid": "mare-routing-11-1619794088.349843-505"
  },
  "success": true
}
```
