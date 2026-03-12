---
title: "vpls360csr-UpdateBillingAddress"
domain: media-developer-guide
topic: vpls360csr-updatebillingaddress
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:54.312Z
estimatedTokens: 205
keywords: [vpls360csr-UpdateBillingAddress, Omnistudio, Data, Mapper, loads, updates, billing, address, account, Sample, Input, Output]
---

# vpls360csr-UpdateBillingAddress

> This Omnistudio Data Mapper loads or updates the billing
    address for an account.

# vpls360csr-UpdateBillingAddress

This Omnistudio Data Mapper loads or updates the billing address for an account.

## Sample Input

```

```

| Parameter | Required/Optional |
| --- | --- |
| BillingAddress | Required |
| BillingAddressChange | Required |
| BillingCity | Required |
| BillingCountry | Required |
| BillingState | Required |
| BillingStreet | Required |
| BillingZipCode | Required |
| ContactId | Required |
| ShippingAddress | Required |
| ShippingCity | Required |
| ShippingCountry | Required |
| ShippingState | Required |
| ShippingStreet | Required |
| ShippingZipCode | Required |

## Sample Output

```

```

## Called By

-   Workflow: Agent console Personal Details

    -   Omniscript: vpls360csr\_UpdatePersonalDetails

        -   Integration Procedure: vpls360csr\_UpdatePersonalDetails

## Code Examples

```
{
  "BillingAddress": {
    "BillingCity": "bilCty4",
    "BillingCountry": "bilCnt4",
    "BillingState": "bilStt4",
    "BillingStreet": "billStr4",
    "BillingZipCode": "123124"
  },
  "BillingAddressChange": "true",
  "ContactId": "0034W00002H1vyAQAR",
  "ShippingAddress": {
    "ShippingCity": "shpCty",
    "ShippingCountry": "shpCnt",
    "ShippingState": "shpStt",
    "ShippingStreet": "shpStr",
    "ShippingZipCode": "555666"
  }
}
```

```
1- Account: 0014W000029kBVyQAM
2- Contact: 0034W00002H1vyAQAR
```
