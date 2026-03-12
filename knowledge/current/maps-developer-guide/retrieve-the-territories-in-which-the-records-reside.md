---
title: "Retrieve the Territories in Which the Records Reside"
domain: maps-developer-guide
topic: retrieve-the-territories-in-which-the-records-reside
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:53.822Z
estimatedTokens: 445
keywords: [Retrieve, Territories, Records, Reside, PointInPolygon, Apex, territory, shape, record, resides, reads, geographical, coordinates, compares, against]
---

# Retrieve the Territories in Which the Records Reside

> The PointInPolygon() Apex method
      returns the territory shape in which each record resides. It reads in the geographical
      coordinates of one or more records and compares each against the surrounding territory shape.
      Review Considerations for Retrieving
        Territory Shapes.

# Retrieve the Territories in Which the Records Reside

The PointInPolygon() Apex method returns the territory shape in which each record resides. It reads in the geographical coordinates of one or more records and compares each against the surrounding territory shape. Review [Considerations for Retrieving Territory Shapes](https://help.salesforce.com/s/articleView?id=004388105&type=1&language=en_US "HTML (New Window)").

## Signature

```

```

Where,

-   maps is the namespace that's available after you install Salesforce Maps.
-   API is the class that contains the global methods exposed to developers.
-   PointInPolygon() is the method.

## Sample Code

This code reads in the geographical coordinates of two records and returns the territory shape in which each resides.

![Warning](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_warning.png&folder=maps_developer_guide)

#### Warning

If you invoke methods within a flow, process builder, or trigger, avoid uncommitted work errors when you perform one of the following.

-   Call the methods through a future method
-   Call the methods as queueable

Uncommitted work errors can also arise if calling out to Salesforce Maps methods more than one time in a single transaction and the Salesforce Maps token hasn’t refreshed in the last 24 hours. If these errors occur, separate each callout into individual transactions.

Different processes refresh the token, such as plotting a route or schedule. The refresh process is almost immediate after each qualifying action occurs.

**Input Format**

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
Map<String, Object> maps.API.PointInPolygon(Map<String, Object>)
```

```apex
{
version: 'int' // Required. Version of the API endpoint. 
points: [ {id:String, lat:Decimal, lng:Decimal, id:String}, ... ] // Array of record IDs, latitudes and longitutes.
MATerritoryIds: List<String> // List of Maps territory IDs.
}
```

```apex
// Create a list of records.
List<Map<String, Object>> coordinateList = new List<Map<String, Object>> {
    new Map<String, Object> {
        'id' => 'recordId_1',
        'lat' => 34.0441233,
        'lng' => -84.0076379
    },
    new Map<String, Object> {
        'id' => 'recordId_2',
        'lat' => 54.0441233,
        'lng' => -84.0076379
    }
};

// Create a list of territory IDs.
List<String> MATerritoryIds = new List<String>();
for (maps__ShapeLayer__c sl : [SELECT Id FROM maps__ShapeLayer__c]) {
    MATerritoryIds.add(sl.Id);
}

// Build the request. Only version 2 is valid.
Map<String, Object> request = new Map<String, Object> {
    'version' => '2',
    'points' => coordinateList,
    'MATerritoryIds' => MATerritoryIds
};

// Call the PointInPolygon() method.
Map<String,Object> response = maps.Api.PointInPolygon(request);

// Log the resulting territory shapes of the regions.
system.debug(response);
```

```
{
"results": [
    {
        "polygons":["a130t000000nNefAAE-1"], // The ID of the polygon in which the record resides, followed by its unique ID for all geometry records associated with the polygon.
        "point":{
            "id":"recordId_1",
            "lat":34.0441233,
            "lng":-84.0076379
        }
    },
    {
        "polygons":[],
        "point":{
            "id":"recordId_2",
            "lat":54.0441233,
            "lng":-84.0076379
       }
    }
]
}
```
