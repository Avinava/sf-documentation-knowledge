---
title: "Missions Resources"
domain: chatterapi
topic: missions-resources
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:15.800Z
estimatedTokens: 211
keywords: [Missions, Resources, user’s, mission, activity, count, Export, purge, user, users, progress]
---

# Missions Resources

> Update a user’s mission activity count. Export and purge mission activity for a user.
      Purge mission activity for all users. Get a user’s mission progress.

# Missions Resources

Update a user’s mission activity count. Export and purge mission activity for a user. Purge mission activity for all users. Get a user’s mission progress.

Available resources are:

| Resource | Description |
| --- | --- |
| /connect/communities/communityId/missions/​users/userId | Update the mission activity count for a user. |
| /connect/communities/communityId/missions/​users/userId/activities/export-job | Export mission activity for a user. |
| /connect/communities/communityId/missions/​users/userId/activities/purge-job | Start a job to purge mission activity for the user. |
| /connect/communities/communityId/missions/​activities/purge-job | Start a job to purge mission activity for all users. |
| /connect/communities/communityId/missions/​users/userId/progress | Get mission activity progress for a user. |

## Related Topics

- /connect/communities/communityId/missions/​users/userId (atlas.en-us.chatterapi.meta/chatterapi/connect_resources_missions_user.htm)
- /connect/communities/communityId/missions/​users/userId/activities/export-job (atlas.en-us.chatterapi.meta/chatterapi/connect_resources_missions_user_activities_export.htm)
- /connect/communities/communityId/missions/​users/userId/activities/purge-job (atlas.en-us.chatterapi.meta/chatterapi/connect_resources_missions_user_activities_purge.htm)
- /connect/communities/communityId/missions/​activities/purge-job (atlas.en-us.chatterapi.meta/chatterapi/connect_resources_missions_users_activities_purge.htm)
- /connect/communities/communityId/missions/​users/userId/progress (atlas.en-us.chatterapi.meta/chatterapi/connect_resources_missions_user_activities_progress.htm)
