---
title: "Merge Customer Account (POST)"
domain: life-sciences-dev-guide
topic: merge-customer-account-post
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:42.553Z
estimatedTokens: 444
keywords: [Merge, Customer, Account, POST, Merges, accounts, any, fails, entire, operation, cancelled]
---

# Merge Customer Account (POST)

> Merges a list of customer accounts. If any one account merge in the request fails,
        the entire operation is cancelled.

# Merge Customer Account (POST)

Merges a list of customer accounts. If any one account merge in the request fails, the entire operation is cancelled.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=life_sciences_dev_guide)

#### Important

Where possible, we changed noninclusive terms to align with our company value of Equality. We maintained certain terms to avoid any effect on customer implementations.

Resource

```

```

Resource Example

```

```

Available version

65.0

HTTP methods

POST

Request body for POST

{ "customersToMerge": \[ { "winningId": "001x0000002kl8VFFV", "winningExternalId": "001x0000004op0XHHX", "losingId": "001x0000009gh6TDDT", "losingExternalId": "001x0000001ij7UEEU" }, { "winningId": "001x0000003mn9WGGW", "winningExternalId": "001x0000007uv3AKKA", "losingId": "001x0000006st2ZJJZ", "losingExternalId": "001x0000005qr1YIIY" } \], "overrideBlankValues": true }

| Name | Type | Description | Required |
| --- | --- | --- | --- |
| customers​ToMerge | MergeCustomers​Input​Representation[] | A list of customer merge requests. A maximum of 100 requests can be included in a single call. | Required |
| override​BlankValues | Boolean | Specifies whether to override blank values in the Consolidated Account record with values from the Merged Account record. The default value is false.If set to true, it looks for null values in the fields of the winning account and fills them with non null values from the losing account | Optional |

Response body for POST

[Customer Accounts Merged Output](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/connect_responses_merge_customer_account_output.htm "Output representation of the response for a successful account merge operation.")

## Code Examples

```
/connect/life-sciences/commercial/customers/actions/merge
```

```
https://yourInstance.salesforce.com/services/data/v66.0/connect/life-sciences/commercial/customers/actions/merge
```

## Related Topics

- MergeCustomers​Input​Representation[] (atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/connect_requests_merge_customers_input_representation.htm)
- Customer Accounts Merged Output (atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/connect_responses_merge_customer_account_output.htm)
