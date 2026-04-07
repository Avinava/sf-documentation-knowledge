---
title: "Org Setup for Chat in Lightning Experience with a Guided Flow"
domain: service-sdk-ios
topic: org-setup-for-chat-in-lightning-experience-with-a-guided-flow
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-04-07T18:40:28.086Z
estimatedTokens: 1940
keywords: [Org, Setup, Chat, Lightning, Experience, Guided, Flow, add]
---

> Use the guided setup flow in Lightning Experience to add chat to your
        org.

# Org Setup for Chat in Lightning Experience with a Guided Flow

Use the guided setup flow in Lightning Experience to add chat to your org.

![Important](/docs/resources/img/en-us/noversion?doc_id=images%2Ficon_note_important.png&folder=service_sdk_ios)

#### Important

The legacy chat product is scheduled for retirement on February 14, 2026, and is in maintenance mode until then. During this phase, you can continue to use chat, but we no longer recommend that you implement new chat channels. To avoid service interruptions to your customers, migrate to [Messaging for In-App and Web](https://help.salesforce.com/s/articleView?id=service.miaw_intro_landing.htm&type=5&language=en_US) before that date. Messaging offers many of the [chat features that you](https://help.salesforce.com/s/articleView?id=service.miaw_chat_vs_messaging.htm&type=5&language=en_US) love plus asynchronous conversations that can be picked back up at any time. Learn about chat retirement in [Help](https://help.salesforce.com/s/articleView?id=001790618&type=1&language=en_US).

![Warning](/docs/resources/img/en-us/noversion?doc_id=images%2Ficon_note_warning.png&folder=service_sdk_ios)

#### Warning

If you use the [Permitted Domains setting in your Chat deployment](https://help.salesforce.com/articleView?id=live_agent_deployment_settings.htm&type=0&language=en_US), you’ll get unreliable information from the chat availability check in the SDK. For instance, the agent availability status may always return false. If you want to use Permitted Domains for your web chat deployment, we strongly advise that you create a separate deployment for the Service SDK.

These instructions walk you through a basic chat setup in Lightning Experience. To learn more about chat, check out the [Web Chat Basics](https://trailhead.salesforce.com/content/learn/modules/web-chat) Trailhead module.

1.  Click the Setup gear icon and select **Service Setup**.

    ![Service setup](/docs/resources/img/en-us/noversion?doc_id=images%2Fchat_org_service_setup.png&folder=service_sdk_ios)

2.  Under Recommended Setup, click **View All**.

    ![Recommended setup](/docs/resources/img/en-us/noversion?doc_id=images%2Fchat_org_recommended_setup.png&folder=service_sdk_ios)

3.  In the search box, enter Chat, and select **Chat with Customers**.

    ![Note](/docs/resources/img/en-us/noversion?doc_id=images%2Ficon_note.png&folder=service_sdk_ios)

    #### Note

    If you don’t see the **Chat with Customers** setup flow, verify that your org includes the Digital Engagement add-on SKU.

4.  After you read the overview page, click **Start**.
5.  Enter the name of your queue (for example, Chats) and agent group name (for example, Chat Agents). Then select the members for this group and click **Next**.

    ![Create queue](/docs/resources/img/en-us/noversion?doc_id=images%2Fchat_org_create_queue.png&folder=service_sdk_ios)

6.  If you're asked to prioritize chats with your other work, enter the routing configuration name (for example, Chats) and give it a priority (for example, 1).

    ![Routing configuration](/docs/resources/img/en-us/noversion?doc_id=images%2Fchat_org_routing_config.png&folder=service_sdk_ios)

7.  (Optional) Adjust the work item size and agent capacity.

    ![Agent workload](/docs/resources/img/en-us/noversion?doc_id=images%2Fchat_org_agent_workload.png&folder=service_sdk_ios)

8.  For the website URL, enter either:

    1.  The URL of your site.
    2.  https://, followed by the last part of your site’s URL: https://\*.my.site.com, https://\*.salesforce-sites.com, or https://\*.force.com.

    Then create or select a site.

    ![Set up website](/docs/resources/img/en-us/noversion?doc_id=images%2Fchat_org_website.png&folder=service_sdk_ios)

9.  For the type of chat, select **Service**.

    ![Service type](/docs/resources/img/en-us/noversion?doc_id=images%2Fchat_org_service_type.png&folder=service_sdk_ios)

10.  Choose whether you want to provide offline support for customers.

     ![Offline support](/docs/resources/img/en-us/noversion?doc_id=images%2Fchat_org_offline.png&folder=service_sdk_ios)

11.  Copy the code snippet by clicking **Copy to Clipboard**, and paste it into a text editor. You must extract a few pieces of information from this code snippet.

     ![Copy to clipboard](/docs/resources/img/en-us/noversion?doc_id=images%2Fchat_org_copy_clipboard.png&folder=service_sdk_ios)

12.  In the text editor, copy the following configuration information from the embedded\_svc.init function.

     -   (1) Chat Endpoint Hostname—This value is the hostname of the baseLiveAgentURL property. When copying the hostname, be sure not to include the protocol or the path. For instance, if the value for baseLiveAgentURL is https://MyDomainName.my.salesforce-scrt.com/chat, then the hostname is MyDomainName.my.salesforce-scrt.com.

     -   (2) Org ID—If you don’t already know this value, it’s the fourth argument in the embedded\_svc.init function call.

     -   (3) Deployment ID—This value can be found in the deploymentId property.

     -   (4) Button ID—This value can be found in the buttonId property.


     ![Chat snippet](/docs/resources/img/en-us/noversion?doc_id=images%2Fchat_org_snippet.png&folder=service_sdk_ios)

     Give these four settings to your developer.

     ![Note](/docs/resources/img/en-us/noversion?doc_id=images%2Ficon_note.png&folder=service_sdk_ios)

     #### Note

     If you don’t copy this information now, you can copy it later using the instructions in [Get Chat Settings from Your Org](atlas.en-us.noversion.service_sdk_ios.meta/service_sdk_ios/live_agent_cloud_setup_get_settings.htm "After you’ve set up chat in the console, supply your app developer with four values: the chat endpoint hostname, the organization ID, the deployment ID, and the button ID. You can get this information from your org’s setup.").

13.  Go back to the guided setup flow and click **Finish**.

     ![Finish setup](/docs/resources/img/en-us/noversion?doc_id=images%2Fchat_org_setup_finish.png&folder=service_sdk_ios)

14.  (Optional) If you want to build a chatbot to complement your chat experience, see [Einstein Bots](https://help.salesforce.com/articleView?id=bots_service_intro.htm&language=en_US) in Salesforce Help. In broad strokes, you must [enable Einstein Bots](https://help.salesforce.com/articleView?id=bots_service_enable.htm&language=en_US), [deploy the bot to your channel](https://help.salesforce.com/articleView?id=bots_service_deploy_to_channels.htm&language=en_US), and [activate the bot](https://help.salesforce.com/articleView?id=bots_service_activate_bot.htm&language=en_US). If you want to learn about building a more robust bot, see the [Einstein Bots Developer Cookbook](https://developer.salesforce.com/docs/atlas.en-us.260.0.bot_cookbook.meta/bot_cookbook/bot_cookbook_overview.htm).

You’re all set! Chat is now set up in your org. You can always fine-tune these settings from **Setup**. To learn more, see [Chat](https://help.salesforce.com/articleView?id=live_agent_intro.htm&language=en_US) in Salesforce Help.

![Note](/docs/resources/img/en-us/noversion?doc_id=images%2Ficon_note.png&folder=service_sdk_ios)

#### Note

To learn about chat timeout limitations on iOS devices, see [When does a chat session time out?](https://github.com/forcedotcom/ServiceSDK-iOS/wiki/When-does-a-chat-session-time-out%3F)

-   **[Get Chat Settings from Your Org](atlas.en-us.noversion.service_sdk_ios.meta/service_sdk_ios/live_agent_cloud_setup_get_settings.htm)**
    After you’ve set up chat in the console, supply your app developer with four values: the chat endpoint hostname, the organization ID, the deployment ID, and the button ID. You can get this information from your org’s setup.

## Related Topics

- Get Chat Settings from Your Org (atlas.en-us.noversion.service_sdk_ios.meta/service_sdk_ios/live_agent_cloud_setup_get_settings.htm)
