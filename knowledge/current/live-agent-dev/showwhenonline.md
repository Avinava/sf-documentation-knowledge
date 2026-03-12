---
title: "showWhenOnline"
domain: live-agent-dev
topic: showwhenonline
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:50.055Z
estimatedTokens: 544
keywords: [showWhenOnline, specify, customers, particular, button, online, Usage]
---

# showWhenOnline

> Use the showWhenOnline method to specify what customers see when a particular button is
online.

# showWhenOnline

Use the showWhenOnline method to specify what customers see when a particular button is online.

## Usage

Displays a particular element when the specified button, agent, or agent-with-fallback-button is online. Available in API versions 28.0 and later.

## Syntax

For a button, userId is optional: **void** showWhenOnline(**String** buttonId, **Object** element, (optional) **String** userId)

For an agent, use userId instead of buttonId: **void** showWhenOnline(**String** userId, **Object** element)

For an agent with fallback-to-button, use both IDs (the element shows when either the agent or button is online): **void** showWhenOnline(**String** buttonId, **Object** element, **String** userId)

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=live_agent_dev)

#### Note

Any time you use both a buttonId and a userId, buttonId must appear first.

## Parameters

| Name | Type | Description | Available Versions |
| --- | --- | --- | --- |
| buttonId | String | The ID of the chat button for which to display the specified element object when agents that are associated with the button are available to chat. | Available in API versions 28.0 and later |
| element | Object | The element to be displayed when the specified button is online. | Available in API versions 28.0 and later |
| userId | String | The ID of the agent to associate with the button. The element object is displayed when that agent is available. | Available in API versions 28.0 and later |

If you specify a button ID but not a user ID in your parameters, the element is displayed only if the button is online.

If you specify a user ID but not a button ID, the element is displayed only if the agent is online. For example, the following syntax tracks an agent’s online status and sets the button to online when that agent is available and offline if unavailable.

```

```

If you specify a button ID and an agent ID, the element is displayed if either the button or the agent is online. For example, the following syntax tracks the status of an agent and a button and displays the element if at least one skilled agent is available.

```

```

## Code Examples

```
liveagent.showWhenOnline('005xx000001Sv1m', document.getElementById('liveagent_button_toAgent_online'));
```

```
liveagent.showWhenOnline('573xx0000000006', document.getElementById('liveagent_button_online_573xx0000000006_USER1'), '005xx000001Sv1m');
```
