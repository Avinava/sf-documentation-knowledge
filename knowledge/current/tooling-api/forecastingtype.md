---
title: "ForecastingType"
domain: tooling-api
topic: forecastingtype
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:46:38.051Z
keywords: [ForecastingType, Important, Supported, SOAP, API, Calls, REST, Methods, Fields]
---

# ForecastingType

# ForecastingType

Represents a forecast type. This object is available in API version 52.0 and later.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=api_tooling)

#### Important

Where possible, we changed noninclusive terms to align with our company value of Equality. We maintained certain terms to avoid any effect on customer implementations.

## Supported SOAP API Calls

create(), delete(), describeSObjects(), query(), retrieve(), update(), upsert()

## Supported REST API Methods

DELETE, GET, HEAD, PATCH, POST, Query

## Fields

| Field | Details |
| --- | --- |
| DateType | TypepicklistPropertiesFilter, Group, Restricted picklist, SortDescriptionRequired. The date type that forecast amounts are based on.Possible values are:OLIMeasureCloseDateOnly—3OpportunityCloseDate—0ProductDate—1ProductDateOnly—4ScheduleDate—2ScheduleDateOnly—5 |
| DeveloperName | TypestringPropertiesFilter, Group, SortDescriptionRequired. The name of the forecast type. |
| FullName | TypestringPropertiesCreate, Group, NillableDescriptionThe full name of the forecast type. |
| HasProductFamily | TypebooleanPropertiesDefaulted on create, GroupDescriptionRequired. Indicates whether the forecast type includes product families (true) or not (false). The default value is false. |
| Language | TypepicklistPropertiesDefaulted on create, Filter, Group, Nillable, Restricted picklist, SortDescriptionThe language of the forecast type. |
| MasterLabel | TypestringPropertiesFilter, Group, SortDescriptionRequired. Controlling label for this forecast type. This display value is the internal label that doesn’t get translated. |
| Metadata | TypeForecastingTypePropertiesCreate, Nillable, UpdateDescriptionThe metadata of the forecast type. |
| OpportunitySplitTypeId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionFor a forecast type based on a split, the ID of the opportunity split type.This field is a relationship field.Relationship NameOpportunitySplitTypeRelationship TypeLookupRefers ToOpportunitySplitType |
| OpptyLineItemSplitTypeId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionFor a forecast type based on an opportunity product split, the ID of the opportunity line item split type.This field is a relationship field. Available in API version 58.0 and later.Relationship NameOpptyLineItemSplitTypeRelationship TypeLookupRefers ToOpptyLineItemSplitType |
| RoleType | TypepicklistPropertiesFilter, Group, Restricted picklist, SortDescriptionRequired. Indicates whether the role type has a ForecastingType, and if so, which ForecastingType.Possible values are:R—User role-based forecast typeTY—Territory2-based forecast type |
| Territory2ModelId | TypestringPropertiesFilter, Group, SortDescriptionFor a territory-based forecast type, the ID of the Territory2 model. |