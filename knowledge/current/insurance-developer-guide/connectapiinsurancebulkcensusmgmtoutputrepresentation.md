---
title: "ConnectApi.InsuranceBulkCensusMgmtOutputRepresentation"
domain: insurance-developer-guide
topic: connectapiinsurancebulkcensusmgmtoutputrepresentation
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:39.509Z
estimatedTokens: 130
keywords: [Output, representation, bulk, employee, census, management, process]
---

# ConnectApi.InsuranceBulkCensusMgmtOutputRepresentation

> Output representation for the bulk employee census management process.

# ConnectApi.InsuranceBulkCensusMgmtOutputRepresentation

Output representation for the bulk employee census management process.

| Property Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| errors | List<ConnectApi.ErrorResponseRepresentation> | List of errors that occurred during processing. | 65.0 |
| isSuccess | Boolean | Indicates whether the bulk operation is successfully initiated (true) or not (false). | 65.0 |
| requestId | String | ID of the asynchronous bulk request. | 65.0 |
