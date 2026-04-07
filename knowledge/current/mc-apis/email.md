---
title: "Email"
domain: mc-apis
topic: email
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-04-07T18:40:16.752Z
estimatedTokens: 1182
keywords: [Email, Marketing, Cloud, Items]
---

> The Email object represents an email in Marketing Cloud.

# Email

Marketing Cloud has a new model for storing, finding, managing, creating, sharing, and distributing all content-related objects. Access the objects created with the new Content Builder tools using the REST API. Your existing SOAP API integrations only function with the Classic tools in Marketing Cloud.

The Email object represents an email in Marketing Cloud.

-   To create or update an Email with PreHeader populated, you need the Email | Content | Email | PreHeaderAccess permission.
-   To create or update an Email with ClonedFromID populated, you need the Email | Content | Simple Automated Email | Create From Existing Email permission.

## Properties

| Name | Data Type | Description |
| --- | --- | --- |
| CategoryID | xsd:int | Specifies the identifier of the folder containing the email. |
| CharacterSet | xsd:string | Indicates encoding used in an email message. Valid values include:us-ascii (United States)shift-jis (Japanese)EUC-KR (Korean)iso-8859-1 (Western European)big5 (Chinese)koi8-r (Russian)utf-8 (Unicode)iso-2022-JP (Japanese)iso-8859-2 (Central European)ISO-8859-11 (Thai)GB2312 (Simplified Chinese)iso-8859-6 (Arabic) |
| Client | ClientID | Specifies the account ownership and context of an object. |
| ClonedFromID | xsd:int | ID of email message from which the specified email message was created. |
| ContentAreas | ContentArea[] | Contains information on content areas included in an email message. |
| ContentCheckStatus | xsd:string | Indicates whether content validation has completed for this email message. |
| CorrelationID | xsd:string | Identifies correlation of objects across several requests. |
| CreatedDate | xsd:dateTime | Read-only date and time of the object's creation. |
| CustomerKey | xsd:string | User-supplied unique identifier for an object within an object type. This property corresponds to the external key assigned to an object in Marketing Cloud. |
| EmailType | xsd:string | Defines preferred email type. |
| Folder | xsd:string | Specifies folder information (Retrieve only) - Deprecated. |
| HasDynamicSubjectLine | xsd:boolean | Indicates whether email message contains a dynamic subject line. |
| HTMLBody | xsd:string | Contains HTML body of an email message. |
| ID | xsd:int | Read-only identifier for an object. Some objects use the ObjectID property as the Marketing Cloud unique ID. |
| IsActive | xsd:boolean | Specifies whether the object is active. |
| IsHTMLPaste | xsd:boolean | Indicates whether email message was created via pasted HTML. |
| ModifiedDate | Nullable`1 | Indicates the last time object information was modified. |
| Name | xsd:string | Name of the object or property. |
| ObjectID | xsd:string | System-controlled, read-only text string identifier for object. |
| ObjectState | xsd:string | Reserved for future use. |
| Owner | Owner | Describes account ownership of subscriber in an on-your-behalf account. |
| PartnerKey | xsd:string | Unique identifier provided by partner for an object. This property is accessible only via API. |
| PartnerProperties | APIProperty[] | A collection of metadata supplied by the client and stored by the system. These properties are accessible only via API.Pre |
| PreHeader | xsd:string | Contains text used in preheader of email message on mobile devices. |
| Status | xsd:string | Defines status of object. Status of an address. |
| Subject | xsd:string | Contains subject area information for a message. |
| SyncTextWithHTML | xsd:boolean | Makes the text version of an email contain the same content as the HTML version. |
| TextBody | xsd:string | Contains raw text body of a message. |
| __AdditionalEmailAttribute1 | xsd:string | Optional field that lets you specify up to five email attributes on CREATE or RETRIEVE calls. Used to capture analytics or other metadata. Additional attributes are __AdditionalEmailAttribute 2, __AdditionalEmailAttribute3, and so on. |

## Related Items

-   [Supported Operations for Objects and Methods](https://developer.salesforce.com/docs/atlas.en-us.mc-apis.meta/mc-apis/supported_operations_for_objects_and_methods.htm)
-   [REST API](https://developer.salesforce.com/docs/atlas.en-us.mc-apis.meta/mc-apis/content-api.htm)
-   [Analytics Strings in Help](https://help.salesforce.com/articleView?id=mc_es_available_personalization_strings.htm&type=5)
-   [Create a Text-Only Email](atlas.en-us.noversion.mc-apis.meta/mc-apis/creating_a_text_only_email_via_the_web_service_api.htm)
-   [Create a Triggered Send Email Campaign Workflow](atlas.en-us.noversion.mc-apis.meta/mc-apis/creating_a_triggered_email_campaign_workflow.htm)
-   [Create an Email](atlas.en-us.noversion.mc-apis.meta/mc-apis/creating_an_email_via_the_web_service_api.htm)

## Related Topics

- Create a Text-Only Email (atlas.en-us.noversion.mc-apis.meta/mc-apis/creating_a_text_only_email_via_the_web_service_api.htm)
- Create a Triggered Send Email Campaign Workflow (atlas.en-us.noversion.mc-apis.meta/mc-apis/creating_a_triggered_email_campaign_workflow.htm)
- Create an Email (atlas.en-us.noversion.mc-apis.meta/mc-apis/creating_an_email_via_the_web_service_api.htm)
