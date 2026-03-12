---
title: "Datacloud Import Status"
domain: chatterapi
topic: datacloud-import-status
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:18.227Z
estimatedTokens: 156
keywords: [Datacloud, Import, Status, contactId]
---

# Datacloud Import Status

> Represents the status for each contactId for this request.

# Datacloud Import Status

Represents the status for each contactId for this request.

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| datacloudId | String | The contact’s ID. Each contactId is a unique numeric value. | Small, 36.0 | 35.0 |
| importStatus | String | The import status for each contact listed in the request. Values are:DuplicateErrorSuccess | Small, 36.0 | 35.0 |

#### See Also

-   [Datacloud Import](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_datacloud_import.htm "Represents the Data.com contact import response.")

## Related Topics

- Datacloud Import (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_datacloud_import.htm)
