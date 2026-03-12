---
title: "ProductTerrDtlAvailability"
domain: life-sciences-dev-guide
topic: productterrdtlavailability
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:46.803Z
estimatedTokens: 975
keywords: [ProductTerrDtlAvailability, products, aligned, territories, extension, stored, Product, Territory, Availability, internal, purposes, API, version, 65.0, later]
---

# ProductTerrDtlAvailability

> Represents the details of the products aligned to territories. This object is
         an extension of the information stored in the Product Territory Availability object and is
         used for internal purposes. This object is available in API version 65.0 and
      later.

# ProductTerrDtlAvailability

Represents the details of the products aligned to territories. This object is an extension of the information stored in the Product Territory Availability object and is used for internal purposes. This object is available in API version 65.0 and later.

## Supported Calls

describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| IsActive | TypebooleanPropertiesDefaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the product territory detailed availability is active (true) or not (false).The default value is false. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last accessed this record indirectly, for example, through a list view or related record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last viewed this record or list view. If this value is null, and LastReferenceDateis not null, the user accessed this record or list view indirectly. |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionThe name of the product territory detailed availability. |
| OwnerId | TypereferencePropertiesFilter, Group, Sort, UpdateDescriptionID of the owner of this object.This field is a polymorphic relationship field.Relationship NameOwnerRefers ToGroup, User |
| ProdtTerritoryAvailabilityId | TypereferencePropertiesFilter, Group, SortDescriptionThe product territory availability associated with the product territory detailed availability.This field is a relationship field.Relationship NameProdtTerritoryAvailabilityRefers ToProductTerritoryAvailability |
| ProductId | TypereferencePropertiesFilter, Group, SortDescriptionThe product for which the territory availability is defined .This field is a polymorphic relationship field.Relationship NameProductRefers ToLifeSciMarketableProduct, Product2 |
| ProductType | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe type of the product associated with the product territory detailed availability. |
| Purpose | TypepicklistPropertiesDefaulted on create, Filter, Group, Nillable, Restricted picklist, SortDescriptionSpecifies the purpose of the product territory detailed availability.Possible values are:VisitThe default value is Visit. |
| RelatedTerritoryId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionStores the ID of the territory associated with the product territory detailed availability.This field is a relationship field.Relationship NameRelatedTerritoryRefers ToTerritory2 |
| SortOrder | TypeintPropertiesFilter, Group, Nillable, Sort, UpdateDescriptionThe order in which product territories are displayed. |
| TerritoryId | TypereferencePropertiesFilter, Group, SortDescriptionThe territory for which the product availability is defined .This field is a relationship field.Relationship NameTerritoryRefers ToTerritory2 |
| UsageType | TypepicklistPropertiesDefaulted on create, Filter, Group, Nillable, Restricted picklist, SortDescriptionSpecifies the usage type of the product territory detailed availability.Possible values are:LifeSciencesThe default value is LifeSciences. |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[ProductTerrDtlAvailabilityShare](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_associated_objects_share.htm "StandardObjectNameShare is the model for all share objects associated with standard objects. These objects represent a sharing entry on the standard object.")

Sharing is available for the object.

## Related Topics

- ProductTerrDtlAvailabilityShare (atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_associated_objects_share.htm)
