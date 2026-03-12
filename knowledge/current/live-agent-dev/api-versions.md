---
title: "API Versions"
domain: live-agent-dev
topic: api-versions
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:50.163Z
estimatedTokens: 585
keywords: [API, Versions, Different, Chat’s, APIs, begin, developing, Deployment, Pre-Chat, sure, you’re, correct, version, number, code]
---

# API Versions

> Different methods and parameters are available in different versions of Chat’s
    APIs. Before you begin developing with the Deployment API or the Pre-Chat API, make sure
    you’re using the correct API version number in your code.

# API Versions

Different methods and parameters are available in different versions of Chat’s APIs. Before you begin developing with the Deployment API or the Pre-Chat API, make sure you’re using the correct API version number in your code.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=live_agent_dev)

#### Important

The legacy chat product is scheduled for retirement on February 14, 2026, and is in maintenance mode until then. During this phase, you can continue to use chat, but we no longer recommend that you implement new chat channels. To avoid service interruptions to your customers, migrate to [Messaging for In-App and Web](https://help.salesforce.com/s/articleView?id=service.miaw_intro_landing.htm&type=5&language=en_US) before that date. Messaging offers many of the [chat features that you](https://help.salesforce.com/s/articleView?id=service.miaw_chat_vs_messaging.htm&type=5&language=en_US) love plus asynchronous conversations that can be picked back up at any time. Learn about chat retirement in [Help](https://help.salesforce.com/s/articleView?id=001790618&type=1&language=en_US).

## Deployment API Versions

You can find out what version of the Deployment API your organization uses from the deployment code that’s generated after you create a deployment.

Summer ’13 and earlier releases support version 28.0 of the Deployment API. The URL for API version 28.0 looks like this: https://MyDomainName.my.salesforce-scrt.com/content/g/deployment.js

Winter ’14 supports version 29.0 of the Deployment API. The URL for API version 29.0 contains the version number: https://MyDomainName.my.salesforce-scrt.com/content/g/js/29.0/deployment.js

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=live_agent_dev)

#### Note

To use new methods and parameters in your deployments, you must update the deployment code on each of your Web pages to use the URL for version 29.0 of the Deployment API.

## Pre-Chat Information API Versions

Winter ’14 supports version 29.0 of the Pre-Chat API. The URL for API version 29.0 contains the version number: https://MyDomainName.my.salesforce-scrt.com/content/g/js/29.0/prechat.js

You can find your organization’s hostname by looking in the deployment code that’s generated after you create a deployment.
