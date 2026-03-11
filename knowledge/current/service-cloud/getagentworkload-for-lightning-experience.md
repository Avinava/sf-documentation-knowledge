---
title: "getAgentWorkload for Lightning Experience"
domain: service-cloud
topic: getagentworkload-for-lightning-experience
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:47:50.198Z
keywords: [getAgentWorkload, Lightning, Experience, Sample, Code, Response]
---

# getAgentWorkload for Lightning Experience

# getAgentWorkload for Lightning Experience

Retrieves an agent’s currently assigned workload. Use this method to reroute work to available agents.

## Sample Code

Component code:

```

```

Controller code:

```

```

## Response

This method returns a promise that, upon success, resolves to an object containing the following fields.

| Name | Type | Description |
| --- | --- | --- |
| configuredCapacity | number | The agent’s configured primary capacity (work that’s assigned to the current user) through Presence Configuration. |
| currentWorkload | number | The agent’s currently assigned primary workload. |
| configuredInterruptibleCapacity | Number | Indicates the agent’s configured interruptible capacity (that is, work that’s assigned to the current user) through Presence Configuration. |
| currentInterruptibleWorkload | Number | Indicates the agent’s currently assigned interruptible workload. |