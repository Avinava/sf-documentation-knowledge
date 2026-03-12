---
title: "Files Resources"
domain: chatterapi
topic: files-resources
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:15.338Z
estimatedTokens: 550
keywords: [Files, Resources, file, upload, config, including, content, rendered, version, sharing, asset, rendition]
---

# Files Resources

> Get the file upload config. Get information about files,
      including content, rendered version, and sharing. Get information about asset files, including
      content and rendition.

# Files Resources

Get the file upload config. Get information about files, including content, rendered version, and sharing. Get information about asset files, including content and rendition.

Available resources are:

| Resource | Description |
| --- | --- |
| /connect/file/upload/config | Get the file upload config. |
| /connect/files/fileId | Get information about a specified file, including references to external files. Upload a new version of an existing file, including references to external files. Rename a file, move a file to a different folder, and delete a file. |
| /connect/files/fileId/asset | Create an asset file. |
| /connect/file-assets/assetId | Get information about an asset file or change the visibility of an asset file for unauthenticated users. |
| /connect/file-assets/fullyQualifiedName​/content | Get the streamed content of an asset file. |
| /connect/file-assets/fullyQualifiedName​/rendition | Get up to 25 streamed renditions of an asset file. A rendition is a binary preview of the file. |
| /connect/file-assets/batch/assetIds | Get information about a comma-separated list of up to 100 asset files. |
| /connect/files/fileId/content | Returns the content of the file, including references to external files. The content is streamed as the body of the response. |
| /connect/files/fileId/file-shares | Get the users, groups, or records with which a file has been shared. Share a file with users. |
| /connect/files/fileId/file-shares/link | Get, create, and delete a file’s share link. |
| /connect/files/fileId/image | Get information about a file image. |
| /connect/files/fileId/previews | Get information about a file's supported previews and generate up to 500 pages in a file preview. |
| /connect/files/fileId/previews/previewFormat | Get up to 500 pages in a file preview or get a specific page in a preview. |
| /connect/files/fileId/rendition | A rendition of the file. A rendition is a binary preview of the file. The format of the binary depends on the format specified in the request. |
| /connect/files/batch/fileIds | Information about a list of files, specified by file IDs. Get information about a list of files and delete a list of files. |

## Related Topics

- /connect/file/upload/config (atlas.en-us.chatterapi.meta/chatterapi/connect_resources_file_upload_config.htm)
- /connect/files/fileId (atlas.en-us.chatterapi.meta/chatterapi/connect_resources_files_information.htm)
- /connect/files/fileId/asset (atlas.en-us.chatterapi.meta/chatterapi/connect_resources_files_asset.htm)
- /connect/file-assets/assetId (atlas.en-us.chatterapi.meta/chatterapi/connect_resources_files_asset_information.htm)
- /connect/file-assets/fullyQualifiedName​/content (atlas.en-us.chatterapi.meta/chatterapi/connect_resources_files_asset_content.htm)
- /connect/file-assets/fullyQualifiedName​/rendition (atlas.en-us.chatterapi.meta/chatterapi/connect_resources_files_asset_rendition.htm)
- /connect/file-assets/batch/assetIds (atlas.en-us.chatterapi.meta/chatterapi/connect_resources_files_asset_batch.htm)
- /connect/files/fileId/content (atlas.en-us.chatterapi.meta/chatterapi/connect_resources_files_content.htm)
- /connect/files/fileId/file-shares (atlas.en-us.chatterapi.meta/chatterapi/connect_resources_files_shares.htm)
- /connect/files/fileId/file-shares/link (atlas.en-us.chatterapi.meta/chatterapi/connect_resources_files_shares_link.htm)
