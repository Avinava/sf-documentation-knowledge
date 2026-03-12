---
title: "Address"
domain: eu-developer-guide
topic: address
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:27.070Z
estimatedTokens: 326
keywords: [Address, mailing, billing, home, API, version, 62.0, later, Calls]
---

# Address

> Represents a mailing, billing, or home address. This object is available
      in API version 62.0 and later.

# Address

Represents a mailing, billing, or home address. This object is available in API version 62.0 and later.

The standard fields are documented in the [Address](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_address.htm) object reference.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| Floor | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe floor number in the address |
| HouseNumberSupplement | TypestringPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Sort, UpdateDescriptionThe house number in a street or apartment block in the address |
| StreetSupplement1 | TypestringPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Sort, UpdateDescriptionThe first line of the street address |
| StreetSupplement2 | TypestringPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Sort, UpdateDescriptionThe second line of the street address |
| UnitNumber | TypestringPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Sort, UpdateDescriptionThe second line of the street address |
