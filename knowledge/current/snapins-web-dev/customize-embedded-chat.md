---
title: "Customize Embedded Chat"
domain: snapins-web-dev
topic: customize-embedded-chat
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:36:19.337Z
estimatedTokens: 671
keywords: [Customize, Embedded, Chat, Take, full, control, experience, help, button, post-chat, stages, customizable, code, snippet, Expand]
---

# Customize Embedded Chat

> Take full control of the Embedded Chat experience from the static help button to
        post-chat stages. Use customizable parameters in the code snippet. Expand functionality by
        passing nonstandard pre-chat details. Set direct-to-button routing and allow pre-chat fields
        to fill automatically. Implement your own HTML and CSS code and more.

# Customize Embedded Chat

Take full control of the Embedded Chat experience from the static help button to post-chat stages. Use customizable parameters in the code snippet. Expand functionality by passing nonstandard pre-chat details. Set direct-to-button routing and allow pre-chat fields to fill automatically. Implement your own HTML and CSS code and more.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=snapins_web_dev)

#### Important

The legacy chat product is in maintenance-only mode, and we won't continue to build new features. You can continue to use it, but we no longer recommend that you implement new chat channels. Instead, you can modernize your customer communication with [Messaging for In-App and Web](https://help.salesforce.com/s/articleView?id=service.miaw_intro_landing.htm&type=5&language=en_US). Messaging offers many of the [chat features that you](https://help.salesforce.com/s/articleView?id=service.miaw_chat_vs_messaging.htm&type=5&language=en_US) love plus asynchronous conversations that can be picked back up at any time.

Here are the five stages of Embedded Chat to consider when using these developer guidelines.

![Graphic of five stages of Embedded Chat, including static help button, pre-chat, waiting to chat, chat, and post chat.](/docs/resources/img/en-us/260.0?doc_id=images%2FEmbedded_States_Overview.png&folder=snapins_web_dev)

An additional stage to consider if you’ve activated [offline support](https://help.salesforce.com/articleView?id=snapins_chat_customize_offline_support_form.htm&language=en_US).

![Graphic showing static help button and offline support stages for Embedded Chat.](/docs/resources/img/en-us/260.0?doc_id=images%2Fembedded_offline.png&folder=snapins_web_dev)

-   **[Expand the Pre-Chat Stage](atlas.en-us.snapins_web_dev.meta/snapins_web_dev/embedded_web_prechat_functionality.htm)**
    Before starting a conversation with your customer at the pre-chat stage, consider adding customized invitations that appear on your website. Improve the pre-chat page or create a snippet settings file for greater flexibility and to provide more information to agents.
-   **[Boost Chat Stage](atlas.en-us.snapins_web_dev.meta/snapins_web_dev/embedded_web_boost_chat.htm)**
    Your customer is chatting with an agent at the chat stage. Consider adding chat event notifications and custom chat events to improve the agent view of their needs.
-   **[Add Special APIs](atlas.en-us.snapins_web_dev.meta/snapins_web_dev/embedded_web_special_apis.htm)**
    Embedded Chat can be customized across several chat stages, for example, the Start, End and Clear or the Bootstrap APIs.

## Related Topics

- Expand the Pre-Chat Stage (atlas.en-us.snapins_web_dev.meta/snapins_web_dev/embedded_web_prechat_functionality.htm)
- Boost Chat Stage (atlas.en-us.snapins_web_dev.meta/snapins_web_dev/embedded_web_boost_chat.htm)
- Add Special APIs (atlas.en-us.snapins_web_dev.meta/snapins_web_dev/embedded_web_special_apis.htm)
