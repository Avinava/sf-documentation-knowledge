---
title: "Location-Based SOQL Queries"
domain: soql-sosl
topic: location-based-soql-queries
apiVersion: 67.0
release: summer-26-v67
docType: concept
lastCollected: 2026-03-12T09:36:19.522Z
estimatedTokens: 2337
keywords: [Location-Based, SOQL, Queries, let, compare, query, location, stored, Salesforce, calculate, distance, two, warehouse, store, fixed]
---

# Location-Based SOQL Queries

> Location-based SOQL queries let you compare and query location values stored in
    Salesforce. You can calculate the distance between two location values, such as between a
    warehouse and a store. Or you can calculate the distance between a location value and fixed
    latitude-longitude coordinates, such as between a warehouse and 37.775°, -122.418°—also known as
    San Francisco.

# Location-Based SOQL Queries

Location-based SOQL queries let you compare and query location values stored in Salesforce. You can calculate the distance between two location values, such as between a warehouse and a store. Or you can calculate the distance between a location value and fixed latitude-longitude coordinates, such as between a warehouse and 37.775°, -122.418°—also known as San Francisco.

The geolocation custom field type allows you to create a field to store location values. A geolocation field identifies a location by its latitude and longitude. Standard addresses on Salesforce objects also include a geolocation field that, when populated, can be used in similar ways—with a few restrictions. You can compare and query the locations of both types, for example, to find the 10 closest accounts.

For more information and considerations to keep in mind, see [Compound Fields](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/compound_fields.htm) in the Salesforce Object Reference.

## Field Types That Support Location-Based SOQL Queries

SOQL supports using simple numeric values for latitude and longitude using the GEOLOCATION function. These values can come from standard numeric fields, user input, calculations, and so on. They can also come from the individual components of a geolocation field, which stores both latitude and longitude in a single logical field. If a geocoding service has populated the geolocation field of a standard address, you can also use latitude and longitude values directly from an address.

SOQL queries made using the SOAP and REST APIs also support using geolocation fields, including address fields that have a geolocation component, directly in SOQL statements. This often results in simpler SOQL statements. Compound fields can *only* be used in SOQL queries made through the SOAP and REST APIs.

## SELECT Clause

Retrieve records with locations saved in geolocation or address fields as individual latitude and longitude values by appending “\_\_latitude\_\_s” or “\_\_longitude\_\_s” to the field name, instead of the usual “\_\_c”. For example:

```

```

This query finds all the warehouses that are stored in the custom object Warehouse. The results include each warehouse’s latitude and longitude values individually. To select the latitude and longitude components individually, use separate field components for Location\_\_c.

SOQL executed using the SOAP or REST APIs can SELECT the compound field, instead of the individual elements. Compound fields are returned as structured data rather than primitive values. For example:

```

```

This query retrieves the same data as the previous query, but the Location\_\_c field is a compound geolocation field, and the results combine the two primitive values. Here are sample results from a REST API request.

```

```

## WHERE Clause

Retrieve records with locations within or outside of a certain radius with distance conditions in the WHERE clause of the query. To construct an appropriate distance condition, use the following functions.

DISTANCE

Calculates the distance between two locations in miles or kilometers.

Usage: DISTANCE(mylocation1, mylocation2, 'unit') and replace mylocation1 and mylocation2 with two location fields, or a location field and a value returned by the GEOLOCATION function. Replace unit with mi (miles) or km (kilometers).

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=soql_sosl)

#### Note

If you use a location field and a GEOLOCATION value, the location field must be the first variable and the GEOLOCATION must be the second variable. If the GEOLOCATION is first, the query results in a MALFORMED\_QUERY error.

GEOLOCATION

Returns a geolocation based on the provided latitude and longitude. Must be used with the DISTANCE function.

Usage: GEOLOCATION(latitude, longitude) and replace latitude and longitude with the corresponding geolocation, numerical code values.

Compare two field values, or a field value with a fixed location. For example:

```

```

## ORDER BY Clause

Sort records by distance using a distance condition in the ORDER BY clause. For example:

```

```

This query finds up to 10 of the warehouses in the custom object Warehouse that are within 20 miles of the geolocation 37.775°, -122.418°, which is San Francisco. The results include the name and address of each warehouse, but not its geocoordinates. The nearest warehouse is first in the list. The farthest location is last.

## How SOQL Treats Null Location Values

Geolocation fields are compound fields that combine latitude and longitude values to describe a specific point on Earth. Null values are valid only if *both* latitude and longitude are null.

A record that has an invalid geolocation field value is treated as though both values are null when used in SOQL WHERE DISTANCE() and ORDER BY clauses. A record that has a geolocation field in which either the latitude or longitude is null is treated as though the field has not been set.

When a compound geolocation field is used in a SELECT clause, invalid geolocation values return null. For example:

```

```

Values such as the ones in this table are returned from API calls.

