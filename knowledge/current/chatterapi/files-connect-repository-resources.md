---
title: "Files Connect Repository Resources"
domain: chatterapi
topic: files-connect-repository-resources
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:14.718Z
estimatedTokens: 749
keywords: [Files, Connect, Repository, Resources, external, content, that’s, connected, Salesforce, repositories, file, folders, folder, repository’s, directory]
---

# Files Connect Repository Resources

> A Files Connect repository is
                an external content repository that’s connected to Salesforce. Use these
                resources to get a list of repositories, to get information about a repository or a
                repository file, and to get the content of a repository file. Also use these
                resources to get information about the files and folders in a repository folder. Use
                these resources to get a repository’s directory entries, permissions, and permission
                types. Also use these resources to update a repository’s permissions.

# Files Connect Repository Resources

A Files Connect repository is an external content repository that’s connected to Salesforce. Use these resources to get a list of repositories, to get information about a repository or a repository file, and to get the content of a repository file. Also use these resources to get information about the files and folders in a repository folder. Use these resources to get a repository’s directory entries, permissions, and permission types. Also use these resources to update a repository’s permissions.

Available resources:

| Resource | Description |
| --- | --- |
| /connect/content-hub/repositories | Get a list of Files Connect repositories. |
| /connect/content-hub/repositories/repositoryId | Get information about a Files Connect repository. |
| /connect/content-hub/repositories/repositoryId​/directory-entries | Get the user and group directory entries of a repository. |
| /connect/content-hub/repositories/repositoryId​/files/repositoryFileId | Get information about or update a Files Connect repository file. |
| /connect/content-hub/repositories/repositoryId​/files/repositoryFileId/content | Get the content of the repository file from the external system. The content is streamed as the body of the response. |
| /connect/content-hub/repositories/repositoryId​/files/repositoryFileId/previews | Get information about a repository file's supported previews. |
| /connect/content-hub/repositories/repositoryId​/files/repositoryFileId/previews/formatType | Get a repository file preview or a specific page in a preview. |
| /connect/content-hub/repositories/repositoryId​/folders/repositoryFolderId | Get information about a repository folder. |
| /connect/content-hub/repositories/repositoryId​/folders/repositoryFolderId/allowed-item-types | Returns item types that are allowed to be created in the repository folder. |
| /connect/content-hub/repositories/repositoryId​/folders/repositoryFolderId/items | Get information about the files and folders in a repository folder. Create a file in a repository folder. |
| /connect/content-hub/repositories/repositoryId​/item-types | Returns information about an item type associated with a repository. |
| /connect/content-hub/repositories/repositoryId​/items/repositoryItemId/permissions | Get or update the permissions of a repository file. |
| /connect/content-hub/repositories/repositoryId​/items/repositoryItemId/permissions/types | Get the permission types of a repository file. |
| /connect/content-hub/items/repositoryItemId​/repository | Get Files Connect repository information for a repository file. |

Use these files resources to work with references to repository files:

| Resource | Description |
| --- | --- |
| /connect/files/fileId | Get information about or update the version of an existing reference. |
| /connect/files/fileId/content | Get the content of the reference. The content is streamed as the body of the response. |
| /connect/files/users/me | Create a reference. |

## Related Topics

- /connect/content-hub/repositories (atlas.en-us.chatterapi.meta/chatterapi/connect_resources_content_hub_repository_list.htm)
- /connect/content-hub/repositories/repositoryId (atlas.en-us.chatterapi.meta/chatterapi/connect_resources_content_hub_repository.htm)
- /connect/content-hub/repositories/repositoryId​/directory-entries (atlas.en-us.chatterapi.meta/chatterapi/connect_resources_content_hub_repository_directory_entries.htm)
- /connect/content-hub/repositories/repositoryId​/files/repositoryFileId (atlas.en-us.chatterapi.meta/chatterapi/connect_resources_content_hub_repository_file.htm)
- /connect/content-hub/repositories/repositoryId​/files/repositoryFileId/content (atlas.en-us.chatterapi.meta/chatterapi/connect_resources_content_hub_repository_file_content.htm)
- /connect/content-hub/repositories/repositoryId​/files/repositoryFileId/previews (atlas.en-us.chatterapi.meta/chatterapi/connect_resources_content_hub_repository_file_preview.htm)
- /connect/content-hub/repositories/repositoryId​/files/repositoryFileId/previews/formatType (atlas.en-us.chatterapi.meta/chatterapi/connect_resources_content_hub_repository_file_preview_format.htm)
- /connect/content-hub/repositories/repositoryId​/folders/repositoryFolderId (atlas.en-us.chatterapi.meta/chatterapi/connect_resources_content_hub_repository_folder.htm)
- /connect/content-hub/repositories/repositoryId​/folders/repositoryFolderId/allowed-item-types (atlas.en-us.chatterapi.meta/chatterapi/connect_resources_content_hub_repository_folder_item_types.htm)
- /connect/content-hub/repositories/repositoryId​/folders/repositoryFolderId/items (atlas.en-us.chatterapi.meta/chatterapi/connect_resources_content_hub_repository_folder_items.htm)
