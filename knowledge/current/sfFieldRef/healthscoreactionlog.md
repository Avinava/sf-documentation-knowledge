---
title: "HealthScoreActionLog"
domain: sfFieldRef
topic: healthscoreactionlog
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:00.184Z
estimatedTokens: 431
keywords: [HealthScoreActionLog, log, actions, triggered, Dynamic, Unified, Health, Scoring, component, feature]
---

# HealthScoreActionLog

> Represents the log of actions triggered from the Dynamic Actions for Unified
         Health Scoring component in the Unified Health Scoring feature.

# HealthScoreActionLog

Represents the log of actions triggered from the Dynamic Actions for Unified Health Scoring component in the Unified Health Scoring feature.

For more information, see HealthScoreActionLog in the Salesforce Health Cloud Developer Guide.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| ActionDate | Action Date | datetime |  |  |  |  |
| ActionDescription | Action Description | string |  | 255 |  |  |
| ActionIconUrl | Action Icon Url | string |  | 255 |  |  |
| ActionLabel | Action Label | string |  | 255 |  |  |
| ActionName | Action Name | string |  | 255 |  |  |
| ActionStatus | Action Status | picklist |  | 40 |  |  |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| Id | Health Score Action Log ID | id |  | 18 |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| LastReferencedDate | Last Referenced Date | datetime |  |  |  |  |
| LastViewedDate | Last Viewed Date | datetime |  |  |  |  |
| Name | Health Score Action Log Name | string |  | 255 |  |  |
| PerformedById | User ID | reference |  | 18 |  |  |
| Score | Score | double |  |  | 10 | 4 |
| ScoreCategoryId | Score Category ID | reference |  | 18 |  |  |
| SubjectId | Subject ID | reference |  | 18 |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |
| TargetAccountId | Account ID | reference |  | 18 |  |  |
| TargetContactId | Contact ID | reference |  | 18 |  |  |
| TargetLeadId | Lead ID | reference |  | 18 |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
