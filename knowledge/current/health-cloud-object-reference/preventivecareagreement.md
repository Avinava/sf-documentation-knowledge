---
title: "PreventiveCareAgreement"
domain: health-cloud-object-reference
topic: preventivecareagreement
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:37.855Z
estimatedTokens: 970
keywords: [PreventiveCareAgreement, payment, terms, contracts, Preventive, Care, Fee, Agreement, API, version, 54.0, later, Provider, Network, Management]
---

# PreventiveCareAgreement

> Specifies the payment terms for contracts of Preventive Care Fee
         Agreement. This object is available in API version 54.0 and later with the Provider
      Network Management permission set license.

# PreventiveCareAgreement

Specifies the payment terms for contracts of Preventive Care Fee Agreement. This object is available in API version 54.0 and later with the Provider Network Management permission set license.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| AdditionalInformation | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionAdditional information on the bonus payout and target expectation. |
| BonusMeasureDescription | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe description of the bonus measure type. |
| BonusMeasureType | TypestringPropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe measure type used to define the bonus payout such as Preventive Readmission Rate and Preventive Admission Rate. |
| BonusPayout | TypecurrencyPropertiesCreate, Filter, Sort, UpdateDescriptionThe bonus paid on reaching the target measure percentage. |
| ContractPaymentAgreementId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe contract payment agreement record to which this preventive care fee agreement is associated.This is a relationship field.Relationship NameContractPaymentAgreementRelationship TypeMaster-DetailRefers ToContractPaymentAgreement |
| CurrentMeasurePercent | TypepercentPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe current percentage of the specified measure. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe most recent date on which a user referenced the record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe most recent date on which a user viewed the record. |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionThe name of the preventive care fee agreement. |
| TargetMeasurePercent | TypepercentPropertiesCreate, Filter, Sort, UpdateDescriptionThe expected percentage of the specified measure. |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[PreventiveCareAgreementFeed](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.")

Feed tracking is available for the object.

[PreventiveCareAgreementHistory](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

[PreventiveCareAgreementChangeEvent](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_change_event.htm "A ChangeEvent object is available for each object that supports Change Data Capture. You can subscribe to a stream of change events using Change Data Capture to receive data tied to record changes in Salesforce. Changes include record creation, updates to an existing record, deletion of a record, and undeletion of a record. A change event isn’t a Salesforce object—it doesn’t support CRUD operations or queries. It’s included in the object reference so you can discover which Salesforce objects support change events.") (API version 61.0)

Change events are available for the object.

## Related Topics

- PreventiveCareAgreementFeed (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_feed.htm)
- PreventiveCareAgreementHistory (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_history.htm)
- PreventiveCareAgreementChangeEvent (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_change_event.htm)
