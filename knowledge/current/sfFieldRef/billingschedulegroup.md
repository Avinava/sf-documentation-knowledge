---
title: "BillingScheduleGroup"
domain: sfFieldRef
topic: billingschedulegroup
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:50.013Z
estimatedTokens: 1207
keywords: [BillingScheduleGroup, consolidated, view, billing, schedules, order, items, generated, asset, including, new, orders, amendment, API, version]
---

# BillingScheduleGroup

> Represents a consolidated view of all billing schedules related to the order
         items generated from one asset, including new orders and amendment orders. This object
      is available in API version 55.0 and later.

# BillingScheduleGroup

Represents a consolidated view of all billing schedules related to the order items generated from one asset, including new orders and amendment orders. This object is available in API version 55.0 and later.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see [BillingScheduleGroup](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_billingschedulegroup.htm "HTML (New Window)") in the Billing Guide and Object Reference for the Salesforce Platform.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| BillDayOfMonth | Bill Day Of Month | int | 9 |  |  |  |
| BillToContactId | Contact ID | reference |  | 18 |  |  |
| BillingAccountId | Account ID | reference |  | 18 |  |  |
| BillingAddress | Billing Address | address |  |  |  |  |
| BillingCity | Billing City | string |  | 40 |  |  |
| BillingCountry | Billing Country | string |  | 80 |  |  |
| BillingGeocodeAccuracy | Billing Geocode Accuracy | picklist |  | 40 |  |  |
| BillingLatitude | Billing Latitude | double |  |  | 18 | 15 |
| BillingLongitude | Billing Longitude | double |  |  | 18 | 15 |
| BillingMethod | Billing Method | picklist |  | 255 |  |  |
| BillingPostalCode | Billing Postal Code | string |  | 20 |  |  |
| BillingResumptionDate | Billing Resumption Date | date |  |  |  |  |
| BillingScheduleGroupNumber | Name | string |  | 255 |  |  |
| BillingStartMonth | Billing Start Month | picklist |  | 255 |  |  |
| BillingState | Billing State | string |  | 80 |  |  |
| BillingStreet | Billing Street | textarea |  | 255 |  |  |
| BillingSuspensionDate | Billing Suspension Date | date |  |  |  |  |
| BillingTerm | Billing Term | int | 9 |  |  |  |
| BillingTermUnit | Billing Term Unit | picklist |  | 255 |  |  |
| BillingTreatmentId | Billing Treatment ID | reference |  | 18 |  |  |
| BillingType | Billing Type | picklist |  | 255 |  |  |
| CancellationDate | Cancellation Date | date |  |  |  |  |
| Controller | Controller | picklist |  | 255 |  |  |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| EffectiveNextBillingDate | Effective Next Billing Date | date |  |  |  |  |
| EndDate | End Date | date |  |  |  |  |
| ExternalRefRecordIdentifier | External Reference Record Identifier | string |  | 40 |  |  |
| Id | Billing Schedule Group ID | id |  | 18 |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| LastReferencedDate | Last Referenced Date | datetime |  |  |  |  |
| LastViewedDate | Last Viewed Date | datetime |  |  |  |  |
| LegalEntityId | Legal Entity ID | reference |  | 18 |  |  |
| NextBillingDateOverride | Next Billing Date Override | date |  |  |  |  |
| OwnerId | Owner ID | reference |  | 18 |  |  |
| PeriodBoundary | Period Boundary | picklist |  | 255 |  |  |
| Product2Id | Product ID | reference |  | 18 |  |  |
| ProductName | Product Name | string |  | 255 |  |  |
| ReferenceEntityId | Asset ID | reference |  | 18 |  |  |
| ReferenceRecordId | ID | reference |  | 18 |  |  |
| ShipFromAddress | Ship From Address | address |  |  |  |  |
| ShipFromCity | Ship From City | string |  | 40 |  |  |
| ShipFromCountry | Ship From Country | string |  | 80 |  |  |
| ShipFromGeocodeAccuracy | Ship From Geocode Accuracy | picklist |  | 40 |  |  |
| ShipFromLatitude | Ship From Latitude | double |  |  | 18 | 15 |
| ShipFromLongitude | Ship From Longitude | double |  |  | 18 | 15 |
| ShipFromPostalCode | Ship From Postal Code | string |  | 20 |  |  |
| ShipFromState | Ship From State | string |  | 80 |  |  |
| ShipFromStreet | Ship From Street | textarea |  | 255 |  |  |
| ShippingAddress | Shipping Address | address |  |  |  |  |
| ShippingCity | Shipping City | string |  | 40 |  |  |
| ShippingCountry | Shipping Country | string |  | 80 |  |  |
| ShippingGeocodeAccuracy | Shipping Geocode Accuracy | picklist |  | 40 |  |  |
| ShippingLatitude | Shipping Latitude | double |  |  | 18 | 15 |
| ShippingLongitude | Shipping Longitude | double |  |  | 18 | 15 |
| ShippingPostalCode | Shipping Postal Code | string |  | 20 |  |  |
| ShippingState | Shipping State | string |  | 80 |  |  |
| ShippingStreet | Shipping Street | textarea |  | 255 |  |  |
| StartDate | Start Date | date |  |  |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |
| TaxTreatmentId | Tax Treatment ID | reference |  | 18 |  |  |
| TotalBilledAmount | Total Billed Amount | currency |  |  | 18 | 2 |
| TotalPendingAmount | Total Pending Amount | currency |  |  | 18 | 2 |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
