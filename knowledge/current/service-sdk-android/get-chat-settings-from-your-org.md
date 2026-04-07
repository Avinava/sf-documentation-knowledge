---
title: "Get Chat Settings from Your Org"
domain: service-sdk-android
topic: get-chat-settings-from-your-org
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-04-07T09:06:32.671Z
estimatedTokens: 878
keywords: [Chat, Settings, Org, you’ve, console, supply, app, developer, four, endpoint, hostname, organization, deployment, button, org’s]
---

# Get Chat Settings from Your Org

> After you’ve set up chat in the console, supply your app developer with four values:
        the chat endpoint hostname, the organization ID, the deployment ID, and the button ID. You
        can get this information from your org’s setup.

# Get Chat Settings from Your Org

After you’ve set up chat in the console, supply your app developer with four values: the chat endpoint hostname, the organization ID, the deployment ID, and the button ID. You can get this information from your org’s setup.

![Important](/docs/resources/img/en-us/noversion?doc_id=images%2Ficon_note_important.png&folder=service_sdk_android)

#### Important

The legacy chat product is scheduled for retirement on February 14, 2026, and is in maintenance mode until then. During this phase, you can continue to use chat, but we no longer recommend that you implement new chat channels. To avoid service interruptions to your customers, migrate to [Messaging for In-App and Web](https://help.salesforce.com/s/articleView?id=service.miaw_intro_landing.htm&type=5&language=en_US) before that date. Messaging offers many of the [chat features that you](https://help.salesforce.com/s/articleView?id=service.miaw_chat_vs_messaging.htm&type=5&language=en_US) love plus asynchronous conversations that can be picked back up at any time. Learn about chat retirement in [Help](https://help.salesforce.com/s/articleView?id=001790618&type=1&language=en_US).

![Note](/docs/resources/img/en-us/noversion?doc_id=images%2Ficon_note.png&folder=service_sdk_android)

#### Note

If the endpoint for your server changes (due to an org migration, for example), the SDK automatically reroutes you to the correct server. However, to avoid unnecessary rerouting, you should still update the server endpoint when you notice it has changed inside your org’s settings.

Chat Endpoint Hostname

The hostname for the Chat endpoint that your organization has been assigned. To get this value, from Setup, search for **Chat Settings** and copy the hostname from the **API Endpoint**.

![Pod hostname](/docs/resources/img/en-us/noversion?doc_id=images%2Fchat_org_pod_hostname.png&folder=service_sdk_android)

Be sure not to include the protocol or the path. For instance, if the API Endpoint is:

```

```

The chat endpoint hostname is:

```

```

Org ID

The Salesforce org ID. To get this value, from Setup, search for **Company Information** and copy the **Salesforce Organization ID**.

![Org ID](/docs/resources/img/en-us/noversion?doc_id=images%2Fchat_org_org_id.png&folder=service_sdk_android)

Deployment ID

The unique ID of your Chat deployment. To get this value, from Setup, select **Chat** | **Deployments**. The script at the bottom of the page contains a call to the liveagent.init function with the **pod**, the **deploymentId**, and **orgId** as arguments. Copy the **deploymentId** value.

![Deployment ID](/docs/resources/img/en-us/noversion?doc_id=images%2Fchat_org_deployment_id.png&folder=service_sdk_android)

For instance, if the deployment code contains the following information:

```

```

The deployment ID value is:

```

```

Be sure not to use the org ID value (which is also in this deployment code) for the deployment ID.

Button ID

The unique button ID for your chat configuration. To get this value, from Setup, search for **Chat Buttons** and select **Chat Buttons & Invitations**. Copy the id for the button from the JavaScript snippet.

![Button ID](/docs/resources/img/en-us/noversion?doc_id=images%2Fchat_org_button_id.png&folder=service_sdk_android)

For instance, if your chat button code contains the following information:

```

```

The button ID value is:

```

```

Be sure to omit the liveagent\_button\_online\_ text from the ID when using it in the SDK.

## Code Examples

```
https://d.gla5.gus.salesforce.com/chat/rest/
```

```
d.gla5.gus.salesforce.com
```

```
<script type='text/javascript' 
        src='https://d.gla3.gus.salesforce.com/content/g/js/44.0/deployment.js'></script>
<script type='text/javascript'>
liveagent.init('https://d.gla5.gus.salesforce.com/chat', '573B00000005KXz', '00DB00000003Rxz');
</script>
```

```
573B00000005KXz
```

```
<a id="liveagent_button_online_575C00000004h3m" 
   href="javascript://Chat" 
   style="display: none;" 
   onclick="liveagent.startChat('575C00000004h3m')">
   <!-- Online Chat Content -->
</a>
<div id="liveagent_button_offline_575C00000004h3m" 
     style="display: none;">
     <!-- Offline Chat Content -->
</div>
<script type="text/javascript">
  if (!window._laq) { window._laq = []; }
  window._laq.push(function() { liveagent.showWhenOnline('575C00000004h3m', 
    document.getElementById('liveagent_button_online_575C00000004h3m'));
    liveagent.showWhenOffline('575C00000004h3m', 
    document.getElementById('liveagent_button_offline_575C00000004h3m'));
  });
</script>
```
