---
title: "MessagingChannel"
domain: object-reference
topic: messagingchannel
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:12.793Z
estimatedTokens: 2345
keywords: [MessagingChannel, communication, channel, end, user, send, message, agent, SMS, number, Facebook, another, messaging, API, version]
---

# MessagingChannel

> Represents a communication channel that an end user can use to send a
			message to an agent. A communication channel can be an SMS number, a Facebook page, or
			another supported messaging channel. This object is available in API version 40.0
		and later.

# MessagingChannel

Represents a communication channel that an end user can use to send a message to an agent. A communication channel can be an SMS number, a Facebook page, or another supported messaging channel. This object is available in API version 40.0 and later.

## Supported Calls

create(), describeLayout(), describeSObjects(), query(), retrieve(), search(), update(), upsert()

## Fields

| Field Name | Details |
| --- | --- |
| BusinessHoursId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe operating hours for your business, when agents are available. Available only in orgs that use Einstein Bots.This is a relationship field.Relationship NameBusinessHoursRelationship TypeLookupRefers ToBusinessHours |
| ChannelAddressIdentifier | TypestringPropertiesFilter, Group, Nillable, SortDescriptionA UUID that identifies a deployed messaging channel. This identifier is unique across orgs, so a channel with the same MessagingPlatformKey in a sandbox and production will have a different ChannelAddressIdentifier for each. Available in API version 59.0 and later. |
| ChannelDefinitionId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe associated conversation channel definition, which is used only in Bring Your Own Channel for Messaging and Bring Your Own Channel for CCaaS. Available in API version 58.0 and later.This field is a relationship field.Relationship NameChannelDefinitionRefers ToConversationChannelDefinition |
| ConsentType | TypepicklistPropertiesCreate, defaultedOnCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe type of consent, or opt-in, that is required to message users on this channel. This field is available in API version 48.0 and later. Possible values are:DoubleOptInExplicitOptInImplicitOptIn (default value)The property defaultedOnCreate has been removed in API version 51.0 and later. Now the consent type is defaulted to ImplicitOptIn when the consent type isn’t set on create only for channels that support consents. |
| ConversationEndResponse | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionAutomated response to the customer when the agent ends the conversation. (Optional) |
| CriticalWaitTime | DescriptionReserved for future use. This field has been deprecated as of API version 52.0. |
| Description | DescriptionReserved for future use. |
| DeveloperName | TypestringPropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe developer name for the messaging channel. This value is a concatenation of the messaging platform key and the message type. |
| DoubleOptInPrompt | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionAutomated response to the end user to prompt them to doubly opt in to receiving messages. Available in API version 48.0 and later. |
| EngagedResponse | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionAutomated response to the customer when the conversation is accepted by the agent. (Optional) |
| InitialResponse | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionFirst automated response to the customer for a new conversation. (Optional) |
| IsActive | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether a channel is active and can receive messages. |
| IsAuthenticated | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether a user is authenticated to a voice assistant. The org permission Live Message Voice is required to access and update this field. Available in API version 44.0 and later. |
| IsoCountryCode | TypestringPropertiesCreate, Filter, Group, Nillable, SortDescriptionTwo-letter ISO 3166-1 alpha-2 code for the country that the phone number is associated with. For example, the code for United States is US. Available in API version 44.0 and later. |
| IsRequireDoubleOptIn | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether double opt-in is required (true) or not (false) for this Messaging channel. Available in API version 48.0 and later. |
| IsRestrictedToBusinessHours | DescriptionReserved for future use. |
| IsUserMatchByExternalIdOnly | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether to restrict matching on customer by external ID only (and not use the full name). This field has been deprecated as of API version 52.0. |
| Language | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionReserved for future use. |
| MasterLabel | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionUnique name for the MessagingChannel. |
| MessageType | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, Sort, UpdateDescriptionType of message. Possible values are:AppleBusinessChat—Represents Apple Messages for Business.Custom—Represents Bring Your Own Channel for Messaging or Bring Your Own Channel for CCaaS. Available in API version 58.0 and later.EmbeddedMessaging—Represents Enhanced Chat. Available in API version 50.0 and later.FacebookPhonePSTNVoice—Represents an Agentforce Voice channel that uses PSTN. Available in API version 65.0 and later.TextVoiceWhatsApp |
| MessagingPlatformKey | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionUnique key for a channel that the end user can message or call based on the MessageType.In PSTNVoice, SMS, WhatsApp, and LINE channels, the platform key is the phone number associated with this channel.In Facebook Messenger channels, the platform key is the Facebook page ID associated with this channel.In Apple Messages for Business channels, the platform key is the Apple Messages identifier.In Enhanced Chat, the platform key is identical to the Channel Address Identifier. |
| OfflineAgentsResponse | DescriptionReserved for future use. |
| OptInPrompt | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionAutomated response to the end user to prompt them to explicitly opt in to receiving messages. Available in API version 49.0 and earlier. |
| OptInResponse | TypetextareaPropertiesCreate, Defaulted on create, Nillable, UpdateDescriptionAutomated response to the end user when they opt in to messaging. Available in API versions 48.0 and 49.0. Use the OptInConfirmation field of the MsgChannelLanguageKeyword object instead. |
| OptionsIdentifyEndUserLanguage | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionAuto-populates the Language field for this channel’s messaging users if their locale is known. Supported for Enhanced Chat and Apple Messages for Business only. |
| OptOutResponse | TypetextareaPropertiesCreate, Defaulted on create, Nillable, UpdateDescriptionAutomated response to the end user when they opt out of messaging. Available in API version 48.0 only. Use the OptOutConfirmation field of the MsgChannelLanguageKeyword object instead. |
| OutsideBusinessHoursResponse | DescriptionReserved for future use. |
| PlatformType | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, SortDescriptionIndicates whether the channel is Standard or Enhanced.When a standard SMS or Facebook Messenger channel is upgraded, the PlatformType changes from Standard to Enhanced. When a standard WhatsApp channel is upgraded, the original channel’s PlatformType remains Standard and a new channel is created with a PlatformType of Enhanced.Enhanced Chat channels have a PlatformType of Enhanced. |
| RoutingConfigurationId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionSpecifies which Omni-Channel routing configuration to use. This field is required when RoutingType is OmniSkills. To learn more, see Create Routing Configurations. |
| RoutingType | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionType used to support Omni-Channel’s different routing methods.OmniQueue (queue-based routing)OmniSkills (skills-based routing)When this value isn’t set, OmniQueue is used. |
| SessionHandler | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe queue or Omni-Channel flow that the channel's messaging sessions are routed to. Available in API version 51.0 and later. |
| TargetQueueId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionQueue in which incoming conversations are placed while waiting for an agent to accept.This is a relationship field.Relationship NameTargetQueueRelationship TypeLookupRefers ToGroup |
| TargetUserId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionMessaging User or agent for the conversation. Available in API version 50.0 and earlier. |

## Usage

While third-party messaging channels can be created via Apex, we recommend creating channels via the Messaging Settings page in Setup. Channels created via Apex may not work and can't be deleted.

In enhanced WhatsApp, Facebook Messenger, Apple Messages for Business, and LINE channels, the flow of a channel's messaging traffic is controlled by an associated MessagingChannelUsage record. The MessagingChannelUsage determines whether the channel is active or deactivated.

## Related Topics

- MsgChannelLanguageKeyword (atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_msgchannellanguagekeyword.htm)
