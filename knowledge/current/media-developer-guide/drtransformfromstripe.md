---
title: "DRTransformFromStripe"
domain: media-developer-guide
topic: drtransformfromstripe
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:54.050Z
estimatedTokens: 512
keywords: [DRTransformFromStripe, Omnistudio, Data, Mapper, transform, trim, Stripe, Sample, Input, Output]
---

# DRTransformFromStripe

> This Omnistudio Data Mapper is used to transform and trim
    the Stripe response.

# DRTransformFromStripe

This Omnistudio Data Mapper is used to transform and trim the Stripe response.

## Sample Input

```

```

| Parameter | Required/Optional |
| --- | --- |
| AccountId | Required |
| address | Required |
| address_line1_check | Required |
| address_postal_code_check | Required |
| amount | Required |
| amount_capturable | Required |
| amount_captured | Required |
| amount_received | Required |
| amount_refunded | Required |
| api_version | Required |
| application | Required |
| application_fee | Required |
| application_fee_amount | Required |
| balance_transaction | Required |
| billing_details | Required |
| brand | Required |
| calculated_statement_descriptor | Required |
| canceled_at | Required |
| cancellation_reason | Required |
| captured | Required |
| capture_method | Required |
| card | Required |
| charges | Required |
| checks | Required |
| city | Required |
| country | Required |
| created | Required |
| currency | Required |
| customer | Required |
| cvc_check | Required |
| data | Required |
| description | Required |
| destination | Required |
| dispute | Required |
| disputed | Required |
| email | Required |
| failure_code | Required |
| failure_message | Required |
| fraud_details | Required |
| id | Required |
| idempotency_key | Required |
| invoice | Required |
| line1 | Required |
| line2 | Required |
| livemode | Required |
| metadata | Required |
| name | Required |
| network_status | Required |
| object | Required |
| on_behalf_of | Required |
| order | Required |
| orderId | Required |
| outcome | Required |
| paid | Required |
| payment_intent | Required |
| payment_method | Required |
| payment_method_details | Required |
| pending_webhooks | Required |
| phone | Required |
| postal_code | Required |
| reason | Required |
| request | Required |
| risk_level | Required |
| risk_score | Required |
| seller_message | Required |
| state | Required |
| type | Required |

## Sample Output

```

```

## Called By

-   Workflow: Webhook IP, which listens to Stripe

## Code Examples

