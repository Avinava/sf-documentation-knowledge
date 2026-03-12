---
title: "Enhance the Pre-Chat Page for Embedded Chat"
domain: snapins-web-dev
topic: enhance-the-pre-chat-page-for-embedded-chat
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:36:19.421Z
estimatedTokens: 705
keywords: [Enhance, Pre-Chat, Embedded, Chat, Pass, nonstandard, direct-to-button, routing, enable, fill, automatically, logged-in, customers]
---

# Enhance the Pre-Chat Page for Embedded Chat

> Pass nonstandard pre-chat details, set up direct-to-button routing, and enable pre-chat fields to fill automatically for logged-in customers.

# Enhance the Pre-Chat Page for Embedded Chat

Pass nonstandard pre-chat details, set up direct-to-button routing, and enable pre-chat fields to fill automatically for logged-in customers.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=snapins_web_dev)

#### Important

The legacy chat product is in maintenance-only mode, and we won't continue to build new features. You can continue to use it, but we no longer recommend that you implement new chat channels. Instead, you can modernize your customer communication with [Messaging for In-App and Web](https://help.salesforce.com/s/articleView?id=service.miaw_intro_landing.htm&type=5&language=en_US). Messaging offers many of the [chat features that you](https://help.salesforce.com/s/articleView?id=service.miaw_chat_vs_messaging.htm&type=5&language=en_US) love plus asynchronous conversations that can be picked back up at any time.

-   **[Pass Nonstandard Pre-Chat Details](atlas.en-us.snapins_web_dev.meta/snapins_web_dev/snapins_web_prechat_details.htm)**
    Further control the pre-chat experience using parameters in your Embedded Service code snippet. Two parameters relate to the pre-chat experience: extraPrechatFormDetails and extraPrechatInfo. With these parameters, you can send information to the agent and to your org beyond what’s shown on the pre-chat form.
-   **[Follow Pre-Chat Code Examples](atlas.en-us.snapins_web_dev.meta/snapins_web_dev/snapins_web_prechat_code_examples.htm)**
    During the pre-chat stage: find existing contacts, avoid attaching records to transcripts, attach a record to an existing field, or override a specific field in your org. These examples and more illustrate some common use cases for pre-chat code snippets.
-   **[Route Chats Based on Pre-Chat Responses with Direct-to-Button Routing](atlas.en-us.snapins_web_dev.meta/snapins_web_dev/snapins_web_directtobutton_routing.htm)**
    Set your chat window to route chats to different chat buttons based on the customer’s pre-chat response on any and all of your pre-chat fields. Available when you upgrade your code snippet to version 4.0.
-   **[Set Pre-Chat Form Fields to Automatically Populate when Customers Log In](atlas.en-us.snapins_web_dev.meta/snapins_web_dev/snapins_web_populate_prechat.htm)**
    When your customers log in, agents already know basic information like their name and email address. Use this array in your 4.0 code snippet to populate relevant pre-chat fields for them. You can mix and match fields for different record types. This information is for embedded chat windows that are placed outside of Salesforce with Lightning Out (beta). If you use your embedded window in Experience sites, you can enable the contact fields to fill in automatically in the Embedded Chat component settings.

## Related Topics

- Pass Nonstandard Pre-Chat Details (atlas.en-us.snapins_web_dev.meta/snapins_web_dev/snapins_web_prechat_details.htm)
- Follow Pre-Chat Code Examples (atlas.en-us.snapins_web_dev.meta/snapins_web_dev/snapins_web_prechat_code_examples.htm)
- Route Chats Based on Pre-Chat Responses with Direct-to-Button Routing (atlas.en-us.snapins_web_dev.meta/snapins_web_dev/snapins_web_directtobutton_routing.htm)
- Set Pre-Chat Form Fields to Automatically Populate when Customers Log In (atlas.en-us.snapins_web_dev.meta/snapins_web_dev/snapins_web_populate_prechat.htm)
