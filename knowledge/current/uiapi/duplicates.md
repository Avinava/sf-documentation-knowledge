---
title: "Duplicates"
domain: uiapi
topic: duplicates
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:20.792Z
estimatedTokens: 161
keywords: [Duplicates, results, check, duplicate, records]
---

# Duplicates

> The results of a check for duplicate records.

# Duplicates

The results of a check for duplicate records.

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| allowSave | Boolean | Indicates whether this duplicate record can be saved (true) or not (false). | Small, 50.0 | 50.0 |
| duplicateError | Boolean | Indicates whether duplicate records exist (true) or not (false). | Small, 50.0 | 50.0 |
| duplicateRules | String[] | A list of the duplicate rules that were used to determine whether duplicate records exist. | Small, 50.0 | 50.0 |
| matches | Match[] | The IDs of the duplicate records. | Small, 50.0 | 50.0 |

## Related Topics

- Match (atlas.en-us.uiapi.meta/uiapi/ui_api_responses_match.htm)
