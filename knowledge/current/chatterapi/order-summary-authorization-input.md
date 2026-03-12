---
title: "Order Summary Authorization Input"
domain: chatterapi
topic: order-summary-authorization-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:12.305Z
estimatedTokens: 295
keywords: [Order, Summary, Authorization, Input, representation, authorize, guest, access, requested, record]
---

# Order Summary Authorization Input

> Input representation to authorize guest access for the requested order
  summary record.

# Order Summary Authorization Input

Input representation to authorize guest access for the requested order summary record.

Root XML tag

orderSummaryAuthorizationInput

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| email | String | An email address of the guest user. | Required | 64.0 |
| lastName | String | The last name of the guest user. | Optional | 64.0 |
| orderSummary​RefNumber | String | The order summary reference number of the order summary record. | Required | 64.0 |
| phoneNumber | String | The phone number of the guest user. | Required | 64.0 |

#### See Also

-   [Commerce Webstore Order Summary Authorization](atlas.en-us.chatterapi.meta/chatterapi/connect_resources_commerce_webstore_authorize_guest_buyer.htm "Authorize guest users by verifying their personally identifiable information to access the requested order summary. This API is specifically for guest users.")

-   [Order Summary Authorization Output](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_order_summary_authorization_output.htm "Result of the authorize guest user request.")

## Code Examples

```
{
  "email": "Ma**********@vi*****.info",
  "lastName": "Strosin",
  "orderSummaryRefNumber": "GJA4C-MUVBN-6ZT4P-V6CSB",
  "phoneNumber": "********7740"
}
```

## Related Topics

- Commerce Webstore Order Summary Authorization (atlas.en-us.chatterapi.meta/chatterapi/connect_resources_commerce_webstore_authorize_guest_buyer.htm)
- Order Summary Authorization Output (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_order_summary_authorization_output.htm)
