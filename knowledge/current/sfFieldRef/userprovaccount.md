---
title: "UserProvAccount"
domain: sfFieldRef
topic: userprovaccount
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:16.387Z
estimatedTokens: 463
keywords: [UserProvAccount, links, Salesforce, user, account, third-party, target, system, Google, users, connected, apps, provisioning, enabled, API]
---

# UserProvAccount

> Represents information that links a Salesforce user account with an
      account in a third-party (target) system, such as Google, for users of connected apps with
      Salesforce user provisioning enabled. This object is available in API
        version 33.0 and later.

# UserProvAccount

Represents information that links a Salesforce user account with an account in a third-party (target) system, such as Google, for users of connected apps with Salesforce user provisioning enabled. This object is available in API version 33.0 and later.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see [UserProvAccount](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_userprovaccount.htm "HTML (New Window)") in the Object Reference for the Salesforce Platform.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| ConnectedAppId | Connected App ID | reference |  | 18 |  |  |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| DeletedDate | Deleted Date | datetime |  |  |  |  |
| ExternalEmail | External Email | string |  | 150 |  |  |
| ExternalFirstName | External First Name | string |  | 150 |  |  |
| ExternalLastName | External Last Name | string |  | 150 |  |  |
| ExternalUserId | External User Id | string |  | 150 |  |  |
| ExternalUsername | External Username | string |  | 150 |  |  |
| Id | User Provisioning Account ID | id |  | 18 |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| IsKnownLink | Manual Override | boolean |  |  |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| LinkState | Link State | picklist |  | 255 |  |  |
| Name | Name | string |  | 255 |  |  |
| SalesforceUserId | User ID | reference |  | 18 |  |  |
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
