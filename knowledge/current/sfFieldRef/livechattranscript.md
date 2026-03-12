---
title: "LiveChatTranscript"
domain: sfFieldRef
topic: livechattranscript
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:02.530Z
estimatedTokens: 850
keywords: [LiveChatTranscript, automatically, created, Live, Agent, chat, session, stores, API, version, 24.0, later]
---

# LiveChatTranscript

> This object is automatically created for each Live Agent chat session
   and stores information about the session. This object is available in API version 24.0 and
  later.

# LiveChatTranscript

This object is automatically created for each Live Agent chat session and stores information about the session. This object is available in API version 24.0 and later.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see [LiveChatTranscript](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_livechattranscript.htm "HTML (New Window)") in the Object Reference for the Salesforce Platform.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| Abandoned | Abandoned After | int | 9 |  |  |  |
| AccountId | Account ID | reference |  | 18 |  |  |
| AverageResponseTimeOperator | Agent Average Response Time | int | 9 |  |  |  |
| AverageResponseTimeVisitor | Visitor Average Response Time | int | 9 |  |  |  |
| Body | Body | textarea |  | 131072 |  |  |
| Browser | Browser | string |  | 200 |  |  |
| BrowserLanguage | Browser Language | string |  | 200 |  |  |
| CaseId | Case ID | reference |  | 18 |  |  |
| ChatDuration | Chat Duration | int | 9 |  |  |  |
| ChatKey | Chat Key | string |  | 200 |  |  |
| ContactId | Contact ID | reference |  | 18 |  |  |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| CurrencyIsoCode | Currency ISO Code | picklist |  | 3 |  |  |
| EndTime | End Time | datetime |  |  |  |  |
| EndedBy | Ended By | picklist |  | 255 |  |  |
| Id | Chat Transcript ID | id |  | 18 |  |  |
| IpAddress | Visitor IP Address | string |  | 39 |  |  |
| IsChatbotSession | Is Chatbot Session | boolean |  |  |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| LastReferencedDate | Last Referenced Date | datetime |  |  |  |  |
| LastViewedDate | Last Viewed Date | datetime |  |  |  |  |
| LeadId | Lead ID | reference |  | 18 |  |  |
| LiveChatButtonId | Chat Button ID | reference |  | 18 |  |  |
| LiveChatDeploymentId | Chat Deployment ID | reference |  | 18 |  |  |
| LiveChatVisitorId | Chat Visitor ID | reference |  | 18 |  |  |
| Location | Location | string |  | 200 |  |  |
| MaxResponseTimeOperator | Agent Maximum Response Time | int | 9 |  |  |  |
| MaxResponseTimeVisitor | Visitor Maximum Response Time | int | 9 |  |  |  |
| Name | Chat Transcript Name | string |  | 255 |  |  |
| OperatorMessageCount | Agent Message Count | int | 9 |  |  |  |
| OwnerId | Owner ID | reference |  | 18 |  |  |
| Platform | Platform | string |  | 200 |  |  |
| ReferrerUri | Referring Site | string |  | 200 |  |  |
| RequestTime | Request Time | datetime |  |  |  |  |
| ScreenResolution | Screen Resolution | string |  | 200 |  |  |
| SkillId | Skill ID | reference |  | 18 |  |  |
| StartTime | Start Time | datetime |  |  |  |  |
| Status | Status | picklist |  | 255 |  |  |
| SupervisorTranscriptBody | Supervisor Transcript Body | textarea |  | 131072 |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |
| UserAgent | User Agent | string |  | 200 |  |  |
| VisitorMessageCount | Visitor Message Count | int | 9 |  |  |  |
| VisitorNetwork | Network | string |  | 200 |  |  |
| WaitTime | Wait Time | int | 9 |  |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
