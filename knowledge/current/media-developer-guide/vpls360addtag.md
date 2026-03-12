---
title: "VPLS360_addTag"
domain: media-developer-guide
topic: vpls360addtag
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:54.229Z
estimatedTokens: 111
keywords: [VPLS360_addTag, Integration, Procedure, adds, HTML, tags, order, confirmation, mail, sent, subscriber, proper, padding, spacing, VPLS360]
---

# VPLS360_addTag

> This Integration Procedure adds HTML tags so that the
        order confirmation mail sent to the subscriber has proper padding and spacing.

# VPLS360\_addTag

This Integration Procedure adds HTML tags so that the order confirmation mail sent to the subscriber has proper padding and spacing.

## Sample Input

```

```

| Parameter | Required/Optional |
| --- | --- |
| Products | Required |
| QuoteLineItems | Required |

## Sample Output

```

```

## Called By

-   Flows:

    -   Web shop: Order confirmation

-   Components:

    -   Integration Procedure: VPLS360\_notifyUser

## Code Examples

```
{    
"QuoteLineItems": {
        "Products": [
            {
                "ChargeType": "Recurring",
                "CurrencyCode": "USD",
                "Frequency": "Monthly",
                "OneTimeCharge": 0,
                "ProductName": "Play Disney",
                "Quantity": 1,
                "RecurringCharge": 15
            },
            {
                "ChargeType": "One-time",
                "CurrencyCode": "USD",
                "OneTimeCharge": 0,
                "ProductName": "STB Standard",
                "Quantity": 1,
                "RecurringCharge": 0
            },
            {
                "ChargeType": "One-time",
                "CurrencyCode": "USD",
                "OneTimeCharge": 15,
                "ProductName": "Activation Fee",
                "Quantity": 1,
                "RecurringCharge": 0
            },
            {
                "OneTimeCharge": 15,
                "ProductName": "ShippingFee",
                "Quantity": 1,
                "RecurringCharge": 0
            },
            {
                "ChargeType": "Recurring",
                "CurrencyCode": "USD",
                "Frequency": "Monthly",
                "OneTimeCharge": 0,
                "ProductName": "Play Movies",
                "Quantity": 1,
                "RecurringCharge": 5
            },
            {
                "ChargeType": "Recurring",
                "CurrencyCode": "USD",
                "Frequency": "Monthly",
                "OneTimeCharge": 0,
                "ProductName": "Play Mobile",
                "Quantity": 1,
                "RecurringCharge": 10
            },
            {
                "ChargeType": "Recurring",
                "CurrencyCode": "USD",
                "Frequency": "Monthly",
                "OneTimeCharge": 0,
                "ProductName": "UHD",
                "Quantity": 1,
                "RecurringCharge": 5
            },
            {
                "ChargeType": "Recurring",
                "CurrencyCode": "USD",
                "Frequency": "Monthly",
                "OneTimeCharge": 0,
                "ProductName": "Play",
                "Quantity": 1,
                "RecurringCharge": 15
            },
            {
                "ChargeType": "Recurring",
                "CurrencyCode": "USD",
                "Frequency": "Monthly",
                "OneTimeCharge": 0,
                "ProductName": "Screen Plus",
                "Quantity": 1,
                "RecurringCharge": 10
            },
            {
                "ChargeType": "One-time",
                "CurrencyCode": "USD",
                "OneTimeCharge": 29,
                "ProductName": "STB Mini",
                "Quantity": 2,
                "RecurringCharge": 0
            }
        ]
    }
}
```

```
<tr><td >Play Disney</td><td>$15.00</td><td>$0.00</td><td>Monthly</td><tr><tr><td >STB Standard</td><td>$0.00</td><td>$0.00</td><td>One-time</td><tr><tr><td >Activation Fee</td><td>$0.00</td><td>$15.00</td><td>One-time</td><tr><tr><td >ShippingFee</td><td>0.00</td><td>15.00</td><td></td><tr><tr><td >Play Movies</td><td>$5.00</td><td>$0.00</td><td>Monthly</td><tr><tr><td >Play Mobile</td><td>$10.00</td><td>$0.00</td><td>Monthly</td><tr><tr><td >UHD</td><td>$5.00</td><td>$0.00</td><td>Monthly</td><tr><tr><td >Play</td><td>$15.00</td><td>$0.00</td><td>Monthly</td><tr><tr><td >Screen Plus</td><td>$10.00</td><td>$0.00</td><td>Monthly</td><tr><tr><td >STB Mini</td><td>$0.00</td><td>$58.00</td><td>One-time</td><tr><tr><td >Play Disney</td><td>$15.00</td><td>$0.00</td><td>Monthly</td><tr><tr><td >STB Standard</td>
<td>$0.00</td><td>$0.00</td><td>One-time</td><tr>
```
