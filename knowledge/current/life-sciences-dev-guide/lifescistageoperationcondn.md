---
title: "LifeSciStageOperationCondn"
domain: life-sciences-dev-guide
topic: lifescistageoperationcondn
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:46.529Z
estimatedTokens: 486
keywords: [LifeSciStageOperationCondn, logical, expression, applying, operation, workflow, API, version, 65.0, later, Calls]
---

# LifeSciStageOperationCondn

> Represents a logical expression for applying an operation in a workflow.
      This object is available in API version 65.0 and later.

# LifeSciStageOperationCondn

Represents a logical expression for applying an operation in a workflow. This object is available in API version 65.0 and later.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=life_sciences_dev_guide)

#### Important

Where possible, we changed noninclusive terms to align with our company value of Equality. We maintained certain terms to avoid any effect on customer implementations.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| LifeSciStageOperationId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionRequired. The stage operation associated with the stage operation condition.This field is a relationship field.Relationship NameLifeSciStageOperationRelationship TypeMaster-detailRefers ToLifeSciStageOperation (the master object) |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionRequired. The name of the stage operation condition record. |
| ObjectFieldName | TypestringPropertiesCreate, Filter, Group, Sort, UpdateDescriptionRequired. The field to evaluate. |
| ObjectFieldValue | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe value evaluated by the condition. |
| Operator | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, Sort, UpdateDescriptionRequired. The operator for the condition.Possible values are:EqualsEqualsNullInNotEqualsNotEqualsNullNotIn |
| SourceSystemIdentifier | TypestringPropertiesCreate, Filter, Group, idLookup, Nillable, Sort, UpdateDescriptionAn external ID from the source system for data integrations. |
| SourceSystemName | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe name of the source system for data integrations. |
