---
title: "Duplicate Result Info"
domain: uiapi
topic: duplicate-result-info
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:20.778Z
estimatedTokens: 146
keywords: [Duplicate, Result, Info, check, records, exist, IDs, rule, match]
---

# Duplicate Result Info

> The result of the check for duplicate records. If duplicate records
      exist, returns the records' IDs and the duplicate rule that was used to match the
      records.

# Duplicate Result Info

The result of the check for duplicate records. If duplicate records exist, returns the records' IDs and the duplicate rule that was used to match the records.

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| allowSave | Boolean | Whether the duplicate record can be saved (true) or not (false). | Small, 50.0 | 50.0 |
| matchResultInfo | Match Result Info | Information about the match result. | Small, 50.0 | 50.0 |
| rule | String | Name of the duplicate rule. | Small, 50.0 | 50.0 |

## Related Topics

- Match Result Info (atlas.en-us.uiapi.meta/uiapi/ui_api_responses_match_result_info.htm)
