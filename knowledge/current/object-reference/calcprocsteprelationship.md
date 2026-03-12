---
title: "CalcProcStepRelationship"
domain: object-reference
topic: calcprocsteprelationship
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:05.842Z
estimatedTokens: 770
keywords: [CalcProcStepRelationship, parent-child, relationship, two, Expression, Steps, Version, label, Step, API, 53.0, later, Calls, Special, Access]
---

# CalcProcStepRelationship

> Defines a parent-child relationship between two Expression Set Steps in an
         Expression Set Version. The label for this object is Expression Set Step Relationship.
      This object is available in API version 53.0 and later.

# CalcProcStepRelationship

Defines a parent-child relationship between two Expression Set Steps in an Expression Set Version. The label for this object is Expression Set Step Relationship. This object is available in API version 53.0 and later.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=object_reference)

#### Note

This object has been deprecated as of API version 55.0. In API version 55.0 and later, use the new Expression Set objects in Business Rules Engine instead.

Parent-child step relationships collectively determine the step order.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), undelete(), update(), upsert()

## Special Access Rules

Access to Expression Sets requires OmniStudio licenses.

## Fields

| Field | Details |
| --- | --- |
| CalcProcStepId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe ID of the child Expression Set Step.This is a relationship field.Relationship NameCalcProcStepRelationship TypeLookupRefers ToCalculationProcedureStep |
| CalcProcVersionId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionThe ID of the related Expression Set Version.This is a relationship field.Relationship NameCalcProcVersionRelationship TypeLookupRefers ToCalculationProcedureVersion |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionThe Expression Set Step Relationship name. |
| ParentCalcProcStepId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe ID of the parent Expression Set Step.This is a relationship field.Relationship NameParentCalcProcStepRelationship TypeLookupRefers ToCalculationProcedureStep |
| RelationshipType | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe type of relationship between the parent and child steps.Possible values are:Bypass—The parent is a condition step. If the condition is false, the child is the next step.ParentChild—The child is the next step after the parent. |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[CalcProcStepRelationshipFeed](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.")

Feed tracking is available for the object.

[CalcProcStepRelationshipHistory](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

## Related Topics

- CalcProcStepRelationshipFeed (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_feed.htm)
- CalcProcStepRelationshipHistory (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_history.htm)
