---
title: "File Preview"
domain: chatterapi
topic: file-preview
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:15.395Z
estimatedTokens: 655
keywords: [File, Preview, pages, specific]
---

# File Preview

> Get up to 500 pages in a file preview or get a specific page in a
      preview.

# File Preview

Get up to 500 pages in a file preview or get a specific page in a preview.

Resource

```

```

```

```

Supported values for previewFormat:

-   jpg—Preview format is JPG.

    If you’re concerned that feature-rich SVG previews don’t work in your org, choose alternative file previews. To use JPG file previews, enter general in the Quick Find box in Setup. Select General Settings, and then select **Display alternative file previews**.

-   pdf—Preview format is PDF.

    PDF previews are available for files of type DOC, DOCX, PPT, PPTX, TEXT, XLS, and XLSX. If you need a PDF preview for files of type PDF, call the download version using the [File Content](atlas.en-us.chatterapi.meta/chatterapi/connect_resources_files_content.htm "Returns the content of the file, including references to external files. The content is streamed as the body of the response.") resource.

-   svg—Preview format is SVG.

    SVG files are generated on demand. Alternatively, you can generate an SVG preview by making a PATCH request to [/connect/files/fileId/previews](atlas.en-us.chatterapi.meta/chatterapi/connect_resources_files_preview.htm#connect_resources_files_preview "Get information about a file's supported previews and generate up to 500 pages in a file preview.").

    ![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=chatterapi)

    #### Note

    Hyperforce doesn’t support the SVG file preview format. Any org hosted on Hyperforce defaults to JPG file preview format regardless of the org preference in Setup.

-   thumbnail—Preview format is 240 x 180 PNG.
-   big-thumbnail—Preview format is 720 x 480 PNG.
-   tiny-thumbnail—Preview format is 120 x 90 PNG.

Available version

36.0

In version 35.0, use /chatter/files/fileId/previews/previewFormat and /connect/communities/communityId/chatter/files/fileId/previews/previewFormat, which require Chatter.

HTTP methods

GET, HEAD

Request parameters for GET

| Parameter Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| endPageNumber | Integer | The ending page number in the range of file preview URLs. Up to 500 pages are available in preview. | Optional | 35.0 |
| startPageNumber | Integer | The starting page number in the range of file preview URLs. Up to 500 pages are available in preview. | Optional | 35.0 |
| versionNumber | Integer | Version number of the file. Default value is latest version. | Optional | 40.0 |

Response body for GET

[File Preview](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_file_preview.htm "A file preview.")

## Code Examples

```
/connect/files/fileId/previews/previewFormat
```

```
/connect/communities/communityId/files/fileId/previews/previewFormat
```

## Related Topics

- File Content (atlas.en-us.chatterapi.meta/chatterapi/connect_resources_files_content.htm)
- /connect/files/fileId/previews (atlas.en-us.chatterapi.meta/chatterapi/connect_resources_files_preview.htm)
- File Preview (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_file_preview.htm)
- File Preview URL (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_file_preview_url.htm)
- File Preview Collection (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_file_preview_collection.htm)
- Message Segment: Inline Image (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_inline_image_message_segment.htm)
