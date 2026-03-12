---
title: "Retrieve the Geographical Data of Country-Specific Shapes"
domain: maps-developer-guide
topic: retrieve-the-geographical-data-of-country-specific-shapes
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:53.776Z
estimatedTokens: 434
keywords: [Retrieve, Geographical, Data, Country-Specific, Shapes, GetBoundaryGeoJSON, Apex, area, perimeter, IDs, Sample, Code]
---

# Retrieve the Geographical Data of Country-Specific Shapes

> The GetBoundaryGeoJSON() Apex
      method returns the geographical data, area, and perimeter for a list of geographical
    IDs.

# Retrieve the Geographical Data of Country-Specific Shapes

The GetBoundaryGeoJSON() Apex method returns the geographical data, area, and perimeter for a list of geographical IDs.

## Signature

```

```

Where,

-   maps is the namespace that's available after you install Salesforce Maps.
-   API is the class that contains the global methods exposed to developers.
-   GetBoundaryGeoJSON() is the method.

## Sample Code

This code takes two geographical IDs and returns their total and individual geometric data, area, and perimeter.

![Warning](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_warning.png&folder=maps_developer_guide)

#### Warning

If you invoke methods within a flow, process builder, or trigger, avoid uncommitted work errors when you perform one of the following.

-   Call the methods through a future method
-   Call the methods as queueable

Uncommitted work errors can also arise if calling out to Salesforce Maps methods more than one time in a single transaction and the Salesforce Maps token hasn’t refreshed in the last 24 hours. If these errors occur, separate each callout into individual transactions.

Different processes refresh the token, such as plotting a route or schedule. The refresh process is almost immediate after each qualifying action occurs.

**Input Format of the Parameters**

-   A list of geographical IDs with the format {countrycode}-{level}-{id}.
-   A Boolean that determines whether the returned information of the shape is merged (true) or separated (false).

**Example**

```

```

## Sample Response

Although the return value is an Apex Map<String, Object> object, this JSON response illustrates the essential data you receive in the resulting map.

```

```

## Code Examples

```apex
Map<String, Object> maps.API.GetBoundaryGeoJSON(List<String> geoIds, Boolean mergeShape)
```

```apex
// Create a list of geographical IDs and set the shape merging parameter.
List<String> geoIds = new List<String>{'CAN-5-24360123', 'CAN-5-24360125'};
Boolean mergeShape = false;

// Call the GetBoundaryGeoJSON() method with the geographical IDs and shape merging parameter.
Map<String, Object> response = maps.API.GetBoundaryGeoJSON(geoIds, mergeShape);

// Log the resulting boundary.
system.debug(response);
```

```
{
  "total": {
    "perimeter": 76052.889956049, // Total length in meters of all boundary perimeters.
    "area": 92743880.3549741 // Total area in square meters inside of all boundaries.
  },
  "unit": "meters",
  "geometries": {
    "CAN-5-24360125": {
      "perimeter": 64556.086852368, // Length in meters of the boundary perimeter.
      "area": 88393467.4191344 // Area in square meters inside the boundary.
    },
    "CAN-5-24360123": {
      "perimeter": 11496.803103681,
      "area": 4350412.93583968
    }
  },
  "count": 2,
  "custom": false
}
```
