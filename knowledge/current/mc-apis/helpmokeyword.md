---
title: "HelpMOKeyword"
domain: mc-apis
topic: helpmokeyword
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-04-07T18:40:17.520Z
estimatedTokens: 532
keywords: [HelpMOKeyword, actions, HELP, SMS, keyword, account, Items]
---

> The HelpMOKeyword object defines actions associated with the HELP SMS keyword for an account.

# HelpMOKeyword

The HelpMOKeyword object defines actions associated with the HELP SMS keyword for an account.

## Properties

| Name | Data Type | Description |
| --- | --- | --- |
| Client | ClientID | Specifies the account ownership and context of an object. |
| CorrelationID | xsd:string | Identifies correlation of objects across several requests. |
| CreatedDate | xsd:dateTime | Read-only date and time of the object's creation. |
| CustomerKey | xsd:string | User-supplied unique identifier for an object within an object type. This property corresponds to the external key assigned to an object in Marketing Cloud. |
| DefaultHelpMessage | xsd:string | Contains default message to deliver for a HELP MO message. |
| FriendlyName | xsd:string | Contains the friendly name for a HELP MO keyword. |
| ID | xsd:int | Read-only identifier for an object. Some objects use the ObjectID property as the Marketing Cloud unique ID. |
| IsDefaultKeyword | xsd:boolean | Specifies if account defaults to this SMS keyword action if no other options are available. |
| MenuText | xsd:string | Defines text to use for outlining multiple response options in the response to a HELP MO request. |
| ModifiedDate | Nullable`1 | Indicates the last time object information was modified. |
| MoreChoicesPrompt | xsd:string | Text used to inform MO message sender of more available choices as part of a HELP keyword action. |
| ObjectID | xsd:string | System-controlled, read-only text string identifier for object. |
| ObjectState | xsd:string | Reserved for future use. |
| Owner | Owner | Describes account ownership of subscriber in an on-your-behalf account. |
| PartnerKey | xsd:string | Unique identifier provided by partner for an object. This property is accessible only via API. |
| PartnerProperties | APIProperty[] | A collection of metadata supplied by the client and stored by the system. These properties are accessible only via API. |

## Related Items

-   [Supported Operations for Objects and Methods](https://developer.salesforce.com/docs/atlas.en-us.mc-apis.meta/mc-apis/supported_operations_for_objects_and_methods.htm)
