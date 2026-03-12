---
title: "BillingPolicy"
domain: object-reference
topic: billingpolicy
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:35:05.519Z
estimatedTokens: 827
keywords: [BillingPolicy, group, billing, treatments, define, rules, how, invoice, customer, order, item, API, version, 55.0, later]
---

# BillingPolicy

> Represents a group of billing treatments, which define the rules for how to
         invoice a customer for an order item. This object is available in API version 55.0 and
      later.

# BillingPolicy

Represents a group of billing treatments, which define the rules for how to invoice a customer for an order item. This object is available in API version 55.0 and later.

Billing policies are related to products, which pass the policy on to the resulting order items. When an order is activated, Subscription Management assigns a billing treatment to each order item based on the values in the BillingTreatmentSelection field. Then Subscription Management uses the billing treatment to create billing schedules.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), undelete(), update(), upsert()

## Special Access Rules

This object is available with Subscription Management and Billing (Revenue Cloud).

For information about this object that's available with Billing (Revenue Cloud), including its special access rules, see the [Revenue Cloud Developer Guide](https://developer.salesforce.com/docs/atlas.en-us.260.0.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/sforce_api_objects_billingpolicy.htm "HTML (New Window)").

## Fields

| Field | Details |
| --- | --- |
| BillingTreatmentSelection | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, Sort, UpdateDescriptionDefines how Subscription Management assigns billing treatments to order items and to assets related to the billing policy.Possible values are:Default—The value specified in the DefaultBillingTreatmentId field is automatically applied to order items and assets.Manual—Users must specify the billing treatment that's applied to the order items and assets. |
| DefaultBillingTreatmentId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionWhen BillingTreatmentSelection has a value of Default, Subscription Management uses the selected billing treatment for all order items and assets related to the billing policy.This field is a relationship field.Relationship NameDefaultBillingTreatmentRelationship TypeLookupRefers ToBillingTreatment |
| Description | TypetextareaPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionOptional user-defined description that describes the billing policy. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last accessed this record, a record related to this record, or a list view. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last viewed this record or list view. If this value is null, the user might have only accessed this record or list view (LastReferencedDate) but not viewed it. |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionOptional user-defined name for the billing policy. |
| Status | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, Sort, UpdateDescriptionThe billing policy's status.Possible values are:Active—Indicates that the billing policy is available for use on products.Draft—Indicates that the billing policy isn't available for use on products. Use this status when creating billing policies that aren't ready to be activated.Inactive—Indicates that the billing policy isn't available for use on products. |
