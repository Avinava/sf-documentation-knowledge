---
title: "ProviderVisitProdDiscussion"
domain: life-sciences-dev-guide
topic: providervisitproddiscussion
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:47.124Z
estimatedTokens: 990
keywords: [ProviderVisitProdDiscussion, any, additional, notes, regarding, products, discussed, visit, health, care, provider, API, version, 65.0, later]
---

# ProviderVisitProdDiscussion

> Represents any additional notes or information regarding the products
         discussed during a visit to a health care provider. This object is available in API version 65.0 and
         later.

# ProviderVisitProdDiscussion

Represents any additional notes or information regarding the products discussed during a visit to a health care provider. This object is available in API version 65.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| AdditionalInformation | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionInformation captured on signature capture or provider visit submission for auditability. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last accessed this record indirectly, for example, through a list view or related record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last viewed this record or list view.If this value is null, and LastReferenceDate is not null, the user accessed this record or list view indirectly. |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionName of the provider visit product discussion. |
| Note | TypetextareaPropertiesCreate, UpdateDescriptionRequired. Notes associated with the product discussion. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionID of the owner or creator of this object.This field is a polymorphic relationship field.Relationship NameOwnerRefers ToGroup, User |
| ProviderVisitId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionThe provider visit associated with the product discussion.This field is a relationship field.Relationship NameProviderVisitRefers ToProviderVisit |
| ProviderVisitProductDtlId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionRequired. The detailing product associated with the product discussion.This field is a relationship field.Relationship NameProviderVisitProductDtlRelationship TypeMaster-detailRefers ToProviderVisitProdDetailing (the master object) |
| SourceSystemIdentifier | TypestringPropertiesCreate, Filter, Group, idLookup, Nillable, Sort, UpdateDescriptionAn external ID from the source system for data integrations. |
| SourceSystemName | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe name of the source system for data integrations. |
| VisitId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionRequired. Associated visit record.This field is a relationship field.Relationship NameVisitRefers ToVisit |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[ProviderVisitProdDiscussionFeed](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.")

Feed tracking is available for the object.

[ProviderVisitProdDiscussionHistory](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

[ProviderVisitProdDiscussionShare](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_associated_objects_share.htm "StandardObjectNameShare is the model for all share objects associated with standard objects. These objects represent a sharing entry on the standard object.")

Sharing is available for the object.

## Related Topics

- ProviderVisitProdDiscussionFeed (atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_associated_objects_feed.htm)
- ProviderVisitProdDiscussionHistory (atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_associated_objects_history.htm)
- ProviderVisitProdDiscussionShare (atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_associated_objects_share.htm)
