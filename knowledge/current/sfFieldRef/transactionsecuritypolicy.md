---
title: "TransactionSecurityPolicy"
domain: sfFieldRef
topic: transactionsecuritypolicy
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:15.514Z
estimatedTokens: 456
namespace: NamespacePrefix
keywords: [TransactionSecurityPolicy, transaction, security, policy, definition]
---

# TransactionSecurityPolicy

> Represents a transaction security policy definition.

**Namespace:** `NamespacePrefix`

# TransactionSecurityPolicy

Represents a transaction security policy definition.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see [TransactionSecurityPolicy](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_transactionsecuritypolicy.htm "HTML (New Window)") in the Object Reference for the Salesforce Platform.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| ActionConfig | Action Configuration | textarea |  | 4000 |  |  |
| ApexPolicyId | Class ID | reference |  | 18 |  |  |
| BlockMessage | Block Message | string |  | 1000 |  |  |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| CustomEmailContent | Custom Email Content | string |  | 1333 |  |  |
| Description | Description | string |  | 1000 |  |  |
| DeveloperName | Name | string |  | 80 |  |  |
| EventName | Event Name | picklist |  | 255 |  |  |
| EventType | Event Type | picklist |  | 255 |  |  |
| ExecutionUserId | User ID | reference |  | 18 |  |  |
| Id | Transaction Security Policy ID | id |  | 18 |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| Language | Master Language | picklist |  | 40 |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| MasterLabel | Name | string |  | 80 |  |  |
| NamespacePrefix | Namespace Prefix | string |  | 15 |  |  |
| ResourceName | Resource Name | string |  | 100 |  |  |
| State | State | picklist |  | 255 |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |
| Type | Policy Type | picklist |  | 255 |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
