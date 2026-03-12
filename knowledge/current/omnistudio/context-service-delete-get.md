---
title: "Context Service (DELETE, GET)"
domain: omnistudio
topic: context-service-delete-get
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:49.017Z
estimatedTokens: 120
keywords: [Context, Service, DELETE, GET, Retrieve, context, details, ID., Delete, record]
---

# Context Service (DELETE, GET)

> Retrieve the context details using a context ID. Delete a context record using a
    context ID.

# Context Service (DELETE, GET)

Retrieve the context details using a context ID. Delete a context record using a context ID.

Resource

```

```

Example

```

```

Available version

59.0

Requires Chatter

No

HTTP methods

DELETE, GET

Response body for GET

[Context Info](atlas.en-us.industries_reference.meta/industries_reference/connect_responses_context_info.htm "Output representation containing detailed information about a context.")

Response body for DELETE

None.

## Code Examples

```
/connect/contexts/${contextId}
```

```
https://yourInstance.salesforce.com/services/data/v66.0/connect/contexts/c4c69a9a-3841-4fc3-a10d-a52779ade3d8
```

## Related Topics

- Context Info (atlas.en-us.industries_reference.meta/industries_reference/connect_responses_context_info.htm)
