---
title: "RegisteredExternalService"
domain: sfFieldRef
topic: registeredexternalservice
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:12.005Z
estimatedTokens: 437
namespace: NamespacePrefix
keywords: [RegisteredExternalService, registered, external, service, checkout, integrations, data, integrators]
---

# RegisteredExternalService

> Represents a registered external service used for checkout integrations by data
      integrators.

**Namespace:** `NamespacePrefix`

# RegisteredExternalService

Represents a registered external service used for checkout integrations by data integrators.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see [RegisteredExternalService](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_registeredexternalservice.htm "HTML (New Window)") in the Object Reference for the Salesforce Platform.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| ConfigUrl | Configure Url | url |  | 1000 |  |  |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| Description | Description | string |  | 255 |  |  |
| DeveloperName | Name | string |  | 80 |  |  |
| DocumentationUrl | Documentation Url | url |  | 1000 |  |  |
| ExtensionPointName | Extension Point Name | picklist |  | 255 |  |  |
| ExternalServiceProviderId | Class ID | reference |  | 18 |  |  |
| ExternalServiceProviderType | External Service Provider Type | picklist |  | 255 |  |  |
| IconUri | Icon Uri | url |  | 1000 |  |  |
| Id | Registered External Service ID | id |  | 18 |  |  |
| IsApplication | Is Application | boolean |  |  |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| Language | Master Language | picklist |  | 40 |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| MasterLabel | Label | string |  | 80 |  |  |
| NamespacePrefix | Namespace Prefix | string |  | 15 |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
