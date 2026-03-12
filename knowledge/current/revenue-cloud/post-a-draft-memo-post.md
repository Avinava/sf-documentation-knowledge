---
title: "Post a Draft Memo (POST)"
domain: revenue-cloud
topic: post-a-draft-memo-post
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:07.047Z
estimatedTokens: 263
keywords: [Post, Draft, Memo, POST, draft, credit, memo, record, review, approval.]
---

# Post a Draft Memo (POST)

> Post a draft credit memo to a credit memo record for review and
      approval.

# Post a Draft Memo (POST)

Post a draft credit memo to a credit memo record for review and approval.

Resource

```

```

Resource example

```

```

Available version

65.0

HTTP methods

POST

Request body for POST

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| correlationId | String | Splunk correlation ID to use to track messages that are related to the request and logged in Splunk by the different services involved in the request. If not specified, the service creates a random Universally Unique Identifier (UUID). | Optional | 65.0 |
| creditMemoIds | String[] | ID of the credit memo record in Draft status to be posted. You can post one draft credit memo per API request. | Required | 65.0 |

Response body for POST

[Credit Memo Post](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/connect_responses_credit_memo_post_output.htm "Output representation of the request to post a credit memo.")

## Code Examples

```
/commerce/invoicing/credit/collection/actions/post
```

```
https://yourInstance.salesforce.com/services/data/v65.0/commerce/invoicing/credit/collection/actions/post
```

```
{
"creditMemoIds": ["50gDU00000001MnYAI"]
}
```

## Related Topics

- Credit Memo
              Post (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/connect_responses_credit_memo_post_output.htm)
