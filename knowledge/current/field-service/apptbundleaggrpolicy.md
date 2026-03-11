---
title: "ApptBundleAggrPolicy"
domain: field-service
topic: apptbundleaggrpolicy
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T15:47:12.423Z
keywords: [ApptBundleAggrPolicy, Supported, Calls, Special, Access, Rules, Fields]
---

# ApptBundleAggrPolicy

# ApptBundleAggrPolicy

Policy that defines how the property values of the bundle members are aggregated and assigned to the bundle. This object is available in API version 54.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Special Access Rules

-   Field Service must be enabled.
-   Bundling must be enabled in the Field Service Settings.
-   The Field Service Admin, Field Service Bundle for Dispatcher, and Field Service Integration permission sets must be enabled.

## Fields

| Field | Details |
| --- | --- |
| AggregationAction | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe aggregation action to be performed.Possible values are: All default and custom Service Appointment fields. |
| AggregationFieldType | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe target field type in the bundle to which the aggregation is directed.Possible values are:BooleanDateNumericPicklistPicklist-MultiSkillsString |
| AggregationOrder | TypeintPropertiesCreate, Defaulted on create, Filter, Group, idLookup, Nillable, Sort, UpdateDescriptionThe order the aggregation is triggered. |
| BundleFieldName | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionName of the target field in the bundle where the value is taken from the bundle member.Possible values are: All default and custom Service Appointment fields. |
| BundleMemberAddiFieldName | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionName of an additional source field that is connected to the initial source field in the bundle member from which the value is taken.Possible values are: All default and custom Service Appointment fields. |
| BundleMemberFieldName | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionName of the source field in the bundle member from which the value is taken.Possible values are: All default and custom Service Appointment fields. |
| BundlePolicyId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionID of the parent bundle policy.This is a relationship field.Relationship NameBundlePolicyRelationship TypeLookupRefers ToApptBundlePolicy |
| ConstantValue | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe constant value that is used in the aggregation. |
| DateValue | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionRepresents how the date value will be determined.Possible values are:End of DayNowNullStart of Day |
| DoesAllowDuplicateStrings | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates if you want to allow the same string to appear more than once when using the 'Sum based on Bundle Members' action type. |
| DownscaleSortDirection | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionApplies only if the Set Downscaled Duration action is set. The downscaling sorting direction of the bundle member service appointments, according to their duration.Possible values are:AscendingDescending |
| FilterCriteriaId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe active recordset filter criteria used for aggregating the bundle members.This is a relationship field.Relationship NameFilterCriteriaRelationship TypeLookupRefers ToRecordsetFilterCriteria |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last accessed this record, a record related to this record, or a list view. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last viewed this record or list view. If this value is null, the user might have only accessed this record or list view (LastReferencedDate) but not viewed it. |
| MaxBundleDuration | TypeintPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe maximum bundle duration that can be accumulated from the bundle members (after downscaling). |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionThe name of the appointment bundle aggregation policy. |
| ShouldUpdateOnCreationOnly | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates if you want to update the field in the bundle only when it is created. |