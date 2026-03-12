---
title: "LoginGeo"
domain: object-reference
topic: logingeo
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:12.561Z
estimatedTokens: 568
keywords: [LoginGeo, geographic, location, user’s, address, login, event, Due, nature, geolocation, technology, accuracy, country, city, postal]
---

# LoginGeo

> Represents the geographic location of the user’s IP address for a
         login event. Due to the nature of geolocation technology, the accuracy of geolocation
         fields (for example, country, city, postal code) may vary. This object is available in
      API version 34.0 and later.

# LoginGeo

Represents the geographic location of the user’s IP address for a login event. Due to the nature of geolocation technology, the accuracy of geolocation fields (for example, country, city, postal code) may vary. This object is available in API version 34.0 and later.

## Supported Calls

describeSObjects(), query(), retrieve()

## Special Access Rules

Only users with Manage Users permissions can access this object.

## Fields

| Field | Details |
| --- | --- |
| City | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe city where the user’s IP address is physically located. This value is not localized. |
| Country | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe country where the user’s IP address is physically located. This value is not localized. |
| CountryIso | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe ISO 3166 code for the country where the user’s IP address is physically located. For more information, see Country Codes - ISO 3166 |
| Latitude | TypedoublePropertiesFilter, Nillable, SortDescriptionThe latitude where the user’s IP address is physically located. |
| LoginTime | TypedateTimePropertiesFilter, SortDescriptionTime of the login attempt, in GMT time zone. |
| Longitude | TypedoublePropertiesFilter, Nillable, SortDescriptionThe longitude where the user’s IP address is physically located. |
| PostalCode | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe postal code where the user’s IP address is physically located. This value is not localized. |
| Subdivision | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe name of the subdivision where the user’s IP address is physically located. In the U.S., this value is usually the state name (for example, Pennsylvania). This value is not localized. |

## Usage

The API allows you to do many powerful queries. A few examples are:

| Sample Query | Query String |
| --- | --- |
| Query showing the country for a login event, where Id=LoginGeoId from AuthSession | SELECT Country FROM LoginGeo WHERE Id = '0LE###############' |
| Query showing the city and postal code for a login event, where Id=LoginGeoId from LoginHistory | SELECT City, PostalCode FROM LoginGeo WHERE Id = '0SO###############' |
