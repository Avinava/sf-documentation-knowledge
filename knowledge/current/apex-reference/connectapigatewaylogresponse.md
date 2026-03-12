---
title: "ConnectApi.GatewayLogResponse"
domain: apex-reference
topic: connectapigatewaylogresponse
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:27.606Z
estimatedTokens: 136
keywords: [ConnectApi.GatewayLogResponse, Gateway, log, output]
---

# ConnectApi.GatewayLogResponse

> Gateway log output.

# ConnectApi.GatewayLogResponse

Gateway log output.

| Property Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| createdDate | Datetime | Date when the gateway log was created. | 50.0 |
| gatewayResultCode | String | Result codes that show the status of a transaction as it is passed to the financial institution and then returned to the client. | 50.0 |
| id | String | ID of the gateway log record. | 50.0 |
| interactionStatus | String | Gateway interaction status. It can be SUCCESS, FAILED, or TIMEOUT. | 50.0 |

## Related Topics

- Datetime (atlas.en-us.apexref.meta/apexref/apex_methods_system_datetime.htm)
- String (atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm)
