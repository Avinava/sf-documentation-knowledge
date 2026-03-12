---
title: "ConvIntelligenceSignalRule"
domain: object-reference
topic: convintelligencesignalrule
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:07.464Z
estimatedTokens: 934
keywords: [ConvIntelligenceSignalRule, conversation, intelligence, signal, rule, triggers, actions, real-time, signals, telephony, system, keywords, mentioned, support, reps]
---

# ConvIntelligenceSignalRule

> Represents a conversation intelligence signal rule. The rule triggers
      actions based on real-time intelligence signals from your telephony system or keywords
      mentioned by support reps or customers. The rule contains a set of conditions (subrules) and
      the filter logic used to evaluate those conditions to determine whether to trigger actions.
      This object is available in API
      version 62.0 and later.

# ConvIntelligenceSignalRule

Represents a conversation intelligence signal rule. The rule triggers actions based on real-time intelligence signals from your telephony system or keywords mentioned by support reps or customers. The rule contains a set of conditions (subrules) and the filter logic used to evaluate those conditions to determine whether to trigger actions. This object is available in API version 62.0 and later.

## Supported Calls

create(), delete(), describeSObjects(), query(), retrieve(), update(), upsert()

## Special Access Rules

This type requires an add-on license for Service Cloud Voice for Amazon Connect, Service Cloud Voice for Partner Telephony with Amazon Connect, Service Cloud Voice for Partner Telephony, or Digital Engagement.

## Fields

| Field | Details |
| --- | --- |
| ActionType | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionRequired. Action to take based on the conversation intelligence signal detected during a conversation. Possible values are:Possible values are:AlertSupervisor–Sends an alert to the supervisor.AlertSupervisorAndAgent–Sends an alert to the rep and supervisor.LaunchFlow–Triggers an auto-launched flow. If set, also set ActionValue.LaunchNBA–Recommends the next best action to the rep. |
| ActionValue | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionAction to perform based on the ActionType specified.If ActionType is set to LaunchFlow, this value is the DeveloperName of the flow to be launched. For example, EmailAlert.For all other ActionType values, don’t set this parameter. |
| ConversationChannelId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionRequired. ID (ChannelAddressIdentifier) of the Messaging channel or name (InternalName) of the Voice channel.This field is a polymorphic relationship field.Relationship NameConversationChannelRefers ToCallCenter, MessagingChannel |
| Criteria | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionRequired. Filter logic applied to the rule conditions (subrules). For example, ((1 AND 2) OR 3). The numbers in the formula are derived from the ConvIntelligenceSignalSubrule.Order value plus 1. For example, filter logic (1 AND 2) is calculated by adding the first condition (Order=0) with the second condition (Order=1). |
| DeveloperName | TypestringPropertiesRequired. Create, Filter, Group, Sort, UpdateDescriptionAPI name of the conversation intelligence signal rule. |
| IsActive | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionRequired. Indicates whether the conversation intelligence signal rule is active (true) or inactive (false). The default value is false. |
| Label | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionName of the conversation intelligence signal rule. |
| ParticipantRole | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionIf Service is set to KeywordMatch, this value determines whether the rule applies to utterances made by reps, customers, or both roles. Possible values are:Possible values are:AgentAgentOrCustomerCustomerIf Service is not set to KeywordMatch, don’t set this parameter. |
| Service | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionRequired. Salesforce- or partner-provided intelligence source.For Salesforce-provided intelligence sources, set this parameter to KeywordMatch.For partner-provided intelligence sources, possible values are:AmazonConnectContactLensIf none of the options apply to you, contact your Salesforce representative for the service name. |
