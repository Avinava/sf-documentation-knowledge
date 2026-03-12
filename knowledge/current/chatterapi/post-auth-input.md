---
title: "Post Auth Input"
domain: chatterapi
topic: post-auth-input
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:12.494Z
estimatedTokens: 475
keywords: [Post, Auth, Input, Payment, authorization, consumed, service]
---

# Post Auth Input

> Payment post authorization input consumed by payment post
      authorization service.

# Post Auth Input

Payment post authorization input consumed by payment post authorization service.

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

## Related Topics

- Payment Group Input (atlas.en-us.chatterapi.meta/chatterapi/connect_requests_payment_group_input.htm)
- Post Authorization API Payment Method Input (atlas.en-us.chatterapi.meta/chatterapi/connect_requests_post_auth_api_payment_method_input.htm)
