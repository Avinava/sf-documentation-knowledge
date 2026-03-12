---
title: "Saved Payment Method Collection"
domain: chatterapi
topic: saved-payment-method-collection
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:20.267Z
estimatedTokens: 336
keywords: [Saved, Payment, Collection, active, account, contact]
---

# Saved Payment Method Collection

> Collection of active saved payment methods for an account or contact.

# Saved Payment Method Collection

Collection of active saved payment methods for an account or contact.

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| count | Integer | Count of Saved Payment Methods. | Small, 58.0 | 58.0 |
| currentPageToken | String | Token to the current page of Saved Payment Methods. | Small, 58.0 | 58.0 |
| currentPageUrl | String | URL to the current page of Saved Payment Methods. | Small, 58.0 | 58.0 |
| items | Saved Payment Method Output[] | Saved Payment Method List. | Big, 58.0 | 58.0 |
| nextPageToken | String | Token to the next page of Saved Payment Methods. | Small, 58.0 | 58.0 |
| nextPageUrl | String | URL to the next page of Saved Payment Methods. | Small, 58.0 | 58.0 |
| pageSize | Integer | Page Size for Saved Payment Methods. | Small, 58.0 | 58.0 |
| previousPageToken | String | Token to previous page of Saved Payment Methods. | Small, 58.0 | 58.0 |
| previousPageUrl | String | URL to the previous page of Saved Payment Methods. | Small, 58.0 | 58.0 |

#### See Also

-   [Saved Payment Methods](atlas.en-us.chatterapi.meta/chatterapi/connect_resources_payments_saved_payment_methods.htm "Retrieves all saved payment methods that belong to a particular merchant account or contact, or creates a saved payment method.")

## Related Topics

- Saved Payment Method Output (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_payments_saved_payment_methods_output.htm)
- Saved Payment Methods (atlas.en-us.chatterapi.meta/chatterapi/connect_resources_payments_saved_payment_methods.htm)
