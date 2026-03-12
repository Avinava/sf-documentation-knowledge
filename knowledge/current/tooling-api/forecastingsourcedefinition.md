---
title: "ForecastingSourceDefinition"
domain: tooling-api
topic: forecastingsourcedefinition
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:44.898Z
estimatedTokens: 838
keywords: [ForecastingSourceDefinition, measure, date, hierarchy, forecast, uses, project, sales, API, version, 52.0, later, SOAP, Calls, REST]
---

# ForecastingSourceDefinition

> Represents the object, measure, date type, and hierarchy that a forecast uses
         to project sales. This object is available in API version 52.0 and later.

# ForecastingSourceDefinition

Represents the object, measure, date type, and hierarchy that a forecast uses to project sales. This object is available in API version 52.0 and later.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=api_tooling)

#### Important

Where possible, we changed noninclusive terms to align with our company value of Equality. We maintained certain terms to avoid any effect on customer implementations.

## Supported SOAP API Calls

create(), delete(), describeSObjects(), query(), retrieve()

## Supported REST API Methods

DELETE, GET, HEAD, POST, Query

## Fields

| Field | Details |
| --- | --- |
| CategoryField | TypepicklistPropertiesFilter, Group, Nillable, Restricted picklist, SortDescriptionName of the forecast category that is associated with the forecast type.Possible values are:Opportunity.ForecastCategoryName |
| DateField | TypepicklistPropertiesFilter, Group, Nillable, Restricted picklist, SortDescriptionField that is used for the forecast type’s date type. For example, the CloseDate field on Opportunity is used for opportunity close date–based forecast types.Possible values are:Opportunity.CloseDateOpportunityLineItem.ServiceDate |
| DeveloperName | TypestringPropertiesFilter, Group, SortDescriptionRequired. The name of the forecasting source definition. |
| FamilyField | TypepicklistPropertiesFilter, Group, Nillable, Restricted picklist, SortDescriptionUse this field to group forecasts by product family.Possible values are:Product2.Family |
| FullName | TypestringPropertiesCreate, Group, NillableDescriptionThe full name of the forecasting source definition. |
| Language | TypepicklistPropertiesDefaulted on create, Filter, Group, Restricted picklist, SortDescriptionThe language of the forecasting source definition. |
| MasterLabel | TypestringPropertiesFilter, Group, SortDescriptionRequired. Controlling label for this forecasting source definition. |
| MeasureField | TypepicklistPropertiesFilter, Group, Nillable, Restricted picklist, SortDescriptionField that is used for the forecast type’s measure. For example, the Amount field on Opportunity is associated with revenue-based forecast types.Possible values are*:Opportunity.AmountOpportunity.CustomOpportunity.TotalOpportunityQuantityOpportunityLineItem.CustomOpportunityLineItem.QuantityOpportunityLineItem.TotalPrice*Where Custom represents the name of the custom field that a forecast type’s measure is based on. Example: Use the Megawatts__c custom field to forecast energy consumption. |
| Metadata | TypeForecastingSourceDefinitionPropertiesCreate, Nillable, UpdateDescriptionThe metadata of the forecasting source definition. |
| SourceObject | TypepicklistPropertiesFilter, Group, Restricted picklist, SortDescriptionRequired. Object associated with this forecasting source definition.Possible values are:OpportunityOpportunityLineItemProduct2 |
| Territory2Field | TypepicklistPropertiesFilter, Group, Nillable, Restricted picklist, SortDescriptionFor a territory-based forecast type, indicates the field that is used for territory information.For user role–based forecast types, this value is null. |
| UserField | TypepicklistPropertiesFilter, Group, Nillable, Restricted picklist, SortDescriptionSpecifies who owns the forecast.Possible values are:Opportunity.OwnerId |
