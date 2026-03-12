---
title: "Folder Input"
domain: chatterapi
topic: folder-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:11.747Z
estimatedTokens: 216
keywords: [Folder, Input]
---

# Folder Input

> Folder input.

# Folder Input

Folder input.

Root XML tag

<folderInput>

JSON example

```

```

Properties

| Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| isInMyFileSync | Boolean | true if the folder and all folders in this folder are synced with Salesforce Files Sync; false otherwise.NoteSalesforce Files Sync was retired on May 25, 2018. | 33.0 |
| name | String | The name of the folder.Either path or name is required. If you specify both, path is used and name is ignored. | 30.0 |
| parentFolderId | String | The ID of the parent folder.Either parentFolderId or path is required. You can’t include both. | 30.0 |
| path | String | The path of the folder. For example, my documents/folder. | 30.0 |

#### See Also

-   [Folder Item Input](atlas.en-us.chatterapi.meta/chatterapi/connect_requests_folder_item_input.htm "Folder item input.")

## Code Examples

```
{
   "path" : "my_documents/my_folder"
}
```

## Related Topics

- Folder Item Input (atlas.en-us.chatterapi.meta/chatterapi/connect_requests_folder_item_input.htm)
