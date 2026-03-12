---
title: "ConnectApi.InvoiceRecoveryResult"
domain: revenue-cloud
topic: connectapiinvoicerecoveryresult
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:07.173Z
estimatedTokens: 177
keywords: [ConnectApi.InvoiceRecoveryResult, Output, representation, recovered, invoice, billing, schedules]
---

# ConnectApi.InvoiceRecoveryResult

> Output representation of the details of the recovered invoice and billing
    schedules.

# ConnectApi.InvoiceRecoveryResult

Output representation of the details of the recovered invoice and billing schedules.

| Property Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| billing​Schedules | List<ConnectApi.BillingScheduleRecoveryResult> | Billing schedules associated with this invoice. | 62.0 |
| invoice​Errors | List<ConnectApi.ErrorResponse> | List of errors encountered during the invoice recovery. | 62.0 |
| invoice​Id | String | ID of the recovered invoice. | 62.0 |
| invoice​Status | String | Flag that indicates the invoice status. | 62.0 |
| success | Boolean | Indicates whether the overall transaction was successful or not (true) or not (false). | 62.0 |

## Related Topics

- ConnectApi.BillingScheduleRecoveryResult (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_connectapi_output_billing_schedule_recovery_output.htm)
