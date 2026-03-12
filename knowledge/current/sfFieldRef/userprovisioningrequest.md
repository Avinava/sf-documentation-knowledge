---
title: "UserProvisioningRequest"
domain: sfFieldRef
topic: userprovisioningrequest
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:16.421Z
estimatedTokens: 509
keywords: [UserProvisioningRequest, individual, provisioning, user, account, third-party, service, system, another, Salesforce, organization, API, version, 33.0, later]
---

# UserProvisioningRequest

> Represents an individual provisioning request to create, update, or
			delete a single user account in a third-party service system (or another Salesforce
			organization). This object is available in API version 33.0
			and later.

# UserProvisioningRequest

Represents an individual provisioning request to create, update, or delete a single user account in a third-party service system (or another Salesforce organization). This object is available in API version 33.0 and later.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see [UserProvisioningRequest](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_userprovisioningrequest.htm "HTML (New Window)") in the Object Reference for the Salesforce Platform.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| AppName | App Name | string |  | 150 |  |  |
| ApprovalStatus | Approval Status | picklist |  | 255 |  |  |
| ConnectedAppId | Connected App ID | reference |  | 18 |  |  |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| ExternalUserId | External User Id | string |  | 150 |  |  |
| Id | User Provisioning Request ID | id |  | 18 |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| ManagerId | User ID | reference |  | 18 |  |  |
| Name | Name | string |  | 255 |  |  |
| Operation | Operation | picklist |  | 255 |  |  |
| OwnerId | Owner ID | reference |  | 18 |  |  |
| ParentId | User Provisioning Request ID | reference |  | 18 |  |  |
| RetryCount | Retry Count | int | 9 |  |  |  |
| SalesforceUserId | User ID | reference |  | 18 |  |  |
| ScheduleDate | Scheduled Provisioning Time | datetime |  |  |  |  |
| State | State | picklist |  | 255 |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |
| UserProvAccountId | User Provisioning Account ID | reference |  | 18 |  |  |
| UserProvConfigId | User Provisioning Configuration ID | reference |  | 18 |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
