---
title: "LifeSciStageAction"
domain: life-sciences-dev-guide
topic: lifescistageaction
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:46.497Z
estimatedTokens: 670
keywords: [LifeSciStageAction, configuration, action, performed, part, workflow, API, version, 65.0, later, Calls, Associated, Objects]
---

# LifeSciStageAction

> Represents the configuration of an action performed as part of a
         workflow. This object is available in API version 65.0 and later.

# LifeSciStageAction

Represents the configuration of an action performed as part of a workflow. This object is available in API version 65.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| FieldApiName | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe API name of the field that the stage action operates on. |
| FieldValue | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe value to assign to the field specified for Field API Name. |
| Label | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionA custom label to display on the stage action button. |
| LifeSciStageObjectId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionRequired. The stage object associated with the stage action.This field is a relationship field.Relationship NameLifeSciStageObjectRelationship TypeLookupRefers ToLifeSciStageObject |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionRequired. The name of the stage action record. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionThe ID of the owner of the record.This field is a polymorphic relationship field.Relationship NameOwnerRefers ToGroup, User |
| Parameters | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionAdditional parameters that apply to the stage action. |
| SourceSystemIdentifier | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionAn external ID from the source system for data integrations. |
| SourceSystemName | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe name of the source system for data integrations. |
| Type | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, Sort, UpdateDescriptionRequired. The type of action performed.Possible values are:ComponentCustomActionPlatformEventRecordUpdate |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[LifeSciStageActionShare](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_associated_objects_share.htm "StandardObjectNameShare is the model for all share objects associated with standard objects. These objects represent a sharing entry on the standard object.")

Sharing is available for the object.

## Related Topics

- LifeSciStageActionShare (atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_associated_objects_share.htm)
