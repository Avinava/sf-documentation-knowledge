---
title: "ExternalDataSource"
domain: sfFieldRef
topic: externaldatasource
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:57.800Z
estimatedTokens: 508
namespace: NamespacePrefix
keywords: [ExternalDataSource, external, data, source, connection, integration, content, stored, outside, Salesforce, org, API, version, 27.0, later]
---

# ExternalDataSource

> Represents an external data source, which defines connection details
      for integration with data and content that are stored outside the Salesforce org. This
    object is available in API version 27.0 and later.

**Namespace:** `NamespacePrefix`

# ExternalDataSource

Represents an external data source, which defines connection details for integration with data and content that are stored outside the Salesforce org. This object is available in API version 27.0 and later.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see [ExternalDataSource](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_externaldatasource.htm "HTML (New Window)") in the Object Reference for the Salesforce Platform.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| AuthProviderId | Auth. Provider ID | reference |  | 18 |  |  |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| CustomConfiguration | Custom Configuration | textarea |  | 4000 |  |  |
| DeveloperName | Name | string |  | 80 |  |  |
| Endpoint | URL | textarea |  | 1000 |  |  |
| Id | External Data Source ID | id |  | 18 |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| IsWritable | Writable External Objects | boolean |  |  |  |  |
| Language | Master Language | picklist |  | 40 |  |  |
| LargeIconId | Static Resource ID | reference |  | 18 |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| MasterLabel | External Data Source | string |  | 80 |  |  |
| NamedCredentialId | Named Credential ID | reference |  | 18 |  |  |
| NamespacePrefix | Namespace Prefix | string |  | 15 |  |  |
| PrincipalType | Identity Type | picklist |  | 255 |  |  |
| Protocol | Authentication Protocol | picklist |  | 255 |  |  |
| Repository | Default External Repository | string |  | 255 |  |  |
| SmallIconId | Static Resource ID | reference |  | 18 |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |
| Type | Class ID | picklist |  | 255 |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
