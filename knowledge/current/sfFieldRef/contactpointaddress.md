---
title: "ContactPointAddress"
domain: sfFieldRef
topic: contactpointaddress
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:53.923Z
estimatedTokens: 646
keywords: [ContactPointAddress, contact’s, billing, shipping, address, associated, individual, person, account, API, version, 49.0, later]
---

# ContactPointAddress

> Represents a contact’s billing or shipping address, which is
         associated with an individual or person account. This object is available in API
      version 49.0 and later.

# ContactPointAddress

Represents a contact’s billing or shipping address, which is associated with an individual or person account. This object is available in API version 49.0 and later.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see [ContactPointAddress](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_contactpointaddress.htm "HTML (New Window)") in the Object Reference for the Salesforce Platform.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| ActiveFromDate | Active from Date | date |  |  |  |  |
| ActiveToDate | Active to Date | date |  |  |  |  |
| Address | Address | address |  |  |  |  |
| AddressType | Address Type | picklist |  | 40 |  |  |
| BestTimeToContactEndTime | Best time to contact end time | time |  |  |  |  |
| BestTimeToContactStartTime | Best time to contact start time | time |  |  |  |  |
| BestTimeToContactTimezone | Best time to contact time zone | picklist |  | 255 |  |  |
| City | City | string |  | 40 |  |  |
| ContactPointPhoneId | Contact Point Phone ID | reference |  | 18 |  |  |
| Country | Country | string |  | 80 |  |  |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| GeocodeAccuracy | Shipping Geocode Accuracy | picklist |  | 40 |  |  |
| Id | Contact Point Address ID | id |  | 18 |  |  |
| IsDefault | Is Default Address | boolean |  |  |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| IsPrimary | Is Primary | boolean |  |  |  |  |
| IsThirdPartyAddress | Is Third-Party Address | boolean |  |  |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| LastReferencedDate | Last Referenced Date | datetime |  |  |  |  |
| LastViewedDate | Last Viewed Date | datetime |  |  |  |  |
| Latitude | Latitude | double |  |  | 18 | 15 |
| Longitude | Longitude | double |  |  | 18 | 15 |
| Name | Name | string |  | 255 |  |  |
| OwnerId | Owner ID | reference |  | 18 |  |  |
| ParentId | Parent ID | reference |  | 18 |  |  |
| PostalCode | Zip/Postal Code | string |  | 20 |  |  |
| PreferenceRank | Preference Rank | int | 9 |  |  |  |
| State | State/Province | string |  | 80 |  |  |
| Street | Address | textarea |  | 255 |  |  |
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
