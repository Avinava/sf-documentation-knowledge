---
title: "addButtonEventHandler"
domain: live-agent-dev
topic: addbuttoneventhandler
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:50.028Z
estimatedTokens: 731
keywords: [addButtonEventHandler, define, automated, invitation’s, behavior, certain, events, occur, Usage, Event, chat, button’s, API, versions, 28.0, later]
---

# addButtonEventHandler

> Use the addButtonEventHandler method to define an automated invitation’s behavior when
certain events occur.

# addButtonEventHandler

Use the addButtonEventHandler method to define an automated invitation’s behavior when certain events occur.

## Usage

Defines the behavior for an invitation when the following events occur:

-   The criteria are met for the invitation to appear on-screen.
-   The criteria are not met for the invitation to appear on-screen.
-   A customer accepts an invitation to chat.
-   A customer rejects an invitation to chat.

The event “the criteria are not met for the invitation to appear on the screen” occurs when a chat can’t reach an agent using the configured chat button or automated invitation. The event occurs when:

-   No agents are online.
-   No agents assigned to the skills associated with the button are online.
-   Online agents have the status **Away**.
-   Online agents are at capacity (set with Chat Configurations, or Presence Configurations with Omni-Channel).
-   Online agents are using Omni-Channel and are only available for other service channels.

Available in API versions 28.0 and later.

## Syntax

**void** addButtonEventHandler(**String** buttonId, **Function** callback)

## Parameters

| Name | Type | Description | Available Versions |
| --- | --- | --- | --- |
| buttonId | String | The ID of the chat button associated with the automated invitation for which to define the behavior when certain events occur. | Available in API versions 28.0 and later. |
| callback | function | The function to call when a particular event occurs. You must specify the invitation’s behavior for each of the required event types. | Available in API versions 28.0 and later. |

## Event Types

Incorporate the following event types into your callback function to customize the behavior of your invitation when certain events occur. You must specify the invitation’s behavior for each of the following event types.

| Function | Event Type | Syntax | Description |
| --- | --- | --- | --- |
| callback | BUTTON_AVAILABLE | liveagent.BUTTON_EVENT.BUTTON_AVAILABLE | Specifies the behavior of the automated invitation when the criteria are met for the invitation to appear on-screen. |
|  | BUTTON_UNAVAILABLE | liveagent.BUTTON_EVENT.BUTTON_UNAVAILABLE | Specifies the behavior of the automated invitation when the criteria are not met for the invitation to appear on-screen. |
|  | BUTTON_ACCEPTED | liveagent.BUTTON_EVENT.BUTTON_ACCEPTED | Specifies the behavior of the automated invitation when a customer accepts the invitation. This event type is only available for automated chat invitations. |
|  | BUTTON_REJECTED | liveagent.BUTTON_EVENT.BUTTON_REJECTED | Specifies the behavior of the automated invitation when a customer rejects the invitation. This event type is only available for automated chat invitations. |

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=live_agent_dev)

#### Note

You might receive multiple events of the same type.
