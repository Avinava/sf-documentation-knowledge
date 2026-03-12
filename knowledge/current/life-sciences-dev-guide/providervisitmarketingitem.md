---
title: "ProviderVisitMarketingItem"
domain: life-sciences-dev-guide
topic: providervisitmarketingitem
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:47.085Z
estimatedTokens: 993
keywords: [ProviderVisitMarketingItem, marketing, items, provided, health, care, provider, part, visit, API, version, 65.0, later, Calls, Associated]
---

# ProviderVisitMarketingItem

> Represents marketing items provided to the health care provider as part of a
         visit. This object is available in API version 65.0 and later.

# ProviderVisitMarketingItem

Represents marketing items provided to the health care provider as part of a visit. This object is available in API version 65.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| AdditionalInformation | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionInformation captured on signature capture or provider visit submission for auditability. |
| IsSignatureCaptured | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the signature has been captured. The default value is false. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last accessed this record indirectly, for example, through a list view or related record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionIf this value is null, and LastReferenceDate is not null, the user accessed this record or list view indirectly. |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionName of the provider visit marketing item. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionThe ID of the owner.This field is a polymorphic relationship field.Relationship NameOwnerRefers ToGroup, User |
| ProductId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionRequired. The marketing item disbursed to the provider.This field is a relationship field.Relationship NameProductRefers ToProduct2 |
| ProviderVisitId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionRequired. The associated provider visit record.This field is a relationship field.Relationship NameProviderVisitRelationship TypeMaster-detailRefers ToProviderVisit (the master object) |
| Quantity | TypedoublePropertiesCreate, Filter, Sort, UpdateDescriptionRequired. Quantity of marketing items disbursed to the provider. |
| SourceSystemIdentifier | TypestringPropertiesCreate, Filter, Group, idLookup, Nillable, Sort, UpdateDescriptionAn external ID from the source system for data integrations. |
| SourceSystemName | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe name of the source system for data integrations. |
| VisitId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionRequired. The associated visit record.This field is a relationship field.Relationship NameVisitRefers ToVisit |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[ProviderVisitMarketingItemFeed](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.")

Feed tracking is available for the object.

[ProviderVisitMarketingItemHistory](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

[ProviderVisitMarketingItemShare](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_associated_objects_share.htm "StandardObjectNameShare is the model for all share objects associated with standard objects. These objects represent a sharing entry on the standard object.")

Sharing is available for the object.

## Related Topics

- ProviderVisitMarketingItemFeed (atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_associated_objects_feed.htm)
- ProviderVisitMarketingItemHistory (atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_associated_objects_history.htm)
- ProviderVisitMarketingItemShare (atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_associated_objects_share.htm)
