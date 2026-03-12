---
title: "Automotive Cloud Fields on Product2"
domain: automotive-cloud
topic: automotive-cloud-fields-on-product2
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:01.439Z
estimatedTokens: 1128
keywords: [Automotive, Cloud, Product2, Standard, extend, represent, vehicle, models, parts, accessories]
---

# Automotive Cloud Fields on Product2

> Standard fields extend the Product2 object for use in Automotive Cloud to
         represent information about vehicle models, parts, and accessories.

# Automotive Cloud Fields on Product2

Standard fields extend the Product2 object for use in Automotive Cloud to represent information about vehicle models, parts, and accessories.

## Fields

| Field | Details |
| --- | --- |
| AvailabilityDate | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe date when the part is used in the vehicle or is made available for sale. This field is available in API version 56.0 and later. |
| BusinessBrandId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe brand associated with this vehicle. This field is available in API version 56.0 and later.This field is a relationship field.Relationship NameBusinessBrandRelationship TypeLookupRefers ToBusinessBrand |
| DiscontinuedDate | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe date from when the part can’t be used in the vehicle or sold. This field is available in API version 56.0 and later. |
| HarmonizedSystemCode | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe harmonized system code that’s assigned to the vehicle or a part used in the vehicle. This field is available in API version 56.0 and later. |
| HarmonizedTariffSchedCode | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe harmonized tariff schedule code that’s assigned to the vehicle or a part used in the vehicle. This field is available in API version 56.0 and later. |
| IsCertified | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the part that’s installed as an accessory in the vehicle is certified (true) or not (false). This field is available in API version 56.0 and later.The default value is false. |
| IsEnvrPrtcRegCompliant | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the product is compliant with the environment protection regulations or not. This field is available in API version 56.0 and later.The default value is false. |
| MakeName | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionSpecifies the make name of the product. This field is available in API version 56.0 and later. |
| ManufacturerName | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe manufacturer name for the part used in the vehicle. This field is available in API version 56.0 and later. |
| ManufacturerPartNumber | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe unique number assigned by the manufacturer to identify the part. This field is available in API version 56.0 and later. |
| ModelName | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionSpecifies the model name of the vehicle. This field is available in API version 56.0 and later. |
| ModelYear | TypeintPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe year when the model of the vehicle was first launched. This field is available in API version 56.0 and later. |
| ModelYearVersion | TypeintPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe specific iteration of a product introduced in a given model year. |
| ProductCategoryCode | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe part category associated with the vehicle. This field is available in API version 56.0 and later. |
| ProductLineCode | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe vehicle category associated with the part. This field is available in API version 56.0 and later. |
| UniversalProductCode | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe universal product code used to track the part used in the vehicle. This field is available in API version 56.0 and later. |
| VehicleTrimLevel | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe trim levels supported by the vehicle model. This field is available in API version 56.0 and later. |
| VersionName | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe version name associated with the vehicle model. This field is available in API version 56.0 and later. |

#### See Also

-   [*Object Reference for the Salesforce Platform*: Product2](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_product2.htm?q=Product2)
