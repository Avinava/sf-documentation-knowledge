---
title: "LifeSciStageOperation"
domain: life-sciences-dev-guide
topic: lifescistageoperation
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:46.516Z
estimatedTokens: 917
keywords: [LifeSciStageOperation, criteria, evaluate, determining, applicable, permissions, actions, specific, step, workflow, API, version, 65.0, later, Calls]
---

# LifeSciStageOperation

> Represents the criteria to evaluate in determining the applicable permissions
         and available actions for a specific step in a workflow. This object is available in
      API version 65.0 and later.

# LifeSciStageOperation

Represents the criteria to evaluate in determining the applicable permissions and available actions for a specific step in a workflow. This object is available in API version 65.0 and later.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=life_sciences_dev_guide)

#### Important

Where possible, we changed noninclusive terms to align with our company value of Equality. We maintained certain terms to avoid any effect on customer implementations.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| CanCreate | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the user can create a record for the object associated with the workflow (true) or not (false) based on the evaluation of condition operations.The default value is false. |
| CanDelete | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the user can delete an existing record for the object associated with the workflow (true) or not (false) based on the evaluation of condition operations.The default value is false. |
| CanEdit | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the user can edit an existing record for the object associated with the workflow (true) or not (false) based on the evaluation of condition operations.The default value is false. |
| CompoundRelationshipName | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe name of the object that the stage operation is configured for. For example, Attachment for an operation that applies to attachment records. |
| LifeSciStageObjectId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionRequired. The stage object associated with the stage path.This field is a relationship field.Relationship NameLifeSciStageObjectRelationship TypeLookupRefers ToLifeSciStageObject |
| LifeSciStageValueId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionRequired. The value of the stage path associated with the stage operation.This field is a relationship field.Relationship NameLifeSciStageValueRelationship TypeMaster-detailRefers ToLifeSciStageValue (the master object) |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionRequired. The name of the stage operation record. |
| ParentStageOperationId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe name of the parent stage operation that this stage operation is a child of.This field is a relationship field.Relationship NameParentStageOperationRelationship TypeLookupRefers ToLifeSciStageOperation |
| Priority | TypeintPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe priority of the stage operation in relation to other stage operations that can apply. A Priority of 1 indicates this operation is applied first. |
| SourceSystemIdentifier | TypestringPropertiesCreate, Filter, Group, idLookup, Nillable, Sort, UpdateDescriptionAn external ID from the source system for data integrations. |
| SourceSystemName | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe name of the source system for data integrations. |
| Type | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, Sort, UpdateDescriptionThe type of the stage operation record.Possible values are:CompoundRelationshipWorkflowPath |
