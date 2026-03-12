---
title: "Load Files for Custom Chat Events"
domain: snapins-web-dev
topic: load-files-for-custom-chat-events
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:36:19.458Z
estimatedTokens: 422
keywords: [Load, Files, Custom, Chat, Events, own, JavaScript, CSS, Embedded, handle, style, scripts, styles, loaded, agent]
---

# Load Files for Custom Chat Events

> Load your own JavaScript and CSS files into Embedded Chat to handle and
      style custom chat events. Your scripts and styles are loaded only after the agent accepts the
      chat request.

# Load Files for Custom Chat Events

Load your own JavaScript and CSS files into Embedded Chat to handle and style custom chat events. Your scripts and styles are loaded only after the agent accepts the chat request.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=snapins_web_dev)

#### Important

The legacy chat product is in maintenance-only mode, and we won't continue to build new features. You can continue to use it, but we no longer recommend that you implement new chat channels. Instead, you can modernize your customer communication with [Messaging for In-App and Web](https://help.salesforce.com/s/articleView?id=service.miaw_intro_landing.htm&type=5&language=en_US). Messaging offers many of the [chat features that you](https://help.salesforce.com/s/articleView?id=service.miaw_chat_vs_messaging.htm&type=5&language=en_US) love plus asynchronous conversations that can be picked back up at any time.

Upload your files as Static Resources with the cache control set to public. Assign names that are easy to remember and with no spaces. You will reference them by static resource name in Embedded Chat.

## Load a JavaScript File

embedded\_svc.settings.externalScripts = \["...", “...”\]

Specify your resources using the static resource name, not the file name itself. For example, if you upload CustomEvent.js and give it the name CustomEvent, enter CustomEvent.

## Load a CSS File

embedded\_svc.settings.externalStyles = \["...", “...”\]

Specify your resources using the static resource name, not the file name itself. For example, if you upload CustomEvent.css and give it the name CustomEventCSS, enter CustomEventCSS.
