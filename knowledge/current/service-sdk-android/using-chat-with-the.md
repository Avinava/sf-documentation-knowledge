---
title: "Using Chat with the"
domain: service-sdk-android
topic: using-chat-with-the
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-04-07T18:40:27.898Z
estimatedTokens: 1129
keywords: [Chat, Add, experience, mobile, app]
---

> Add the Chat experience to your mobile app.

# Using Chat with the

Add the Chat experience to your mobile app.

![Important](/docs/resources/img/en-us/noversion?doc_id=images%2Ficon_note_important.png&folder=service_sdk_android)

#### Important

The legacy chat product is scheduled for retirement on February 14, 2026, and is in maintenance mode until then. During this phase, you can continue to use chat, but we no longer recommend that you implement new chat channels. To avoid service interruptions to your customers, migrate to [Messaging for In-App and Web](https://help.salesforce.com/s/articleView?id=service.miaw_intro_landing.htm&type=5&language=en_US) before that date. Messaging offers many of the [chat features that you](https://help.salesforce.com/s/articleView?id=service.miaw_chat_vs_messaging.htm&type=5&language=en_US) love plus asynchronous conversations that can be picked back up at any time. Learn about chat retirement in [Help](https://help.salesforce.com/s/articleView?id=001790618&type=1&language=en_US).

-   **[Chat in the for Android for Android](atlas.en-us.noversion.service_sdk_android.meta/service_sdk_android/android_chat_overview.htm)**
    Using Chat within the Service Chat SDK, you can provide real-time chat sessions from within your native app.
-   **[Quick Setup: Chat in the](atlas.en-us.noversion.service_sdk_android.meta/service_sdk_android/android_chat_basic_setup.htm)**
    To add Chat to your Android app, create a configuration object that points to your org and then create a Chat UI client.
-   **[Use Einstein Bots with Chat](atlas.en-us.noversion.service_sdk_android.meta/service_sdk_android/android_chat_einstein_bots.htm)**
    With Einstein Bots, you can complement your chat support experience with a smart, automated system that saves your agents time and keeps your customers happy. Once you've set up Einstein Bots in your org, the SDK automatically begins the chat experience using your bot. You can design your bot to transfer to an agent at any point.
-   **[Handle Custom URLs in Chat](atlas.en-us.noversion.service_sdk_android.meta/service_sdk_android/android_chat_url_event.htm)**
    Have your agents pass along custom URLs to perform specific actions in your mobile app.
-   **[Listen for State Changes and Events](atlas.en-us.noversion.service_sdk_android.meta/service_sdk_android/android_chat_state_changes.htm)**
    You can add listeners for state changes and events during a chat session and respond accordingly. For instance, when the client ends a session, you can display a dialog to the user.
-   **[Show Pre-Chat Fields to User](atlas.en-us.noversion.service_sdk_android.meta/service_sdk_android/android_chat_prechat_fields.htm)**
    Before a chat session begins, you can request that the user enter pre-chat fields that are sent to the agent at the start of the session.
-   **[Create or Update Salesforce Records from a Chat Session](atlas.en-us.noversion.service_sdk_android.meta/service_sdk_android/android_chat_send_custom_data.htm)**
    When a chat session begins, you can create or find records within your org and pass this information to the agent. Using this technique, your agent can immediately have all the context they need for an effective chat session.
-   **[Check Agent Availability](atlas.en-us.noversion.service_sdk_android.meta/service_sdk_android/android_chat_agent_avail.htm)**
    Before starting a session, you can check the availability of your chat agents and then provide your users with more accurate expectations. For instance, when no agents are available, you can hide or disable the button to contact an agent
-   **[Transfer File to Agent](atlas.en-us.noversion.service_sdk_android.meta/service_sdk_android/android_chat_file_transfer.htm)**
    Give users the ability to transfer files during a chat so they can share information about their issues.
-   **[Block Sensitive Data in a Chat Session](atlas.en-us.noversion.service_sdk_android.meta/service_sdk_android/live_agent_sensitive_data.htm)**
    To block sending sensitive data to agents, specify a regular expression in your org's setup. When the regular expression matches text in the user's message, the matched text is replaced with customizable text before it leaves the device.
-   **[Build Your Own UI with the Chat Core API](atlas.en-us.noversion.service_sdk_android.meta/service_sdk_android/android_chat_core_api.htm)**
    With the Chat Core API, you can access the functionality of Chat without a UI. This API is useful if you want to build your own UI and not use the default.

## Related Topics

- Chat in the for Android for Android (atlas.en-us.noversion.service_sdk_android.meta/service_sdk_android/android_chat_overview.htm)
- Quick Setup: Chat in the (atlas.en-us.noversion.service_sdk_android.meta/service_sdk_android/android_chat_basic_setup.htm)
- Use Einstein Bots with Chat (atlas.en-us.noversion.service_sdk_android.meta/service_sdk_android/android_chat_einstein_bots.htm)
- Handle Custom URLs in Chat (atlas.en-us.noversion.service_sdk_android.meta/service_sdk_android/android_chat_url_event.htm)
- Listen for State Changes and Events (atlas.en-us.noversion.service_sdk_android.meta/service_sdk_android/android_chat_state_changes.htm)
- Show Pre-Chat Fields to User (atlas.en-us.noversion.service_sdk_android.meta/service_sdk_android/android_chat_prechat_fields.htm)
- Create or Update Salesforce Records from a Chat Session (atlas.en-us.noversion.service_sdk_android.meta/service_sdk_android/android_chat_send_custom_data.htm)
- Check Agent Availability (atlas.en-us.noversion.service_sdk_android.meta/service_sdk_android/android_chat_agent_avail.htm)
- Transfer File to Agent (atlas.en-us.noversion.service_sdk_android.meta/service_sdk_android/android_chat_file_transfer.htm)
- Block Sensitive Data in a Chat Session (atlas.en-us.noversion.service_sdk_android.meta/service_sdk_android/live_agent_sensitive_data.htm)
