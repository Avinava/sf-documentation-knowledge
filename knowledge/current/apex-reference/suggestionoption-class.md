---
title: "SuggestionOption Class"
domain: apex-reference
topic: suggestionoption-class
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:34.287Z
keywords: [SuggestionOption, Class, maximum, number, record, article, suggestions, retrieve., setLimit, limit, Signature, Parameters, Return, Value, Usage]
---

# SuggestionOption Class

> The maximum number of record or article suggestions to
    retrieve.

### setLimit(limit)

The maximum number of record or article suggestions to retrieve.

#### Signature

public void setLimit(Integer limit)

#### Parameters

limit

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

The maximum number of record or article suggestions to retrieve.

#### Return Value

Type: void

#### Usage

By default, the System.Search.suggest(String, String, Search.SuggestionOption) method returns the 5 most relevant results. However, if your query is broad, it could match more than 5 results. If Search.SuggestionResults.hasMoreResults() returns true, there are more than 5 results. To retrieve them, call setLimit(Integer) to increase the number of suggestions results.

```

```