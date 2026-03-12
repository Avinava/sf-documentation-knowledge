---
title: "EngagementTopic"
domain: sfFieldRef
topic: engagementtopic
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:57.342Z
estimatedTokens: 484
keywords: [EngagementTopic, topics, discussed, customer, attendees, engagement, initiates, interaction, calling, service, representative, inquire, insurance, claim, topic]
---

# EngagementTopic

> Represents information about the
         topics discussed by a customer and other attendees during an engagement. For example, when
         a customer initiates an engagement interaction by calling a service representative to
         inquire about an insurance claim, the topic of the engagement is Claim. This object is
      available in API version 55.0 and later.

# EngagementTopic

Represents information about the topics discussed by a customer and other attendees during an engagement. For example, when a customer initiates an engagement interaction by calling a service representative to inquire about an insurance claim, the topic of the engagement is Claim. This object is available in API version 55.0 and later.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see EngagementTopic in the Industries Common Resources Developer Guide, Manufacturing Cloud Developer Guide, and Salesforce Health Cloud Developer Guide.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| EngagementId | Engagement ID | reference |  | 18 |  |  |
| Id | Engagement Topic ID | id |  | 18 |  |  |
| InteractionSummary | Interaction Summary | string |  | 765 |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| LastReferencedDate | Last Referenced Date | datetime |  |  |  |  |
| LastViewedDate | Last Viewed Date | datetime |  |  |  |  |
| Name | Name | string |  | 255 |  |  |
| OwnerId | Owner ID | reference |  | 18 |  |  |
| ParentTopicId | Engagement Topic ID | reference |  | 18 |  |  |
| ProcessFailureReason | Process Failure Reason | picklist |  | 255 |  |  |
| ProcessName | Process Name | string |  | 255 |  |  |
| ProcessStatus | Process Status | picklist |  | 255 |  |  |
| ProcessType | Process Type | picklist |  | 40 |  |  |
| RelatedPersonId | RelatedPerson ID | reference |  | 18 |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |
| TopicId | Topic ID | reference |  | 18 |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
