---
title: "Commerce Webstore Order Summary Lookup"
domain: chatterapi
topic: commerce-webstore-order-summary-lookup
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:14.449Z
estimatedTokens: 1560
keywords: [Commerce, Webstore, Order, Summary, Lookup, Look, including, line, items, relevant, amount]
---

# Commerce Webstore Order Summary Lookup

> Look up details about an order summary, including its line items and
      relevant order amount fields.

# Commerce Webstore Order Summary Lookup

Look up details about an order summary, including its line items and relevant order amount fields. This API is available to both registered and guest users.

Resource

```

```

Resource examples for POST

```

```

```

```

Resource examples for GET

```

```

```

```

Available version

58.0

HTTP methods

GET, POST

GET is supported in API version 64.0 and later.

POST methods usually create records, but for this resource, POST is used to retrieve the requested order summary record. Both POST and GET methods retrieve the same information.

POST calls use either a valid session cookie or a verification object (email, last name, or phone) to authorize guest users. GET calls authorize guest users using either a valid session cookie or an access token generated via the [Commerce Webstore Order Summary Authorization](atlas.en-us.chatterapi.meta/chatterapi/connect_resources_commerce_webstore_authorize_guest_buyer.htm "Authorize guest users by verifying their personally identifiable information to access the requested order summary. This API is specifically for guest users.") API.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=chatterapi)

#### Note

Session cookie authorization is only available on Salesforce-hosted stores.

Request parameters for GET

| Parameter Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| accessToken | String | Encrypted access token, retrieved from the Comerce Webstore Order Summary Authorization API after successful verification for guest users. This access token is valid for 60 minutes. | OptionalThis is required for guest users if the request doesn't include a valid session cookie. | 64.0 |
| deliveryGroupId | String | ID of the delivery group associated with the order summary. | Optional | 64.0 |
| effectiveAccountId | String | ID of the account for which the request is made. If unspecified, defaults to the account ID for the context user or, for guest users, the guest user profile ID of the current store.ID of the account for which the request is made. If unspecified, defaults to the account ID for the context user. | OptionalThis field is required only for authenticated or registered users. | 64.0 |
| excludeParameters | String[] | List of fields to exclude from the API response, including AdjustmentAggregates, Adjustments, DeliveryGroups, LineItems, and Payments. | Optional | 64.0 |
| fields | String[] | List of specific fields, including custom fields, to return in the response along with default fields. For example, OrderSummary.TotalAmount, OrderItemSummary.Quantity, Product2.Description,​ OrderDeliveryGroup​Summary.GrandTotalAmount, OrderDelivery​Method.Carrier. | Optional | 64.0 |
| orderSummaryId​OrRefNumber | String | Either the order summary ID or reference number.For guest users, use the order summary reference number. | Required | 64.0 |

Response body for GET

[Order Summary Lookup Output](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_order_summary_lookup_output.htm "Order summary lookup output.")

Request parameters for POST

| Parameter Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| deliveryGroupId | String | ID of the delivery group associated with the order summary. | Optional | 58.0 |
| effectiveAccountId | String | ID of the account for which the request is made. If unspecified, defaults to the account ID for the context user or, for guest users, the guest buyer profile ID of the current store. | Optional | 58.0 |
| excludeAdjustmentAggregates | Boolean | Specifies whether to exclude (true) or return (false) adjustment aggregates associated with an order summary. Adjustment aggregates include fields detailing promotional amounts by price, tax, and total. Aggregates are calculated asynchronously and result returned to the order summary. If unspecified, the default value is false. | Optional | 58.0 |
| excludeAdjustments | Boolean | Specifies whether to exclude (true) or return (false) adjustments associated with an order summary. Adjustments include promotional discounts. If unspecified, the default value is false. | Optional | 58.0 |
| excludeDeliveryGroups | Boolean | Specifies whether to exclude delivery groups from the response. If unspecified, the default value is false. | Optional | 58.0 |
| excludeLineItems | Boolean | Specifies whether to exclude line items from the response. If unspecified, the default value is false. | Optional | 58.0 |
| excludePayments | Boolean | Specifies whether to exclude payment information from the response. If unspecified, the default value is false. | Optional | 63.0 |
| fields | String | List of specific fields, including custom fields, to return in the response along with default fields. For example, OrderSummary.TotalAmount, OrderItemSummary.Quantity, Product2.Description,​ OrderDeliveryGroup​Summary.GrandTotalAmount, OrderDelivery​Method.Carrier. | Optional | 58.0 |

Request body for POST

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

Response body for POST

[Order Summary Lookup Output](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_order_summary_lookup_output.htm "Order summary lookup output.")

## Code Examples

```
/commerce/webstores/webstoreId/order-summaries/actions/lookup
```

```
https://yourInstance.salesforce.com/services/data/v66.0/commerce/webstores​/0ZExx00000000l2/order-summaries/actions/lookup
```

```
https://yourInstance.salesforce.com/services/data/v66.0/commerce/webstores​/0ZExx00000000l2/order-summaries/actions/lookup?effectiveAccountId=001xx000003GYl8AAG&deliveryGroupId=0agxx000000003cAAA
```

```
https://yourInstance.salesforce.com/services/data/v66.0/commerce/webstores​/0ZExx00000000l2/order-summaries/actions/lookup?effectiveAccountId=001xx000003GYl8AAG&deliveryGroupId=0agxx000000003cAAA
```

```
https://yourInstance.salesforce.com/services/data/v66.0/commerce/webstores​/0ZExx00000000l2/order-summaries/actions/lookup?accessToken=U2FsdGVkX1+kp1d8aQKHsqZJv1shF8Jx4Nc0kOdN+L5gViQa/sZtU5NHMDpIUEhz
&excludeParameters=Adjustments,DeliveryGroups
```

## Related Topics

- Commerce Webstore Order Summary
              Authorization (atlas.en-us.chatterapi.meta/chatterapi/connect_resources_commerce_webstore_authorize_guest_buyer.htm)
- Order Summary
              Lookup Output (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_order_summary_lookup_output.htm)
- Order Summary Verification Input (atlas.en-us.chatterapi.meta/chatterapi/connect_requests_order_summary_verification_input.htm)
