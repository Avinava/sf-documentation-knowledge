---
title: "ConnectApi.BillingScheduleRecoveryInputRepresentation"
domain: revenue-cloud
topic: connectapibillingschedulerecoveryinputrepresentation
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:07.051Z
estimatedTokens: 109
keywords: [Input, representation, billing, schedules, recover, associated, invoice]
---

# ConnectApi.BillingScheduleRecoveryInputRepresentation

> Input representation of the details of the billing schedules to recover the associated
    invoice.

# ConnectApi.BillingScheduleRecoveryInputRepresentation

Input representation of the details of the billing schedules to recover the associated invoice.

| Property | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| billing​Schedule​Ids | List<String> | IDs of the billing schedules to recover the invoice for. You can recover one billing schedule per API request. | Required | 62.0 |
