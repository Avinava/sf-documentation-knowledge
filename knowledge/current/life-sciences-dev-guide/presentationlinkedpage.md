---
title: "PresentationLinkedPage"
domain: life-sciences-dev-guide
topic: presentationlinkedpage
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:46.706Z
estimatedTokens: 847
keywords: [PresentationLinkedPage, connection, presentation, associated, pages, API, version, 65.0, later, Calls, Objects]
---

# PresentationLinkedPage

> Represents the connection between a presentation and its associated
         presentation pages. This object is available in API version 65.0 and
      later.

# PresentationLinkedPage

Represents the connection between a presentation and its associated presentation pages. This object is available in API version 65.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| DisplayOrder | TypeintPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionIndicates the order of the related presentation page within the overall presentation. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last accessed this record indirectly, for example, through a list view or related record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last viewed this record or list view.If this value is null, and LastReferenceDate is not null, the user accessed this record or list view indirectly. |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionName of the presentation linked page. |
| OriginalPrstLinkedPageId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe source presentation linked page from which this presentation linked page is copied.This field is a relationship field.Relationship NameOriginalPrstLinkedPageRefers ToPresentationLinkedPage |
| PresentationId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionRequired. Indicates the reference to the presentation.This field is a relationship field.Relationship NamePresentationRelationship TypeMaster-detailRefers ToPresentation (the master object) |
| PresentationPageId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionRequired. Indicates the reference to the presentation page, linking the specific page within the presentation.This field is a relationship field.Relationship NamePresentationPageRefers ToPresentationPage |
| SourceSystemIdentifier | TypestringPropertiesCreate, Filter, Group, idLookup, Nillable, Sort, UpdateDescriptionThe ID of the record in the external source system for data integrations. |
| SourceSystemName | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe name of the external source system from which the record was imported. |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[PresentationLinkedPageFeed](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.")

Feed tracking is available for the object.

[PresentationLinkedPageHistory](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

## Related Topics

- PresentationLinkedPageFeed (atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_associated_objects_feed.htm)
- PresentationLinkedPageHistory (atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_associated_objects_history.htm)
