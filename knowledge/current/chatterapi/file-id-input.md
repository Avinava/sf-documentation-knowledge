---
title: "File ID Input"
domain: chatterapi
topic: file-id-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:11.705Z
estimatedTokens: 241
keywords: [File, Input, Attach, already, uploaded, remove, feed, element]
---

# File ID Input

> Attach a file that has already been uploaded or remove a file from a
      feed element.

# File ID Input

Attach a file that has already been uploaded or remove a file from a feed element.

XML example

```

```

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| id | String | ID of a file that has already been uploaded. | Required | 36.0 |
| operationType | String | Operation to carry out on the file. Values are:Add—Adds the file to the feed element.Remove—Removes the file from the feed element.Remove operations are processed before Add operations. Adding content that is already added and removing content that is already removed result in no operation. | OptionalIf not specified, defaults to Add. | 36.0 |

#### See Also

-   [Files Capability Input](atlas.en-us.chatterapi.meta/chatterapi/connect_requests_multiple_content_capability_input.htm "Attach up to 10 files that have already been uploaded or remove one or more files from a feed element.")

## Code Examples

```
<file>
   <id>069D00000001IOh</id>
</file>
```

```
{
   "id": "069D00000001IOh",
   "operationType": "add"
}
```

## Related Topics

- Files Capability Input (atlas.en-us.chatterapi.meta/chatterapi/connect_requests_multiple_content_capability_input.htm)
