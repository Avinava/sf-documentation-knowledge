---
title: "MsgChannelLanguageKeyword"
domain: sfFieldRef
topic: msgchannellanguagekeyword
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:36:04.477Z
estimatedTokens: 466
keywords: [MsgChannelLanguageKeyword, consent, configuration, Messaging, channel, API, version, 48.0, later]
---

# MsgChannelLanguageKeyword

> Represents the consent configuration for a Messaging channel.
      This object is available in API version 48.0 and later.

# MsgChannelLanguageKeyword

Represents the consent configuration for a Messaging channel. This object is available in API version 48.0 and later.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see [MsgChannelLanguageKeyword](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_msgchannellanguagekeyword.htm "HTML (New Window)") in the Object Reference for the Salesforce Platform.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| CustomKeywords | Custom Keywords | textarea |  | 500 |  |  |
| CustomResponse | Custom Response | textarea |  | 32000 |  |  |
| DoubleOptInKeywords | Double Opt-In Keywords | textarea |  | 500 |  |  |
| HelpKeywords | Help Keywords | textarea |  | 500 |  |  |
| HelpResponse | Help Response | textarea |  | 65536 |  |  |
| Id | Messaging Channel Language Keyword ID | id |  | 18 |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Modified On | datetime |  |  |  |  |
| MasterLanguage | Language | textarea |  | 256 |  |  |
| MessagingChannelId | Messaging Channel ID | reference |  | 18 |  |  |
| MessagingChannelUsageId | Messaging Channel Usage ID | reference |  | 18 |  |  |
| OptInConfirmation | Opt-In Confirmation | textarea |  | 65536 |  |  |
| OptInKeywords | Opt-In Keywords | textarea |  | 500 |  |  |
| OptOutConfirmation | Opt-Out Confirmation | textarea |  | 65536 |  |  |
| OptOutKeywords | Opt-Out Keywords | textarea |  | 500 |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
