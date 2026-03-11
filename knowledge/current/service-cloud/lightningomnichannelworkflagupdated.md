---
title: "lightning:omniChannelWorkFlagUpdated"
domain: service-cloud
topic: lightningomnichannelworkflagupdated
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T15:47:49.867Z
keywords: [lightning, omniChannelWorkFlagUpdated, Response, Example]
---

# lightning:omniChannelWorkFlagUpdated

# lightning:omniChannelWorkFlagUpdated

Indicates that an agent’s work item flag has been raised or lowered.

## Response

| Name | Type | Description |
| --- | --- | --- |
| workId | string | The ID of a work item with the updated flag. |
| isFlagged | Boolean | Specifies whether the flag is raised or not. |
| message | string | Optional. A message associated with changing the flag. |
| roleUpdatedBy | string | The role of the user who triggered this flag change. The value is AGENT or SUPERVISOR. |
| updatedBy | string | The ID of the user who triggered this flag change. |

## Example

This example prints a line to the browser’s developer console when an agent's work item flag is raised or lowered.

Component code:

```

```

Controller code:

```

```