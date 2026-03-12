---
title: "LifeSciMarketableProduct"
domain: life-sciences-dev-guide
topic: lifescimarketableproduct
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:46.431Z
estimatedTokens: 2683
keywords: [LifeSciMarketableProduct, products, Life, Science, company, manufactures, markets, sells, competes, including, brands, indications, therapeutic, areas, additional]
---

# LifeSciMarketableProduct

> Represents information about all products a Life Science company
         manufactures, markets, sells, or competes with, including brands, indications, and
         therapeutic areas. It also represents additional information on physical products that are
         sampled, ordered, or distributed as promotional items. This object is available in API
      version 65.0 and later.

# LifeSciMarketableProduct

Represents information about all products a Life Science company manufactures, markets, sells, or competes with, including brands, indications, and therapeutic areas. It also represents additional information on physical products that are sampled, ordered, or distributed as promotional items. This object is available in API version 65.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| BoxQuantityInner | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe number of product units within each pack inside a box. |
| BoxQuantityOuter | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe number of product units inside a box. |
| BusinessGroup | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionRepresents the business group within which a product is marketed. |
| DefaultDistributionQuantity | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionRepresents the default quantity of the product that is distributed. |
| Description | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe description of the product. |
| DistributionMethod | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionRepresents the way in which a product is distributed to a provider.Possible values are:DropDropAndShipShip |
| EndDate | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe date when the product expires. |
| IsActive | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the product is active (true) or not (false).The default value is false. |
| IsAvlForSamplingAllocation | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the product is available to be allocated for sampling to healthcare providers (true) or not (false).The default value is false. |
| IsCompetitorProduct | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the life sciences marketable product is a competitor product (true) or not (false).The default value is false. |
| IsControlledSubstance | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether a product is classified as a controlled substance (true) or not (false).The default value is false. |
| IsMsgReqdForProvVisit | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether at least one product guidance message is required when the product is being detailed to a healthcare provider during a visit (true) or not (false).The default value is false. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last accessed this record indirectly, for example, through a list view or related record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last viewed this record or list view. If this value is null, and LastReferenceDateis not null, the user accessed this record or list view indirectly. |
| LaunchDate | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe date the product is available on the market. For example, the date a product is available for sampling to healthcare providers. |
| Manufacturer | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe name of the company that manufactures the product. |
| MaxSampleOrderQuantity | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe maximum quantity of a sample that can be ordered. |
| MinSampleOrderQuantity | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe minimum quantity of a sample that can be ordered. |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionThe name of the life sciences marketable product. |
| NationalDrugCode | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe National Drug Code of the Product. This value is a unique identifier, typically defined by a government authority. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionID of the owner of this object.This field is a polymorphic relationship field.Relationship NameOwnerRefers ToGroup, User |
| ParentBrandProductId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe parent product of type Brand that the life science marketable product belongs to.This field is a relationship field.Relationship NameParentBrandProductRefers ToLifeSciMarketableProduct |
| ParentIndicationId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe indication associated with the parent brand product within the product hierarchy. This field links a Brand-Indication to its parent indication.This field is a relationship field.Relationship NameParentIndicationRefers ToLifeSciMarketableProduct |
| ParentProductId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe parent product that the life science marketable product belongs to.This field is a relationship field.Relationship NameParentProductRefers ToLifeSciMarketableProduct |
| ParentTherapeuticAreaId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe indication associated with the parent brand product within the product hierarchy. This field links products to a parent therapeutic area.This field is a relationship field.Relationship NameParentTherapeuticAreaRefers ToLifeSciMarketableProduct |
| ProductCode | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe product code, which is typically an abbreviated version of the product name. |
| ProductId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe product associated with the life sciences marketable product.This field is a relationship field.Relationship NameProductRefers ToProduct2 |
| ProductMetadata | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionThe additional information about related products that are not aligned to a specific territory. This field helps in identifying on-label and off-label discussions. |
| ProductSpecificationType | TypestringPropertiesFilter, Group, Nillable, SortDescriptionRepresents the type of specification that is being created. |
| ProductionCost | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe cost incurred by the manufacturer to produce the product. |
| SignatureRequirementLevel | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionSpecifies the product's signature requirement discussed with a healthcare provider during a visit.Possible values are:MandatoryNotRequiredOptional |
| SortOrder | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe default sort order for products. |
| SourceSystem | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe name of the system from which data is loaded into the object. |
| SourceSystemIdentifier | TypestringPropertiesCreate, Filter, Group, idLookup, Nillable, Sort, UpdateDescriptionThe identifier of the record in the source system. |
| StartDate | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe date from when the product is valid. |
| StateDstrLicenseCategory | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionSpecifies the State Distributor License (SDL) category of the product.Possible values are:CategoryIICategoryIII |
| TherapeuticArea | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionSpecifies the therapeutic area for which the product is intended, such as cardiology or dermatology. |
| TherapeuticClass | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionSpecifies the therapeutic class for which the product is intended, such as narcotics or pain relief. This value is determined by the therapeutic area. |
| Type | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, Sort, UpdateDescriptionSpecifies the type of the life sciences marketable product.Possible values are:BrandBrandIndicationIndicationMarketProductTherapeuticArea |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[LifeSciMarketableProductChangeEvent](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_associated_objects_change_event.htm "A ChangeEvent object is available for each object that supports Change Data Capture. You can subscribe to a stream of change events using Change Data Capture to receive data tied to record changes in Salesforce. Changes include record creation, updates to an existing record, deletion of a record, and undeletion of a record. A change event isn’t a Salesforce object—it doesn’t support CRUD operations or queries. It’s included in the object reference so you can discover which Salesforce objects support change events.")

Change events are available for the object.

[LifeSciMarketableProductFeed](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.")

Feed tracking is available for the object.

[LifeSciMarketableProductHistory](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

[LifeSciMarketableProductShare](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_associated_objects_share.htm "StandardObjectNameShare is the model for all share objects associated with standard objects. These objects represent a sharing entry on the standard object.")

Sharing is available for the object.

## Related Topics

- LifeSciMarketableProductChangeEvent (atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_associated_objects_change_event.htm)
- LifeSciMarketableProductFeed (atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_associated_objects_feed.htm)
- LifeSciMarketableProductHistory (atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_associated_objects_history.htm)
- LifeSciMarketableProductShare (atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_associated_objects_share.htm)
