---
title: "Automotive Cloud Fields on Asset"
domain: automotive-cloud
topic: automotive-cloud-fields-on-asset
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:01.018Z
estimatedTokens: 216
keywords: [Automotive, Cloud, Asset, Standard, extend, represent, physical, item, that’s, manufactured, installed, sold, vehicle, part, car]
---

# Automotive Cloud Fields on Asset

> Standard fields extend the Asset object for use in Automotive Cloud to
         represent information about each physical item that’s manufactured, installed, or sold,
         such as a vehicle, a part like a car engine, or an accessory like car seat covers. Use the
         VehicleId field on asset to represent an asset as a vehicle.

# Automotive Cloud Fields on Asset

Standard fields extend the Asset object for use in Automotive Cloud to represent information about each physical item that’s manufactured, installed, or sold, such as a vehicle, a part like a car engine, or an accessory like car seat covers. Use the VehicleId field on asset to represent an asset as a vehicle.

## Fields

| Field | Details |
| --- | --- |
| VehicleId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionThe vehicle associated with the asset. This field is available in API version 56.0 and later.This field is a relationship field.Relationship NameVehicleRelationship TypeLookupRefers ToVehicle |

#### See Also

-   [*Object Reference for the Salesforce Platform*: Asset](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_asset.htm)
