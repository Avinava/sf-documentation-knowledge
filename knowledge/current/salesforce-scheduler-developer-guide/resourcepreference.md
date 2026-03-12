---
title: "ResourcePreference"
domain: salesforce-scheduler-developer-guide
topic: resourcepreference
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:43.727Z
estimatedTokens: 577
keywords: [ResourcePreference, account’s, preference, service, resource, Calls, Associated, Objects]
---

# ResourcePreference

> Represents an account’s preference for a specified service
			resource.

# ResourcePreference

Represents an account’s preference for a specified service resource.

Resource preferences indicate which service resources should be assigned to a service appointment. You can designate service resources as preferred, required, or excluded on accounts.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), update(), upsert()

## Fields

| Field Name | Details |
| --- | --- |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe date when the resource preference was last modified. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe date when the resource preference was last viewed. |
| PreferenceType | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Restricted picklist, Sort, UpdateDescriptionResource preference type. Values include:Preferred— Indicates that the user would like their appointment assigned to the resource.Required— Indicates that the resource must be assigned to the appointment.Excluded— Indicates that the resource must not be assigned to the appointment.Resource preferences serve more as a suggestion than a requirement. You can still assign a service appointment to any resource regardless of the related account’s resource preferences. |
| RelatedRecordId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe account with the resource preference.This is a polymorphic relationship field.Relationship NameRelatedRecordRelationship TypeLookupRefers ToAccount |
| ResourcePreferenceNumber | TypestringPropertiesAutonumber, Defaulted on create, Filter, SortDescriptionAn auto-generated number identifying the resource preference. |
| ServiceResourceId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe service resource that is preferred, required, or excluded.This is a relationship field.Relationship NameServiceResourceRelationship TypeLookupRefers ToServiceResource |

## Associated Objects

This object has the following associated objects. Unless noted, they are available in the same API version as this object.

ResourcePreferenceFeed

Feed tracking is available for the object.

ResourcePreferenceHistory

History is available for tracked fields of the object.
