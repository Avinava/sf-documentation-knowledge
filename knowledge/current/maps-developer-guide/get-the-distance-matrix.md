---
title: "Get the Distance Matrix"
domain: maps-developer-guide
topic: get-the-distance-matrix
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:53.785Z
estimatedTokens: 527
keywords: [Distance, Matrix, GetDistanceMatrix, Apex, locations, estimated, travel, meters, time, seconds, Allocations, Sample, Code]
---

# Get the Distance Matrix

> The GetDistanceMatrix() Apex
      method takes a set of locations and returns the estimated travel distance in meters and the
      time in seconds between the locations.

# Get the Distance Matrix

The GetDistanceMatrix() Apex method takes a set of locations and returns the estimated travel distance in meters and the time in seconds between the locations.

## Example

With two locations A and B, you can use this method to return matrices of travel distance and times between A–B and B–A. The diagonal elements of the matrices A–A and B–B are zero because the travel distance and the time from one spot to the same spot is zero.

The values for A–B and B–A can differ because the returning path isn’t always the same. The travel times are calculated for eight predefined time windows based on historical traffic data. Each time window has its own travel time matrix.

## Signature

```

```

Where,

-   maps is the namespace that's available after you install Salesforce Maps.
-   API is the class that contains the global methods exposed to developers.
-   GetDistanceMatrix() is the method.

## Allocations

Include as many as 20 locations. To catch exceptions, put a try-catch block around your code.

## Sample Code

This code finds the estimated travel distance in meters and time between two grocery stores.

![Warning](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_warning.png&folder=maps_developer_guide)

#### Warning

If you invoke methods within a flow, process builder, or trigger, avoid uncommitted work errors when you perform one of the following.

-   Call the methods through a future method
-   Call the methods as queueable

Uncommitted work errors can also arise if calling out to Salesforce Maps methods more than one time in a single transaction and the Salesforce Maps token hasn’t refreshed in the last 24 hours. If these errors occur, separate each callout into individual transactions.

Different processes refresh the token, such as plotting a route or schedule. The refresh process is almost immediate after each qualifying action occurs.

```

```

## Sample Response

Although the return value is an Apex Map<String, Object> object, this JSON response illustrates the essential data that you receive in the resulting map.

```

```

## Code Examples

```apex
Map<String, Object> maps.API.GetDistanceMatrix(List<Map<String, Object>>)
```

```apex
// Create a list of locations.
List<Map<String, Object>> locations = 
 new List<Map<String, Object>>(); 

// Create and add location 1.
Map<String, Object> groceryNorth = 
 new Map<String, Object> { 
 'location_id' => 'groceryNorth', 
 'latitude' => 33.917760, 
 'longitude' => -84.379750 
};
locations.add(groceryNorth); 

// Create and add location 2.
Map<String, Object> grocerySouth = 
 new Map<String, Object> { 
 'location_id' => 'grocerySouth', 
 'latitude' => 33.840630, 
 'longitude' => -84.381920 
}; 
locations.add(grocerySouth);
 
// Call the GetDistanceMatrix() method with the list of locations.
Map<String, Object> matrix = maps.API.GetDistanceMatrix(locations); 

// Log the resulting distance matrix.
system.debug(matrix);
```

