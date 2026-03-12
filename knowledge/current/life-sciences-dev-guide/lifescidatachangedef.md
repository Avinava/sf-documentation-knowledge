---
title: "LifeSciDataChangeDef"
domain: life-sciences-dev-guide
topic: lifescidatachangedef
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:46.267Z
estimatedTokens: 468
keywords: [LifeSciDataChangeDef, data, change, configured, API, version, 65.0, later, Calls]
---

# LifeSciDataChangeDef

> Represents the object for which the data change request is configured. This
         object is available in API version 65.0 and later.

# LifeSciDataChangeDef

Represents the object for which the data change request is configured. This object is available in API version 65.0 and later.

## Supported Calls

create(), delete(), describeSObjects(), query(), retrieve(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| DeveloperName | TypestringPropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe unique name of the object in the API. |
| IsActive | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionDetermines whether the configuration record for the data change request is active (true) or not (false).The default value is false. |
| Language | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionPossible values are:da—Danishde—Germanen_US—Englishes—Spanishes_MX—Spanish (Mexico)fi—Finnishfr—Frenchit—Italianja—Japaneseko—Koreannl_NL—Dutchno—Norwegianpt_BR—Portuguese (Brazil)ru—Russiansv—Swedishth—Thaizh_CN—Chinese (Simplified)zh_TW—Chinese (Traditional) |
| MasterLabel | TypestringPropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe label for the data change definition value. This display value is the internal label that doesn't get translated. |
| NamespacePrefix | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe namespace prefix that is associated with this object. |
| ObjectName | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe object associated with the data change definition.Possible values are:AccountBusinessLicense—Business LicenseContactPointAddress—Contact Point AddressContactPointEmail—Contact Point EmailContactPointPhone—Contact Point PhoneContactPointSocial—Contact Point SocialHealthcareProvider—Healthcare ProviderIdentifierProviderAffiliation—Provider Affiliation |
