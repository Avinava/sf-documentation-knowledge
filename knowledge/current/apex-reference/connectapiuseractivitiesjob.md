---
title: "ConnectApi.UserActivitiesJob"
domain: apex-reference
topic: connectapiuseractivitiesjob
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:40.152Z
keywords: [ConnectApi.UserActivitiesJob, See]
---

# ConnectApi.UserActivitiesJob

# ConnectApi.UserActivitiesJob

User activities job.

| Property Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| jobToken | String | Token that identifies the user activities job. | 42.0 |
| jobType | String | Type of user activities job. Value is export or purge. | 42.0 |
| message | String | Message describing the status and expected outcome of the job.When the job completes, you receive an email with information about the Salesforce file that contains ConnectApi.UserActivityCollection. | 42.0 |

#### See Also

-   [exportUserActivities(communityId, userId)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ChatterUsers_static_methods.htm#apex_ConnectAPI_ChatterUsers_exportUserActivities_1 "Export Chatter-related user activity, such as bookmarks, topic endorsements, and votes.")
    
-   [purgeUserActivities(communityId, userId)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ChatterUsers_static_methods.htm#apex_ConnectAPI_ChatterUsers_purgeUserActivities_1 "Start a job to purge Chatter-related user activity, such as bookmarks, topic endorsements, and votes.")