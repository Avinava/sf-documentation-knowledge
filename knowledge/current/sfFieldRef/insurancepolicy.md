---
title: "InsurancePolicy"
domain: sfFieldRef
topic: insurancepolicy
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:36:01.391Z
estimatedTokens: 1831
keywords: [InsurancePolicy, insurance, policy, API, version, 59.0, later]
---

# InsurancePolicy

> Represents a type of insurance policy. This object is available in API
      version 59.0 and later.

# InsurancePolicy

Represents a type of insurance policy. This object is available in API version 59.0 and later.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see InsurancePolicy in the Financial Services Cloud Developer Guide, Public Sector Solutions Developer Guide, and Salesforce Health Cloud Developer Guide.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| ActualRenewalDate | Actual Renewal Date | date |  |  |  |  |
| AuditTerm | Audit Term | picklist |  | 40 |  |  |
| BillingCarrierAccountId | Account ID | reference |  | 18 |  |  |
| CancellationDate | Cancellation Date | datetime |  |  |  |  |
| CancellationEffectiveDate | Cancellation Effective Date | date |  |  |  |  |
| CancellationReason | Cancellation Reason | textarea |  | 32000 |  |  |
| CancellationReasonType | Cancellation Reason Type | picklist |  | 40 |  |  |
| CashSurrenderValue | Cash Surrender Value | currency |  |  | 18 | 2 |
| ChangeSubtype | Change Subtype | picklist |  | 40 |  |  |
| ChangeType | Change Type | picklist |  | 40 |  |  |
| ContractGroupPlanId | Contract Group Plan ID | reference |  | 18 |  |  |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| CurrencyIsoCode | Currency ISO Code | picklist |  | 3 |  |  |
| CurrentDueAmount | Current Due Amount | currency |  |  | 18 | 2 |
| DateRenewed | Date Renewed | datetime |  |  |  |  |
| Discount | Discount | double |  |  | 18 | 0 |
| EffectiveDate | Effective Date | datetime |  |  |  |  |
| EffectiveFromDate | Effective From Date | date |  |  |  |  |
| EffectiveToDate | Effective To Date | date |  |  |  |  |
| EmployeeContribution | Employee Contribution | currency |  |  | 18 | 2 |
| EmployerContribution | Employer Contribution | currency |  |  | 18 | 2 |
| ExpirationDate | Expiration Date | datetime |  |  |  |  |
| FinalRenewalDate | Final Renewal Date | datetime |  |  |  |  |
| GrossWrittenPremium | Gross Written Premium | currency |  |  | 18 | 2 |
| HasAnyAutoCoverage | Has Any Auto coverage | boolean |  |  |  |  |
| Id | Insurance Policy ID | id |  | 18 |  |  |
| IntermediaryAccountId | Account ID | reference |  | 18 |  |  |
| IsActive | Active | boolean |  |  |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| IsLoanEligibile | Eligible for loan | boolean |  |  |  |  |
| IsPolicyEditLocked | Policy Edit Locked | boolean |  |  |  |  |
| IsRenewedPolicy | Renewed Policy | boolean |  |  |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| LastReferencedDate | Last Referenced Date | datetime |  |  |  |  |
| LastViewedDate | Last Viewed Date | datetime |  |  |  |  |
| Name | Policy Number | string |  | 255 |  |  |
| NameInsuredId | Account ID | reference |  | 18 |  |  |
| OriginalEffectiveDate | Original Effective Date | datetime |  |  |  |  |
| OriginalEffectiveFromDate | Original Effective From Date | date |  |  |  |  |
| OriginalEffectiveToDate | Original Effective To Date | date |  |  |  |  |
| OriginalExpirationDate | Original Expiration Date | datetime |  |  |  |  |
| OriginalPolicyId | Insurance Policy ID | reference |  | 18 |  |  |
| OwnerId | Owner ID | reference |  | 18 |  |  |
| PaidToDate | Paid To Date | date |  |  |  |  |
| ParentPolicyId | Insurance Policy ID | reference |  | 18 |  |  |
| PastDueAmount | Past Due Amount | currency |  |  | 18 | 2 |
| PaymentDueDate | Payment Due Date | datetime |  |  |  |  |
| PlanTier | Plan Tier | picklist |  | 40 |  |  |
| PlanType | Plan Type | picklist |  | 40 |  |  |
| PlannedRenewalDate | Planned Renewal Date | date |  |  |  |  |
| PolicyCode | Policy Code | string |  | 255 |  |  |
| PolicyDescription | Policy Description | textarea |  | 32000 |  |  |
| PolicyName | Policy Name | string |  | 255 |  |  |
| PolicyTerm | Policy Term | picklist |  | 40 |  |  |
| PolicyType | Policy Type | picklist |  | 40 |  |  |
| PremiumAmount | Premium Amount | currency |  |  | 18 | 2 |
| PremiumCalculationMethod | Premium Calculation Method | picklist |  | 40 |  |  |
| PremiumFrequency | Premium Frequency | picklist |  | 40 |  |  |
| PremiumPaymentType | Premium Payment Type | picklist |  | 40 |  |  |
| PreviousPremium | Previous Premium | currency |  |  | 18 | 2 |
| PreviousRenewalDate | Previous Renewal Date | datetime |  |  |  |  |
| PriorPolicyId | Insurance Policy ID | reference |  | 18 |  |  |
| ProducerId | Producer ID | reference |  | 18 |  |  |
| ProductId | Product ID | reference |  | 18 |  |  |
| RatingDate | Rating Date | date |  |  |  |  |
| ReferencePolicyNumber | Reference Policy Number | string |  | 255 |  |  |
| RenewalChannel | Renewal Channel | picklist |  | 40 |  |  |
| RenewalDate | Renewal Date | datetime |  |  |  |  |
| RenewedFromPolicyId | Insurance Policy ID | reference |  | 18 |  |  |
| SaleDate | Sale Date | datetime |  |  |  |  |
| ServicingOffice | Servicing Office | address |  |  |  |  |
| ServicingOfficeCity | Servicing Office City | string |  | 40 |  |  |
| ServicingOfficeCountry | Servicing Office Country | string |  | 80 |  |  |
| ServicingOfficeGeocodeAccuracy | Servicing Office Geocode Accuracy | picklist |  | 40 |  |  |
| ServicingOfficeLatitude | Servicing Office Latitude | double |  |  | 18 | 15 |
| ServicingOfficeLongitude | Servicing Office Longitude | double |  |  | 18 | 15 |
| ServicingOfficePostalCode | Servicing Office Postal Code | string |  | 20 |  |  |
| ServicingOfficeState | Servicing Office State | string |  | 80 |  |  |
| ServicingOfficeStreet | Servicing Office Street | textarea |  | 255 |  |  |
| SourceOpportunityId | Opportunity ID | reference |  | 18 |  |  |
| SourceSystem | Source System | string |  | 255 |  |  |
| SourceSystemIdentifier | Source System Identifier | string |  | 255 |  |  |
| StandardCommissionAmount | Standard Commission | currency |  |  | 18 | 2 |
| StandardFeeAmount | Standard Fee | currency |  |  | 18 | 2 |
| StandardPremiumAmount | Standard Premium | currency |  |  | 18 | 2 |
| StandardTaxAmount | Standard Tax | currency |  |  | 18 | 2 |
| Status | Status | picklist |  | 40 |  |  |
| Substatus | Substatus | picklist |  | 40 |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |
| TaxesSurcharges | Taxes and Surcharges | currency |  |  | 18 | 2 |
| TermCommissionAmount | Term Commission | currency |  |  | 18 | 2 |
| TermFeeAmount | Term Fee | currency |  |  | 18 | 2 |
| TermPremiumAmount | Term Premium | currency |  |  | 18 | 2 |
| TermTaxAmount | Term Tax | currency |  |  | 18 | 2 |
| TotalCommissionAmount | Total Commission Amount | currency |  |  | 18 | 2 |
| TotalStandardAmount | Total Standard Amount | currency |  |  | 18 | 2 |
| TotalSumInsured | Sum Insured | currency |  |  | 18 | 2 |
| TotalTermFeeAmount | Total Term Fee Amount | currency |  |  | 18 | 2 |
| TotalTermPremiumAmount | Total Term Premium Amount | currency |  |  | 18 | 2 |
| TotalTermTaxAmount | Total Term Tax Amount | currency |  |  | 18 | 2 |
| UnderwritingEntityId | Legal Entity ID | reference |  | 18 |  |  |
| UniversalPolicyNumber | Universal Policy Number | string |  | 255 |  |  |
| WritingCarrierAccountId | Account ID | reference |  | 18 |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
