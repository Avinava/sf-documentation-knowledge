---
title: "leanerQueryTags(input)"
domain: omnistudio
topic: leanerquerytagsinput
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:25:07.652Z
keywords: [leanerQueryTags, input, Queries, context, tags, returns, optimized, leaner, result, set, compared, standard, queryTags., Signature, Usage, Example, Parameters, Return, Value]
---

# leanerQueryTags(input)

> Queries context tags and returns an optimized, leaner result set compared to the standard
    queryTags.

### leanerQueryTags(input)

Queries context tags and returns an optimized, leaner result set compared to the standard queryTags.

#### Signature

public Map<String,Object> leanerQueryTags(Map<String,Object> input)

#### Usage

Use the leanerQueryTags method to retrieve tag values from a context instance with optimized performance. This method returns a leaner result set.

Before calling this method, you must first create a context instance using the buildContext method and obtain the contextId.

#### Example

```

```

#### Parameters

input

Type: Map<String,Object>

Input map that contains the parameters required to query the tags. Valid keys are:

-   contextId: (String) — ID of the context to query\[cite: 223\].
-   tags: (List<String>) — List of tag names to query from the context instance. Tags serve as aliases for nodes and attributes in the context structure.

#### Return Value

Type: Map<String,Object>

Returns a map that contains the query results. The map includes these keys:

-   contextId (String) — ID of the context instance.
-   recordIds (List<String>) — List of record IDs associated with the queried tags.
-   leanerQueryTagResult (Map<String,Object>) — Map that contains the query results. Each key represents a tag name, and its value contains the associated tag data with attribute information.