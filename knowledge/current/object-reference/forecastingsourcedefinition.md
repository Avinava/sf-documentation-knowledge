---
title: "ForecastingSourceDefinition"
domain: object-reference
topic: forecastingsourcedefinition
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:35:10.717Z
estimatedTokens: 956
keywords: [ForecastingSourceDefinition, measure, date, hierarchy, forecast, uses, project, sales, API, version, 52.0, later, Calls, Usage]
---

# ForecastingSourceDefinition

> Represents the object, measure, date type, and hierarchy that a forecast uses
      to project sales. This object is available in API version 52.0 and later.

# ForecastingSourceDefinition

Represents the object, measure, date type, and hierarchy that a forecast uses to project sales. This object is available in API version 52.0 and later.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=object_reference)

#### Note

The information in this topic applies only to forecast types created in Summer ’21 and later.

## Supported Calls

create(), delete(), describeSObjects(), query(), retrieve(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| CategoryField | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, SortDescriptionName of the forecast category that is associated with the forecast type.Possible values are:Opportunity.ForecastCategoryName |
| DateField | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, SortDescriptionField that is used for the forecast type’s date type. For example, the CloseDate field on Opportunity is used for opportunity close date-based forecast types.Possible values are:Opportunity.CloseDateOpportunityLineItem.ServiceDateOpportunityLineItemSchedule.ScheduleDate |
| DeveloperName | TypestringPropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe developer name of the forecasting source definition.NoteOnly users with View DeveloperName OR View Setup and Configuration permission can view, group, sort, and filter this field. |
| FamilyField | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, SortDescriptionUse this field to group forecasts by product family. Possible values are:Product2.Family |
| Language | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionLanguage of the forecasting source definition. For example, English. |
| MasterLabel | TypestringPropertiesCreate, Filter, Group, Sort, UpdateDescriptionRequired. Controlling label for this forecasting source definition. |
| MeasureField | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, SortDescriptionField that is used for the forecast type’s measure. For example, the Amount field on Opportunity is associated with revenue-based forecast types.Possible values are*:Opportunity.AmountOpportunity.CustomOpportunity.TotalOpportunityQuantityOpportunityLineItem.CustomOpportunityLineItem.QuantityOpportunityLineItem.TotalPriceOpportunityLineItemSchedule.CustomOpportunityLineItemSchedule.QuantityOpportunityLineItemSchedule.RevenueOpportunitySplit.CustomOpportunitySplit.SplitAmount*Where Custom represents the name of the custom field that a forecast type’s measure is based on. Example: Use Megawatts__c to forecast energy consumption. |
| SourceObject | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, SortDescriptionObject associated with this forecasting source definition.Possible values are:OpportunityOpportunityLineItemOpportunityLineItemScheduleOpportunitySplitProduct2 |
| Territory2Field | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, SortDescriptionFor a territory-based forecast type, indicates the field that is used for territory information.Possible values are:Opportunity.Territory2IdFor user role-based forecast types, this value is null. |
| UserField | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, SortDescriptionSpecifies who owns the forecast.Possible values are:Opportunity.OwnerIdOpportunitySplit.SplitOwnerId |

## Usage

Use ForecastingSourceDefinition to define a forecast type’s structure. A forecasting source definition is joined via ForecastingTypeSource to ForecastingType.

In this example, a user role-based forecast type called Custom Amount Forecast is based on the Amount and Close Date fields on opportunities.

```

```

## Code Examples

```
ForecastingType type = new  sforce.SObject("ForecastingType");
type.DeveloperName = "Custom_Amount_Forecast";
type.MasterLabel = "Custom Amount Forecast";
type.IsAmount = true;
type.IsQuantity = false;
type.RoleType = "R";
type.DateType = "OpportunityCloseDate";
String typeId = insert(type);

ForecastingSourceDefinition sourceDefinition = new sforce.SObject("ForecastingSourceDefinition")
sourceDefinition.DeveloperName = "Custom Amount Source";
sourceDefinition.MasterLabel = "Custom_Amount_Source";
sourceDefinition.SourceObject = "Opportunity";
sourceDefinition.MeasureField = "Opportunity.Amount";
sourceDefinition.DateField = "Opportunity.CloseDate";
sourceDefinition.UserField = "Opportunity.OwnerId";
sourceDefinition.CategoryField = "Opportunity.ForecastCategoryName";
String sourceDefinitionId = insert(sourceDefinition);

ForecastingTypeSource typeSource = new sforce.SObject("ForecastingTypeSource");
typeSource.MasterLabel = "Custom Amount Type Source";
typeSource.DeveloperName = "Custom_Amount_Type_Source";
typeSource.ForecastingTypeId = typeId;
typeSource.ForecastingSourceDefinitionId = sourceDefinitionId;
typeSource.SourceGroup = 1;
insert(typeSource);
```
