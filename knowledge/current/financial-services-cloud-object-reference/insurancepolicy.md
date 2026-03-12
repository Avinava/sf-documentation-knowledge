---
title: "InsurancePolicy"
domain: financial-services-cloud-object-reference
topic: insurancepolicy
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:30.688Z
estimatedTokens: 4913
keywords: [InsurancePolicy, insurance, policy, auto, home, life, annuity, Calls, Associated, Objects]
---

# InsurancePolicy

> Represents the type of insurance policy, such as auto, home, life, or
      annuity.

# InsurancePolicy

Represents the type of insurance policy, such as auto, home, life, or annuity.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| ActualRenewalDate | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe actual renewal date of the policy. |
| AuditTerm | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe frequency of the audit. For example, monthly, semi-monthly, quarterly, semi-annually, or annually. |
| BillingCarrierAccountId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe name of the Billing Carrier Account associated with the Insurance Policy. When the company that sells the policy also writes the policy, then the billing carrier is the same as the writing carrier.This field is a relationship field.Relationship NameBillingCarrierAccountRelationship TypeLookupRefers ToAccount |
| BillingType | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionSpecifies the type of biling for the policy.Possible values are: |
| CancellationDate | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe date the insurance policy was canceled. |
| CancellationReason | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionThe reason for canceling the insurance policy. |
| CancellationReasonType | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe category that the cancellation reason belongs to. |
| CashSurrenderValue | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe cash surrender value of the insurance policy. |
| ChangeSubtype | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionA further categorization of the change type. For example, childbirth, marriage. |
| ChangeType | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe type of the change in the policy. For example: life event, house renovation. |
| CommissionFrequency | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe frequency of receiving commission from the carrier. |
| CommissionPercent | TypepercentPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe percentage of policy premium to be earned as commission by the brokerage firm. |
| CurrentDueAmount | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe current due amount for the policy. |
| DateRenewed | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe date on which the policy was last renewed. |
| Discount | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe discount that was given on the policy. |
| EffectiveDate | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe date the policy is in effect. |
| EffectiveFromDate | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe date when the policy becomes effective. |
| EffectiveToDate | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe date until when the policy remains effective. |
| ExpectedRevenueAmount | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe revenue amount that the brokerage firm is expected to earn from the policy. |
| EmployeeContribution | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe employee's contribution towards the insurance premium value. |
| EmployerContribution | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe employer's contribution towards the insurance premium value. |
| ExpirationDate | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe date the policy expires. |
| FinalRenewalDate | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe final date on which the policyholder can renew the insurance policy. |
| FundingType | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionSpecifies how the policy is being funded.Possible values are:Fully InsuredLevel FundedSelf Funded |
| GrossWrittenPremium | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe total expected premium amount for the insurance policy over the policy period. |
| HasAnyAutoCoverage | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the insurance policy has an Any Auto coverage, which extends the coverage to hired and other non-owned vehicles. The default value is False. |
| IntermediaryAccountId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe Intermediary Account associated with the Insurance Policy.This field is a relationship field.Relationship NameIntermediaryAccountRelationship TypeLookupRefers ToAccount |
| IsActive | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionIndicates whether the policy is active. The default value is False.Creating or updating an InsurancePolicy sets IsActive automatically based on the Status field value. For example, you can set IsActive to False by setting Status to Inactive. |
| IsLoanEligibile | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether a loan can be requested against the insurance policy. The default value is False. |
| IsPolicyEditLocked | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the application locks the policy record. The default value is False. |
| IsRenewedPolicy | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the policy is a renewed policy. The default value is False. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed a record related to this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed this record. If this value is null, it’s possible that this record was referenced (LastReferencedDate) and not viewed. |
| LineOfBusiness | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe line of business associated with the policy. |
| LineOfCoverage | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe coverage type of the policy. |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionThe insurance policy number. |
| NameInsuredId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe name of the primary insured. |
| OriginalEffectiveDate | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe date the original policy went into effect. This field is available from API version 51.0 and later. |
| OriginalEffectiveFromDate | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe date when the original policy became effective. |
| OriginalEffectiveToDate | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe date until when the original policy remains effective. |
| OriginalExpirationDate | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionExpiration date of the original policy. This field is available from API version 51.0 and later. |
| OriginalPolicyId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe ID of the original insurance policy. This field is available from API version 51.0 and later. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionID of the record owner. |
| PaidToDate | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe date up to which the policy is paid for. This field is available from API version 51.0 and later. |
| ParentPolicyId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe ID of the parent policy that covers this policy. For example, a parent policy can cover an auto policy and home policy. |
| PastDueAmount | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe amount past due for the policy. |
| PaymentDueDate | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe due date for the next payment of the premium. |
| PlannedRenewalDate | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe expected renewal date of the policy. |
| PlanTier | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe class that the insurance policy belongs to. For example, silver, gold, or platinum. |
| PlanType | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe type of the insurance policy plan. For example, single life, joint last-to-die, or joint first-to-die (primarily applicable for term insurance). |
| PolicyCode | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe code that's unique for the policy across all versions. |
| PolicyDescription | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionThe description of the insurance policy. |
| PolicyName | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe name of the insurance policy. |
| PolicyTerm | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe time period for which the policy provides coverage. This field is available from API version 51.0 and later.NoteSalesforce services support only annual policy terms. However, you can use the other policy term values in custom implementations. For more information, see Considerations and Limitations for Insurance Policies. |
| PolicyType | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe type of the insurance policy. For example, home, auto, annuity, or life. |
| PremiumAmount | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe premium paid by the policy owner for the current billing period. |
| PremiumCalculationMethod | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe premium calculation method for a payment period. This field is available from API version 51.0 and later.Possible values are:DailyModal |
| PremiumFrequency | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe frequency of the premium payment or billing. For example, monthly, semi-monthly, quarterly, semi-annually, or annually. |
| PremiumPaymentType | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe type of premium payment, such as Advance or Arrears. This field is available from API version 51.0 and later.Possible values are:AdvanceArrears |
| PreviousPremium | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe premium of the policy before it was renewed. |
| PreviousRenewalDate | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe most recent renewal date for the insurance policy. |
| PriorPolicyId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe ID of the insurance policy before it was renewed. |
| ProducerId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe ID of the agency or the agent who sold the policy. |
| ProductId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe product that this policy belongs to. For example, if the customer buys a silver auto policy, this field looks up to the silver auto product in the Product object. |
| RatingDate | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe date to determine the rating details on a mid-term adjustment, endorsement, or out-of-sequence endorsement to a policy. |
| RecordSource | TypepicklistPropertiesFilter, Group, Nillable, Restricted picklist, SortDescriptionSpecifies the source application context for the record.Available in API version 66.0 and later.Possible values are:DigitalInsuranceNull |
| ReferencePolicyNumber | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe reference number of the insurance policy that is renewed when the policy term tracking is continued across multiple policy versions. For example, if a limit is a "Lifetime Limit", then the policy term tracking is tracked across all versions of the policy. |
| RenewalChannel | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe channel used to renew the insurance policy.Possible values are:ChatbotMobilePhoneWeb |
| RenewalDate | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe next expected policy renewal date. The actual renewal date may be different. |
| SaleDate | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe date the policy was sold. |
| ServicingOffice | TypeaddressPropertiesFilter, NillableDescriptionThe address of the office that issued the policy and that services the policy.This is a compound field of type Address and combines these fields: ServicingOfficeCity, ServicingOfficeCountry, ServicingOfficeGeocodeAccuracy, ServicingOfficeLatitude, ServicingOfficeLongitude, ServicingOfficePostalCode, ServicingOfficeState, and ServicingOfficeStreet. For more information, see Address Compound Fields. |
| SourceOpportunityId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe ID of the opportunity from which the policy was created. |
| SourceSystem | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe name of the source system this record was obtained from. |
| SourceSystemIdentifier | TypestringPropertiesCreate, Filter, Group, idLookup, Nillable, Sort, UpdateDescriptionThe ID of this record in the source system. |
| StandardFeeAmount | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe expected fee for the policy over the policy period. This field is available from API version 51.0 and later. |
| StandardPremiumAmount | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe expected premium for the policy over the policy period. This field is available from API version 51.0 and later. |
| StandardTaxAmount | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe expected tax on the policy over the policy period. This field is available from API version 51.0 and later. |
| Status | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Sort, UpdateDescriptionThe status of the insurance policy. |
| Substatus | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Sort, UpdateDescriptionThe carrier system's substatus code for the insurance policy. |
| TaxesSurcharges | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe taxes and surcharges levied on the premium for the insurance policy. |
| TermFeeAmount | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe expected fee for the policy over the policy period, prorated based on the policy's effective dates. This field is available from API version 51.0 and later. |
| TermPremiumAmount | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe expected premium for the policy over the policy period, prorated based on the policy's effective dates. This field is available from API version 51.0 and later. |
| TermTaxAmount | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe expected tax on the policy over the policy period, prorated based on the policy's effective dates. This field is available from API version 51.0 and later. |
| TotalStandardAmount | TypecurrencyPropertiesFilter, Nillable, SortDescriptionThe sum of the expected premium, fee, and tax for the policy over the policy period. This field is available from API version 51.0 and later.This is a calculated field. |
| TotalSumInsured | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe total insured amount. This field is available from API version 51.0 and later. |
| TotalTermFeeAmount | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe current total term fees of all policy versions. |
| TotalTermPremiumAmount | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe current total term premium of all policy versions. |
| TotalTermTaxAmount | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe current total term taxes of all policy versions. |
| UnderwritingEntityId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionLegal entity that underwrote the insurance policy. |
| UniversalPolicyNumber | TypestringPropertiesCreate, Filter, Group, idLookup, Nillable, Sort, UpdateDescriptionA number that uniquely identifies the policy across different source systems. |
| WritingCarrierAccountId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe Writing Carrier Account associated with the Insurance Policy.This field is a relationship field.Relationship NameWritingCarrierAccountRelationship TypeLookupRefers ToAccount |

