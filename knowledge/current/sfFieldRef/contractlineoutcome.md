---
title: "ContractLineOutcome"
domain: sfFieldRef
topic: contractlineoutcome
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:54.458Z
estimatedTokens: 520
keywords: [ContractLineOutcome, contract, line, outcome’s, captured, data, capturing, API, version, 58.0, later]
---

# ContractLineOutcome

> Represents information on a contract line outcome’s captured data and other
         related parameters that are used when capturing data. This object is available in API
      version 58.0 and later.

# ContractLineOutcome

Represents information on a contract line outcome’s captured data and other related parameters that are used when capturing data. This object is available in API version 58.0 and later.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see [ContractLineOutcome](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_contractlineoutcome.htm "HTML (New Window)") in the Field Service Developer Guide and Object Reference for the Salesforce Platform.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| CalculationMethod | Calculation Method | picklist |  | 255 |  |  |
| CaptureFrequency | Capture Frequency | picklist |  | 255 |  |  |
| ComplianceStatus | Compliance Status | picklist |  | 255 |  |  |
| ContractLineItemId | Contract Line Item ID | reference |  | 18 |  |  |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| CurrencyIsoCode | Currency ISO Code | picklist |  | 3 |  |  |
| Description | Description | textarea |  | 32000 |  |  |
| EndDate | End Date | datetime |  |  |  |  |
| Id | Contract Line Outcome ID | id |  | 18 |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| LastReferencedDate | Last Referenced Date | datetime |  |  |  |  |
| LastViewedDate | Last Viewed Date | datetime |  |  |  |  |
| Name | Name | string |  | 255 |  |  |
| NextDataCaptureDate | Next Data Capture Date | datetime |  |  |  |  |
| OwnerId | Owner ID | reference |  | 18 |  |  |
| RecordsetFilterCriteriaId | Recordset Filter Criteria ID | reference |  | 18 |  |  |
| ServiceContractId | Service Contract ID | reference |  | 18 |  |  |
| StartDate | Start Date | datetime |  |  |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
