---
title: "ConvIntelligenceSignalRule"
domain: metadata-api
topic: convintelligencesignalrule
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:37.831Z
estimatedTokens: 1606
keywords: [ConvIntelligenceSignalRule, conversation, intelligence, signal, rule, triggers, actions, real-time, signals, telephony, system, keywords, mentioned, support, reps]
---

# ConvIntelligenceSignalRule

> Represents the conversation intelligence signal rule.
			The rule triggers actions based on real-time intelligence signals from your telephony
			system or keywords mentioned by support reps or customers. The rule contains a set of
			conditions (subrules) and the filter logic used to evaluate those conditions to
			determine whether to trigger actions.

# ConvIntelligenceSignalRule

Represents the conversation intelligence signal rule. The rule triggers actions based on real-time intelligence signals from your telephony system or keywords mentioned by support reps or customers. The rule contains a set of conditions (subrules) and the filter logic used to evaluate those conditions to determine whether to trigger actions.

## Parent Type

This type extends the [Metadata](atlas.en-us.api_meta.meta/api_meta/metadata.htm "The base class for all metadata types. You can’t edit this object. A component is an instance of a metadata type.") metadata type and inherits its fullName field.

## File Suffix and Directory Location

ConvIntelligenceSignalRule components have the suffix .ConvIntelligenceSignalRule and are stored in the ConvIntelligenceSignalRule folder.

## Version

ConvIntelligenceSignalRule components are available in API version 62.0 and later.

## Special Access Rules

This type requires an add-on license for Service Cloud Voice for Amazon Connect, Service Cloud Voice for Partner Telephony with Amazon Connect, Service Cloud Voice for Partner Telephony, or Digital Engagement.

## Fields

| Field Name | Description |
| --- | --- |
| actionType | Field TypeConvIntelligenceActionType (enumeration of type string)DescriptionRequired. The conversation intelligence signal type. Values are:AlertSupervisor–Sends an alert to the supervisor.AlertSupervisorAndAgent–Sends an alert to the rep and supervisor.LaunchFlow–Triggers an auto-launched flow. If set, also set ActionValue.LaunchNBA–Recommends the next best action to the rep. |
| actionValue | Field TypestringDescriptionAction to perform based on the actionType specified.If actionType is set to LaunchFlow, this value is the developerName of the flow to be launched. For example, EmailAlert.For all other actionType values, don’t set this parameter. |
| active | Field TypebooleanDescriptionRequired. Indicates whether the conversation intelligence signal rule is active (true) or inactive (false). The default value is false. |
| channelAddressIdentifier | Field TypestringDescriptionRequired. ID (ChannelAddressIdentifier) of the Messaging channel or name (InternalName) of the Voice channel. |
| channelType | Field TypestringDescriptionRequired. Channel type.For Messaging, possible values are:AppleBusinessChat—Represents Apple Messages for Business.Custom—Represents Bring Your Own Channel for Messaging or Bring Your Own Channel for CCaaS.EmbeddedMessaging—Represents Messaging for In-App and Web.FacebookTextWhatsAppFor Voice, set this parameter to Phone. |
| criteria | Field TypestringDescriptionRequired. Filter logic applied to the rule conditions (subrules). For example, ((1 AND 2) OR 3). The numbers in the formula are derived from the ConvIntelligenceSignalSubRule.order value plus 1. For example, filter logic (1 AND 2) is calculated by adding the first condition (order=0) with the second condition (order=1). |
| developerName | Field TypestringDescriptionRequired. API name of the conversation intelligence signal rule. |
| participantRole | Field TypeConvParticipantRole (enumeration of type string)DescriptionIf service is set to KeywordMatch, this value determines whether the rule applies to utterances made by reps, customers, or both roles. Possible values are:Possible values are:AgentAgentOrCustomerCustomerIf Service is not set to KeywordMatch, don’t set this parameter. |
| ruleName | Field TypestringDescriptionRequired. Name of the conversation intelligence signal rule. |
| service | Field TypeConvIntelligenceService (enumeration of type string)DescriptionRequired. Salesforce- or partner-provided intelligence source.For Salesforce-provided intelligence sources, set this parameter to KeywordMatch.For partner-provided intelligence sources, possible values are:KeywordMatchAmazonConnectContactLensIf none of the options apply to you, contact your Salesforce representative for the service name. |
| subrule | Field TypeConvIntelligenceSignalSubRule[]DescriptionA set of intelligence rules used to measure an agent or customer’s sentiment during a voice call. |

