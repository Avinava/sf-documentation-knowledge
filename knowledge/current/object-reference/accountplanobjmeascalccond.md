---
title: "AccountPlanObjMeasCalcCond"
domain: object-reference
topic: accountplanobjmeascalccond
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:03.664Z
estimatedTokens: 443
keywords: [AccountPlanObjMeasCalcCond, combination, filtering, records, include, calculation, sales, account, plan, objective, measure’s, current, API, version, 63.0]
---

# AccountPlanObjMeasCalcCond

> Represents a field and value combination for filtering records to include in
         the calculation of a sales account plan objective measure’s current value. This object
      is available in API version 63.0 and later.

# AccountPlanObjMeasCalcCond

Represents a field and value combination for filtering records to include in the calculation of a sales account plan objective measure’s current value. This object is available in API version 63.0 and later.

## Supported Calls

create(), delete(), describeSObjects(), query(), retrieve(), update(), upsert()

## Special Access Rules

This object is available if sales account plans are turned on.

## Fields

| Field | Details |
| --- | --- |
| AccountPlanObjMeasCalcDefId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe account plan objective measure calculation definition where this criteria is used.This field is a relationship field.Relationship NameAccountPlanObjMeasCalcDefRelationship TypeMaster-detailRefers ToAccountPlanObjMeasCalcDef |
| FieldName | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, Sort, UpdateDescriptionA field on the calculation definition’s TargetObject that you want to filter by. Fields on the Campaign, Case, Contact, or Opportunity objects are supported. |
| Operation | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, Sort, UpdateDescriptionThe logical operator for matching records with the specified field value.Possible values are:ContainsEqualsGreaterOrEqualGreaterThanLessOrEqualLessThanNotContainNotEqualStartsWith |
| Value | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe value to match for the specified field. |

## Usage

Let’s say that a calculation definition tracks the currency amount on Closed Won opportunities. The calculation definition’s TargetObject is Opportunity, and the condition further specifies these values.

-   FieldName is StageName.
-   Operation is Equals.
-   Value is ClosedWon.
