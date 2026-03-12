---
title: "ConnectApi.ReferenceLineError"
domain: revenue-cloud
topic: connectapireferencelineerror
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:05.153Z
estimatedTokens: 116
keywords: [ConnectApi.ReferenceLineError, Output, representation, details, line, level, errors.]
---

# ConnectApi.ReferenceLineError

> Output representation of the details of the line level errors.

# ConnectApi.ReferenceLineError

Output representation of the details of the line level errors.

| Property Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| errors | List<ConnectApi.ErrorResponse> | List of errors with error code and error message for the specified invoice line ID. | 62.0 |
| reference​LineId | String | ID of the invoice line specified in the API request that has an issue, causing the API request to fail. | 62.0 |
