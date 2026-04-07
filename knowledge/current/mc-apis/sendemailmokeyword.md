---
title: "SendEmailMOKeyword"
domain: mc-apis
topic: sendemailmokeyword
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-04-07T18:40:20.234Z
estimatedTokens: 583
keywords: [SendEmailMOKeyword, action, triggered, email, message, addresses, defined, Items]
---

> The SendEmailMOKeyword object defines the action that sends a triggered email message to the email addresses defined in an MO message.

# SendEmailMOKeyword

The SendEmailMOKeyword object defines the action that sends a triggered email message to the email addresses defined in an MO message.

## Properties

| Name | Data Type | Description |
| --- | --- | --- |
| Client | ClientID | Specifies the account ownership and context of an object. |
| CorrelationID | xsd:string | Identifies correlation of objects across several requests. |
| CreatedDate | xsd:dateTime | Read-only date and time of the object's creation. |
| CustomerKey | xsd:string | User-supplied unique identifier for an object within an object type. This property corresponds to the external key assigned to an object in Marketing Cloud. It represents both the name and the verb in the SMS exchange. |
| FailureMessage | xsd:string | Defines message to deliver in case the email send fails. |
| ID | xsd:int | Read-only identifier for an object. Some objects use the ObjectID property as the Marketing Cloud unique ID. |
| IsDefaultKeyword | xsd:boolean | Specifies if account defaults to this SMS keyword action if no other options are available. |
| MissingEmailMessage | xsd:string | Defines message to send if MO message does not contain a valid email address. |
| ModifiedDate | Nullable`1 | Indicates the last time object information was modified. |
| NextMOKeyword | BaseMOKeyword | Defines next MO keyword to use in an SMS conversation. |
| ObjectID | xsd:string | System-controlled, read-only text string identifier for object. |
| ObjectState | xsd:string | Reserved for future use. |
| Owner | Owner | Describes account ownership of subscriber in an on-your-behalf account. |
| PartnerKey | xsd:string | Unique identifier provided by partner for an object. This property is accessible only via API. |
| PartnerProperties | APIProperty[] | A collection of metadata supplied by the client and stored by the system. These properties are accessible only via API. |
| SuccessMessage | xsd:string | Defines SMS message to send if triggered email send succeeds. |
| TriggeredSend | TriggeredSendDefinition | Specifies triggered send definition to use as part of the SendEmailMOKeyword object's action. |

## Related Items

-   [Supported Operations for Objects and Methods](https://developer.salesforce.com/docs/atlas.en-us.mc-apis.meta/mc-apis/supported_operations_for_objects_and_methods.htm)
