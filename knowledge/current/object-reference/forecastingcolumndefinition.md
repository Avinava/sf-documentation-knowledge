---
title: "ForecastingColumnDefinition"
domain: object-reference
topic: forecastingcolumndefinition
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:35:10.586Z
estimatedTokens: 1228
keywords: [ForecastingColumnDefinition, custom, calculated, column, data, forecast, API, version, 56.0, later, Calls, Usage]
---

# ForecastingColumnDefinition

> Represents a custom calculated column or a custom reference data
         column in a forecast type. This object is available in API version 56.0 and
      later.

# ForecastingColumnDefinition

Represents a custom calculated column or a custom reference data column in a forecast type. This object is available in API version 56.0 and later.

For a custom calculated column, a Formula field value is required. For a custom reference data column, a ReferenceField field value is required.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=object_reference)

#### Important

Where possible, we changed noninclusive terms to align with our company value of Equality. We maintained certain terms to avoid any effect on customer implementations.

## Supported Calls

create(), delete(), describeSObjects(), query(), retrieve(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| DeveloperName | TypestringPropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe developer (API) name of the custom calculated column or custom reference data column. |
| ForecastingTypeId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe ID of the forecast type. This field is a relationship field.Relationship NameForecastingTypeRelationship TypeLookupRefers ToForecastingType |
| Formula | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionRequired for custom calculated columns. The formula for the custom calculated column. Use API column names in your formula (such as ForecastAmount0), not column header names (such as Closed or Closed Only). For details on API column names, operators, and functions to use in formulas, see ForecastingColumnDefinition Formula Field Details.ExampleThe following formula calculates the gap to quota: ForecastingQuotaAmount - ForecastAmount0 |
| Language | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe language of the custom calculated column or custom reference data column. |
| MasterLabel | TypestringPropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe label for this object, which displays in Setup and in the column header on the forecasts page. The label is in the default language locale for the organization. If there’s no default language locale, the label is in en_US. |
| ReferenceField | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionRequired for custom reference data columns. The number or currency custom field from the ForecastingCustomData object. For example, ForecastingCustomData.Realized_Revenue__c. Data from this field appears in a column in the forecasts summary. This field is available in API version 58.0 and later. |
| ResultField | TypestringPropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe field name to represent the custom calculated column or custom reference data column result. Possible values are:Custom Calculated Column ResultCalculatedAmount0 or CalculatedQuantity0CalculatedAmount1 or CalculatedQuantity1CalculatedAmount2 or CalculatedQuantity2CalculatedAmount3 or CalculatedQuantity3CalculatedAmount4 or CalculatedQuantity4If the formula’s result is null or invalid, “-” is the value. For example, if the formula divided by 0. If you want to show “-” for 0 or negative values in your forecast, use the IF function in your formula to detect 0 or negative numbers.Custom Reference Data Column Result Use the appropriate field based on whether your column output is of Currency or Number type.ExtensionCurrency0 or ExtensionNumber0ExtensionCurrency1 or ExtensionNumber1ExtensionCurrency2 or ExtensionNumber2ExtensionCurrency3 or ExtensionNumber3ExtensionCurrency4 or ExtensionNumber4 |

## Usage

Each forecast type can include any combination of custom calculated columns and reference data columns, as long as they don’t exceed five in number. For example, a forecast type can have two custom calculated columns and three custom reference data columns.

Custom calculated columns can’t be adjusted and aren’t included in rollups. In the UI, custom calculated columns can’t indicate changes in the last 7 days.

If you have at least one custom calculated column in an active or inactive forecast type, you can’t do the following until you’ve removed the column.

-   Switch from single category to cumulative rollups in Forecast Settings
-   Enable the Most Likely category
-   Disable Show Quotas (only if your custom calculated column’s formula refers to a quota value)

-   **[ForecastingColumnDefinition Formula Field Details](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_forecastingcolumndefinition_formula_details.htm)**
    Use these API names, operators, and functions to construct formulas for the Formula field in the ForecastingColumnDefinition object. The API names apply to both singular and cumulative category rollups. For simplification, we included only the single category rollup column header name next to each API name.

## Related Topics

- ForecastingColumnDefinition Formula Field Details (atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_forecastingcolumndefinition_formula_details.htm)
