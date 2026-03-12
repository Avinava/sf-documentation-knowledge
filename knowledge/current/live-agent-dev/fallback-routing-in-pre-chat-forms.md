---
title: "Fallback Routing in Pre-Chat Forms"
domain: live-agent-dev
topic: fallback-routing-in-pre-chat-forms
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:34:50.181Z
estimatedTokens: 543
keywords: [Fallback, Routing, Pre-Chat, Forms, rules, case, agent, direct-to-agent, isn’t, chat, received]
---

# Fallback Routing in Pre-Chat Forms

> Set fallback routing rules in pre-chat forms in case the agent specified for
        direct-to-agent routing isn’t available when a chat is received.

# Fallback Routing in Pre-Chat Forms

Set fallback routing rules in pre-chat forms in case the agent specified for direct-to-agent routing isn’t available when a chat is received.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=live_agent_dev)

#### Important

The legacy chat product is scheduled for retirement on February 14, 2026, and is in maintenance mode until then. During this phase, you can continue to use chat, but we no longer recommend that you implement new chat channels. To avoid service interruptions to your customers, migrate to [Messaging for In-App and Web](https://help.salesforce.com/s/articleView?id=service.miaw_intro_landing.htm&type=5&language=en_US) before that date. Messaging offers many of the [chat features that you](https://help.salesforce.com/s/articleView?id=service.miaw_chat_vs_messaging.htm&type=5&language=en_US) love plus asynchronous conversations that can be picked back up at any time. Learn about chat retirement in [Help](https://help.salesforce.com/s/articleView?id=001790618&type=1&language=en_US).

What if you set up direct-to-agent routing, but the agent you specified to receive the chats isn’t available? If the agent is offline, those chats might be lost.

Luckily, if your organization uses pre-chat forms to gather customer information, you can set up fallback routing options for a button that uses direct-to-agent routing.

This code sample demonstrates how to route chats using another button’s default routing rules if the agent assigned to that button isn’t available. Let’s take a look at this section of code:

```

```

In this section, we specify that chats originating from the button should be routed to an agent with agent ID 005xx000001Sv1m. If that agent isn’t available, incoming chats are routed based on the default routing rules for the button with button ID 573xx0000000001.

-   **[Fallback Routing Code Sample](atlas.en-us.live_agent_dev.meta/live_agent_dev/live_agent_direct_to_agent_fallback_code_sample.htm)**
    Implement fallback routing rules in pre-chat forms so visitors can chat with another agent with the specified agent isn’t available.

## Code Examples

```
<h1>Pre-chat Form</h1> 
<form method='post' id='prechatForm'> 
      Name: <input type='text' name='liveagent.prechat.name' id='prechat_field' /><br /> 
      Email Address: <input type='text' name='liveagent.prechat:Email' /><br /> 
      Department: <select name="liveagent.prechat.buttons"> 
          <!-- Values are LiveChatButton and/or User IDs. -->
          <option value="573D01234567890">Route through button 573D01234567890</option>
          <option value="005D01234567890">Route to agent 005D01234567890</option>
          <option value="005D01234567890_573D01234567890">Route to agent 005D01234567890 
          with Fallback to button 573D01234567890</option>
```

## Related Topics

- Fallback Routing Code Sample (atlas.en-us.live_agent_dev.meta/live_agent_dev/live_agent_direct_to_agent_fallback_code_sample.htm)
