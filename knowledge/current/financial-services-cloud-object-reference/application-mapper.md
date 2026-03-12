---
title: "Application Mapper"
domain: financial-services-cloud-object-reference
topic: application-mapper
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:28.459Z
estimatedTokens: 186
keywords: [Application, Mapper, financial, accounts, records, residential, loan]
---

# Application Mapper

> Create financial accounts and related records from a residential
      loan application.

# Application Mapper

Create financial accounts and related records from a residential loan application.

Resource

```

```

Available version

49.0

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
| recordId | String | ID of the residential loan application. | Required | 49.0 |

Response example

```

```

Response body for POST

[Mapper Result Representation](atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/connect_responses_entity_mapper_result_representation.htm "Represents the result representation of the POST method.")

## Code Examples

```
/connect/financialservices/mapper
```

```
{
  "recordId": "0cdB0000000CbVGIA0"
}
```

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

- Mapper Result Representation (atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/connect_responses_entity_mapper_result_representation.htm)
