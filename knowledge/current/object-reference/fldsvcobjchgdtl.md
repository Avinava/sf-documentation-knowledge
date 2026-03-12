---
title: "FldSvcObjChgDtl"
domain: object-reference
topic: fldsvcobjchgdtl
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:35:10.224Z
estimatedTokens: 413
keywords: [FldSvcObjChgDtl, change, made, service, appointment’s, tracked, API, version, 63.0, later, Calls, Special, Access, Rules]
---

# FldSvcObjChgDtl

> Represents the details of a change made to one of a service appointment’s
         tracked fields. This object is available in API version 63.0 and later.

# FldSvcObjChgDtl

Represents the details of a change made to one of a service appointment’s tracked fields. This object is available in API version 63.0 and later.

## Supported Calls

describeLayout(), describeSObjects(), query(), retrieve()

## Special Access Rules

-   Field Service must be enabled.
-   The Field Service managed package must be installed.
-   The **Track the lifecycle of service appointments** setting in **Setup** | **Field Service Settings** must be enabled.
-   The Platform Integration User must have the Manage Service Appointment Lifecycle and the View Service Appointment Lifecycle permissions.
-   To view this object, users must have the View Service Appointment Lifecycle user permission.

## Fields

| Field | Details |
| --- | --- |
| FieldChangedName | TypestringPropertiesFilter, Group, SortDescriptionThe API name of the field that was changed. |
| FieldChangedValue | TypestringPropertiesFilter, Nillable, SortDescriptionThe updated value of the field that was changed. |
| FldSvcObjChgId | TypereferencePropertiesFilter, Group, SortDescriptionThe parent record associated with the details of the change. The parent record has multiple detail records associated with it. Each record includes the name and the current value of the tracked fields.This field is a relationship field.Relationship NameFldSvcObjChgRelationship TypeLookupRefers ToFldSvcObjChg |

#### See Also

-   [FldSvcObjChg](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_fldsvcobjchg.htm "Represents a change made to one of a service appointment’s tracked fields. This object is available in API version 63.0 and later.")

## Related Topics

- FldSvcObjChg (atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_fldsvcobjchg.htm)
