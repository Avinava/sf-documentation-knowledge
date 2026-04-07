---
title: "GetSystemStatus"
domain: mc-apis
topic: getsystemstatus
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-04-07T18:40:17.441Z
estimatedTokens: 541
keywords: [GetSystemStatus, retrieve, status, Marketing, Cloud, account, exception, handling, SOAP, API, call]
---

> Use the GetSystemStatus method to retrieve the status of your Marketing Cloud account. Use this method only during exception handling or as the first Marketing Cloud SOAP API call.

# GetSystemStatus

Use the GetSystemStatus method to retrieve the status of your Marketing Cloud account. Use this method only during exception handling or as the first Marketing Cloud SOAP API call.

> Do not use this method before every API call or at intervals less than 60 seconds. When troubleshooting, we recommend running this method every 10 minutes.

## C# Syntax

```
SystemStatusResult[] getsystemstatus = GetSystemStatus(Options, OverallStatus, OverallStatusMessage, RequestID)
```

## Parameters

| Name | Data Type | Description |
| --- | --- | --- |
| Options | SystemStatusOptions | Optionally specifies more processing options |
| OverallStatus | String | Specifies the overall status of the request. |
| OverallStatusMessage | String | Specifies the overall status message of the request. |
| RequestID | String | Marketing Cloud's unique identifier for every request. |

## Output

This method returns an array of SystemStatusResult objects.

-   If the SystemStatusResult SystemStatus property equals **OK**, no action is required.
-   If the SystemStatusResult SystemStatus property equals **InMaintenance**, place your application in queue mode and periodically make the GetSystemStatus call until the status returns to OK.
-   If the SystemStatusResult SystemStatus property equals **UnplannedOutage**, place your application in queue mode, contact Marketing Cloud, and periodically make the GetSystemStatus call until the status returns to OK.

To understand and act on the system status of Marketing Cloud, we recommend you have the following elements:

-   A global Marketing Cloud status container in your application. This container can allow your application to change code paths to ensure that all messages are stored while waiting for Marketing Cloud's status to return to OK. If the global status container contains an InMaintenance or UnplannedOutage status, wait for the scheduled status checking component to update the global status container to the OK status.
-   A scheduled status checking component in your software, so it can respond to error situations and update the global status container if the status is different.
