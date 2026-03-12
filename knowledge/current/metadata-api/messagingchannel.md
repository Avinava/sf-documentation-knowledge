---
title: "MessagingChannel"
domain: metadata-api
topic: messagingchannel
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:40.620Z
estimatedTokens: 3238
keywords: [MessagingChannel, metadata, associated, Embedded, Service, Messaging, channel, Parent, File, Suffix, Directory, Location, Version, Special, Access]
---

# MessagingChannel

> Represents the metadata associated with an Embedded Service
			Messaging channel.

# MessagingChannel

Represents the metadata associated with an Embedded Service Messaging channel.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=api_meta)

#### Important

Where possible, we changed noninclusive terms to align with our company value of Equality. We maintained certain terms to avoid any effect on customer implementations.

## Parent Type

This type extends the [Metadata](atlas.en-us.api_meta.meta/api_meta/metadata.htm "The base class for all metadata types. You can’t edit this object. A component is an instance of a metadata type.") metadata type and inherits its fullName field.

## File Suffix and Directory Location

MessagingChannel components have the suffix messagingChannel and are stored in the messagingChannels folder.

## Version

MessagingChannel components are available in API version 55.0 and later.

## Special Access Rules

This type is available if your org has the “Configure Messaging” and “View Setup and Configuration” permissions for Messaging enabled.

## Fields

| Field Name | Description |
| --- | --- |
| automatedResponses | Field TypeMessagingAutoResponse[]DescriptionThe auto-responses associated with the messaging channel. |
| channelUsages | Field TypeMessagingChannelUsage[]DescriptionThe deployment types and consent configuration for the messaging channel. Available in API version 62.0 and later. |
| countryCode | Field TypestringDescriptionThe ISO country code for the messaging channel. Available in API version 62.0 and later. |
| customParameters | Field TypeMessagingChannelCustomParameter[]DescriptionThe custom parameters associated with the messaging channel. |
| description | Field TypestringDescriptionThe channel description. |
| embeddedConfig | Field TypeEmbeddedConfig[]DescriptionThe settings associated with the messaging channel. |
| externalAccountId | Field TypestringDescriptionThe external account identifier for the messaging channel. Available in API version 62.0 and later. |
| masterLabel | Field TypestringDescriptionRequired. The channel label. |
| messagingChannelType | Field TypeMessagingChannelType (enumeration of type string)DescriptionRequired. Values are:AppleMessagesForBusiness—Apple Messages for Business. Available in API version 65.0 and later.Custom—Bring Your Own Channel for Messaging or Bring Your Own Channel for CCaaS. Available in API version 61.0 and later.EmbeddedMessaging—Enhanced Chat.Facebook—Facebook Messenger. Available in API version 65.0 and later.Line—Line. Available in API version 65.0 and later.PstnVoice—Agentforce Voice (PSTN). Available in API version 65.0 and later.Text—SMS. Available in API version 65.0 and later.Voice—Service Cloud Voice. Available in API version 58.0 and later.WhatsApp—WhatsApp. Available in API version 65.0 and later.WhatsAppVoice—Available in API version 65.0 and later.Third-party Messaging channels in Salesforce, such as WhatsApp and Facebook Messenger, don’t use this metadata type. |
| messagingKeywords | Field TypeMessagingKeyword[]DescriptionKeywords associated with the messaging channel. |
| platformKey | Field TypestringDescriptionThe platform key for the messaging channel. Available in API version 62.0 and later. |
| queueRoutingConfig | Field TypestringDescriptionThe queue routing configuration for the messaging channel. Available in API version 64.0 and later. |
| sessionHandlerFlow | Field TypestringDescriptionThe Omni-Channel flow used to route the channel’s messaging sessions. |
| sessionHandlerQueue | Field TypestringDescriptionRequired. The queue used to route messages. If a sessionHandlerFlow is also selected, sessionHandlerQueue is the fallback queue used if a message can’t be routed using the selected flow. |
| sessionHandlerType | Field TypeMessagingSessionHandlerType (enumeration of type string)DescriptionRequired. The method used to route messages in the channel. Values are:AgentforceServiceAgentFlowQueueUser |
| sessionHandlerUser | Field TypestringDescriptionThe user to handle routing for the messaging channel. Available in API version 62.0 and later. |
| standardParameters | Field TypeMessagingChannelStandardParameter[]DescriptionParameters added to the messaging channel. |

## EmbeddedConfig

