---
title: "Record Alert"
domain: omnistudio
topic: record-alert
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:50.646Z
estimatedTokens: 393
keywords: [Record, Alert, Output, representation, details, record, alert.]
---

# Record Alert

> Output representation of the details of a record
  alert.

# Record Alert

Output representation of the details of a record alert.

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| actions | Record Alert Action Info Collection | Represents the details of an action taken on a record alert. | Small, 54.0 | 54.0 |
| active | Boolean | Indicates whether a record alert is active (true) or not (false). | Small, 54.0 | 54.0 |
| description | String | The description of a record alert. | Small, 54.0 | 54.0 |
| effectiveDate | String | The start date and time from when an active record alert is in effect. | Small, 54.0 | 54.0 |
| id | String | The record alert ID. | Small, 54.0 | 54.0 |
| parentId | String | The parent ID of a record alert. | Small, 54.0 | 54.0 |
| recordAlertCategoryName | String | The category name of a record alert. | Small, 54.0 | 54.0 |
| severity | String | Indicates the degree of impact of a record alert.Possible values are:ErrorInfoWarning | Small, 54.0 | 54.0 |
| source | String | Identifies the source system that generated the record alert.Possible values are:ExternalInternal | Small, 54.0 | 54.0 |
| sourceSystemId | String | The ID of the source system that this record alert was sourced from. | Small, 54.0 | 54.0 |
| subject | String | The subject line of a record alert. | Small, 54.0 | 54.0 |
| validUntilDate | String | The date and time from when a record alert is no longer valid. | Small, 54.0 | 54.0 |
| whatId | String | The Salesforce object record ID on which a record alert is created. | Small, 54.0 | 54.0 |

## Related Topics

- Record Alert Action Info Collection (atlas.en-us.industries_reference.meta/industries_reference/connect_responses_record_alert_action_info_collection.htm)
