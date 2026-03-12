---
title: "UserRecordAccess"
domain: sfFieldRef
topic: userrecordaccess
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:16.430Z
estimatedTokens: 306
keywords: [UserRecordAccess, user’s, access, records, API, version, 24.0, later, doesn’t, consider, whether, blocked, restriction, rule]
---

# UserRecordAccess

> Represents a user’s access to a set of records. This object
            is read only and is available in API version 24.0 and later. This object doesn’t
            consider whether a user’s access is blocked by a restriction rule.

# UserRecordAccess

Represents a user’s access to a set of records. This object is read only and is available in API version 24.0 and later. This object doesn’t consider whether a user’s access is blocked by a restriction rule.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see [UserRecordAccess](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_userrecordaccess.htm "HTML (New Window)") in the Object Reference for the Salesforce Platform.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| HasAllAccess | Has All Access | boolean |  |  |  |  |
| HasDeleteAccess | Has Delete Access | boolean |  |  |  |  |
| HasEditAccess | Has Edit Access | boolean |  |  |  |  |
| HasReadAccess | Has Read Access | boolean |  |  |  |  |
| HasTransferAccess | Has Transfer Access | boolean |  |  |  |  |
| Id | User Record Access ID | id |  | 18 |  |  |
| MaxAccessLevel | Maximum Access Level | picklist |  | 40 |  |  |
| RecordId | Record ID | picklist |  | 40 |  |  |
| UserId | User ID | reference |  | 18 |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
