---
title: "Selected Search Result Input"
domain: health-cloud-object-reference
topic: selected-search-result-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:33.170Z
estimatedTokens: 140
keywords: [Selected, Search, Result, Input, representation]
---

# Selected Search Result Input

> Input representation for the selected search result.

# Selected Search Result Input

Input representation for the selected search result.

Root XML tag

<selectedSearchResult>

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| objectName | String | The name of the object to be verified. | Required | 54.0 |
| selectedRecordId | String | The object record ID on which the data is to be verified. | Required | 54.0 |
| selectedRecordObject | Field Value Input[] | The object record fields on which the data is to be verified. | Optional | 54.0 |

## Related Topics

- Field Value Input (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/connect_requests_field_value_input.htm)
