---
title: "DoubleOptInMOKeyword"
domain: mc-apis
topic: doubleoptinmokeyword
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-04-07T09:06:21.600Z
estimatedTokens: 727
keywords: [DoubleOptInMOKeyword, keyword, allowing, mobile, user, subscribe, SMS, messages, double, opt-in, workflow, Items]
---

# DoubleOptInMOKeyword

> The DoubleOptInMOKeyword object defines an MO keyword, allowing a mobile user to subscribe to SMS messages using a double opt-in workflow.

# DoubleOptInMOKeyword

The DoubleOptInMOKeyword object defines an MO keyword, allowing a mobile user to subscribe to SMS messages using a double opt-in workflow.

## Properties

| Name | Data Type | Description |
| --- | --- | --- |
| Client | ClientID | Specifies the account ownership and context of an object. |
| CorrelationID | xsd:string | Identifies correlation of objects across several requests. |
| CreatedDate | xsd:dateTime | Read-only date and time of the object's creation. |
| CustomerKey | xsd:string | User-supplied unique identifier for an object within an object type. This property corresponds to the external key assigned to an object in Marketing Cloud. |
| DefaultPublication | List | Specifies the default publication list to which to add a subscriber. |
| ID | xsd:int | Read-only identifier for an object. Some objects use the ObjectID property as the Marketing Cloud unique ID. |
| InvalidPublicationMessage | xsd:string | Specifies message to send in case a subscriber requests subscription to or unsubscription from an invalid publication list. |
| InvalidResponseMessage | xsd:string | Specifies message to send in case a subscriber sends in an invalid response. |
| IsDefaultKeyword | xsd:boolean | Specifies if account defaults to this SMS keyword action if no other options are available. |
| MissingPublicationMessage | xsd:string | Reserved for future use. |
| ModifiedDate | Nullable`1 | Indicates the last time object information was modified. |
| NeedPublicationMessage | xsd:string | Specifies message to send in case a subscriber sends in an response that does not specify a publication list. |
| ObjectID | xsd:string | System-controlled, read-only text string identifier for object. |
| ObjectState | xsd:string | Reserved for future use. |
| Owner | Owner | Describes account ownership of subscriber in an on-your-behalf account. |
| PartnerKey | xsd:string | Unique identifier provided by partner for an object. This property is accessible only via API. |
| PartnerProperties | APIProperty[] | A collection of metadata supplied by the client and stored by the system. These properties are accessible only via API. |
| PromptMessage | xsd:string | Contains message sent to subscriber to prompt response as part of the double opt-in process. |
| SuccessMessage | xsd:string | Defines SMS message to send if triggered email send succeeds. |
| UnexpectedErrorMessage | xsd:string | Contains message to send to subscriber in case of unexpected error. |
| ValidPublications | List[] | Defines valid publication lists for use with a double opt-in event. |
| ValidResponses | xsd:ArrayOfString | Defines valid responses a subscriber can use as part of a double opt-in process. |

## Related Items

-   [Supported Operations for Objects and Methods](https://developer.salesforce.com/docs/atlas.en-us.mc-apis.meta/mc-apis/supported_operations_for_objects_and_methods.htm)
