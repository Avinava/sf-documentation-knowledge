---
title: "LifeSciDataChgPersonaDef"
domain: life-sciences-dev-guide
topic: lifescidatachgpersonadef
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:46.302Z
estimatedTokens: 381
keywords: [LifeSciDataChgPersonaDef, configuration, data, updates, persona, Calls]
---

# LifeSciDataChgPersonaDef

> Represents the configuration of data updates for the object by
      persona.

# LifeSciDataChgPersonaDef

Represents the configuration of data updates for the object by persona.

## Supported Calls

create(), delete(), describeSObjects(), query(), retrieve(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| ChangeUpdateType | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Restricted picklist, Sort, UpdateDescriptionSpecifies whether the requested changes are applied immediately at the field level, to all managed fields, or if the changes don’t apply until the request is approved.Possible values are:ApplyChangesByField—Apply Changes By FieldApplyChangesImmediately—Apply Changes ImmediatelyDoNotApplyChangesImmediately—Do Not Apply Changes ImmediatelyThe default value is DoNotApplyChangesImmediately. |
| IsActive | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionDetermines whether the configuration record for the data change request is active (true) or not (false).The default value is false. |
| LifeSciDataChgRqstDefId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe data change definition associated with the object.This field is a relationship field.Relationship NameLifeSciDataChgRqstDefRelationship TypeMaster-detailRefers ToLifeSciDataChangeDef (the master object) |
| ProfileId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe user profile associated with the data change definition.This field is a relationship field.Relationship NameProfileRefers ToProfile |
