---
title: "Bootstrap Embedded Chat"
domain: snapins-web-dev
topic: bootstrap-embedded-chat
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:36:19.278Z
estimatedTokens: 834
keywords: [Bootstrap, Embedded, Chat, API, developers, quick, setup, skips, help, button, stage, loading, necessary, dependencies, bootstraps]
---

# Bootstrap Embedded Chat

> This API provides developers with a quick Chat setup that skips the static help button
    stage, loading all the necessary dependencies, bootstraps, and opens the chat application on
    your website with one call. You can then quickly add a custom chat button, for example, by
    replacing the default button with more code changes.

# Bootstrap Embedded Chat

This API provides developers with a quick Chat setup that skips the static help button stage, loading all the necessary dependencies, bootstraps, and opens the chat application on your website with one call. You can then quickly add a custom chat button, for example, by replacing the default button with more code changes.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=snapins_web_dev)

#### Important

The legacy chat product is in maintenance-only mode, and we won't continue to build new features. You can continue to use it, but we no longer recommend that you implement new chat channels. Instead, you can modernize your customer communication with [Messaging for In-App and Web](https://help.salesforce.com/s/articleView?id=service.miaw_intro_landing.htm&type=5&language=en_US). Messaging offers many of the [chat features that you](https://help.salesforce.com/s/articleView?id=service.miaw_chat_vs_messaging.htm&type=5&language=en_US) love plus asynchronous conversations that can be picked back up at any time.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=snapins_web_dev)

#### Note

Use the Embedded Service code snippet version 5.0 and later. The API can only be used on a page that includes the snippet. This API isn’t available for Experience sites.

## embedded\_svc.bootstrapEmbeddedService(attributes);

This function loads scripts and dependencies and creates the Embedded Chat application. It returns a Promise object that resolves after the Embedded Chat application is created. The Promise rejects on any error thrown during the bootstrapping.

Use the optional attributes JSON object parameter to pass information to the Embedded Chat Bootstrap API to launch the chat window.

Your attributes parameter should include the attributes from the table.

| Name | Type | Description |
| --- | --- | --- |
| baseCoreURL | string | The URL of an organization’s instance. |
| communityEndpointURL | string | The URL representing a community endpoint. |

The attributes parameter is optional. If you don’t provide this parameter, the function uses what is stored in embedded\_svc.settings.

The result of using this API is the same for a customer clicking the standard "Chat With an Expert" button. If you have pre-chat enabled, it surfaces the pre-chat form. If you’ve disabled pre-chat, it sends a chat request and surface the waiting state.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=snapins_web_dev)

#### Note

See [Start, End, and Clear Embedded Chat Sessions](https://developer.salesforce.com/docs/atlas.en-us.260.0.snapins_web_dev.meta/snapins_web_dev/embedded_services_web_start_and_end_chat.htm) for an API related to this topic.

**Add a Custom Chat Button**

Here’s an example of how to apply this API. Hide the default Salesforce chat button and replace it with a button that matches your company’s brand.

To hide the standard button, include this line in your embedded code snippet: embedded\_svc.settings.displayHelpButton = false;.

On click of your company’s branded button, invoke embedded\_svc.bootstrapEmbeddedService(); to surface the chat experience for your end user.

To show a basic button that invokes the bootstrapEmbeddedService() function:

```

```

## Code Examples

```
<script type='text/javascript'>
	function bootstrapChat() {
		embedded_svc.bootstrapEmbeddedService();
	}
</script>
<button onclick="bootstrapChat()">
	Click me to show the Embedded Chat experience.
</button>
```
