---
title: "Contracts (PATCH, POST)"
domain: clm-developer-guide
topic: contracts-patch-post
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:22.243Z
estimatedTokens: 234
keywords: [Contracts, PATCH, POST]
---

# Contracts (PATCH, POST)

> Update and create contracts using the object ID.

# Contracts (PATCH, POST)

Update and create contracts using the object ID.

Resource

```

```

Available version

56.0

HTTP methods

PATCH, POST

Example for PATCH

```

```

Example for POST

```

```

Request body

JSON example for creating and updating contract

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| isAutoDocgenRequired | Boolean | Specifies whether automatic document generation is required or not. | Required | 56.0 |
| recordTypeName | String | Contract record type name. | Optional | 56.0 |
| sourceObjectId | String | Source record ID. | Required | 56.0 |
| templateName | String | Document template name for document generation. | Optional | 56.0 |

Response body

[Contract Output Response Representation](atlas.en-us.clm_developer_guide.meta/clm_developer_guide/connect_responses_contract_output_response.htm "Contract list.")

## Code Examples

```
/connect/clm/contract
```

```
https://yourInstance.salesforce.com/services/data/v56.0/connect/clm/contract
```

```
https://yourInstance.salesforce.com/services/data/v56.0/connect/clm/contract
```

```
{
"sourceObjectId" : "006xx000001a4KaAAI",
"templateName" : "Value1",
"isAutoDocgenRequired" :true/false
}
```

## Related Topics

- Contract Output Response Representation (atlas.en-us.clm_developer_guide.meta/clm_developer_guide/connect_responses_contract_output_response.htm)
