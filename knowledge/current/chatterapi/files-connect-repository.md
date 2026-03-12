---
title: "Files Connect Repository"
domain: chatterapi
topic: files-connect-repository
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:14.720Z
estimatedTokens: 100
keywords: [Files, Connect, Repository]
---

# Files Connect Repository

> Information about a Files Connect
      repository.

# Files Connect Repository

Information about a Files Connect repository.

| Property | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| authentication | Files Connect Repository Authentication | Repository authentication information. | Small, 40.0 | 40.0 |
| features | Files Connect Repository Features | Repository features. | Small, 32.0 | 32.0 |
| id | String | 18-character ID of the external data source. | Small, 32.0 | 32.0 |
| label | String | Repository label. | Small, 32.0 | 32.0 |
| motif | Motif | The motif properties contain URLs for small, medium, and large icons that indicate the Salesforce record type. Common record types are files, users, and groups, but all record types have a set of motif icons. Custom object records use their tab style icon. All icons are available to unauthenticated users so that, for example, you can display the motif icons in an email. The motif can also contain the record type’s base color. | Small, 32.0 | 32.0 |
| mySubscription | Reference | If the context user is following this record, information about the subscription; otherwise null. | Medium, 32.0 | 32.0 |
| name | String | Repository name. | Small, 32.0 | 32.0 |
| providerType | Files Connect Provider Type | Repository provider type. | Small, 32.0 | 32.0 |
| rootFolderItemsUrl | String | URL to the repository root folder items, or null if the repository does not support browsing. | Small, 32.0 | 32.0 |
| type | String | Type of record, ContentHubRepository. | Small, 32.0 | 32.0 |
| url | String | Connect REST API resource URL to the Files Connect repository. | Small, 32.0 | 32.0 |

#### See Also

-   [Content](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_content.htm "A file attached to a feed item.")

-   [Content Capability](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_content_capability.htm "If a comment has this capability, it has a file attachment.")

-   [File Summary](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_file.htm "Description of a file.")

-   [Files Connect Repository Collection](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_content_hub_repository_collection.htm "A collection of Files Connect repositories.")

## Code Examples

```
/connect/content-hub/repositories/repositoryId
```

```
/connect/communities/communityId/content-hub/repositories/repositoryId
```

## Related Topics

- Files Connect Repository (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_ContentHubRepository.htm)
- Files Connect Repository Authentication (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_content_hub_repository_authentication.htm)
- Files Connect Repository
                        Features (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_ContentHubRepositoryFeatures.htm)
- Motif (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_motif.htm)
- Reference (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_reference.htm)
- Files Connect Provider
                        Type (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_ContentHubProviderType.htm)
- Content (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_content.htm)
- Content Capability (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_content_capability.htm)
- File Summary (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_file.htm)
- Files Connect Repository Collection (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_content_hub_repository_collection.htm)
