---
title: "Unapply Credit Memo (POST)"
domain: revenue-cloud
topic: unapply-credit-memo-post
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:06.782Z
estimatedTokens: 365
keywords: [Unapply, Credit, Memo, POST, credit, memo, invoice, their, pre-application, states.]
---

# Unapply Credit Memo (POST)

> Unapply a credit memo from an invoice and return the invoice and the
      credit memo to their pre-application states.

# Unapply Credit Memo (POST)

Unapply a credit memo from an invoice and return the invoice and the credit memo to their pre-application states.

Use this resource if an error occurred when a credit is issued. For example, if an incorrect credit memo is applied to an invoice, or if a credit memo is created for an incorrect amount, use this resource to unapply the credit memo.

Special Access Rules

You need the Credit Memo Operations User permission set to use this API.

Resource

```

```

Resource example

```

```

Available version

62.0

HTTP methods

POST

Path parameter for POST

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| creditMemo​InvApplication​Id | String | ID of the credit memo invoice application. | Required | 62.0 |

Request body for POST

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| description | String | Explanation or reason for unapplying the credit memo. | Optional | 62.0 |
| effectiveDate | String | Effective date for the credit memo. | Optional | 62.0 |

Response body for POST

[Credit Memo Unapply](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/connect_responses_credit_memo_unapply_output.htm "Output representation of the details of the credit memo invoice application record with the status of the request.")

## Code Examples

```
/commerce/invoicing/credit-memo-inv-applications/creditMemoInvApplicationId/actions/unapply
```

```
https://yourInstance.salesforce.com/services/data/v66.0/commerce/invoicing/credit-memo-inv-applications/4sFSG000002nxPB2AY/actions/unapply
```

```
{
      "description": "Unapply credit memo from invoice to revert an error",
      "effectiveDate": "2024-07-01"
    }
```

## Related Topics

- Credit Memo
              Unapply (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/connect_responses_credit_memo_unapply_output.htm)
