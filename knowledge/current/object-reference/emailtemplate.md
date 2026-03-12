---
title: "EmailTemplate"
domain: object-reference
topic: emailtemplate
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:35:08.459Z
estimatedTokens: 3337
keywords: [EmailTemplate, template, email, mass, Sales, Engagement, first-generation, managed, packages, Calls, Special, Access, Rules, Usage, Associated]
---

# EmailTemplate

> Represents a template for an email, mass email, list email, or Sales Engagement
   email. Supported in first-generation managed packages
   only.

# EmailTemplate

Represents a template for an email, mass email, list email, or Sales Engagement email. Supported in first-generation managed packages only.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=object_reference)

#### Note

You can’t send a mass email using a Visualforce email template.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), update(), upsert()

## Special Access Rules

Customer Portal users can’t access this object.

## Fields

| Field | Details |
| --- | --- |
| ApiVersion | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe API version for this class. Every class has an API version specified at creation. |
| Body | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionContent of the email. Limit: 384 KB. |
| BrandTemplateId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionRequired. ID of the BrandTemplate associated with this email template. The brand template supplies letterhead information for the email template. |
| DeliveryRate | TypepercentPropertiesFilter, Nillable, SortDescriptionRead-only. The percentage of the emails that were delivered compared to the number that bounced (soft and hard). Note: this data includes emails that were delivered to the recipient's spam folder.This field is available in API version 46.0 and later. To access this field, your org must use Sales Engagement and users need the Sales Engagement User or Sales Engagement Cadence Creator permission set. This field value includes emails sent via the ListEmail object or Sales Engagement cadences. |
| Description | TypestringPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionDescription of the template, for example, Promotion Mass Mailing. |
| DeveloperName | TypestringPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionThe unique name of the object in the API. This name can contain only underscores and alphanumeric characters, and must be unique in your org. It must begin with a letter, not include spaces, not end with an underscore, and not contain two consecutive underscores. In managed packages, this field prevents naming conflicts on package installations. With this field, a developer can change the object’s name in a managed package and the changes are reflected in a subscriber’s organization. Label is Template Unique Name.NoteWhen creating large sets of data, always specify a unique DeveloperName for each record. If no DeveloperName is specified, performance may slow while Salesforce generates one for each record. |
| Encoding | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionCharacter set encoding for the template. |
| EnhancedLetterheadId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionID of the enhanced letterhead associated with the email template.NoteTo use an enhanced letterhead, associate it with a Lightning email template that uses the HML merge language.This is a relationship field.Relationship NameEnhancedLetterheadRelationship TypeLookupRefers ToEnhancedLetterhead |
| EntityType | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, Sort,DescriptionWhen UIType is 2 (Lightning Experience) or 3 (Lightning ExperienceSample), EntityType indicates which entities this template can be used with (for example, account or lead). Valid values are standard object ID prefixes: 001 for account, 003 for contact, 006 for opportunity, and 00Q for lead, 500 for case, and 701 for campaign.This field has been removed in API version 39.0. Use RelatedEntityType instead. |
| FolderId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionID of the folder that contains the template.This is a relationship field.Relationship NameFolderRelationship TypeLookupRefers ToFolder, Organization, User |
| FolderName | TypestringPropertiesFilter, Nillable, SortDescriptionThe name of the folder that contains the template. |
| HasSalesforceFiles | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionIf the email template has attachments from Salesforce Files. The default value is false. |
| HtmlValue | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionThis field contains the content of the email message, including HTML coding to render the email message. Limit: 384 KB. |
| IsActive | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates that this template is active if true, or inactive if false. |
| IsBuilderContent | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionIf the email template was made in Email Template Builder. The default value is false. |
| LastUsedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionDate and time when this email template was last used.Used with Salesforce Classic templates.Not typically used with Lightning Experience templates. |
| Markup | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionThe Visualforce markup, HTML, JavaScript, or any other Web-enabled code that defines the content of the template. |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionName of the template. Label is Email Template Name. |
| NamespacePrefix | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe namespace prefix that is associated with this object. Each Developer Edition org that creates a managed package has a unique namespace prefix. Limit: 15 characters. You can refer to a component in a managed package by using the namespacePrefix__componentName notation.The namespace prefix can have one of the following values.In Developer Edition orgs, NamespacePrefix is set to the namespace prefix of the org for all objects that support it, unless an object is in an installed managed package. In that case, the object has the namespace prefix of the installed managed package. This field’s value is the namespace prefix of the Developer Edition org of the package developer.In orgs that are not Developer Edition orgs, NamespacePrefix is set only for objects that are part of an installed managed package. All other objects have no namespace prefix.This field can’t be accessed unless the logged-in user has the Customize Application permission. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionID of the owner of the template.This is a relationship field.Relationship NameOwnerRelationship TypeLookupRefers ToUser |
| RelatedEntityType | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionWhen UIType is 2 (Lightning Experience) or 3 (Lightning ExperienceSample), RelatedEntityType indicates which entities this template can be used with. Valid values are the entity API name: "Account" for account, "Contact" for contact, "Opportunity" for opportunity, "Lead" for lead, and so on. The value can be any entity the user has read access to (including custom entities) but not virtual entities, setup entities, or platform entities.No restrictions exist at the schema level. |
| Subject | TypestringPropertiesCreate, Nillable, Sort, UpdateDescriptionContent of the subject line.The limit is 1,000 characters for Lightning email templates and 230 characters for Classic email templates. |
| TemplateStyle | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, SortDescriptionStyle of the template.Possible values are:formalLetter—Formal LetterfreeForm—Free Form Letternewsletter—Newsletternone—No Email Layoutproducts—ProductspromotionLeft—Promotion (Left)promotionRight—Promotion (Right) |
| TemplateType | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, SortDescriptionType of template.Possible values are:custom—Customhtml—HTMLtext—Textvisualforce—Visualforce |
| TimesUsed | TypeintPropertiesFilter, Group, Nillable, SortDescriptionNumber of times this email template has been used.Used with Salesforce Classic templates.Not typically used with Lightning Experience templates. |
| TotalDelivered | TypeintPropertiesFilter, Group, Nillable, SortDescriptionRead-only. The total number of emails sent minus hard and soft bounces. Note: this data includes emails that were delivered to the recipient's spam folder.This field is available in API version 46.0 and later. To access this field, your org must use Sales Engagement and users need the Sales Engagement User or Sales Engagement Cadence Creator permission set. This field value includes emails sent via the ListEmail object or Sales Engagement cadences. |
| TotalHardBounced | TypeintPropertiesDefaulted on create, Filter, Group, Nillable, SortDescriptionRead-only. The total number of emails that permanently bounced back to the sender because the address is invalid. A hard bounce can occur because the domain name doesn't exist or because the recipient is unknown.This field is available in API version 46.0 and later. To access this field, your org must use Sales Engagement and users need the Sales Engagement User or Sales Engagement Cadence Creator permission set. This field value includes emails sent via the ListEmail object or Sales Engagement cadences. |
| TotalOpens | TypeintPropertiesDefaulted on create, Filter, Group, Nillable, SortDescriptionRead-only. The total number of times a prospect’s email client loaded the images in the HTML version of the email. We also record an open if the prospect clicks a link within the HTML or text email without downloading images. A click indicates that they viewed the message. Some email clients (Outlook, Apple Mail, Thunderbird) don’t display images by default. Pardot counts an open each time the images load.This field is available in API version 46.0 and later. To access this field, your org must use Sales Engagement and users need the Sales Engagement User or Sales Engagement Cadence Creator permission set. This field value includes emails sent via the ListEmail object or Sales Engagement cadences. |
| TotalSent | TypeintPropertiesFilter, Group, Nillable, SortDescriptionRead-only. The total number of emails sent, including bounced, opted-out, and invalid To: addresses.This field is available in API version 46.0 and later. To access this field, your org must use Sales Engagement and users need the Sales Engagement User or Sales Engagement Cadence Creator permission set. This field value includes emails sent via the ListEmail object or Sales Engagement cadences. |
| TotalSoftBounced | TypeintPropertiesDefaulted on create, Filter, Group, Nillable, SortDescriptionRead-only. The total number of times a recipient’s mail server acknowledged the email, but returned it to the sender. Sometimes it is because the recipient's mailbox is full or the mail server is temporarily unavailable. A soft bounce message can sometimes be delivered at another time. After 5 soft bounces, Pardot opts the prospect out of emails.This field is available in API version 46.0 and later. To access this field, your org must use Sales Engagement and users need the Sales Engagement User or Sales Engagement Cadence Creator permission set. This field value includes emails sent via the ListEmail object or Sales Engagement cadences. |
| UIType | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionIndicates the user interface where this template is usable.Possible values are:AlohaSFXSFX_Sample—SFXSample |

