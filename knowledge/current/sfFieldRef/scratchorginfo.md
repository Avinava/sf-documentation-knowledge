---
title: "ScratchOrgInfo"
domain: sfFieldRef
topic: scratchorginfo
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:13.133Z
estimatedTokens: 791
namespace: Namespace
keywords: [ScratchOrgInfo, scratch, org, audit, log, keep, creation, deletion, API, version, 41.0, later]
---

# ScratchOrgInfo

> Represents a scratch org and its audit log. Use this object to
			create a scratch org and keep a log of its creation and deletion. This object is
		available in API version 41.0 and later.

**Namespace:** `Namespace`

# ScratchOrgInfo

Represents a scratch org and its audit log. Use this object to create a scratch org and keep a log of its creation and deletion. This object is available in API version 41.0 and later.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see [ScratchOrgInfo](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_scratchorginfo.htm "HTML (New Window)") in the Object Reference for the Salesforce Platform.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| AdminEmail | Requested Admin Email | email |  | 80 |  |  |
| AuthCode | Connected App Authorization Code | string |  | 120 |  |  |
| ConnectedAppCallbackUrl | Connected App Callback URL | textarea |  | 2000 |  |  |
| ConnectedAppConsumerKey | Connected App Consumer Key | string |  | 120 |  |  |
| Country | Requested Country | string |  | 3 |  |  |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| CurrencyIsoCode | Currency ISO Code | picklist |  | 3 |  |  |
| DeletedBy | Deleted By | string |  | 15 |  |  |
| DeletedDate | Deleted Date | date |  |  |  |  |
| Description | Description | textarea |  | 2000 |  |  |
| DurationDays | Requested Duration In Days | int | 9 |  |  |  |
| Edition | Edition | picklist |  | 255 |  |  |
| ErrorCode | Error Code | string |  | 8 |  |  |
| ExpirationDate | Expiration Date | date |  |  |  |  |
| Features | Features | textarea |  | 10000 |  |  |
| HasSampleData | Has Sample Data | boolean |  |  |  |  |
| Id | Scratch Org Info ID | id |  | 18 |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| Language | Requested Language | picklist |  | 255 |  |  |
| LastLoginDate | Last Login Date | date |  |  |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| LastReferencedDate | Last Referenced Date | datetime |  |  |  |  |
| LastViewedDate | Last Viewed Date | datetime |  |  |  |  |
| LoginUrl | Login URL | textarea |  | 2000 |  |  |
| Name | Number | string |  | 255 |  |  |
| Namespace | Namespace | string |  | 15 |  |  |
| OrgName | Org Name | string |  | 80 |  |  |
| OwnerId | Owner ID | reference |  | 18 |  |  |
| Package2AncestorIds | Requested Package2 Ancestor IDs | textarea |  | 2000 |  |  |
| Release | Release | picklist |  | 255 |  |  |
| ScratchOrg | Scratch Org ID | string |  | 15 |  |  |
| SignupCountry | Signup Country | string |  | 3 |  |  |
| SignupEmail | Signup Email | email |  | 80 |  |  |
| SignupInstance | Signup Instance | string |  | 15 |  |  |
| SignupLanguage | Signup Language | picklist |  | 255 |  |  |
| SignupTrialDays | Signup Trial Days | int | 9 |  |  |  |
| SignupUsername | Signup Username | string |  | 80 |  |  |
| SourceOrg | Shape Source Org | string |  | 18 |  |  |
| Status | Status | picklist |  | 255 |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |
| Username | Requested Username | string |  | 80 |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
