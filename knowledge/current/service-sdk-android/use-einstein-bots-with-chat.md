---
title: "Use Einstein Bots with Chat"
domain: service-sdk-android
topic: use-einstein-bots-with-chat
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-04-07T18:40:27.667Z
estimatedTokens: 849
keywords: [Einstein, Bots, Chat, complement, support, experience, smart, automated, system, saves, agents, time, keeps, customers, happy, Once, you've, org, SDK, automatically, begins, bot, design, transfer, agent, any, point]
---

> With Einstein Bots, you can complement your chat support experience with a smart,
    automated system that saves your agents time and keeps your customers happy. Once you've set up
    Einstein Bots in your org, the SDK automatically begins the chat experience using your bot. You
    can design your bot to transfer to an agent at any point.

# Use Einstein Bots with Chat

With Einstein Bots, you can complement your chat support experience with a smart, automated system that saves your agents time and keeps your customers happy. Once you've set up Einstein Bots in your org, the SDK automatically begins the chat experience using your bot. You can design your bot to transfer to an agent at any point.

![Important](/docs/resources/img/en-us/noversion?doc_id=images%2Ficon_note_important.png&folder=service_sdk_android)

#### Important

The legacy chat product is scheduled for retirement on February 14, 2026, and is in maintenance mode until then. During this phase, you can continue to use chat, but we no longer recommend that you implement new chat channels. To avoid service interruptions to your customers, migrate to [Messaging for In-App and Web](https://help.salesforce.com/s/articleView?id=service.miaw_intro_landing.htm&type=5&language=en_US) before that date. Messaging offers many of the [chat features that you](https://help.salesforce.com/s/articleView?id=service.miaw_chat_vs_messaging.htm&type=5&language=en_US) love plus asynchronous conversations that can be picked back up at any time. Learn about chat retirement in [Help](https://help.salesforce.com/s/articleView?id=001790618&type=1&language=en_US).

Before you can use Einstein Bots in your mobile app, enable and build a bot in your org. To learn more, see [Einstein Bots](https://help.salesforce.com/articleView?id=bots_service_intro.htm&language=en_US) in Salesforce Help. In broad strokes, you must [enable Einstein Bots](https://help.salesforce.com/articleView?id=bots_service_enable.htm&language=en_US), [deploy the bot to your channel](https://help.salesforce.com/articleView?id=bots_service_deploy_to_channels.htm&language=en_US), and [activate the bot](https://help.salesforce.com/articleView?id=bots_service_activate_bot.htm&language=en_US). If you want to learn about building a more robust bot, see the [Einstein Bots Developer Cookbook](https://developer.salesforce.com/docs/atlas.en-us.260.0.bot_cookbook.meta/bot_cookbook/bot_cookbook_overview.htm).

Once you've set up your bot and assigned it to your chat button, a chat session automatically starts out as a bot. The menu options, choice buttons, and persistent footer menu that you designed for your bot all appear from within the mobile chat session. These features give your customers direct ways to get what they need—fast.

![Einstein bot](/docs/resources/img/en-us/noversion?doc_id=images%2Fandroid-einsteinbot.png&folder=service_sdk_android)

You do have a few ways you can fine-tune the bot from the SDK.

| Feature Area | Details |
| --- | --- |
| Einstein Bot Avatar | Configure the bot avatar that displays during a session with a bot. To do this, add your Drawable to the ChatUIConfiguration builder using the chatBotAvatar method.final ChatUIConfiguration.Builder uiConfigBuilder =    new ChatUIConfiguration.Builder(); uiConfigBuilder.chatBotAvatar(R.drawable.my_chatbot_avatar); uiConfigBuilder.build(); |
| Einstein Bot Banner | Configure the banner that displays during a session with a bot. To do this, add your Layout to the ChatUIConfiguration builder using the enableChatBotBanner method.final ChatUIConfiguration.Builder uiConfigBuilder =    new ChatUIConfiguration.Builder(); uiConfigBuilder.enableChatBotBanner(R.layout.my_chatbot_banner); uiConfigBuilder.build(); |
