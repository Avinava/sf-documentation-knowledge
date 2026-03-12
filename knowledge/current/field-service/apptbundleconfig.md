---
title: "ApptBundleConfig"
domain: field-service
topic: apptbundleconfig
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:55.814Z
estimatedTokens: 1135
keywords: [ApptBundleConfig, Represents, general, define, behavior, bundle., API, version, 54.0, later., Supported, Calls, Special, Access, Rules, Fields]
---

# ApptBundleConfig

> Represents the general parameters that define the behavior of the
         bundle. This object is available in API version 54.0 and later.

# ApptBundleConfig

Represents the general parameters that define the behavior of the bundle. This object is available in API version 54.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Special Access Rules

-   Field Service must be enabled.
-   Bundling must be enabled in the Field Service Settings.
-   The Field Service Admin, Field Service Bundle for Dispatcher, and Field Service Integration permission sets must be enabled.

## Fields

| Field | Details |
| --- | --- |
| AddToBundleStatuses | TypemultipicklistPropertiesCreate, Defaulted on create, Filter, Nillable, UpdateDescriptionThe statuses of service appointment that are allowed to be bundled.Possible values are:AcceptedCanceledCannot CompleteCompletedDispatchedIn ProgressNoneRejectedScheduledThe default value is None. |
| BundleStatusesToPropagate | TypemultipicklistPropertiesCreate, Defaulted on create, Filter, Nillable, UpdateDescriptionThe bundle statuses that when updated are inherited by the bundle members.Possible values are:AcceptedCanceledCannot CompleteCompletedDispatchedIn ProgressNoneRejectedScheduledThe default value is None. |
| CriteriaForAutoUnbundlingId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe criteria that causes a bundle service appointment to be unbundled.This is a relationship field.Relationship NameCriteriaForAutoUnbundlingRelationship TypeLookupRefers ToRecordsetFilterCriteria |
| DoesAddTravelTime | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIf the bundle members aren’t in the same location, add travel time between them to the bundle’s duration according to their sort order. The default value is false. |
| DoesDeleteEmptyBundles | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIf the bundle has no remaining bundle members, the bundle is deleted. |
| EmptyBundleStatus | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionThe status from the Canceled category that a bundle service appointment changes to if it has no remaining bundle members, but still appears in the appointment list.Possible values are determined by the org’s statuses.The default value is None. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last accessed this record, a record related to this record, or a list view. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last viewed this record or list view. If this value is null, the user might have only accessed this record or list view (LastReferencedDate) but not viewed it. |
| MemberStatusesNotToPropagate | TypemultipicklistPropertiesCreate, Defaulted on create, Filter, Nillable, UpdateDescriptionThe bundle member statuses that aren’t overridden when the bundle's status is updated.Possible values are:AcceptedCanceledCannot CompleteCompletedDispatchedIn ProgressNoneRejectedScheduledThe default value is None. |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionThe name of the Appointment Bundle Config. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionID of the owner of this object.This is a polymorphic relationship field.Relationship NameOwnerRelationship TypeLookupRefers ToGroup, User |
| RemoveFromBundleStatuses | TypemultipicklistPropertiesCreate, Defaulted on create, Filter, Nillable, UpdateDescriptionThe statuses of service appointments that are allowed to be removed from a bundle.Possible values are:AcceptedCanceledCannot CompleteCompletedDispatchedIn ProgressNoneRejectedScheduledThe default value is None. |
| StatusOnRemovalFromBundle | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionThe status that a service appointment is given when it’s removed from a bundle.Possible values are:AcceptedCanceledCannot CompleteCompletedDispatchedIn ProgressNoneRejectedScheduledThe default value is None. |
| StatusesNotToUpdateOnUnbundle | TypemultipicklistPropertiesCreate, Defaulted on create, Filter, Nillable, UpdateDescriptionThe statuses that aren’t updated when a bundle is unbundled.Possible values are:AcceptedCanceledCannot CompleteCompletedDispatchedIn ProgressNoneRejectedScheduledThe default value is None. |
