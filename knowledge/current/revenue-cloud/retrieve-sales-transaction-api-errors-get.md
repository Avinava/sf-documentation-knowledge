---
title: "Retrieve Sales Transaction API Errors (GET)"
domain: revenue-cloud
topic: retrieve-sales-transaction-api-errors-get
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:08.932Z
estimatedTokens: 387
keywords: [Retrieve, Sales, Transaction, API, Errors, any, asynchronous, error, associated]
---

# Retrieve Sales Transaction API Errors (GET)

> Retrieve any asynchronous error details associated with
      a sales transaction request.

# Retrieve Sales Transaction API Errors (GET)

Retrieve any asynchronous error details associated with a sales transaction request.

This API returns detailed error status and a retryable payload from [Place Sales Transaction API](https://developer.salesforce.com/docs/atlas.en-us.260.0.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/connect_resources_place_sales_transaction.htm "HTML (New Window)") that runs asynchronously. Also, view any blocking errors that prevent a subrequest from persisting. This request doesn’t return any non-blocking warnings, such as configuration or tax warnings.

You can view the list of rollbackedReferenceIds, which shows synthetic or reference IDs that roll back when the batch fails.

Resource

```

```

Resource example

```

```

Available version

66.0

HTTP methods

GET

Request parameter for GET

| Parameter Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| includeRetryable​Payload | Boolean | Indicates whether to return a subset of the original Place Sales Transaction API payload errors (true) or not (false). The default value is false. | Optional | 66.0 |

Response body for GET

[Sales Transaction Async Error](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/connect_responses_place_sales_transaction_async_error_output.htm "Output representation of the details of errors encountered during the async processing of the Place Sales Transaction API request.")

## Code Examples

```
connect/revenue/transaction-management/sales-transactions/actions/place/trackerId/errors
```

```
https://yourInstance.salesforce.com/services/data/v66.0/connect/revenue/transaction-management/sales-transactions/actions/place/16PRM0000004DBq/errors
```

## Related Topics

- Sales Transaction
              Async Error (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/connect_responses_place_sales_transaction_async_error_output.htm)
