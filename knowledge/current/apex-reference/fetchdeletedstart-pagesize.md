---
title: "fetchDeleted(start, pageSize)"
domain: apex-reference
topic: fetchdeletedstart-pagesize
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:33.704Z
keywords: [fetchDeleted, start, pageSize, Fetches, number, deleted, rows, within, specified, range., method, counts, only, after, creation, pagination, cursor., Calling, PaginationCursor.fetchDeleted, against]
---

# fetchDeleted(start, pageSize)

> Fetches the number of deleted rows within the specified range. The method counts only
  rows deleted after the creation of the pagination cursor. Calling the
  PaginationCursor.fetchDeleted() method counts against the SOQL query
  limit, and the rows fetched count against the SOQL query row limit.

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