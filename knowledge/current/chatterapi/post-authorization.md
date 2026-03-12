---
title: "Post Authorization"
domain: chatterapi
topic: post-authorization
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:16.132Z
estimatedTokens: 651
keywords: [Post, Authorization, Confirms, merchant, ready, capture, payment, pre-authorized, transaction]
---

# Post Authorization

> Confirms that the merchant is ready to capture payment of an
      existing pre-authorized transaction.

# Post Authorization

Confirms that the merchant is ready to capture payment of an existing pre-authorized transaction.

To access Salesforce Payments resources, you need one of the following permissions:

-   PaymentsAPIUser user permission. This permission is available with the Salesforce Order Management License & B2B Community License. Your Salesforce admin assigns it to your user profile.
-   Make Payments user permission. This permission is available with the Salesforce Payment License. Your Salesforce admin assigns it to your buyer profile.

Resource

```

```

Available version

54.0

HTTP methods

POST

Request body for POST

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| accountId | String | ID of the account of the customer for the authorized payment. | Required | 54.0 |
| additionalData | Map<String, String> | Additional data from a payment request. Supports up to five key-value pairs. Each key and each value can contain up to 255 characters. | Optional | 54.0 |
| amount | Double | Amount of the post authorization. | Required | 54.0 |
| comments | String | Comments for payment post authorization. Maximum of 1000 characters. | Optional | 54.0 |
| currencyIsoCode | String | Three-letter ISO 4217 currency code associated with the payment group record. | Optional | 54.0 |
| effectiveDate | String | Date that the payment post authorization occurs. | Required | 54.0 |
| email | String | Email of the client that initiated the request. | Optional | 54.0 |
| idempotencyKey | String | Idempotency key used for the payment request. Can be provided in the payload or the header, but not in both places at once. | Optional | 54.0 |
| ipAddress | String | IP address of the client that made the request. | Optional | 54.0 |
| macAddress | String | MAC address of the client that made the request. | Optional | 54.0 |
| paymentGatewayId | String | Payment gateway that evaluates the post authorization. | Required | 54.0 |
| paymentGroup | Payment Group Input | Payment group associated with or to be created for the request. Request must contain either a paymentGroupId or paymentGroup, but not both. | Required | 54.0 |
| paymentMethod | Post Authorization API Payment Method Input | Payment method sent for the post authorization. | Required | 54.0 |
| phone | String | Phone number of the client that initiated the request. | Optional | 54.0 |

Response body for POST

[Post Auth Output](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_post_auth_output.htm "Payment post authorization output.")

## Code Examples

```
/commerce/payments/postAuths
```

## Related Topics

- Payment Group Input (atlas.en-us.chatterapi.meta/chatterapi/connect_requests_payment_group_input.htm)
- Post Authorization API Payment Method Input (atlas.en-us.chatterapi.meta/chatterapi/connect_requests_post_auth_api_payment_method_input.htm)
- Post Auth Output (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_post_auth_output.htm)
