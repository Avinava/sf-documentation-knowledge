---
title: "OtherComponentTask"
domain: retail-api
topic: othercomponenttask
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:40.591Z
estimatedTokens: 642
keywords: [OtherComponentTask, component, task, performed, visit, customers, launch, components, framework, API, version, 50.0, later, Calls, Associated]
---

# OtherComponentTask

> Represents the details of a component task performed in a visit. A component
      task allows customers to launch components from the task framework. This object is
    available in API version
    50.0
    and later.

# OtherComponentTask

Represents the details of a component task performed in a visit. A component task allows customers to launch components from the task framework. This object is available in API version 50.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| Description | TypetextareaPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionDescription of the task. |
| FullyQualifiedName | TypestringPropertiesCreate, Filter, Group, Sort, UpdateDescriptionName of the task prefixed with the namespace. For example, a component xyz in the c namespace must be named as c__abc. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe most recent date on which a user referenced this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe most recent date on which a user viewed this record. |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionUnique identification of the task. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionID of the component task record owner. |
| ParentTaskId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionAssessment task associated with the component task. |
| ParticipantRoleId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe participant role that's associated with the task.This field is a polymorphic relationship field and is available in API version 58.0 and later.Relationship NameParticipantRoleRelationship TypeLookupRefers ToParticipantRole |

## Associated Objects

This object has the following associated objects. Unless noted, they’re available in the same API version as this object.

[OtherComponentTaskShare](atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_share.htm "StandardObjectNameShare is the model for all share objects associated with standard objects. These objects represent a sharing entry on the standard object.")

Sharing is available for the object.

[OtherComponentTaskHistory](atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for the object.

## Related Topics

- OtherComponentTaskShare (atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_share.htm)
- OtherComponentTaskHistory (atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_history.htm)
