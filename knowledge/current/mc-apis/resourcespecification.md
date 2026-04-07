---
title: "ResourceSpecification"
domain: mc-apis
topic: resourcespecification
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-04-07T09:06:23.316Z
estimatedTokens: 489
keywords: [ResourceSpecification, initial, location, new, asset, contained, account's, Portfolio, publicly, accessible, web, enhanced, FTP, below, specify]
---

# ResourceSpecification

> The ResourceSpecification object specifies the initial location for a new asset to be contained within an account's Portfolio. The location specified can be a publicly accessible web location or an enhanced FTP location. If you use an enhanced FTP location, use the syntax below to specify the locati

# ResourceSpecification

The ResourceSpecification object specifies the initial location for a new asset to be contained within an account's Portfolio. The location specified can be a publicly accessible web location or an enhanced FTP location. If you use an enhanced FTP location, use the syntax below to specify the location of your asset: File://ETFTP/Import/image1.jpg

## Properties

| Name | Data Type | Description |
| --- | --- | --- |
| Authentication | Authentication | Reserved for future use. |
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
| URN | xsd:string | Specifies the Uniform Resource Name (URN) for the object, such as a file reference or URL. |

## Related Items

[Create a Portfolio Item](atlas.en-us.noversion.mc-apis.meta/mc-apis/creating_a_portfolio_object_via_the_web_service_api.htm)

## Related Topics

- Create a Portfolio Item (atlas.en-us.noversion.mc-apis.meta/mc-apis/creating_a_portfolio_object_via_the_web_service_api.htm)
