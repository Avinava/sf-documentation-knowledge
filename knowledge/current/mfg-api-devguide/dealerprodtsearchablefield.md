---
title: "DealerProdtSearchableField"
domain: mfg-api-devguide
topic: dealerprodtsearchablefield
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-04-07T09:04:23.623Z
estimatedTokens: 1599
keywords: [DealerProdtSearchableField, dealers, selling, servicing, products, location-based, searches, Helps, customers, nearby, dealer, locations, product, purchases, services]
---

# DealerProdtSearchableField

> Represents information about dealers selling and, or, servicing products for
         location-based searches. Helps customers find nearby dealer locations for product purchases
         and services.  This object is available in API version 65.0 and later.

# DealerProdtSearchableField

Represents information about dealers selling and, or, servicing products for location-based searches. Helps customers find nearby dealer locations for product purchases and services. This object is available in API version 65.0 and later.

## Supported Calls

create(), delete(), describeSObjects(), query(), retrieve(), update(), upsert()getDeleted() search()getUpdated()

## Fields

| Field | Details |
| --- | --- |
| AvailabilityDate | TypedatetimePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe date when the part is made available for sale or used in the product. |
| BusinessBrandId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe business brand related to a vehicle model.This field is a relationship field.Relationship NameBusinessBrandRefers ToBusinessBrand |
| BusinessBrandName | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe name of the business brand. |
| BusinessPartnerType | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe type of dealer that’s associated with a vehicle or its parts. |
| BusinessProfile | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe business profile related to a dealer's account.This field is a relationship field.Relationship NameBusinessProfileRefers ToBusinessProfile |
| DealerAccount | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe account related to a dealer's business profile.This field is a relationship field.Relationship NameDealerAccountRefers ToAccount |
| DealerLocation | TypetextPropertiesCreate, Nillable, UpdateDescriptionThe location of the dealer. |
| DealerName | TypestringPropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe name of the dealer. |
| DealerPhone | TypephonePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe phone number of the dealer. |
| DealerRating | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe rating of the dealer. |
| DealerWebsite | TypeurlPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe website of the dealer. |
| DiscontinuedDate | TypedatetimePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionTThe date from when the part can no longer be used or sold. |
| HarmonizedSystemCode | TypetextPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe code assigned to the product or a part used in the product for international trade. |
| HarmonizedTariffSchedCode | TypetextPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe tariff schedule code assigned to the product or part for customs classification. |
| Industry | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe industry of the dealer. |
| IsCertified | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionIndicates whether the accessory part installed in the product is certified. |
| IsEnvrPrtcRegCompliant | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionIndicates whether the product is compliant with environment protection regulations. |
| MakeName | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe make name of a vehicle. |
| ManufacturerName | TypetextPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe manufacturer name for the part used in the product. |
| ManufacturerPartNumber | TypetextPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe unique number assigned by the manufacturer to identify the part. |
| ModelName | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe model name of a vehicle. |
| ModelYear | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe model year of a vehicle. |
| ModelYearVersion | TypetextPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe specific iteration of a product introduced (e.g., 2021.5, 2021.75). |
| ProductCode | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescription |
| ProductFamily | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe unique code of a product related to a vehicle model. |
| ProductId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe product related to a seller product.This field is a relationship field.Relationship NameProductRefers ToProduct2 |
| ProductLineCode | TypetextPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe product category or line associated with the specific part. |
| ProductCategoryCode | TypetextPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe part category code associated with the product. |
| ProductName | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe name of the product related to a vehicle model. |
| RegionName | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe name of the region where the dealer operates from. |
| SellerProductId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe seller product related to a product.This field is a relationship field.Relationship NameSellerProductRefers ToSellerProduct |
| SellerRole | TypetextPropertiesCreate, UpdateDescriptionThe role of the seller related to the product, such as for sales or for service. |
| ServiceTerritoryAddress | TypeaddressPropertiesFilter, NillableDescriptionThe address of the service territory related to a dealer's business profile. |
| ServiceTerritoryId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe service territory related to a dealer's business profile.This field is a relationship field.Relationship NameServiceTerritoryRefers ToServiceTerritory |
| ServiceTerritoryName | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe name of the service territory related to a dealer's business profile. |
| TrimType | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe trim type of the vehicle model, such as DX, GT, or LS. |
| UniversalProductCode | TypetextPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe universal product code (UPC/Barcode) used to track the part. |
