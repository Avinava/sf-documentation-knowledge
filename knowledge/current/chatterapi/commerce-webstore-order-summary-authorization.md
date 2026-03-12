---
title: "Commerce Webstore Order Summary Authorization"
domain: chatterapi
topic: commerce-webstore-order-summary-authorization
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:14.157Z
estimatedTokens: 436
keywords: [Commerce, Webstore, Order, Summary, Authorization, Authorize, guest, users, verifying, their, personally, identifiable, access, requested, API]
---

# Commerce Webstore Order Summary Authorization

> Authorize guest users by verifying their personally identifiable
      information to access the requested order summary. This API is specifically for guest
      users.

# Commerce Webstore Order Summary Authorization

Authorize guest users by verifying their personally identifiable information to access the requested order summary. This API is specifically for guest users.

This API is used to authorize a guest user and retrieve an access token, which can then be used as input for the Commerce Webstore Order Summary Lookup GET API to retrieve the requested order summary record. The access token is valid for 60 minutes.

Resource

```

```

Example example

```

```

Available version

64.0

HTTP methods

POST

Request body for POST

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

Response body for POST

[Order Summary Authorization Output](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_order_summary_authorization_output.htm "Result of the authorize guest user request.")

#### See Also

-   [Order Summary Authorization Input](atlas.en-us.chatterapi.meta/chatterapi/connect_requests_order_summary_authorization_input.htm "Input representation to authorize guest access for the requested order summary record.")

-   [Order Summary Authorization Output](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_order_summary_authorization_output.htm "Result of the authorize guest user request.")

## Code Examples

```
/commerce/webstores/webstoreId/order-summaries/actions/authorize
```

```
https://yourInstance.salesforce.com/services/data/v64.0/commerce/webstores/0ZExx000000005rGAA/order-summaries/actions/authorize
```

```
{
  "email": "Ma**********@vi*****.info",
  "lastName": "Strosin",
  "orderSummaryRefNumber": "GJA4C-MUVBN-6ZT4P-V6CSB",
  "phoneNumber": "********7740"
}
```

## Related Topics

- Order Summary Authorization
              Output (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_order_summary_authorization_output.htm)
- Order Summary Authorization Input (atlas.en-us.chatterapi.meta/chatterapi/connect_requests_order_summary_authorization_input.htm)
- Order Summary Authorization Output (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_order_summary_authorization_output.htm)
