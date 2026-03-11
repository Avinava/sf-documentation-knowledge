---
title: "isDone()"
domain: apex-reference
topic: isdone
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:33.681Z
keywords: [isDone, Returns, true, pagination, cursor, reached, either, page, size, passed, PaginationCursor.fetchPage, start, pageSize, end, result, set., Otherwise, returns, false., Signature]
---

# isDone()

> Returns true if the pagination cursor has reached
    either the page size passed to PaginationCursor.fetchPage(start,
      pageSize) or the end of the result set. Otherwise returns false.

### isDone()

Returns true if the pagination cursor has reached either the page size passed to PaginationCursor.fetchPage(start, pageSize) or the end of the result set. Otherwise returns false.

#### Signature

public Boolean isDone()

#### Return Value

Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")

#### See Also

-   [getPaginationCursor(query, accessLevel)](atlas.en-us.apexref.meta/apexref/apex_methods_system_database.htm#apex_System_database_getPaginationCursor "Creates a pagination cursor when the specified SOQL query is executed.")
    
-   [PaginationCursor Class](atlas.en-us.apexref.meta/apexref/apex_class_Database_PaginationCursor.htm#apex_class_Database_PaginationCursor "This class represents a pagination cursor that can traverse a SOQL query result set. It contains methods that fetch rows by page. It also contains a method that returns the total number of rows in the result set.")
    
-   [*Apex Developer Guide*: Apex Cursors](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/apex_cursors.htm "Apex Developer Guide: Apex Cursors - HTML (New Window)")