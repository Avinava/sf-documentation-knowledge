---
title: "ActiveScratchOrg"
domain: sfFieldRef
topic: activescratchorg
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:46.393Z
estimatedTokens: 519
namespace: Namespace
keywords: [ActiveScratchOrg, active, scratch, org, API, version, 41.0, later]
---

# ActiveScratchOrg

> Represents an active scratch org. This object is available in
		API version 41.0 and later.

**Namespace:** `Namespace`

# ActiveScratchOrg

Represents an active scratch org. This object is available in API version 41.0 and later.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see [ActiveScratchOrg](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_activescratchorg.htm "HTML (New Window)") in the Object Reference for the Salesforce Platform.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| CurrencyIsoCode | Currency ISO Code | picklist |  | 3 |  |  |
| Description | Description | textarea |  | 2000 |  |  |
| Edition | Edition | picklist |  | 255 |  |  |
| ExpirationDate | Expiration Date | date |  |  |  |  |
| Features | Features | textarea |  | 10000 |  |  |
| HasSampleData | Has Sample Data | boolean |  |  |  |  |
| Id | Active Scratch Org ID | id |  | 18 |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| LastLoginDate | Last Login Date | date |  |  |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| LastReferencedDate | Last Referenced Date | datetime |  |  |  |  |
| LastViewedDate | Last Viewed Date | datetime |  |  |  |  |
| Name | Number | string |  | 255 |  |  |
| Namespace | Namespace | string |  | 9 |  |  |
| OrgName | Org Name | string |  | 80 |  |  |
| OwnerId | Owner ID | reference |  | 18 |  |  |
| ScratchOrg | Scratch Org ID | string |  | 15 |  |  |
| ScratchOrgInfoId | Scratch Org Info ID | reference |  | 18 |  |  |
| SignupEmail | Email | email |  | 80 |  |  |
| SignupInstance | Instance | string |  | 8 |  |  |
| SignupTrialDays | Active Days | int | 9 |  |  |  |
| SignupUsername | Username | string |  | 80 |  |  |
| Snapshot | Snapshot | string |  | 80 |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
