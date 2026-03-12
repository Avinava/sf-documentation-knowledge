---
title: "IntegrationProviderDef"
domain: sfFieldRef
topic: integrationproviderdef
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:01.720Z
estimatedTokens: 599
namespace: NamespacePrefix
keywords: [IntegrationProviderDef, definition, that's, applicable, integration, provider, API, version, 57.0, later]
---

# IntegrationProviderDef

> Represents the definition that's applicable to an integration provider.
      This object is available in API version 57.0 and later.

**Namespace:** `NamespacePrefix`

# IntegrationProviderDef

Represents the definition that's applicable to an integration provider. This object is available in API version 57.0 and later.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see IntegrationProviderDef in the Financial Services Cloud Developer Guide.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| ApexClassId | Class ID | reference |  | 18 |  |  |
| CanUseInIntegrationOrch | Use In Integration Orchestration | boolean |  |  |  |  |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| Description | Description | string |  | 255 |  |  |
| DeveloperName | Name | string |  | 80 |  |  |
| ExternalServiceOperationName | External Service Operation Name | string |  | 255 |  |  |
| FileBasedApexClass | File Based Apex Class | string |  | 100 |  |  |
| FileBasedExternalService | File Based External Service | string |  | 255 |  |  |
| FileBasedInputDataProcessor | File Based Input Data Processor | string |  | 255 |  |  |
| FileBasedOmniUiCard | File Based Omni UI Card | string |  | 255 |  |  |
| FileBasedOutputDataProcessor | File Based Output Data Processor | string |  | 255 |  |  |
| Id | Integration Provider Definition ID | id |  | 18 |  |  |
| InputDataProcessorId | Omni Integration Procedure Configuration ID | reference |  | 18 |  |  |
| IsActive | Active | boolean |  |  |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| IsManual | Manual | boolean |  |  |  |  |
| IsServiceTypeIntegration | Service Type Integration | boolean |  |  |  |  |
| JavaClassName | Java Class Name | string |  | 255 |  |  |
| Language | Master Language | picklist |  | 40 |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| MasterLabel | Label | string |  | 80 |  |  |
| NamespacePrefix | Namespace Prefix | string |  | 15 |  |  |
| OmniUiCardConfigId | Omni Ui Card Config ID | reference |  | 18 |  |  |
| OutputDataProcessorId | Omni Integration Procedure Configuration ID | reference |  | 18 |  |  |
| StorePayload | Store Payload | picklist |  | 255 |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |
| Type | Type | picklist |  | 255 |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
