---
title: "Files Connect Item Input"
domain: chatterapi
topic: files-connect-item-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:11.407Z
estimatedTokens: 191
keywords: [Files, Connect, Item, Input]
---

# Files Connect Item Input

> The item type ID and fields of the item type.

# Files Connect Item Input

The item type ID and fields of the item type.

Root XML tag

<contentHubInputItem>

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| fields | Files Connect Field Value Input[] | List of fields for the item. | Required to create a SharePoint file in a repository because the file name is required; otherwise optional | 35.0 |
| itemTypeId | String | ID of the item type, such as L3NpdGVzL0FDRVRfRklMRUNPTk5FQ1RfSU5U:​5f33e0f4-b33c-4127-b9e4-dd5a73dd2f1b:​0c847e7c-d4a2-4136-bfda-c468fae2d087:0x0101.To get the itemTypeId, use the Files Connect Repository Folder Allowed Item Types resource. | Required to create a file in a repository | 35.0 |

## Code Examples

```
{
   "itemTypeId" : "L3NpdGVzL0FDRVRfRklMRUNPTk5FQ1RfSU5U:5f33e0f4-b33c-4127-b9e4-dd5a73dd2f1b:0c847e7c-d4a2-4136-bfda-c468fae2d087:0x0101",
   "fields" : [
   {
      "name" : "name",
      "value" : "Content Hub Simple Create Specs"
   },
   {
      "name" : "description",
      "value" : "Document explaining the various connect api endpoints required for simple create"
   }]
}
```

## Related Topics

- Files Connect Field Value Input (atlas.en-us.chatterapi.meta/chatterapi/connect_requests_content_hub_field_value_input.htm)
- Files Connect Repository Folder Allowed
                                       Item Types (atlas.en-us.chatterapi.meta/chatterapi/connect_resources_content_hub_repository_folder_item_types.htm)