```
{
  "api_version": "2020-03-02",
  "created": 1604488590,
  "data": {
    "object": {
      "amount": 2000,
      "amount_capturable": 0,
      "amount_received": 2000,
      "application": null,
      "application_fee_amount": null,
      "canceled_at": null,
      "cancellation_reason": null,
      "capture_method": "automatic",
      "charges": {
        "data": [
          {
            "amount": 2000,
            "amount_captured": 2000,
            "amount_refunded": 0,
            "application": null,
            "application_fee": null,
            "application_fee_amount": null,
            "balance_transaction": "txn_1HjjycKOGFB3U5JQOYg3kJlS",
            "billing_details": {
              "address": {
                "city": null,
                "country": null,
                "line1": null,
                "line2": null,
                "postal_code": null,
                "state": null
              },
              "email": null,
              "name": null,
              "phone": null
            },
            "calculated_statement_descriptor": "Stripe",
            "captured": true,
            "created": 1604488590,
            "currency": "inr",
            "customer": "cus_IIVZ89MepIRw0u",
            "description": null,
            "destination": null,
            "dispute": null,
            "disputed": false,
            "failure_code": null,
            "failure_message": null,
            "fraud_details": {},
            "id": "ch_1HjjycKOGFB3U5JQMF9FkOCH",
            "invoice": null,
            "livemode": false,
            "metadata": {
              "AccountId": "0013t00001hC8s6AAC",
              "orderId": "52287"
            },
            "object": "charge",
            "on_behalf_of": null,
            "order": null,
            "outcome": {
              "network_status": "approved_by_network",
              "reason": null,
              "risk_level": "normal",
              "risk_score": 4,
              "seller_message": "Payment complete.",
              "type": "authorized"
            },
            "paid": true,
            "payment_intent": "pi_1HjjybKOGFB3U5JQK4m3Xw9V",
            "payment_method": "card_1HifbFKOGFB3U5JQmq1KoLGS",
            "payment_method_details": {
              "card": {
                "brand": "visa",
                "checks": {
                  "address_line1_check": null,
                  "address_postal_code_check": null,
                  "cvc_check": null
                },
                "country": "US",
                "exp_month": 11,
                "exp_year": 2022,
                "fingerprint": "2yNCV5uyUTRDaoJu",
                "funding": "credit",
                "installments": null,
                "last4": "4242",
                "network": "visa",
                "three_d_secure": null,
                "wallet": null
              },
              "type": "card"
            },
            "receipt_email": null,
            "receipt_number": null,
            "receipt_url": "https://pay.stripe.com/receipts/acct_1HCNrvKOGFB3U5JQ/ch_1HjjycKOGFB3U5JQMF9FkOCH/rcpt_IKOm3V6gnJn6ZFOQJ1efZ79fygB4uOJ",
            "refunded": false,
            "refunds": {
              "data": [],
              "has_more": false,
              "object": "list",
              "total_count": 0,
              "url": "/v1/charges/ch_1HjjycKOGFB3U5JQMF9FkOCH/refunds"
            },
            "review": null,
            "shipping": null,
            "source": {
              "address_city": null,
              "address_country": null,
              "address_line1": null,
              "address_line1_check": null,
              "address_line2": null,
              "address_state": null,
              "address_zip": null,
              "address_zip_check": null,
              "brand": "Visa",
              "country": "US",
              "customer": "cus_IIVZ89MepIRw0u",
              "cvc_check": null,
              "dynamic_last4": null,
              "exp_month": 11,
              "exp_year": 2022,
              "fingerprint": "2yNCV5uyUTRDaoJu",
              "funding": "credit",
              "id": "card_1HifbFKOGFB3U5JQmq1KoLGS",
              "last4": "4242",
              "metadata": {},
              "name": null,
              "object": "card",
              "tokenization_method": null
            },
            "source_transfer": null,
            "statement_descriptor": null,
            "statement_descriptor_suffix": null,
            "status": "succeeded",
            "transfer_data": null,
            "transfer_group": null
          }
        ],
        "has_more": false,
        "object": "list",
        "total_count": 1,
        "url": "/v1/charges?payment_intent=pi_1HjjybKOGFB3U5JQK4m3Xw9V"
      },
      "client_secret": "pi_1HjjybKOGFB3U5JQK4m3Xw9V_secret_Xiw2B8pAhDfQNCX1bjNsuZ7NB",
      "confirmation_method": "automatic",
      "created": 1604488589,
      "currency": "inr",
      "customer": "cus_IIVZ89MepIRw0u",
      "description": null,
      "id": "pi_1HjjybKOGFB3U5JQK4m3Xw9V",
      "invoice": null,
      "last_payment_error": null,
      "livemode": false,
      "metadata": {
        "AccountId": "0013t00001hC8s6AAC",
        "orderId": "52287"
      },
      "next_action": null,
      "object": "payment_intent",
      "on_behalf_of": null,
      "payment_method": null,
      "payment_method_options": {
        "card": {
          "installments": null,
          "network": null,
          "request_three_d_secure": "automatic"
        }
      },
      "payment_method_types": [
        "card"
      ],
      "receipt_email": null,
      "review": null,
      "setup_future_usage": null,
      "shipping": null,
      "source": "card_1HifbFKOGFB3U5JQmq1KoLGS",
      "statement_descriptor": null,
      "statement_descriptor_suffix": null,
      "status": "succeeded",
      "transfer_data": null,
      "transfer_group": null
    }
  },
  "id": "evt_1HjjycKOGFB3U5JQ2sIYz9nt",
  "livemode": false,
  "object": "event",
  "pending_webhooks": 1,
  "request": {
    "id": "req_YY2j54ABsegx7j",
    "idempotency_key": null
  },
  "type": "payment_intent.succeeded"
}
```

```
{
  "Type": "payment_intent.succeeded",
  "EventId": "evt_1HjjycKOGFB3U5JQ2sIYz9nt",
  "Status": "succeeded",
  "PaymentReceived": 2000,
  "PaymentIntentId": "pi_1HjjybKOGFB3U5JQK4m3Xw9V",
  "Customer": "cus_IIVZ89MepIRw0u",
  "OrderId": "52287",
  "AccountId": "0013t00001hC8s6AAC",
  "PaymentMethod": "card_1HifbFKOGFB3U5JQmq1KoLGS"
}
```
