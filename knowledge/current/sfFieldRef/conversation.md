---
title: "Conversation"
domain: sfFieldRef
topic: conversation
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:54.557Z
estimatedTokens: 359
keywords: [Conversation, end, user, agent, API, version, 49.0, later]
---

# Conversation

> Represents a conversation between an end user and an agent.
      Available in API version 49.0 and later.

# Conversation

Represents a conversation between an end user and an agent. Available in API version 49.0 and later.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see [Conversation](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_conversation.htm "HTML (New Window)") in the Object Reference for the Salesforce Platform.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| ConversationChannelId | Conversation Channel ID | reference |  | 18 |  |  |
| ConversationIdentifier | Conversation Identifier | string |  | 255 |  |  |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| EndTime | Conversation End time | datetime |  |  |  |  |
| EndTimeMilliSecs | Milliseconds portion of Conversation End time | int | 9 |  |  |  |
| Id | Conversation ID | id |  | 18 |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| Name | Conversation Name | string |  | 30 |  |  |
| StartTime | Conversation Start time | datetime |  |  |  |  |
| StartTimeMilliSecs | Milliseconds portion of Conversation Start time | int | 9 |  |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
