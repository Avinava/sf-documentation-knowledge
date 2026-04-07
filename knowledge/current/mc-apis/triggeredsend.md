---
title: "TriggeredSend"
domain: mc-apis
topic: triggeredsend
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-04-07T18:40:20.759Z
estimatedTokens: 621
keywords: [TriggeredSend, specific, instance, triggered, email, send, Items]
---

> The TriggeredSend object represents a specific instance of a triggered email send.

# TriggeredSend

The TriggeredSend object represents a specific instance of a triggered email send.

## Properties

| Name | Data Type | Description |
| --- | --- | --- |
| Attributes | Attribute[] | Specifies attributes associated with an object. |
| Client | ClientID | Specifies the account ownership and context of an object. |
| CorrelationID | xsd:string | This property specifies a identifier for all objects and is returned in the async response so it can be used for tracking purposes. This property has no uniqueness constraints. (optional) |
| CreatedDate | xsd:dateTime | Read-only date and time of the object's creation. |
| CustomerKey | xsd:string | User-supplied unique identifier for an object within an object type. This property corresponds to the external key assigned to an object in Marketing Cloud. |
| ID | xsd:int | Read-only identifier for an object. Some objects use the ObjectID property as the Marketing Cloud unique ID. |
| ModifiedDate | Nullable`1 | Indicates the last time object information was modified. |
| ObjectID | xsd:string | System-controlled, read-only text string identifier for object. |
| ObjectState | xsd:string | Reserved for future use. |
| Owner | Owner | Describes account ownership of subscriber in an on-your-behalf account. |
| PartnerKey | xsd:string | Unique identifier provided by partner for an object. This property is accessible only via API. |
| PartnerProperties | APIProperty[] | A collection of metadata supplied by the client and stored by the system. These properties are accessible only via API. |
| Subscribers | Subscriber[] | Indicates subscribers associated with an object. |
| TriggeredSendDefinition | TriggeredSendDefinition | Defines associated triggered send definition for triggered send. |

## Related Items

-   [Supported Operations for Objects and Methods](https://developer.salesforce.com/docs/atlas.en-us.mc-apis.meta/mc-apis/supported_operations_for_objects_and_methods.htm)
-   [Create a Triggered Send for a Lock and Publish Account](atlas.en-us.noversion.mc-apis.meta/mc-apis/creating_a_triggered_send_for_a_lock_and_publish_account_via_the_web_service_api.htm)
-   [Create a Triggered Send for an On-Your-Behalf Account](atlas.en-us.noversion.mc-apis.meta/mc-apis/creating_a_triggered_send_for_an_on_your_behalf_account_via_the_web_service_api.htm)
-   [Create a Triggered Send Using the Async API](atlas.en-us.noversion.mc-apis.meta/mc-apis/creating_a_triggered_send_using_the_async_api.htm)

## Related Topics

- Create a Triggered Send for a Lock and Publish Account (atlas.en-us.noversion.mc-apis.meta/mc-apis/creating_a_triggered_send_for_a_lock_and_publish_account_via_the_web_service_api.htm)
- Create a Triggered Send for an On-Your-Behalf Account (atlas.en-us.noversion.mc-apis.meta/mc-apis/creating_a_triggered_send_for_an_on_your_behalf_account_via_the_web_service_api.htm)
- Create a Triggered Send Using the Async API (atlas.en-us.noversion.mc-apis.meta/mc-apis/creating_a_triggered_send_using_the_async_api.htm)
