---
title: "Transaction Management Platform Event"
domain: revenue-cloud
topic: transaction-management-platform-event
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:33:10.594Z
estimatedTokens: 587
keywords: [Transaction, Management, Platform, Event, QuoteSaveEvent, notify, subscribers, saving, quote, processed]
---

# Transaction Management Platform Event

> Use the QuoteSaveEvent event to notify subscribers after saving of a quote is
  processed.

# Transaction Management Platform Event

Use the QuoteSaveEvent event to notify subscribers after saving of a quote is processed.

| Available in: Lightning Experience |
| --- |
| Available in all Salesforce orgs where the admin settings for products related to the use case are enabled. The Salesforce org must have a Revenue Cloud or Subscription Management license. |


-   **[CreateAssetOrderEvent](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/sforce_api_objects_createassetorderevent.htm)**
    Notifies subscribers that the process started by the /actions/standard/createOrUpdateAssetFromOrder or /actions/standard/createOrUpdateAssetFromOrderItem request is complete. If the process is successful, use this event to learn about the new assets. If the request isn't successful, use this event to learn about the errors and how to fix them. This object is available in API version 55.0 and later.
-   **[PlaceOrderCompletedEvent](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/sforce_api_objects_placeordercompletedevent.htm)**
    Notifies subscribers of an order being created or updated by invoking the Place Order API or the Place Sales Transaction API. This object is available in API version 63.0 and later.
-   **[QuoteSaveEvent](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/sforce_api_objects_quotesaveevent.htm)**
    Notifies subscribers that the process started by the Place Quote or Place Sales Transaction API request is complete. If the process is successful, use this event to learn about the updated quote. If the request isn't successful, use this event to learn about the errors and how to fix them. This object is available in API version 60.0 and later.
-   **[QuoteToOrderCompletedEvent](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/sforce_api_objects_quotetoordercompletedevent.htm)**
    Notifies subscribers when the /actions/standard/createOrderFromQuote REST request is complete. If the request is successful, use this event to learn about the Order record. If the request isn’t successful, use this event to learn about the errors associated with the request. This object is available in API version 56.0 and later.

## Related Topics

- CreateAssetOrderEvent (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/sforce_api_objects_createassetorderevent.htm)
- PlaceOrderCompletedEvent (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/sforce_api_objects_placeordercompletedevent.htm)
- QuoteSaveEvent (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/sforce_api_objects_quotesaveevent.htm)
- QuoteToOrderCompletedEvent (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/sforce_api_objects_quotetoordercompletedevent.htm)
