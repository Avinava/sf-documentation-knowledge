---
title: "IntegrationProviderExecution"
domain: sfFieldRef
topic: integrationproviderexecution
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:01.727Z
estimatedTokens: 399
keywords: [IntegrationProviderExecution, execution, instance, integration, provider, API, version, 61.0, later]
---

# IntegrationProviderExecution

> Represents the execution instance of an integration provider.  This
      object is available in API version 61.0 and later.

# IntegrationProviderExecution

Represents the execution instance of an integration provider. This object is available in API version 61.0 and later.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see IntegrationProviderExecution in the Financial Services Cloud Developer Guide.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| ErrorCode | Error Code | string |  | 255 |  |  |
| ExecutionDateTime | Execution Date Time | datetime |  |  |  |  |
| Id | Integration Provider Execution ID | id |  | 18 |  |  |
| IntegrationProviderDefId | Integration Provider Definition ID | reference |  | 18 |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| LastReferencedDate | Last Referenced Date | datetime |  |  |  |  |
| LastViewedDate | Last Viewed Date | datetime |  |  |  |  |
| Name | Name | string |  | 255 |  |  |
| OwnerId | Owner ID | reference |  | 18 |  |  |
| ReferenceObjectIdentifier | Reference Object Identifier ID | string |  | 18 |  |  |
| RequestPayloadId | Content Document ID | reference |  | 18 |  |  |
| ResponsePayloadId | Content Document ID | reference |  | 18 |  |  |
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
