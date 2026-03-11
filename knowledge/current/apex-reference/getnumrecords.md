---
title: "getNumRecords()"
domain: apex-reference
topic: getnumrecords
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:33.704Z
keywords: [getNumRecords, Gets, total, number, rows, SOQL, query, result, set., Signature, Return, Value, See]
---

# getNumRecords()

> Gets the total number of rows in the SOQL query result set.

### getNumRecords()

Gets the total number of rows in the SOQL query result set.

#### Signature

public Integer getNumRecords()

#### Return Value

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

#### See Also

-   [getPaginationCursor(query, accessLevel)](atlas.en-us.apexref.meta/apexref/apex_methods_system_database.htm#apex_System_database_getPaginationCursor "Creates a pagination cursor when the specified SOQL query is executed.")
    
-   [CursorFetchResult Class](atlas.en-us.apexref.meta/apexref/apex_class_Database_CursorFetchResult.htm#apex_class_Database_CursorFetchResult "This class encapsulates the result of a PaginationCursor.fetchPage() call. It contains methods that get the rows for the current page, the start index of the next page, and the number of deleted rows skipped during the fetch operation. It also contains a method that indicates whether the pagination cursor has fetched all available rows in the result set.")
    
-   [*Apex Developer Guide*: Apex Cursors](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/apex_cursors.htm "Apex Developer Guide: Apex Cursors - HTML (New Window)")