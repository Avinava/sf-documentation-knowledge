---
title: "CommerceEntitlementPolicy"
domain: object-reference
topic: commerceentitlementpolicy
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:06.647Z
estimatedTokens: 1049
keywords: [CommerceEntitlementPolicy, entitlement, policy, determines, products, prices, user, API, version, 49.0, later, Calls, Special, Access, Rules]
---

# CommerceEntitlementPolicy

> Represents an entitlement policy, which determines what products and prices a
      user can see. This object is available in API version 49.0 and later.

# CommerceEntitlementPolicy

Represents an entitlement policy, which determines what products and prices a user can see. This object is available in API version 49.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Special Access Rules

The CommerceEntitlementPolicy object is available only if the B2B Commerce license is enabled.

## Fields

| Field | Details |
| --- | --- |
| CanViewPrice | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionDetermines whether a user can view the price of a product (true) or not (false). Default value is false. |
| CanViewProduct | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionDetermines whether a user can view the product (true) or not (false). Default value is false. |
| CurrencyIsoCode | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe standard code for the currency.Possible values are:GBP—British PoundUSD—U.S. Dollar |
| Description | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe entitlement policy description. |
| IsActive | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionDetermines if the entitlement policy is active (true) or inactive (false). Default value is false. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed a record related to this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed this record. If this value is null, it can mean that the record was only referenced (LastReferencedDate) and not viewed. |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionThe name of the entitlement policy. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionThe unique ID for the entitlement policy owner. |

## Associated Objects

This object has the following associated objects. Except where noted, these objects are available in the same API version as CommerceEntitlementPolicy.

[CommerceEntitlementPolicyChangeEvent](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_change_event.htm "A ChangeEvent object is available for each object that supports Change Data Capture. You can subscribe to a stream of change events using Change Data Capture to receive data tied to record changes in Salesforce. Changes include record creation, updates to an existing record, deletion of a record, and undeletion of a record. A change event isn’t a Salesforce object—it doesn’t support CRUD operations or queries. It’s included in the object reference so you can discover which Salesforce objects support change events.")

Change events are available for the object.

[CommerceEntitlementPolicyOwnerFeed](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.")

Feed tracking is available for the object.

[CommerceEntitlementPolicyHistory](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

[CommerceEntitlementPolicyOwnerSharingRule](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_ownersharingrule.htm "StandardObjectNameOwnerSharingRule is the model for all owner sharing rule objects associated with standard objects. These objects represent a rule for sharing a standard object with users other than the owner.")

Sharing rules are available for this object.

## Related Topics

- CommerceEntitlementPolicyChangeEvent (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_change_event.htm)
- CommerceEntitlementPolicyOwnerFeed (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_feed.htm)
- CommerceEntitlementPolicyHistory (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_history.htm)
- CommerceEntitlementPolicyOwnerSharingRule (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_ownersharingrule.htm)
