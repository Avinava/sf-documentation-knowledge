---
title: "InsurancePolicyAsset"
domain: financial-services-cloud-object-reference
topic: insurancepolicyasset
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-04-07T09:03:50.020Z
estimatedTokens: 2326
keywords: [InsurancePolicyAsset, customer, insured, insurance, policy, Calls, Associated, Objects]
---

# InsurancePolicyAsset

> Represents the customer property insured through the insurance policy.

# InsurancePolicyAsset

Represents the customer property insured through the insurance policy.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| AssetCode | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe unique code of the insurance policy asset across all the policy versions. |
| AssetName | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe insured customer property. This field is available from API version 51.0 and later. |
| BillingTreatmentId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe rules that determine how an insurance policy participant is billed. For example, advance or arrears.This field is a relationship field.Relationship NameBillingTreatmentRefers ToBillingTreatment |
| CustomerPropertyId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe ID of the insured customer property. |
| EffectiveFromDate | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe date from when the asset becomes active on the policy. |
| EffectiveToDate | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe date after when the asset becomes inactive on the policy. |
| InsurancePolicyId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe ID of the insurance policy that covers this customer property. |
| IsActive | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the insurance policy asset is active.The default value is 'false'. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed a record related to this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed this record. If this value is null, it’s possible that this record was referenced (LastReferencedDate) and not viewed. |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, SortDescriptionAn auto-generated number assigned to this record. |
| OriginalAssetId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe ID of the first instance of a specific asset that's used to track it across policy versions created through lifecycle events.This field is a relationship field.Relationship NameOriginalAssetRefers ToInsurancePolicyAsset |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionID of the record owner. |
| PrimaryPolicyParticipantId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe ID of the primary participant on the insurance policy. This field is available from API version 51.0 and later. |
| PriorAssetId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe reference asset from before the policy was endorsed or renewed.This field is a relationship field.Relationship NamePriorAssetRefers ToInsurancePolicyAsset |
| ProductId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe product associated with the asset.This field is a relationship field. |
| ProductSellingModelId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionIndicates whether the insurance policy asset is billed as a one-time or an installment-based sale.This field is a relationship field.Relationship NameProductSellingModelRefers ToProductSellingModel |
| RelatedInsurancePolicyAssetId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe related insurance policy asset id associated with the insurance policy asset. This field is available from API version 54.0 and later.This is a relationship field.Relationship NameRelatedInsurancePolicyAssetRelationship TypeLookupRefers ToInsurancePolicyAsset |
| SourceSystem | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe name of the source system this record was obtained from. |
| SourceSystemIdentifier | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe ID of this record in the source system. |
| StandardCommissionAmount | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe total commission expected for the policy asset across the full policy term. |
| StandardFeeAmount | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe expected fee for the policy over the policy period. This field is available from API version 51.0 and later. |
| StandardPremiumAmount | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe expected premium for the policy over the policy period. This field is available from API version 51.0 and later. |
| StandardTaxAmount | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe expected tax on the policy over the policy period. This field is available from API version 51.0 and later. |
| TermCommissionAmount | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe commission amount for the policy asset, prorated based on the asset’s effective dates within the policy. |
| TermFeeAmount | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe expected fee for the policy over the policy period, prorated based on the policy's effective dates. This field is available from API version 51.0 and later. |
| TermPremiumAmount | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe expected premium for the policy over the policy period, prorated based on the policy's effective dates. This field is available from API version 51.0 and later. |
| TermTaxAmount | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe expected tax on the policy over the policy period, prorated based on the policy's effective dates. This field is available from API version 51.0 and later. |
| TotalStandardAmount | TypecurrencyPropertiesFilter, Nillable, SortDescriptionThe sum of the expected premium, fee, and tax for the policy over the policy period. This field is available from API version 51.0 and later.This is a calculated field. |
| TotalTermAmount | TypecurrencyPropertiesFilter, Nillable, SortDescriptionThe sum of the expected premium, tax, and fee for the policy over the policy period, prorated based on the policy's effective dates. This field is available from API version 51.0 and later.This is a calculated field. |

## Associated Objects

This object has the following associated objects. Unless noted, they’re available in the same API version as this object.

[InsurancePolicyAssetChangeEvent](atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/sforce_api_associated_objects_change_event.htm "A ChangeEvent object is available for each object that supports Change Data Capture. You can subscribe to a stream of change events using Change Data Capture to receive data tied to record changes in Salesforce. Changes include record creation, updates to an existing record, deletion of a record, and undeletion of a record. A change event isn’t a Salesforce object—it doesn’t support CRUD operations or queries. It’s included in the object reference so you can discover which Salesforce objects support change events.")

Change events are available for the object in API version 62.0 and later.

[InsurancePolicyAssetFeed](atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.")

Feed tracking is available for the object.

[InsurancePolicyAssetHistory](atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

[InsurancePolicyAssetOwnerSharingRule](atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/sforce_api_associated_objects_ownersharingrule.htm "StandardObjectNameOwnerSharingRule is the model for all owner sharing rule objects associated with standard objects. These objects represent a rule for sharing a standard object with users other than the owner.")

Sharing rules are available for the object.

[InsurancePolicyAssetShare](atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/sforce_api_associated_objects_share.htm "StandardObjectNameShare is the model for all share objects associated with standard objects. These objects represent a sharing entry on the standard object.")

Sharing is available for the object.

## Related Topics

- InsurancePolicyAssetChangeEvent (atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/sforce_api_associated_objects_change_event.htm)
- InsurancePolicyAssetFeed (atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/sforce_api_associated_objects_feed.htm)
- InsurancePolicyAssetHistory (atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/sforce_api_associated_objects_history.htm)
- InsurancePolicyAssetOwnerSharingRule (atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/sforce_api_associated_objects_ownersharingrule.htm)
- InsurancePolicyAssetShare (atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/sforce_api_associated_objects_share.htm)
