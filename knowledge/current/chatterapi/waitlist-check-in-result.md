---
title: "Waitlist Check In Result"
domain: chatterapi
topic: waitlist-check-in-result
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:21.551Z
estimatedTokens: 126
keywords: [Waitlist, Check, Result, Output, representation]
---

# Waitlist Check In Result

> Output representation of the waitlist check in
    result.

# Waitlist Check In Result

Output representation of the waitlist check in result.

JSON example

```

```

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| participant​Id | String | ID of the participant who has an appointment. | Small, 59.0 | 59.0 |
| service​AppointmentId | String | ID of the service appointment. | Small, 59.0 | 59.0 |
| waitlist​ParticipantId | String | ID of the waitlist participant. | Small, 59.0 | 59.0 |

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
