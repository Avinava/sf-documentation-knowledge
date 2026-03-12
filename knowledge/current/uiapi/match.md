---
title: "Match"
domain: uiapi
topic: match
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:20.954Z
estimatedTokens: 125
keywords: [Match, group, records, duplicate, rules]
---

# Match

> A group of records that match the duplicate rules.

# Match

A group of records that match the duplicate rules.

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| duplicateResultInfos | Map<String, Duplicate Result Info> | A map of the duplicate rules and the information about the duplicate match. | Small, 50.0 | 50.0 |
| objectApiName | String | The object's API name. | Small, 50.0 | 50.0 |
| recordIds | String[] | A list of IDs of the matching records. | Small, 50.0 | 50.0 |

## Related Topics

- Duplicate Result Info (atlas.en-us.uiapi.meta/uiapi/ui_api_responses_duplicate_result_info.htm)
