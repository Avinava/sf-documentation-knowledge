---
title: "Gift Transaction Designations"
domain: nonprofit-cloud
topic: gift-transaction-designations
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:00.863Z
estimatedTokens: 183
keywords: [Gift, Transaction, Designations, associated, campaign, commitment, opportunity]
---

# Gift Transaction Designations

> Get designations associated with a gift transaction, campaign, commitment, or
    opportunity.

# Gift Transaction Designations

Get designations associated with a gift transaction, campaign, commitment, or opportunity.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=nonprofit_cloud)

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

[Gift Transaction Linked Designations Output](atlas.en-us.nonprofit_cloud.meta/nonprofit_cloud/connect_responses_gift_transaction_linked_designations_output.htm "Output representation of a list of gift designations.")

## Code Examples

```
/connect/fundraising/transaction/${transactionId}/designations
```

```
https://yourInstance.salesforce.com/services/data/v66.0/connect/fundraising/transaction/6trRM000000007XYAQ/designations
```

## Related Topics

- Gift Transaction Linked Designations Output (atlas.en-us.nonprofit_cloud.meta/nonprofit_cloud/connect_responses_gift_transaction_linked_designations_output.htm)
