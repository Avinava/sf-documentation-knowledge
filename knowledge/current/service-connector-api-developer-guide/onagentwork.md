---
title: "onAgentWork"
domain: service-connector-api-developer-guide
topic: onagentwork
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-04-07T18:39:23.441Z
estimatedTokens: 78
keywords: [onAgentWork, Send, non-Voice, AgentWork, events, partner, contact, center]
---

> Send non-Voice related AgentWork events to the partner
        contact center.

# onAgentWork

Send non-Voice related AgentWork events to the partner contact center.

## Signature

onAgentWorkEvent(agentWork) → void

## Parameters

| Field | Details |
| --- | --- |
| agentWork | TypeAgentWorkDescriptionInformation about the AgentWork record, including the work event type and work item ID |
