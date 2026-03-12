---
title: "showWhenOffline"
domain: live-agent-dev
topic: showwhenoffline
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:50.050Z
estimatedTokens: 525
keywords: [showWhenOffline, specify, customers, particular, button, offline, Usage]
---

# showWhenOffline

> Use the showWhenOffline method to specify what customers see when a particular button is
offline.

# showWhenOffline

Use the showWhenOffline method to specify what customers see when a particular button is offline.

## Usage

Displays a particular element when the specified button, agent, or agent-with-fallback-button is offline. Available in API versions 28.0 and later

## Syntax

For a button, userId is optional: **void** showWhenOffline(**String** buttonId, **Object** element, (optional) **String** userId)

For an agent, use userId instead of buttonId: **void** showWhenOffline(**String** userId, **Object** element)

For an agent with fallback-to-button, use both IDs (the element shows when either the agent or button is offline): **void** showWhenOffline(**String** buttonId, **Object** element, **String** userId)

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=live_agent_dev)

#### Note

Any time you use both a buttonId and a userId, buttonId must appear first.

## Parameters

| Name | Type | Description | Available Versions |
| --- | --- | --- | --- |
| buttonId | String | The ID of the chat button for which to display the specified element object when no agents are available to chat. | Available in API versions 28.0 and later |
| element | Object | The element to display when the specified button is offline. | Available in API versions 28.0 and later |
| userId | String | The ID of the agent to associate with the button. The element object is displayed when that agent is unavailable. | Available in API versions 28.0 and later |

If you specify a button ID but not a user ID in your parameters, the element displays only if the button is offline.

If you specify a user ID but not a button ID, the element displays only if the agent is offline. For example, the following syntax tracks an agent’s online status and sets the button to offline when that agent is unavailable.

```

```

If you specify a button ID and an agent ID, the element displays if neither the button or the agent is available. For example, the following syntax tracks the status of an agent and a button and displays the element if neither one is available.

```

```

## Code Examples

```
liveagent.showWhenOffline('005xx000001Sv1m', document.getElementById('liveagent_button_toAgent_offline'));
```

```
liveagent.showWhenOffline('573xx0000000006', document.getElementById('liveagent_button_offline_573xx0000000006_USER1'), '005xx000001Sv1m');
```
