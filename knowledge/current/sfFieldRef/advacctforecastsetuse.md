---
title: "AdvAcctForecastSetUse"
domain: sfFieldRef
topic: advacctforecastsetuse
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:46.624Z
estimatedTokens: 392
keywords: [AdvAcctForecastSetUse, junction, advanced, account, forecast, another, whose, record, serves, context, generating, forecasts, manufacturing, program, Sustainability]
---

# AdvAcctForecastSetUse

> Represents a junction between an advanced account forecast set and another object whose record serves as the context for generating forecasts. For example, a
			manufacturing program or a Sustainability Cloud object’s record can be the context for generating forecasts. This object is available in API version 55.0 and later.

# AdvAcctForecastSetUse

Represents a junction between an advanced account forecast set and another object whose record serves as the context for generating forecasts. For example, a manufacturing program or a Sustainability Cloud object’s record can be the context for generating forecasts. This object is available in API version 55.0 and later.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see AdvAcctForecastSetUse in the Manufacturing Cloud Developer Guide.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| ExternalReferenceNumber | External Reference Number | string |  | 80 |  |  |
| ForecastContextId | Forecast Context ID | reference |  | 18 |  |  |
| Id | Advanced Account Forecast Set Use ID | id |  | 18 |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| LastCalculationDate | Last Calculation Date | date |  |  |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| LastReferencedDate | Last Referenced Date | datetime |  |  |  |  |
| LastViewedDate | Last Viewed Date | datetime |  |  |  |  |
| Name | Name | string |  | 255 |  |  |
| OwnerId | Owner ID | reference |  | 18 |  |  |
| Status | Status | picklist |  | 255 |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
