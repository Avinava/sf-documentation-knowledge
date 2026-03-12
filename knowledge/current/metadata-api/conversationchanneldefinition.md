---
title: "ConversationChannelDefinition"
domain: metadata-api
topic: conversationchanneldefinition
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:38.017Z
estimatedTokens: 3176
keywords: [ConversationChannelDefinition, Represents, conversation, channel, definition, that’s, implemented, Interaction, Service, Bring, Own, Channel, Messaging, CCaaS, messaging, channels., API, version, 60.0, later.]
---

# ConversationChannelDefinition

> Represents the conversation channel definition that’s
			implemented for Interaction Service for Bring Your Own Channel for Messaging and Bring Your Own
			Channel for CCaaS messaging channels. This object is available in API version 60.0
		and later.

# ConversationChannelDefinition

Represents the conversation channel definition that’s implemented for Interaction Service for Bring Your Own Channel for Messaging and Bring Your Own Channel for CCaaS messaging channels. This object is available in API version 60.0 and later.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=api_meta)

#### Important

Where possible, we changed noninclusive terms to align with our company value of Equality. We maintained certain terms to avoid any effect on customer implementations.

## Parent Type

This type extends the [Metadata](atlas.en-us.api_meta.meta/api_meta/metadata.htm "The base class for all metadata types. You can’t edit this object. A component is an instance of a metadata type.") metadata type and inherits its fullName field.

## File Suffix and Directory Location

ConversationChannelDefinition components have the suffix .ConversationChannelDefinition and are stored in the conversationChannelDefinitions folder.

## Version

ConversationChannelDefinition components are available in API version 60.0 and later.

## Special Access Rules

Interaction service must be configured. Access to tooling objects requires Salesforce administrator privileges or the Customize Application permission.

## Fields

