---
title: "Coupon"
domain: object-reference
topic: coupon
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:07.502Z
estimatedTokens: 976
keywords: [Coupon, associated, promotion, API, version, 54.0, later, Calls, Special, Access, Rules, Objects]
---

# Coupon

> A coupon associated with a promotion. This object is available in API
      version 54.0 and later.

# Coupon

A coupon associated with a promotion. This object is available in API version 54.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Special Access Rules

The Coupon object is available only if the B2B Commerce license is enabled.

## Fields

| Field | Details |
| --- | --- |
| CouponCode | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionCoupon code for the coupon. A buyer can use the coupon code to qualify for a promotion. |
| CurrencyIsoCode | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionAvailable only for orgs with the multicurrency feature enabled. Contains the ISO code for any currency allowed by the organization. |
| Description | TypetextareaPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionDescription of the coupon. |
| EndDateTime | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe end date and time when the coupon is no longer active. |
| LastReferencedDate | TypedatetimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last accessed this record, a record related to this record, or a list view. |
| LastViewedDate | TypedatetimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last viewed this record or list view. If this value is null, the user might have only accessed this record or list view (LastReferencedDate) but not viewed it. |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionName of the coupon. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionThe ID of the owner of this coupon.This is a polymorphic relationship field.Relationship NameOwnerRelationship TypeLookupRefers ToGroup, User |
| PromotionId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionID of the promotion associated with the coupon.This is a relationship field.Relationship NamePromotionRelationship TypeLookupRefers ToPromotion |
| RedemptionLimitAllBuyers | TypeintPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionNumber of times this coupon can be used in total. This field is available in API version 61.0 and later. |
| RedemptionLimitPerBuyer | TypeintPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionNumber of times this coupon can be used per customer. This field is available in API version 61.0 and later. |
| StartDateTime | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe start date and time when the coupon is active. |
| Status | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Restricted picklist, Sort, UpdateDescriptionStatus of the coupon.Possible values are:ActiveInactiveThe default value is Inactive |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[CouponChangeEvent](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_change_event.htm "A ChangeEvent object is available for each object that supports Change Data Capture. You can subscribe to a stream of change events using Change Data Capture to receive data tied to record changes in Salesforce. Changes include record creation, updates to an existing record, deletion of a record, and undeletion of a record. A change event isn’t a Salesforce object—it doesn’t support CRUD operations or queries. It’s included in the object reference so you can discover which Salesforce objects support change events.") (API version 62.0)

Change events are available for the object.

## Related Topics

- CouponChangeEvent (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_change_event.htm)
