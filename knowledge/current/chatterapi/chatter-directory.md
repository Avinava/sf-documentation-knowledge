---
title: "Chatter Directory"
domain: chatterapi
topic: chatter-directory
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:13.046Z
estimatedTokens: 91
keywords: [Chatter, Directory, feeds, groups, users, resources]
---

# Chatter Directory

> Chatter directory.

# Chatter Directory

Chatter directory.

| Property | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| feeds | String | URL to the feeds resource. | Small, 29.0 | 24.0 |
| extensions | String | URL to the extensions resource. | Small, 40.0 | 40.0 |
| groups | String | URL to the groups resource. | Small, 29.0 | 24.0 |
| organization | String | NoteThis property is no longer available as of version 26.0. Use the organization property in the Connect Directory instead.URL to the organization resource. |  | 24.0–26.0 |
| streams | String | URL to the streams resource. | Small, 39.0 | 39.0 |
| users | String | Returns a URL to the users resource. | Small, 29.0 | 24.0 |

## Code Examples

```
/connect/communities/communityId/chatter
```

```
{
   "feeds": "/services/data/v66.0/chatter/feeds",
   "groups": "/services/data/v66.0/chatter/groups",
   "users": "/services/data/v66.0/chatter/users"
}
```

## Related Topics

- Chatter
                  Directory (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_chatter_directory.htm)
- Connect Directory (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_connect_dir.htm)