## Associated Objects

This object has the following associated objects. Unless noted, they’re available in the same API version as this object.

[InsurancePolicyChangeEvent (API version 61.0)](https://developer.salesforce.com/docs/atlas.en-us.260.0.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/sforce_api_associated_objects_change_event.htm "HTML (New Window)")

Change events are available for the object.

[InsurancePolicyFeed](atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.")

Feed tracking is available for the object.

[InsurancePolicyHistory](atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

[InsurancePolicyOwnerSharingRule](atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/sforce_api_associated_objects_ownersharingrule.htm "StandardObjectNameOwnerSharingRule is the model for all owner sharing rule objects associated with standard objects. These objects represent a rule for sharing a standard object with users other than the owner.")

Sharing rules are available for the object.

[InsurancePolicyShare](atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/sforce_api_associated_objects_share.htm "StandardObjectNameShare is the model for all share objects associated with standard objects. These objects represent a sharing entry on the standard object.")

Sharing is available for the object.

## Related Topics

- InsurancePolicyFeed (atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/sforce_api_associated_objects_feed.htm)
- InsurancePolicyHistory (atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/sforce_api_associated_objects_history.htm)
- InsurancePolicyOwnerSharingRule (atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/sforce_api_associated_objects_ownersharingrule.htm)
- InsurancePolicyShare (atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/sforce_api_associated_objects_share.htm)
