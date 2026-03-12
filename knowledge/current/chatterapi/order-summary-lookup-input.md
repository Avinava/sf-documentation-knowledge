---
title: "Order Summary Lookup Input"
domain: chatterapi
topic: order-summary-lookup-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:12.328Z
estimatedTokens: 265
keywords: [Order, Summary, Lookup, Input]
---

# Order Summary Lookup Input

> Order summary lookup input.

# Order Summary Lookup Input

Order summary lookup input.

Root XML tag

<orderSummaryLookupInput>

JSON example

Here's an example where the request for registered buers include the order summary ID:

{ "orderSummaryIdOrRefNumber":"1Osxx0000004DypCAE" }

Here’s an example where the request for guest shoppers includes the order summary reference number and verification details:

{ "orderSummaryIdOrRefNumber":"GJA4C-MUVBN-6ZT4P-V6CSB", "verification":{ "lastName":”Strosin”, "email":”Ma\*\*\*\*\*\*\*\*\*\*@vi\*\*\*\*\*.info”, "phoneNumber":"\*\*\*\*\*\*\*\*7740" } }

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| orderSummaryId​OrRefNumber | String | Either the order summary ID or reference number value.For guest shoppers, use the order reference number. | Required | 58.0 |
| verification | Order Summary Verification Input | Verification attributes for guest shoppers. | OptionalThis is required for guest users if the request doesn't include a valid session cookie. | 58.0 |

## Related Topics

- Order Summary Verification Input (atlas.en-us.chatterapi.meta/chatterapi/connect_requests_order_summary_verification_input.htm)
