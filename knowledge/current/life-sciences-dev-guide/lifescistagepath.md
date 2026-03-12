---
title: "LifeSciStagePath"
domain: life-sciences-dev-guide
topic: lifescistagepath
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:46.536Z
estimatedTokens: 571
keywords: [LifeSciStagePath, steps, associated, workflow, path, step, API, version, 65.0, later, Calls]
---

# LifeSciStagePath

> Represents information about the steps associated with a workflow and the
         path from one step in the workflow to the next. This object is available in API
      version 65.0 and later.

# LifeSciStagePath

Represents information about the steps associated with a workflow and the path from one step in the workflow to the next. This object is available in API version 65.0 and later.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=life_sciences_dev_guide)

#### Important

Where possible, we changed noninclusive terms to align with our company value of Equality. We maintained certain terms to avoid any effect on customer implementations.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| FieldApiName | TypestringPropertiesCreate, Filter, Group, Sort, UpdateDescriptionRequired. The field that specifies the steps in a workflow. This field tracks a record’s progress through a workflow. |
| LifeSciStageObjectId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionRequired. The stage object associated with the stage path.This field is a relationship field.Relationship NameLifeSciStageObjectRelationship TypeMaster-detailRefers ToLifeSciStageObject (the master object) |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionRequired. The name of the stage path record. |
| Parameters | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionAdditional parameters in JSON format. |
| SourceSystemIdentifier | TypestringPropertiesCreate, Filter, Group, idLookup, Nillable, Sort, UpdateDescriptionAn external ID from the source system for data integrations. |
| SourceSystemName | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe name of the source system for data integrations. |
| StageObjectRecordTypeId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe record type associated with the stage path.This field is a relationship field.Relationship NameStageObjectRecordTypeRelationship TypeLookupRefers ToRecordType |
| Status | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Restricted picklist, Sort, UpdateDescriptionRequired. The status of the stage path.Possible values are:ActiveInactiveThe default value is Active. |
