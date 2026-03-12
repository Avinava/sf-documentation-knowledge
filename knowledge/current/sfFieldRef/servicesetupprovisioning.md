---
title: "ServiceSetupProvisioning"
domain: sfFieldRef
topic: servicesetupprovisioning
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:36:13.613Z
estimatedTokens: 384
keywords: [ServiceSetupProvisioning, task, completed, Service, Setup, Assistant, API, version, 52.0, later]
---

# ServiceSetupProvisioning

> Represents a task completed by the Service Setup Assistant. This object
      is available in API version 52.0 and later.

# ServiceSetupProvisioning

Represents a task completed by the Service Setup Assistant. This object is available in API version 52.0 and later.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see [ServiceSetupProvisioning](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_servicesetupprovisioning.htm "HTML (New Window)") in the Object Reference for the Salesforce Platform.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| AttemptOrdinal | Attempt Ordinal | int | 9 |  |  |  |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| CurrencyIsoCode | Currency ISO Code | picklist |  | 3 |  |  |
| Id | Service Setup Provisioning Id | id |  | 18 |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| JobName | Job Name | string |  | 125 |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| Name | Name | string |  | 255 |  |  |
| Status | Status | picklist |  | 255 |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |
| TaskAction | Task Action | string |  | 125 |  |  |
| TaskActionContext | Task Action Context | string |  | 255 |  |  |
| TaskContext | Task Context | textarea |  | 32000 |  |  |
| TaskName | Task Name | string |  | 125 |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
