---
title: "Context Service (POST)"
domain: omnistudio
topic: context-service-post
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:49.036Z
estimatedTokens: 240
keywords: [Context, Service, POST, Create, new, context, records, submitting, metadata, associated, JSON, data., After, validating, data, system, generates, ID., objects, created]
---

# Context Service (POST)

> Create new context records by submitting metadata and associated JSON data. After
    validating the data, the system generates a new context ID. Context objects created using this
    API apply only to a single request. They cannot be used to pass data across multiple
    requests.

# Context Service (POST)

Create new context records by submitting metadata and associated JSON data. After validating the data, the system generates a new context ID. Context objects created using this API apply only to a single request. They cannot be used to pass data across multiple requests.

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

POST

Request body for POST

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| data | String | Payload containing context-specific information. | Required | 59.0 |
| metadata | Context MetaData Input | Metadata information about context. | Required | 59.0 |

Response body for POST

[Context Info](atlas.en-us.industries_reference.meta/industries_reference/connect_responses_context_info.htm "Output representation containing detailed information about a context.")

## Code Examples

```
/connect/contexts
```

```
https://yourInstance.salesforce.com/services/data/v66.0/connect/contexts
```

```
{
  "metadata": {
    "contextDefinitionId": "11Oxx0000006VjNEAU",
    "mappingId": "11jxx0000004Q83AAE"
  },
  "data": "{"Order":[{"id":"TestOrder123","businessObjectType":"Order","Name":"Test Order","Status":"SHIPPED","AccountName":"Kroger","OrderItems":[{"id":"TestOrderItem1","businessObjectType":"OrderItem","ProductName":"Coke"},{"id":"TestOrderItem2","businessObjectType":"OrderItem","ProductName":"Pepsi"}]}]}"
}
```

## Related Topics

- Context
                        MetaData Input (atlas.en-us.industries_reference.meta/industries_reference/connect_requests_context_meta_data_input.htm)
- Context
              Info (atlas.en-us.industries_reference.meta/industries_reference/connect_responses_context_info.htm)
