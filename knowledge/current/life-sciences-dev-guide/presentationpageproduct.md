---
title: "PresentationPageProduct"
domain: life-sciences-dev-guide
topic: presentationpageproduct
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:46.725Z
estimatedTokens: 876
keywords: [PresentationPageProduct, link, presentation, product, may, include, connection, message, guidance, API, version, 65.0, later, Calls, Associated]
---

# PresentationPageProduct

> Represents the link between a presentation page and a product, and may also
         include a connection to related product message (product guidance). This object is
      available in API version 65.0 and later.

# PresentationPageProduct

Represents the link between a presentation page and a product, and may also include a connection to related product message (product guidance). This object is available in API version 65.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| DisplayOrder | TypeintPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionIndicates the order of the related product message (product guidance) within the presentation page. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last accessed this record indirectly, for example, through a list view or related record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last viewed this record or list view.If this value is null, and LastReferenceDate is not null, the user accessed this record or list view indirectly. |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionThe name of the presentation page product. |
| PresentationPageId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionRequired. Indicates the reference to the presentation page.This field is a relationship field.Relationship NamePresentationPageRelationship TypeMaster-detailRefers ToPresentationPage (the master object) |
| ProductGuidanceId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionA reference to the Product Guidance object, linking a specific product message to the presentation page.This field is a relationship field.Relationship NameProductGuidanceRefers ToProductGuidance |
| ProductId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionRequired. A reference to both the Product2 and LSMarketableProduct objects, associating a product with the presentation page.This field is a polymorphic relationship field.Relationship NameProductRefers ToLifeSciMarketableProduct, Product2 |
| SourceSystemIdentifier | TypestringPropertiesCreate, Filter, Group, idLookup, Nillable, Sort, UpdateDescriptionThe ID of the record in the external source system for data integrations. |
| SourceSystemName | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe name of the external source system from which the record was imported. |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[PresentationPageProductFeed](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.")

Feed tracking is available for the object.

[PresentationPageProductHistory](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

## Related Topics

- PresentationPageProductFeed (atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_associated_objects_feed.htm)
- PresentationPageProductHistory (atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_associated_objects_history.htm)
