---
title: "CustomMsgChannel"
domain: object-reference
topic: custommsgchannel
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:07.709Z
estimatedTokens: 975
keywords: [CustomMsgChannel, custom, conversation, channel, stores, event-driven, Messaging, settings, channels, implemented, Bring, Own, CCaaS, API, version]
---

# CustomMsgChannel

> Represents a custom conversation channel and stores event-driven Messaging settings. Custom conversation channels are
         implemented for Bring Your Own Channel for Messaging and Bring Your Own Channel for CCaaS Messaging channels. This object is available in API
      version 63.0 and later.

# CustomMsgChannel

Represents a custom conversation channel and stores event-driven Messaging settings. Custom conversation channels are implemented for Bring Your Own Channel for Messaging and Bring Your Own Channel for CCaaS Messaging channels. This object is available in API version 63.0 and later.

## Supported Calls

create(), delete(), describeSObjects(), query(), retrieve(), update(), upsert()

## Special Access Rules

Access to standard objects requires Salesforce admin privileges or the Customize Application permission.

## Fields

| Field | Details |
| --- | --- |
| ChannelDefinitionId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionSpecifies the ConversationChannelDefinition for the custom channel.This field is a relationship field.Relationship NameChannelDefinitionRefers ToConversationChannelDefinition |
| EventCapabilitiesIsInboundAcknowledgementEnabled | TypebooleanPropertiesCreate, Filter, UpdateDescriptionIndicates whether the Salesforce admin has enabled read receipts and delivery receipts for inbound messages in the Messaging settings (true) or whether the admin hasn’t enabled these inbound acknowledgments (false). The default value is false, meaning inbound acknowledgments are disabled by default even if supported by the partner.This field is available in API version 65.0 and later. Use this field instead of HasInboundReceipts. |
| EventCapabilitiesIsProgressIndicatorEnabled | TypebooleanPropertiesCreate, Filter, UpdateDescriptionIndicates whether the Salesforce admin has enabled AI agent progress indicators in the Messaging settings (true) or whether the admin hasn’t enabled progress indicators (false). The default value is false, meaning progress indicators for AI agents are disabled by default even if supported by the partner.This field is available in API version 65.0 and later. |
| EventCapabilitiesIsTypingIndicatorDisabled | TypebooleanPropertiesCreate, Filter, UpdateDescriptionIndicates whether the Salesforce admin has enabled typing indicators for outbound messages in the Messaging settings (false) or whether the admin hasn’t enabled outbound typing indicators (true). The default value is false, meaning the outbound typing indicators are enabled by default.This field is available in API version 65.0 and later. Use this field instead of HasTypingIndicator. |
| HasInboundReceipts | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the Salesforce admin has enabled read receipts and delivery receipts for inbound messages in the Messaging settings (true) or whether the admin hasn’t enabled these inbound acknowledgments (false). The default value is false, meaning inbound acknowledgments are disabled by default even if supported by the partner.Available in API versions 63.0 to 65.0. In API version 66.0 and later, this field is removed. Use EventCapabilitiesIsInboundAcknowledgementEnabled instead. |
| HasTypingIndicator | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the Salesforce admin has enabled typing indicators for outbound messages in the Messaging settings (true) or whether the admin hasn’t enabled outbound typing indicators (false). The default value is true, meaning the outbound typing indicator feature is enabled by default if supported by the partner. To disable the outbound typing indicator feature, set this value to false.Available in API versions 63.0 to 65.0. In API version 66.0 and later, this field is removed. Use EventCapabilitiesIsTypingIndicatorDisabled instead. |
| MessagingChannelId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionSpecifies the Messaging Channel ID for the custom channel. This field is unique within your organization.This field is a relationship field.Relationship NameMessagingChannelRefers ToMessagingChannel |