## ConvIntelligenceSignalSubRule

Represents a condition (subrule) within a conversation intelligence signal rule.

| Field Name | Description |
| --- | --- |
| operandValue | Field TypestringDescriptionRequired. Value of the signal type used to determine if the rule condition is met. |
| operator | Field TypeConvIntelligenceOperator (enumeration of type string)DescriptionRequired. Filter logic operator used to determine if the rule condition is met. Possible values are:EqualsGreaterThanInLessThanNotEquals |
| order | Field TypeintDescriptionRequired. Order the condition appears in relation to the other conditions in the list, with zero (0) being the first condition listed. If type is set to Keyword, the maximum value is 24. For all other type values, the maximum value is 4. This value is used when applying filter logic to the rule. |
| type | Field TypeConvIntelligenceType (enumeration of type string)DescriptionRequired. Type of conversation intelligence signal used by the rule to determine whether to trigger an action. This value depends on the ConvIntelligenceSignalRule.channelType and ConvIntelligenceSignalRule.service values.If service is set to KeywordMatch, possible values are:Keyword–A word or group of words spoken or typed.If service is set to AmazonConnectContactLens, possible values are:Category–Category name defined in your telephony system.If service is set to another value, contact your Salesforce representative for the conversation intelligence signal types available for your intelligence source. |

## Declarative Metadata Sample Definition

The following is an example of a ConvIntelligenceSignalRule component.

```

```

The following is an example package.xml that references the previous definition.

```

```

## Wildcard Support in the Manifest File

This metadata type supports the wildcard character \* (asterisk) in the package.xml manifest file. For information about using the manifest file, see [Deploying and Retrieving Metadata with the Zip File](atlas.en-us.api_meta.meta/api_meta/file_based_zip_file.htm "The deploy() and retrieve() calls are used to deploy and retrieve a .zip file. Within the .zip file is a project manifest (package.xml) that lists what to retrieve or deploy, and one or more XML components that are organized into folders.").

## Code Examples

```
<?xml version="1.0" encoding="UTF-8"?>
<ConvIntelligenceSignalRule xmlns="http://soap.sforce.com/2006/04/metadata">
    <actionType>AlertSupervisor</actionType>
    <active>true</active>   <channelAddressIdentifier>a12bc345-1303-44c2-866c-f30d546b58de</channelAddressIdentifier>
    <channelType>Phone</channelType>
    <criteria>1 OR 2</criteria>
    <developerName>ConvIntelligenceRuleAPIName</developerName>
    <participantRole>AgentOrCustomer</participantRole>
    <ruleName>ConvIntelligenceRuleName</ruleName>
    <service>KeywordMatch</service>
    <subrule>
        <operandValue>escalate_level_1</operandValue>
        <operator>Equals</operator>
        <order>0</order>
        <type>Keyword</type>
    </subrule>
    <subrule>
        <operandValue>escalate_level_2</operandValue>
        <operator>Equals</operator>
        <order>1</order>
        <type>Keyword</type>
    </subrule>
</ConvIntelligenceSignalRule>
```

```
<?xml version="1.0" encoding="UTF-8"?>
<Package xmlns="http://soap.sforce.com/2006/04/metadata">
    <types>
        <members>*</members>
        <name>ConversationIntelligenceSignalRule</name>
    </types>
    <version>62.0</version>
</Package>
```

## Related Topics

- Metadata (atlas.en-us.api_meta.meta/api_meta/metadata.htm)
- Deploying and Retrieving Metadata with the Zip File (atlas.en-us.api_meta.meta/api_meta/file_based_zip_file.htm)
