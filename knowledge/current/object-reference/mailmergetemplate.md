---
title: "MailmergeTemplate"
domain: object-reference
topic: mailmergetemplate
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:12.659Z
estimatedTokens: 794
keywords: [MailmergeTemplate, mail, merge, template, Microsoft, Word, document, performing, merges, organization, Calls, Special, Access, Rules, Usage]
---

# MailmergeTemplate

> Represents a mail merge template (a Microsoft Word document) used for
   performing mail merges for your organization.

# MailmergeTemplate

Represents a mail merge template (a Microsoft Word document) used for performing mail merges for your organization.

## Supported Calls

create(), delete(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), undelete(), update(), upsert()

## Special Access Rules

-   All users can view this object, but you need the “Customize Application” permission to modify it.
-   Customer Portal users can’t access this object.

## Fields

| Field | Details |
| --- | --- |
| Body | Typebase64PropertiesCreateDescriptionRequired. Microsoft Word document to use as a mail merge template. Due to limitations with Microsoft Word mail merge templates, your client application can specify the Body field when creating these records, but not when updating them. Limit: 5 MB. |
| BodyLength | TypeintPropertiesFilter, Group, Nillable, SortDescriptionLength of the Microsoft Word document. |
| Category | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe type of document template. Possible values are:DocumentEnvelopeLabelThe default value is Document. |
| Description | TypestringPropertiesCreate, Filter,Group, Nillable, Sort, UpdateDescriptionRequired. Text description of this mail merge template. Limit: 255 characters. |
| Filename | TypestringPropertiesCreate, Filter, Group, SortDescriptionRequired. File name of the Microsoft Word document that was uploaded as a mail merge template. Limit: 255 characters in length. |
| IsDeleted | TypebooleanPropertiesDefaulted on create, FilterDescriptionIndicates whether the object has been moved to the Recycle Bin (true) or not (false). Label is Deleted. |
| LastUsedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionDate and time when this MailmergeTemplate was last used. |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionRequired. Name of this mail merge template. |
| SecurityOptionsAttachmentHasFlash | TypebooleanPropertiesCreate, Filter, UpdateDescriptionRequired. True if Flash Injection was detected in the attachment. |
| SecurityOptionsAttachmentHasXSSThreat | TypebooleanPropertiesCreate, Filter, UpdateDescriptionRequired. True if a cross site scripting threat was detected in the attachment. |
| SecurityOptionsAttachmentScannedforFlash | TypebooleanPropertiesCreate, Filter, UpdateDescriptionRequired. True if the attachment has been scanned for Flash Injection. |
| SecurityOptionsAttachmentScannedForXSS | TypebooleanPropertiesCreate, Filter, UpdateDescriptionRequired. True if the attachment has been scanned for a cross site scripting threat. |

## Usage

Use this object to manage mail merge templates for your organization.

#### See Also

-   [Overview of Salesforce Objects and Fields](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_concepts.htm "Salesforce objects and fields are analogous to database tables and the table columns. Objects and fields structure data. For example, the central object in the Salesforce data model represents accounts—companies and organizations involved with your business, such as customers, partners, and competitors.")

## Related Topics

- Overview of Salesforce Objects and Fields (atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_concepts.htm)
