---
title: "ApptBundlePolicy"
domain: field-service
topic: apptbundlepolicy
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:55.824Z
estimatedTokens: 994
keywords: [ApptBundlePolicy, Policy, defines, how, bundling, service, appointments, should, handled., API, version, 54.0, later., Supported, Calls, Special, Access, Rules, Fields]
---

# ApptBundlePolicy

> Policy that defines how the bundling of service appointments should be
         handled. This object is available in API version 54.0 and later.

# ApptBundlePolicy

Policy that defines how the bundling of service appointments should be handled. This object is available in API version 54.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Special Access Rules

-   Field Service must be enabled.
-   Bundling must be enabled in the Field Service Settings.
-   The Field Service Admin, Field Service Bundle for Dispatcher, and Field Service Integration permission sets must be enabled.

## Fields

| Field | Details |
| --- | --- |
| BundleEndTimeFieldName | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionIf IsTimeCalcByBundleDurationField is true, this field represents the name of the field used for entering the end time of the bundle. |
| BundleStartTimeFieldName | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionIf IsTimeCalcByBundleDurationField is true, this field represents the name of the field used for entering the start time of the bundle. |
| CanAllowSchleDepndInBundle | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionThis field is reserved for future use. |
| ConstantTimeValue | TypeintPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionIf IsTimeCalcByBundleDurationField is true, this field represents the total time of the bundle as a preset constant value. |
| FilterCriteriaId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe active recordset filter criteria used for the bundle members. Only service appointments that meet the criteria can be bundled.This is a relationship field.Relationship NameFilterCriteriaRelationship TypeLookupRefers ToRecordsetFilterCriteria |
| IsAutomaticBundling | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates if the policy is relevant for automatic bundling. |
| IsManualBundling | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates if the policy is relevant for manual bundling.The default value is ‘false’. |
| IsTimeCalcByBundleDurationFld | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates if the bundle’s duration is validated. If true, the bundle’s start time is subtracted from the bundle’s end time. If the result is a negative value, it uses ConstantTimeValue as the bundle’s duration.The default value is ‘false’. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last accessed this record, a record related to this record, or a list view. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last viewed this record or list view. If this value is null, the user might have only accessed this record or list view (LastReferencedDate) but not viewed it. |
| LimitAmountOfBundleMembers | TypeintPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Sort, UpdateDescriptionThe maximum number of bundle members that can be included in a bundle. |
| LimitDurationOfBundle | TypeintPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe maximum duration of a bundle. |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionName of the bundle policy. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionID of the owner of this object.This is a polymorphic relationship field.Relationship NameOwnerRelationship TypeLookupRefers ToGroup, User |
| Priority | TypeintPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionThe priority level that this bundle policy should be given when the bundle policies are analyzed using the automatic mode. |
