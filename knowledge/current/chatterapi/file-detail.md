---
title: "File Detail"
domain: chatterapi
topic: file-detail
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:18.862Z
estimatedTokens: 216
keywords: [File, Detail, Includes, Summary, additional, items]
---

# File Detail

> Includes all the File Summary response body with these additional items.

# File Detail

Includes all the File Summary response body with these additional items.

| Property | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| fileAsset | Asset File | An asset file. | Small, 38.0 | 38.0 |
| pageCount | Integer | Number of pages for documents that support flash renditions, or the number of slides in a presentation. Returns 0 if the flash rendition fails, or if it isn’t supported for the file type.NoteFlash renditions were retired on July 16, 2021. | Medium, 29.0 | 24.0 |
| topics | Topic Collection | A paged collection of topics that are assigned to the file. Check page attributes to make sure that you get all the assigned topics. | Big, 37.0 | 37.0 |

#### See Also

-   [File Summary](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_file.htm "Description of a file.")

## Related Topics

- Asset File (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_file_asset.htm)
- Topic Collection (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_topics_collection.htm)
- File Summary (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_file.htm)
