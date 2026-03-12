---
title: "MsgChannelLanguageKeyword"
domain: object-reference
topic: msgchannellanguagekeyword
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:35:13.028Z
estimatedTokens: 554
keywords: [MsgChannelLanguageKeyword, consent, configuration, Messaging, channel, API, version, 48.0, later, Calls]
---

# MsgChannelLanguageKeyword

> Represents the consent configuration for a Messaging channel.
      This object is available in API version 48.0 and later.

# MsgChannelLanguageKeyword

Represents the consent configuration for a Messaging channel. This object is available in API version 48.0 and later.

## Supported Calls

describeSObjects(), delete(), query(), retrieve(), search()

## Fields

| Field | Details |
| --- | --- |
| CustomKeywords | TypetextareaPropertiesNillableDescriptionThe keywords a Messaging end user can send to receive the Custom Response. |
| CustomResponse | TypetextareaPropertiesNillableDescriptionThe automated response sent when a Messaging end user sends a Custom Keyword. |
| DoubleOptInKeywords | TypetextareaPropertiesNillableDescriptionThe keywords a Messaging end user can send to doubly opt in to receiving messages. |
| HelpKeywords | TypetextareaPropertiesNillableDescriptionThe keywords a Messaging end user can send to request help during a Messaging session. |
| HelpResponse | TypetextareaPropertiesNillableDescriptionThe automated response sent when a Messaging end user requests help. |
| MasterLanguage | TypetextareaPropertiesDescriptionThe language used for this consent configuration. |
| MessagingChannelId | TypereferencePropertiesFilter, Group, SortDescriptionThe ID of the associated Messaging channel.This is a relationship field.Relationship NameMessagingChannelRelationship TypeLookupRefers ToMessagingChannel |
| MessagingChannelUsageId | TypereferencePropertiesFilter, Group, SortDescriptionThe ID of the associated Messaging channel usage record, which is in turn associated with a messaging channel.This is a relationship field.Relationship NameMessagingChannelUsageRelationship TypeLookupRefers ToMessagingChannelUsage |
| OptInConfirmation | TypetextareaPropertiesNillableDescriptionThe automated response sent when a Messaging end user opts in to receiving messages. |
| OptInKeywords | TypetextareaPropertiesNillableDescriptionThe keywords a Messaging end user can send to explicitly opt in to receiving messages. |
| OptOutConfirmation | TypetextareaPropertiesNillableDescriptionThe automated response sent when a Messaging end user opts out of receiving messages. |
| OptOutKeywords | TypetextareaPropertiesNillableDescriptionThe keywords a Messaging end user can send to opt out of receiving messages. |
