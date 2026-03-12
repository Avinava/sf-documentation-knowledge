---
title: "CapitationCareFeeAgreement"
domain: health-cloud-object-reference
topic: capitationcarefeeagreement
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:36.105Z
estimatedTokens: 962
keywords: [CapitationCareFeeAgreement, payment, terms, contracts, Capitation, Care, Fee, Agreement, API, version, 54.0, later, Provider, Network, Management]
---

# CapitationCareFeeAgreement

> Specifies the payment terms for contracts of Capitation Care Fee Agreement
         type. This object is available in API version 54.0 and later with the Provider Network
      Management permission set license.

# CapitationCareFeeAgreement

Specifies the payment terms for contracts of Capitation Care Fee Agreement type. This object is available in API version 54.0 and later with the Provider Network Management permission set license.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| ContractPaymentAgreementId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe contract payment agreement record to which this capitation care fee agreement is associated.This is a relationship field.Relationship NameContractPaymentAgreementRelationship TypeMaster-DetailRefers ToContractPaymentAgreement |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe most recent date on which a user referenced the record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe most recent date on which a user viewed the record. |
| MemberAgeRangeLowerLimit | TypeintPropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe lower age limit of the enrolled member for the capitation care fee agreement. |
| MemberAgeRangeUpperLimit | TypeintPropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe upper age limit of the enrolled member for the capitation care fee agreement. |
| MonthlyBalanceFee | TypecurrencyPropertiesFilter, Nillable, SortDescriptionThe balance fee for each member after the monthly withheld fee.This is a calculated field. |
| MonthlyFee | TypecurrencyPropertiesCreate, Filter, Sort, UpdateDescriptionThe fee agreed upon by the provider and payer for each member per month. |
| MonthlyWithheldPercentage | TypepercentPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe percentage of the monthly fee that's withheld by the payer and shared later with the provider based on the performance. |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionThe name of the capitation care fee agreement. |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[CapitationCareFeeAgreementFeed](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.")

Feed tracking is available for the object.

[CapitationCareFeeAgreementHistory](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

[CapitationCareFeeAgreementChangeEvent](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_change_event.htm "A ChangeEvent object is available for each object that supports Change Data Capture. You can subscribe to a stream of change events using Change Data Capture to receive data tied to record changes in Salesforce. Changes include record creation, updates to an existing record, deletion of a record, and undeletion of a record. A change event isn’t a Salesforce object—it doesn’t support CRUD operations or queries. It’s included in the object reference so you can discover which Salesforce objects support change events.") (API version 61.0)

Change events are available for the object.

## Related Topics

- CapitationCareFeeAgreementFeed (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_feed.htm)
- CapitationCareFeeAgreementHistory (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_history.htm)
- CapitationCareFeeAgreementChangeEvent (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_change_event.htm)
