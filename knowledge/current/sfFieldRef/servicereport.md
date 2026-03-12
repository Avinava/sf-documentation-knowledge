---
title: "ServiceReport"
domain: sfFieldRef
topic: servicereport
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:13.513Z
estimatedTokens: 427
keywords: [ServiceReport, report, summarizes, work, order, line, item, service, appointment]
---

# ServiceReport

> Represents a report that summarizes a work order, work order line
			item, or service appointment.

# ServiceReport

Represents a report that summarizes a work order, work order line item, or service appointment.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see [ServiceReport](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_servicereport.htm "HTML (New Window)") in the Field Service Developer Guide and Object Reference for the Salesforce Platform.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| ContentVersionDocumentId | Content Version ID | reference |  | 18 |  |  |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| CurrencyIsoCode | Currency ISO Code | picklist |  | 3 |  |  |
| DocumentBody | Document Body | base64 |  |  |  |  |
| DocumentContentType | Document Content Type | picklist |  | 255 |  |  |
| DocumentLength | Document Length | int | 9 |  |  |  |
| DocumentName | Document Name | string |  | 40 |  |  |
| Id | Service Report ID | id |  | 18 |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| IsSigned | Signed | boolean |  |  |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| ParentId | Parent ID | reference |  | 18 |  |  |
| ServiceReportLanguage | Service Report Language | picklist |  | 255 |  |  |
| ServiceReportNumber | Service Report Name | string |  | 255 |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |
| Template | Service Report Template | string |  | 255 |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
