---
title: "Waitlist Check In"
domain: salesforce-scheduler-developer-guide
topic: waitlist-check-in
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:43.446Z
estimatedTokens: 81
keywords: [Waitlist, Check, Output, representation]
---

# Waitlist Check In

> Output representation of the waitlist check in
    request.

# Waitlist Check In

Output representation of the waitlist check in request.

JSON example

```

```

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| result | Waitlist Check In Result | Result of the waitlist check in request. | Small, 59.0 | 59.0 |

## Code Examples

```
{
   "result" : {
        "participantId" : "00Q5h00000JdQWzEAN",
        "serviceAppointmentId" : "08pxx0000004CYqAAM",
        "waitlistParticipantId" : "12oxx0000004FGiAAM"
   }
}
```

## Related Topics

- Waitlist Check In Result (atlas.en-us.salesforce_scheduler_developer_guide.meta/salesforce_scheduler_developer_guide/connect_responses_waitlist_check_in_result.htm)
