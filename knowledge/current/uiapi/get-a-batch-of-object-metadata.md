---
title: "Get a Batch of Object Metadata"
domain: uiapi
topic: get-a-batch-of-object-metadata
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:36:20.502Z
estimatedTokens: 207
keywords: [Batch, Metadata, specific, objects, includes, describing, child, relationships, record, theme]
---

# Get a Batch of Object Metadata

> Get metadata about specific objects. The response includes a batch
      of metadata describing fields, child relationships, record type, and theme. You can request up
      to 2,000 objects in an object metadata request.

# Get a Batch of Object Metadata

Get metadata about specific objects. The response includes a batch of metadata describing fields, child relationships, record type, and theme. You can request up to 2,000 objects in an object metadata request.

Resource

```

```

objectApiNames—A comma-delimited list of up to 2,000 [supported](atlas.en-us.uiapi.meta/uiapi/ui_api_get_started_supported_objects.htm#ui_api_get_started_supported_objects "User Interface API supports all custom objects and external objects and many standard objects.") objects.

Available Version

49.0

HTTP Method

GET

Response Body

[Simplified Batch Results](atlas.en-us.uiapi.meta/uiapi/ui_api_responses_batch_results_simplified.htm "The simplified results from a request to a batch resource. Results include information for each subrequest in the batch.")

## Code Examples

```
/ui-api/object-info/batch/{objectApiNames}
```

## Related Topics

- supported (atlas.en-us.uiapi.meta/uiapi/ui_api_get_started_supported_objects.htm)
- Simplified Batch Results (atlas.en-us.uiapi.meta/uiapi/ui_api_responses_batch_results_simplified.htm)
