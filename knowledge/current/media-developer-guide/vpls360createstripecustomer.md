---
title: "VPLS360_CreateStripeCustomer"
domain: media-developer-guide
topic: vpls360createstripecustomer
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:54.236Z
estimatedTokens: 142
keywords: [VPLS360_CreateStripeCustomer, Integration, Procedure, creates, new, customer, Payment, Gateway, Stripe, VPLS360, _CreateStripeCustomer, Sample, Input, Output, Calls]
---

# VPLS360_CreateStripeCustomer

> This Integration Procedure creates a new customer in the Payment Gateway
                      (Stripe).

# VPLS360\_CreateStripeCustomer

This Integration Procedure creates a new customer in the Payment Gateway (Stripe).

## Sample Input

```

```

| Parameter | Required/Optional |
| --- | --- |
| Email | Required |
| FirstName | Required |
| LastName | Required |
| UserId | Required |

## Sample Output

```

```

## Called By

-   Flows:

    -   Web shop : New User Onboarding

-   Components:

    -   LWC: VplS360AccountSignup


## Calls

-   Data Mapper:

    -   VPL360-DRFetchStripeCustId

-   Data Mapper: DRsaveStripeCustomer

-   HTTP Action: CreateCustomer

## Code Examples

```
{
    "Email": "testing@gmail.com",
    "FirstName": "David",
    "LastName": "Warner",
    "UserId": "0054W00000DGUpPQAX"
}
```

```
:: Stripe Customer successfully created.StatusCode :: 200
```
