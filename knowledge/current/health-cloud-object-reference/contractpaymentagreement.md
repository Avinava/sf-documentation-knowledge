---
title: "ContractPaymentAgreement"
domain: health-cloud-object-reference
topic: contractpaymentagreement
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:36.908Z
estimatedTokens: 1308
keywords: [ContractPaymentAgreement, Stores, contract, payment, agreement, associated, API, version, 54.0, later, Provider, Network, Management, permission, license]
---

# ContractPaymentAgreement

> Stores information about the contract payment agreement associated with a
         contract. This object is available in API version 54.0 and later with the Provider
      Network Management permission set license.

# ContractPaymentAgreement

Stores information about the contract payment agreement associated with a contract. This object is available in API version 54.0 and later with the Provider Network Management permission set license.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| AgreementType | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, Sort, UpdateDescriptionThe payment type supported in the contract payment agreement.Possible values are:Bundled Care Fee AgreementCapitation Care Fee AgreementCategorized Care Fee AgreementPercentile Based Care Fee AgreementPreventive Care AgreementShared Saving Payment AgreementStandard Care Fee Agreement |
| ContractId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe contract associated with the contract payment agreement.This is a relationship field.Relationship NameContractRelationship TypeMaster-DetailRefers ToContract |
| ContractPaymentAgreementKey | TypestringPropertiesCreate, Filter, Group, idLookup, Nillable, Sort, UpdateDescriptionA unique key assigned to the Contract Payment Agreement record. |
| Description | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionThe description of the contract payment agreement. |
| EligibleProcedureCodeList | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionThe procedure codes that are covered in the contract payment agreement. This value is applicable for Capitation and Shared Savings payment type. |
| EndDateTime | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe end date until when the contract payment agreement is effective. |
| FeeScheduleDefinitionId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe fee schedule definition record associated with the contract payment agreement. This value is applicable only for Fee-for-Service payment types.This is a relationship field.Relationship NameFeeScheduleDefinitionRelationship TypeLookupRefers ToFeeScheduleDefinition |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe most recent date on which a user referenced the record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe most recent date on which a user viewed the record. |
| LineofBusiness | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe line of business to which the contract payment agreement is applicable.Possible values are:CommercialMedi-CalMedicaidMedicare |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionThe name of the contract payment agreement associated with the contract. |
| StandardFeeCalculationPercentage | TypepercentPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe percentage of the baseline fees of the fee schedule definition that's used to calculate the negotiated fees for the Fee-for-Service payment types. |
| StartDateTime | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe start date from when the contract payment agreement is effective. |
| Status | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe status of the contract payment agreement.Possible values are:ACTIVATED—ActivatedDEACTIVATED—DeactivatedDRAFT—Draft |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[ContractPaymentAgreementFeed](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.")

Feed tracking is available for the object.

[ContractPaymentAgreementHistory](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

[ContractPaymentAgreementChangeEvent](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_change_event.htm "A ChangeEvent object is available for each object that supports Change Data Capture. You can subscribe to a stream of change events using Change Data Capture to receive data tied to record changes in Salesforce. Changes include record creation, updates to an existing record, deletion of a record, and undeletion of a record. A change event isn’t a Salesforce object—it doesn’t support CRUD operations or queries. It’s included in the object reference so you can discover which Salesforce objects support change events.") (API version 61.0)

Change events are available for the object.

## Related Topics

- ContractPaymentAgreementFeed (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_feed.htm)
- ContractPaymentAgreementHistory (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_history.htm)
- ContractPaymentAgreementChangeEvent (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_change_event.htm)
