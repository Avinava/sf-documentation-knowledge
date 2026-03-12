---
title: "Retrieve the Geographical Data of Polygons"
domain: maps-developer-guide
topic: retrieve-the-geographical-data-of-polygons
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:53.805Z
estimatedTokens: 472
keywords: [Retrieve, Geographical, Data, Polygons, getPolygonGeometry, Apex, geometric, area, perimeter, requested, shape, custom, polygon, Sample, Code]
---

# Retrieve the Geographical Data of Polygons

> The getPolygonGeometry() Apex
      method returns the geometric data, such as the area and perimeter, for the requested
      geographical shape or custom polygon.

# Retrieve the Geographical Data of Polygons

The getPolygonGeometry() Apex method returns the geometric data, such as the area and perimeter, for the requested geographical shape or custom polygon.

## Signature

```

```

Where,

-   maps is the namespace that's available after you install Salesforce Maps.
-   API is the class that contains the global methods exposed to developers.
-   getPolygonGeometry() is the method.

## Sample Code of a Circle

This code passes a circular geographical region to the Salesforce Maps API.

![Warning](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_warning.png&folder=maps_developer_guide)

#### Warning

If you invoke methods within a flow, process builder, or trigger, avoid uncommitted work errors when you perform one of the following.

-   Call the methods through a future method
-   Call the methods as queueable

Uncommitted work errors can also arise if calling out to Salesforce Maps methods more than one time in a single transaction and the Salesforce Maps token hasn’t refreshed in the last 24 hours. If these errors occur, separate each callout into individual transactions.

Different processes refresh the token, such as plotting a route or schedule. The refresh process is almost immediate after each qualifying action occurs.

**Input Format of a Circle**

```

```

**Example**

```

```

## Sample Code of a Rectangle

This code passes a rectangular geographical region to the Salesforce Maps API.

**Input Format of a Rectangle**

```

```

**Example**

```

```

## Sample Code of a Polygon

This code passes a polygonal geographical region to the Salesforce Maps API.

**Input Format of a Polygon**

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
Map<String, Object> maps.API.getPolygonGeometry(Map<String, Object> polygon)
```

```
{
   type: 'circle', // Shape.
   radius: Decimal, // Radius in meters from the center of the polygon.
   lat: Decimal, // Latitude coordinate of the center of the circle.
   lng: Decimal // Longitude coordinate of the center of the circle.
}
```

```apex
// Create a circular geographical region.
Map<String,Object> polygon = new Map<String,Object>{
    'type' => 'circle',
    'radius' => 50,
    'lat' => 33.917760,
    'lng' => -84.379750
};

// Call the getPolygonGeometry() method with the new polygon.
Map<String,Object> response = maps.API.getPolygonGeometry(polygon);

// Log the information about the resulting polygon.
system.debug(response);
```

```apex
{
   type: 'rectangle', // Shape.
   NE: Map<String,Decimal>, // North-Eastern corner of the rectangle.
   SW: Map<String,Decimal> // South-Western corner of the rectangle.
}
```

```apex
// Add the geographical coordinates of the North-Eastern and South-Western corners.
Map<String,Decimal> northEast = new Map<String,Decimal>{
    'lat' => 33.943360,
    'lng' => -84.515541
};

Map<String,Decimal> southWest = new Map<String,Decimal>{
    'lat' => 33.559707,
    'lng' => -84.101929
};

// Create the rectangular geographical region.
Map<String,Object> polygon = new Map<String,Object>{
    'type' => 'rectangle',
    'NE' => northEast,
    'SW' => southWest
};

// Call the getPolygonGeometry() method with the new polygon.
Map<String,Object> response = maps.API.getPolygonGeometry(polygon);

// Log the information about the resulting polygon.
system.debug(response);
```
