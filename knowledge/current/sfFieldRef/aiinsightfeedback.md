---
title: "AIInsightFeedback"
domain: sfFieldRef
topic: aiinsightfeedback
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:45.718Z
estimatedTokens: 361
keywords: [AIInsightFeedback, Einstein, prediction, insight, feedback, API, version, 47.0, later]
---

# AIInsightFeedback

> Represents an Einstein prediction insight feedback. This object is
    available in API version 47.0 and later.

# AIInsightFeedback

Represents an Einstein prediction insight feedback. This object is available in API version 47.0 and later.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see [AIInsightFeedback](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_aiinsightfeedback.htm "HTML (New Window)") in the Object Reference for the Salesforce Platform.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| ActualValue | Actual Value | string |  | 255 |  |  |
| AiFeedback | AI Insight Feedback | picklist |  | 255 |  |  |
| AiInsightFeedbackType | AI Insight Feedback Type | picklist |  | 255 |  |  |
| AiRecordInsightId | AI Record Insight ID | reference |  | 18 |  |  |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| Id | AI Insight Feedback ID | id |  | 18 |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| Name | Name | string |  | 255 |  |  |
| Rank | Rank | int | 9 |  |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |
| ValueId | AI Insight Value ID or AI Insight Action ID | reference |  | 18 |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
