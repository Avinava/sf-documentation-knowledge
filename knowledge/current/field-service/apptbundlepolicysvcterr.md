---
title: "ApptBundlePolicySvcTerr"
domain: field-service
topic: apptbundlepolicysvcterr
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:54.087Z
estimatedTokens: 423
keywords: [ApptBundlePolicySvcTerr, link, BundlePolicy, ServiceTerritory, API, version, 54.0, later, Calls, Special, Access, Rules]
---

# ApptBundlePolicySvcTerr

> Represents a link between the BundlePolicy and the ServiceTerritory.
      This object is available in API version 54.0 and later.

# ApptBundlePolicySvcTerr

Represents a link between the BundlePolicy and the ServiceTerritory. This object is available in API version 54.0 and later.

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
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionThe name of the appointment bundle service territory. |
| ServiceTerritoryId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe ID of the service territory.This is a relationship field.Relationship NameServiceTerritoryRelationship TypeLookupRefers ToServiceTerritory |
