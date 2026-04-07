---
title: "Org Setup for Chat in Salesforce Classic"
domain: service-sdk-ios
topic: org-setup-for-chat-in-salesforce-classic
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-04-07T09:06:32.964Z
estimatedTokens: 1048
keywords: [Org, Setup, Chat, Salesforce, Classic, mobile, app]
---

# Org Setup for Chat in Salesforce Classic

> To use Chat in your mobile app, first set up Chat in your org.

# Org Setup for Chat in Salesforce Classic

To use Chat in your mobile app, first set up Chat in your org.

![Important](/docs/resources/img/en-us/noversion?doc_id=images%2Ficon_note_important.png&folder=service_sdk_ios)

#### Important

The legacy chat product is scheduled for retirement on February 14, 2026, and is in maintenance mode until then. During this phase, you can continue to use chat, but we no longer recommend that you implement new chat channels. To avoid service interruptions to your customers, migrate to [Messaging for In-App and Web](https://help.salesforce.com/s/articleView?id=service.miaw_intro_landing.htm&type=5&language=en_US) before that date. Messaging offers many of the [chat features that you](https://help.salesforce.com/s/articleView?id=service.miaw_chat_vs_messaging.htm&type=5&language=en_US) love plus asynchronous conversations that can be picked back up at any time. Learn about chat retirement in [Help](https://help.salesforce.com/s/articleView?id=001790618&type=1&language=en_US).

![Note](/docs/resources/img/en-us/noversion?doc_id=images%2Ficon_note.png&folder=service_sdk_ios)

#### Note

This topic shows you how to set up Chat in Salesforce Classic. If you’re using Lightning Experience, see [Org Setup for Chat in Lightning Experience with a Guided Flow](atlas.en-us.noversion.service_sdk_ios.meta/service_sdk_ios/live_agent_cloud_setup.htm "Use the guided setup flow in Lightning Experience to add chat to your org.").

1.  Create a Chat implementation in Service Cloud, as described in [Chat for Administrators](https://help.salesforce.com/apex/HTViewHelpDoc?id=live_agent_administrators_intro.htm&language=en_US) ([PDF](https://resources.docs.salesforce.com/sfdc/pdf/chat_administrator.pdf)). Your implementation needs a deployment and a chat button.

    ![Note](/docs/resources/img/en-us/noversion?doc_id=images%2Ficon_note.png&folder=service_sdk_ios)

    #### Note

    By default, a mobile chat session times out around two minutes after you leave the app or lose connectivity. To change this value, update the **Idle Connection Timeout Duration** field when setting up your chat deployment. Keep in mind that the actual timeout on the app can be up to 40 seconds longer than the specified value in this field. See [Chat Deployment Settings](https://help.salesforce.com/articleView?id=live_agent_deployment_settings.htm&language=en_US).

2.  (Optional) If you want to use Omni-Channel for routing, configure it as described in [Omni-Channel for Administrators](https://help.salesforce.com/HTViewHelpDoc?id=service_presence_intro.htm&language=en_US) ([PDF](https://resources.docs.salesforce.com/sfdc/pdf/service_presence_administrators.pdf)).

    Omni-Channel enables your agents to use the same widget for all real-time routing (for example, Chat, SOS, email, case management). However, you can use Chat without setting up Omni-Channel.

3.  (Optional) If you want to build a chatbot to complement your chat experience, see [Einstein Bots](https://help.salesforce.com/articleView?id=bots_service_intro.htm&language=en_US) in Salesforce Help. In broad strokes, you must [enable Einstein Bots](https://help.salesforce.com/articleView?id=bots_service_enable.htm&language=en_US), [deploy the bot to your channel](https://help.salesforce.com/articleView?id=bots_service_deploy_to_channels.htm&language=en_US), and [activate the bot](https://help.salesforce.com/articleView?id=bots_service_activate_bot.htm&language=en_US). If you want to learn about building a more robust bot, see the [Einstein Bots Developer Cookbook](https://developer.salesforce.com/docs/atlas.en-us.260.0.bot_cookbook.meta/bot_cookbook/bot_cookbook_overview.htm).

If you have trouble finding the settings that a developer requires to use this feature in the SDK, see [Get Chat Settings from Your Org](atlas.en-us.noversion.service_sdk_ios.meta/service_sdk_ios/live_agent_cloud_setup_get_settings.htm#live_agent_cloud_setup_get_settings "After you’ve set up chat in the console, supply your app developer with four values: the chat endpoint hostname, the organization ID, the deployment ID, and the button ID. You can get this information from your org’s setup.").

## Related Topics

- Org Setup for Chat in Lightning Experience with a Guided Flow (atlas.en-us.noversion.service_sdk_ios.meta/service_sdk_ios/live_agent_cloud_setup.htm)
- Get Chat Settings from Your Org (atlas.en-us.noversion.service_sdk_ios.meta/service_sdk_ios/live_agent_cloud_setup_get_settings.htm)
