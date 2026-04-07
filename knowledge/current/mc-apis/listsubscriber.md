---
title: "ListSubscriber"
domain: mc-apis
topic: listsubscriber
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-04-07T18:40:17.795Z
estimatedTokens: 501
keywords: [ListSubscriber, retrieves, subscribers, subscriber, retrieve, any, groups, belongs, Perform, call, specific, determine, refers, group, Items]
---

> The ListSubscriber object retrieves subscribers for a list or lists for a subscriber. Calls to this object also retrieve any groups to which a subscriber belongs. Perform a call on the specific ID to determine if that ID refers to a list or group.

# ListSubscriber

The ListSubscriber object retrieves subscribers for a list or lists for a subscriber. Calls to this object also retrieve any groups to which a subscriber belongs. Perform a call on the specific ID to determine if that ID refers to a list or group.

## Properties

| Name | Data Type | Description |
| --- | --- | --- |
| Client | ClientID | Specifies the account ownership and context of an object. |
| CorrelationID | xsd:string | Identifies correlation of objects across several requests. |
| CreatedDate | xsd:dateTime | Read-only date and time of the object's creation. |
| CustomerKey | xsd:string | User-supplied unique identifier for an object within an object type. This property corresponds to the external key assigned to an object in Marketing Cloud. |
| ID | xsd:int | Read-only identifier for an object. Some objects use the ObjectID property as the Marketing Cloud unique ID. |
| ListID | xsd:int | Defines identification for a list the subscriber resides on. |
| ModifiedDate | Nullable`1 | Indicates the last time object information was modified. |
| ObjectID | xsd:string | System-controlled, read-only text string identifier for object. |
| ObjectState | xsd:string | Reserved for future use. |
| Owner | Owner | Describes account ownership of subscriber in an on-your-behalf account. |
| PartnerKey | xsd:string | Unique identifier provided by partner for an object. This property is accessible only via API. |
| PartnerProperties | APIProperty[] | A collection of metadata supplied by the client and stored by the system. These properties are accessible only via API. |
| Status | SubscriberStatus | Defines status of a subscriber's address. Valid values include:ActiveBouncedHeldUnsubscribedDeleted |
| SubscriberKey | xsd:string | Identification of a specific subscriber. |

## Related Items

-   [Supported Operations for Objects and Methods](https://developer.salesforce.com/docs/atlas.en-us.mc-apis.meta/mc-apis/supported_operations_for_objects_and_methods.htm)
