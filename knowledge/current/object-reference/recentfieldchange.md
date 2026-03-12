---
title: "RecentFieldChange"
domain: object-reference
topic: recentfieldchange
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:16.000Z
estimatedTokens: 765
keywords: [RecentFieldChange, virtual, how, opportunity, changed, past, seven, days, previous, made, change, API, version, 52.0, later]
---

# RecentFieldChange

> Use this virtual object to see how an opportunity has changed in the past
         seven days. Learn the previous value of a field, who made the change, and when the change
         was made. This object is available in API version 52.0 and later.

# RecentFieldChange

Use this virtual object to see how an opportunity has changed in the past seven days. Learn the previous value of a field, who made the change, and when the change was made. This object is available in API version 52.0 and later.

## Supported Calls

describeSObjects(), query()

## Special Access Rules

To use RecentFieldChange, set up historical trend reporting for opportunities in your org. You must also have the Pipeline Inspection user permission and the Pipeline Inspection setting enabled.

## Fields

| Field | Details |
| --- | --- |
| ChangeDate | TypedateTimePropertiesDescriptionThe date and time that the specified field was changed. |
| CurrencyIsoCode | TypepicklistPropertiesDefaulted on create, Filter, Group, Restricted picklist, SortDescriptionThe ISO code for the currency value. Must be one of the valid alphabetic, three-letter currency ISO codes defined by the ISO 4217 standard, such as USD, GBP, or JPY.The default value is 'USD'. |
| FieldName | TypestringPropertiesFilter, GroupDescriptionThe name of the opportunity field that you want the previous value of. Possible values are:AmountCloseDateStageNameForecastCategoryNextStep |
| ParentId | TypereferencePropertiesFilter, GroupDescriptionThe ID of the opportunity that you want the change history for.This is a relationship field.Relationship NameParentRelationship TypeLookupRefers ToOpportunity |
| PreviousCurrencyValue | TypecurrencyPropertiesNillableDescriptionThe previous value of a currency field on an opportunity. |
| PreviousDateOnlyValue | TypedatePropertiesGroup, NillableDescriptionThe previous value of a date field on an opportunity. |
| PreviousTextValue | TypestringPropertiesGroup, NillableDescriptionThe previous value of a text field on an opportunity. |
| ValueChangedById | TypereferencePropertiesGroupDescriptionThe ID of the user who changed the specified field's value during the specified time period.This is a relationship field.Relationship NameValueChangedByRelationship TypeLookupRefers ToUser |

## Usage

One recentFieldChange record is returned for each field that was changed in the past seven days. The supported fields are Amount, Close Date, Forecast Category, Next Step, and Stage Name. Only the most recent previous value is returned.

## Example

To see the most recent previous amount for an opportunity, use the following query. Replace 006R0000XXXXXXXXXX with the ID of the opportunity.

```

```

If the sales rep didn't change the opportunity stage name in the past seven days, no values are returned. If the sales rep changed the opportunity amount several times in the past seven days, only the most recent previous value is returned.

## Example

To see the most recent previous amount, close date, forecast category, next step, and stage name for an opportunity, use the following query. Replace 006R0000XXXXXXXXXX with the ID of the opportunity.

```

```

If the opportunity amount, close date, forecast category, next step, and stage name didn’t change in the past seven days, no values are returned.

## Code Examples

```
select PreviousTextValue from RecentFieldChange where ParentId = '006R0000003JkHBIA0' and FieldName = 'StageName'
```

```
select PreviousTextValue, PreviousCurrencyValue, PreviousDateOnlyValue from RecentFieldChange where ParentId = '006R0000XXXXXXXXXX' and FieldName IN ('StageName', 'Amount', 'CloseDate')
```