| Name | Location__c |
| --- | --- |
| Ferry Building Depot | null |
| Aloha Warehouse | (37.786108,-122.430152) |
| Big Tech Warehouse | null |
| S H Frank & Company | null |
| San Francisco Tech Mart | (37.77587,-122.399902) |

These results include three null geolocation values. It’s not possible to tell which values are genuinely null, and which are invalid data.

When the individual field components of that same geolocation field are used in a SELECT clause, the saved values are returned as before. Non-null values are returned as that value, and null values return as null. For example:

```

```

These values are sample query results.

| Name | Location__latitude__s | Location__longitude__s |
| --- | --- | --- |
| Ferry Building Depot | null | -122.394507 |
| Aloha Warehouse | 37.786108 | -122.430152 |
| Big Tech Warehouse | null | null |
| S H Frank & Company | 37.763662 | null |
| San Francisco Tech Mart | 37.77587 | -122.399902 |

In these results, only one geolocation field is genuinely null. The other two, with partial nulls, are invalid.

When you create formula fields that you plan to use for DISTANCE calculations, select **Treat blank fields as blanks** in the Blank Field Handling section. If you select **Treat blank fields as zeros**, distances are calculated from 0°, 0°—the point where the equator intersects the prime meridian—when your geolocation fields have null values. On record detail pages, null geolocation values in DISTANCE formula fields that are set to **Treat blank fields as zeros** cause the formula fields to display as empty.

## How SOQL Calculates and Compares Distances

The DISTANCE function approximates the haversine, or “great circle,” distance calculation within 0.0002%. This formula assumes that the Earth is a perfect sphere, when in fact it’s an ellipsoid: an irregular one. Errors from this assumption can be up to 0.55% crossing the equator, but are usually below 0.3%, depending on latitude and direction of travel.

The DISTANCE function is fine for calculating the 10 stores closest to a customer’s current location. But don’t fuel your plane for a flight from San Francisco to Sydney based on it.

Another implication of this approximation is that geolocations and distances have no notion of “equal.” You can’t check locations or distances for equality. You can only determine whether one location is farther away or closer than another location, or one distance is greater or smaller than another. To verify that two locations are “the same,” treat their distance as a floating point number and compare the difference to a tolerance value. For example, this WHERE clause finds other records within 25 feet of testLocation.

```

```

Although the errors are small for nearly identical distances, the errors can cause a location query to include or exclude expected locations. If your application requires precise distance calculations and comparisons, we recommend that you do your own math.

## Location-Based SOQL Query Considerations

Location-based queries are supported in SOQL in Apex and in the SOAP and REST APIs. Keep in mind these considerations.

-   DISTANCE and GEOLOCATION are supported in WHERE and ORDER BY clauses in SOQL, but not in GROUP BY. DISTANCE is supported in SELECT clauses.
-   DISTANCE supports only the logical operators > and <, returning values within (<) or beyond (>) a specified radius.
-   When using the GEOLOCATION function in SOQL queries, the geolocation field must precede the latitude and longitude coordinates. For example, DISTANCE(warehouse\_location\_\_c, GEOLOCATION(37.775,-122.418), 'km') works but DISTANCE(GEOLOCATION(37.775,-122.418), warehouse\_location\_\_c, 'km') doesn’t work.
-   Apex bind variables aren’t supported for the units parameter in the DISTANCE function. This query doesn’t work.

    ```

    ```


For more information, see [Compound Field Considerations and Limitations](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/compound_fields_limitations.htm) in the Salesforce Object Reference.

## Code Examples

```
SELECT Name, Location__latitude__s, Location__longitude__s 
FROM Warehouse__c
```

```
SELECT Name, Location__c 
FROM Warehouse__c
```

```
{
  "totalSize" : 10,
  "done" : true,
  "records" : [ {
    "attributes" : {
      "type" : "Warehouse__c",
      "url" : "/services/data/v30.0/sobjects/Warehouse__c/a06D00000017O4nIAE"
    },
    "Name" : "Ferry Building Depot",
    "Location__c" : {
      "latitude" : 37.79302,
      "longitude" : -122.394507
    }
  }, {
    "attributes" : {
      "type" : "Warehouse__c",
      "url" : "/services/data/v30.0/sobjects/Warehouse__c/a06D00000017O4oIAE"
    },
    "Name" : "Aloha Warehouse",
    "Location__c" : {
      "latitude" : 37.786108,
      "longitude" : -122.430152
    }
  }, 
  ...
  ]
}
```

```
SELECT Name, Location__c 
FROM Warehouse__c 
WHERE DISTANCE(Location__c, GEOLOCATION(37.775,-122.418), 'mi') < 20
```

```
SELECT Name, StreetAddress__c 
FROM Warehouse__c 
WHERE DISTANCE(Location__c, GEOLOCATION(37.775,-122.418), 'mi') < 20 
ORDER BY DISTANCE(Location__c, GEOLOCATION(37.775,-122.418), 'mi')
LIMIT 10
```
