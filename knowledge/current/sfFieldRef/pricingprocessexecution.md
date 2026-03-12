---
title: "PricingProcessExecution"
domain: sfFieldRef
topic: pricingprocessexecution
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:08.704Z
estimatedTokens: 391
keywords: [PricingProcessExecution, record, generated, execution, discovery, pricing, procedure, Multiple, procedures, may, performed, API, call, recorded, version]
---

# PricingProcessExecution

> Represents a record generated during the execution of a discovery or pricing
         procedure. Multiple procedures may be performed within a single API call, with each
         recorded in a Pricing API Execution record. This object is available in API version
      63.0 and later.

# PricingProcessExecution

Represents a record generated during the execution of a discovery or pricing procedure. Multiple procedures may be performed within a single API call, with each recorded in a Pricing API Execution record. This object is available in API version 63.0 and later.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see PricingProcessExecution in the Salesforce Pricing Guide.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| CurrencyIsoCode | Currency ISO Code | picklist |  | 3 |  |  |
| ExecutionKey | Execution Key | string |  | 100 |  |  |
| ExecutionType | Execution Type | picklist |  | 20 |  |  |
| ExecutionTypeKey | Execution Type Key | string |  | 100 |  |  |
| Id | Process Execution Call ID | id |  | 18 |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| LastReferencedDate | Last Referenced Date | datetime |  |  |  |  |
| LastViewedDate | Last Viewed Date | datetime |  |  |  |  |
| Message | Message | textarea |  | 2000 |  |  |
| Name | Name | string |  | 255 |  |  |
| OwnerId | Owner ID | reference |  | 18 |  |  |
| Status | Status | picklist |  | 20 |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