| Field Name | Description |
| --- | --- |
| connectedAppOauthLink | Field TypestringDescriptionDO NOT SET OR CHANGE THIS VALUE. This value is automatically generated. This field represents the OAuth link for the external client app (ECA) or connected app if the connectedAppType value is Partner. This is a string identifier to the ECA or connected app containing the partner Org ID and the consumer ID minus the key prefixes. Used to identify the ECA or connected app to use for the channel definition and channel at runtime. |
| connectedAppType | Field TypeCustomChannelConnectedAppTypeDescriptionThe owner of the external client app (ECA) or connected app used to manage authentication between Salesforce Interaction Service and the Messaging or CCaaS partner’s system.Possible values are:PartnerCustomerThe default value is Partner.If set to Partner, the partner creates the ECA or connected app and includes it in their managed package. If set to Customer, the admin creates the ECA or connected app.Available in API version 62.0 and later. |
| consentOwner | Field TypeConsentOwner (enumeration of type string)DescriptionThe system the customer uses to manage consent levels.Possible values are:PartnerSalesforceThe default value is Salesforce.For example, if set to Salesforce, consent levels are managed by the Salesforce system. If set to Partner, consent levels are managed by the partner’s telephony system.For Bring Your Own Channel for Messaging, this value must be set to Salesforce. |
| conversationVendorInfo | Field TypestringDescriptionThe ConversationVendorInfo.developerName used to link this record to the ConversationVendorInfo record. For example, PartnerName. |
| customEventChnlAddrIdField | Field TypestringDescriptionThe mapping field that points to the custom field used to point to the ChannelAddressIdentifier field.This field is available in API version 60.0 and earlier. Use a combination of customEventTypeField and customEventPayloadField in API version 61.0 and later instead. |
| customEventPayloadField | Field TypestringDescriptionRequired. The mapping field that points to the custom field used to point to the Payload field in the format <orgNamespace>__<CustomFieldName>__c. This is the API name of the custom Payload field in the custom platform event. For example, devorg__Payload__c. |
| customEventRecipientField | Field TypestringDescriptionThe mapping field that points to the custom field used to point to the Recipient field.This field is available in API version 60.0 and earlier. Use a combination of customEventTypeField and customEventPayloadField in API version 61.0 and later instead. |
| customEventTypeField | Field TypestringDescriptionThe mapping field that points to the custom field used to point to the Platform event type (EventType) field, in the format <orgNamespace>__<CustomFieldName>__c. This is the API name of the custom EventType field in the custom platform event. For example, devorg__EventType__c. |
| customIcon | Field TypestringDescriptionFor Bring Your Own Channel for Messaging and Bring Your Own Channel for CCaaS, this field represents the name of the status resource image used to identify the channel integration, such as a channel logo. For the best results, set the image size to 50px x 50px and save the image in SVG file format. This field is optional. This field is a relationship field. Available in API version 61.0 and later. |
| customPlatformEvent | Field TypestringDescriptionRequired. The API name of the custom platform event created for the Interaction Service API in the format <orgNamespace>__<CustomPlatformEventName>__e. For example, devorg__TestEvent__e. |
| customerConnectedAppOauthLink | Field TypestringDescriptionDO NOT SET OR CHANGE THIS VALUE. This value is automatically generated. This field represents the OAuth link for the external client app or connected app created by an admin if the ConnectedAppType is Customer. Available in API version 62.0 and later. |
| developerName | Field TypestringDescriptionThe unique name of the custom metadata type object in the API in the format <Prefix>_<ConversationChannelDefinition>, where Prefix matches the prefix you gave to the name of the Interaction Service external client app or connected app. For example, Partner1_ChannelDefinition1, where Partner1 is the prefix and ChannelDefinition1 is the given name. |
| isConferenceSupported | Field TypebooleanDescriptionIndicates whether the partner supports conferencing for Bring Your Own Channel (true), or not (false). With conferencing, more than two participants are allowed in a messaging session. The default is false.This field is available in API version 64.0 and later. |
| isInboundAcknwOptionExposed | Field TypebooleanDescriptionIndicates whether the partner supports read receipts and delivery receipts for inbound messages (true) or whether the partner doesn’t support these inbound acknowledgments and the functionality is hidden from the Salesforce admin in the Messaging settings (false). The default value is false.This field is available in API version 65.0 and later. Use this field instead of isInboundReceiptsEnabled. |
| isInboundReceiptsEnabled | Field TypebooleanDescriptionIndicates whether the partner supports read receipts and delivery receipts for inbound messages (true) or whether the partner doesn’t support these inbound acknowledgements and the functionality is hidden from the Salesforce admin in the Messaging settings (false). The default value is false.Available in API versions 63.0 to 65.0. In API version 66.0 and later, this field is removed. Use isInboundAcknwOptionExposed instead. |
| isProgressIndicatorOptExposed | Field TypebooleanDescriptionIndicates whether the partner supports progress indicators for AI agents (true) or whether the partner doesn’t support them and the functionality is hidden from the Salesforce admin in the Messaging settings (false). The default value is false.This field is available in API version 65.0 and later. |
| isRoutingWorkResultEnabled | Field TypebooleanDescriptionIndicates whether the Routing Work Result event is sent as a Custom Platform event or not.The default value is false.Available in API versions 64.0 and 65.0. In API version 66.0 and later, this field is removed. Use isRoutingWorkResultSupported instead. |
| isRoutingWorkResultSupported | Field TypebooleanDescriptionIndicates whether the Routing Work Result event is sent as a Custom Platform event (true) or not (false). The default value is false.This field is available in API version 65.0 and later. Use this field instead of isRoutingWorkResultEnabled. |
| isTypingIndicatorDisabled | Field TypebooleanDescriptionIndicates whether the partner doesn’t support typing indicators for outbound messages and the functionality is hidden from the Salesforce admin in the Messaging settings (true) or whether outbound typing indicators are supported by the partner (false). The default value is false, meaning the outbound typing indicator feature is supported by default. To disable the outbound typing indicator feature, set this value to true.Available in API versions 63.0 to 65.0. In API version 66.0 and later, this field is removed. Use isTypingIndicatorOptionHidden instead. |
| isTypingIndicatorOptionHidden | Field TypebooleanDescriptionIndicates whether the partner doesn’t support typing indicators for outbound messages and the functionality is hidden from the Salesforce admin in the Messaging settings (true) or whether outbound typing indicators are supported by the partner (false). The default value is false, meaning the outbound typing indicator feature is supported by default. To disable the outbound typing indicator feature, set this value to true.This field is available in API version 65.0 and later. Use this field instead of isTypingIndicatorDisabled. |
| masterLabel | Field TypestringDescriptionThe namespace prefix that is associated with this object. Each Developer Edition org that creates a managed package has a unique namespace prefix. Limit: 15 characters. You can refer to a component in a managed package by using the namespacePrefix__componentName notation. The namespace prefix can have one of the following values.In Developer Edition orgs, NamespacePrefix is set to the namespace prefix of the org for all objects that support it, unless an object is in an installed managed package. In that case, the object has the namespace prefix of the installed managed package. This field’s value is the namespace prefix of the Developer Edition org of the package developer.In orgs that are not Developer Edition orgs, NamespacePrefix is set only for objects that are part of an installed managed package. All other objects have no namespace prefix.NamespacePrefix is null if the publisher is Salesforce. |
| maxParticipantsForCnfrOverride | Field TypeintDescriptionSpecifies the limit for how many participants can be in a messaging conference. If set, this field overrides the platform limit for the number of participants in a conference. If not set, the limit defaults to the messaging platform limit of how many participants can be in a messaging conference at one time.This field is available in API version 64.0 and later. |
| routingOwner | Field TypeRoutingOwner (enumeration of type string)DescriptionThe system the customer uses to manage routing for Bring Your Own Channel for Messaging or Bring Your Own Channel for CCaaS.Possible values are:PartnerSalesforceThe default value is Salesforce.For example, if set to Salesforce, routing is managed by the Salesforce system. If set to Partner, routing is managed by the partner’s telephony or Contact Center as a Service (CCaaS) system.For Bring Your Own Channel for Messaging, this value must be set to Salesforce. |
| supportsCustomChannelParameters | Field TypebooleanDescriptionIndicates whether admins can configure custom parameters and parameter mappings for messaging channels. Custom parameters and parameter mappings are used to pass additional information at runtime to Omni-Channel flows. The default value is false.This field is available in API version 61.0 and later. |
| supportsDoubleOptInConsent | Field TypebooleanDescriptionIndicates whether the channel supports (true) the Double Opt-In consent level. The default value is false. If set to true, then capabilitiesSupportsExplicitConsent must also be set to true. This field is optional and isn’t supported for Bring Your Own Channel for Messaging. It's only supported for Bring Your Own Channel for CCaaS. |
| supportsExplicitConsent | Field TypebooleanDescriptionIndicates whether the channel supports (true) the Explicit Opt-In consent level. This field is optional. |
| supportsImplicitConsent | Field TypebooleanDescriptionIndicates whether the channel supports (true) the Implicit Opt-In consent level. This value is required and must always be set to true. The default value is false. |
| supportsIsoCountryCode | Field TypebooleanDescriptionIndicates whether the channel supports (true) ISO country codes. The default value is false. |
| supportsKeywords | Field TypebooleanDescriptionIndicates whether the channel supports (true) keywords. The default value is false. |

## Declarative Metadata Sample Definition

The following is an example of a ConversationChannelDefinition component.

The following is an example package.xml that references the previous definition.

## Related Topics

- Metadata (atlas.en-us.api_meta.meta/api_meta/metadata.htm)
