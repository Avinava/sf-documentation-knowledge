---
title: "Content Capability Input"
domain: chatterapi
topic: content-capability-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:11.398Z
estimatedTokens: 413
keywords: [Content, Capability, Input, file, associated, comment]
---

# Content Capability Input

> Create or update a file associated with a comment.

# Content Capability Input

Create or update a file associated with a comment.

To attach or remove files from a feed post (instead of a comment) in version 36.0 and later, use [Files Capability Input](atlas.en-us.chatterapi.meta/chatterapi/connect_requests_multiple_content_capability_input.htm "Attach up to 10 files that have already been uploaded or remove one or more files from a feed element.").

Root XML tag

```

```

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| contentDocumentId | String | ID of the existing content. | Required for existing contentNot supported for new content | 32.0 |
| description | String | Description of the file to be uploaded. | Optional for new contentNot supported for existing content | 32.0 |
| sharingOption | String | Sharing option of the file. Values are:Allowed—Resharing of the file is allowed.Restricted—Resharing of the file is restricted. | Optional | 35.0 |
| title | String | Title of the file. This value is used as the file name for new content. For example, if the title is My Title, and the file is a .txt file, the file name is My Title.txt. | Required for new contentNot supported for existing content | 32.0 |

#### See Also

-   [Comment Capabilities Input](atlas.en-us.chatterapi.meta/chatterapi/connect_requests_comment_capabilities_input.htm "Comment capabilities input.")

-   [Feed Element Capabilities Input](atlas.en-us.chatterapi.meta/chatterapi/connect_requests_feed_element_capabilities_input.htm "A container for all capabilities that can be included when creating a feed element.")

## Code Examples

```
<contentCapability>
   <contentDocumentId>069D00000001pyS</contentDocumentId>
</contentCapability>
```

```
{
   "contentDocumentId": "069D00000001pyS"
}
```

## Related Topics

- Files Capability Input (atlas.en-us.chatterapi.meta/chatterapi/connect_requests_multiple_content_capability_input.htm)
- Comment Capabilities Input (atlas.en-us.chatterapi.meta/chatterapi/connect_requests_comment_capabilities_input.htm)
- Feed Element Capabilities Input (atlas.en-us.chatterapi.meta/chatterapi/connect_requests_feed_element_capabilities_input.htm)
