---
title: "SendSMSMOKeyword"
domain: mc-apis
topic: sendsmsmokeyword
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-04-07T18:40:20.253Z
estimatedTokens: 493
keywords: [SendSMSMOKeyword, actions, take, keyword, received, Items]
---

> The SendSMSMOKeyword object defines actions to take when the specified MO keyword is received.

# SendSMSMOKeyword

The SendSMSMOKeyword object defines actions to take when the specified MO keyword is received.

## Properties

| Name | Data Type | Description |
| --- | --- | --- |
| Client | ClientID | Specifies the account ownership and context of an object. |
| CorrelationID | xsd:string | Identifies correlation of objects across several requests. |
| CreatedDate | xsd:dateTime | Read-only date and time of the object's creation. |
| CustomerKey | xsd:string | User-supplied unique identifier for an object within an object type. This property corresponds to the external key assigned to an object in Marketing Cloud. |
| ID | xsd:int | Read-only identifier for an object. Some objects use the ObjectID property as the Marketing Cloud unique ID. |
| IsDefaultKeyword | xsd:boolean | Specifies if account defaults to this SMS keyword action if no other options are available. |
| Message | xsd:string | Contains contents of results message. |
| ModifiedDate | Nullable`1 | Indicates the last time object information was modified. |
| NextMOKeyword | BaseMOKeyword | Defines next MO keyword to use in an SMS conversation. |
| ObjectID | xsd:string | System-controlled, read-only text string identifier for object. |
| ObjectState | xsd:string | Reserved for future use. |
| Owner | Owner | Describes account ownership of subscriber in an on-your-behalf account. |
| PartnerKey | xsd:string | Unique identifier provided by partner for an object. This property is accessible only via API. |
| PartnerProperties | APIProperty[] | A collection of metadata supplied by the client and stored by the system. These properties are accessible only via API. |
| ScriptErrorMessage | xsd:string | Defines message to deliver to subscriber in case of an error in the SMS conversation. |

## Related Items

-   [Supported Operations for Objects and Methods](https://developer.salesforce.com/docs/atlas.en-us.mc-apis.meta/mc-apis/supported_operations_for_objects_and_methods.htm)
