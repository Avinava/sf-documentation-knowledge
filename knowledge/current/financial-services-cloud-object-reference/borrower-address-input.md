---
title: "Borrower Address Input"
domain: financial-services-cloud-object-reference
topic: borrower-address-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:28.243Z
estimatedTokens: 304
keywords: [Borrower, Address, Input, representation, addresses]
---

# Borrower Address Input

> Input representation for Borrower addresses.

# Borrower Address Input

Input representation for Borrower addresses.

Root XML tag

<addresses>

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| addressOwnership | String | Identifies borrower's status at residence. | Optional | 48.0 |
| extendedFields | Extended Fields Input[] | Custom fields related to the borrower’s address. | Optional | 48.0 |
| externalId | String | Identifier assigned to imported borrower’s address data by external data source. (if applicable) | Optional | 48.0 |
| id | String | ID of the borrower’s address | Optional | 48.0 |
| monthlyRentPayment | Double | Borrower's monthly rent payment (if applicable). | Optional | 48.0 |
| name | String | Name of the borrower’s address. | Optional | 48.0 |
| residenceAdditionalMonthCount | Integer | Additional months borrower lived at this residence. | Optional | 48.0 |
| residenceAddress | Address Input[] | Residence's physical address. | Optional | 48.0 |
| residenceYearCount | Integer | Years borrower lived at this residence. | Optional | 48.0 |
| residencyType | String | Identifies borrower's current residency status. | Optional | 48.0 |

## Code Examples

```
{
  "addresses": [
    {
      "addressOwnership": "Own",
      "extendedFields": [],
      "externalId": "e8d51e2a-7d97-4da0-8356-ca86995d3d39",
      "monthlyRentPayment": 2300,
      "name": "Addr1",
      "residenceAdditionalMonthCount": 23,
      "residenceAddress": {
        "city": "San Francisco",
        "country": "United States",
        "postalCode": "94105",
        "state": "CA",
        "street": "50 Fremont Street"
      },
      "residenceYearCount": 3,
      "residencyType": "Former Residence"
    }
  ]
}
```

## Related Topics

- Extended Fields Input (atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/connect_requests_extended_fields_input.htm)
- Address Input (atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/connect_requests_address_input.htm)
