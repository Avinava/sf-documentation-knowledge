---
title: "TaxEngineInteractionLog"
domain: sfFieldRef
topic: taxengineinteractionlog
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:15.143Z
estimatedTokens: 602
keywords: [TaxEngineInteractionLog, record, communication, external, tax, engine, calculation, API, version, 55.0, later]
---

# TaxEngineInteractionLog

> A record of a communication with an external tax engine following a tax
         calculation request. This object is available in API version 55.0 and later.

# TaxEngineInteractionLog

A record of a communication with an external tax engine following a tax calculation request. This object is available in API version 55.0 and later.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see [TaxEngineInteractionLog](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_taxengineinteractionlog.htm "HTML (New Window)") in the Billing Guide and Object Reference for the Salesforce Platform.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| Description | Description | textarea |  | 1000 |  |  |
| DocumentCode | Document Code | string |  | 64 |  |  |
| EffectiveDate | Effective Date | datetime |  |  |  |  |
| Id | Tax Engine Interaction Log ID | id |  | 18 |  |  |
| InteractionHttpStatusCode | Interaction HTTP Status Code Tax | int | 9 |  |  |  |
| InteractionType | Interaction Type | picklist |  | 255 |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| LastReferencedDate | Last Referenced Date | datetime |  |  |  |  |
| LastViewedDate | Last Viewed Date | datetime |  |  |  |  |
| ReferenceEntity | Reference Entity | string |  | 32 |  |  |
| RequestBody | Request Body | base64 |  |  |  |  |
| RequestContentType | Request Content Type | picklist |  | 255 |  |  |
| RequestLength | Request Length | int | 9 |  |  |  |
| RequestName | Request Name | string |  | 40 |  |  |
| RequestTaxTransactionType | Request Tax Transaction Type | picklist |  | 255 |  |  |
| ResponseBody | Response Body | base64 |  |  |  |  |
| ResponseContentType | Response Content Type | picklist |  | 255 |  |  |
| ResponseLength | Response Length | int | 9 |  |  |  |
| ResponseName | Response Name | string |  | 40 |  |  |
| ResponseTaxTransactionType | Response Tax Transaction Type | picklist |  | 255 |  |  |
| ResultCode | Result Code | picklist |  | 255 |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |
| TaxEngineInteractionLogNumber | Tax Engine Interaction Log Number | string |  | 255 |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
