---
title: "ContactPointPhone"
domain: sfFieldRef
topic: contactpointphone
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:53.979Z
estimatedTokens: 625
keywords: [ContactPointPhone, contact’s, phone, number, associated, individual, person, account, API, version, 48.0, later]
---

# ContactPointPhone

> Represents a contact’s phone number, which is associated with an
      individual or person account. This object is available in API version 48.0 and
    later.

# ContactPointPhone

Represents a contact’s phone number, which is associated with an individual or person account. This object is available in API version 48.0 and later.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see [ContactPointPhone](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_contactpointphone.htm "HTML (New Window)") in the Object Reference for the Salesforce Platform.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| ActiveFromDate | Active from Date | date |  |  |  |  |
| ActiveToDate | Active to Date | date |  |  |  |  |
| AreaCode | Area code | string |  | 30 |  |  |
| BestTimeToContactEndTime | Best time to contact end time | time |  |  |  |  |
| BestTimeToContactStartTime | Best time to contact start time | time |  |  |  |  |
| BestTimeToContactTimezone | Best time to contact time zone | picklist |  | 255 |  |  |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| ExtensionNumber | Extension number | string |  | 30 |  |  |
| FormattedInternationalPhoneNumber | Formatted international phone number | string |  | 250 |  |  |
| FormattedNationalPhoneNumber | Formatted national phone number | string |  | 250 |  |  |
| Id | Contact Point Phone ID | id |  | 18 |  |  |
| IsBusinessPhone | Is business phone | boolean |  |  |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| IsFaxCapable | Is fax capable | boolean |  |  |  |  |
| IsPersonalPhone | Is personal phone | boolean |  |  |  |  |
| IsPrimary | Is Primary | boolean |  |  |  |  |
| IsSmsCapable | Is SMS capable | boolean |  |  |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| LastReferencedDate | Last Referenced Date | datetime |  |  |  |  |
| LastViewedDate | Last Viewed Date | datetime |  |  |  |  |
| Name | Name | string |  | 255 |  |  |
| OwnerId | Owner ID | reference |  | 18 |  |  |
| ParentId | Parent ID | reference |  | 18 |  |  |
| PhoneType | Phone Type | picklist |  | 255 |  |  |
| PreferenceRank | Preference Rank | int | 9 |  |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |
| TelephoneNumber | Telephone number | phone |  | 40 |  |  |
| UsageType | Usage Type | picklist |  | 40 |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
