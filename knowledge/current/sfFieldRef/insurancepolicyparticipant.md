---
title: "InsurancePolicyParticipant"
domain: sfFieldRef
topic: insurancepolicyparticipant
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:01.503Z
estimatedTokens: 898
keywords: [InsurancePolicyParticipant, junction, associates, InsurancePolicy, Account, participants, insurance, policy, include, owners, beneficiaries]
---

# InsurancePolicyParticipant

> A junction object that associates the InsurancePolicy object with the Account
      object. This object represents the participants of an insurance policy. Insurance policy
      participants include policy owners and beneficiaries.

# InsurancePolicyParticipant

A junction object that associates the InsurancePolicy object with the Account object. This object represents the participants of an insurance policy. Insurance policy participants include policy owners and beneficiaries.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see InsurancePolicyParticipant in the Financial Services Cloud Developer Guide.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| BeneficiarySharePercentage | Beneficiary Share Percentage | percent |  |  | 3 | 0 |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| EffectiveDate | Effective Date | datetime |  |  |  |  |
| EffectiveFromDate | Effective From Date | date |  |  |  |  |
| EffectiveToDate | Effective To Date | date |  |  |  |  |
| EmployeeContribution | Employee Contribution | currency |  |  | 18 | 2 |
| EmployerContribution | Employer Contribution | currency |  |  | 18 | 2 |
| ExpirationDate | Expiration Date | datetime |  |  |  |  |
| Id | Insurance Policy Participant ID | id |  | 18 |  |  |
| InsurancePolicyId | Insurance Policy ID | reference |  | 18 |  |  |
| IsActiveParticipant | Active Participant | boolean |  |  |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| IsMinorBeneficiary | Minor Beneficiary | boolean |  |  |  |  |
| IsPolicyholder | Policy holder | boolean |  |  |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| LastReferencedDate | Last Referenced Date | datetime |  |  |  |  |
| LastViewedDate | Last Viewed Date | datetime |  |  |  |  |
| LegalGuardianId | Account ID | reference |  | 18 |  |  |
| Name | Name | string |  | 255 |  |  |
| OriginalParticipantId | Insurance Policy Participant ID | reference |  | 18 |  |  |
| ParticipantCode | Participant Code | string |  | 255 |  |  |
| ParticipantName | Participant Name | string |  | 255 |  |  |
| PrimaryParticipantAccountId | Account ID | reference |  | 18 |  |  |
| PrimaryParticipantContactId | Contact ID | reference |  | 18 |  |  |
| PriorParticipantId | Insurance Policy Participant ID | reference |  | 18 |  |  |
| ProductId | Product ID | reference |  | 18 |  |  |
| RelatedInsPolicyParticipantId | Insurance Policy Participant ID | reference |  | 18 |  |  |
| RelatedParticipantAccountId | Account ID | reference |  | 18 |  |  |
| RelatedParticipantContactId | Contact ID | reference |  | 18 |  |  |
| RelationshipToInsured | Relationship to Insured | picklist |  | 40 |  |  |
| Role | Role | multipicklist |  | 4099 | 0 |  |
| SourceSystem | Source System | string |  | 255 |  |  |
| SourceSystemIdentifier | Source System ID | string |  | 255 |  |  |
| StandardCommissionAmount | Standard Commission | currency |  |  | 18 | 2 |
| StandardFeeAmount | Standard Fee | currency |  |  | 18 | 2 |
| StandardPremiumAmount | Standard Premium | currency |  |  | 18 | 2 |
| StandardTaxAmount | Standard Tax | currency |  |  | 18 | 2 |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |
| TermCommissionAmount | Term Commission | currency |  |  | 18 | 2 |
| TermFeeAmount | Term Fee | currency |  |  | 18 | 2 |
| TermPremiumAmount | Term Premium | currency |  |  | 18 | 2 |
| TermTaxAmount | Term Tax | currency |  |  | 18 | 2 |
| TotalStandardAmount | Total Standard Amount | currency |  |  | 18 | 2 |
| TotalTermAmount | Total Term Amount | currency |  |  | 18 | 2 |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
