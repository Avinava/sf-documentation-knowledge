---
title: "UserDefinedLabelAssignment"
domain: object-reference
topic: userdefinedlabelassignment
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:18.763Z
estimatedTokens: 661
keywords: [UserDefinedLabelAssignment, relationship, record, label, item, user, assigned, API, version, 61.0, later, Calls, Associated, Objects]
---

# UserDefinedLabelAssignment

> Represents a relationship between a record label and the item the
         user assigned it to. This object is available in API version 61.0 and
      later.

# UserDefinedLabelAssignment

Represents a relationship between a record label and the item the user assigned it to. This object is available in API version 61.0 and later.

## Supported Calls

create(), delete(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| EntityType | TypestringPropertiesFilter, Group, Nillable, SortDescriptionObject label of the Item record derived from ItemId. Available in API version 62.0 and later. |
| ItemId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionID of the Item record added to the UserDefinedLabel record.This field is a polymorphic relationship field.Relationship NameItemRefers ToAccount, ActionCadence, ActionCadenceStepTracker, CallTemplate, Case, Contact, EmailTemplate, FlowOrchestrationWorkItem, Lead, Opportunity, Task |
| LabelId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionID of the UserDefinedLabel record that the Item record is assigned to.This field is a relationship field.Relationship NameLabelRefers ToUserDefinedLabel |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionID of the user or group that owns this record.This field is a polymorphic relationship field.Relationship NameOwnerRefers ToGroup, User |
| SortOrder | TypeintPropertiesFilter, Group, idLookup, Nillable, SortDescriptionOrder of the assigned items for a given UserDefinedLabel record. |
| SubjectOrName | TypestringPropertiesFilter, Group, Nillable, SortDescriptionName of the Item record. If it's a task, the value is the subject of the Item record. |

## Associated Objects

This object has these associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[UserDefinedLabelAssignmentOwnerSharingRule](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_ownersharingrule.htm "StandardObjectNameOwnerSharingRule is the model for all owner sharing rule objects associated with standard objects. These objects represent a rule for sharing a standard object with users other than the owner.")

Sharing rules are available for the object.

[UserDefinedLabelAssignmentShare](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_share.htm "StandardObjectNameShare is the model for all share objects associated with standard objects. These objects represent a sharing entry on the standard object.")

Sharing is available for the object.

## Related Topics

- UserDefinedLabelAssignmentOwnerSharingRule (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_ownersharingrule.htm)
- UserDefinedLabelAssignmentShare (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_share.htm)
