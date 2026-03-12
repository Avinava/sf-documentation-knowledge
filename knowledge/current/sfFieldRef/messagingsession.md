---
title: "MessagingSession"
domain: sfFieldRef
topic: messagingsession
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:04.241Z
estimatedTokens: 730
keywords: [MessagingSession, session, Messaging, channel, API, version, 47.0, later]
---

# MessagingSession

> Represents a session on a Messaging channel. This object is
    available in API version 47.0 and later.

# MessagingSession

Represents a session on a Messaging channel. This object is available in API version 47.0 and later.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see [MessagingSession](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_messagingsession.htm "HTML (New Window)") in the Object Reference for the Salesforce Platform.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| AcceptTime | Accept Time | datetime |  |  |  |  |
| AgentMessageCount | Agent Message Count | int | 9 |  |  |  |
| AgentType | Agent Type | picklist |  | 255 |  |  |
| CaseId | Case ID | reference |  | 18 |  |  |
| ChannelEndUserFormula | Concatenated Messaging Channel and Messaging User | string |  | 50 |  |  |
| ChannelGroup | Group | string |  | 255 |  |  |
| ChannelIntent | Intent | string |  | 255 |  |  |
| ChannelKey | Channel Key | string |  | 150 |  |  |
| ChannelLocale | Locale | string |  | 255 |  |  |
| ChannelName | Channel Name | string |  | 80 |  |  |
| ChannelType | Channel Type | picklist |  | 255 |  |  |
| ConversationId | Conversation ID | reference |  | 18 |  |  |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| CurrencyIsoCode | Currency ISO Code | picklist |  | 3 |  |  |
| EndTime | End Time | datetime |  |  |  |  |
| EndUserAccountId | Account ID | reference |  | 18 |  |  |
| EndUserContactId | Contact ID | reference |  | 18 |  |  |
| EndUserLanguage | Messaging User Language | picklist |  | 255 |  |  |
| EndUserMessageCount | End User Message Count | int | 9 |  |  |  |
| EndedByType | Ended By Type | picklist |  | 255 |  |  |
| Id | Messaging Session ID | id |  | 18 |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| LastReferencedDate | Last Referenced Date | datetime |  |  |  |  |
| LastViewedDate | Last Viewed Date | datetime |  |  |  |  |
| LeadId | Lead ID | reference |  | 18 |  |  |
| MessagingChannelId | Messaging Channel ID | reference |  | 18 |  |  |
| MessagingEndUserId | Messaging User ID | reference |  | 18 |  |  |
| Name | Messaging Session Name | string |  | 255 |  |  |
| OpportunityId | Opportunity ID | reference |  | 18 |  |  |
| Origin | Origin | picklist |  | 255 |  |  |
| OwnerId | Owner ID | reference |  | 18 |  |  |
| PreviewDetails | Preview Details | string |  | 255 |  |  |
| SessionKey | Session Key | string |  | 36 |  |  |
| StartTime | Start Time | datetime |  |  |  |  |
| Status | Status | picklist |  | 255 |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |
| TargetUserId | User ID | reference |  | 18 |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
