---
title: "Customize the Online, Offline, and Loading Chat Text"
domain: snapins-web-dev
topic: customize-the-online-offline-and-loading-chat-text
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:36:19.456Z
estimatedTokens: 780
keywords: [Customize, Online, Offline, Loading, Chat, Text, that’s, customers, window, there, agents, aren’t, connecting, agent, recommend]
---

# Customize the Online, Offline, and Loading Chat Text

> Set the text that’s displayed to your customers in the chat window when
      there are agents available, when there aren’t agents available, and when the chat is
      connecting to an agent. We recommend customizing your labels in Embedded Service setup, but
      you can use these settings to override what you have in Setup.

# Customize the Online, Offline, and Loading Chat Text

Set the text that’s displayed to your customers in the chat window when there are agents available, when there aren’t agents available, and when the chat is connecting to an agent. We recommend customizing your labels in Embedded Service setup, but you can use these settings to override what you have in Setup.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=snapins_web_dev)

#### Important

The legacy chat product is in maintenance-only mode, and we won't continue to build new features. You can continue to use it, but we no longer recommend that you implement new chat channels. Instead, you can modernize your customer communication with [Messaging for In-App and Web](https://help.salesforce.com/s/articleView?id=service.miaw_intro_landing.htm&type=5&language=en_US). Messaging offers many of the [chat features that you](https://help.salesforce.com/s/articleView?id=service.miaw_chat_vs_messaging.htm&type=5&language=en_US) love plus asynchronous conversations that can be picked back up at any time.

## Online text

embedded\_svc.settings.defaultMinimizedText = "..."

To customize the text that appears in the chat button when agents are online, set the parameter to whatever text you want to show. If you don’t specify a value, the default text “Chat with an Expert” is used.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=snapins_web_dev)

#### Important

The defaultMinimizedText parameter is available only for version 3.0 and later code snippets. If you’re using an earlier code snippet version, use the onlineText parameter.

## Offline text

embedded\_svc.settings.disabledMinimizedText = "..."

To customize the text that appears in the chat button when agents are offline, set the parameter to whatever text you want to show. If you don’t specify a value, the default text “Agent Offline” is used.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=snapins_web_dev)

#### Important

The disabledMinimizedText parameter is available only for version 3.0 and later code snippets. If you’re using an earlier code snippet version, use the offlineText parameter

## Offline support text

embedded\_svc.settings.offlineSupportMinimizedText = “...”

To customize the text that appears in the chat button when agents are offline and the Embedded Service deployment has offline support enabled, set the parameter to whatever text you want to show. If you don’t specify a value, the default text “Contact Us” is used.

## Loading text

embedded\_svc.settings.loadingText = "..."

To customize the text that appears in the chat button when the chat window is loading, set the parameter to whatever text you want to show. If you don't specify a value, the default text "Loading" is used.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=snapins_web_dev)

#### Note

embedded\_svc.settings.loadingText replaced embedded\_svc.settings.onlineLoadingText for version 3.0 and later code snippets.
