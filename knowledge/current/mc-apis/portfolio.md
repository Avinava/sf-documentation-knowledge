---
title: "Portfolio"
domain: mc-apis
topic: portfolio
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-04-07T18:40:18.176Z
estimatedTokens: 1114
keywords: [Portfolio, file, Marketing, Cloud, account, cannot, upload, item, previously, deleted, application, retains, old, filename, case, image, remains, email, cam, Items, articles, SOAP, API]
---

> The Portfolio object indicates a file within the Portfolio of a Marketing Cloud account. You cannot upload a Portfolio item with the same name as a previously deleted Portfolio item. The application retains the old file and filename in case the Portfolio image remains in use by an existing email cam

# Portfolio

Marketing Cloud has a new model for storing, finding, managing, creating, sharing, and distributing all content-related objects. Access the objects created with the new Content Builder tools using the REST API. Your existing SOAP API integrations only function with the Classic tools in Marketing Cloud.

The Portfolio object indicates a file within the Portfolio of a Marketing Cloud account. You cannot upload a Portfolio item with the same name as a previously deleted Portfolio item. The application retains the old file and filename in case the Portfolio image remains in use by an existing email campaign. To replace that file with a new file of the same name, set the SaveOptions on your call to UpdateAdd.

## Properties

| Name | Data Type | Description |
| --- | --- | --- |
| CacheClearTime | xsd:dateTime | Reserved for future use. |
| CategoryID | xsd:int | Specifies the identifier of the folder. This property defaults to media. In Enterprise 2.0 accounts, you can define a folder as shared or private. Valid values include:shared_portfoliomedia |
| CategoryType | xsd:string | Defines whether a folder within a Portfolio is shared to other account users or not. |
| Client | ClientID | Specifies the account ownership and context of an object. |
| CorrelationID | xsd:string | Identifies correlation of objects across several requests. |
| CreatedDate | xsd:dateTime | Read-only date and time of the object's creation. |
| CustomerKey | xsd:string | User-supplied unique identifier for an object within an object type. This property corresponds to the external key assigned to an object in Marketing Cloud. |
| Description | xsd:string | Describes and provides information regarding the object. |
| DisplayName | xsd:string | Name to be displayed for an item within a Portfolio. |
| FileHeightPX | xsd:int | Specifies height of image contained in Portfolio (read-only value) |
| FileName | xsd:string | Indicates name of file associated with the object. |
| FileSizeKB | xsd:int | Specifies file size of a Portfolio item (read-only). |
| FileURL | xsd:string | Specifies the URL at which a Portfolio file is stored. |
| FileWidthPX | xsd:int | Specifies the width of a Portfolio image in pixels (read-only). |
| ID | xsd:int | Read-only identifier for an object. Some objects use the ObjectID property as the Marketing Cloud unique ID. |
| IsActive | xsd:boolean | Specifies whether the object is active |
| IsUploaded | xsd:boolean | Indicates whether the Portfolio object in question was uploaded. A value of true indicates an uploaded Portfolio object. |
| ModifiedDate | Nullable`1 | Indicates the last time object information was modified. |
| ObjectID | xsd:string | System-controlled, read-only text string identifier for object. |
| ObjectState | xsd:string | Reserved for future use. |
| Owner | Owner | Describes account ownership of subscriber in an on-your-behalf account. |
| PartnerKey | xsd:string | Unique identifier provided by partner for an object. This property is accessible only via API. |
| PartnerProperties | APIProperty[] | A collection of metadata supplied by the client and stored by the system. These properties are accessible only via API. |
| Source | ResourceSpecification | Defines source of Portfolio object. Source information includes the URN and authentication. |
| ThumbSizeKB | xsd:int | Indicates size of a thumbnail image associated with a Portfolio object. |
| ThumbURL | xsd:string | Indicates URL of a thumbnail image associated with a Portfolio object. |
| TypeDescription | xsd:string | Describes type for a Portfolio object. |

## Related Items

-   [Supported Operations for Objects and Methods](https://developer.salesforce.com/docs/atlas.en-us.mc-apis.meta/mc-apis/supported_operations_for_objects_and_methods.htm)
-   [REST API](https://developer.salesforce.com/docs/atlas.en-us.mc-apis.meta/mc-apis/content-api.htm)
-   [SaveOptions Object](atlas.en-us.noversion.mc-apis.meta/mc-apis/saveoptions.htm)
-   [UpdateAdd Object](atlas.en-us.noversion.mc-apis.meta/mc-apis/updateadd.htm)
-   [Copy an Image from a Website into the Portfolio](atlas.en-us.noversion.mc-apis.meta/mc-apis/copying_an_image_from_a_website_into_the_portfolio.htm "Copying_an_Image_from_a_Website_into_the_Portfolio")
-   [Create a Portfolio Object](atlas.en-us.noversion.mc-apis.meta/mc-apis/creating_a_portfolio_object_via_the_web_service_api.htm "Creating_A_Portfolio_Object_Via_the_Web_Service_API")

## Related Topics

- SaveOptions Object (atlas.en-us.noversion.mc-apis.meta/mc-apis/saveoptions.htm)
- UpdateAdd Object (atlas.en-us.noversion.mc-apis.meta/mc-apis/updateadd.htm)
- Copy an Image from a Website into the Portfolio (atlas.en-us.noversion.mc-apis.meta/mc-apis/copying_an_image_from_a_website_into_the_portfolio.htm)
- Create a Portfolio Object (atlas.en-us.noversion.mc-apis.meta/mc-apis/creating_a_portfolio_object_via_the_web_service_api.htm)
