---
title: "UserProvisioningConfig"
domain: sfFieldRef
topic: userprovisioningconfig
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:16.407Z
estimatedTokens: 488
namespace: NamespacePrefix
keywords: [UserProvisioningConfig, flow, user, provisioning, process, attributes, API, version, 34.0, later]
---

# UserProvisioningConfig

> Represents information for a flow to use during a user provisioning
			request process, such as the attributes for an update.
		This object is available in API version 34.0 and
		later.

**Namespace:** `NamespacePrefix`

# UserProvisioningConfig

Represents information for a flow to use during a user provisioning request process, such as the attributes for an update. This object is available in API version 34.0 and later.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see [UserProvisioningConfig](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_userprovisioningconfig.htm "HTML (New Window)") in the Object Reference for the Salesforce Platform.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| ApprovalRequired | Approval Required | textarea |  | 4000 |  |  |
| ConnectedAppId | Connected App ID | reference |  | 18 |  |  |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| DeveloperName | Name | string |  | 80 |  |  |
| Enabled | Enabled | boolean |  |  |  |  |
| EnabledOperations | Enabled Operations | textarea |  | 4000 |  |  |
| Id | User Provisioning Configuration ID | id |  | 18 |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| Language | Master Language | picklist |  | 40 |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| LastReconDateTime | Last Recon Date | datetime |  |  |  |  |
| MasterLabel | Label | string |  | 80 |  |  |
| NamedCredentialId | Named Credential ID | reference |  | 18 |  |  |
| NamespacePrefix | Namespace Prefix | string |  | 15 |  |  |
| Notes | Notes | textarea |  | 65536 |  |  |
| OnUpdateAttributes | On Update Attributes | textarea |  | 4000 |  |  |
| ReconFilter | Recon Filter | string |  | 255 |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |
| UserAccountMapping | User Account Mapping | textarea |  | 4000 |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
