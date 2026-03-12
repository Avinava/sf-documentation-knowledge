---
title: "Void Posted Credit Memo (POST)"
domain: revenue-cloud
topic: void-posted-credit-memo-post
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:09.033Z
estimatedTokens: 230
keywords: [Posted, Credit, Memo, POST, state]
---

# Void Posted Credit Memo (POST)

> Void a credit memo in posted state.

# Void Posted Credit Memo (POST)

Void a credit memo in posted state.

The API response returns a unique identifier. In case of any asynchronous errors, a RevenueTransactionErrorLog record is created.

Resource

```

```

Resource example

```

```

Available version

66.0

HTTP methods

POST

Path parameter for POST

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| creditMemoId | String | ID of the posted credit memo to be voided. | Required | 66.0 |

Request body for POST

As this API accepts a credit memo ID as a path parameter in the URL, specify an empty request body.

Response body for POST

[Void Posted Credit Memo](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/connect_responses_void_posted_credit_memo_output.htm "Output representation of the request to void a posted credit memo.")

## Code Examples

```
/commerce/billing/credit-memos/creditMemoId/actions/void
```

```
https://yourInstance.salesforce.com/services/data/v66.0/commerce/billing/credit-memos/50gVB0000003khRYAQ/actions/void
```

## Related Topics

- Void Posted Credit
              Memo (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/connect_responses_void_posted_credit_memo_output.htm)
