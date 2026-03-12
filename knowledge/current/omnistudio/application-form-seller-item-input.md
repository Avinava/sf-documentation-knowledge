---
title: "Application Form Seller Item Input"
domain: omnistudio
topic: application-form-seller-item-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:47.070Z
estimatedTokens: 631
keywords: [Application, Form, Seller, Item, Input, representation]
---

# Application Form Seller Item Input

> Input representation of the application form seller item.

# Application Form Seller Item Input

Input representation of the application form seller item.

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| builtUpArea | Integer | Built-up area of the property. | Optional | 61.0 |
| builtUpArea​Unit | String | Unit of measure for the built up area. | Optional | 61.0 |
| construction​Stage | String | Construction stage of the property. | Optional | 61.0 |
| currencyIsoCode | String | If multiple currencies are enabled, this field contains the currency ISO code associated with the record. | Optional | 61.0 |
| customFields | Custom Fields Input[] | Custom fields related to the application form seller item. | Optional | 61.0 |
| engineNumber | String | Engine number of the vehicle. | Optional | 61.0 |
| intendedUse | String | Intention or purpose of use for a seller item related to an application form. | Optional | 61.0 |
| itemCondition | String | Condition of a seller item related to an application form. | Optional | 61.0 |
| make | String | Make of the seller item. | Optional | 61.0 |
| mileage | Integer | Mileage of the seller item. | Optional | 61.0 |
| model | String | Model of the seller iteml. | Optional | 61.0 |
| partyFinancial​AssetId | String | Details about the financial asset owned by an individual or account. | Optional | 61.0 |
| price | Double | Price of the product. | Optional | 61.0 |
| propertyAddress | Address Input | Address of the property. | Optional | 61.0 |
| propertyAge | Double | Age of the property. | Optional | 61.0 |
| propertyUnit​Identifier | String | Unit identifier of the property. | Optional | 61.0 |
| recordTypeId | String | ID of the record type assigned to this object. | Optional | 61.0 |
| reference​ObjectId | String | Product that the applicant has shown interest in buying. For example, a home or vehicle. | Optional | 61.0 |
| scheduled​DeliveryDate | String | Delivery date of the product to the applicant. | Optional | 61.0 |
| sellerId | String | Account ID of the vendor who is selling the asset. This is also the beneficiary. | Optional | 61.0 |
| trim | String | Trim type of the seller item. | Optional | 61.0 |
| type | String | Type of product. | Optional | 61.0 |
| vehicle​Identification​Number | String | Unique identifier for the vehicle. | Optional | 61.0 |
| vehicle​Registration​Number | String | Registration number of the vehicle. | Optional | 61.0 |
| year | Integer | Manufacture date of the seller item. | Optional | 61.0 |

## Related Topics

- Custom Fields Input (atlas.en-us.industries_reference.meta/industries_reference/connect_requests_digital_lending_custom_fields_input.htm)
- Address Input (atlas.en-us.industries_reference.meta/industries_reference/connect_requests_application_form_address_input.htm)
