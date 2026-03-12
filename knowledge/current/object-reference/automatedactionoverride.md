---
title: "AutomatedActionOverride"
domain: object-reference
topic: automatedactionoverride
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:05.447Z
estimatedTokens: 676
keywords: [AutomatedActionOverride, modified, attribute, shared, automated, action, contain, customizations, business, API, version, 58.0, later, Calls, Associated]
---

# AutomatedActionOverride

> Represents a modified attribute of a shared automated action. For example,
         the modified attribute can contain customizations for your business. This object is
      available in API version 58.0 and later.

# AutomatedActionOverride

Represents a modified attribute of a shared automated action. For example, the modified attribute can contain customizations for your business. This object is available in API version 58.0 and later.

## Supported Calls

create(), delete(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| FieldName | TypestringPropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe name of the field to override. |
| IsLocked | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionIndicates whether the automated action override record is locked or not.The default value is false. |
| IsRelatedRecordOverridable | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionIndicates whether the parent automated action record can be overridden.The default value is false. |
| MayEdit | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionIndicates whether the automated action override record can be edited or not.The default value is false. |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionName of the automated action. |
| RelatedRecordApiName | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe object name of the RelatedRecordId.This field is a calculated field. |
| RelatedRecordId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionID of the automated action.This field is a polymorphic relationship field.Relationship NameRelatedRecordRelationship TypeLookupRefers ToAutomatedAction, FtestUser |
| Value | TypetextareaPropertiesCreate, UpdateDescriptionThe overridden value used for FieldName. |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[AutomatedActionOverrideOwnerSharingRule](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_ownersharingrule.htm "StandardObjectNameOwnerSharingRule is the model for all owner sharing rule objects associated with standard objects. These objects represent a rule for sharing a standard object with users other than the owner.")

Sharing rules are available for the object.

[AutomatedActionOverrideShare](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_share.htm "StandardObjectNameShare is the model for all share objects associated with standard objects. These objects represent a sharing entry on the standard object.")

Sharing is available for the object.

## Related Topics

- AutomatedActionOverrideOwnerSharingRule (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_ownersharingrule.htm)
- AutomatedActionOverrideShare (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_share.htm)
