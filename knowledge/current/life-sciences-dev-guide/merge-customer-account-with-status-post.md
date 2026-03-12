---
title: "Merge Customer Account with Status (POST)"
domain: life-sciences-dev-guide
topic: merge-customer-account-with-status-post
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:42.557Z
estimatedTokens: 465
keywords: [Merge, Customer, Account, Status, POST, Merges, accounts, API, processes, requests, fail, entire, operation, invalid]
---

# Merge Customer Account with Status (POST)

> Merges a list of customer accounts and provides a status for each request. This API processes all valid requests and does not fail the entire operation if one request is invalid.

# Merge Customer Account with Status (POST)

Merges a list of customer accounts and provides a status for each request. This API processes all valid requests and does not fail the entire operation if one request is invalid.

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

{ "customersToMerge": \[ { "winningId": "a3Lxx000000MbzxxAC", "winningExternalId": "a3Lxx000000MbzxxBC", "losingId": "001xx00001STZUxxTR", "losingExternalId": "001x0000007uv3AKKA" }, { "winningId": "001x0000007cd4RBBR", "winningExternalId": "001x0000008ef5SCCS", "losingId": "001xx00001SYtgxxUI", "losingExternalId": "001x0000001ij7UEEU" } \], "overrideBlankValues": true }

| Name | Type | Description | Required |
| --- | --- | --- | --- |
| customersToMerge | MergeCustomersInputRepresentation[] | A list of customer merge requests. A maximum of 100 requests can be included in a single call. | Required |
| overrideBlankValues | Boolean | Specifies whether to override blank values in the Consolidated Account record with values from the Merged Account record. The default value is false.If set to true, it looks for null values in the fields of the winning account and fills them with non null values from the losing account. | Optional |

Response body for POST

[Merge Customer Accounts with Status Output](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/connect_responses_merge_customer_account_with_status_output.htm "The response body for the merge customer account with status request.")

## Code Examples

```
/connect/life-sciences/commercial/customers/actions/merge-with-status
```

```
https://yourInstance.salesforce.com/services/data/v66.0/connect/life-sciences/commercial/customers/actions/merge-with-status
```

## Related Topics

- MergeCustomersInputRepresentation[] (atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/connect_requests_merge_customers_input_representation.htm)
- Merge Customer Accounts with Status Output (atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/connect_responses_merge_customer_account_with_status_output.htm)
