---
title: "SentEvent"
domain: mc-apis
topic: sentevent
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-04-07T18:40:20.265Z
estimatedTokens: 575
keywords: [SentEvent, send, including, individual, subscribers, Items]
---

> The SentEvent object contains tracking data related to a send, including information on individual subscribers.

# SentEvent

The SentEvent object contains tracking data related to a send, including information on individual subscribers.

## Properties

| Name | Data Type | Description |
| --- | --- | --- |
| BatchID | xsd:int | Ties triggered send sent events to other events (like clicks and opens that occur at a later date and time) |
| Classification | xsd:string |  |
| Client | ClientID | Specifies the account ownership and context of an object. |
| CorrelationID | xsd:string | Identifies correlation of objects across several requests. |
| CreatedDate | xsd:dateTime | Read-only date and time of the object's creation. |
| CustomerKey | xsd:string | User-supplied unique identifier for an object within an object type. This property corresponds to the external key assigned to an object in Marketing Cloud. |
| EventDate | xsd:dateTime | Date when a tracking event occurred. |
| EventType | EventType | The type of tracking event |
| ID | xsd:int | Read-only identifier for an object. Some objects use the ObjectID property as the Marketing Cloud unique ID. |
| ModifiedDate | Nullable`1 | Indicates the last time object information was modified. |
| ObjectID | xsd:string | System-controlled, read-only text string identifier for object. |
| ObjectState | xsd:string | Reserved for future use. |
| Owner | Owner | Describes account ownership of subscriber in an on-your-behalf account. |
| PartnerKey | xsd:string | Unique identifier provided by partner for an object. This property is accessible only via API. |
| PartnerProperties | APIProperty[] | A collection of metadata supplied by the client and stored by the system. These properties are accessible only via API. |
| RenderedSubject | xsd:string | The subject line after personalization. |
| SendID | xsd:int | Contains identifier for a specific send. |
| SubscriberKey | xsd:string | Identification of a specific subscriber. |
| TriggeredSendDefinitionObjectID | xsd:string | Identifies the triggered send definition associated with an event. This value also appears in tracking events to allow you to tie those events to a specific triggered send. |

## Related Items

-   [Supported Operations for Objects and Methods](https://developer.salesforce.com/docs/atlas.en-us.mc-apis.meta/mc-apis/supported_operations_for_objects_and_methods.htm)
