---
title: "Adjust General Parameters in the Code Snippet"
domain: snapins-web-dev
topic: adjust-general-parameters-in-the-code-snippet
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:36:19.351Z
estimatedTokens: 612
keywords: [Adjust, General, Code, Snippet, Change, Embedded, Service, improve, functionality, across, chat, stages, Choose, resize, window]
---

# Adjust General Parameters in the Code Snippet

> Change the general parameters in your Embedded Service code snippet to improve
        functionality across all chat stages. Choose to resize the chat window or update the font to
        match branding requirements. Set the default language or change the layout for right-to-left
        languages. Add the domain name for chat to persist across your site’s
        subdomains.

# Adjust General Parameters in the Code Snippet

Change the general parameters in your Embedded Service code snippet to improve functionality across all chat stages. Choose to resize the chat window or update the font to match branding requirements. Set the default language or change the layout for right-to-left languages. Add the domain name for chat to persist across your site’s subdomains.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=snapins_web_dev)

#### Important

The legacy chat product is in maintenance-only mode, and we won't continue to build new features. You can continue to use it, but we no longer recommend that you implement new chat channels. Instead, you can modernize your customer communication with [Messaging for In-App and Web](https://help.salesforce.com/s/articleView?id=service.miaw_intro_landing.htm&type=5&language=en_US). Messaging offers many of the [chat features that you](https://help.salesforce.com/s/articleView?id=service.miaw_chat_vs_messaging.htm&type=5&language=en_US) love plus asynchronous conversations that can be picked back up at any time.

-   **[Set the Width, Height, and Base Font Size](atlas.en-us.snapins_web_dev.meta/snapins_web_dev/snapins_web_set_size.htm)**
    Change the default sizes for your chat window in the code snippet to match your websites requirements.
-   **[Set a Domain](atlas.en-us.snapins_web_dev.meta/snapins_web_dev/snapins_web_set_domain.htm)**
    This parameter is included as a code comment in your generated code snippet for versions 2.0 and up. When you set the domain, visitors can navigate subdomains during a chat session without losing their chat. Make sure that each page where you want to allow chats contains the code snippet.
-   **[Set the Language](atlas.en-us.snapins_web_dev.meta/snapins_web_dev/snapins_web_set_language.htm)**
    To customize the language for a deployment, including custom labels, set the parameter to a Salesforce supported language. This parameter is empty and must be set in your Embedded Service code snippet for chat.
-   **[Set Right-to-Left Language Layout](atlas.en-us.snapins_web_dev.meta/snapins_web_dev/snapins_web_rtl_language.htm)**
    This parameter is included in your generated code snippet and set to English for versions 5.0 and later. To enable right-to-left layout enhancements in Chat, set the two-letter value to the supported language in your code snippet.

## Related Topics

- Set the Width, Height, and Base Font Size (atlas.en-us.snapins_web_dev.meta/snapins_web_dev/snapins_web_set_size.htm)
- Set a Domain (atlas.en-us.snapins_web_dev.meta/snapins_web_dev/snapins_web_set_domain.htm)
- Set the Language (atlas.en-us.snapins_web_dev.meta/snapins_web_dev/snapins_web_set_language.htm)
- Set Right-to-Left Language Layout (atlas.en-us.snapins_web_dev.meta/snapins_web_dev/snapins_web_rtl_language.htm)
