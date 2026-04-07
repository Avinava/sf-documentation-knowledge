---
title: "SubscriberList"
domain: mc-apis
topic: subscriberlist
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-04-07T18:40:20.523Z
estimatedTokens: 510
keywords: [SubscriberList, retrieve, specific, subscriber, Items]
---

> Use the SubscriberList object to retrieve lists for a specific subscriber.

# SubscriberList

Use the SubscriberList object to retrieve lists for a specific subscriber.

## Properties

| Name | Data Type | Description |
| --- | --- | --- |
| Action | xsd:string | Defines the action to take for the specified object. |
| Client | ClientID | Specifies the account ownership and context of an object. |
| CorrelationID | xsd:string | Identifies correlation of objects across several requests. |
| CreatedDate | xsd:dateTime | Read-only date and time of the object's creation. |
| CustomerKey | xsd:string | User-supplied unique identifier for an object within an object type. This property corresponds to the external key assigned to an object in Marketing Cloud. |
| ID | xsd:int | Read-only identifier for an object. Some objects use the ObjectID property as the Marketing Cloud unique ID. |
| List | List | List associated with an object. |
| ModifiedDate | Nullable`1 | Indicates the last time object information was modified. |
| ObjectID | xsd:string | System-controlled, read-only text string identifier for object. |
| ObjectState | xsd:string | Reserved for future use. |
| Owner | Owner | Describes account ownership of subscriber in an on-your-behalf account. |
| PartnerKey | xsd:string | Unique identifier provided by partner for an object. This property is accessible only via API. |
| PartnerProperties | APIProperty[] | A collection of metadata supplied by the client and stored by the system. These properties are accessible only via API. |
| Status | SubscriberStatus | Defines status of object. Status of an address. |
| Subscriber | Subscriber | Identifies subscriber used in call. |

## Related Items

-   [Supported Operations for Objects and Methods](https://developer.salesforce.com/docs/atlas.en-us.mc-apis.meta/mc-apis/supported_operations_for_objects_and_methods.htm)
-   [Add Subscribers to a List](atlas.en-us.noversion.mc-apis.meta/mc-apis/adding_subscribers_to_a_list.htm)
-   [Manage Subscribers On Lists](atlas.en-us.noversion.mc-apis.meta/mc-apis/managing_subscribers_on_lists.htm)

## Related Topics

- Add Subscribers to a List (atlas.en-us.noversion.mc-apis.meta/mc-apis/adding_subscribers_to_a_list.htm)
- Manage Subscribers On Lists (atlas.en-us.noversion.mc-apis.meta/mc-apis/managing_subscribers_on_lists.htm)
