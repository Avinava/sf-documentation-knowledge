---
title: "UnsubscribeFromSMSPublicationMOKeyword"
domain: mc-apis
topic: unsubscribefromsmspublicationmokeyword
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-04-07T18:40:20.823Z
estimatedTokens: 581
keywords: [UnsubscribeFromSMSPublicationMOKeyword, keyword, subscriber, unsubscribe, SMS, publication, Items]
---

> The UnsubscribeFromSMSPublicationMOKeyword object defines keyword used by a subscriber to unsubscribe from an SMS publication list.

# UnsubscribeFromSMSPublicationMOKeyword

The UnsubscribeFromSMSPublicationMOKeyword object defines keyword used by a subscriber to unsubscribe from an SMS publication list.

## Properties

| Name | Data Type | Description |
| --- | --- | --- |
| AllUnsubSuccessMessage | xsd:string | Contains message to send to subscriber when they have successfully unsubscribed from all SMS publication lists. |
| Client | ClientID | Specifies the account ownership and context of an object. |
| CorrelationID | xsd:string | Identifies correlation of objects across several requests. |
| CreatedDate | xsd:dateTime | Read-only date and time of the object's creation. |
| CustomerKey | xsd:string | User-supplied unique identifier for an object within an object type. This property corresponds to the external key assigned to an object in Marketing Cloud. |
| ID | xsd:int | Read-only identifier for an object. Some objects use the ObjectID property as the Marketing Cloud unique ID. |
| InvalidPublicationMessage | xsd:string | Specifies message to send in case a subscriber requests subscription to or unsubscription from an invalid publication list. |
| IsDefaultKeyword | xsd:boolean | Specifies if account defaults to this SMS keyword action if no other options are available. |
| ModifiedDate | Nullable`1 | Indicates the last time object information was modified. |
| NextMOKeyword | BaseMOKeyword | Defines next MO keyword to use in an SMS conversation. |
| ObjectID | xsd:string | System-controlled, read-only text string identifier for object. |
| ObjectState | xsd:string | Reserved for future use. |
| Owner | Owner | Describes account ownership of subscriber in an on-your-behalf account. |
| PartnerKey | xsd:string | Unique identifier provided by partner for an object. This property is accessible only via API. |
| PartnerProperties | APIProperty[] | A collection of metadata supplied by the client and stored by the system. These properties are accessible only via API. |
| SingleUnsubSuccessMessage | xsd:string | Contains message to send to subscriber when they have successfully unsubscribed from a single publication list. |

## Related Items

-   [Supported Operations for Objects and Methods](https://developer.salesforce.com/docs/atlas.en-us.mc-apis.meta/mc-apis/supported_operations_for_objects_and_methods.htm)
