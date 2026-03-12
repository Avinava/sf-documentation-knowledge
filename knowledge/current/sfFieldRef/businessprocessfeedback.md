---
title: "BusinessProcessFeedback"
domain: sfFieldRef
topic: businessprocessfeedback
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:50.755Z
estimatedTokens: 309
keywords: [BusinessProcessFeedback, Setup, stores, survey, question, associated, stage, customer, lifecycle, map, maps, track, scores, provided, customers]
---

# BusinessProcessFeedback

> Setup object that stores information about the survey and the question
      associated with each stage in a customer lifecycle map. Customer lifecycle maps are used to
      track the scores provided by customers across their lifecycle using Salesforce Surveys.

# BusinessProcessFeedback

Setup object that stores information about the survey and the question associated with each stage in a customer lifecycle map. Customer lifecycle maps are used to track the scores provided by customers across their lifecycle using Salesforce Surveys.

For more information, see BusinessProcessFeedback in the Object Reference for the Salesforce Platform.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| ActionName | Feedback Collection Method Name | string |  | 255 |  |  |
| ActionParam | Feedback Collection Method Parameter | string |  | 255 |  |  |
| ActionType | Feedback Collection Method | picklist |  | 255 |  |  |
| BusinessProcessDefinitionId | Business Process Definition ID | reference |  | 18 |  |  |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| Id | Business Process Feedback ID | id |  | 18 |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
