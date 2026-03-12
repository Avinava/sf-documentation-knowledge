---
title: "FieldChangeSnapshot"
domain: object-reference
topic: fieldchangesnapshot
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:10.134Z
estimatedTokens: 410
keywords: [FieldChangeSnapshot, virtual, opportunities, close, dates, changed, time, period, API, version, 52.0, later, Calls, Special, Access]
---

# FieldChangeSnapshot

> Use this virtual object to learn which opportunities' close dates changed
         during the specified time period. This object is available in API version 52.0 and
      later.

# FieldChangeSnapshot

Use this virtual object to learn which opportunities' close dates changed during the specified time period. This object is available in API version 52.0 and later.

## Supported Calls

describeSObjects(), query()

## Special Access Rules

To use FieldChangeSnapshot, set up historical trend reporting for opportunities in your org. You must also have the Pipeline Inspection user permission and the Pipeline Inspection setting enabled.

## Fields

| Field | Details |
| --- | --- |
| CurrentValueDateOnly | TypedatePropertiesFilter, Group, NillableDescriptionThe current value of a date field on the opportunity. |
| FieldName | TypestringPropertiesFilter, GroupDescriptionThe name of the field to get the change history for. Possible values are:CloseDate |
| ParentId | TypereferencePropertiesFilter, GroupDescriptionThe ID of the opportunity to get the change history for.This is a relationship field.Relationship NameParentRelationship TypeLookupRefers ToOpportunity |
| ValidFrom | TypedateTimePropertiesFilterDescriptionThe date and time that specifies the beginning of the time period. |
| ValidTo | TypedateTimePropertiesFilterDescriptionThe date and time that specifies the end of the time period. |

## Usage

Use FieldChangeSnapshot to learn about the first change made to the specified opportunity during the specified time period. Subsequent changes are not returned.

## Example

Suppose that last week you changed an opportunity's close date to June 1, 2021. Assuming the opportunity had the ID '006R0000XXXXXXXXXX', the following query would return the CurrentValueDateOnly of June 1, 2021:

```

```

## Code Examples

```
Select CurrentValueDateOnly from FieldChangeSnapshot where ParentID = '006R0000XXXXXXXXXX' and FieldName = 'CloseDate' and ValidTo = LAST_WEEK AND ValidFrom = LAST_WEEK and CurrentValueDateOnly < 2021-07-01
```
