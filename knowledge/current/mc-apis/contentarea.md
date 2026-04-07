---
title: "ContentArea"
domain: mc-apis
topic: contentarea
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-04-07T09:06:20.737Z
estimatedTokens: 932
keywords: [ContentArea, defined, reusable, content, ContentAreas, Email, always, acted, upon, context, Items]
---

# ContentArea

> The ContentArea object represents a defined section of reusable content. One or many ContentAreas can be defined for an Email object. A ContentArea is always acted upon in the context of an Email object.

# ContentArea

Marketing Cloud has a new model for storing, finding, managing, creating, sharing, and distributing all content-related objects. Access the objects created with the new Content Builder tools using the REST API. Your existing SOAP API integrations only function with the Classic tools in Marketing Cloud.

The ContentArea object represents a defined section of reusable content. One or many ContentAreas can be defined for an Email object. A ContentArea is always acted upon in the context of an Email object.

## Properties

| Name | Data Type | Description |
| --- | --- | --- |
| BackgroundColor | xsd:string | Indicates background color of content area |
| BorderColor | xsd:string | Indicates color of border surrounding content area |
| BorderWidth | xsd:int | Indicates pixel width of border surrounding content area |
| CategoryID | xsd:int | Specifies the identifier of the folder. |
| Cellpadding | xsd:int | Indicates pixel value of padding around content area |
| Cellspacing | xsd:int | Indicates pixel value of spacing for content area |
| Client | ClientID | Specifies the account ownership and context of an object. |
| Content | xsd:string | Identifies content contained in a content area. |
| CorrelationID | xsd:string | Identifies correlation of objects across several requests. |
| CreatedDate | xsd:dateTime | Read-only date and time of the object's creation. |
| CustomerKey | xsd:string | User-supplied unique identifier for an object within an object type. This property corresponds to the external key assigned to an object in Marketing Cloud. |
| FontFamily | xsd:string | Indicates font family used in content area |
| HasFontSize | xsd:boolean | Indicates whether the content area includes a specified font size or not |
| ID | xsd:int | Read-only identifier for an object. Some objects use the ObjectID property as the Marketing Cloud unique ID. |
| IsBlank | xsd:boolean | Indicates if specified content area contains no content. |
| IsDynamicContent | xsd:boolean | Indicates if specific content area contains dynamic content. |
| IsLocked | xsd:boolean | Indicates if specific email content area within an Enterprise or Enterprise 2.0 account is locked and cannot be changed by subaccounts. |
| IsSurvey | xsd:boolean | Indicates whether a specific content area contains survey questions. |
| Key | xsd:string | Specifies key associated with content area in HTML body. Relates to the Email object via a custom type. |
| Layout | LayoutType | Indicates layout type of content area. Valid values include:HTMLWrappedRawTextSMSThe layout value HTMLWrapped displays as a Free Form orientation content area in the UI. The value RawText displays as HTML Only. |
| ModifiedDate | Nullable`1 | Indicates the last time object information was modified. |
| Name | xsd:string | Name of the object or property. |
| ObjectID | xsd:string | System-controlled, read-only text string identifier for object. |
| ObjectState | xsd:string | Reserved for future use. |
| Owner | Owner | Describes account ownership of subscriber in an on-your-behalf account. |
| PartnerKey | xsd:string | Unique identifier provided by partner for an object. This property is accessible only via API. |
| PartnerProperties | APIProperty[] | A collection of metadata supplied by the client and stored by the system. These properties are accessible only via API. |
| Width | xsd:int | Indicates pixel width of content area |

## Related Items

-   [Supported Operations for Objects and Methods](https://developer.salesforce.com/docs/atlas.en-us.mc-apis.meta/mc-apis/supported_operations_for_objects_and_methods.htm)
-   [REST API](https://developer.salesforce.com/docs/atlas.en-us.mc-apis.meta/mc-apis/content-api.htm)
