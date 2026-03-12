---
title: "RetailVisitKpi"
domain: retail-api
topic: retailvisitkpi
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:40.740Z
estimatedTokens: 1650
keywords: [RetailVisitKpi, Capture, actual, visit, against, defined, assessment, indicator, definition, target, API, version, 47.0, later, Calls]
---

# RetailVisitKpi

> Capture the actual information during a visit against the defined assessment
      indicator definition and target values. This object is available in API version 47.0 and
    later.

# RetailVisitKpi

Capture the actual information during a visit against the defined assessment indicator definition and target values. This object is available in API version 47.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| ActualBooleanValue | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe actual one of two possible values for an assessment indicator definition that the sales rep can capture during the store visit audit.Possible values are:FalseTrue |
| ActualDateTimeValue | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe actual date and time for an assessment indicator definition that the sales rep can capture during the store visit audit. |
| ActualDecimalValue | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe actual fractional value for an assessment indicator definition that the sales rep can capture during the store visit audit. |
| ActualIntegerValue | TypeintPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe actual whole number value for an assessment indicator definition that the sales rep can capture during the store visit audit. |
| ActualStringValue | TypetextareaPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe actual sequence of characters for an assessment indicator definition that the sales rep can capture during the store visit audit. |
| AssessmentIndDefinitionId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe assessment indicator definition ID that indicates the kind of parameter that is audited. Values can include: Inventory, Facings, Competitor Facings, Share of Shelf. |
| AssessmentTaskId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionID of the assessment task against which the actual data is captured. |
| CustomContextId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionID of the custom object if the assessment indicator definition is associated for a custom task. |
| DisplayOrder | TypeintPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionSequence in which the retail visit KPI must be displayed. This field is available in API version 51.0 and later. |
| InStoreLocationId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionID of the in-store location that is associated with the assessment indicator definition. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe most recent date on which a user referenced this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe most recent date on which a user viewed this record. |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionUnique identifier for the visit KPI. |
| PlanogramId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionID of the planogram. |
| PrimaryDisplayOrder | TypeintPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionSequence in which products, product categories, promotions, or other contexts are displayed for an assessment task. This field is available in API version 53.0 and later. |
| ProductCategoryId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionID of the product category for which audit is done. |
| ProductId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionID of the product for which the assessment indicator definition is tracked. |
| PromotionId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionID of the promotion if the assessment task is a promotion check. |
| RecordTypeId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionID of the record type. |
| TargetBooleanValue | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe expected value among the two possible ones for an assessment indicator definition against which the actual value is captured.Possible values are:FalseTrue |
| TargetDateTimeValue | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe expected date and time for an assessment indicator definition against which the actual value is captured. |
| TargetDecimalValue | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe expected fractional for an assessment indicator definition against which the actual value is captured. |
| TargetIntegerValue | TypeintPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe expected whole number value for an assessment indicator definition against which the actual value is captured. |
| TargetStringValue | TypetextareaPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe expected sequence of characters for an assessment indicator definition against which the actual value is captured. |
| Type | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionType of the assessment indicator definition.Possible values are:FacingInventoryOutOfStockPriceRevenueShareOfShelf |
| UnitOfMeasure | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe unit of measure for the combination of assessment indicator definition type and target value.Possible values are:KilogramLitrePackUnit |
| VisitId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionID of the associated visit. |

## Associated Objects

This object has the following associated objects. Unless noted, they available in the same API version as this object.

[RetailVisitKpiFeed](atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.")

Feed is available for the object.

[RetailVisitKpiHistory](atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for the object. This object is available in API version 51.0 and later.

## Related Topics

- RetailVisitKpiFeed (atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_feed.htm)
- RetailVisitKpiHistory (atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_history.htm)
