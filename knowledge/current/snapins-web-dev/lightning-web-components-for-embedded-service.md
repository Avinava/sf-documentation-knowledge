---
title: "Lightning Web Components for Embedded Service"
domain: snapins-web-dev
topic: lightning-web-components-for-embedded-service
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:36:19.281Z
estimatedTokens: 830
keywords: [Lightning, Web, Components, Embedded, Service, Build, custom, chat, Experience, Cloud, Essentials, Leverage, HTML, JavaScript, modern]
---

# Lightning Web Components for Embedded Service

> Build custom chat components using Lightning Web Components in Embedded Service, which
    is supported in Lightning Out, Experience Cloud, and Essentials. Leverage HTML and JavaScript
    for a modern experience.

# Lightning Web Components for Embedded Service

Build custom chat components using Lightning Web Components in Embedded Service, which is supported in Lightning Out, Experience Cloud, and Essentials. Leverage HTML and JavaScript for a modern experience.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=snapins_web_dev)

#### Important

The legacy chat product is in maintenance-only mode, and we won't continue to build new features. You can continue to use it, but we no longer recommend that you implement new chat channels. Instead, you can modernize your customer communication with [Messaging for In-App and Web](https://help.salesforce.com/s/articleView?id=service.miaw_intro_landing.htm&type=5&language=en_US). Messaging offers many of the [chat features that you](https://help.salesforce.com/s/articleView?id=service.miaw_chat_vs_messaging.htm&type=5&language=en_US) love plus asynchronous conversations that can be picked back up at any time.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=snapins_web_dev)

#### Note

Embedded Service web components aren’t supported on the login page of Experience sites.

**Base Chat Header**

lightningsnapin-base-chat-header enables customizations of the chat window header. Your custom chat header component must import BaseChatHeader from the lightningsnapin/baseChatHeader module, extend BaseChatHeader, and specify the lightningSnapin\_\_ChatHeader target in the js-meta.xml configuration file.

For more detailed information, see [Base Chat Header](https://developer.salesforce.com/docs/component-library/bundle/lightningsnapin-base-chat-header/) in the Components Reference Guide.

**Base Chat Message**

lightningsnapin-base-chat-messageenables customizations of the user interface for chat messages. Your custom chat message component must import the BaseChatMessage from the lightningsnapin/baseChatMessage module, extend BaseChatMesssage, and specify the lightningSnapin\_\_ChatMessage target in the js-meta.xml configuration file.

For more detailed information, see [Base Chat Message](https://developer.salesforce.com/docs/component-library/bundle/lightningsnapin-base-chat-message/documentation) in the Lightning Web Components Reference Guide.

**Base Pre-Chat**

lightningsnapin-base-prechat enables customization of the user interface for the pre-chat form. Your pre-chat component imports BasePreChat from the lightningsnapin/basePrechat module, extendsBasePreChat, and specifies the lightningSnapin\_\_PreChat target in the js-meta.xml configuration file.

For more detailed information, see [Pre-Chat Message](https://developer.salesforce.com/docs/component-library/bundle/lightningsnapin-base-prechat/) in the Lightning Web Components Reference Guide.

**Minimized**

lightningsnapin-minimized enables customization of the user interface for the chat minimized state. Your minimized component uses assignHandler and minimize functions from the lightningsnapin/minimized module and should specify the lightningSnapin\_\_Minimized target in the je-meta.xml configuration file.

For more detailed information, see [Minimized Chat Message](https://developer.salesforce.com/docs/component-library/bundle/lightningsnapin-minimized/) in the Lightning Web Components Reference Guide.
