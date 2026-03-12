---
title: "LoginGeo"
domain: sfFieldRef
topic: logingeo
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:03.047Z
estimatedTokens: 384
keywords: [LoginGeo, geographic, location, user’s, address, login, event, Due, nature, geolocation, technology, accuracy, country, city, postal]
---

# LoginGeo

> Represents the geographic location of the user’s IP address for a
         login event. Due to the nature of geolocation technology, the accuracy of geolocation
         fields (for example, country, city, postal code) may vary. This object is available in
      API version 34.0 and later.

# LoginGeo

Represents the geographic location of the user’s IP address for a login event. Due to the nature of geolocation technology, the accuracy of geolocation fields (for example, country, city, postal code) may vary. This object is available in API version 34.0 and later.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see [LoginGeo](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_logingeo.htm "HTML (New Window)") in the Object Reference for the Salesforce Platform.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| City | City | string |  | 200 |  |  |
| Country | Country | string |  | 200 |  |  |
| CountryIso | Country Code | string |  | 3 |  |  |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| Id | Login Geo Data ID | id |  | 18 |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| Latitude | Latitude | double |  |  | 18 | 0 |
| LoginTime | Login Time | datetime |  |  |  |  |
| Longitude | Longitude | double |  |  | 18 | 0 |
| PostalCode | Postal Code | string |  | 20 |  |  |
| Subdivision | Subdivision | string |  | 200 |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
