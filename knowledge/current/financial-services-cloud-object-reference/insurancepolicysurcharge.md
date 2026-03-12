---
title: "InsurancePolicySurcharge"
domain: financial-services-cloud-object-reference
topic: insurancepolicysurcharge
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:30.753Z
estimatedTokens: 1567
keywords: [InsurancePolicySurcharge, charges, calculated, insurance, policy, assets, coverages, participants, region, API, version, 51.0, later, Calls, Associated]
---

# InsurancePolicySurcharge

> Represents the charges calculated for an insurance policy and its related
      assets, coverages, and participants in a region. This object is available in API version
    51.0 and later.

# InsurancePolicySurcharge

Represents the charges calculated for an insurance policy and its related assets, coverages, and participants in a region. This object is available in API version 51.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| ApplicableObjectType | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionSpecifies the item on which the surcharge was applied.Possible values are:InsurancePolicyAsset—Insurance Policy AssetInsurancePolicyCoverage—Insurance Policy CoverageInsurancePolicyParticipant—Insurance Policy Participant |
| InsurancePolicyAssetId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe insurance policy asset associated with the surcharge. |
| InsurancePolicyCoverageId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe insurance policy coverage associated with the surcharge. |
| InsurancePolicyId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe insurance policy associated with the surcharge. |
| InsurancePolicyParticipantId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe insurance policy participant associated with the surcharge. |
| InsurancePolicyTransactionId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe insurance policy transaction associated with the surcharge. |
| IsProrationAllowed | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the term surcharge amount is prorated based on the policy duration.The default value is false. |
| IsRefundAllowed | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the term surcharge amount is eligible for refund.The default value is false. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed a record related to this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed this record. If this value is null, it’s possible that this record was referenced (LastReferencedDate) and not viewed. |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionThe name of the insurance policy surcharge. |
| ProductSurchargeId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe product surcharge associated with an insurance policy surcharge.This field is a relationship field. |
| SourceSystem | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe name of the system from which this insurance policy surcharge was obtained. |
| SourceSystemIdentifier | TypestringPropertiesCreate, Filter, Group, idLookup, Nillable, Sort, UpdateDescriptionThe ID of the insurance policy surcharge record in the source system. This field is unique within your organization. |
| SurchargeAmount | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe surcharge amount calculated for an insurance policy, insurance policy asset, insurance policy coverage, or an insurance policy participant. This surcharge is calculated based on the tax and fee structure defined for products or can be retrieved from a source system. |
| TermSurchargeAmount | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe surcharge amount calculated for the duration of an insurance policy, insurance policy asset, insurance policy coverage, or insurance policy participant. |
| Type | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionSpecifies the type of surcharge.Possible values are:FeeTax |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[InsurancePolicySurchargeChangeEvent](atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/sforce_api_associated_objects_change_event.htm "A ChangeEvent object is available for each object that supports Change Data Capture. You can subscribe to a stream of change events using Change Data Capture to receive data tied to record changes in Salesforce. Changes include record creation, updates to an existing record, deletion of a record, and undeletion of a record. A change event isn’t a Salesforce object—it doesn’t support CRUD operations or queries. It’s included in the object reference so you can discover which Salesforce objects support change events.")

Change events are available for the object in API version 62.0 and later.

[InsurancePolicySurchargeHistory](atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

[InsurancePolicySurchargeOwnerSharingRule](atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/sforce_api_associated_objects_ownersharingrule.htm "StandardObjectNameOwnerSharingRule is the model for all owner sharing rule objects associated with standard objects. These objects represent a rule for sharing a standard object with users other than the owner.")

Sharing rules are available for the object.

[InsurancePolicySurchargeShare](atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/sforce_api_associated_objects_share.htm "StandardObjectNameShare is the model for all share objects associated with standard objects. These objects represent a sharing entry on the standard object.")

Sharing is available for the object.

## Related Topics

- InsurancePolicySurchargeChangeEvent (atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/sforce_api_associated_objects_change_event.htm)
- InsurancePolicySurchargeHistory (atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/sforce_api_associated_objects_history.htm)
- InsurancePolicySurchargeOwnerSharingRule (atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/sforce_api_associated_objects_ownersharingrule.htm)
- InsurancePolicySurchargeShare (atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/sforce_api_associated_objects_share.htm)
