---
title: "Mapper Result"
domain: financial-services-cloud-object-reference
topic: mapper-result
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:28.558Z
estimatedTokens: 203
keywords: [Mapper, Result]
---

# Mapper Result

> Represents the Mapper result.

# Mapper Result

Represents the Mapper result.

```

```

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| assetsAnd​Liabilities | String[] | List of IDs created for AssetsAndLiabilities records. | Big, 49.0 | 49.0 |
| customerProperties | String[] | List of IDs created for CustomerProperty records. | Big, 49.0 | 49.0 |
| errors | String[] | List of errors that occurred during the creation process. | Big, 49.0 | 49.0 |
| financialAccounts | String[] | List of IDs created for FinancialAccount records. | Big, 49.0 | 49.0 |
| personAccounts | String[] | List of IDs created for PersonAccount records. | Big, 49.0 | 49.0 |
| status | String | Whether the creation process succeeded, partially succeeded, or failed. | Small, 49.0 | 49.0 |

## Code Examples

```
{
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
```
