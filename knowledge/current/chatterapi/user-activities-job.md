---
title: "User Activities Job"
domain: chatterapi
topic: user-activities-job
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:21.416Z
estimatedTokens: 260
keywords: [User, Activities, Job]
---

# User Activities Job

> User activities job.

# User Activities Job

User activities job.

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| jobToken | String | Token that identifies the user activities job. | Small, 42.0 | 42.0 |
| jobType | String | Type of user activities job. Value is export or purge. | Small, 42.0 | 42.0 |
| message | String | Message describing the status and expected outcome of the job.When the job completes, you receive an email with information about the Salesforce file that contains User Activity Collection. | Small, 42.0 | 42.0 |

#### See Also

-   [User Activity, Export](atlas.en-us.chatterapi.meta/chatterapi/connect_resources_users_UserActivities.htm "Export Chatter-related activity, such as bookmarks, topic endorsements, and votes, for a user.")

-   [User Activity, Purge](atlas.en-us.chatterapi.meta/chatterapi/connect_resources_users_UserActivities_purge.htm "Start a job to purge Chatter-related activity, such as bookmarks, topic endorsements, and votes, for a user.")

## Related Topics

- User Activity Collection (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_user_activity_collection.htm)
- User Activity, Export (atlas.en-us.chatterapi.meta/chatterapi/connect_resources_users_UserActivities.htm)
- User Activity, Purge (atlas.en-us.chatterapi.meta/chatterapi/connect_resources_users_UserActivities_purge.htm)
