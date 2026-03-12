---
title: "UnifiedActivity"
domain: sfFieldRef
topic: unifiedactivity
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:15.580Z
estimatedTokens: 357
keywords: [UnifiedActivity, activity, automatically, captured, Einstein, Capture, EAC, data, calls, manually, logged, tasks, emails, consists, common]
---

# UnifiedActivity

> Represents an activity that is automatically captured from Einstein Activity
         Capture (EAC) or other activity data, such as calls, manually logged tasks, and emails.
         This object consists of fields common to all types of activity-related objects such as
         Event, Task, EmailMessage, VoiceCall, VideoCall, and so on. This object is available
      for reports and dashboards in the Winter ’24 release and later.

# UnifiedActivity

Represents an activity that is automatically captured from Einstein Activity Capture (EAC) or other activity data, such as calls, manually logged tasks, and emails. This object consists of fields common to all types of activity-related objects such as Event, Task, EmailMessage, VoiceCall, VideoCall, and so on. This object is available for reports and dashboards in the Winter ’24 release and later.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see [UnifiedActivity](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_unifiedactivity.htm "HTML (New Window)") in the Object Reference for the Salesforce Platform.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| ActivityDateTime | Activity Date and Time | datetime |  |  |  |  |
| ActivitySubType | Activity Subtype | picklist |  | 255 |  |  |
| ActivityType | Activity Type | picklist |  | 255 |  |  |
| DetailId | Additional Detail ID | reference |  | 18 |  |  |
| Id | Unified Activity ID | id |  | 18 |  |  |
| InternalEventKey | Internal Event Key | string |  | 255 |  |  |
| IsInsightAvailable | Insight Available | boolean |  |  |  |  |
| Snippet | Snippet | string |  | 255 |  |  |
| Subject | Subject | string |  | 255 |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
