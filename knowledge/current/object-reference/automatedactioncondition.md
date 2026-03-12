---
title: "AutomatedActionCondition"
domain: object-reference
topic: automatedactioncondition
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:05.441Z
estimatedTokens: 464
keywords: [AutomatedActionCondition, logical, operator, evaluating, conditions, automated, action, API, version, 57.0, later, Calls]
---

# AutomatedActionCondition

> Represents the logical operator details for evaluating conditions in an
         automated action. This object is available in API version 57.0 and later.

# AutomatedActionCondition

Represents the logical operator details for evaluating conditions in an automated action. This object is available in API version 57.0 and later.

## Supported Calls

create(), delete(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| AutomatedActionId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionID of the automated action.This field is a relationship field.Relationship NameAutomatedActionRelationship TypeLookupRefers ToAutomatedAction |
| ConditionNumber | TypeintPropertiesCreate, Filter, Group, Sort, UpdateDescriptionReference number of the condition containing advanced filter logic. |
| IsLocked | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionIndicates whether the automated action condition record is locked or not.The default value is false. |
| MayEdit | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionIndicates whether the automated action condition record can be edited or not.The default value is false. |
| Operator | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, Sort, UpdateDescriptionThe logical operator for this condition.Possible values are:ContainsEndsWithEqualGreaterThanGreaterThanOrEqualIsChangedIsNullLessThanLessThanOrEqualNotEqualStartsWith |
| ReferenceField | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe field to use for this condition. |
| Type | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe type of condition.Possible values are:ExtraFilterConditionPrimaryFilterCondition |
| Value | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionThe value to compare to the ReferenceField. |
