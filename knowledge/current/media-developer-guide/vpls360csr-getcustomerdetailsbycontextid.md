---
title: "vpls360csr-GetCustomerDetailsByContextId"
domain: media-developer-guide
topic: vpls360csr-getcustomerdetailsbycontextid
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:54.294Z
estimatedTokens: 118
keywords: [Omnistudio, Data, Mapper, agent, console, fetch, customer, Sample, Input, Output]
---

# vpls360csr-GetCustomerDetailsByContextId

> This Omnistudio Data Mapper is used in the agent console to
    fetch customer details.

# vpls360csr-GetCustomerDetailsByContextId

This Omnistudio Data Mapper is used in the agent console to fetch customer details.

## Sample Input

```

```

| Parameter | Required/Optional |
| --- | --- |
| ContextId | Required |

## Sample Output

```

```

## Called By

-   Workflow: Agent console Change Personal Details of an Account

    -   Omniscript: vpls360csrChangePersonalDetails

        -   Integration Procedure: vpls360csr\_ChangePersonalDetailsPreProcess

## Code Examples

```
{
    "ContextId": "a1S4W000006A1ZyUAK"
}
```

```
{
  "ShippingStreet": "abc",
  "ShippingState": "abc",
  "ShippingPostalCode": "123123",
  "ShippingCountry": "abc",
  "ShippingCity": "abc",
  "BillingStreet": "abc",
  "BillingState": "abc",
  "BillingPostalCode": "123123",
  "BillingCountry": "abc",
  "BillingCity": "abc",
  "LastName": "Villiers",
  "FirstName": "Jhonny",
  "ContactPhone": "1231231231",
  "ContactId": "0034W00002KWZBwQAP",
  "ContactEmail": "jhn@test.com"
}
```
