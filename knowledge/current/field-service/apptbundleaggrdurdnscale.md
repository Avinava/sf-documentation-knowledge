---
title: "ApptBundleAggrDurDnscale"
domain: field-service
topic: apptbundleaggrdurdnscale
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:55.789Z
estimatedTokens: 550
keywords: [ApptBundleAggrDurDnscale, Sums, duration, bundle, members, reduced, predefined, percentage., API, version, 54.0, later., Supported, Calls, Special, Access, Rules, Fields]
---

# ApptBundleAggrDurDnscale

> Sums the duration of the bundle members, reduced by a predefined
         percentage. This object is available in API version 54.0 and later.

# ApptBundleAggrDurDnscale

Sums the duration of the bundle members, reduced by a predefined percentage. This object is available in API version 54.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Special Access Rules

-   Field Service must be enabled.
-   Bundling must be enabled in the Field Service Settings.
-   The Field Service Admin, Field Service Bundle for Dispatcher, and Field Service Integration permission sets must be enabled.

## Fields

| Field | Details |
| --- | --- |
| BundleAggregationPolicyId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe ID of the parent appointment bundle aggregation policy.This is a relationship field.Relationship NameBundleAggregationPolicyRelationship TypeLookupRefers ToApptBundleAggrPolicy |
| FromBundleMemberNumber | TypeintPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Sort, UpdateDescriptionThe number of the first bundle member to which the downscale is applied. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last accessed this record, a record related to this record, or a list view. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last viewed this record or list view. If this value is null, the user might have only accessed this record or list view (LastReferencedDate) but not viewed it. |
| MaxReduction | TypeintPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe maximum reduction that can be applied to a bundle member. |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionThe name of the appointment bundle aggregation downscale policy. |
| PercentageOfReduction | TypeintPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Sort, UpdateDescriptionThe percentage of duration reduction. |
| ToBundleMemberNumber | TypeintPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe number of the last bundle member to which the downscale is applied. |
