---
title: "LifeSciStageValue"
domain: life-sciences-dev-guide
topic: lifescistagevalue
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:46.543Z
estimatedTokens: 402
keywords: [LifeSciStageValue, individual, step, workflow, API, version, 65.0, later, Calls]
---

# LifeSciStageValue

> Represents an individual step within a workflow. This object is
      available in API version 65.0 and later.

# LifeSciStageValue

Represents an individual step within a workflow. This object is available in API version 65.0 and later.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=life_sciences_dev_guide)

#### Important

Where possible, we changed noninclusive terms to align with our company value of Equality. We maintained certain terms to avoid any effect on customer implementations.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| FieldValue | TypestringPropertiesCreate, Filter, Group, Sort, UpdateDescriptionRequired. A specific step in a workflow. This value corresponds to a field value in the related stage path's Field API Name field. |
| LifeSciStagePathId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionRequired. The stage path associated with the stage value.This field is a relationship field.Relationship NameLifeSciStagePathRelationship TypeMaster-detailRefers ToLifeSciStagePath (the master object) |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionRequired. The name of the stage value record. |
| SourceSystemIdentifier | TypestringPropertiesCreate, Filter, Group, idLookup, Nillable, Sort, UpdateDescriptionAn external ID from the source system for data integrations. |
| SourceSystemName | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe name of the source system for data integrations. |
