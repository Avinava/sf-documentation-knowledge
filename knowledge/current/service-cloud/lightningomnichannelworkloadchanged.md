---
title: "lightning:omniChannelWorkloadChanged"
domain: service-cloud
topic: lightningomnichannelworkloadchanged
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T15:47:49.897Z
keywords: [lightning, omniChannelWorkloadChanged, Response, Example]
---

# lightning:omniChannelWorkloadChanged

# lightning:omniChannelWorkloadChanged

Indicates that an agent’s workload has changed. This includes receiving new work items, declining work items, and closing items in the console. It also indicates that there has been a change to an agent’s capacity or presence configuration, or that the agent has gone offline in the Omni-Channel utility.

## Response

| Name | Type | Description |
| --- | --- | --- |
| configuredCapacity | number | The configured primary capacity for the agent. |
| previousWorkload | number | The agent’s primary workload before the change. |
| newWorkload | number | The agent’s new primary workload after the change. |
| configuredInterruptibleCapacity | number | The configured interruptible capacity for the agent. |
| previousInterruptibleWorkload | number | The agent’s interruptible workload before the change. |
| newInterruptibleWorkload | number | The agent’s new interruptible workload after the change. |

## Example

This example prints workload details to the browser’s developer console when an agent’s workload changes.

Component code:

```

```

Controller code:

```

```