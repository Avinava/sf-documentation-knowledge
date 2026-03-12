---
title: "LifeScienceCustomScript"
domain: life-sciences-dev-guide
topic: lifesciencecustomscript
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:46.368Z
estimatedTokens: 676
keywords: [LifeScienceCustomScript, custom, script, associated, Life, Science, stage, workflow, implement, validation, logic, API, version, 65.0, later]
---

# LifeScienceCustomScript

> Represents a custom script associated with a Life Science stage object within
         a workflow. Use a custom script to implement the validation logic for the stage
         object. This object is available in API version 65.0 and later.

# LifeScienceCustomScript

Represents a custom script associated with a Life Science stage object within a workflow. Use a custom script to implement the validation logic for the stage object. This object is available in API version 65.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| CodeText | TypetextareaPropertiesNillableDescriptionThe JavaScript code associated with a Lightning web component. |
| ComponentName | TypestringPropertiesCreate, Filter, Group, Sort, UpdateDescriptionRequired. The name of the Lightning web component that contains the custom script. |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionThe name of the Life Science custom script record. |
| ObjectName | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionFor a Mobile Page Layout Validation script, the name of the object associated with the custom script. |
| OperationEventType | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionFor a Mobile Page Layout Validation script, the type of operation that the custom script supports.Possible values are:OnCreateOnDeleteOnUpdate |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionThe ID of the owner of the record.This field is a polymorphic relationship field.Relationship NameOwnerRefers ToGroup, User |
| SourceSystemIdentifier | TypestringPropertiesCreate, Filter, Group, idLookup, Nillable, Sort, UpdateDescriptionAn external ID from the source system for data integrations. |
| SourceSystemName | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe name of the source system for data integrations. |
| Type | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, Sort, UpdateDescriptionRequired. The type of custom script.Possible values are:ChecklistMobilePageLayoutDataValidationOrderValidationValidation |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[LifeScienceCustomScriptShare](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_associated_objects_share.htm "StandardObjectNameShare is the model for all share objects associated with standard objects. These objects represent a sharing entry on the standard object.")

Sharing is available for the object.

## Related Topics

- LifeScienceCustomScriptShare (atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_associated_objects_share.htm)
