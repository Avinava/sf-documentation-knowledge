---
title: "GET /sms/v1/automation/importSend/{tokenid}/status"
domain: mc-apis
topic: get-smsv1automationimportsendtokenidstatus
apiVersion: 67.0
release: summer-26-v67
docType: concept
lastCollected: 2026-04-07T09:06:22.400Z
estimatedTokens: 282
keywords: [sms, automation, importSend, tokenid, status, Retrieves, **Overview**, Usage]
---

# GET /sms/v1/automation/importSend/{tokenid}/status

> Retrieves the status of a ImportSend automation.

# GET /sms/v1/automation/importSend/{tokenid}/status

## **Overview**

Retrieves the status of a ImportSend automation.

| Name | Type |  | Description |
| --- | --- | --- | --- |
| tokenID | string | Required | The ID provided in the ImportSend REST response. |

### Usage

**Example Request**

```js
Host: https://YOUR_SUBDOMAIN.rest.marketingcloudapis.com
GET /sms/v1/automation/importSend/bzZ0cENGam1FZUtNX0poTDRYZzhlQTo2Mzow/status
Content-Type: application/json
Authorization: Bearer YOUR_ACCESS_TOKEN
```

**Example Response**

```js
{
"status": "Complete",
"lastUpdate": "2013-08-22T00:20:27.117Z",
"createdTime": "2013-08-22T00:12:38.317Z",
"startTime": "2013-08-22T00:12:38.31Z",
"completedTime": "2013-08-22T00:20:27.113Z",
"lastRunTime": "2013-08-22T00:12:38.31Z",
"source": "PracticeReminder.csv", // New in January 2014 Release
"inserted": 15, //number of new records in _MobileSubscription, new in January 2014 release
"updated": 0, // number of updated records, new in January 2014 release
"invalid": 0 // number of invalid rows in the import file, new in January 2014 release
}
```

Last Updated: Jun 8, 2021
