---
title: "Users Resources"
domain: chatterapi
topic: users-resources
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:16.929Z
estimatedTokens: 843
keywords: [Users, Resources, user, user’s, recommendations, Post, feed, items, conversation, status]
---

# Users Resources

> Get information about the user, such as who is following the user
            and the user’s recommendations. Post feed items and update conversation
            status.

# Users Resources

Get information about the user, such as who is following the user and the user’s recommendations. Post feed items and update conversation status.

Available resources are:

| Resource | Description |
| --- | --- |
| /chatter/users | Returns information about all users in an organization. |
| /chatter/users/me | Information about the context or specified user's Chatter profile. |
| /chatter/users/batch/user_list | Returns information about the specified users’ profiles. |
| /chatter/users/userId/activities/export-job | Export Chatter-related activity, such as bookmarks, topic endorsements, and votes, for a user. |
| /chatter/users/userId/activities/purge-job | Start a job to purge Chatter-related activity, such as bookmarks, topic endorsements, and votes, for a user. |
| /chatter/users/me/conversations | Get private conversations for the context user and search across private conversations. |
| /chatter/users/me/conversations/conversationId | Get a private conversation for the context user. Search within a private conversation and change the status of a private conversation. |
| /chatter/users/me/conversations/unread-count | Get the number of private conversations that have unread messages for a user. |
| /chatter/users/me/followers | Get information about the followers for a user. |
| /chatter/users/me/following | Returns a list of people, groups, records, topics, and files that the specified user is following. Also used to follow records. |
| /chatter/users/me/groups | Get the groups that a user is a member of. |
| /chatter/users/me/knowledgeable-about-topics | Topics that the specified user is knowledgeable about. Get a list of topics for the specified user. |
| /chatter/users/me/messages | Get private messages for the context user. Search across private messages and post a private message. |
| /chatter/users/me/messages/messageId | Get a private message for the context user. |
| /chatter/users/me/recommendations | Get the Chatter recommendations, such as user, group, file, record, topic, and article recommendations, for the context user. Also get custom and static recommendations for the context user. |
| /chatter/users/me/recommendations/action | Get the Chatter, custom, and static recommendations for the specified action for the context user. |
| /chatter/users/me/recommendations/action/objectCategory | Get the Chatter, custom, and static recommendations for the specified action and object category for the context user. |
| /chatter/users/me/recommendations/action/idPrefix | Get the Chatter, custom, and static recommendations for the specified action and key prefix for the context user. |
| /chatter/users/me/recommendations/action/objectID | Get the Chatter, custom, and static recommendations for the specified action and object ID for the context user. Also used to delete a recommendation. |
| /chatter/users/userId/recommendations/action/objectEnum | Get the static Chatter recommendation for the specified action and object type for the context user. Also used to delete a static recommendation. |
| /connect/communities/communityId​/chatter/users/userId/reputation | Get a user's reputation in an Experience Cloud site. |
| /chatter/users/me/settings | Get information about a user’s global Chatter settings. |
| /chatter/users/me/topics | Get up to five topics most recently used by a user. |

## Related Topics

- /chatter/users (atlas.en-us.chatterapi.meta/chatterapi/connect_resources_users_information.htm)
- /chatter/users/me (atlas.en-us.chatterapi.meta/chatterapi/connect_resources_users_UserProfileInformation.htm)
- /chatter/users/batch/user_list (atlas.en-us.chatterapi.meta/chatterapi/connect_resources_users_BatchUserInformation.htm)
- /chatter/users/userId/activities/export-job (atlas.en-us.chatterapi.meta/chatterapi/connect_resources_users_UserActivities.htm)
- /chatter/users/userId/activities/purge-job (atlas.en-us.chatterapi.meta/chatterapi/connect_resources_users_UserActivities_purge.htm)
- /chatter/users/me/conversations (atlas.en-us.chatterapi.meta/chatterapi/connect_resources_users_UserConversationsGeneral.htm)
- /chatter/users/me/conversations/conversationId (atlas.en-us.chatterapi.meta/chatterapi/connect_resources_users_UserConversationsSpecific.htm)
- /chatter/users/me/conversations/unread-count (atlas.en-us.chatterapi.meta/chatterapi/connect_resources_users_unread_conversations.htm)
- /chatter/users/me/followers (atlas.en-us.chatterapi.meta/chatterapi/connect_resources_users_UserFollowers.htm)
- /chatter/users/me/following (atlas.en-us.chatterapi.meta/chatterapi/connect_resources_users_FollowingUsers.htm)
