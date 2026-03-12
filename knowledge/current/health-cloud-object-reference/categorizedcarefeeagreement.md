---
title: "CategorizedCareFeeAgreement"
domain: health-cloud-object-reference
topic: categorizedcarefeeagreement
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:36.794Z
estimatedTokens: 953
keywords: [CategorizedCareFeeAgreement, payment, terms, contracts, Categorized, Care, Fee, Agreement, API, version, 54.0, later, Provider, Network, Management]
---

# CategorizedCareFeeAgreement

> Specifies the payment terms for contracts of Categorized Care Fee
         Agreement. This object is available in API version 54.0 and later with the Provider
      Network Management permission set license.

# CategorizedCareFeeAgreement

Specifies the payment terms for contracts of Categorized Care Fee Agreement. This object is available in API version 54.0 and later with the Provider Network Management permission set license.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| CategorizedCareFeeAgreeKey | TypestringPropertiesCreate, Filter, Group, idLookup, Nillable, Sort, UpdateDescriptionA unique key assigned to the Categorized Care Fee Agreement record. |
| ContractPaymentAgreementId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe contract payment agreement record to which this categorized care fee agreement is associated.This is a relationship field.Relationship NameContractPaymentAgreementRelationship TypeMaster-DetailRefers ToContractPaymentAgreement |
| Description | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe description of the procedure category. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe most recent date on which a user referenced the record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe most recent date on which a user viewed the record. |
| LineofBusiness | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe line of business for which the agreed upon fee is applicable.Possible values are:CommercialMedi-CalMedicare |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionThe name of the categorized care fee agreement. |
| PricingInformation | TypestringPropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe agreed upon fee for the procedure category. |
| ProcedureCategory | TypestringPropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe category of procedures covered in the Categorized Care Fee Agreement, such as Immunization. |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[CategorizedCareFeeAgreementChangeEvent](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_change_event.htm "A ChangeEvent object is available for each object that supports Change Data Capture. You can subscribe to a stream of change events using Change Data Capture to receive data tied to record changes in Salesforce. Changes include record creation, updates to an existing record, deletion of a record, and undeletion of a record. A change event isn’t a Salesforce object—it doesn’t support CRUD operations or queries. It’s included in the object reference so you can discover which Salesforce objects support change events.") (API version 61.0)

Change events are available for the object.

[CategorizedCareFeeAgreementFeed](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.")

Feed tracking is available for the object.

[CategorizedCareFeeAgreementHistory](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

## Related Topics

- CategorizedCareFeeAgreementChangeEvent (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_change_event.htm)
- CategorizedCareFeeAgreementFeed (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_feed.htm)
- CategorizedCareFeeAgreementHistory (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_history.htm)
