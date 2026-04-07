---
title: "POST /sms/v1/automation/importSend/{id}/deliveryReport"
domain: mc-apis
topic: post-smsv1automationimportsendiddeliveryreport
apiVersion: 67.0
release: summer-26-v67
docType: concept
lastCollected: 2026-04-07T09:06:22.390Z
estimatedTokens: 214
keywords: [POST, sms, automation, importSend, deliveryReport, Generates, csv, fiie, containing, regarding, message, delivery, specific, MessageList, places]
---

# POST /sms/v1/automation/importSend/{id}/deliveryReport

> Generates a .csv fiie containing information regarding SMS message delivery for a specific MessageList and places the report in the Enhanced FTP location for the Marketing Cloud account.

# POST /sms/v1/automation/importSend/{id}/deliveryReport

## **Overview**

Generates a .csv fiie containing information regarding SMS message delivery for a specific MessageList and places the report in the Enhanced FTP location for the Marketing Cloud account.

| Name | Type |  | Description |
| --- | --- | --- | --- |
| tokenid | string | Required | The ID provided in the MessageList REST response |
| Name | Type |  | Description |
| --- | --- | --- | --- |
| fileName | string | Required | The name of the report file in your FTP/reports folder |

### Usage

**Example Request**

```js
Host: https://YOUR_SUBDOMAIN.rest.marketingcloudapis.com
POST /sms/v1/automation/importSend/{tokenid}/deliveryReport/
Content-Type: application/json
Authorization: Bearer YOUR_ACCESS_TOKEN

{
  "filename": "DeliveryReportFileName"
}
```

Last Updated: Jun 8, 2021
