---
title: "Claim"
domain: sfFieldRef
topic: claim
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:53.003Z
estimatedTokens: 1020
keywords: [Claim, claims, life, auto, home]
---

# Claim

> Represents the types of claims, such as life, auto, or home.

# Claim

Represents the types of claims, such as life, auto, or home.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see Claim in the Automotive Cloud Developer Guide, Financial Services Cloud Developer Guide, Manufacturing Cloud Developer Guide, and Public Sector Solutions Developer Guide.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| AccountId | Account ID | reference |  | 18 |  |  |
| ActualAmount | Actual Amount | currency |  |  | 18 | 2 |
| ApprovedAmount | Approved Amount | currency |  |  | 18 | 2 |
| AssessmentDate | Assessment Date | datetime |  |  |  |  |
| CaseId | Case ID | reference |  | 18 |  |  |
| ClaimLossDate | Claim Loss Date | date |  |  |  |  |
| ClaimReason | Claim Reason | string |  | 255 |  |  |
| ClaimReasonType | Claim Reason Type | picklist |  | 40 |  |  |
| ClaimType | Claim Type | picklist |  | 40 |  |  |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| CurrencyIsoCode | Currency ISO Code | picklist |  | 3 |  |  |
| EstimatedAmount | Estimated Amount | currency |  |  | 18 | 2 |
| FinalizedDate | Finalized Date | datetime |  |  |  |  |
| FinancialAuthorityStatus | Financial Authority Status | picklist |  | 40 |  |  |
| FnolChannel | FNOL Channel | picklist |  | 40 |  |  |
| Id | Claim ID | id |  | 18 |  |  |
| IncidentSite | Incident Site | address |  |  |  |  |
| IncidentSiteCity | Incident Site City | string |  | 40 |  |  |
| IncidentSiteCountry | Incident Site Country | string |  | 80 |  |  |
| IncidentSiteGeocodeAccuracy | Incident Site Geocode Accuracy | picklist |  | 40 |  |  |
| IncidentSiteLatitude | Incident Site Latitude | double |  |  | 18 | 15 |
| IncidentSiteLongitude | Incident Site Longitude | double |  |  | 18 | 15 |
| IncidentSitePostalCode | Incident Site Postal Code | string |  | 20 |  |  |
| IncidentSiteState | Incident Site State | string |  | 80 |  |  |
| IncidentSiteStreet | Incident Site Street | textarea |  | 255 |  |  |
| InitiationDate | Initiation Date | datetime |  |  |  |  |
| InsuredAssetId | Insurance Policy Asset ID | reference |  | 18 |  |  |
| IsAuthoritiesNotified | Authorities Notified | boolean |  |  |  |  |
| IsClosed | Closed | boolean |  |  |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| IsDrivable | Drivable | boolean |  |  |  |  |
| IsInhabitable | Inhabitable | boolean |  |  |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| LastReferencedDate | Last Referenced Date | datetime |  |  |  |  |
| LastViewedDate | Last Viewed Date | datetime |  |  |  |  |
| LossDate | Loss Date | datetime |  |  |  |  |
| LossType | Loss Type | picklist |  | 40 |  |  |
| Name | Claim Number | string |  | 255 |  |  |
| OwnerId | Owner ID | reference |  | 18 |  |  |
| PolicyNumberId | Insurance Policy ID | reference |  | 18 |  |  |
| ProductId | Product ID | reference |  | 18 |  |  |
| RecordSource | Record Source | picklist |  | 255 |  |  |
| RenewalChannel | Renewal Channel | picklist |  | 40 |  |  |
| RepairShop | Repair Shop | string |  | 100 |  |  |
| RepairShopLocation | Repair Shop Location | textarea |  | 32000 |  |  |
| ReportDate | Report Date | datetime |  |  |  |  |
| ReportNumber | Report Number | string |  | 100 |  |  |
| ReportingAuthority | Reporting Authority | string |  | 100 |  |  |
| Severity | Severity | picklist |  | 40 |  |  |
| SourceId | Source ID | reference |  | 18 |  |  |
| SourceSystem | Source System | string |  | 255 |  |  |
| SourceSystemIdentifier | Source System Identifier | string |  | 255 |  |  |
| Status | Status | picklist |  | 40 |  |  |
| Summary | Summary | textarea |  | 32000 |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |
| UsageType | Usage Type | picklist |  | 255 |  |  |
| VisitDate | Visit Date | datetime |  |  |  |  |
| VisitSite | Visit Site | textarea |  | 32000 |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
