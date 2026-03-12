---
title: "vpls360csr-TransformPersonalDetails"
domain: media-developer-guide
topic: vpls360csr-transformpersonaldetails
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:54.305Z
estimatedTokens: 82
keywords: [vpls360csr-TransformPersonalDetails, Omnistudio, Data, Mapper, transforms, personal, account, Sample, Input, Output]
---

# vpls360csr-TransformPersonalDetails

> This Omnistudio Data Mapper transforms the personal details
    of an account.

# vpls360csr-TransformPersonalDetails

This Omnistudio Data Mapper transforms the personal details of an account.

## Sample Input

```

```

| Parameter | Required/Optional |
| --- | --- |
| PersonalDetails | Required |

## Sample Output

```

```

## Called By

-   Workflow:

    -   LWC:

        -   Integration Procedure:

## Code Examples

```
{
  "PersonalDetails": {
    "BillingCity": "Acc Bill City",
    "BillingCountry": "Acc Bill Country",
    "BillingPostalCode": "560001",
    "BillingState": "Acc Bill State",
    "BillingStreet": "Acc Bill Street",
    "ContactEmail": "wwjr@bb.com",
    "ContactId": "0034W00002H1vyAQAR",
    "ContactPhone": "1231231231",
    "FirstName": "Walter",
    "LastName": "White1",
    "Salutation": "Mr.",
    "ShippingCity": "Acc Ship City",
    "ShippingCountry": "Acc Ship Country",
    "ShippingPostalCode": "560002",
    "ShippingState": "Acc Ship State",
    "ShippingStreet": "Acc Ship Street"
  }
}
```

```
{
  "ShippingAddress": "Acc Ship Street Acc Ship City Acc Ship State 560002 Acc Ship Country",
  "BillingAddress": "Acc Bill Street Acc Bill City Acc Bill State 560001 Acc Bill Country",
  "ShippingZipCode": "560002",
  "ShippingStreet": "Acc Ship Street",
  "ShippingState": "Acc Ship State",
  "ShippingCountry": "Acc Ship Country",
  "ShippingCity": "Acc Ship City",
  "Salutation": "Mr.",
  "LastName": "White1",
  "FirstName": "Walter",
  "ContactPhone": "1231231231",
  "ContactId": "0034W00002H1vyAQAR",
  "ContactEmail": "wwjr@bb.com",
  "BillingZipCode": "560001",
  "BillingStreet": "Acc Bill Street",
  "BillingState": "Acc Bill State",
  "BillingCountry": "Acc Bill Country",
  "BillingCity": "Acc Bill City"
}
```
