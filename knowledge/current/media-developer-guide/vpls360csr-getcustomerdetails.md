---
title: "vpls360csr-GetCustomerDetails"
domain: media-developer-guide
topic: vpls360csr-getcustomerdetails
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:54.291Z
estimatedTokens: 109
keywords: [vpls360csr-GetCustomerDetails, Omnistudio, Data, Mapper, agent, console, extract, account, context, customer, interaction, Sample, Input, Output]
---

# vpls360csr-GetCustomerDetails

> This Omnistudio Data Mapper is used in the agent console to
    extract account details based on the context ID of a customer interaction.

# vpls360csr-GetCustomerDetails

This Omnistudio Data Mapper is used in the agent console to extract account details based on the context ID of a customer interaction.

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

-   Workflow: Agent console Get Profile Details for an Account

    -   Integration Procedure: vpls360csr\_GetProfileDetails

## Code Examples

```
{
    "ContextId": "a1S4W000006A1ZyUAK"
}
```

```
{
  "Phone": "1231231231",
  "Name": "Jhonny Villiers",
  "MailingStreet": "abc",
  "MailingState": "abc",
  "MailingPostalCode": "123123",
  "MailingCity": "abc",
  "FirstName": "Jhonny",
  "Email": "jhn@test.com",
  "AccountStatus": "Active"
}
```
