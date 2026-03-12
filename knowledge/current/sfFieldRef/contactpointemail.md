---
title: "ContactPointEmail"
domain: sfFieldRef
topic: contactpointemail
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:53.960Z
estimatedTokens: 546
keywords: [ContactPointEmail, contact’s, email, associated, individual, person, account, API, version, 48.0, later]
---

# ContactPointEmail

> Represents a contact’s email, which is  associated with an individual
      or person account. This object is available in API version 48.0 and later.

# ContactPointEmail

Represents a contact’s email, which is associated with an individual or person account. This object is available in API version 48.0 and later.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see [ContactPointEmail](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_contactpointemail.htm "HTML (New Window)") in the Object Reference for the Salesforce Platform.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| ActiveFromDate | Active from Date | date |  |  |  |  |
| ActiveToDate | Active to Date | date |  |  |  |  |
| BestTimeToContactEndTime | Best time to contact end time | time |  |  |  |  |
| BestTimeToContactStartTime | Best time to contact start time | time |  |  |  |  |
| BestTimeToContactTimezone | Best time to contact time zone | picklist |  | 255 |  |  |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| EmailAddress | Email address | email |  | 80 |  |  |
| EmailDomain | Email domain | string |  | 250 |  |  |
| EmailLatestBounceDateTime | Email latest bounce date time | datetime |  |  |  |  |
| EmailLatestBounceReasonText | Email latest bounce reason text | string |  | 250 |  |  |
| EmailMailBox | Email mail box | string |  | 250 |  |  |
| Id | Contact Point Email ID | id |  | 18 |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| IsPrimary | Is Primary | boolean |  |  |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| LastReferencedDate | Last Referenced Date | datetime |  |  |  |  |
| LastViewedDate | Last Viewed Date | datetime |  |  |  |  |
| Name | Name | string |  | 255 |  |  |
| OwnerId | Owner ID | reference |  | 18 |  |  |
| ParentId | Parent ID | reference |  | 18 |  |  |
| PreferenceRank | Preference Rank | int | 9 |  |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |
| UsageType | Usage Type | picklist |  | 40 |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
