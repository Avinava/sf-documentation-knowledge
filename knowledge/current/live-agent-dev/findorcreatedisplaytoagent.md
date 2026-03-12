---
title: "findOrCreate.displayToAgent"
domain: live-agent-dev
topic: findorcreatedisplaytoagent
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:50.092Z
estimatedTokens: 335
keywords: [findOrCreate.displayToAgent, specify, pre-chat, agents, incoming, chats, widget, tab, they, receive, chat, Usage]
---

# findOrCreate.displayToAgent

> Use the findOrCreate.displayToAgent method to
        specify which pre-chat details will be displayed to agents for incoming chats in the widget
        and in the Details tab when they receive a chat request.

# findOrCreate.displayToAgent

Use the findOrCreate.displayToAgent method to specify which pre-chat details will be displayed to agents for incoming chats in the widget and in the Details tab when they receive a chat request.

## Usage

Specifies which pre-chat details to display to an agent in the Details tab in Salesforce console when the agent receives a chat request. Typically, this method is only used to hide particular custom details from the agent but setting its value to false.

Available in API versions 29.0 and later.

## Syntax

<input type= "hidden" name= "liveagent.prechat.findorcreate.displayToAgent: **String** detailName" value= "**Boolean** display" />

## Parameters

| Name | Type | Description | Available Versions |
| --- | --- | --- | --- |
| detailName | String | The name of the detail to display to an agent when they receive a chat request. | Available in API versions 29.0 and later. |
| display | Boolean | Specifies whether to display the custom detail to an agent in the chat notifications and Details tab (true) or not (false).NoteYou only need to specify details for which display equals false. The method will not display details for which display equals false. If you don’t specify the value of the display parameter, the default value is set to true. | Available in API versions 29.0 and later. |
