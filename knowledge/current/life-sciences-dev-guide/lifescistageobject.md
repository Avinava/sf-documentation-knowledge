---
title: "LifeSciStageObject"
domain: life-sciences-dev-guide
topic: lifescistageobject
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:46.506Z
estimatedTokens: 675
keywords: [LifeSciStageObject, associated, workflow, API, version, 65.0, later, Calls, Objects]
---

# LifeSciStageObject

> Represents an object associated with a workflow. This object is
      available in API version 65.0 and later.

# LifeSciStageObject

Represents an object associated with a workflow. This object is available in API version 65.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| ChecklistCustomScriptId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe custom script that provides a checklist.This field is a relationship field.Relationship NameChecklistCustomScriptRelationship TypeLookupRefers ToLifeScienceCustomScript |
| IsControlledByStagePath | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the object permissions are determined by a stage path (true) or not (false).The default value is false. |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionRequired. The name of the stage object. |
| ObjectName | TypestringPropertiesCreate, Filter, Group, Sort, UpdateDescriptionRequired. The object associated with the record. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionThe ID of the owner of the record.This field is a polymorphic relationship field.Relationship NameOwnerRefers ToGroup, User |
| ParentObjRelaFieldName | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe API name of the field that links the object to a parent object. |
| SourceSystemIdentifier | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionAn external ID from the source system for data integrations. |
| SourceSystemName | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe name of the source system for data integrations. |
| ValidationCustomScriptId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe custom script that enforces validation rules.This field is a relationship field.Relationship NameValidationCustomScriptRelationship TypeLookupRefers ToLifeScienceCustomScript |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[LifeSciStageObjectShare](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_associated_objects_share.htm "StandardObjectNameShare is the model for all share objects associated with standard objects. These objects represent a sharing entry on the standard object.")

Sharing is available for the object.

## Related Topics

- LifeSciStageObjectShare (atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_associated_objects_share.htm)
