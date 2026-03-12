---
title: "ConnectApi.UserMissionActivitiesJob"
domain: apex-reference
topic: connectapiusermissionactivitiesjob
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:29.284Z
estimatedTokens: 140
keywords: [ConnectApi.UserMissionActivitiesJob, User, mission, activities, job]
---

# ConnectApi.UserMissionActivitiesJob

> User mission activities job.

# ConnectApi.UserMissionActivitiesJob

User mission activities job.

| Property Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| jobToken | String | Token that identifies the mission user activities job. | 45.0 |
| jobType | String | Type of user activities job, either export or purge. | 45.0 |
| message | String | Message describing the status and expected outcome of the job.When the job completes, you receive an email with information about the Salesforce file that contains ConnectApi.UserMissionActivityCollection. | 45.0 |

## Related Topics

- String (atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm)
- ConnectApi.UserMissionActivityCollection (atlas.en-us.apexref.meta/apexref/apex_connectapi_output_user_mission_activity_collection.htm)
