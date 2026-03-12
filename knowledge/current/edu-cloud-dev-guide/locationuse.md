---
title: "LocationUse"
domain: edu-cloud-dev-guide
topic: locationuse
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:26.547Z
estimatedTokens: 369
keywords: [LocationUse, Records, general, purpose, Location, API, version, 57.0, later, Calls]
---

# LocationUse

> Records the general purpose of the Location. This object is available in
      API version 57.0 and later.

# LocationUse

Records the general purpose of the Location. This object is available in API version 57.0 and later.

## Supported Calls

create(), delete(), describeSObjects(), query(), retrieve(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| DeveloperName | TypestringPropertiesCreate, Filter, Group, Sort, UpdateDescriptionName of the developer of the location. |
| IsBookable | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates if the location is bookable.The default value is false. |
| Language | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionSpecifies the language in use at the location.Possible values are:da - Danishde - Germanen_US - Englishes - Spanishes_MX - Spanish (Mexico)fi - Finnishfr - Frenchit - Italianja - Japaneseko - Koreannl_NL - Dutchno - Norwegianpt_BR - Portuguese (Brazil)ru - Russiansv - Swedishth - Thaizh_CN - Chinese (Simplified)zh_CN - Chinese (Traditional) |
| LocationType | TypepicklistPropertiesCreate, Filter, Group, Sort, UpdateDescriptionSpecifies the type of the location.Possible values are:BuildingCampusOtherRoom |
| MasterLabel | TypestringPropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe label that identifies this record throughout the user interface. |
| Use | TypestringPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionSpecifies what the location is used for. |
