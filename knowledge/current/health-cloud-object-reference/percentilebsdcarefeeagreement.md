---
title: "PercentileBsdCareFeeAgreement"
domain: health-cloud-object-reference
topic: percentilebsdcarefeeagreement
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:37.782Z
estimatedTokens: 1232
keywords: [PercentileBsdCareFeeAgreement, payment, terms, contracts, Percentile, Care, Fee, Agreement, API, version, 54.0, later, Provider, Network, Management]
---

# PercentileBsdCareFeeAgreement

> Specifies the payment terms for contracts of Percentile Based Care Fee
         Agreement. This object is available in API version 54.0 and later with the Provider
      Network Management permission set license.

# PercentileBsdCareFeeAgreement

Specifies the payment terms for contracts of Percentile Based Care Fee Agreement. This object is available in API version 54.0 and later with the Provider Network Management permission set license.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| BracketInformation | TypestringPropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe description of the percentile bracket information. |
| ContractPaymentAgreementId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe contract payment agreement record to which this percentile based care fee agreement is associated.This is a relationship field.Relationship NameContractPaymentAgreementRelationship TypeMaster-DetailRefers ToContractPaymentAgreement |
| FifthBracketPrice | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe price for the procedure if the member falls into the fifth percentile bracket based on the factor considered by the payer. |
| FirstBracketPrice | TypecurrencyPropertiesCreate, Filter, Sort, UpdateDescriptionThe price for the procedure if the member falls into the first percentile bracket based on the factor considered by the payer. |
| FourthBracketPrice | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe price for the procedure if the member falls into the fourth percentile bracket based on the factor considered by the payer. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe most recent date on which a user referenced the record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe most recent date on which a user viewed the record. |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionThe name of the percentile based care fee agreement. |
| ProcedureCodeDescription | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe description of the procedure code. |
| ProcedureCodeId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe industry standard code for the procedure such as CPT or HCPCS.This is a relationship field.Relationship NameProcedureCodeRelationship TypeLookupRefers ToCodeSetBundle |
| RelativeValueUnit | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe relative value unit for the procedure. |
| SecondBracketPrice | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe price for the procedure if the member falls into the second percentile bracket based on the factor considered by the payer. |
| StandardPrice | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe standard price for the procedure defined by the governing body. |
| ThirdBracketPrice | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe price for the procedure if the member falls into the third percentile bracket based on the factor considered by the payer. |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[PercentileBsdCareFeeAgreementFeed](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.")

Feed tracking is available for the object.

[PercentileBsdCareFeeAgreementHistory](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

[PercentileBsdCareFeeAgreementChangeEvent](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_change_event.htm "A ChangeEvent object is available for each object that supports Change Data Capture. You can subscribe to a stream of change events using Change Data Capture to receive data tied to record changes in Salesforce. Changes include record creation, updates to an existing record, deletion of a record, and undeletion of a record. A change event isn’t a Salesforce object—it doesn’t support CRUD operations or queries. It’s included in the object reference so you can discover which Salesforce objects support change events.") (API version 61.0)

Change events are available for the object.

## Related Topics

- PercentileBsdCareFeeAgreementFeed (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_feed.htm)
- PercentileBsdCareFeeAgreementHistory (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_history.htm)
- PercentileBsdCareFeeAgreementChangeEvent (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_change_event.htm)
