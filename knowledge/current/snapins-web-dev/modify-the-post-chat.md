---
title: "Modify the Post-Chat"
domain: snapins-web-dev
topic: modify-the-post-chat
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:36:19.418Z
estimatedTokens: 294
keywords: [Modify, Post-Chat, add, URL, chat, button, specify, whether, automatically, opens]
---

# Modify the Post-Chat

> After you add a post-chat URL for your chat button, you can specify
   whether it automatically opens or not. Valid values are true and
    false.

# Modify the Post-Chat

After you add a post-chat URL for your chat button, you can specify whether it automatically opens or not. Valid values are true and false.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=snapins_web_dev)

#### Important

The legacy chat product is in maintenance-only mode, and we won't continue to build new features. You can continue to use it, but we no longer recommend that you implement new chat channels. Instead, you can modernize your customer communication with [Messaging for In-App and Web](https://help.salesforce.com/s/articleView?id=service.miaw_intro_landing.htm&type=5&language=en_US). Messaging offers many of the [chat features that you](https://help.salesforce.com/s/articleView?id=service.miaw_chat_vs_messaging.htm&type=5&language=en_US) love plus asynchronous conversations that can be picked back up at any time.

embedded\_svc.settings.autoOpenPostChat = true; // or false

By default, your chat window gives customers the option of closing the chat or opening the post-chat URL when they end a chat. To automatically display the post-chat URL instead, set this parameter to true.
