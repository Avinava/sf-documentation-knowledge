---
title: "Files Capability Input"
domain: chatterapi
topic: files-capability-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:12.138Z
estimatedTokens: 163
keywords: [Files, Capability, Input, Attach, already, uploaded, remove, feed, element]
---

# Files Capability Input

> Attach up to 10 files that have already been uploaded or remove one or
      more files from a feed element.

# Files Capability Input

Attach up to 10 files that have already been uploaded or remove one or more files from a feed element.

XML example

```

```

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| items | File ID Input[] | A collection of file IDs and the operations to be carried out on the files. | Required | 36.0 |

#### See Also

-   [Feed Element Capabilities Input](atlas.en-us.chatterapi.meta/chatterapi/connect_requests_feed_element_capabilities_input.htm "A container for all capabilities that can be included when creating a feed element.")

## Code Examples

```
<files>
   <items>
      <file>
         <id>069D00000001IOh</id>
      </file>
      <file>
         <id>069D00000002IOg</id>
      </file>
   </items>
</files>
```

```
{
   "items": [
      {
      "id": "069D00000001IOh",
      "operationType": "add"
      },
      {
      "id": "069D00000002IOg",
      "operationType": "add"
      }
   ]
}
```

## Related Topics

- File ID Input (atlas.en-us.chatterapi.meta/chatterapi/connect_requests_file_id_input.htm)
- Feed Element Capabilities Input (atlas.en-us.chatterapi.meta/chatterapi/connect_requests_feed_element_capabilities_input.htm)
