---
title: "NetworkUserHistoryRecent"
domain: sfFieldRef
topic: networkuserhistoryrecent
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:04.891Z
estimatedTokens: 431
keywords: [NetworkUserHistoryRecent, Experience, Cloud, site, user’s, history, accessed, records, API, version, 42.0, later]
---

# NetworkUserHistoryRecent

> Represents an Experience Cloud site user’s history of accessed
   records. This object is available in API version 42.0 and later.

# NetworkUserHistoryRecent

Represents an Experience Cloud site user’s history of accessed records. This object is available in API version 42.0 and later.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see [NetworkUserHistoryRecent](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_networkuserhistoryrecent.htm "HTML (New Window)") in the Object Reference for the Salesforce Platform.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| AccessTimestamp | Access Timestamp | datetime |  |  |  |  |
| ActionType | Action Type | picklist |  | 255 |  |  |
| CombinedIdField | Combined ID field | string |  | 45 |  |  |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| DomainName | Domain Name | string |  | 255 |  |  |
| FeedCommentId | Feed Comment ID | reference |  | 18 |  |  |
| FeedItemId | Feed Item ID | reference |  | 18 |  |  |
| Id | Network User History Recent ID | id |  | 18 |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| NetworkId | Network ID | reference |  | 18 |  |  |
| NetworkUserId | User ID | reference |  | 18 |  |  |
| RecordId | Record ID | reference |  | 18 |  |  |
| RecordKeyPrefix | Record Key Prefix | string |  | 3 |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |
| Url | URL | string |  | 255 |  |  |
| UserType | User Type | picklist |  | 255 |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
