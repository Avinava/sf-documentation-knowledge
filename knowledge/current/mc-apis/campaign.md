---
title: "Campaign"
domain: mc-apis
topic: campaign
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-04-07T18:40:15.617Z
estimatedTokens: 510
keywords: [Campaign, Marketing, Cloud, perform, discrete, tasks, part, automated, process, start, stop, permission, Items]
---

> The Campaign object contains information about a campaign in Marketing Cloud. Use this object to perform discrete tasks as part of an automated process. To start or stop a Campaign using the perform method, you need the Campaign | Start or Campaign | Stop permission.

# Campaign

The Campaign object contains information about a campaign in Marketing Cloud. Use this object to perform discrete tasks as part of an automated process. To start or stop a Campaign using the perform method, you need the Campaign | Start or Campaign | Stop permission.

## Properties

| Name | Data Type | Description |
| --- | --- | --- |
| Client | ClientID | Specifies the account ownership and context of an object. |
| CorrelationID | xsd:string | Identifies correlation of objects across several requests. |
| CreatedDate | xsd:dateTime | Read-only date and time of the object's creation. |
| CustomerKey | xsd:string | User-supplied unique identifier for an object within an object type. |
| Description | xsd:string | Describes and provides information regarding the object. |
| ID | xsd:int | Read-only legacy identifier for an object. Not supported on all objects. |
| InteractionObjectID | xsd:string | Returns associated ID for activities within the process of the overall conversation or program. |
| Keyword | xsd:string | Reserved for future use. |
| ModifiedDate | Nullable`1 | Last time object information was modified. |
| Name | xsd:string | Name of the object or property. |
| ObjectID | xsd:string | System-controlled, read-only text string identifier for object. |
| ObjectState | xsd:string | Reserved for future use. |
| Owner | Owner | Describes account ownership of subscriber in an on-your-behalf account. |
| PartnerKey | xsd:string | Unique identifier provided by partner for an object. This property is accessible only via API. |
| PartnerProperties | APIProperty[] | A collection of metadata supplied by the client and stored by the system. These properties are accessible only via API. |

## Related Items

-   [Supported Operations for Objects and Methods](https://developer.salesforce.com/docs/atlas.en-us.mc-apis.meta/mc-apis/supported_operations_for_objects_and_methods.htm)
-   [Perform a Campaign](atlas.en-us.noversion.mc-apis.meta/mc-apis/performing_a_campaign_via_the_web_service_api.htm)

## Related Topics

- Perform a Campaign (atlas.en-us.noversion.mc-apis.meta/mc-apis/performing_a_campaign_via_the_web_service_api.htm)
