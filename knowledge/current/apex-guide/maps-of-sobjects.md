---
title: "Maps of sObjects"
domain: apex-guide
topic: maps-of-sobjects
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:43:47.351Z
keywords: [Maps, sObjects, Auto-Populating, Map, Entries, SOQL, Query, Note, Methods]
---

# Maps of sObjects

# Maps of sObjects

Map keys and values can be of any data type, including sObject types, such as Account.

Maps can hold sObjects both in their keys and values. A map key represents a unique value that maps to a map value. For example, a common key would be an ID that maps to an account (a specific sObject type). This example shows how to define a map whose keys are of type ID and whose values are of type Account.

```

```

As with primitive types, you can populate map key-value pairs when the map is declared by using curly brace ({}) syntax. Within the curly braces, specify the key first, then specify the value for that key using \=>. This example creates a map of integers to accounts lists and adds one entry using the account list created earlier.

```

```

Maps allow sObjects in their keys. You must use sObjects in the keys only when the sObject field values won’t change.

## Auto-Populating Map Entries from a SOQL Query

When working with SOQL queries, maps can be populated from the results returned by the SOQL query. The map key must be declared with an ID or String data type, and the map value must be declared as an sObject data type.

This example shows how to populate a new map from a query. In the example, the SOQL query returns a list of accounts with their Id and Name fields. The new operator uses the returned list of accounts to create a map.

```

```

One common usage of this map type is for in-memory “joins” between two tables.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=apexcode)

#### Note

RecentlyViewed records for users who are members of several communities can’t be retrieved automatically into a map via Apex. This is because records of a user with different networks can result in duplicate IDs that maps don’t support. For more information, see [RecentlyViewed](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_recentlyviewed.htm).

## Using Map Methods

The Map class exposes various methods that you can use to work with map elements, such as adding, removing, or retrieving elements. This example uses Map methods to add new elements and retrieve existing elements from the map. This example also checks for the existence of a key and gets the set of all keys. The map in this example has one element with an integer key and an account value.

```

```

-   **[sObject Map Considerations](atlas.en-us.apexcode.meta/apexcode/apex_map_sobject_considerations.htm)**