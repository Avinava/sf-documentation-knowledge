---
title: "LifeSciStageOperationAction"
domain: life-sciences-dev-guide
topic: lifescistageoperationaction
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:46.521Z
estimatedTokens: 512
keywords: [LifeSciStageOperationAction, junction, stage, operation, action, actions, context, specific, API, version, 65.0, later, Calls]
---

# LifeSciStageOperationAction

> Represents a junction between a stage operation and a stage action. This
         object defines a set of available stage actions in the context of a specific stage
         operation. This object is available in API version 65.0 and later.

# LifeSciStageOperationAction

Represents a junction between a stage operation and a stage action. This object defines a set of available stage actions in the context of a specific stage operation. This object is available in API version 65.0 and later.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=life_sciences_dev_guide)

#### Important

Where possible, we changed noninclusive terms to align with our company value of Equality. We maintained certain terms to avoid any effect on customer implementations.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| DisplayOrder | TypedoublePropertiesCreate, Filter, Sort, UpdateDescriptionRequired. The order in which the stage operation action is displayed within the list of available stage operation actions. |
| LifeSciStageActionId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionRequired. The stage action that the stage operation action is configured for.This field is a relationship field.Relationship NameLifeSciStageActionRelationship TypeLookupRefers ToLifeSciStageAction |
| LifeSciStageOperationId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionRequired. The stage operation associated with the stage operation action.This field is a relationship field.Relationship NameLifeSciStageOperationRelationship TypeMaster-detailRefers ToLifeSciStageOperation (the master object) |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionRequired. The name of the stage operation action record. |
| SourceSystemIdentifier | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionAn external ID from the source system for data integrations. |
| SourceSystemName | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe name of the source system for data integrations. |
