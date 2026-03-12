---
title: "Download Provider Output"
domain: life-sciences-dev-guide
topic: download-provider-output
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:42.776Z
estimatedTokens: 148
keywords: [Download, Provider, Output, representation, containing, status, resulting, data]
---

# Download Provider Output

> The response representation containing the status of the provider download request and the resulting data.

# Download Provider Output

The response representation containing the status of the provider download request and the resulting data.

Properties

| Property Name | Type | Description |
| --- | --- | --- |
| code | String | The API response code, such as 200 or 500. |
| message | String | In case of a failure, this property provides error details. |
| response | Map<String, Object> | The actual response data, which includes information about the created entities such as accounts and contact point addresses. |
| success | Boolean | Indicates whether the API request was successful. |
