---
title: "PymtSchdDistributionMethod"
domain: object-reference
topic: pymtschddistributionmethod
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:15.755Z
estimatedTokens: 831
keywords: [PymtSchdDistributionMethod, how, total, payment, divided, partial, payments, API, version, 56.0, later, Calls, Special, Access, Rules]
---

# PymtSchdDistributionMethod

> Indicates how the total payment is divided into partial payments. This
      object is available in API version 56.0 and later.

# PymtSchdDistributionMethod

Indicates how the total payment is divided into partial payments. This object is available in API version 56.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Special Access Rules

This object is available with Subscription Management and Billing (Revenue Cloud).

For information about this object that's available with Billing (Revenue Cloud), including its special access rules, see the [Revenue Cloud Developer Guide](https://developer.salesforce.com/docs/atlas.en-us.260.0.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/sforce_api_objects_pymtschddistributionmethod.htm "HTML (New Window)").

## Fields

| Field | Details |
| --- | --- |
| Description | TypetextareaPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionUser-entered description of the payment schedule distribution method. |
| DistributionCount | TypeintPropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe number of payment schedule items for the payment schedule. The payment schedule items are used to distribute the payment schedule’s total payment into partial payments.Possible values are:1—Full distribution. Currently, each payment schedule must have exactly one payment schedule item. |
| DistributionMethodType | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, Sort, UpdateDescriptionDistribution method time interval.Possible values are:FullDistribution—The full amount on the payment schedule is distributed to a single payment schedule item.LumpSum—The specified payment amount on the payment schedule is distributed to a single payment schedule item.Available in API version 65.0 and later with Financial Services and Automotive Cloud.Monthly—The specified payment amount on the payment schedule is distributed evenly across multiple monthly payments.Available in API version 65.0 and later with Financial Services and Automotive Cloud.Quarterly—The specified payment amount on the payment schedule is distributed evenly across multiple quarterly payments.Available in API version 65.0 and later with Financial Services and Automotive Cloud.Weekly—The specified payment amount on the payment schedule is distributed evenly across multiple weekly payments.Available in API version 65.0 and later with Financial Services and Automotive Cloud. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last accessed this record, a record related to this record, or a list view. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last viewed this record or list view. If this value is null, the user might have only accessed this record or list view (LastReferencedDate) but not viewed it. |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionUser-entered name for the payment schedule distribution method. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionID of the owner of this object.This field is a polymorphic relationship field.Relationship NameOwnerRelationship TypeLookupRefers ToGroup, User |
