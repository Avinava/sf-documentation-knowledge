---
title: "ConvIntelligenceSignalSubRule"
domain: object-reference
topic: convintelligencesignalsubrule
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:07.470Z
estimatedTokens: 598
keywords: [ConvIntelligenceSignalSubRule, condition, subrule, conversation, intelligence, signal, rule, API, version, 62.0, later, Calls, Special, Access, Rules]
---

# ConvIntelligenceSignalSubRule

> Represents a condition (subrule) within a conversation intelligence signal
         rule. This object is available in API version 62.0 and later.

# ConvIntelligenceSignalSubRule

Represents a condition (subrule) within a conversation intelligence signal rule. This object is available in API version 62.0 and later.

## Supported Calls

create(), delete(), describeSObjects(), query(), retrieve(), update(), upsert()

## Special Access Rules

This type requires an add-on license for Service Cloud Voice for Amazon Connect, Service Cloud Voice for Partner Telephony with Amazon Connect, Service Cloud Voice for Partner Telephony, or Digital Engagement.

## Fields

| Field | Details |
| --- | --- |
| ConvIntelligenceSignalRuleId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionUnique ID of the conversation intelligence signal rule. This field is a relationship field.Relationship NameConvIntelligenceSignalRuleRelationship TypeMaster-detailRefers ToConvIntelligenceSignalRule (the master object) |
| OperandValue | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionValue of the signal type used to determine if the rule condition is met. For example, escalate_level_1. |
| Operator | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionFilter logic operator used to determine if the rule condition is met. Possible values are:EqualsGreaterThanLessThanNotEquals |
| Order | TypeintPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionOrder the condition appears in relation to the other conditions in the list, with zero (0) being the first condition listed. If Type is set to Keyword, the maximum value is 24. For all other Type values, the maximum value is 4. This value is used when applying filter logic to the rule. |
| Type | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, Sort, UpdateDescriptionType of conversation intelligence signal used by the rule to determine whether to trigger an action. This value depends on the ConvIntelligenceSignalRule.ConversationChannelId and ConvIntelligenceSignalRule.Service values.If Service is set to KeywordMatch, possible values are:Keyword–A word or group of words spoken or typed.If Service is set to AmazonConnectContactLens, possible values are:Category–Category name defined in your telephony system.If Service is set to another value, contact your Salesforce representative for the conversation intelligence signal types available for your intelligence source. |
