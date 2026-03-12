---
title: "CareProviderAdverseAction"
domain: sfFieldRef
topic: careprovideradverseaction
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:52.114Z
estimatedTokens: 682
keywords: [CareProviderAdverseAction, Captures, adverse, actions, against, provider, malpractice, lawsuits, revoked, licenses]
---

# CareProviderAdverseAction

> Captures adverse actions against the provider, such as malpractice
      lawsuits or revoked licenses.

# CareProviderAdverseAction

Captures adverse actions against the provider, such as malpractice lawsuits or revoked licenses.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see CareProviderAdverseAction in the Life Sciences Cloud Developer Guide and Public Sector Solutions Developer Guide.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| AccountId | Account ID | reference |  | 18 |  |  |
| AccreditationId | Accreditation ID | reference |  | 18 |  |  |
| ActionIssueDate | Action Issue Date | date |  |  |  |  |
| ActionType | Type | picklist |  | 40 |  |  |
| BoardCertificationId | Board Certification ID | reference |  | 18 |  |  |
| BusinessLicenseId | Business License ID | reference |  | 18 |  |  |
| CaseNumber | Case Number | string |  | 255 |  |  |
| CourtSentence | Court Sentence | string |  | 255 |  |  |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| CurrencyIsoCode | Currency ISO Code | picklist |  | 3 |  |  |
| Description | Description | string |  | 255 |  |  |
| EffectiveFrom | Effective From | date |  |  |  |  |
| EffectiveTo | Effective To | date |  |  |  |  |
| HealthcareProviderId | Healthcare Provider ID | reference |  | 18 |  |  |
| Id | Care Provider Adverse Action ID | id |  | 18 |  |  |
| IncidentDate | Incident Date | date |  |  |  |  |
| IncidentReportedDate | Incident Reported Date | date |  |  |  |  |
| InsurancePolicyNumber | Insurance Policy Number | string |  | 255 |  |  |
| InsuranceProviderName | Insurance Provider Name | string |  | 255 |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| Jurisdiction | Jurisdiction | string |  | 255 |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| LastReferencedDate | Last Referenced Date | datetime |  |  |  |  |
| LastViewedDate | Last Viewed Date | datetime |  |  |  |  |
| Name | Name | string |  | 255 |  |  |
| OwnerId | Owner ID | reference |  | 18 |  |  |
| PenaltyAmount | Penalty Amount | currency |  |  | 18 | 2 |
| PractitionerId | Contact ID | reference |  | 18 |  |  |
| RegulatoryBody | Regulatory Body | string |  | 255 |  |  |
| RegulatoryBodyType | Regulatory Body Type | picklist |  | 40 |  |  |
| ReportingEntity | Reporting Entity | string |  | 255 |  |  |
| SourceSystem | Source System | string |  | 64 |  |  |
| SourceSystemIdentifier | Source System Identifier | string |  | 255 |  |  |
| Status | Status | picklist |  | 40 |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
