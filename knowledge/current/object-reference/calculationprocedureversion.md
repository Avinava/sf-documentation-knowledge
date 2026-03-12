---
title: "CalculationProcedureVersion"
domain: object-reference
topic: calculationprocedureversion
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:05.927Z
estimatedTokens: 778
keywords: [CalculationProcedureVersion, version, Expression, label, API, 53.0, later, Calls, Special, Access, Rules]
---

# CalculationProcedureVersion

> Defines a version of an Expression Set. The label for this object is
         Expression Set Version. This object is available in API version 53.0 and later.

# CalculationProcedureVersion

Defines a version of an Expression Set. The label for this object is Expression Set Version. This object is available in API version 53.0 and later.

## Supported Calls

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=object_reference)

#### Note

This object has been deprecated as of API version 55.0. In API version 55.0 and later, use the new Expression Set objects in Business Rules Engine instead.

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), undelete(), update(), upsert()

## Special Access Rules

Access to Expression Sets requires OmniStudio licenses.

## Fields

| Field | Details |
| --- | --- |
| CalculationProcedureId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe ID of the Expression Set to which this version belongs.This is a relationship field.Relationship NameCalculationProcedureRelationship TypeLookupRefers ToCalculationProcedure |
| Constants | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionA serialized JSON object containing information about each constant. This information includes the name, data type, alias, and precision. |
| Description | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionA text description of the Expression Set Version. |
| EndDateTime | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe last date on which this Expression Set Version is active. |
| IsEnabled | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionSpecifies whether this Expression Set Version is active.The default value is false. |
| IsLoopingEnabled | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionSpecifies whether looping is enabled in this Expression Set Version.The default value is false. |
| LastSimulatedVariablesInput | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionThe input variables and results of the most recent simulation. |
| LoopEnd | TypetextareaPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe name of the end variable for looping. |
| LoopIncrement | TypetextareaPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe name of the interval variable for looping. |
| LoopStart | TypetextareaPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe name of the start variable for looping. |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionThe version name. |
| Rank | TypeintPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionWhen more than one enabled version matches an Expression Set call, and the StartDateTime to EndDateTime spans overlap, the version with the highest Rank is chosen. |
| StartDateTime | TypedateTimePropertiesCreate, Defaulted on create, Filter, Nillable, Sort, UpdateDescriptionThe first date on which this Expression Set Version is active. |
| VersionNumber | TypeintPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe version number. |
