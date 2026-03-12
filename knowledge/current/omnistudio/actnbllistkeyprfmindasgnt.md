---
title: "ActnblListKeyPrfmIndAsgnt"
domain: omnistudio
topic: actnbllistkeyprfmindasgnt
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:53.298Z
estimatedTokens: 422
keywords: [ActnblListKeyPrfmIndAsgnt, Represents, key, performance, indicators, KPIs, shown, KPI, Bar., API, version, 60.0, later., Supported, Calls, Special, Access, Rules, Fields]
---

# ActnblListKeyPrfmIndAsgnt

> Represents the key performance indicators (KPIs) that are shown on
         KPI Bar. This object is available in API version 60.0 and later.

# ActnblListKeyPrfmIndAsgnt

Represents the key performance indicators (KPIs) that are shown on KPI Bar. This object is available in API version 60.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), undelete(), update(), upsert()

## Special Access Rules

Access to this object requires the Industries Sales Excellence add-on license.

## Fields

| Field | Details |
| --- | --- |
| ActionableListId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe ID of the actionable list for which the key performance indicators are defined.This field is a relationship field.Relationship NameActionableListRelationship TypeLookupRefers ToActionableList |
| ActionableListMemberStatusId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe status key performance indicator (KPI) that is shown on KPI Bar.This field is a relationship field.Relationship NameActionableListMemberStatusRelationship TypeLookupRefers ToActionableListMemberStatus |
| ActnblListKeyPrfmIndDefId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe key performance indicator (KPI) record that the list creator selects to show on KPI Bar.This field is a relationship field.Relationship NameActnblListKeyPrfmIndDefRelationship TypeLookupRefers ToActnblListKeyPrfmIndDef |
| DisplayOrder | TypeintPropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe display order of the key performance indicator (KPI) that is shown on KPI Bar. |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionFor internal use only |
