---
title: "Job Event"
domain: bi-dev-guide-rest
topic: job-event
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:04.341Z
estimatedTokens: 204
keywords: [Job, Event, audit, events, recipe, start, dataflow, cancelled]
---

# Job Event

> An audit events for a job, like recipe start or dataflow cancelled.

# Job Event

An audit events for a job, like recipe start or dataflow cancelled.

## Properties

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| created​By | WaveUser | The user that created the event. | Small, 60.0 | 60.0 |
| created​Date | Date | The date and time an event was created. | Small, 60.0 | 60.0 |
| event​Type | Data​Platform​Audit​Type​Enum | The type of of audit event. Valid values are:Job​Cancelled (Job was canceled by a user)Job​Run​Event​Based (Job was run on an event-based schedule)Job​Run​Manual (Job was run manually)Job​Run​Time​Based (Job was run on an time-based schedule)Job​Schedule​Modified (Job schedule was modified)Job​Scheduled (Job was scheduled)Job​Unscheduled (Job was unscheduled) | Small, 60.0 | 60.0 |

## Related Topics

- WaveUser (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_responses_wave_user.htm)
