---
title: "ListSend"
domain: mc-apis
topic: listsend
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-04-07T09:06:22.605Z
estimatedTokens: 877
keywords: [ListSend, retrieve-only, associated, completed, send, conducted, data, extension, any, publication, multiple, retrieve, SendID, Items]
---

# ListSend

> The ListSend object specifies retrieve-only properties associated with the list for a completed send. If you conducted the send to a data extension, ListSend represents any associated publication lists. If you conducted a send to multiple lists, a ListSend retrieve on the SendID of that send would r

# ListSend

The ListSend object specifies retrieve-only properties associated with the list for a completed send. If you conducted the send to a data extension, ListSend represents any associated publication lists. If you conducted a send to multiple lists, a ListSend retrieve on the SendID of that send would return multiple ListSend objects.

## Properties

| Name | Data Type | Description |
| --- | --- | --- |
| Client | ClientID | Specifies the account ownership and context of an object. |
| CorrelationID | xsd:string | Identifies correlation of objects across several requests. |
| CreatedDate | xsd:dateTime | Read-only date and time of the object's creation. |
| CustomerKey | xsd:string | User-supplied unique identifier for an object within an object type. This property corresponds to the external key assigned to an object in Marketing Cloud. |
| Duplicates | xsd:int | Represent the number of duplicate email addresses associated with a send (exists only when a send occurs to multiple lists). |
| Events | TrackingEvent[] | Reserved for future use. |
| ExistingUndeliverables | xsd:int | Indicates whether bounces occurred on previous send. |
| ExistingUnsubscribes | xsd:int | Indicates whether unsubscriptions occurred on previous send. |
| ForwardedEmails | xsd:int | Number of emails forwarded for a send. |
| HardBounces | xsd:int | Indicates number of hard bounces associated with a send. |
| ID | xsd:int | Read-only identifier for an object. Some objects use the ObjectID property as the Marketing Cloud unique ID. |
| InvalidAddresses | xsd:int | Specifies the number of invalid addresses associated with a send. |
| Links | Link[] | Contains an array of links included in a send. |
| List | List | List associated with an object. |
| MissingAddresses | xsd:int | Specifies number of missing addresses encountered within a send. |
| ModifiedDate | Nullable`1 | Indicates the last time object information was modified. |
| NumberDelivered | Nullable`1 | Number of sent emails that did not bounce. |
| NumberSent | Nullable`1 | Number of emails actually sent as part of an email send. This number reflects all of the sent messages and may include bounced messages. |
| ObjectID | xsd:string | System-controlled, read-only text string identifier for object. |
| ObjectState | xsd:string | Reserved for future use. |
| OtherBounces | xsd:int | Specifies number of Other-type bounces in a send. |
| Owner | Owner | Describes account ownership of subscriber in an on-your-behalf account. |
| PartnerKey | xsd:string | Unique identifier provided by partner for an object. This property is accessible only via API. |
| PartnerProperties | APIProperty[] | A collection of metadata supplied by the client and stored by the system. These properties are accessible only via API. |
| PreviewURL | xsd:string | Indicates URL used to preview the message associated with a send. |
| SendID | xsd:int | Contains identifier for a specific send. |
| SoftBounces | xsd:int | Indicates number of soft bounces associated with a specific send. |
| UniqueClicks | xsd:int | Indicates number of unique clicks on message. |
| UniqueOpens | xsd:int | Indicates number of unique opens resulting from a triggered send. |
| Unsubscribes | xsd:int | Indicates the number of unsubscribe events associated with a send. |

## Related Items

-   [Supported Operations for Objects and Methods](https://developer.salesforce.com/docs/atlas.en-us.mc-apis.meta/mc-apis/supported_operations_for_objects_and_methods.htm)
