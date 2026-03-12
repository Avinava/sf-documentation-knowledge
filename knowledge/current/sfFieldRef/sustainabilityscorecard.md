---
title: "SustainabilityScorecard"
domain: sfFieldRef
topic: sustainabilityscorecard
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:14.896Z
estimatedTokens: 834
keywords: [SustainabilityScorecard, annual, sustainability, scorecard, third-party, organizations, whose, data, calculate, scope, emissions]
---

# SustainabilityScorecard

> Represents information about the annual sustainability scorecard of third-party organizations whose data is used to calculate scope 3 emissions.

# SustainabilityScorecard

Represents information about the annual sustainability scorecard of third-party organizations whose data is used to calculate scope 3 emissions.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see SustainabilityScorecard in the Net Zero Cloud Developer Guide.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| AllocationStatus | Allocation Status | picklist |  | 255 |  |  |
| CompanyAnnualExpenditure | Total Spent Amount | double |  |  | 18 | 2 |
| CompanyAnnualExpenditureEmssn | Annual Spend Based Scope 3 Emissions | double |  |  | 18 | 2 |
| CompanyEmissionsAllocationPct | Company Emissions Allocation Percentage | percent |  |  | 3 | 0 |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| Description | Description | textarea |  | 1000 |  |  |
| EmissionAllocationType | Supplier-Provided Emissions Type | picklist |  | 255 |  |  |
| EndDate | End Date | date |  |  |  |  |
| FinalScorecardEmissions | Final Scorecard Emissions | double |  |  | 18 | 2 |
| Id | Sustainability Scorecard ID | id |  | 18 |  |  |
| IsCurrentSupplierScorecard | Current Supplier Scorecard | boolean |  |  |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| LastReferencedDate | Last Referenced Date | datetime |  |  |  |  |
| LastViewedDate | Last Viewed Date | datetime |  |  |  |  |
| Name | Name | string |  | 255 |  |  |
| OwnerId | Owner ID | reference |  | 18 |  |  |
| PercentageBasedEmissions | Percentage Based Emissions | double |  |  | 18 | 2 |
| ReportingDueDate | Reporting Due Date | date |  |  |  |  |
| ScienceBasedTargetStatus | Science Based Target Status | picklist |  | 40 |  |  |
| Scope1Emissions | Scope 1 Emissions (tCO2e) | double |  |  | 18 | 2 |
| Scope2LocationBasedEmissions | Scope 2 Location-Based Emissions (tCO2e) | double |  |  | 18 | 2 |
| Scope2MarkedBasedEmissions | Scope 2 Market-Based Emissions (tCO2e) | double |  |  | 18 | 2 |
| Scope3Emissions | Scope 3 Emissions (tCO2e) | double |  |  | 18 | 2 |
| Scope3EmssnCalculationMeasure | Scope 3 Emissions Calculation Measure | picklist |  | 255 |  |  |
| ScopestoIncludeinCalc | Scopes to Include in Calculation | picklist |  | 255 |  |  |
| StartDate | Start Date | date |  |  |  |  |
| Status | Status | picklist |  | 40 |  |  |
| SupplierAnnualRevenue | Supplier Annual Revenue | double |  |  | 18 | 2 |
| SupplierAnnualRevenueEmissions | Supplier Annual Revenue Emissions | double |  |  | 18 | 2 |
| SupplierClassification | Supplier Classification | picklist |  | 40 |  |  |
| SupplierContactId | Contact ID | reference |  | 18 |  |  |
| SupplierEmssnRdctnCmtType | Supplier Emissions Reduction Commitment Type | picklist |  | 40 |  |  |
| SupplierId | Supplier ID | reference |  | 18 |  |  |
| SupplierProvidedEmissions | Supplier Provided Emissions | double |  |  | 18 | 2 |
| SupplierReportingScope | Supplier Reporting Scope | picklist |  | 40 |  |  |
| SupplierTier | Supplier Tier | picklist |  | 40 |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
