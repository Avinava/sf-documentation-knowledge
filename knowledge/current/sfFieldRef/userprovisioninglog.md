---
title: "UserProvisioningLog"
domain: sfFieldRef
topic: userprovisioninglog
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:16.413Z
estimatedTokens: 367
keywords: [UserProvisioningLog, messages, generated, process, provisioning, users, third-party, applications, API, version, 33.0, later]
---

# UserProvisioningLog

> Represents messages generated during the process of provisioning users
      for third-party applications. This object is available in API
      version 33.0 and later.

# UserProvisioningLog

Represents messages generated during the process of provisioning users for third-party applications. This object is available in API version 33.0 and later.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see [UserProvisioningLog](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_userprovisioninglog.htm "HTML (New Window)") in the Object Reference for the Salesforce Platform.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| Details | Details | textarea |  | 4000 |  |  |
| ExternalUserId | External User Id | string |  | 150 |  |  |
| ExternalUsername | External Username | string |  | 150 |  |  |
| Id | User Provisioning Log ID | id |  | 18 |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| Name | Name | string |  | 255 |  |  |
| Status | Status | string |  | 150 |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |
| UserId | User ID | reference |  | 18 |  |  |
| UserProvisioningRequestId | User Provisioning Request ID | reference |  | 18 |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
