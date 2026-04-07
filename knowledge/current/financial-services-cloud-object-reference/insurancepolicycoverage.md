---
title: "InsurancePolicyCoverage"
domain: financial-services-cloud-object-reference
topic: insurancepolicycoverage
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-04-07T18:37:37.860Z
estimatedTokens: 3124
keywords: [InsurancePolicyCoverage, junction, associates, InsurancePolicy, ProductCoverage]
---

> A junction object that associates the InsurancePolicy object with the
      ProductCoverage object.

# InsurancePolicyCoverage

A junction object that associates the InsurancePolicy object with the ProductCoverage object.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| BenefitPaymentFrequency | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe frequency of the payment if the benefit or coverage entails a recurring payout to the insured. For example, monthly, semi-monthly, quarterly, semi-annually, or annually. |
| BillingTreatmentId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionSpecifies how the Subscription Management bills an insurance policy coverage.This field is a relationship field.Relationship NameBillingTreatmentRefers ToBillingTreatment |
| Category | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe category that the coverage belongs to. For example, benefit, clause, deductible, rider. |
| CategoryCode | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionA carrier-specific code that identifies the coverage. For example, benefit, clause, or deductible. |
| CategoryGroup | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe specific category group. For example, for a liability coverage record, benefit is the category and liability is the category group. |
| CategoryGroupType | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe type of the category group. |
| CommissionPercent | TypepercentPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe percentage of Insurance Policy Coverage premium to be earned as commission by the brokerage firm. |
| ContractGroupPlanId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe contract group plan associated with the insurance policy coverage. |
| CoverageCode | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe unique code of the insurance policy coverage across all the policy versions. |
| CoverageName | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe name of the coverage. |
| DeathBenefitOptionType | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe method for the payment of death benefit. |
| DeductibleAmount | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe deductible amount that the customer must pay. |
| Description | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionThe description of the coverage. |
| Discount | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe discount that was given on the coverage or the benefit. |
| EffectiveDate | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe date from which the coverage is in effect. |
| EffectiveFromDate | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe date from when the coverage becomes active on the policy. |
| EffectiveToDate | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe date after when the coverage becomes inactive on the policy. |
| EmployeeContribution | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe employee contribution towards the insurance premium value for the participant. |
| EmployerContribution | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe employer contribution towards the insurance premium value for the participant. |
| ExpectedRevenueAmount | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe revenue amount that the brokerage is expected to earn from the Insurance Policy Coverage. |
| ExpirationDate | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe date on which the coverage expires. |
| IncomeOptionType | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe type of the income option given to the policy participant. For example, periodic payment is an income option type, and annuity is an income option. |
| InsurancePolicyAssetId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe asset covered by this coverage. |
| InsurancePolicyId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe insurance policy associated with this coverage. |
| InsurancePolicyParticipantId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe insurance policy participant associated with this coverage. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed a record related to this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed this record. If this value is null, it’s possible that this record was referenced (LastReferencedDate) and not viewed. |
| LimitAmount | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe limit of the fixed coverage amount. For example, uninsured motorist coverage of USD 1000. |
| LimitDate | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe date from which the coverage limit is in effect. For example, an annuity benefit is valid only after the insured is 60 years old. |
| LimitPercentage | TypepercentPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe percentage of the actuals covered by this coverage. |
| LimitRange | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe range of the coverage limit. For example, bodily injury coverage with limits as USD 100,000 per person and USD 300,000 per accident. |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, SortDescriptionAn auto-generated number assigned to this record. |
| OriginalCoverageId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe ID of the first instance of a specific coverage that's used to track it across policy versions created through lifecycle events.This field is a relationship field.Relationship NameOriginalCoverageRefers ToInsurancePolicyCoverage |
| PremiumAmount | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe premium paid by the customer for this coverage. |
| PriorCoverageId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe reference coverage record before the policy was endorsed or renewed.This field is a relationship field.Relationship NamePriorCoverageRefers ToInsurancePolicyCoverage |
| ProductId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe product associated with the coverage.This field is a relationship field.Relationship NameProductRefers ToProduct2 |
| ProductSellingModelId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionIndicates whether the insurance policy is sold as a one-time or an installment-based sale.This field is a relationship field.Relationship NameProductSellingModelRefers ToProductSellingModel |
| SourceSystem | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe name of the source system this record was obtained from. |
| SourceSystemIdentifier | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe ID of this coverage record in the source system. |
| StandardCommissionAmount | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe total commission expected for the policy coverage across the full policy term. |
| StandardFeeAmount | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe expected fee for the policy over the policy period. This field is available from API version 51.0 and later. |
| StandardPremiumAmount | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe expected premium for the policy over the policy period. This field is available from API version 51.0 and later. |
| StandardTaxAmount | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe expected tax on the policy over the policy period. This field is available from API version 51.0 and later. |
| TermCommissionAmount | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe commission amount for the policy coverage, prorated based on the coverage effective dates within the policy. |
| TermFeeAmount | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe expected fee for the policy over the policy period, prorated based on the policy's effective dates. This field is available from API version 51.0 and later. |
| TermPremiumAmount | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe expected premium for the policy over the policy period, prorated based on the policy's effective dates. This field is available from API version 51.0 and later. |
| TermTaxAmount | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe expected tax on the policy over the policy period, prorated based on the policy's effective dates. This field is available from API version 51.0 and later. |
| TotalStandardAmount | TypecurrencyPropertiesFilter, Nillable, SortDescriptionThe sum of the expected premium, fee, and tax for the policy over the policy period. This field is available from API version 51.0 and later.This is a calculated field. |
| TotalTermAmount | TypecurrencyPropertiesFilter, Nillable, SortDescriptionThe sum of expected premium, tax, and fee amount for the insurance policy over the policy period, prorated based on the policy's effective dates.This field is a calculated field. |

## Associated Objects

This object has the following associated objects. Unless noted, they’re available in the same API version as this object.

[InsurancePolicyCoverageChangeEvent](atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/sforce_api_associated_objects_change_event.htm "A ChangeEvent object is available for each object that supports Change Data Capture. You can subscribe to a stream of change events using Change Data Capture to receive data tied to record changes in Salesforce. Changes include record creation, updates to an existing record, deletion of a record, and undeletion of a record. A change event isn’t a Salesforce object—it doesn’t support CRUD operations or queries. It’s included in the object reference so you can discover which Salesforce objects support change events.")

Change events are available for the object in API version 62.0 and later.

[InsurancePolicyCoverageFeed](atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.")

Feed tracking is available for the object.

[InsurancePolicyCoverageHistory](atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

[InsurancePolicyCoverageOwnerSharingRule](atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/sforce_api_associated_objects_ownersharingrule.htm "StandardObjectNameOwnerSharingRule is the model for all owner sharing rule objects associated with standard objects. These objects represent a rule for sharing a standard object with users other than the owner.")

Sharing rules are available for the object.

[InsurancePolicyCoverageShare](atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/sforce_api_associated_objects_share.htm "StandardObjectNameShare is the model for all share objects associated with standard objects. These objects represent a sharing entry on the standard object.")

Sharing is available for the object.

## Related Topics

- InsurancePolicyCoverageChangeEvent (atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/sforce_api_associated_objects_change_event.htm)
- InsurancePolicyCoverageFeed (atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/sforce_api_associated_objects_feed.htm)
- InsurancePolicyCoverageHistory (atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/sforce_api_associated_objects_history.htm)
- InsurancePolicyCoverageOwnerSharingRule (atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/sforce_api_associated_objects_ownersharingrule.htm)
- InsurancePolicyCoverageShare (atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/sforce_api_associated_objects_share.htm)
