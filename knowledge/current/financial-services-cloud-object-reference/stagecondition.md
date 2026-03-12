---
title: "StageCondition"
domain: financial-services-cloud-object-reference
topic: stagecondition
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:31.797Z
estimatedTokens: 470
keywords: [StageCondition, collection, rules, transition, criteria, stage, change, including, state, logic, API, version, 62.0, later, SOAP]
---

# StageCondition

> Represents a collection of fields to set up the rules in transition criteria
         and stage change, including the object state, logic, and values. This object is available
         in API version 62.0 and later.

# StageCondition

Represents a collection of fields to set up the rules in transition criteria and stage change, including the object state, logic, and values. This object is available in API version 62.0 and later.

## Supported SOAP API Calls

create(), delete(), describeSObjects(), query(), retrieve(), update(), upsert()

## Supported REST API Methods

DELETE, GET, HEAD, PATCH, POST, Query

## Special Access Rules

To access this object in your org, enable the Stage Management setting.

## Fields

| Field | Details |
| --- | --- |
| ManageableState | TypepicklistPropertiesFilter, Group, Nillable, Restricted picklist, SortDescriptionTypeManageableState enumerated listPropertiesFilter, Group, Nillable, Restricted picklist, SortDescriptionIndicates the manageable state of the specified component that is contained in a package:betadeleteddeprecateddeprecatedEditableinstalledinstalledEditablereleasedunmanaged |
| Operator | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, Sort, UpdateDescriptionOperator for stage condition filter (enumeration of type string).Valid values are:ContainsDoesNotContainEqualsGreaterOrEqualGreaterThanLessOrEqualLessThanNotEqualToStartsWith |
| SequenceNumber | TypeintPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe order of the object state transition condition in a sequence. |
| SourceField | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe object field to define filter conditions. |
| StageCriteriaId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe stage criteria associated with the stage definition.This field is a relationship field.Relationship NameStageCriteriaRelationship TypeMaster-detailRefers ToStageCriteria (the master object) |
| Value | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionValue for the field criteria. |
