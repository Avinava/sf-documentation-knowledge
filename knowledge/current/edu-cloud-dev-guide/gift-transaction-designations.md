---
title: "Gift Transaction Designations"
domain: edu-cloud-dev-guide
topic: gift-transaction-designations
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:24.915Z
estimatedTokens: 186
keywords: [Gift, Transaction, Designations, associated, campaign, commitment, opportunity]
---

# Gift Transaction Designations

> Get designations associated with a gift transaction, campaign, commitment, or
    opportunity.

# Gift Transaction Designations

Get designations associated with a gift transaction, campaign, commitment, or opportunity.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=edu_cloud_dev_guide)

#### Note

When there are no designations associated with a gift transaction, campaign, commitment, or opportunity, the API returns the organization-wide default designations.

Resource

```

```

Resource example

```

```

Available version

59.0

HTTP methods

GET

Response body for GET

[Gift Transaction Linked Designations Output](atlas.en-us.edu_cloud_dev_guide.meta/edu_cloud_dev_guide/connect_responses_gift_transaction_linked_designations_output.htm "Output representation of a list of gift designations.")

## Code Examples

```
/connect/fundraising/transaction/${transactionId}/designations
```

```
https://yourInstance.salesforce.com/services/data/v66.0/connect/fundraising/transaction/6trRM000000007XYAQ/designations
```

## Related Topics

- Gift Transaction Linked Designations Output (atlas.en-us.edu_cloud_dev_guide.meta/edu_cloud_dev_guide/connect_responses_gift_transaction_linked_designations_output.htm)
