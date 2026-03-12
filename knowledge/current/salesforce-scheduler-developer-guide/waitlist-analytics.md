---
title: "Waitlist Analytics"
domain: salesforce-scheduler-developer-guide
topic: waitlist-analytics
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:43.444Z
estimatedTokens: 146
keywords: [Waitlist, Analytics, Output, representation]
---

# Waitlist Analytics

> Output representation of the waitlist analytics.

# Waitlist Analytics

Output representation of the waitlist analytics.

JSON example

```

```

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| avg​Participants | Integer | Count of average participants per day. | Small, 59.0 | 59.0 |
| avg​WaitingTime | Integer | Average waiting time in minutes. | Small, 59.0 | 59.0 |
| current​Participant | Integer | Number of current participants in the waitlist. | Small, 59.0 | 59.0 |
| total​WaitingTime | Integer | Total waiting time in minutes. | Small, 59.0 | 59.0 |

## Code Examples

```
"waitlistAnalytics":{
     "currentParticipant": 1,
     "totalWaitingTime": 40,
     "avgWaitingTime": 20,
     "avgParticipants": 24
}
```
