---
title: "Party Profile Address Input"
domain: omnistudio
topic: party-profile-address-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T15:25:08.420Z
keywords: [Party, Profile, Address, Input]
---

# Party Profile Address Input

# Party Profile Address Input

Input representation of the details of the party profile address.

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| addressType | String | Type of party address. | Optional | 61.0 |
| city | String | City detail for the address. | Optional | 61.0 |
| country | String | Country detail for the address. | Optional | 61.0 |
| countryCode | String | Country code for the address. | Optional | 61.0 |
| customFields | Custom Fields Input[] | Custom fields related to the party profile address. | Optional | 61.0 |
| geocode​Accuracy | String | Level of accuracy of a location’s geographical coordinates compared with its physical address. A geocoding service typically provides this value based on the address’s latitude and longitude coordinates. | Optional | 61.0 |
| isPrimary​Address | Boolean | Indicates whether the party's address is the primary address (true) or not (false). | Optional | 61.0 |
| latitude | Double | Used with longitude property to specify the precise geolocation of the address. | Optional | 61.0 |
| longitude | Double | Used with latitude property to specify the precise geolocation of the address. | Optional | 61.0 |
| name | String | Name of the party profile address record. | Required | 61.0 |
| postalCode | String | Postal code for the address. | Optional | 61.0 |
| recordTypeId | String | ID of the record type assigned to this object. | Optional | 61.0 |
| state | String | State detail for the address. | Optional | 61.0 |
| stateCode | String | State code for the address. | Optional | 61.0 |
| street | String | Street detail for the address. | Optional | 61.0 |
| validityEnd​Date | String | Date when the party profile address becomes valid. | Optional | 61.0 |
| validityStart​Date | String | Date until when the party profile address is valid. | Optional | 61.0 |