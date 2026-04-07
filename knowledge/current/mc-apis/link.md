---
title: "Link"
domain: mc-apis
topic: link
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-04-07T09:06:22.556Z
estimatedTokens: 502
keywords: [Link, message, LinkSend, retrieve, Items]
---

# Link

> The Link object represents a link within a message. While this object has no supported methods, you can return some properties using the LinkSend object and retrieve method.

# Link

The Link object represents a link within a message. While this object has no supported methods, you can return some properties using the LinkSend object and retrieve method.

## Properties

| Name | Data Type | Description |
| --- | --- | --- |
| Alias | xsd:string | Name of link contained in message. |
| Client | ClientID | Specifies the account ownership and context of an object. |
| CorrelationID | xsd:string | Identifies correlation of objects across several requests. |
| CreatedDate | xsd:dateTime | Read-only date and time of the object's creation. |
| CustomerKey | xsd:string | User-supplied unique identifier for an object within an object type. This property corresponds to the external key assigned to an object in Marketing Cloud. |
| ID | xsd:int | Read-only identifier for an object. Some objects use the ObjectID property as the Marketing Cloud unique ID. |
| LastClicked | xsd:dateTime | Indicates last time a link included in a message was clicked. |
| ModifiedDate | Nullable`1 | Indicates the last time object information was modified. |
| ObjectID | xsd:string | System-controlled, read-only text string identifier for object. |
| ObjectState | xsd:string | Reserved for future use. |
| Owner | Owner | Describes account ownership of subscriber in an on-your-behalf account. |
| PartnerKey | xsd:string | Unique identifier provided by partner for an object. This property is accessible only via API. |
| PartnerProperties | APIProperty[] | A collection of metadata supplied by the client and stored by the system. These properties are accessible only via API. |
| Subscribers | TrackingEvent[] | Indicates subscribers associated with an object. |
| TotalClicks | xsd:int | Indicates total number of clicks on link in message. |
| UniqueClicks | xsd:int | Indicates number of unique clicks on message. |
| URL | xsd:string | Indicates URL included in an event or configuration. |

## Related Items

[LinkSend Object](atlas.en-us.noversion.mc-apis.meta/mc-apis/linksend.htm)

## Related Topics

- LinkSend Object (atlas.en-us.noversion.mc-apis.meta/mc-apis/linksend.htm)
