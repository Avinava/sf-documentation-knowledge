---
title: "Eligibility Rule Details"
domain: omnistudio
topic: eligibility-rule-details
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:25:09.369Z
keywords: [Eligibility, Rule, Details]
---

# Eligibility Rule Details

# Eligibility Rule Details

Output representation of eligibility rule details for qualification or disqualification decision tables.

JSON example

```

```

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| conditionCriteria | String | Custom logic that's used to decide how the input fields are processed. | Small, 66.0 | 66.0 |
| conditionType | String | Condition logic that's used for input fields. Valid values are:AllAnyCustom | Small, 66.0 | 66.0 |
| createdDate | String | Date and time when the decision table was created | Small, 66.0 | 66.0 |
| decisionTableId | String | The unique identifier of the decision table that's associated with the eligibility rule. | Small, 66.0 | 66.0 |
| decisionTableName | String | Name of the decision table. | Small, 66.0 | 66.0 |
| description | String | Description of the condition. | Small, 66.0 | 66.0 |
| hasIncrementalSyncFailed | Boolean | Indicates if the incremental sync has failed (true) or not (false). | Small, 66.0 | 66.0 |
| isIncrementalSyncEnabled | Boolean | Indicates if the incremental sync is enabled (true) or not (false). | Small, 66.0 | 66.0 |
| lastIncrementalSyncDate | String | Date and time when the decision table was last incrementally refreshed | Small, 66.0 | 66.0 |
| lastModifiedDate | String | Date and time when the decision table was last modified | Small, 66.0 | 66.0 |
| lastSyncDate | String | Date and time when the decision table was last refreshed. | Small, 66.0 | 66.0 |
| parameters | Eligibility Rule Parameter[] | Description of the input and output variables for the decision table. | Small, 66.0 | 66.0 |
| refreshFailureReason | String | Reason for the decision table refresh failure. | Small, 66.0 | 66.0 |
| refreshStatus | String | Returns Queued if the refresh request is successful, or Failed if an error is encountered. | Small, 66.0 | 66.0 |
| rowLevelOverrideType | String | Specifies row-level override behavior for Decision Table cells, allowing granular control at the cell level. | Small, 66.0 | 66.0 |
| sourceCriteria | Decision Table Source Criteria[] | Criteria used to filter and select a specific type of rule for an application. | Small, 66.0 | 66.0 |
| sourceObject | String | Name of the source object associated with the decision table. | Small, 66.0 | 66.0 |
| sourceType | String | Type of data source that's used to create a decision table. Valid values are:SingleSobjectMultipleSobjectsCSV Upload | Small, 66.0 | 66.0 |
| status | String | Status of the decision table. Valid values are:ActiveInactiveDraftActivationInProgress | Small, 66.0 | 66.0 |
| usageType | String | Type of industry or the application that's using a decision table. Valid values are:ProductQualificationProductCategoryQualificationNone | Small, 66.0 | 66.0 |