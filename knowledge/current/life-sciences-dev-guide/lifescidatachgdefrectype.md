---
title: "LifeSciDataChgDefRecType"
domain: life-sciences-dev-guide
topic: lifescidatachgdefrectype
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:46.296Z
estimatedTokens: 374
keywords: [LifeSciDataChgDefRecType, management, data, validation, record, Calls]
---

# LifeSciDataChgDefRecType

> Represents the management of data validation for the object by record
         type.

# LifeSciDataChgDefRecType

Represents the management of data validation for the object by record type.

## Supported Calls

create(), delete(), describeSObjects(), query(), retrieve(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| ExternalValidationSysName | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionDefines the system used for external validation, for example, OneKey and LEXI. |
| IsNewRecApprovalRequired | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionDetermines whether the object record must be created only after the data change request is approved (true) or not (false).The default value is false. |
| LifeSciDataChgRqstDefId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe data change definition associated with the object.This field is a relationship field.Relationship NameLifeSciDataChgRqstDefRelationship TypeMaster-detailRefers ToLifeSciDataChangeDef (the master object) |
| RecordTypeId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe record type identifier for the validation system for the data change definition.This field is a relationship field.Relationship NameRecordTypeRefers ToRecordType |
| ValidationType | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, Sort, UpdateDescriptionSpecifies whether the validation type is internal or external for the data change request.Possible values are:ExternalInternal |
