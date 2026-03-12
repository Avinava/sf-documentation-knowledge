---
title: "InsurancePolicy"
domain: psc-api
topic: insurancepolicy
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:34.966Z
estimatedTokens: 4203
keywords: [InsurancePolicy, insurance, policy, API, version, 59.0, later, Calls, Special, Access, Rules, Associated, Objects]
---

# InsurancePolicy

> Represents a type of insurance policy. This object is available in API
      version 59.0 and later.

# InsurancePolicy

Represents a type of insurance policy. This object is available in API version 59.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Special Access Rules

To access this object on your Public Sector Solutions org, Benefit Disbursement must be enabled and you must have the Benefit Disbursement Access permission set or the Benefit Disbursement permission set license.

## Fields

| Field | Details |
| --- | --- |
| AuditTerm | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe frequency of the audit. For example, monthly, semi-monthly, quarterly, semi-annually, or annually. |
| BillingCarrierAccountId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe name of the Billing Carrier Account associated with the Insurance Policy. When the company that sells the policy also writes the policy, then the billing carrier is the same as the writing carrier.This field is a relationship field.Relationship NameBillingCarrierAccountRelationship TypeLookupRefers ToAccount |
| CancellationDate | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe date the insurance policy was canceled. |
| CancellationReason | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionThe reason for canceling the insurance policy. |
| CancellationReasonType | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe category that the cancellation reason belongs to. |
| CashSurrenderValue | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe cash surrender value of the insurance policy. |
| ChangeSubtype | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionA further categorization of the change type. For example, childbirth, marriage. |
| ChangeType | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe type of the change in the policy. For example: life event, house renovation. |
| CurrentDueAmount | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe current due amount for the policy. |
| DateRenewed | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe date on which the policy was last renewed. |
| Discount | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe discount that was given on the policy. |
| EffectiveDate | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe date the policy is in effect. |
| ExpirationDate | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe date the policy expires. |
| FinalRenewalDate | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe final date on which the policyholder can renew the insurance policy. |
| GrossWrittenPremium | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe total expected premium amount for the insurance policy over the policy period. |
| HasAnyAutoCoverage | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the insurance policy has an Any Auto coverage, which extends the coverage to hired and other non-owned vehicles. The default value is False.The default value is false. |
| IntermediaryAccountId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe Intermediary Account associated with the Insurance Policy.This field is a relationship field.Relationship NameIntermediaryAccountRelationship TypeLookupRefers ToAccount |
| IsActive | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionIndicates whether the policy is active.Creating or updating an InsurancePolicy sets IsActive automatically based on the Status field value. For example, you can set IsActive to False by setting Status to Inactive.The default value is false. |
| IsLoanEligibile | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether a loan can be requested against the insurance policy.The default value is false. |
| IsPolicyEditLocked | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the application locks the policy record.The default value is false. |
| IsRenewedPolicy | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the policy is a renewed policy.The default value is false. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed a record related to this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed this record. If this value is null, it’s possible that this record was referenced (LastReferencedDate) and not viewed. |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionRequired. The insurance policy number. |
| NameInsuredId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionRequired. The name of the primary insured.This field is a relationship field.Relationship NameNameInsuredRelationship TypeLookupRefers ToAccount |
| OriginalEffectiveDate | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe date the original policy went into effect. |
| OriginalExpirationDate | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionExpiration date of the original policy. |
| OriginalPolicyId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe ID of the original insurance policy.This field is a relationship field.Relationship NameOriginalPolicyRelationship TypeLookupRefers ToInsurancePolicy |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionID of the record owner.This field is a polymorphic relationship field.Relationship NameOwnerRelationship TypeLookupRefers ToGroup, User |
| PaidToDate | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe date up to which the policy is paid for. |
| ParentPolicyId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe ID of the parent policy that covers this policy.This field is a relationship field.Relationship NameParentPolicyRelationship TypeLookupRefers ToInsurancePolicy |
| PastDueAmount | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe amount past due for the policy. |
| PaymentDueDate | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe due date for the next payment of the premium. |
| PlanTier | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe class that the insurance policy belongs to. For example, silver, gold, or platinum. |
| PlanType | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe type of the insurance policy plan. For example, single life, joint last-to-die, or joint first-to-die (primarily applicable for term insurance). |
| PolicyDescription | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionThe description of the insurance policy. |
| PolicyName | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe name of the insurance policy. |
| PolicyTerm | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe time period for which the policy provides coverage. |
| PolicyType | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe type of the insurance policy. For example, home, auto, annuity, or life. |
| PremiumAmount | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe premium paid by the policy owner for the current billing period. |
| PremiumCalculationMethod | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe premium calculation method for a payment period. |
| PremiumFrequency | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe frequency of the premium payment or billing. For example, monthly, semi-monthly, quarterly, semi-annually, or annually. |
| PremiumPaymentType | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe type of premium payment, such as Advance or Arrears. |
| PreviousPremium | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe premium of the policy before it was renewed. |
| PreviousRenewalDate | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe most recent renewal date for the insurance policy. |
| PriorPolicyId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe ID of the insurance policy before it was renewed.This field is a relationship field.Relationship NamePriorPolicyRelationship TypeLookupRefers ToInsurancePolicy |
| ProductId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe product that this policy belongs to. For example, if the customer buys a silver auto policy, this field looks up to the silver auto product in the Product object.This field is a relationship field.Relationship NameProductRelationship TypeLookupRefers ToProduct2 |
| RatingDate | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe date to determine the rating details on a mid-term adjustment, endorsement, or out-of-sequence endorsement to a policy. |
| ReferencePolicyNumber | TypestringPropertiesCreate, Filter, Group, idLookup, Nillable, Sort, UpdateDescriptionThe reference number of the insurance policy that is renewed when the policy term tracking is continued across multiple policy versions. For example, if a limit is a "Lifetime Limit", then the policy term tracking is tracked across all versions of the policy. |
| RenewalChannel | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe channel used to renew the insurance policy. For example, phone or web. |
| RenewalDate | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe next expected policy renewal date. The actual renewal date may be different. |
| SaleDate | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe date the policy was sold. |
| ServicingOffice | TypeaddressPropertiesFilter, NillableDescriptionThe address of the office that issued the policy and that services the policy.This is a compound field of type Address and combines these fields: ServicingOfficeCity, ServicingOfficeCountry, ServicingOfficeGeocodeAccuracy, ServicingOfficeLatitude, ServicingOfficeLongitude, ServicingOfficePostalCode, ServicingOfficeState, and ServicingOfficeStreet. For more information, see Address Compound Fields. |
| SourceOpportunityId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe ID of the opportunity from which the policy was created.This field is a relationship field.Relationship NameSourceOpportunityRelationship TypeLookupRefers ToOpportunity |
| SourceSystem | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe name of the source system this record was obtained from. |
| SourceSystemIdentifier | TypestringPropertiesCreate, Filter, Group, idLookup, Nillable, Sort, UpdateDescriptionThe unique ID of this record in the source system. |
| StandardFeeAmount | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe expected fee for the policy over the policy period. |
| StandardPremiumAmount | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe expected premium for the policy over the policy period. |
| StandardTaxAmount | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe expected tax on the policy over the policy period. |
| Status | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe status of the insurance policy. |
| Substatus | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe carrier system's substatus code for the insurance policy. |
| TaxesSurcharges | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe taxes and surcharges levied on the premium for the insurance policy. |
| TermFeeAmount | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe expected fee for the policy over the policy period, prorated based on the policy's effective dates. |
| TermPremiumAmount | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe expected premium for the policy over the policy period, prorated based on the policy's effective dates. |
| TermTaxAmount | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe expected tax on the policy over the policy period, prorated based on the policy's effective dates. |
| TotalCommissionAmount | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe total commission amount for the policy. |
| TotalSumInsured | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe total insured amount. |
| TotalTermFeeAmount | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe current total term fees of all policy versions. |
| TotalTermPremiumAmount | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe current total term premium of all policy versions. |
| TotalTermTaxAmount | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe current total term taxes of all policy versions. |
| UnderwritingEntityId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionLegal entity that underwrote the insurance policy.This field is a relationship field.Relationship NameUnderwritingEntityRelationship TypeLookupRefers ToLegalEntity |
| UniversalPolicyNumber | TypestringPropertiesCreate, Filter, Group, idLookup, Nillable, Sort, UpdateDescriptionA number that uniquely identifies the policy across different source systems. |
| WritingCarrierAccountId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe Writing Carrier Account associated with the Insurance Policy.This field is a relationship field.Relationship NameWritingCarrierAccountRelationship TypeLookupRefers ToAccount |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[InsurancePolicyChangeEvent](atlas.en-us.psc_api.meta/psc_api/sforce_api_associated_objects_change_event.htm "A ChangeEvent object is available for each object that supports Change Data Capture. You can subscribe to a stream of change events using Change Data Capture to receive data tied to record changes in Salesforce. Changes include record creation, updates to an existing record, deletion of a record, and undeletion of a record. A change event isn’t a Salesforce object—it doesn’t support CRUD operations or queries. It’s included in the object reference so you can discover which Salesforce objects support change events.") (API version 61.0)

