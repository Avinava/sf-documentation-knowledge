---
title: "DataMaskCustomValueLibrary"
domain: object-reference
topic: datamaskcustomvaluelibrary
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:08.063Z
estimatedTokens: 736
keywords: [DataMaskCustomValueLibrary, user-inputted, custom, library, Data, Mask, API, version, 64.0, later, Calls, Special, Access, Rules, Associated]
---

# DataMaskCustomValueLibrary

> Represents a set of user-inputted values in a custom library in Data
         Mask. This object is available in API version 64.0 and later.

# DataMaskCustomValueLibrary

Represents a set of user-inputted values in a custom library in Data Mask. This object is available in API version 64.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Special Access Rules

This object is available with the Sandbox Data Mask managed package.

## Fields

| Field | Details |
| --- | --- |
| ContentType | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, SortDescriptionThe type of value used in a field of the custom library.Possible values are:emailnumberphone_numberstringurl |
| Description | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe description of the value in the custom library. |
| IsActive | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionRepresents whether the library is active or inactive for use.The default value is false. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed a record related to this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed this record. |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionThe name of the custom library. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionThe ID of the owner of the custom library.This field is a polymorphic relationship field.Relationship NameOwnerRefers ToGroup, User |
| Type | TypepicklistPropertiesFilter, Group, Restricted picklist, SortDescriptionRepresents how the values were added to the library.Possible values are:defaultuser_defined |
| Values | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionThe content of the value field for masking data. |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[DataMaskCustomValueLibraryOwnerSharingRule](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_ownersharingrule.htm "StandardObjectNameOwnerSharingRule is the model for all owner sharing rule objects associated with standard objects. These objects represent a rule for sharing a standard object with users other than the owner.")

Sharing rules are available for the object.

[DataMaskCustomValueLibraryShare](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_share.htm "StandardObjectNameShare is the model for all share objects associated with standard objects. These objects represent a sharing entry on the standard object.")

Sharing is available for the object.

## Related Topics

- DataMaskCustomValueLibraryOwnerSharingRule (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_ownersharingrule.htm)
- DataMaskCustomValueLibraryShare (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_share.htm)
