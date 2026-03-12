---
title: "Expected Behavior for External Routing for Omni-Channel"
domain: omni-channel-dev
topic: expected-behavior-for-external-routing-for-omni-channel
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:19.962Z
estimatedTokens: 721
keywords: [Expected, Behavior, External, Routing, Omni-Channel, Verify, observe, testing, implementation, matches, scenarios]
---

# Expected Behavior for External Routing for Omni-Channel

> Verify that the behavior you observe while testing and using your implementation of
  external routing matches the following expected behavior scenarios.

# Expected Behavior for External Routing for Omni-Channel

Verify that the behavior you observe while testing and using your implementation of external routing matches the following expected behavior scenarios.

Agent accepts the work:

1.  Chat visitor initiates a chat request from the external routing button.
2.  PendingServiceRouting is created.
3.  Partner is notified by a pushTopic event (EventType=Create, isPushed=false).
4.  Partner creates AgentWork using the PSR.
5.  Agent is routed the chat request (AgentWork Status = Assigned).
6.  Agent accepts the chat request (AgentWork Status = Accept).
7.  Omni-Channel deletes the PendingServiceRouting after Agent accepts the work.
8.  Partner is notified by a pushTopic event (EventType=Delete).

Agent declines the work through Omni-Channel:

1.  Agent declines the assigned AgentWork.
2.  Salesforce updates the PendingServiceRouting.
3.  Partner is notified by a pushTopic event (EventType=Update, LastDeclinedAgentSession=agent’s session id in Chat (not the Salesforce session), isPushed=false).
4.  Partner creates a new AgentWork using the updated PendingServiceRouting for rerouting.

Agent doesn’t accept the work due to push time-out:

1.  Existing PendingServiceRouting is updated.
2.  Partner is notified by a pushTopic event (EventType=Update, PSR Fields updated: isPushed=false, LastDeclinedAgentSession=agent’s liveagent session id).
3.  Partner creates a new AgentWork for rerouting.

Agent transfers the work to an external routing queue:

1.  New PendingServiceRouting for the transfer is created.
2.  Partner is notified by a pushTopic event (EventType=Create, isTransfer=true, isPushed=false).
3.  The routing process is repeated.

Agent transfers the work to another agent :

1.  The PendingServiceRouting from the original chat request is deleted.
2.  A new PendingServiceRouting isn’t created when the work is transferred. Subscribe to AgentWork and LiveChatTranscript to determine whether the work was transferred to an agent.
3.  Two AgentWorks are created for the LiveChatTranscript:
    1.  First AgentWork with the Status = *Opened*
    2.  Second AgentWork with the Status = *Assigned*
4.  The LiveChatTranscript is updated with the Status = *In Progress* and the Owner = *second Agent*.
5.  To determine if the Transfer to Agent has occurred, check that the second AgentWork isn’t inserted into the same LiveChatTranscript as the first AgentWork.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=omni_channel_dev)

#### Important

We don’t recommend using both external routing and Omni-Channel queue-based routing in the same implementation. If the same agent is in both queues, the agent’s capacity could be exceeded. We don't have control over an agent's capacity in external routing. If you attempt this combination, there can be unknown issues.
