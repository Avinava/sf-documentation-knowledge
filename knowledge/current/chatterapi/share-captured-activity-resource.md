---
title: "Share Captured Activity Resource"
domain: chatterapi
topic: share-captured-activity-resource
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:16.642Z
estimatedTokens: 271
keywords: [Share, Captured, Activity, Resource, email, event, Automated, Capture, feature, Sales, Cloud, Einstein, Inbox, everyone, selected]
---

# Share Captured Activity Resource

> Share an email or event that was captured by Automated Activity
   Capture, which is a feature of Sales Cloud Einstein and Inbox. You can share with no one,
   everyone, or selected groups.

# Share Captured Activity Resource

Share an email or event that was captured by Automated Activity Capture, which is a feature of Sales Cloud Einstein and Inbox. You can share with no one, everyone, or selected groups.

Resource

```

```

Available version

39.0

HTTP methods

PUT

Request body for PUT

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| groupsTo​ShareWith | String[] | List of IDs for the groups that you share the activity with. Valid only if sharingType is MyGroups. | Optional | 39.0 |
| sharingType | String | Type of sharing operation.Everyone—The activity is shared with everyone.MyGroups—The activity is shared only with a selection of the context user’s groups.OnlyMe—The activity is private. | Required | 39.0 |

Response body for PUT

[Share Captured Activity Result](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_activity_sharing_result.htm#connect_responses_activity_sharing_result "Represents the results of sharing a captured email or event.")

## Code Examples

```
/salesforce-inbox/shared-activities/activityId
```

```
{
"groupsToShareWith":["0F9B00000004EVAKA2", "0F9B00000005YGHKA2", "0F9B00000008RTUKA2",],
"sharingType":"MyGroups"
}
```

## Related Topics

- Share Captured Activity Result (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_activity_sharing_result.htm)
