---
title: "FormularyItem"
domain: life-sciences-dev-guide
topic: formularyitem
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:45.868Z
estimatedTokens: 1280
keywords: [FormularyItem, products, formulary, including, drug, tier, coverage, copay, API, version, 65.0, later, Calls, Associated, Objects]
---

# FormularyItem

> Represents details of products within the formulary, including the
         drug tier, coverage, and copay. This object is available in API version 65.0 and
      later.

# FormularyItem

Represents details of products within the formulary, including the drug tier, coverage, and copay. This object is available in API version 65.0 and later.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=life_sciences_dev_guide)

#### Important

Where possible, we changed noninclusive terms to align with our company value of Equality. We maintained certain terms to avoid any effect on customer implementations.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| CopayAmount | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe copayment amount for the product within the formulary. |
| Description | TypetextareaPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe additional details of the formulary product record. |
| EffectiveEndDate | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe effective end date of the product within the formulary. |
| EffectiveStartDate | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe effective start date of the product within the formulary. |
| FormularyId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe ID of the parent formulary record associated with the formulary item.This field is a relationship field.Relationship NameFormularyRelationship TypeMaster-detailRefers ToFormulary (the master object) |
| HasQuantityLimit | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the product within the formulary has a quantity limit (true) or not (false).The default value is false. |
| ItemId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe ID of the product associated with the formulary.This field is a polymorphic relationship field.Relationship NameItemRefers ToProduct2 |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last accessed this record indirectly, for example, through a list view or related record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last viewed this record or list view. |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionThe name of the formulary item. |
| PriorAuthorizationRequiredType | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionSpecifies the type of prior authorization required for the product within the formulary. |
| QuantityLimitDescription | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe detailed description of quantity limits the formulary imposes on a product. This may include a rolling dispense limit, maximum daily, or therapy days for a time period. |
| SourceSystemIdentifier | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe identifier of the record in the source system. |
| SourceSystemName | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe name of the system from which data is loaded into the object. |
| Status | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionSpecifies the status of the product within the formulary. |
| StepTherapyLimitType | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionSpecifies the type of step therapy required for the product within the formulary. |
| TierType | TypepicklistPropertiesCreate, Filter, Group, Sort, UpdateDescriptionSpecifies the tier of the product within the formulary. |
| TotalCoveredLifeCount | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe total number of patients covered for a product within the formulary. |
| TotalCoveredPharmacyLifeCount | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe total number of pharmacy lives covered for a product within the formulary. |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[FormularyItemFeed](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.")

Feed tracking is available for the object.

[FormularyItemHistory](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

## Related Topics

- FormularyItemFeed (atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_associated_objects_feed.htm)
- FormularyItemHistory (atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_associated_objects_history.htm)
