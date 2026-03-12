---
title: "ApptBundleRestrictPolicy"
domain: object-reference
topic: apptbundlerestrictpolicy
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:04.858Z
estimatedTokens: 639
keywords: [ApptBundleRestrictPolicy, Policy, restrictions, considered, forming, bundle, API, version, 54.0, later, Calls, Special, Access, Rules]
---

# ApptBundleRestrictPolicy

> Policy that defines the restrictions that are considered while forming a
         bundle. This object is available in API version 54.0 and later.

# ApptBundleRestrictPolicy

Policy that defines the restrictions that are considered while forming a bundle. This object is available in API version 54.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Special Access Rules

-   Field Service must be enabled.
-   Bundling must be enabled in the Field Service Settings.
-   The Field Service Admin, Field Service Bundle for Dispatcher, and Field Service Integration permission sets must be enabled.

## Fields

| Field | Details |
| --- | --- |
| BundlePolicyId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionID of the parent bundle policy.This is a relationship field.Relationship NameBundlePolicyRelationship TypeLookupRefers ToApptBundlePolicy |
| DoesAllowEmpty | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionAllows a bundle member service appointment with an empty Restriction Field Name to be bundled. |
| DoesRestrictAutomaticMode | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates if you want to apply this restriction when using the automatic mode. |
| DoesRestrictManualMode | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates if you want to apply this restriction when using the manual mode. |
| IsRestrictByDateOnly | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates if you want the bundle to be restricted according to the calendar date only, ignoring the time of day. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last accessed this record, a record related to this record, or a list view. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last viewed this record or list view. If this value is null, the user might have only accessed this record or list view (LastReferencedDate) but not viewed it. |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionThe name of the appointment bundle restriction policy. |
| RestrictionFieldName | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionName of the field in the service appointment used for applying the restriction.Possible values are: All default and custom Service Appointment fields. |
