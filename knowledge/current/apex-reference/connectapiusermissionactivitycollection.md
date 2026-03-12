---
title: "ConnectApi.UserMissionActivityCollection"
domain: apex-reference
topic: connectapiusermissionactivitycollection
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:29.242Z
estimatedTokens: 173
keywords: [ConnectApi.UserMissionActivityCollection, List, mission, activities, user.]
---

# ConnectApi.UserMissionActivityCollection

> List of mission activities for a user.

# ConnectApi.UserMissionActivityCollection

List of mission activities for a user.

| Property Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| community | ConnectApi.​CommunitySummary | Experience Cloud site in which the user performed activities. | 45.0 |
| userId | String | ID of the user. | 45.0 |
| userMission​Activities | List<ConnectApi.​AbstractUser​MissionActivity> | List of mission activities performed by the user. | 45.0 |
| userName | String | Name of the user. | 45.0 |

#### See Also

-   [ConnectApi.UserMissionActivitiesJob](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_user_mission_activities_job.htm "User mission activities job.")

## Related Topics

- ConnectApi.​CommunitySummary (atlas.en-us.apexref.meta/apexref/apex_connectapi_output_community_summary.htm)
- String (atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm)
- List (atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm)
- ConnectApi.​AbstractUser​MissionActivity (atlas.en-us.apexref.meta/apexref/apex_connectapi_output_abstract_user_mission_activity.htm)
- ConnectApi.UserMissionActivitiesJob (atlas.en-us.apexref.meta/apexref/apex_connectapi_output_user_mission_activities_job.htm)
