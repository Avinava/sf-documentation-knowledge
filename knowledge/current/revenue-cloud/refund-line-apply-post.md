---
title: "Refund Line Apply (POST)"
domain: revenue-cloud
topic: refund-line-apply-post
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:06.594Z
estimatedTokens: 322
keywords: [Refund, Line, Apply, POST, refund, transaction, against, payment.]
---

# Refund Line Apply (POST)

> Make a refund transaction against a payment.

# Refund Line Apply (POST)

Make a refund transaction against a payment.

Resource

```

```

Resource example

```

```

Available version

64.0

HTTP methods

POST

Path parameter for POST

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| refundId | String | ID of the refund record. | Required | 64.0 |

Request body for POST

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| amount | Double | Amount to refund. | Required | 64.0 |
| appliedToId | String | ID of a payment or credit memo record. The refund is applied to this object. | Required | 64.0 |
| comments | String | Additional details of the refund request. | Optional | 64.0 |
| effectiveDate | String | Date from when the refund is in effect. | Optional | 64.0 |

Response body for POST

[Refund Line Apply](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/connect_responses_refund_line_apply_output.htm "Output representation of the details of an applied refund. This representation includes the properties of a refund line, such as the date when the refund is applied against a payment and ID of the refund line record.")

## Code Examples

```
/commerce/billing/refunds/refundId/actions/apply
```

```
https://yourInstance.salesforce.com/services/data/v66.0/commerce/billing/refunds/0cbVc0000000G4nIAE/actions/apply
```

```
{
  "appliedToId": "0aQR00000004ZkKMAU",
  "amount": 10,
  "effectiveDate": "2020-08-11T07:53:15.000Z",
  "comments": "Payment application."
}
```

## Related Topics

- Refund Line
              Apply (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/connect_responses_refund_line_apply_output.htm)
