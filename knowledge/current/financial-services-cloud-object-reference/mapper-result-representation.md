---
title: "Mapper Result Representation"
domain: financial-services-cloud-object-reference
topic: mapper-result-representation
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:28.564Z
estimatedTokens: 92
keywords: [Mapper, Result, Representation, POST]
---

# Mapper Result Representation

> Represents the result representation of the POST
    method.

# Mapper Result Representation

Represents the result representation of the POST method.

JSON example

```

```

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| message | String | Success or failure message. | Small, 49.0 | 49.0 |
| result | Mapper Result | Mapper result. | Small, 49.0 | 49.0 |

## Code Examples

```
{
  "result": {
    "assetsAndLiabilities": [
      "a03B000000735LwIAI",
      "a03B000000735LxIAI",
      "a03B000000735LyIAI"
    ],
    "customerProperties": [
      "0b8B0000000GnjdIAC"
    ],
    "errors": [],
    "financialAccounts": [
      "a0EB000000227WtMAI",
      "a0EB000000227WuMAI",
      "a0EB000000227WvMAI"
    ],
    "personAccounts": [
      "001B000001K8Zx5IAF"
    ],
    "status": "SUCCESS"
  }
}
```

## Related Topics

- Mapper Result (atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/connect_responses_entity_mapper_result.htm)
