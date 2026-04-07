---
title: "Can't Connect to Chat"
domain: service-sdk-android
topic: cant-connect-to-chat
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-04-07T18:40:27.825Z
estimatedTokens: 469
keywords: [Can't, Connect, Chat, successful, connection, app, agent, standing, review, how, you've, implementation]
---

> If you can't make a successful connection from your app, even when an agent is standing
    by, review how you've set up your chat implementation.

# Can't Connect to Chat

If you can't make a successful connection from your app, even when an agent is standing by, review how you've set up your chat implementation.

Run through this checklist to help diagnose the root cause.

1.  If you’re using the default UI for chat, verify that you are calling showChat on the main UI thread.
2.  Verify that the chat endpoint in your code only specifies the hostname. For instance, if your endpoint is https://MyDomainName.my.salesforce-scrt.com/chat/rest/, then use the following value in your code: MyDomainName.my.salesforce-scrt.com.
3.  Verify that you're using the correct chat endpoint. See [Get Chat Settings from Your Org](atlas.en-us.noversion.service_sdk_android.meta/service_sdk_android/live_agent_cloud_setup_get_settings.htm#live_agent_cloud_setup_get_settings "After you’ve set up chat in the console, supply your app developer with four values: the chat endpoint hostname, the organization ID, the deployment ID, and the button ID. You can get this information from your org’s setup.") for more info.
4.  Verify that you're using the correct deployment ID and button ID. See [Get Chat Settings from Your Org](atlas.en-us.noversion.service_sdk_android.meta/service_sdk_android/live_agent_cloud_setup_get_settings.htm#live_agent_cloud_setup_get_settings "After you’ve set up chat in the console, supply your app developer with four values: the chat endpoint hostname, the organization ID, the deployment ID, and the button ID. You can get this information from your org’s setup.") for more info.
5.  Verify that you've correctly set up your chat implementation. See [Org Setup for Chat in Lightning Experience with a Guided Flow](atlas.en-us.noversion.service_sdk_android.meta/service_sdk_android/live_agent_cloud_setup.htm "Use the guided setup flow in Lightning Experience to add chat to your org.") for more info.

## Related Topics

- Get Chat Settings from Your Org (atlas.en-us.noversion.service_sdk_android.meta/service_sdk_android/live_agent_cloud_setup_get_settings.htm)
- Org Setup for Chat in Lightning Experience with a Guided Flow (atlas.en-us.noversion.service_sdk_android.meta/service_sdk_android/live_agent_cloud_setup.htm)
