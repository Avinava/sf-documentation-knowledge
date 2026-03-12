---
title: "ProviderVisitProdDetailing"
domain: life-sciences-dev-guide
topic: providervisitproddetailing
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:47.113Z
estimatedTokens: 1828
keywords: [ProviderVisitProdDetailing, products, discussed, visit, health, care, provider, including, key, product, brand, therapeutic, area, relevant, API]
---

# ProviderVisitProdDetailing

> Represents products discussed during a visit with a health care provider,
         including key details such as the product brand, therapeutic area, and other relevant
         information. This object is available in API version 65.0 and
         later.

# ProviderVisitProdDetailing

Represents products discussed during a visit with a health care provider, including key details such as the product brand, therapeutic area, and other relevant information. This object is available in API version 65.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| AdditionalInformation | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionInformation captured on signature capture or provider visit submission for auditability including product name. |
| BrandId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe brand discussed during the provider visit.This field is a polymorphic relationship field.Relationship NameBrandRefers ToLifeSciMarketableProduct |
| IsGeneratedFromPresentation | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the record is generated based on an intelligent content presentation.The default value is false. |
| IsOffLabel | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates that the product detailing is off-label.The default value is false. |
| IsSignatureCaptured | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the signature was captured.The default value is false. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last accessed this record indirectly, for example, through a list view or related record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last viewed this record or list view.If this value is null, and LastReferenceDate is not null, the user accessed this record or list view indirectly. |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionName of the provider visit product detailing. |
| NextPrvdVisitObjectives | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionNext visit objectives for the provider regarding the detailing product. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionID of the owner or creator of this object.This field is a polymorphic relationship field.Relationship NameOwnerRefers ToGroup, User |
| Priority | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionIndicates the order in which the product information is delivered to the provider. |
| ProductHierarchyName | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe generated name of the brand, indication and therapeutic area combination discussed during the provider visit. |
| ProductId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionRequired. The product discussed during the provider visit.This field is a polymorphic relationship field.Relationship NameProductRefers ToLifeSciMarketableProduct, Product2 |
| ProductIndicationId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionIndication discussed during the provider visit.This field is a polymorphic relationship field.Relationship NameProductIndicationRefers ToLifeSciMarketableProduct |
| ProductTherapeuticAreaId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionTherapeutic area discussed during the provider visit.This field is a polymorphic relationship field.Relationship NameProductTherapeuticAreaRefers ToLifeSciMarketableProduct |
| ProviderVisitAccountId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionThe account associated with the provider visit. Derived from the related visit (ProviderVisit object).This field is a relationship field.Relationship NameProviderVisitAccountRefers ToAccount |
| ProviderVisitChannel | TypepicklistPropertiesFilter, Group, Nillable, SortDescriptionSpecifies the channel type for the provider visit. Derived from the related visit (ProviderVisit object). |
| ProviderVisitId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionRequired. The associated provider visit record.This field is a relationship field.Relationship NameProviderVisitRelationship TypeMaster-detailRefers ToProviderVisit (the master object) |
| ProviderVisitStatus | TypepicklistPropertiesDefaulted on create, Filter, Group, Nillable, Restricted picklist, SortDescriptionThe status of the provider visit. Derived from the related visit (ProviderVisit object).Possible values are:AbandonedCompletedErrorInProgressNonePlannedUnscheduledThe default value is Planned. |
| ProviderVisitTerritoryId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionThe territory associated with the provider visit. Derived from the related visit (ProviderVisit object).This field is a relationship field.Relationship NameProviderVisitTerritoryRefers ToTerritory2 |
| PrvdVisitPlannedEndTime | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe planned end date and time for the provider visit. Derived from the related visit (ProviderVisit object). |
| PrvdVisitPlannedStartTime | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe planned start date and time for the provider visit. Derived from the related visit (ProviderVisit object). |
| SourceSystemIdentifier | TypestringPropertiesCreate, Filter, Group, idLookup, Nillable, Sort, UpdateDescriptionAn external ID from the source system for data integrations. |
| SourceSystemName | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe name of the source system for data integrations. |
| VisitId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionRequired. Associated visit record.This field is a relationship field.Relationship NameVisitRefers ToVisit |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[ProviderVisitProdDetailingFeed](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.")

Feed tracking is available for the object.

[ProviderVisitProdDetailingHistory](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

[ProviderVisitProdDetailingShare](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_associated_objects_share.htm "StandardObjectNameShare is the model for all share objects associated with standard objects. These objects represent a sharing entry on the standard object.")

Sharing is available for the object.

## Related Topics

- ProviderVisitProdDetailingFeed (atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_associated_objects_feed.htm)
- ProviderVisitProdDetailingHistory (atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_associated_objects_history.htm)
- ProviderVisitProdDetailingShare (atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_associated_objects_share.htm)
