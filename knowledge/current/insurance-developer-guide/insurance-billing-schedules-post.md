---
title: "Insurance Billing Schedules (POST)"
domain: insurance-developer-guide
topic: insurance-billing-schedules-post
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:40.157Z
estimatedTokens: 282
keywords: [Insurance, Billing, Schedules, POST, policy, transactions, generate, financial, records, lifecycle, events]
---

# Insurance Billing Schedules (POST)

> Create billing schedules from insurance policy transactions to generate financial
        records for policy lifecycle events.

# Insurance Billing Schedules (POST)

Create billing schedules from insurance policy transactions to generate financial records for policy lifecycle events.

This API automates the creation of billing schedules and invoices for key policy events, including Issuance, Endorsement, Cancellation, and Renewal. The service supports complex scenarios such as out-of-sequence endorsements and cancellations by calculating transient transactions to ensure accurate net billing.

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

Request body for POST

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| insPolicy​TransactionId | String | ID of the insurance policy transaction record to get related transaction details and billing configuration. | Required | 66.0 |

Response body for POST

[Insurance Billing Schedules Response](atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/connect_responses_insurance_billing_output.htm "Details of the billing schedule creation results.")

## Code Examples

```
/connect/insurance/billing/billing-schedules
```

```
https://yourInstance.salesforce.com/services/data/v66.0/connect/insurance/billing/billing-schedules
```

```
{
  "insPolicyTransactionId": "0k9xx0000000001AAA"
}
```

## Related Topics

- Insurance Billing Schedules Response (atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/connect_responses_insurance_billing_output.htm)
