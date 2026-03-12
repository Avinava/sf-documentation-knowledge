---
title: "Benefit Schedule Participants (DELETE)"
domain: nonprofit-cloud
topic: benefit-schedule-participants-delete
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:00.894Z
estimatedTokens: 483
keywords: [Benefit, Schedule, Participants, Remove, asynchronously]
---

# Benefit Schedule Participants (DELETE)

> Remove participants from a benefit schedule asynchronously.

# Benefit Schedule Participants (DELETE)

Remove participants from a benefit schedule asynchronously.

Remove participants from a benefit schedule asynchronously. Include benefit schedule assignment records in the API's operation. Benefit schedule assignments enable accurate updating of end dates when removing participants from sessions.

Removing a participant from a benefit schedule:

-   Updates the end date of all the active benefit schedule assignments associated with the participant to a current date. If a future session's startingBenefitSessionId is provided, Salesforce updates the end date for the benefit schedule assignments to the end date of that session. If the session is in the past or no startingBenefitSessionId is provided, Salesforce updates the end date to the current date.
-   Deletes benefit disbursements for future sessions whose attendance wasn’t changed from the default Enrolled status to Completed, Excused, or Absent. If a startingBenefitSessionId is provided, Salesforce removes participants from that session onwards, including past and future sessions. If a startingBenefitSessionId isn’t provided, Salesforce removes participants from current and future sessions.

Resource

```

```

Resource example

```

```

```

```

Available version

59.0

HTTP methods

DELETE

Query parameters for DELETE

| Parameter Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| ids | String[] | Valid IDs of benefit assignments related to the participants to be removed.You can provide a maximum of 100 IDs. | Required | 59.0 |
| startingBenefitSessionId | String[] | Valid benefit session ID associated with the benefit assignment IDs. If provided, the operation will affect that session and all subsequent sessions where attendance is yet to be marked. If not provided, the operation will default to affecting only future sessions. | Optional | 61.0 |

## Code Examples

```
/connect/program-mgmt/benefit-schedules/${benefitScheduleId}/benefit-assignments
```

```
https://yourInstance.salesforce.com/services/data/v66.0/connect/program-mgmt/benefit-schedules/BS-000000006/benefit-assignments?ids=BA-000000001,BA-000000002
```

```
https://yourInstance.salesforce.com/services/data/v66.0/connect/program-mgmt/benefit-schedules/${benefitScheduleId}/benefit-assignments?ids=BA-000000001,BA-000000002&startingBenefitSessionId=BS-000000001
```
