---
title: "ConversationInsightEvent"
domain: sfFieldRef
topic: conversationinsightevent
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:54.592Z
estimatedTokens: 294
keywords: [ConversationInsightEvent, Notifies, subscribers, whenever, Einstein, Insight, rule, triggered, API, version, 60.0, later]
---

# ConversationInsightEvent

> Notifies subscribers whenever an Einstein Insight rule is
			triggered. This object is available in API version 60.0 and later.

# ConversationInsightEvent

Notifies subscribers whenever an Einstein Insight rule is triggered. This object is available in API version 60.0 and later.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see ConversationInsightEvent in the Platform Events Developer Guide.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| Detail | Detail | string |  | 18 |  |  |
| EventUuid | Event UUID | string |  | 36 |  |  |
| InsightChannelType | Insight Channel Type | picklist |  | 255 |  |  |
| InsightKeywords | Insight Keywords | json |  | 250000 |  |  |
| InsightOwner | Insight Owner | string |  | 18 |  |  |
| InsightParticipants | Insight Participants | json |  | 250000 |  |  |
| InsightTypeKey | Insight Type Key | string |  | 36 |  |  |
| InsightTypeName | Insight Type Name | string |  | 80 |  |  |
| ReplayId | Replay Id | string |  | 1000 |  |  |
| UnifiedActivity | Unified Activity | string |  | 18 |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
