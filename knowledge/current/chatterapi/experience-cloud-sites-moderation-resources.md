---
title: "Experience Cloud Sites Moderation Resources"
domain: chatterapi
topic: experience-cloud-sites-moderation-resources
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:14.665Z
estimatedTokens: 1412
keywords: [Experience, Cloud, Sites, Moderation, Resources, whether, user, flagged, file, inappropriate, flags, files, audit, statistics, site]
---

# Experience Cloud Sites Moderation Resources

> Get information about whether a user has flagged a file as inappropriate. Delete flags on
        files. Get audit statistics for a user in an Experience Cloud site.

# Experience Cloud Sites Moderation Resources

Get information about whether a user has flagged a file as inappropriate. Delete flags on files. Get audit statistics for a user in an Experience Cloud site.

Available resources are:

| Resource | Description |
| --- | --- |
| /connect/communities/communityId/​files/moderation | Files that are flagged.If the context user is a moderator, get the files that members flagged. |
| /connect/communities/communityId/​files/fileId/moderation-flags | If the context user is a moderator, get the number of times members flagged a file. Also flag a file for moderation and delete all flags on a file.If the context user isn’t a moderator, get whether the user flagged a file. Also flag a file for moderation and remove a flag the user previously added. |
| /connect/communities/communityId/​chatter/users/userId/audit-actions/counts | Get audit statistics for a user in an Experience Cloud site. |

## Moderation Flags​ on Files

If the context user is a moderator, get the number of times members flagged a file. Also flag a file for moderation and delete all flags on a file.

If the context user isn’t a moderator, get whether the user flagged a file. Also flag a file for moderation and remove a flag the user previously added.

Resource

```

```

Available since release

36.0

In versions 30.0–35.0, use /connect/communities/communityId/chatter/files/fileId/moderation-flags.

HTTP methods

GET, DELETE, HEAD, POST

Request parameters for GET

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| page | String | Specifies the page token to use to view a page of information. Page tokens are returned as part of the response class, such as currentPageToken or nextPageToken. If you pass in null, the first page is returned. | Optional | 40.0 |
| pageSize | Integer | Specifies the number of items per page. Valid values are from 1 through 100. The default size is 0. | Optional | 40.0 |
| visibility | String | Visibility behavior of a flag for various user types.ModeratorsOnly—The flag is visible only to users with moderation permissions on the flagged element or item.SelfAndModerators—The flag is visible to the creator of the flag and to users with moderation permissions on the flagged element or item. | Optional | 30.0 |

Request body for POST

Root XML tag

<moderationFlag>

JSON

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| note | String | A note of up to 4,000 characters about the flag. | Optional | 38.0 |
| type | String | Type of moderation flag.FlagAsInappropriate—Flag for inappropriate content.FlagAsSpam—Flag for spam. | OptionalIf not specified, FlagAs​Inappropriate is the default value. | 38.0 |
| visibility | String | Visibility behavior of a flag for various user types.ModeratorsOnly—The flag is visible only to users with moderation permissions on the flagged element or item.SelfAndModerators—The flag is visible to the creator of the flag and to users with moderation permissions on the flagged element or item. | Optional | 30.0 |

Request parameters for POST

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| note | String | A note of up to 4,000 characters about the flag. | Optional | 38.0 |
| type | String | Type of moderation flag.FlagAsInappropriate—Flag for inappropriate content.FlagAsSpam—Flag for spam. | OptionalIf not specified, FlagAs​Inappropriate is the default value. | 38.0 |
| visibility | String | Visibility behavior of a flag for various user types.ModeratorsOnly—The flag is visible only to users with moderation permissions on the flagged element or item.SelfAndModerators—The flag is visible to the creator of the flag and to users with moderation permissions on the flagged element or item. | Optional | 30.0 |

Request parameters for DELETE

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| userId | String | The ID of the context user. If specified, removes the flag the user previously added to the file. If not specified and the context user is a moderator, removes all flags on the file. | Optional | 30.0 |

Response body for GET and POST

[Moderation Flags](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_moderation_flags.htm "Moderation flags.")

## Flagged Files

Files that are flagged.

If the context user is a moderator, get the files that members flagged.

Resource

```

```

Available since release

36.0

In version 30.0–35.0, use /connect/communities/communityId/chatter/files/moderation.

HTTP methods

GET, HEAD

Request parameters for GET

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| page | Integer | Specifies the number of the page you want returned. | Optional | 30.0 |
| pageSize | Integer | Specifies the number of items per page. Valid values are from 1 through 100. If you don't specify a size, the default is 25. | Optional | 30.0 |
| q | String | A query string to filter the results. The string must contain at least two characters, not including wildcards. For information about wildcards, see Wildcards. | Optional | 33.0 |

Response body

[File Summary](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_file.htm "Description of a file.")

-   **[Experience Cloud Sites Moderation User Audit Statistics](atlas.en-us.chatterapi.meta/chatterapi/connect_resources_communities_moderation_user_audit_stats.htm)**
    Get audit statistics for a user in an Experience Cloud site.

## Code Examples

```
/connect/communities/communityId/files/fileId/moderation-flags
```

```
{ 
   "note" : "Flagged by moderator as spam on 6.6.16.",
   "type" : "FlagAsSpam",
   "visibility" : "ModeratorsOnly"
}
```

```
/connect/communities/communityId/files/moderation
```

## Related Topics

- /connect/communities/communityId/​chatter/users/userId/audit-actions/counts (atlas.en-us.chatterapi.meta/chatterapi/connect_resources_communities_moderation_user_audit_stats.htm)
- Moderation
                            Flags (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_moderation_flags.htm)
- Wildcards (atlas.en-us.chatterapi.meta/chatterapi/intro_wildcards.htm)
- File
                        Summary (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_file.htm)
- Experience Cloud Sites Moderation User Audit Statistics (atlas.en-us.chatterapi.meta/chatterapi/connect_resources_communities_moderation_user_audit_stats.htm)
