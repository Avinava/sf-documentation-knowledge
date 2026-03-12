---
title: "AccountPlanObjMeasCalcCond"
domain: tooling-api
topic: accountplanobjmeascalccond
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:44.458Z
estimatedTokens: 403
keywords: [AccountPlanObjMeasCalcCond, Represents, field, combination, filtering, records, include, calculation, sales, account, plan, objective, measure’s, current, value., API, version, 63.0, later., Supported]
---

# AccountPlanObjMeasCalcCond

> Represents a field and value combination for filtering records to include in the calculation of a sales account plan objective measure’s current value. This object is available in API version 63.0 and later.

# AccountPlanObjMeasCalcCond

Represents a field and value combination for filtering records to include in the calculation of a sales account plan objective measure’s current value. This object is available in API version 63.0 and later.

## Supported SOAP API Calls

create(), delete(), describeSObjects(), query(), retrieve(), update(), upsert()

## Supported REST API Methods

DELETE, GET, HEAD, PATCH, POST, Query

## Special Access Rules

## Fields

| Field | Details |
| --- | --- |
| AccountPlanObjMeasCalcDefId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe account plan objective measure calculation definition where this criteria is used.This field is a relationship field.Relationship NameAccountPlanObjMeasCalcDefRelationship TypeMaster-detailRefers ToAccountPlanObjMeasCalcDef (the master object) |
| FieldName | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, Sort, UpdateDescriptionA field on the calculation definition’s TargetObject that you want to filter by. Fields on the Campaign, Case, Contact, or Opportunity objects are supported. |
| Operation | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, Sort, UpdateDescriptionThe logical operator for matching records with the specified field value.Possible values are:Contains—containsEquals—equalsGreaterOrEqual—greater or equalGreaterThan—greater thanLessOrEqual—less or equalLessThan—less thanNotContain—does not containNotEqual—not equal toStartsWith |
| Value | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe value to match for the specified field. |
