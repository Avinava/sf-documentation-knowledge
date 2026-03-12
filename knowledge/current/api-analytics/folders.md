---
title: "Folders"
domain: api-analytics
topic: folders
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:58.501Z
estimatedTokens: 395
keywords: [Folders, Analytics, API, perform, operations, report, dashboard, version, 41.0, later]
---

# Folders

> Use the Analytics Folders API to perform operations on report and dashboard folders.
    The Folders API is available in API version 41.0 and later.

# Folders

Use the Analytics Folders API to perform operations on report and dashboard folders. The Folders API is available in API version 41.0 and later.

Resources for the Analytics Folders API are available at /services/data/<latest API version>/folders. You can query each resource with an HTTP method.

| Resource | Supported HTTP Method | Description |
| --- | --- | --- |
| Folder Collections/services/data/<latest API version>/folders/ | POSTGET | Enables creation of report and dashboard folders and subfolders (POST).Gets the list of folders (GET). |
| Folder Operations/services/data/<latest API version>/folders/<folderid> | GETPATCHDELETE | Enables renaming (PATCH), deleting (DELETE), and obtaining information (GET) on the report or dashboard folder or subfolder. |
| Folder Shares/services/data/<latest API version>/folders/<folderid>/shares | GETPUTPOST | Extracts a list of current folder shares (GET), adds new shares (POST), or replaces existing shares (PUT). |
| Folder Share by ID/services/data/<latest API version>/folders/<folderid>/shares/<shareid> | GETPATCHDELETE | For a specified share ID, extracts the share information (GET), updates the access level on the share (PATCH), or deletes the share (DELETE). |
| Folder Share Recipients/services/data/<latest API version>/folders/<folderid>/share-recipients?shareType=<shareType> | GET | Returns a list of folder share recipients (GET). |
| Folder Child Operations/services/data/<latest API version>/folders/<folderid>/children/ | GET | Returns a list of first-level child folders (subfolders) (GET). |

## Related Topics

- Folder Collections (atlas.en-us.api_analytics.meta/api_analytics/analytics_api_folders_create.htm)
- Folder Operations (atlas.en-us.api_analytics.meta/api_analytics/analytics_api_folders_ops.htm)
- Folder Shares (atlas.en-us.api_analytics.meta/api_analytics/analytics_api_folders_shares.htm)
- Folder Share by ID (atlas.en-us.api_analytics.meta/api_analytics/analytics_api_folders_shares_by_id.htm)
- Folder Share Recipients (atlas.en-us.api_analytics.meta/api_analytics/analytics_api_folders_share_recipients.htm)
- Folder Child Operations (atlas.en-us.api_analytics.meta/api_analytics/analytics_api_folders_children.htm)
