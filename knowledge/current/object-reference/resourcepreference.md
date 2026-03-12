---
title: "ResourcePreference"
domain: object-reference
topic: resourcepreference
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:16.275Z
estimatedTokens: 978
keywords: [ResourcePreference, account’s, preference, service, resource, work, Calls, Special, Access, Rules, Associated, Objects]
---

# ResourcePreference

> Represents an account’s preference for a specified service resource
			on field service work.

# ResourcePreference

Represents an account’s preference for a specified service resource on field service work.

Resource preferences indicate which service resources can be assigned to field service work. You can designate service resources as preferred, required, or excluded on specific accounts, assets, locations, work orders, or work order line items. Work orders inherit their associated account’s resource preferences.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), update(), upsert()

## Special Access Rules

Field Service must be enabled.

## Fields

| Field Name | Details |
| --- | --- |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe date when the resource preference was last modified. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe date when the resource preference was last viewed. |
| PreferenceType | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Restricted picklist, Sort, UpdateDescriptionResource preference type. Values include:Preferred: Indicates that the customer would like their field service work assigned to the resource.Required: Indicates that the resource must be assigned to the customer’s field service work.Excluded: Indicates that the customer doesn’t want their field service work assigned to the resource.Resource preferences serve more as a suggestion than a requirement. You can still assign a service appointment to any resource regardless of the related work order’s resource preferences. |
| RelatedRecordId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe work order or account with the resource preference.This field is a polymorphic relationship.Relationship NameRelatedRecordRelationship TypeLookupRefers ToAccounts, Assets, Locations, Work Orders, or Work Order Line Items |
| ResourcePreferenceNumber | TypestringPropertiesAutonumber, Defaulted on create, Filter, SortDescriptionAn auto-generated number identifying the resource preference. |
| ServiceResourceId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe service resource that is preferred, required, or excluded.This is a relationship field.Relationship NameServiceResourceRelationship TypeLookupRefers ToServiceResource |

## Associated Objects

This object has these associated objects. Unless noted, they’re available in the same API version as this object.

[ResourcePreferenceChangeEvent](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_change_event.htm "A ChangeEvent object is available for each object that supports Change Data Capture. You can subscribe to a stream of change events using Change Data Capture to receive data tied to record changes in Salesforce. Changes include record creation, updates to an existing record, deletion of a record, and undeletion of a record. A change event isn’t a Salesforce object—it doesn’t support CRUD operations or queries. It’s included in the object reference so you can discover which Salesforce objects support change events.") (API version 54.0)

Change events are available for the object.

[ResourcePreferenceFeed](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.")

Feed tracking is available for the object.

[ResourcePreferenceHistory](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

## Related Topics

- ResourcePreferenceChangeEvent (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_change_event.htm)
- ResourcePreferenceFeed (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_feed.htm)
- ResourcePreferenceHistory (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_history.htm)