Represents settings specific to an embedded messaging channel.

| Field Name | Description |
| --- | --- |
| isEstimatedWaitTimeEnabled | Field TypeBooleanDescriptionIndicates whether estimated wait time is enabled. The default value is false. |
| authMode | Field TypeEmbeddedServiceAuthModeType (enumeration of type string)DescriptionRequired. Auth/UnAuth Mode Types For Embedded Chat. Valid values are:AuthUnAuth |
| verifiedUserJwtExpirationTime | Field TypeIntegerDescriptionIf authMode is set to true, this value represents the JWT expiry value in minutes. |
| anonymousUserJwtExpirationTime | Field TypeIntegerDescriptionIf authMode is set to false, this value represents the JWT expiry value in minutes. |
| isAttachmentUploadEnabled | Field TypeBooleanDescriptionIndicates whether inbound file attachments are allowed. The default value is false. |
| isSaveTranscriptEnabled | Field TypeBooleanDescriptionIndicates whether transcripts can be downloaded. The default value is false. |
| messagingAuthorizations | Field TypeMessagingAuthorizationDescriptionRepresents authorization settings specific to a given MessagingChannel. |

## MessagingAuthorization

This junction entity stores the messaging channel authorization for a Messaging Channel (Embedded Messaging Channel). On this entity, we configure different authorization methods supported by the Messaging for In-App and Web \`(Embedded Messaging) channel. This entity is available in API version 62.0 or later.

| Field Name | Description |
| --- | --- |
| authIdentifier | Field TypeStringDescriptionRequired. Represents an identifier for the MessagingAuthorization entity. The value must begin with a letter. Only alphanumeric characters and _ are allowed. |
| authProviderName | Field TypeStringDescriptionThis field should never be set. Although this field is exposed, it isn't supported. The field represents the name of the AuthProvider that’s referenced in the MessagingAuthorization. It’s a required field if authorizationType is set to AuthProvider. |
| authorizationType | Field TypeMessagingAuthorizationType (enumeration of type string)DescriptionRequired. Indicates whether MessagingAuthorization has been configured to reference a PublicKeyCertificateSet or an AuthProvider. Valid values are:PublicKeyCertificateSet - Indicates that a PublicKeyCertificateSet is referenced in the MessagingAuthorization entity. This is the only option that will lead to a fully functional User Verification setup.AuthProvider - This option should never be selected. It indicates that an AuthProvider is referenced in the MessagingAuthorization, but we don’t support it. |
| enabled | Field TypeBooleanDescriptionIndicates whether messaging authorization is enabled. Defaults to false. |
| publicKeyCertificateSetName | Field TypeStringDescriptionName of the public key certificate set that's referenced in the MessagingAuthorization entity. This is a required field if authorizationType is set to PublicKeyCertificateSet. |

## MessagingAutoResponse

Represents an automated response used in a channel.

| Field Name | Description |
| --- | --- |
| autoResponseContentType | Field TypestringDescriptionThe content type of the auto-response: TextResponse or MessageDefinition. |
| language | Field TypestringDescriptionThe language of the auto response. |
| messageDefinitionName | Field TypestringDescriptionThe name of the messaging component. |
| response | Field TypestringDescriptionThe text of the auto response. |
| responseTimeoutInMins | Field TypeintegerDescriptionThe number of minutes after which a response can no longer be sent. The value can range from 5 to 60. |
| type | Field TypeMessagingAutoResponseType (enumeration of type string)DescriptionRequired. The type of response, which determines when it’s used in a messaging session. Values are:AgentEndEngagementResponseAgentEngagedResponseCustomResponse (Available in API version 65.0 and later.)DoubleOptInPrompt (Available in API version 65.0 and later.)EndUserIdleResponse (Available in API version 65.0 and later.)EndUserInactiveResponse (Available in API version 65.0 and later.)HelpResponse (Available in API version 65.0 and later.)InitialResponseOptInConfirmation (Available in API version 65.0 and later.)OptInPrompt (Available in API version 65.0 and later.)OptOutConfirmation (Available in API version 65.0 and later.) |

## MessagingChannelCustomParameter

Represent a custom parameter added to a channel.

| Field Name | Description |
| --- | --- |
| actionParameterMappings | Field TypeMessagingChannelActionParameterMapping[]DescriptionThe mapping used to map the parameter value to a flow or task. |
| externalParameterName | Field TypestringDescriptionRequired. The external name of the parameter. |
| masterLabel | Field TypestringDescriptionRequired. The label of the parameter. |
| maxLength | Field TypeintDescriptionThe maximum length of the parameter value. |
| name | Field TypestringDescriptionRequired. The name of the parameter. |
| parameterDataType | Field TypeFlowDataType (enumeration of type string)DescriptionRequired. The format of the parameter. Values are:ApexBooleanCurrencyDateDateTimeMultipicklistNumberPicklistSObjectStringTime |

## MessagingChannelActionParameterMapping

Represents a mapping between a parameter and an Omni-Channel flow or agent task.

| Field Name | Description |
| --- | --- |
| actionParameterName | Field TypestringDescriptionRequired. The name of the flow that the custom or standard parameters are mapped to. |

## MessagingChannelStandardParameter

Represents a standard parameter used to pass information into a channel.

| Field Name | Description |
| --- | --- |
| actionParameterMappings | Field TypeMessagingChannelActionParameterMapping[]DescriptionThe mapping associated with the parameter. |
| externalInteractionId | Field TypeMessagingChannelStandardParameterType (enumeration of type string)DescriptionAn ID assigned to the external interaction, such as a campaign ID. |
| externalInteractionName | Field TypeMessagingChannelStandardParameterType (enumeration of type string)DescriptionThe name of the external interaction, such as a campaign name. |
| externalInteractionType | Field TypeMessagingChannelStandardParameterType (enumeration of type string)DescriptionThe type of external interaction, such as MarketingCampaign. |
| parameterType | Field TypeMessagingChannelStandardParameterType (enumeration of type string)DescriptionRequired. The type of parameter. Values are:EmailFirstNameLastNameSubject |

## MessagingChannelUsage

Represents the deployment type and consent configuration for a messaging channel. Available in API version 62.0 and later.

| Field Name | Description |
| --- | --- |
| channelConsentType | Field TypeMessagingChannelConsentType (enumeration of type string)DescriptionOptional. The consent type for the messaging channel. Values are:ImplicitOptInExplicitOptInDoubleOptIn |
| deploymentType | Field TypeMessagingChannelUsageDeploymentType (enumeration of type string)DescriptionRequired. The deployment type for the messaging channel. Values are:DigitalEngagementConversationUnifiedConversationMessagingEngagementMarketingJourneyBuilder |

## MessagingKeyword

Represents settings specific to an EmbeddedMessaging MessagingChannel. Available in API version 62 or later.

| Field Name | Description |
| --- | --- |
| keywordType | Field TypeMessagingKeywordType (enumeration of type string)DescriptionRequired. The type of messaging keyword for the auto response. Valid values are:OptInDoubleOptInOptOutHelpCustom |
| language | Field TypeStringDescriptionRequired. The language of the messaging keyword |
| keyword | Field TypeStringDescriptionThe messaging keyword value. |

## Declarative Metadata Sample Definition

The following is an example of a MessagingChannel component. This messaging channel passes custom and standard parameters from the messaging channel to a flow, and it routes to a flow with a fallback queue.

```

