---
title: "ConnectApi.GatewayLogResponse"
domain: apex-reference
topic: connectapigatewaylogresponse
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T15:42:38.964Z
keywords: [ConnectApi.GatewayLogResponse]
---

# ConnectApi.GatewayLogResponse

# ConnectApi.GatewayLogResponse

Gateway log output.

| Property Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| createdDate | Datetime | Date when the gateway log was created. | 50.0 |
| gatewayResultCode | String | Result codes that show the status of a transaction as it is passed to the financial institution and then returned to the client. | 50.0 |
| id | String | ID of the gateway log record. | 50.0 |
| interactionStatus | String | Gateway interaction status. It can be SUCCESS, FAILED, or TIMEOUT. | 50.0 |