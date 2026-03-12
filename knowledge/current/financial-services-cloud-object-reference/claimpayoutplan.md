---
title: "ClaimPayoutPlan"
domain: financial-services-cloud-object-reference
topic: claimpayoutplan
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:29.806Z
estimatedTokens: 1047
keywords: [ClaimPayoutPlan, payout, plan, claim, payment, frequency, duration, payouts, API, version, 56.0, later, Calls, Associated, Objects]
---

# ClaimPayoutPlan

> Represents the payout plan details for a claim, such as payment frequency, duration, and payouts. This object is available in API version 56.0 and later.

# ClaimPayoutPlan

Represents the payout plan details for a claim, such as payment frequency, duration, and payouts. This object is available in API version 56.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| ClaimId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe claim associated with the claim payout plan.This field is a relationship field.Relationship NameClaimRelationship TypeLookupRefers ToClaim |
| CurrencyIsoCode | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionIf multiple currencies are enabled, this field contains the currency ISO code associated with the record.Possible values are:AED—UAE DirhamCAD—Canadian DollarGBP—British PoundJPY—Japanese YenUSD—U.S. DollarThe default value is USD. |
| EndDate | TypedatePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe date the claim payout plan ends. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last accessed this record, a record related to this record, or a list view. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last viewed this record or list view. |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionName of the claim payout plan. |
| PaymentFrequency | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, Sort, UpdateDescriptionSpecifies the frequency of the payment if the coverage entails a recurring payout to the insured.Possible values are:Bi-WeeklyMonthlyWeeklyYearly |
| PlannedPaymentAmount | TypecurrencyPropertiesCreate, Filter, Sort, UpdateDescriptionThe amount paid to the party at each payout. |
| PreviousClaimPayoutPlanId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe previous payout plan associated with the claim payout plan.This field is a relationship field.Relationship NamePreviousClaimPayoutPlanRelationship TypeLookupRefers ToClaimPayoutPlan |
| StartDate | TypedatePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe date the claim payout plan starts. |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[ClaimPayoutPlanChangeEvent](atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/sforce_api_associated_objects_change_event.htm "A ChangeEvent object is available for each object that supports Change Data Capture. You can subscribe to a stream of change events using Change Data Capture to receive data tied to record changes in Salesforce. Changes include record creation, updates to an existing record, deletion of a record, and undeletion of a record. A change event isn’t a Salesforce object—it doesn’t support CRUD operations or queries. It’s included in the object reference so you can discover which Salesforce objects support change events.")

Change events are available for the object in API version 63.0 and later.

[ClaimPayoutPlanFeed](atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.")

Feed tracking is available for the object.

[ClaimPayoutPlanHistory](atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

## Related Topics

- ClaimPayoutPlanChangeEvent (atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/sforce_api_associated_objects_change_event.htm)
- ClaimPayoutPlanFeed (atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/sforce_api_associated_objects_feed.htm)
- ClaimPayoutPlanHistory (atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/sforce_api_associated_objects_history.htm)
