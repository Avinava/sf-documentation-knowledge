---
title: "ConnectApi.InvoiceInputRepresentation"
domain: revenue-cloud
topic: connectapiinvoiceinputrepresentation
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:05.062Z
estimatedTokens: 220
keywords: [ConnectApi.InvoiceInputRepresentation, Input, representation, details, billing, schedule.]
---

# ConnectApi.InvoiceInputRepresentation

> Input representation of the details of the billing schedule.

# ConnectApi.InvoiceInputRepresentation

Input representation of the details of the billing schedule.

| Property | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| action | ConnectApi.InvoiceAction | Type of invoice to be created. Valid values are:DraftPosted | Required | 62.0 |
| billing​ScheduleIds | List<String> | List of billing schedule IDs that’s used to create the invoices. You can specify a maximum of 200 billing schedules. | Required | 62.0 |
| correlation​Id | String | Property that’s tagged against the published InvoiceProcessedEvent event, if specified. | Optional | 62.0 |
| invoice​Date | String | Stamping date of the invoice in ISO 8601 format. | Required | 62.0 |
| target​Date | String | Date in ISO 8601 format used to decide the billing periods that are included to create invoices. | Required | 62.0 |
