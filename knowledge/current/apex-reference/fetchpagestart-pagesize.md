---
title: "fetchPage(start, pageSize)"
domain: apex-reference
topic: fetchpagestart-pagesize
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:33.704Z
keywords: [fetchPage, start, pageSize, Fetches, page, rows, result, set., default, method, skips, deleted, after, creation, pagination, cursor., returns, information, used, fetch]
---

# fetchPage(start, pageSize)

> Fetches a page of rows from the result set. By default, the method skips rows deleted
    after the creation of the pagination cursor. The method also returns information used to fetch
    the next page. Calling the PaginationCursor.fetchPage() method counts against
    the SOQL query limit, and the rows fetched count against the SOQL query row limit.

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