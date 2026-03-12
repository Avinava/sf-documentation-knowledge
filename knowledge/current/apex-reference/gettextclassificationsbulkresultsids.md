---
title: "getTextClassificationsBulkResults(ids)"
domain: apex-reference
topic: gettextclassificationsbulkresultsids
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:19.214Z
estimatedTokens: 196
keywords: [getTextClassificationsBulkResults, ids, text, classification, results, API, Version, Requires, Chatter]
---

# getTextClassificationsBulkResults(ids)

> Gets text classification results for request IDs.

# getTextClassificationsBulkResults(ids)

Gets text classification results for request IDs.

## API Version

59.0

## Requires Chatter

No

## Signature

public static ConnectApi.TextClassificationsBulkResultsOutputRepresentation getTextClassificationsBulkResults(List<String\> ids)

## Parameters

ids

Type: List([String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type."))

List of request IDs.

## Return Value

Type: [ConnectApi.TextClassificationsBulkResultsOutputRepresentation](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_text_classifications_bulk_results.htm "Text classification to get results for multiple text classification request IDs.")

## Example

```

```

## Code Examples

```
List <String> requestIds = new List <String> ();
        requestIds.add(requestId);
        ConnectApi.TextClassificationsBulkResultsOutputRepresentation output = ConnectApi.OMSAnalytics.getTextClassificationsBulkResults(requestIds);
```

## Related Topics

- String (atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm)
- ConnectApi.TextClassificationsBulkResultsOutputRepresentation (atlas.en-us.apexref.meta/apexref/apex_connectapi_output_text_classifications_bulk_results.htm)
