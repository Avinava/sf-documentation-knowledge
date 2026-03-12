---
title: "Salesforce Files"
domain: chatterapi
topic: salesforce-files
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:21.750Z
estimatedTokens: 1375
keywords: [Salesforce, Files, Connect, REST, API, work]
---

# Salesforce Files

> Use Connect REST API to work with Salesforce Files.

# Salesforce Files

Use Connect REST API to work with Salesforce Files.

Use Salesforce Files to upload, store, find, follow, share, and collaborate on files in the cloud.

| Resource | HTTP Methods | Tasks |
| --- | --- | --- |
| /chatter/feed-elements | GET, POST | Post feed elements and search all feed elements in an organization. |
| /chatter/feeds/files/me/feed-elements | GET | Returns all feed elements posted with files by people or groups that the context user follows. |
| /chatter/feeds/news/me/feed-elements | GET | All feed elements from all groups the context user either owns or is a member of, as well as all files, records, and users the context user follows. Use this resource to get information about feed elements and to post feed elements. |
| /chatter/feeds/record/​recordId/feed-elements | GET | Returns the feed elements for all the records the context user is following, or all the feed elements of the specified recordId. Use this resource to search a feed or to get the feed elements for a specific feed, including another user’s feed. To use this resource to get the feed elements for a group, specify the group ID as the recordId. |
| /chatter/feeds/user-profile/​userId/feed-elements | GET | Returns feed elements created by the user, parented by the user, and where the user is mentioned. In Experience Cloud sites only, this feed also contains feed elements on which the user commented. This feed is different than the news feed, which returns more feed items, including group updates. You can post to the user-profile feed. You can get another user’s user profile feed. |
| /connect/files/fileId | GET, POST, PATCH, DELETE | Get information about a specified file, including references to external files. Upload a new version of an existing file, including references to external files. Rename a file, move a file to a different folder, and delete a file. |
| /connect/files/fileId/asset | POST | Create an asset file. |
| /connect/file-assets/assetId | GET, PATCH | Get information about an asset file or change the visibility of an asset file for unauthenticated users. |
| /connect/file-assets/fullyQualifiedName​/content | GET | Get the streamed content of an asset file. |
| /connect/file-assets/fullyQualifiedName​/rendition | GET | Get up to 25 streamed renditions of an asset file. A rendition is a binary preview of the file. |
| /connect/file-assets/batch/assetIds | GET | Get information about a comma-separated list of up to 100 asset files. |
| /connect/files/fileId/content | GET | Returns the content of the file, including references to external files. The content is streamed as the body of the response. |
| /connect/files/fileId/file-shares | GET, POST | Get the users, groups, or records with which a file has been shared. Share a file with users. |
| /connect/files/fileId/image | GET | Get information about a file image. |
| /connect/files/fileId/file-shares/link | GET, PUT, DELETE | Get, create, and delete a file’s share link. |
| /connect/files/fileId/previews | GET, PATCH | Get information about a file's supported previews and generate up to 500 pages in a file preview. |
| /connect/files/fileId/previews/​previewFormat | GET | Get up to 500 pages in a file preview or get a specific page in a preview. |
| /connect/files/fileId/rendition | GET | A rendition of the file. A rendition is a binary preview of the file. The format of the binary depends on the format specified in the request. |
| /connect/files/batch/fileIds | GET, DELETE | Information about a list of files, specified by file IDs. Get information about a list of files and delete a list of files. |
| /connect/folders/folderId | GET, PATCH, DELETE | Get information about the specified folder. Move, rename, and delete a folder. |
| /connect/folders/folderId/items | GET, POST | Get information about the contents of a folder. Add a file to a folder and create a folder. |
| /chatter/groups/groupId/files | GET | Get information about the files posted to the specified group. |
| /connect/topics/topicId/files | GET | Returns information about the five files most recently posted to the specified topic. |
| /connect/files/users/userId | GET, POST | Upload a file, including references to external files, to the Files home or get information about files a user owns. These files don’t include files shared with a user, files a user follows, or general organization files. |
| /connect/files/users/me/filter/groups | GET | Get information about files posted to groups that the specified user is a member of. |
| /connect/files/users/me/filter/​shared-with-me | GET | Get information about files that have been shared with the specified user. |

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=chatterapi)

#### Note

You can replace the alias me with the user ID of the context user.

To work with repository files, see [Files Connect Repository Resources](atlas.en-us.chatterapi.meta/chatterapi/connect_resources_content-hub.htm "A Files Connect repository is an external content repository that’s connected to Salesforce. Use these resources to get a list of repositories, to get information about a repository or a repository file, and to get the content of a repository file. Also use these resources to get information about the files and folders in a repository folder. Use these resources to get a repository’s directory entries, permissions, and permission types. Also use these resources to update a repository’s permissions.").

## Related Topics

- /chatter/feed-elements (atlas.en-us.chatterapi.meta/chatterapi/connect_resources_feed_element.htm)
- /chatter/feeds/files/me/feed-elements (atlas.en-us.chatterapi.meta/chatterapi/connect_resource_feeds_files.htm)
- /chatter/feeds/news/me/feed-elements (atlas.en-us.chatterapi.meta/chatterapi/connect_resource_feeds_news.htm)
- /chatter/feeds/record/​recordId/feed-elements (atlas.en-us.chatterapi.meta/chatterapi/connect_resource_feeds_record.htm)
- /chatter/feeds/user-profile/​userId/feed-elements (atlas.en-us.chatterapi.meta/chatterapi/connect_resource_feeds_user_profile.htm)
- /connect/files/fileId (atlas.en-us.chatterapi.meta/chatterapi/connect_resources_files_information.htm)
- /connect/files/fileId/asset (atlas.en-us.chatterapi.meta/chatterapi/connect_resources_files_asset.htm)
- /connect/file-assets/assetId (atlas.en-us.chatterapi.meta/chatterapi/connect_resources_files_asset_information.htm)
- /connect/file-assets/fullyQualifiedName​/content (atlas.en-us.chatterapi.meta/chatterapi/connect_resources_files_asset_content.htm)
- /connect/file-assets/fullyQualifiedName​/rendition (atlas.en-us.chatterapi.meta/chatterapi/connect_resources_files_asset_rendition.htm)
