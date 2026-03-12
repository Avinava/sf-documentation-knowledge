---
title: "ApplicationFormSellerItem"
domain: sfFieldRef
topic: applicationformselleritem
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:47.611Z
estimatedTokens: 751
keywords: [ApplicationFormSellerItem, junction, application, form, seller, product, API, version, 61.0, later, Digital, Lending, permission]
---

# ApplicationFormSellerItem

> Represents a junction between an application form and a seller
         product. This object is available in API version 61.0 and later. Available with
      Digital Lending permission set.

# ApplicationFormSellerItem

Represents a junction between an application form and a seller product. This object is available in API version 61.0 and later. Available with Digital Lending permission set.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see ApplicationFormSellerItem in the Financial Services Cloud Developer Guide.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| ApplicationFormProductId | Application Form Product ID | reference |  | 18 |  |  |
| BuiltUpArea | Built Up Area | int | 9 |  |  |  |
| BuiltUpAreaUnit | Built Up Area Unit | picklist |  | 40 |  |  |
| ConstructionStage | Construction Stage | picklist |  | 40 |  |  |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| EngineNumber | Engine Number | string |  | 255 |  |  |
| Id | Application Form Seller Item ID | id |  | 18 |  |  |
| IntendedUse | Intended Use | picklist |  | 40 |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| ItemCondition | Item Condition | picklist |  | 40 |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| LastReferencedDate | Last Referenced Date | datetime |  |  |  |  |
| LastViewedDate | Last Viewed Date | datetime |  |  |  |  |
| Make | Make | string |  | 255 |  |  |
| Mileage | Mileage | int | 9 |  |  |  |
| Model | Model | string |  | 255 |  |  |
| Name | Name | string |  | 255 |  |  |
| PartyFinancialAssetId | Party Financial Asset ID | reference |  | 18 |  |  |
| Price | Price | currency |  |  | 18 | 2 |
| PropertyAddress | Property Address | address |  |  |  |  |
| PropertyAge | Property Age | double |  |  | 18 | 2 |
| PropertyCity | Property City | string |  | 40 |  |  |
| PropertyCountry | Property Country | string |  | 80 |  |  |
| PropertyGeocodeAccuracy | Property Geocode Accuracy | picklist |  | 40 |  |  |
| PropertyLatitude | Property Latitude | double |  |  | 18 | 15 |
| PropertyLongitude | Property Longitude | double |  |  | 18 | 15 |
| PropertyPostalCode | Property Postal Code | string |  | 20 |  |  |
| PropertyState | Property State | string |  | 80 |  |  |
| PropertyStreet | Property Street | textarea |  | 255 |  |  |
| PropertyUnitIdentifier | Property Unit Identifier | string |  | 255 |  |  |
| ReferenceObjectId | Reference Object ID | reference |  | 18 |  |  |
| ScheduledDeliveryDate | Scheduled Delivery Date | date |  |  |  |  |
| SellerId | Account ID | reference |  | 18 |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |
| Trim | Trim | string |  | 255 |  |  |
| Type | Type | picklist |  | 40 |  |  |
| VehicleIdentificationNumber | Vehicle Identification Number | string |  | 255 |  |  |
| VehicleRegistrationNumber | Vehicle Registration Number | string |  | 255 |  |  |
| Year | Year | int | 9 |  |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
