---
title: "ObjectExtension"
domain: mc-apis
topic: objectextension
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-04-07T18:40:17.993Z
estimatedTokens: 556
keywords: [ObjectExtension, collection, retrieve-only, follow, don't, display, part, WSDL, They, multiple]
---

> The ObjectExtension object specifies a name and value property collection associated with some retrieve-only objects. The follow objects don't display as part of the WSDL. They are retrieve-only and return multiple ObjectExtension objects:

# ObjectExtension

The ObjectExtension object specifies a name and value property collection associated with some retrieve-only objects. The follow objects don't display as part of the WSDL. They are retrieve-only and return multiple ObjectExtension objects:

-   [SendAdditionalAttribute](atlas.en-us.noversion.mc-apis.meta/mc-apis/retrieving_additional_email_attributes.htm "Retrieving_Additional_Email_Attributes")
-   [SubscriberStatusEvent](atlas.en-us.noversion.mc-apis.meta/mc-apis/retrieving_the_subscriberstatusevent.htm "Retrieving_the_SubscriberStatusEvent")

## Properties

| Name | Data Type | Description |
| --- | --- | --- |
| Client | ClientID | Specifies the account ownership and context of an object. |
| CorrelationID | xsd:string | Identifies correlation of objects across several requests. |
| CreatedDate | xsd:dateTime | Read-only date and time of the object's creation. |
| CustomerKey | xsd:string | User-supplied unique identifier for an object within an object type. This property corresponds to the external key assigned to an object in Marketing Cloud. |
| ID | xsd:int | Read-only identifier for an object. Some objects use the ObjectID property as the Marketing Cloud unique ID. |
| ModifiedDate | Nullable`1 | Indicates the last time object information was modified. |
| ObjectID | xsd:string | System-controlled, read-only text string identifier for object. |
| ObjectState | xsd:string | Reserved for future use. |
| Owner | Owner | Describes account ownership of subscriber in an on-your-behalf account. |
| PartnerKey | xsd:string | Unique identifier provided by partner for an object. This property is accessible only via API. |
| PartnerProperties | APIProperty[] | A collection of metadata supplied by the client and stored by the system. These properties are accessible only via API. |
| Properties | APIProperty[] | Specifies an array of property definitions available for an object type. You can retrieve allowed properties using the Describe method. |
| Type | xsd:string | Indicates type of specific list. Valid values include Public, Private, Salesforce, GlobalUnsubscribe, and Master. Indicates the type of email to send to the address. Valid values include Text and HTML. |

## Related Topics

- SendAdditionalAttribute (atlas.en-us.noversion.mc-apis.meta/mc-apis/retrieving_additional_email_attributes.htm)
- SubscriberStatusEvent (atlas.en-us.noversion.mc-apis.meta/mc-apis/retrieving_the_subscriberstatusevent.htm)