```

If you route the messaging channel to a queue, there’s no fallback flow.

```

```

The following is an example package.xml that references the previous definition.

```

```

## Wildcard Support in the Manifest File

This metadata type supports the wildcard character \* (asterisk) in the package.xml manifest file. For information about using the manifest file, see [Deploying and Retrieving Metadata with the Zip File](atlas.en-us.api_meta.meta/api_meta/file_based_zip_file.htm "The deploy() and retrieve() calls are used to deploy and retrieve a .zip file. Within the .zip file is a project manifest (package.xml) that lists what to retrieve or deploy, and one or more XML components that are organized into folders.").

## Code Examples

```apex
<?xml version="1.0" encoding="UTF-8"?>
<MessagingChannel xmlns="http://soap.sforce.com/2006/04/metadata">
    <description>Test in-app messaging channel</description>
    <masterLabel>TestInAppChannel</masterLabel>
    <messagingChannelType>EmbeddedMessaging</messagingChannelType>
    <sessionHandlerQueue>Demo_Queue</sessionHandlerQueue>
    <sessionHandlerType>Queue</sessionHandlerType>
    <embeddedConfig>
        <authMode>Auth</authMode>
        <isAttachmentUploadEnabled>true</isAttachmentUploadEnabled>
        <isSaveTranscriptEnabled>false</isSaveTranscriptEnabled>
        <isEstimatedWaitTimeEnabled>false</isEstimatedWaitTimeEnabled>
        <verifiedUserJwtExpirationTime>360</verifiedUserJwtExpirationTime>
        <messagingAuthorizations>
            <authorizationType>PublicKeyCertificateSet</authorizationType>
            <authProviderName></authProviderName>
            <publicKeyCertificateSetName>pcks1</publicKeyCertificateSetName>
            <enabled>false</enabled>
            <authIdentifier>auth_identifier_one</authIdentifier>
        </messagingAuthorizations>
    </embeddedConfig>
    <automatedResponses>
        <autoResponseContentType>MessageDefinition</autoResponseContentType>
        <messageDefinitionName>Sample</messageDefinitionName>
        <type>EndUserInactiveResponse</type>
        <responseTimeoutInMins>10</responseTimeoutInMins>
    </automatedResponses>
    <automatedResponses>
        <autoResponseContentType>MessageDefinition</autoResponseContentType>
        <messageDefinitionName>Sample</messageDefinitionName>
        <type>InitialResponse</type>
    </automatedResponses>
    <automatedResponses>
        <autoResponseContentType>MessageDefinition</autoResponseContentType>
        <messageDefinitionName>Sample</messageDefinitionName>
        <type>AgentEndEngagementResponse</type>
    </automatedResponses>
    <automatedResponses>
        <autoResponseContentType>MessageDefinition</autoResponseContentType>
        <messageDefinitionName>Sample</messageDefinitionName>
        <type>AgentEngagedResponse</type>
    </automatedResponses>
    <automatedResponses>
        <autoResponseContentType>TextResponse</autoResponseContentType>
        <language>en_US</language>
        <response>You've opted out of receiving messages from us, so we won't contact you again.</response>
        <type>OptOutConfirmation</type>
    </automatedResponses>
    <automatedResponses>
        <autoResponseContentType>TextResponse</autoResponseContentType>
        <language>en_US</language>
        <response>Custom response1</response>
        <type>CustomResponse</type>
    </automatedResponses>
    <automatedResponses>
        <autoResponseContentType>TextResponse</autoResponseContentType>
        <language>en_US</language>
        <response>Opt In Confirmation response</response>
        <type>OptInConfirmation</type>
    </automatedResponses>
    <automatedResponses>
        <autoResponseContentType>TextResponse</autoResponseContentType>
        <language>en_US</language>
        <response>Text STOP to opt out of further messages.</response>
        <type>HelpResponse</type>
    </automatedResponses>
    <messagingKeywords>
        <keyword>stopall</keyword>
        <keyword>cancel</keyword>
        <keyword>stop</keyword>
        <keyword>unsubscribe</keyword>
        <keyword>end</keyword>
        <keyword>quit</keyword>
        <keywordType>OptOut</keywordType>
        <language>en_US</language>
    </messagingKeywords>
    <messagingKeywords>
        <keyword>help</keyword>
        <keywordType>Help</keywordType>
        <language>en_US</language>
    </messagingKeywords>
    <messagingKeywords>
        <keyword>customkeyword1</keyword>
        <keywordType>Custom</keywordType>
        <language>en_US</language>
    </messagingKeywords>
    <messagingKeywords>
        <keyword>OptInkeyword1</keyword>
        <keywordType>OptIn</keywordType>
        <language>en_US</language>
    </messagingKeywords>
</MessagingChannel>
```

```
<?xml version="1.0" encoding="UTF-8"?>
<MessagingChannel xmlns="http://soap.sforce.com/2006/04/metadata">
    <masterLabel>EmbeddedChannel2</masterLabel>
    <messagingChannelType>EmbeddedMessaging</messagingChannelType>
    <sessionHandlerQueue>DemoQueueName</sessionHandlerQueue>
    <sessionHandlerType>Queue</sessionHandlerType>
</MessagingChannel>
```

```
<?xml version="1.0" encoding="UTF-8"?>
<Package xmlns="http://soap.sforce.com/2006/04/metadata">
    <types>
        <members>*</members>
        <name>MessagingChannel</name>
    </types>
    <version>55.0</version>
</Package>
```

## Related Topics

- Metadata (atlas.en-us.api_meta.meta/api_meta/metadata.htm)
- Deploying and Retrieving Metadata with the Zip File (atlas.en-us.api_meta.meta/api_meta/file_based_zip_file.htm)
