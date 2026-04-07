---
title: "POST /sms/v1/messageList/{id}/deliveryReport/{tokenId}"
domain: mc-apis
topic: post-smsv1messagelistiddeliveryreporttokenid
apiVersion: 67.0
release: summer-26-v67
docType: concept
lastCollected: 2026-04-07T09:06:22.713Z
estimatedTokens: 205
keywords: [POST, sms, messageList, deliveryReport, tokenId, Triggers, delivery, report, API, **Overview**, Usage]
---

# POST /sms/v1/messageList/{id}/deliveryReport/{tokenId}

> Triggers a delivery report for messageList API.

# POST /sms/v1/messageList/{id}/deliveryReport/{tokenId}

## **Overview**

Triggers a delivery report for messageList API.

| Name | Type |  | Description |
| --- | --- | --- | --- |
| tokenid | string | Required | The ID provided in the MessageList REST response |
| messageID | string | Required | The API key of the message definition (configured in the MobileConnect user interface) |
| Name | Type |  | Description |
| --- | --- | --- | --- |
| fileName | string | Required | The name of the report file in your FTP/reports folder |

### Usage

```js
Host: https://YOUR_SUBDOMAIN.rest.marketingcloudapis.com
POST /sms/v1/messageList/{messageID}/deliveryReport/{tokenid}
Content-Type: application/json
Authorization: Bearer YOUR_ACCESS_TOKEN

{
  "filename": "DeliveryReportFileName"
}
```

Last Updated: Jun 8, 2021
