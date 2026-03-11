---
title: "ConnectApi.RecordAlert"
domain: omnistudio
topic: connectapirecordalert
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T15:25:07.847Z
keywords: [ConnectApi.RecordAlert]
---

# ConnectApi.RecordAlert

# ConnectApi.RecordAlert

Representation of the details of a record alert.

| Property Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| actions | ConnectApi.RecordAlert​ActionInfoCollection | Represents the details of an action taken on a record alert. | 54.0 |
| active | Boolean | Indicates whether a record alert is active (true) or not (false). | 54.0 |
| description | String | The description of a record alert. | 54.0 |
| effectiveDate | Datetime | The start date and time from when an active record alert is in effect. | 54.0 |
| id | String | The record alert ID. | 54.0 |
| parentId | String | The parent ID of a record alert. | 54.0 |
| recordAlertCategoryName | String | The category name of a record alert. | 54.0 |
| severity | ConnectApi.​RecordAlertSeverityType | Indicates the degree of impact of a record alert.Possible values are:ErrorInfoWarning | 54.0 |
| source | ConnectApi.​RecordAlertSourceTypeEnum | Identifies the source system that generated the record alert.Possible values are:ApexInternal | 54.0 |
| sourceSystemId | String | The ID of the source system that this record alert was sourced from. | 54.0 |
| subject | String | The subject line of a record alert. | 54.0 |
| validUntilDate | Datetime | The date and time from when a record alert is no longer valid. | 54.0 |
| whatId | String | The Salesforce object record ID on which a record alert is created. | 54.0 |