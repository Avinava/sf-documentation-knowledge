---
title: "Schedule"
domain: mc-apis
topic: schedule
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-04-07T09:06:24.833Z
estimatedTokens: 264
keywords: [Schedule, action, event, occur, specific, time, part, email, send, definition, override, certain, aspects, SenderProfile, Items]
---

# Schedule

> Use the Schedule method to schedule an action or event to occur at a specific time. When using the Schedule method as part of an email send definition, you can override certain aspects of the SenderProfile object.

# Schedule

Use the Schedule method to schedule an action or event to occur at a specific time. When using the Schedule method as part of an email send definition, you can override certain aspects of the SenderProfile object.

## C# Syntax

```
ScheduleResult[] schedule = Schedule(Options, Action, Schedule1, Interactions, OverallStatus, OverallStatusMessage, RequestID)
```

## Parameters

| Name | Data Type | Description |
| --- | --- | --- |
| Action | String | Specifies an action to perform on one or many objects. |
| Interactions | APIObject[] | InteractionBaseObject[] |
| Options | ScheduleOptions | Optionally specifies more processing options. |
| OverallStatus | String | Specifies the overall status of the request. |
| OverallStatusMessage | String | Specifies the overall status message of the request. |
| RequestID | String | Marketing Cloud's unique identifier for every request. |
| Schedule1 | ScheduleDefinition | Definition |

## Related Items

[SenderProfile Object](atlas.en-us.noversion.mc-apis.meta/mc-apis/senderprofile.htm)

## Related Topics

- SenderProfile Object (atlas.en-us.noversion.mc-apis.meta/mc-apis/senderprofile.htm)
