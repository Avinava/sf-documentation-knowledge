---
title: "Develop a Custom Block Widget"
domain: mc-app-development
topic: develop-a-custom-block-widget
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-04-07T18:40:21.291Z
estimatedTokens: 541
keywords: [Develop, Block, Widget, offer, Content, Builder, SDK, GitHub, URL, Test, Register, App, Exchange, Items]
---

> To develop and offer a custom block, you need the following:

# Develop a Custom Block Widget

To develop and offer a custom block, you need the following:

-   A block widget: an HTML page for editing content that uses the Content Builder Block SDK to interact with content blocks in the editor.
-   A block icon and dragging icon. This icon displays as users drag and drop the block onto the canvas.
-   An app that serves this page and a hosting provider to host the app.
-   An installed package that includes your block component.

## Content Builder Block SDK on GitHub

[https://github.com/salesforce-marketingcloud/blocksdk](https://github.com/salesforce-marketingcloud/blocksdk)

## Block Widget URL

When adding a block component to an installed package, provide a block widget URL. This is the registered endpoint for your custom content block app. For example, if the URL for your block widget is [https://www.example.com/myblock/](https://www.example.com/myblock/), then the Content Builder editor assumes these URLs exist.

-   [https://www.example.com/myblock/index.html](https://www.example.com/myblock/index.html) is your block widget page.
-   [https://www.example.com/myblock/icon.png](https://www.example.com/myblock/icon.png) is your block icon.
-   [https://www.example.com/myblock/dragIcon.png](https://www.example.com/myblock/dragIcon.png) is your block drag icon.

## Test Your Block Widget

To test your block, you need a Marketing Cloud account that is provisioned for Content Builder, with user permissions to use the editor. Add a block component to your installed package and test it in Content Builder.

## Register Your Block Widget on App Exchange

To sell or distribute your custom block outside of your account, register your block widget's installed package on App Exchange.

## Related Items

-   [Register Endpoint for Custom Content Block Component](atlas.en-us.noversion.mc-app-development.meta/mc-app-development/create-content-block.htm)
-   [Content Builder Permissions](https://help.salesforce.com/articleView?id=mc_ceb_content_builder_permissions.htm=5)
-   [List Your App in AppExchange](atlas.en-us.noversion.mc-app-development.meta/mc-app-development/list-app-appexchange.htm)

## Related Topics

- Register Endpoint for Custom Content Block Component (atlas.en-us.noversion.mc-app-development.meta/mc-app-development/create-content-block.htm)
- List Your App in AppExchange (atlas.en-us.noversion.mc-app-development.meta/mc-app-development/list-app-appexchange.htm)
