---
title: "AutomatedActionParameter"
domain: object-reference
topic: automatedactionparameter
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:05.455Z
estimatedTokens: 437
keywords: [AutomatedActionParameter, references, evaluated, automated, action, API, version, 57.0, later, Calls]
---

# AutomatedActionParameter

> Represents the values or field references evaluated by the automated
         action. This object is available in API version 57.0 and later.

# AutomatedActionParameter

Represents the values or field references evaluated by the automated action. This object is available in API version 57.0 and later.

## Supported Calls

create(), delete(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| AutomatedActionId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionID of the automated action.This field is a relationship field.Relationship NameAutomatedActionRelationship TypeLookupRefers ToAutomatedAction |
| DataType | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe data type of the value or field reference value.Possible values are:BooleanDoubleIntNoneStringValueList |
| IsLocked | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionIndicates whether the automated action parameter record is locked or not.The default value is false. |
| MayEdit | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionIndicates whether the automated action parameter record can be edited or not.The default value is false. |
| ParameterName | TypestringPropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe name of the invocable action parameter the value maps to. |
| ReferenceField | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe reference to the field that’s resolved at runtime. For example, LeadID. If Value has a value, this field is null. |
| Value | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionThe value to be passed to the invocable action parameter at runtime. If ReferenceField has a value, this field is null. |
