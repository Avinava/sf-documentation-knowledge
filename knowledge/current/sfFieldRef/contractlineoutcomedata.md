---
title: "ContractLineOutcomeData"
domain: sfFieldRef
topic: contractlineoutcomedata
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:54.467Z
estimatedTokens: 432
keywords: [ContractLineOutcomeData, contract, line, outcome’s, captured, data, stores, start, date, end, API, version, 58.0, later]
---

# ContractLineOutcomeData

> Represents the contract line outcome’s captured data. It stores the data that
         was captured between the contract line outcome’s start date and end date. This object is
         available in API version 58.0 and later.

# ContractLineOutcomeData

Represents the contract line outcome’s captured data. It stores the data that was captured between the contract line outcome’s start date and end date. This object is available in API version 58.0 and later.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see [ContractLineOutcomeData](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_contractlineoutcomedata.htm "HTML (New Window)") in the Field Service Developer Guide and Object Reference for the Salesforce Platform.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| CalculatedValue | Calculated Value | double |  |  | 18 | 2 |
| CaptureDate | Capture Date | datetime |  |  |  |  |
| ContractLineOutcomeId | Contract Line Outcome ID | reference |  | 18 |  |  |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| CurrencyIsoCode | Currency ISO Code | picklist |  | 3 |  |  |
| Id | Contract Line Outcome Data ID | id |  | 18 |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| KeyPerformanceIndicator | Key Performance Indicator | string |  | 255 |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| LastReferencedDate | Last Referenced Date | datetime |  |  |  |  |
| LastViewedDate | Last Viewed Date | datetime |  |  |  |  |
| Name | Name | string |  | 255 |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |
| Value | Value | double |  |  | 18 | 2 |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
