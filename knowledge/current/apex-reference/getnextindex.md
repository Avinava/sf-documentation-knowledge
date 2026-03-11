---
title: "getNextIndex()"
domain: apex-reference
topic: getnextindex
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:33.681Z
keywords: [getNextIndex, Gets, start, index, required, fetch, next, page, results., value, parameter, call, PaginationCursor.fetchPage, pageSize, Signature, Return, Value]
---

# getNextIndex()

> Gets the start index required to fetch the next page of results. Use this value as the
      start parameter in the call to PaginationCursor.fetchPage(start, pageSize) to fetch the next page of
    results.

### getNextIndex()

Gets the start index required to fetch the next page of results. Use this value as the start parameter in the call to PaginationCursor.fetchPage(start, pageSize) to fetch the next page of results.

#### Signature

public Integer getNextIndex()

#### Return Value

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")