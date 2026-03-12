---
title: "StandardCareFeeAgreement"
domain: health-cloud-object-reference
topic: standardcarefeeagreement
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:38.132Z
estimatedTokens: 982
keywords: [StandardCareFeeAgreement, payment, terms, contracts, Standard, Care, Fee, Agreement, API, version, 54.0, later, Provider, Network, Management]
---

# StandardCareFeeAgreement

> Specifies the payment terms for contracts of Standard Care Fee Agreement
         type. This object is available in API version 54.0 and later with the Provider Network
      Management permission set license.

# StandardCareFeeAgreement

Specifies the payment terms for contracts of Standard Care Fee Agreement type. This object is available in API version 54.0 and later with the Provider Network Management permission set license.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| ContractPaymentAgreementId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe contract payment agreement record to which this standard care fee agreement is associated.This is a relationship field.Relationship NameContractPaymentAgreementRelationship TypeMaster-DetailRefers ToContractPaymentAgreement |
| FacilityPrice | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe fees when the procedure is performed in a facility location such as a hospital or Ambulatory Surgical Center (ASC). |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe most recent date on which a user referenced the record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe most recent date on which a user viewed the record. |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionThe name of the standard care fee agreement. |
| NonFacilityPrice | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe fees when the procedure is performed in a non-facility location such as the physician's office. |
| ProcedureCodeDescription | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe description of the procedure code. |
| ProcedureCodeId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe industry standard code for the procedure such as CPT or HCPCS.This is a relationship field.Relationship NameProcedureCodeRelationship TypeLookupRefers ToCodeSetBundle |
| StdCareFeeAgreementKey | TypestringPropertiesCreate, Filter, Group, idLookup, Nillable, Sort, UpdateDescriptionA unique key assigned to the Standard Care Fee Agreement record. |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[StandardCareFeeAgreementFeed](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.")

Feed tracking is available for the object.

[StandardCareFeeAgreementHistory](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

[StandardCareFeeAgreementChangeEvent](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_change_event.htm "A ChangeEvent object is available for each object that supports Change Data Capture. You can subscribe to a stream of change events using Change Data Capture to receive data tied to record changes in Salesforce. Changes include record creation, updates to an existing record, deletion of a record, and undeletion of a record. A change event isn’t a Salesforce object—it doesn’t support CRUD operations or queries. It’s included in the object reference so you can discover which Salesforce objects support change events.") (API version 61.0)

Change events are available for the object.

## Related Topics

- StandardCareFeeAgreementFeed (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_feed.htm)
- StandardCareFeeAgreementHistory (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_history.htm)
- StandardCareFeeAgreementChangeEvent (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_change_event.htm)