```
{
  "endPoint": "https://internal.na.sfmapsapi.com/core/routing/matrix/1",
  "limitInfo": {
    "QueryRows": "12 / 50000",
    "Queries": "8 / 100",
    "HeapSize": "73745 / 6000000",
    "CPUTime": "150 / 10000"
  },
  "request": "{"vehicle":{"type":"car"},"locations":[{"longitude":-84.379750,"latitude":33.917760,"location_id":"groceryNorth"},{"longitude":-84.381920,"latitude":33.840630,"location_id":"grocerySouth"}]}",
  "params": {
    "locations": [
      {
        "location_id": "groceryNorth",
        "latitude": 33.91776,
        "longitude": -84.37975
      },
      {
        "location_id": "grocerySouth",
        "latitude": 33.84063,
        "longitude": -84.38192
      }
    ],
    "vehicle": {
      "type": "car"
    }
  },
  "success": true,
  "data": {
    "Solution": {
      "travel_costs": {
        "grocerySouth": { 
          "grocerySouth": [ // The values of the matrix diagonals are zero because the distance and time between grocerySouth and grocerySouth are zero.
            0, // Matrix 0 index 0: Travel distance in meters
            0, // Matrix 1 index 0: Travel time for time window 0
            0, // Matrix 2 index 0: Travel time for time window 1
            0, // And so forth...
            0,
            0,
            0,
            0,
            0
          ],
          "groceryNorth": [ // The values for grocerySouth to groceryNorth.
            9210,  // Matrix 0 index 1: Travel distance in meters
            794.6, // Matrix 1 index 1: Travel time for time window 0
            810.5, // Matrix 2 index 1: Travel time for time window 1
            890, // And so forth...
            920.7,
            965.7,
            1047.2,
            1048.8,
            952.5
          ]
        },
        "groceryNorth": {
          "grocerySouth": [ // The values for groceryNorth to grocerySouth.
            9274.1, // Matrix 0 index 2: Travel distance in meters
            797.9, // Matrix 1 index 2: Travel time for time window 0
            808.3, // Matrix 2 index 2: Travel time for time window 1
            879, // And so forth...
            905.3,
            944.2,
            974.6,
            963.5,
            920.5
          ],
          "groceryNorth": [  // The values for the matrix diagonals are zero.
            0, // Matrix 0 index 3: Distance in meters
            0, // Matrix 1 index 3: Time for time window 0
            0, // Matrix 2 index 3: Time for time window 1
            0, // And so forth...
            0,
            0,
            0,
            0,
            0
          ]
        }
      },
      "traffic_windows": [
        { // Time window for matrix 1: midnight to 6:30 am and 7 pm to midnight.
          "traffic_window_start_times": [
            "00:00:00",
            "19:00:00"
          ],
          "traffic_window_index": 0,
          "traffic_window_end_times": [
            "06:30:00",
            "00:00:00"
          ]
        },
        { // Time window for matrix 2: 6:30 am to 7:30 am.
          "traffic_window_start_times": [
            "06:30:00"
          ],
          "traffic_window_index": 1,
          "traffic_window_end_times": [
            "07:30:00"
          ]
        },
        { // And so forth...
          "traffic_window_start_times": [
            "07:30:00"
          ],
          "traffic_window_index": 2,
          "traffic_window_end_times": [
            "08:30:00"
          ]
        },
        {
          "traffic_window_start_times": [
            "08:30:00"
          ],
          "traffic_window_index": 3,
          "traffic_window_end_times": [
            "09:30:00"
          ]
        },
        {
          "traffic_window_start_times": [
            "09:30:00"
          ],
          "traffic_window_index": 4,
          "traffic_window_end_times": [
            "16:00:00"
          ]
        },
        {
          "traffic_window_start_times": [
            "16:00:00"
          ],
          "traffic_window_index": 5,
          "traffic_window_end_times": [
            "17:00:00"
          ]
        },
        {
          "traffic_window_start_times": [
            "17:00:00"
          ],
          "traffic_window_index": 6,
          "traffic_window_end_times": [
            "18:00:00"
          ]
        },
        {
          "traffic_window_start_times": [
            "18:00:00"
          ],
          "traffic_window_index": 7,
          "traffic_window_end_times": [
            "19:00:00"
          ]
        }
      ],
      "status": "Ok",
      "locations": [
        {
          "time_zone": "America/New_York", // Time zone of the location.
          "location_id": "groceryNorth"
        },
        {
          "time_zone": "America/New_York",
          "location_id": "grocerySouth"
        }
      ]
    },
    "JobStatus": "Completed",
    "JobMessage": {
      "comment": "MARE job succeeded"
    },
    "JobId": "mare-matrix-11-1619788548.552854-151"
  }
}
```
