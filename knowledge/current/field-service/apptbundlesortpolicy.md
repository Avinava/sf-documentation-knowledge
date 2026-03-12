---
title: "ApptBundleSortPolicy"
domain: field-service
topic: apptbundlesortpolicy
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:54.109Z
estimatedTokens: 694
keywords: [ApptBundleSortPolicy, Policy, bundle, members, sorted, automatic, mode, determining, order, selection, API, version, 54.0, later, Calls]
---

# ApptBundleSortPolicy

> Policy that defines the properties by which the bundle members are sorted
         within the bundle. Can also be used in the automatic mode for determining the order of the
         automatic selection of bundle members. This object is available in API version 54.0
      and later.

# ApptBundleSortPolicy

Policy that defines the properties by which the bundle members are sorted within the bundle. Can also be used in the automatic mode for determining the order of the automatic selection of bundle members. This object is available in API version 54.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Special Access Rules

-   Field Service must be enabled.
-   Bundling must be enabled in the Field Service Settings.
-   The Field Service Admin, Field Service Bundle for Dispatcher, and Field Service Integration permission sets must be enabled.

## Fields

| Field | Details |
| --- | --- |
| BundlePolicyId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe ID of the parent bundle policy.This is a relationship field.Relationship NameBundlePolicyRelationship TypeLookupRefers ToApptBundlePolicy |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last accessed this record, a record related to this record, or a list view. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last viewed this record or list view. If this value is null, the user might have only accessed this record or list view (LastReferencedDate) but not viewed it. |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionName of the appointment bundle sort policy. |
| SortDirection | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, Sort, UpdateDescriptionThe order of the appointments in a bundlePossible values are:AscendingDescending |
| SortFieldName | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionName of the field in the service appointment used for sorting the bundle members.Possible values are: All default and custom Service Appointment fields. |
| SortOrder | TypeintPropertiesCreate, Defaulted on create, Filter, Group, idLookup, Nillable, Sort, UpdateDescriptionThe order of fields used for sorting the bundle members. |
| SortType | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, Sort, UpdateDescriptionThe applied sort type for arranging the bundle. Sort for Automatic Bundling defines the order that automated bundling uses to examine the candidate service appointments to be bundled. Sort Within a Bundle defines the order of bundle members. It’s also used when you unbundle to define the order that the service appointments are scheduled on the Gantt.Possible values are:SortForAutomaticBundling—Sort For Automatic BundlingSortWithinaBundle—Sort Within a Bundle |
