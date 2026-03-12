---
title: "SharedSavingPaymentAgreement"
domain: health-cloud-object-reference
topic: sharedsavingpaymentagreement
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:38.120Z
estimatedTokens: 1056
keywords: [SharedSavingPaymentAgreement, payment, terms, contracts, Shared, Saving, Agreement, API, version, 54.0, later, Provider, Network, Management, permission]
---

# SharedSavingPaymentAgreement

> Specifies the payment terms for contracts of Shared Saving Payment Agreement
         type. This object is available in API version 54.0 and later with the Provider Network
      Management permission set license.

# SharedSavingPaymentAgreement

Specifies the payment terms for contracts of Shared Saving Payment Agreement type. This object is available in API version 54.0 and later with the Provider Network Management permission set license.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| BenchmarkEndDateTime | TypedateTimePropertiesCreate, Filter, Sort, UpdateDescriptionThe end date of the benchmark period based on which the profit or loss is determined for the Shared Saving payment type. |
| BenchmarkStartDateTime | TypedateTimePropertiesCreate, Filter, Sort, UpdateDescriptionThe start date of the benchmark period based on which the profit or loss is determined for the Shared Saving payment type. |
| BenchmarkedExpenditureAmount | TypecurrencyPropertiesCreate, Filter, Sort, UpdateDescriptionThis is the expenditure amount for the selected benchmark period. |
| ContractPaymentAgreementId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe contract payment agreement record to which this shared savings payment agreement is associated.This is a relationship field.Relationship NameContractPaymentAgreementRelationship TypeMaster-DetailRefers ToContractPaymentAgreement |
| ForecastedExpenditureAmount | TypecurrencyPropertiesCreate, Filter, Sort, UpdateDescriptionThis is the expenditure amount that's forecasted for the contract payment agreement duration. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe most recent date on which a user referenced the record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe most recent date on which a user viewed the record. |
| LossPlanDescription | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionThe description of the shared savings payment agreement in case of a loss. |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionThe name of the shared savings payment agreement. |
| ProfitPlanDescription | TypetextareaPropertiesCreate, UpdateDescriptionThe description of the shared savings payment agreement when a profit is attained. |
| QualifyingProfitPercentage | TypepercentPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe minimum profit percentage to be reached to share the profit. |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[SharedSavingPaymentAgreementFeed](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.")

Feed tracking is available for the object.

[SharedSavingPaymentAgreementHistory](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

[SharedSavingPaymentAgreementChangeEvent](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_change_event.htm "A ChangeEvent object is available for each object that supports Change Data Capture. You can subscribe to a stream of change events using Change Data Capture to receive data tied to record changes in Salesforce. Changes include record creation, updates to an existing record, deletion of a record, and undeletion of a record. A change event isn’t a Salesforce object—it doesn’t support CRUD operations or queries. It’s included in the object reference so you can discover which Salesforce objects support change events.") (API version 61.0)

Change events are available for the object.

## Related Topics

- SharedSavingPaymentAgreementFeed (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_feed.htm)
- SharedSavingPaymentAgreementHistory (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_history.htm)
- SharedSavingPaymentAgreementChangeEvent (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_change_event.htm)
