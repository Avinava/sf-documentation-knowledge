---
title: "InsurancePolicy"
domain: health-cloud-object-reference
topic: insurancepolicy
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:37.553Z
estimatedTokens: 4246
keywords: [InsurancePolicy, insurance, policy, Provider, Network, Management, permission, license, Calls, Associated, Objects]
---

# InsurancePolicy

> Represents a type of insurance policy. Available with the Provider Network
			Management permission set
		license.

# InsurancePolicy

Represents a type of insurance policy. Available with the Provider Network Management permission set license.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| AttributesSelectedValues__c | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionValues of root product attributes set at the InsurancePolicy level. |
| AuditTerm | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe frequency of the audit. For example, monthly, semi-monthly, quarterly, semi-annually, or annually.Possible values are:AnnuallyMonthlyQuarterlySemi Annual(twice a year)Semi-Monthly(twice a month) |
| CancellationDate | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe date on which the insurance policy was canceled. |
| CancellationReason | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionThe reason for canceling the insurance policy. |
| CancellationReasonType | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe category that the cancellation reason belongs to.Possible values are:Canceled at Request of the Finance CompanyCanceled by Underwriter or Plan AdministratorCorporate Officer NonElectionCourt ReleaseCoverage Placed ElsewhereDuplicate CoverageFailure to Comply with Terms and Conditions (ex. Audit Failure)Failure to Pay DeductibleInsured's RequestMisrepresentation of Information on ApplicationNon-PaymentNot TakenOtherRevocation of Voluntary Market AcceptanceRewrittenSubstantial Change in RiskUnderwriting Reasons |
| CashSurrenderValue | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe cash surrender value of the insurance policy. |
| ChangeSubtype | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionA further categorization of the change type. For example, childbirth, marriage.Possible values are:Child BirthMarriage |
| ChangeType | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe type of the change in the policy. For example, life event, house renovation.Possible values are:House RenovationLife-Event |
| ContractLineItemId__c | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe ID of a line item in the contract for the policy.This is a relationship field.Relationship NameContractLineItemId__rRelationship TypeLookupRefers ToContractLineItem__c |
| DateRenewed | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe date on which the policy was last renewed. |
| Discount | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe discount that was given on the policy. |
| EffectiveDate | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe date from which the policy is in effect. |
| ExpirationDate | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe date on which the policy expires. |
| FinalRenewalDate | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe final date on which the policyholder can renew the insurance policy. |
| FnolChannel | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe channel through which the loss for the claim associated with this policy was reported. This field is deprecated in API version 48.0 and will be removed in API version 52 (the Summer ’21 release).Possible values are:ChatbotMobilePhoneWeb |
| GrossWrittenPremium | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe total expected premium amount for the insurance policy over the policy period. |
| HasAnyAutoCoverage | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the insurance policy has an Any Auto coverage, which extends the coverage to hired and other non-owned vehicles.The default value is False. |
| IsActive | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionIndicates whether the policy is active.The default value is False. |
| IsLoanEligibile | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether a loan can be requested against the insurance policy.The default value is False. |
| IsRenewedPolicy | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the policy is a renewed policy.The default value is False. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed a record related to this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed this record. If this value is null, it’s possible that this record was referenced (LastReferencedDate) and not viewed. |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionThe insurance policy number. Label is Policy Number. |
| NameInsuredId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe name of the primary insured.This is a relationship field.Relationship NameNameInsuredRelationship TypeLookupRefers ToAccount |
| OriginalEffectiveDate | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe date on which the original policy went into effect. This field is available from API version 51.0 and later. |
| OriginalExpirationDate | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionExpiration date of the original policy. This field is available from API version 51.0 and later. |
| OriginalPolicyId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe ID of the original insurance policy. This field is available from API version 51.0 and later.This is a relationship field.Relationship NameOriginalPolicyRelationship TypeLookupRefers ToInsurancePolicy |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionID of the record owner.This is a polymorphic relationship field.Relationship NameOwnerRelationship TypeLookupRefers ToGroup, User |
| PaidToDate | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe date up to which the policy is paid for. This field is available from API version 51.0 and later. |
| ParentPolicyId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe ID of the parent policy that covers this policy. For example, a parent policy can cover an auto policy and home policy.This is a relationship field.Relationship NameParentPolicyRelationship TypeLookupRefers ToInsurancePolicy |
| PaymentDueDate | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe date on which the next payment of the premium is due. |
| PlanTier | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe class that the insurance policy belongs to. For example, silver, gold, or platinum.Possible values are:GoldPlatinumSilver |
| PlanType | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe type of the insurance policy plan. For example, single life, joint last-to-die, or joint first-to-die (primarily applicable for term insurance).Possible values are:Joint First-to-DieJoint Last-to-DieSingle Life |
| PolicyDescription | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionThe description of the insurance policy. |
| PolicyName | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe name of the insurance policy. |
| PolicyTerm | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Sort, UpdateDescriptionThe time period for which the policy provides coverage. This field is available from API version 51.0 and later.Possible values are:AnnualCustomDailyMonthlySemi-AnnualThe default value is Annual. |
| PolicyType | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe type of the insurance policy. For example, home, auto, annuity, or life.Possible values are:AnnuityAutoCommercial AutoCommercial PropertyHomeLifeWorkers' Compensation |
| PremiumAmount | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe premium paid by the policy owner for the current billing period. |
| PremiumCalculationMethod | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Sort, UpdateDescriptionThe premium calculation method for a payment period. This field is available from API version 51.0 and later.Possible values are:DailyModalThe default value is Daily. |
| PremiumFrequency | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Sort, UpdateDescriptionThe frequency of the premium payment or billing. For example, monthly, semi-monthly, quarterly, semi-annually, or annually.Possible values are:AnnuallyMonthlyQuarterlySemi Annual(twice a year)Semi-Monthly(twice a month)The default value is Annually. |
| PremiumPaymentType | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Sort, UpdateDescriptionThe type of premium payment, such as Advance or Arrears. This field is available from API version 51.0 and later.Possible values are:AdvanceArrearsThe default value is Advance. |
| PreviousPremium | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe premium of the policy before it was renewed. |
| PreviousRenewalDate | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe date on which the insurance policy was renewed in the last renewal cycle. |
| PriorPolicyId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe ID of the insurance policy before it was renewed.This is a relationship field.Relationship NamePriorPolicyRelationship TypeLookupRefers ToInsurancePolicy |
| ProducerId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe ID of the agency or the agent who sold the policy.This is a relationship field.Relationship NameProducerRelationship TypeLookupRefers ToProducer |
| ProductCode__c | TypestringPropertiesFilter, Nillable, SortDescriptionThe code of the product that this policy belongs to.This is a calculated field.FormulaProduct.ProductCode |
| ProductId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe product that this policy belongs to. For example, if the customer buys a silver auto policy, this field looks up to the silver auto product in the Product object.This is a relationship field.Relationship NameProductRelationship TypeLookupRefers ToProduct2 |
| RenewalChannel | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe channel through which the insurance policy was renewed.Possible values are:ChatbotMobilePhoneWeb |
| RenewalDate | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe date on which the policy is expected to be renewed. The actual renewal date may be different. |
| SaleDate | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe date on which the policy was sold. |
| ServicingOffice | TypeaddressPropertiesFilter, NillableDescriptionThe address of the office that issued the policy and that services the policy.This is a compound field of type Address and combines these fields: ServicingOfficeCity, ServicingOfficeCountry, ServicingOfficeGeocodeAccuracy, ServicingOfficeLatitude, ServicingOfficeLongitude, ServicingOfficePostalCode, ServicingOfficeState, and ServicingOfficeStreet. |
| SourceOpportunityId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe ID of the opportunity from which the policy was created.This is a relationship field.Relationship NameSourceOpportunityRelationship TypeLookupRefers ToOpportunity |
| SourceQuoteId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe ID of the quote from which the policy was created.This is a relationship field.Relationship NameSourceQuoteRelationship TypeLookupRefers ToQuote |
| SourceSystem | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe name of the source system this record was obtained from. |
| SourceSystemIdentifier | TypestringPropertiesCreate, Filter, Group, idLookup, Nillable, Sort, UpdateDescriptionThe unique ID of this record in the source system. |
| StandardFeeAmount | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe expected fee for the policy over the policy period. This field is available from API version 51.0 and later. |
| StandardPremiumAmount | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe expected premium for the policy over the policy period. This field is available from API version 51.0 and later. |
| StandardTaxAmount | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe expected tax on the policy over the policy period. This field is available from API version 51.0 and later. |
| Status | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Sort, UpdateDescriptionThe status of the insurance policy.Possible values are:Agreement Premature endingsAppliedCanceledCustomer RejectedDraftFinalFull Life EndingHypotheticalIn ForceIn Force with temporary coverageIn Force-change pendingInitialInsurer RejectedLapsedNegotiation EndNot Taken UpOfferedQuote AbandonedQuotedReplaced by customer applicationReplaced by insurer counter offerSuspendedTerminatedUnder negotiationThe default value is Initial. |
| Substatus | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Sort, UpdateDescriptionThe carrier system's substatus code for the insurance policy.Possible values are:DraftFinalNegotiation EndNot Taken UpQuote AbandonedThe default value is Draft. |
| TaxesSurcharges | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe taxes and surcharges levied on the premium for the insurance policy. |
| TermFeeAmount | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe expected fee for the policy over the policy period, prorated based on the policy's effective dates. This field is available from API version 51.0 and later. |
| TermPremiumAmount | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe expected premium for the policy over the policy period, prorated based on the policy's effective dates. This field is available from API version 51.0 and later. |
| TermTaxAmount | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe expected tax on the policy over the policy period, prorated based on the policy's effective dates. This field is available from API version 51.0 and later. |
| TotalCommissionAmount | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe total commission amount for the policy. |
| TotalStandardAmount | TypecurrencyPropertiesFilter, Nillable, SortDescriptionThe sum of the expected premium, fee, and tax for the policy over the policy period. This field is available from API version 51.0 and later.This is a calculated field. |
| TotalSumInsured | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe total insured amount. This field is available from API version 51.0 and later. |
| UnderwritingEntityId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionLegal entity that underwrote the insurance policy.This is a relationship field.Relationship NameUnderwritingEntityRelationship TypeLookupRefers ToLegalEntity |
| UniversalPolicyNumber | TypestringPropertiesCreate, Filter, Group, idLookup, Nillable, Sort, UpdateDescriptionA number that uniquely identifies the policy across different source systems. |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[InsurancePolicyChangeEvent](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_change_event.htm "A ChangeEvent object is available for each object that supports Change Data Capture. You can subscribe to a stream of change events using Change Data Capture to receive data tied to record changes in Salesforce. Changes include record creation, updates to an existing record, deletion of a record, and undeletion of a record. A change event isn’t a Salesforce object—it doesn’t support CRUD operations or queries. It’s included in the object reference so you can discover which Salesforce objects support change events.") (API version 61.0)

Change events are available for the object.

## Related Topics

- InsurancePolicyChangeEvent (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_change_event.htm)
