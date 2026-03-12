---
title: "PresentationPage"
domain: life-sciences-dev-guide
topic: presentationpage
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:46.717Z
estimatedTokens: 1288
keywords: [PresentationPage, collection, pages, presentation, contain, multiple, slides, reused, across, different, presentations, API, version, 65.0, later]
---

# PresentationPage

> Represents a collection of pages that can be used within a presentation. Each
         page can contain multiple slides. Pages can be reused across different presentations.
      This object is available in API version 65.0 and later.

# PresentationPage

Represents a collection of pages that can be used within a presentation. Each page can contain multiple slides. Pages can be reused across different presentations. This object is available in API version 65.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| ActivationDate | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe date and time when the presentation page is activated and available for use. |
| ContentDocumentId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe content document that is the PDF or ZIP file containing the content for the presentation page.This field is a relationship field.Relationship NameContentDocumentRefers ToContentDocument |
| DeactivationDate | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe date and time when the presentation page is deactivated and no longer available for use. |
| EmailTemplateId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionA lookup field that links the presentation page to a specific email template. This email template can be used for sending studies, statistics, or other relevant content associated with the current presentation page via email.This field is a relationship field.Relationship NameEmailTemplateRefers ToLifeSciEmailTemplate |
| IsAdditionalContent | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the page is an asset. Assets are PDF files which can be added to ZIP presentations and referenced by link from any presentation slide.The default value is false. |
| IsMandatory | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether a specific page in the presentation must be shown.The default value is false. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last accessed this record indirectly, for example, through a list view or related record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last viewed this record or list view.If this value is null, and LastReferenceDate is not null, the user accessed this record or list view indirectly. |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionThe name of the presentation page. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionThe ID of the user who owns this presentation page.This field is a polymorphic relationship field.Relationship NameOwnerRefers ToGroup, User |
| PageNumber | TypeintPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe page number of this page in the presentation PDF file. There's no page number for presentations with ZIP file type. |
| SourceSystemIdentifier | TypestringPropertiesCreate, Filter, Group, idLookup, Nillable, Sort, UpdateDescriptionThe ID of the record in the external source system for data integrations. |
| SourceSystemName | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe name of the external source system from which the record was imported. |
| Status | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, Sort, UpdateDescriptionRequired. Indicates whether the page is active, meaning it can be included and used in a presentation.Possible values are:ActiveInactive |
| Type | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, Sort, UpdateDescriptionRequired. Specifies whether the content is in PDF or ZIP format.Possible values are:PDFZIP |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[PresentationPageFeed](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.")

Feed tracking is available for the object.

[PresentationPageHistory](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

[PresentationPageShare](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_associated_objects_share.htm "StandardObjectNameShare is the model for all share objects associated with standard objects. These objects represent a sharing entry on the standard object.")

Sharing is available for the object.

## Related Topics

- PresentationPageFeed (atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_associated_objects_feed.htm)
- PresentationPageHistory (atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_associated_objects_history.htm)
- PresentationPageShare (atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_associated_objects_share.htm)
