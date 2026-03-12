---
title: "ApptBundlePropagatePolicy"
domain: field-service
topic: apptbundlepropagatepolicy
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:55.841Z
estimatedTokens: 884
keywords: [ApptBundlePropagatePolicy, Policy, defines, which, values, inherited, bundle, members, assigned, constant, members., API, version, 55.0, later., Supported, Calls, Special, Access, Rules]
---

# ApptBundlePropagatePolicy

> Policy that defines which property values are inherited from the
         bundle to the bundle members or are assigned as constant values in the bundle members.
      This object is available in API version 55.0 and later.

# ApptBundlePropagatePolicy

Policy that defines which property values are inherited from the bundle to the bundle members or are assigned as constant values in the bundle members. This object is available in API version 55.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Special Access Rules

-   Field Service must be enabled.
-   Bundling must be enabled in the Field Service Settings.
-   The Field Service Admin, Field Service Bundle for Dispatcher, and Field Service Integration permission sets must be enabled.

## Fields

| Field | Details |
| --- | --- |
| AdditionalConstantValue | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe additional constant value that is connected to the initial constant value to be added to the bundle members. |
| BundleFieldName | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionName of the source field in the bundle from which the value is taken.Possible values are: All default and custom Service Appointment fields. |
| BundleMemberFieldName | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionName of the target field in the bundle member where the value is inherited from the bundle.Possible values are: All default and custom Service Appointment fields. |
| BundlePolicyId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionID of the parent bundle policy.This field is a relationship field.Relationship NameBundlePolicyRelationship TypeLookupRefers ToApptBundlePolicy |
| ConstantValue | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe constant value to be added to the bundle members. |
| DateValue | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionRepresents how the date value is determined.Possible values are:End of DayNowNullStart of Day |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last accessed this record, a record related to this record, or a list view. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last viewed this record or list view. If this value is null, the user might have only accessed this record or list view (LastReferencedDate) but not viewed it. |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionThe name of the appointment bundle propagation policy. |
| ShouldAddConstantValue | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates if you want to enable adding a constant value to the bundle members. |
| ShouldUpdateOnAdd | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates if you want to enable updating the fields of the bundle members when they are added to the bundle. |
| ShouldUpdateOnRemove | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates if you want to enable updating the fields of the bundle members when they are removed from the bundle. |
| ShouldUpdateOnUnbundle | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates if you want to enable updating the fields of the bundle members when performing the Unbundle action. |
