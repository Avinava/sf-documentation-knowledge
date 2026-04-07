---
title: "SenderProfile"
domain: mc-apis
topic: senderprofile
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-04-07T09:06:25.018Z
estimatedTokens: 1238
keywords: [SenderProfile, send, profile, conjunction, email, definition, override, elements, part, Schedule, Perform, call, EmailSendDefinition, Items]
---

# SenderProfile

> The SenderProfile object is the send profile used in conjunction with an email send definition. You can override the following elements of the SenderProfile object as part of a Schedule or Perform call for an EmailSendDefinition:

# SenderProfile

The SenderProfile object is the send profile used in conjunction with an email send definition. You can override the following elements of the SenderProfile object as part of a Schedule or Perform call for an EmailSendDefinition:

-   SenderProfile.FromName - Maximum length 130 characters.
-   SenderProfile.FromAddress - Maximum length 100 characters, unless it contains AMPscript.
-   SenderProfile.AutoForwardToName - Maximum length 100 characters.
-   SenderProfile.AutoForwardToEmailAddress - Maximum length 100 characters, unless it contains AMPscript.

To set the AutoForwardToName and AutoForwardToEmailAddress, make the following changes:

-   The SenderProfile.UseDefaultRMMRulesSpecified must be set to TRUE.
-   The SenderProfile.UseDefaultRMMRules must be set to FALSE.
-   The Reply Mail Management feature must be enabled for your account. Contact your Marketing Cloud representative for more information on this feature.

All exceptions related to these fields that are thrown are the same as those thrown on a SenderProfile create call.

## Properties

| Name | Data Type | Description |
| --- | --- | --- |
| AutoForwardToEmailAddress | xsd:string | Indicates the email address to use with automatically forwarded email messages. |
| AutoForwardToName | xsd:string | Indicates the To name to use on automatically forwarded email messages. |
| AutoForwardTriggeredSend | TriggeredSendDefinition | Indicates the triggered send associated with an automatically forwarded email address. |
| AutoReply | xsd:boolean | Indicates the reply associated with an automatically forwarded email message. |
| AutoReplyTriggeredSend | TriggeredSendDefinition | Indicates the triggered send associated with an automatic reply. |
| Client | ClientID | Specifies the account ownership and context of an object. |
| CorrelationID | xsd:string | Identifies correlation of objects across several requests. |
| CreatedDate | xsd:dateTime | Read-only date and time of the object's creation. |
| CustomerKey | xsd:string | User-supplied unique identifier for an object within an object type. This property corresponds to the external key assigned to an object in Marketing Cloud. |
| DataRetentionPeriodLength | xsd:short | Specifies the number of time units for which data is retained. Use this property with DataRetentionPeriodUnitOfMeasureto specify the full data retention time. |
| DataRetentionPeriodUnitOfMeasure | RecurrenceTypeEnum | Specifies the units of time for which data is retained. Deprecated. Use DataRetentionPeriodLength and DataRetentionPeriod instead. |
| Description | xsd:string | Describes and provides information regarding the object. |
| DirectForward | xsd:boolean | Indicates whether the direct forward feature has been enabled for a sender profile. |
| FromAddress | xsd:string | Indicates From address associated with a object. Deprecated for email send definitions and triggered send definitions. |
| FromName | xsd:string | Specifies the default email message From Name. Deprecated for email send definitions and triggered send definitions. |
| ID | xsd:int | Read-only identifier for an object. Some objects use the ObjectID property as the Marketing Cloud unique ID. |
| ModifiedDate | Nullable`1 | Indicates the last time object information was modified. |
| Name | xsd:string | Name of the object or property. |
| ObjectID | xsd:string | System-controlled, read-only text string identifier for object. |
| ObjectState | xsd:string | Reserved for future use. |
| Owner | Owner | Describes account ownership of subscriber in an on-your-behalf account. |
| PartnerKey | xsd:string | Unique identifier provided by partner for an object. This property is accessible only via API. |
| PartnerProperties | APIProperty[] | A collection of metadata supplied by the client and stored by the system. These properties are accessible only via API. |
| ReplyManagementRuleSet | APIObject | Indicates the reply mail management (RMM) rule set associated with the sender profile. |
| ReplyToAddress | xsd:string | Specifies the reply address used for any messages sent using this sender profile. |
| ReplyToDisplayName | xsd:string | Optional value that specifies the display name for the email address contained in the ReplyToAddress property. |
| SenderHeaderEmailAddress | xsd:string | Specifies the email address to include in the sender header of a sender profile. |
| SenderHeaderName | xsd:string | Specifies name to include in the sender header of a sender profile. |
| UseDefaultRMMRules | xsd:boolean | Indicates whether a sender profile uses the default RMM rules for that account. |

## Related Items

-   [Supported Operations for Objects and Methods](https://developer.salesforce.com/docs/atlas.en-us.mc-apis.meta/mc-apis/supported_operations_for_objects_and_methods.htm)
-   [Create a Sender Profile](atlas.en-us.noversion.mc-apis.meta/mc-apis/creating_a_sender_profile.htm "Creating_a_Sender_Profile")

## Related Topics

- Create a Sender Profile (atlas.en-us.noversion.mc-apis.meta/mc-apis/creating_a_sender_profile.htm)
