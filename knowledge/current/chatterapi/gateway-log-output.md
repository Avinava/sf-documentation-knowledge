---
title: "Gateway Log Output"
domain: chatterapi
topic: gateway-log-output
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:19.059Z
estimatedTokens: 169
keywords: [Gateway, Log, Output, representation]
---

# Gateway Log Output

> Gateway log output representation.

# Gateway Log Output

Gateway log output representation.

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| createdDate | String | Date indicating when the gateway log was created. | Big, 48.0 | 48.0 |
| gatewayResult​Code | String | The gateway sends result codes to show the status of a transaction as it is passed to the financial institution and then returned to the client. | Big, 48.0 | 48.0 |
| id | String | ID of the gateway log record. | Big, 48.0 | 48.0 |
| interaction​Status | String | Gateway interaction status. Current supported values are SUCCESS, FAILED, or TIMEOUT. | Big, 48.0 | 48.0 |
