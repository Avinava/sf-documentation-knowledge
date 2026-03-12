---
title: "Add Special APIs"
domain: snapins-web-dev
topic: add-special-apis
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:36:19.306Z
estimatedTokens: 427
keywords: [Add, Special, APIs, Embedded, Chat, customized, across, several, stages, Start, End, Clear, Bootstrap]
---

# Add Special APIs

> Embedded Chat can be customized across several chat stages, for example, the Start, End
  and Clear or the Bootstrap APIs.

# Add Special APIs

Embedded Chat can be customized across several chat stages, for example, the Start, End and Clear or the Bootstrap APIs.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=snapins_web_dev)

#### Important

The legacy chat product is in maintenance-only mode, and we won't continue to build new features. You can continue to use it, but we no longer recommend that you implement new chat channels. Instead, you can modernize your customer communication with [Messaging for In-App and Web](https://help.salesforce.com/s/articleView?id=service.miaw_intro_landing.htm&type=5&language=en_US). Messaging offers many of the [chat features that you](https://help.salesforce.com/s/articleView?id=service.miaw_chat_vs_messaging.htm&type=5&language=en_US) love plus asynchronous conversations that can be picked back up at any time.

-   **[Bootstrap Embedded Chat](atlas.en-us.snapins_web_dev.meta/snapins_web_dev/embedded_services_web_bootstrap_chat.htm)**
    This API provides developers with a quick Chat setup that skips the static help button stage, loading all the necessary dependencies, bootstraps, and opens the chat application on your website with one call. You can then quickly add a custom chat button, for example, by replacing the default button with more code changes.
-   **[Start, End, and Clear Embedded Chat Sessions](atlas.en-us.snapins_web_dev.meta/snapins_web_dev/embedded_services_web_start_and_end_chat.htm)**
    Three APIs allow you to start, end, and clear sessions for Embedded Chat. Use the Embedded Service code snippet version 5.0 and later. The APIs are not available for Experience sites with Lightning Locker enabled.

## Related Topics

- Bootstrap Embedded Chat (atlas.en-us.snapins_web_dev.meta/snapins_web_dev/embedded_services_web_bootstrap_chat.htm)
- Start, End, and Clear Embedded Chat Sessions (atlas.en-us.snapins_web_dev.meta/snapins_web_dev/embedded_services_web_start_and_end_chat.htm)
