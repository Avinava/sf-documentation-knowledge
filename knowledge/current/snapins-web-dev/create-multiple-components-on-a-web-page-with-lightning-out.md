---
title: "Create Multiple Components on a Web Page with Lightning Out"
domain: snapins-web-dev
topic: create-multiple-components-on-a-web-page-with-lightning-out
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:36:19.300Z
estimatedTokens: 364
keywords: [Multiple, Components, Web, Lightning, Salesforce, outside, domain, Component, Code]
---

# Create Multiple Components on a Web Page with Lightning Out

> Lightning Out allows you to create Salesforce components outside of the Salesforce
        domain.

# Create Multiple Components on a Web Page with Lightning Out

Lightning Out allows you to create Salesforce components outside of the Salesforce domain.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=snapins_web_dev)

#### Important

The legacy chat product is in maintenance-only mode, and we won't continue to build new features. You can continue to use it, but we no longer recommend that you implement new chat channels. Instead, you can modernize your customer communication with [Messaging for In-App and Web](https://help.salesforce.com/s/articleView?id=service.miaw_intro_landing.htm&type=5&language=en_US). Messaging offers many of the [chat features that you](https://help.salesforce.com/s/articleView?id=service.miaw_chat_vs_messaging.htm&type=5&language=en_US) love plus asynchronous conversations that can be picked back up at any time.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=snapins_web_dev)

#### Note

Embedded Service web components aren’t supported on the login page of Experience sites.

To create these components with Lightning Out on the same web page as an Embedded Service component, use "embeddedService:sidebarApp" as your application tag in your call to $Lightning.use.

In this code sample, we create a \`HelloWorldComp\` component in the body of the HTML document where an Embedded Service component is rendered.

## Component Code

```

```

## Code Examples

```
$Lightning.use(
    "embeddedService:sidebarApp",
    function () {
        $Lightning.createComponent(
            "c:HelloWorldComp",
            { … },
            document.body,
            function (cmp) {
                console.log("callback");
            }
        );
    },
    “communityEndpointUrl”,
    ...
);
```