## Usage

To retrieve this object, issue a describe call on an object, which returns a query result for each activity since the object was created. You can't query these records.

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[EmailTemplateChangeEvent](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_change_event.htm "A ChangeEvent object is available for each object that supports Change Data Capture. You can subscribe to a stream of change events using Change Data Capture to receive data tied to record changes in Salesforce. Changes include record creation, updates to an existing record, deletion of a record, and undeletion of a record. A change event isn’t a Salesforce object—it doesn’t support CRUD operations or queries. It’s included in the object reference so you can discover which Salesforce objects support change events.") (API version 48.0)

Change events are available for the object.

#### See Also

-   [Attachment](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_attachment.htm#sforce_api_objects_attachment "Represents a file that a User has uploaded and attached to a parent object.")

-   [EmailStatus](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_emailstatus.htm "Represents the status of email sent.")

-   [DocumentAttachmentMap](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_documentattachmentmap.htm#sforce_api_objects_documentattachmentmap "Maps the relationship between an EmailTemplate and its attachment, which is stored as a Document.")

## Related Topics

- EmailTemplateChangeEvent (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_change_event.htm)
- Attachment (atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_attachment.htm)
- EmailStatus (atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_emailstatus.htm)
- DocumentAttachmentMap (atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_documentattachmentmap.htm)
