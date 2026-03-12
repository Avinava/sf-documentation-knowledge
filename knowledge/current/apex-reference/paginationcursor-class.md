---
title: "PaginationCursor Class"
domain: apex-reference
topic: paginationcursor-class
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:20.118Z
estimatedTokens: 1750
namespace: Database
keywords: [PaginationCursor, represents, pagination, cursor, traverse, SOQL, query, result, set., contains, fetch, rows, page., total, number, Usage, fetchDeleted, start, pageSize, fetchPage]
---

# PaginationCursor Class

> This class represents a pagination cursor that can traverse a SOQL query result set. It
        contains methods that fetch rows by page. It also contains a method that returns the total
        number of rows in the result set.

**Namespace:** `Database`

# PaginationCursor Class

This class represents a pagination cursor that can traverse a SOQL query result set. It contains methods that fetch rows by page. It also contains a method that returns the total number of rows in the result set.

## Namespace

[Database](atlas.en-us.apexref.meta/apexref/apex_namespace_Database.htm "The Database namespace provides classes used with DML operations.")

## Usage

A pagination cursor is created when a SOQL query is executed on a [Database.getPaginationCursor()](atlas.en-us.apexref.meta/apexref/apex_methods_system_database.htm#apex_System_database_getPaginationCursor "Creates a pagination cursor when the specified SOQL query is executed.") or a [Database.getPaginationCursorWithBinds()](atlas.en-us.apexref.meta/apexref/apex_methods_system_database.htm#apex_System_database_getPaginationCursorWithBinds "Creates a pagination cursor when the specified SOQL query is executed.") call. When the SOQL query is invoked, the corresponding rows are returned from the pagination cursor.

Use a pagination cursor for traversing human-viewable data, such as a list of records in a UI. The maximum number of rows per pagination cursor is 100,000, regardless of whether the operation is synchronous or asynchronous.

For a comparison between pagination cursors and standard cursors, see [Apex Cursors](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/apex_cursors.htm "HTML (New Window)") in the Apex Developer Guide.

For Apex pagination cursor limits, see [Execution Governors and Limits](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/apex_gov_limits.htm) in the Apex Developer Guide.

-   **[PaginationCursor Methods](atlas.en-us.apexref.meta/apexref/apex_class_Database_PaginationCursor.htm#apex_Database_PaginationCursor_methods)**


## PaginationCursor Methods

The following are methods for PaginationCursor.

-   **[fetchDeleted(start, pageSize)](atlas.en-us.apexref.meta/apexref/apex_class_Database_PaginationCursor.htm#apex_Database_PaginationCursor_fetchDeleted)**
    Fetches the number of deleted rows within the specified range. The method counts only rows deleted after the creation of the pagination cursor. Calling the PaginationCursor.fetchDeleted() method counts against the SOQL query limit, and the rows fetched count against the SOQL query row limit.
-   **[fetchPage(start, pageSize)](atlas.en-us.apexref.meta/apexref/apex_class_Database_PaginationCursor.htm#apex_Database_PaginationCursor_fetchPage)**
    Fetches a page of rows from the result set. By default, the method skips rows deleted after the creation of the pagination cursor. The method also returns information used to fetch the next page. Calling the PaginationCursor.fetchPage() method counts against the SOQL query limit, and the rows fetched count against the SOQL query row limit.
-   **[getNumRecords()](atlas.en-us.apexref.meta/apexref/apex_class_Database_PaginationCursor.htm#apex_Database_PaginationCursor_getNumRecords)**
    Gets the total number of rows in the SOQL query result set.

### fetchDeleted(start, pageSize)

Fetches the number of deleted rows within the specified range. The method counts only rows deleted after the creation of the pagination cursor. Calling the PaginationCursor.fetchDeleted() method counts against the SOQL query limit, and the rows fetched count against the SOQL query row limit.

#### Signature

public Integer fetchDeleted(Integer start, Integer pageSize)

#### Parameters

start

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

The zero-based index from which to begin checking for deleted rows.

pageSize

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

The number of rows to check, beginning at the start index.

#### Return Value

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

### fetchPage(start, pageSize)

Fetches a page of rows from the result set. By default, the method skips rows deleted after the creation of the pagination cursor. The method also returns information used to fetch the next page. Calling the PaginationCursor.fetchPage() method counts against the SOQL query limit, and the rows fetched count against the SOQL query row limit.

#### Signature

public Database.CursorFetchResult fetchPage(Integer start, Integer pageSize)

#### Parameters

start

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

The zero-based index from which to begin fetching rows.

pageSize

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

The maximum number of rows to include on the current page.

#### Return Value

Type: [Database.CursorFetchResult](atlas.en-us.apexref.meta/apexref/apex_class_Database_CursorFetchResult.htm#apex_class_Database_CursorFetchResult "This class encapsulates the result of a PaginationCursor.fetchPage() call. It contains methods that get the rows for the current page, the start index of the next page, and the number of deleted rows skipped during the fetch operation. It also contains a method that indicates whether the pagination cursor has fetched all available rows in the result set.")

Contains the rows for the current page and the information used to fetch the next page.

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

## Related Topics

- Database (atlas.en-us.apexref.meta/apexref/apex_namespace_Database.htm)
- Database.getPaginationCursor() (atlas.en-us.apexref.meta/apexref/apex_methods_system_database.htm)
- Database.getPaginationCursorWithBinds() (atlas.en-us.apexref.meta/apexref/apex_methods_system_database.htm)
- PaginationCursor Methods (atlas.en-us.apexref.meta/apexref/apex_class_Database_PaginationCursor.htm)
- fetchDeleted(start, pageSize) (atlas.en-us.apexref.meta/apexref/apex_class_Database_PaginationCursor.htm)
- fetchPage(start, pageSize) (atlas.en-us.apexref.meta/apexref/apex_class_Database_PaginationCursor.htm)
- getNumRecords() (atlas.en-us.apexref.meta/apexref/apex_class_Database_PaginationCursor.htm)
- Integer (atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm)
- Database.CursorFetchResult (atlas.en-us.apexref.meta/apexref/apex_class_Database_CursorFetchResult.htm)
- getPaginationCursor(query, accessLevel) (atlas.en-us.apexref.meta/apexref/apex_methods_system_database.htm)
