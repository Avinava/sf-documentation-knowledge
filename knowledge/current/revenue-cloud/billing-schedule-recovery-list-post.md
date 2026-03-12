---
title: "Billing Schedule Recovery List (POST)"
domain: revenue-cloud
topic: billing-schedule-recovery-list-post
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:08.914Z
estimatedTokens: 383
keywords: [Billing, Schedule, Recovery, POST, Recover, latest, generated, invoice, associated, schedules, Error, Processing, status]
---

# Billing Schedule Recovery List (POST)

> Recover the latest generated invoice associated with the billing
      schedules in the Error or Processing status.

# Billing Schedule Recovery List (POST)

Recover the latest generated invoice associated with the billing schedules in the Error or Processing status.

Billing schedules include critical details such as the amount to be billed, next billing date, and status. An invoice can be associated with one or more billing schedules. When an invoice is generated or posted, the billing schedules are updated to reflect the accurate state of the invoice. The billing schedules associated with an invoice are marked in the Error status if any of the invoicing processes have errors. Use this API to recover the invoice associated with the billing schedules in the Error or Processing status.

Special Access Rules

You need the Manage Errors Using Invoice Error Recovery API permission set to use this API.

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

Request body for POST

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| billing​Schedule​Ids | String[] | IDs of the billing schedules to recover the invoice for. You can recover one billing schedule per API request. | Required | 62.0 |

Response body for POST

[Billing Schedule Recovery List](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/connect_responses_billing_schedule_recovery_list_output.htm "Output representation of the recovered details of the billing schedules and associated invoice.")

## Code Examples

```
/commerce/invoicing/billing-schedules/collection/actions/recover
```

```
https://yourInstance.salesforce.com/services/data/v66.0/commerce/invoicing/billing-schedules/collection/actions/recover
```

```
{
    "billingScheduleIds": ["44bDU00000000XXYAY"]
  }
```

## Related Topics

- Billing Schedule
              Recovery List (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/connect_responses_billing_schedule_recovery_list_output.htm)
