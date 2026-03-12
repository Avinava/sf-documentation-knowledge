---
title: "Order Summary Authorization Output"
domain: chatterapi
topic: order-summary-authorization-output
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:20.140Z
estimatedTokens: 253
keywords: [Order, Summary, Authorization, Output, Result, authorize, guest, user]
---

# Order Summary Authorization Output

> Result of the authorize guest user request.

# Order Summary Authorization Output

Result of the authorize guest user request.

JSON example

```

```

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| accessToken | String | An encrypted token used in the Commerce Webstore Order Summary Lookup GET API to validate guest access for the requested order summary record.The access token is valid for 60 minutes. | Small, 64.0 | 64.0 |

#### See Also

-   [Commerce Webstore Order Summary Authorization](atlas.en-us.chatterapi.meta/chatterapi/connect_resources_commerce_webstore_authorize_guest_buyer.htm "Authorize guest users by verifying their personally identifiable information to access the requested order summary. This API is specifically for guest users.")

-   [Order Summary Authorization Input](atlas.en-us.chatterapi.meta/chatterapi/connect_requests_order_summary_authorization_input.htm "Input representation to authorize guest access for the requested order summary record.")

## Code Examples

```
{
    "accessToken":"U2FsdGVkX1+kp1d8aQKHsqZJv1shF8Jx4Nc0kOdN+L5gViQa/sZtU5NHMDpIUEhz"
}
```

## Related Topics

- Commerce Webstore Order Summary Authorization (atlas.en-us.chatterapi.meta/chatterapi/connect_resources_commerce_webstore_authorize_guest_buyer.htm)
- Order Summary Authorization Input (atlas.en-us.chatterapi.meta/chatterapi/connect_requests_order_summary_authorization_input.htm)
