---
title: "Set a Domain"
domain: snapins-web-dev
topic: set-a-domain
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:36:19.462Z
estimatedTokens: 435
keywords: [Domain, included, code, comment, generated, snippet, versions, 2.0, visitors, navigate, subdomains, chat, session, losing, their]
---

# Set a Domain

> This parameter is included as a code comment in your generated code
   snippet for versions 2.0 and up. When you set the domain, visitors can navigate subdomains during
   a chat session without losing their chat. Make sure that each page where you want to allow chats
   contains the code snippet.

# Set a Domain

This parameter is included as a code comment in your generated code snippet for versions 2.0 and up. When you set the domain, visitors can navigate subdomains during a chat session without losing their chat. Make sure that each page where you want to allow chats contains the code snippet.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=snapins_web_dev)

#### Important

The legacy chat product is in maintenance-only mode, and we won't continue to build new features. You can continue to use it, but we no longer recommend that you implement new chat channels. Instead, you can modernize your customer communication with [Messaging for In-App and Web](https://help.salesforce.com/s/articleView?id=service.miaw_intro_landing.htm&type=5&language=en_US). Messaging offers many of the [chat features that you](https://help.salesforce.com/s/articleView?id=service.miaw_chat_vs_messaging.htm&type=5&language=en_US) love plus asynchronous conversations that can be picked back up at any time.

embedded\_svc.settings.storageDomain = "..."

To specify the domain for your deployment, set the parameter to whatever top-level domain you use for chats.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=snapins_web_dev)

#### Important

-   The storageDomain parameter is available only for version 2.0 and later code snippets, and it’s required if you want your chat window to persist across subdomains. If you don’t set this parameter, chats use the domain of the container page.
-   Follow the format mywebsite.com for your domain. Don’t include a protocol (http://mywebsite.com or https://mywebsite.com) or a trailing slash (mywebsite.com/).
