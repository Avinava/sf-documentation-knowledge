---
title: "RetailStoreKpi"
domain: retail-api
topic: retailstorekpi
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:40.726Z
estimatedTokens: 1350
keywords: [RetailStoreKpi, Map, store, groups, assessment, indicator, definition, products, in-store, location, categories, define, targets, expected, compliance]
---

# RetailStoreKpi

> Map store groups to assessment indicator definition, products, and in-store
      location categories and define targets. Targets are the expected compliance values for each
      assessment indicator definition, which is a parameter based on which markers of compliance are
      decided for a task. This object is available in API version 47.0 and later.

# RetailStoreKpi

Map store groups to assessment indicator definition, products, and in-store location categories and define targets. Targets are the expected compliance values for each assessment indicator definition, which is a parameter based on which markers of compliance are decided for a task. This object is available in API version 47.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| AssessmentIndDefinitionId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionID of the assessment indicator definition to track, such as inventory or facings. |
| CustomContextId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionID of the custom object if the assessment indicator definition is associated for a custom task. |
| EndDate | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionFinal date of the association between a store group and the assessment indicator definitions. |
| InStoreLocationCategory | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Sort, UpdateDescriptionID of the in-store location category.Possible values are:AisleBackroomEndcap |
| KpiType | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionType of assessment indicator definition.Possible values are:FacingShareOfShelfOutOfStockPriceRevenueShareOfShelf |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe most recent date on which a user referenced this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe most recent date on which a user viewed this record. |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionUnique identifier for this association. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionID of the retail store assessment indicator definition record owner. |
| PlanogramId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionID of the planogram if the assessment task is planogram check. |
| ProductCategoryId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionID of the product category, if the promotion level is for a product category and the assessment task is a promotion check. |
| ProductId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionProduct for which the assessment indicator definition is tracked. |
| PromotionId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionID of the promotion if the assessment indicator definition is for a promotion check. |
| RetailStoreGroupId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionID of the retail store group for which the assessment indicator definition is defined. |
| StartDate | TypedatePropertiesCreate, Filter, Group, Sort, UpdateDescriptionStart date of the association between a store group and the assessment indicator definitions. |
| TargetBooleanValue | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe expected value among the two possible ones for the measuring parameter.Possible values are:FalseTrue |
| TargetDateTimeValue | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe expected date and time for the measuring parameter. |
| TargetDecimalValue | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe expected fractional value for the measuring parameter. |
| TargetIntegerValue | TypeintPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe target whole number value for the measuring parameter. |
| TargetStringValue | TypetextareaPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe expected sequence of characters for the measuring parameter. |
| UnitOfMeasure | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe unit used to measure the assessment indicator definition.Possible values are:%KilogramLitrePackUSDUnit |

## Associated Objects

This object has the following associated objects. Unless noted, they’re available in the same API version as this object.

[RetailStoreKpiFeed](atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.")

Feed are available for the object.

[RetailStoreKpiHistory](atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for the object.

[RetailStoreKpiShare](atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_share.htm "StandardObjectNameShare is the model for all share objects associated with standard objects. These objects represent a sharing entry on the standard object.")

Sharing is available for the object.

## Related Topics

- RetailStoreKpiFeed (atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_feed.htm)
- RetailStoreKpiHistory (atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_history.htm)
- RetailStoreKpiShare (atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_share.htm)
