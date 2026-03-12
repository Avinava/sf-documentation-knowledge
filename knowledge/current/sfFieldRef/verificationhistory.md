---
title: "VerificationHistory"
domain: sfFieldRef
topic: verificationhistory
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:36:16.585Z
estimatedTokens: 428
keywords: [VerificationHistory, past, six, months, org, users’, attempts, verify, their, identity, API, version, 36.0, later]
---

# VerificationHistory

> Represents the past six months of your org users’ attempts to verify
			their identity. This object is available in API version 36.0 and later.

# VerificationHistory

Represents the past six months of your org users’ attempts to verify their identity. This object is available in API version 36.0 and later.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see [VerificationHistory](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_verificationhistory.htm "HTML (New Window)") in the Object Reference for the Salesforce Platform.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| Activity | User Activity | picklist |  | 255 |  |  |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| EventGroup | Verification Attempt | int | 9 |  |  |  |
| Id | Identity Verification ID | id |  | 18 |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| LoginGeoId | Login Geo Data ID | reference |  | 18 |  |  |
| LoginHistoryId | Login History ID | reference |  | 18 |  |  |
| Policy | Triggered By | picklist |  | 255 |  |  |
| Remarks | Activity Message | string |  | 255 |  |  |
| ResourceId | Connected App ID | reference |  | 18 |  |  |
| SourceIp | Source IP | string |  | 200 |  |  |
| Status | Status | picklist |  | 255 |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |
| UserId | User ID | reference |  | 18 |  |  |
| VerificationMethod | Method | picklist |  | 255 |  |  |
| VerificationTime | Time | datetime |  |  |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