Change events are available for the object.

[InsurancePolicyFeed](atlas.en-us.psc_api.meta/psc_api/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.")

Feed tracking is available for the object.

[InsurancePolicyHistory](atlas.en-us.psc_api.meta/psc_api/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

[InsurancePolicyOwnerSharingRule](atlas.en-us.psc_api.meta/psc_api/sforce_api_associated_objects_ownersharingrule.htm "StandardObjectNameOwnerSharingRule is the model for all owner sharing rule objects associated with standard objects. These objects represent a rule for sharing a standard object with users other than the owner.")

Sharing rules are available for the object.

[InsurancePolicyShare](atlas.en-us.psc_api.meta/psc_api/sforce_api_associated_objects_share.htm "StandardObjectNameShare is the model for all share objects associated with standard objects. These objects represent a sharing entry on the standard object.")

Sharing is available for the object.

## Related Topics

- InsurancePolicyChangeEvent (atlas.en-us.psc_api.meta/psc_api/sforce_api_associated_objects_change_event.htm)
- InsurancePolicyFeed (atlas.en-us.psc_api.meta/psc_api/sforce_api_associated_objects_feed.htm)
- InsurancePolicyHistory (atlas.en-us.psc_api.meta/psc_api/sforce_api_associated_objects_history.htm)
- InsurancePolicyOwnerSharingRule (atlas.en-us.psc_api.meta/psc_api/sforce_api_associated_objects_ownersharingrule.htm)
- InsurancePolicyShare (atlas.en-us.psc_api.meta/psc_api/sforce_api_associated_objects_share.htm)
