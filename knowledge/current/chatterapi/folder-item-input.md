---
title: "Folder Item Input"
domain: chatterapi
topic: folder-item-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:11.750Z
estimatedTokens: 114
keywords: [Folder, Item, Input]
---

# Folder Item Input

> Folder item input.

# Folder Item Input

Folder item input.

Root XML tag

<folderItem>

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| file | File Input | A file in a folder | Required to POST a File | 30.0 |
| folder | Folder Input | A folder in a folder | Required to POST a Folder | 30.0 |
| type | String | The item type. One of these values:FileFolder | Required | 30.0 |

## Code Examples

```
{
   "file" :
      {
         "desc" : "Yearly Report for Universal Containers Box Division",
         "title" : "Yearly.txt"
      },
   "type" : "File"
}
```

## Related Topics

- File
                                    Input (atlas.en-us.chatterapi.meta/chatterapi/connect_requests_file_input.htm)
- Folder
                                    Input (atlas.en-us.chatterapi.meta/chatterapi/connect_requests_folder_input.htm)
