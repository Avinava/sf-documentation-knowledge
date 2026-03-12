---
title: "Datacloud Import"
domain: chatterapi
topic: datacloud-import
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:18.224Z
estimatedTokens: 243
keywords: [Datacloud, Import, Data.com, contact]
---

# Datacloud Import

> Represents the Data.com contact import response.

# Datacloud Import

Represents the Data.com contact import response.

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| duplicatesSkippedCount | Integer | The number of duplicate records blocked from being added. | Small, 36.0 | 35.0 |
| errorCount | Integer | The number of errors generated for this response. | Small, 36.0 | 35.0 |
| errorMessageDescriptionUrl | String | The URL to the error message for this response. | Small, 36.0 | 35.0 |
| importStatus | Datacloud Import Status[] | The status of this response. | Small, 36.0 | 35.0 |
| orgAllowsDuplicates | Boolean | Indicates whether duplicate rules are turned on for the organization. True means that the organization accepts duplicate records, and false means the organization blocks duplicate records. | Small, 36.0 | 35.0 |
| successCount | Integer | The number of contacts successfully added to the organization. | Small, 36.0 | 35.0 |

## Related Topics

- Datacloud Import Status (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_datacloud_import_status.htm)
