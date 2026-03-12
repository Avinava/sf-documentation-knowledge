---
title: "Payment Scheduler Update (PATCH)"
domain: revenue-cloud
topic: payment-scheduler-update-patch
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:08.997Z
estimatedTokens: 317
keywords: [Payment, Scheduler, PATCH, Activate, deactivate, status, Active, Canceled, Draft, Inactive]
---

# Payment Scheduler Update (PATCH)

> Activate or deactivate a payment scheduler. You can set the status of
      a payment scheduler to Active, Canceled, Draft, or
        Inactive.

# Payment Scheduler Update (PATCH)

Activate or deactivate a payment scheduler. You can set the status of a payment scheduler to Active, Canceled, Draft, or Inactive.

Special Access Rules

You need the Payment Ops permission set to use this API.

Resource

```

```

Resource example

```

```

Available version

64.0

HTTP methods

PATCH

Path parameter for POST

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| billingBatch​SchedulerId | String | ID of the payment scheduler record. | Required | 64.0 |

Request body for PATCH

JSON example

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| status | String | Status that must be set to activate or deactivate a payment scheduler. Valid values are:ActiveCanceledDraftInactive | Required | 64.0 |

Response body for PATCH

[Payments Scheduler Update](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/connect_responses_payment_scheduler_update_output.htm "Output representation of the details of the updated payment scheduler. This representation covers the updated status value of the specified payment scheduler.")

## Code Examples

```
/commerce/payments/payment-schedulers/billingBatchSchedulerId
```

```
https://yourInstance.salesforce.com/services/data/v66.0/commerce/payments/payment-schedulers/5BSxx0000004TwGGAU
```

```
{
  "status": "Active"
}
```

## Related Topics

- Payments Scheduler
              Update (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/connect_responses_payment_scheduler_update_output.htm)
