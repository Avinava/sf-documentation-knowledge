---
title: "Set the Language"
domain: snapins-web-dev
topic: set-the-language
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:36:19.465Z
estimatedTokens: 496
keywords: [Language, customize, deployment, including, custom, labels, Salesforce, empty, Embedded, Service, code, snippet, chat]
---

# Set the Language

> To customize the language for a deployment, including custom labels, set
      the parameter to a Salesforce supported language. This parameter is empty and must be set in
      your Embedded Service code snippet for chat.

# Set the Language

To customize the language for a deployment, including custom labels, set the parameter to a Salesforce supported language. This parameter is empty and must be set in your Embedded Service code snippet for chat.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=snapins_web_dev)

#### Important

The legacy chat product is in maintenance-only mode, and we won't continue to build new features. You can continue to use it, but we no longer recommend that you implement new chat channels. Instead, you can modernize your customer communication with [Messaging for In-App and Web](https://help.salesforce.com/s/articleView?id=service.miaw_intro_landing.htm&type=5&language=en_US). Messaging offers many of the [chat features that you](https://help.salesforce.com/s/articleView?id=service.miaw_chat_vs_messaging.htm&type=5&language=en_US) love plus asynchronous conversations that can be picked back up at any time.

For example, enter 'en' or 'en-US' for English. embedded\_svc.settings.language = en\_US

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=snapins_web_dev)

#### Note

Use only the http locale format (like en-US or en).

Important considerations for language translations:

-   If no language is set in the code snippet or is invalid (empty code string, wrong format, or unsupported), the **Site Guest User** language for the site associated with your Embedded Service deployment is used.
-   When Translation Workbench is disabled, the language set for the **Site Guest User** of the Site associated with your Embedded Service deployment is used.
-   The language on a label is set only with the embedded\_svc.settings.language parameter or the **Site Guest User** language, and not the chat button.

#### See Also

-   [Supported Languages](https://help.salesforce.com/articleView?id=faq_getstart_what_languages_does.htm&language=en_US "Supported Languages - HTML (New Window)")
