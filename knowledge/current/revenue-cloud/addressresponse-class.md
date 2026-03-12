---
title: "AddressResponse Class"
domain: revenue-cloud
topic: addressresponse-class
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:06.451Z
estimatedTokens: 365
namespace: CommerceTax
keywords: [AddressResponse, location, code, sent, external, tax, engine, Usage, setLocationCode, locationCode]
---

# AddressResponse Class

> Contains a location code sent from the external tax
    engine.

**Namespace:** `CommerceTax`

# AddressResponse Class

Contains a location code sent from the external tax engine.

## Namespace

[CommerceTax](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_namespace_commercetax.htm "Manage the communication between Salesforce and an external tax engine.")

## Usage

Use the AddressResponse class to set unique values for each address.

```

```

-   **[AddressResponse Methods](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_class_commercetax_AddressResponse.htm#apex_commercetax_AddressResponse_methods)**
    Learn more about the available methods with the AddressResponse class.

## AddressResponse Methods

Learn more about the available methods with the AddressResponse class.

The AddressResponse class includes these methods.

-   **[setLocationCode(locationCode)](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_class_commercetax_AddressResponse.htm#apex_commercetax_AddressResponse_setLocationCode)**
    Sets the value of a LocationCode field.

### setLocationCode(locationCode)

Sets the value of a LocationCode field.

#### Signature

global void setLocationCode(String locationCode)

#### Parameters

locationCode

Type: String

A code that contains address information. This value can be passed to a method that sets the value of an address field.

#### Return Value

Type: void

## Code Examples

```
commercetax.AddressesResponse addressesRes = new commercetax.AddressesResponse();

//AddressResponse containing ShipTo information
commercetax.AddressResponse shipToAddress = new commercetax.AddressResponse();
shipToAddress.setLocationCode('1234567');

//AddressResponse containing ShipFrom information
commercetax.AddressResponse shipFromAddress = new commercetax.AddressResponse();
shipFromAddress.setLocationCode('84720385');

//AddressResponse containing Sold To information
commercetax.AddressResponse soldToAddress = new commercetax.AddressResponse();
soldToAddress.setLocationCode('92381749');

//set values of addressesRes
addressesRes.setShipFrom(shipFromAddress);
addressesRes.setShipTo(shipToAddress);
addressesRes.setSoldTo(soldToAddress);
```

## Related Topics

- CommerceTax (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_namespace_commercetax.htm)
- AddressResponse Methods (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_class_commercetax_AddressResponse.htm)
- setLocationCode(locationCode) (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_class_commercetax_AddressResponse.htm)
