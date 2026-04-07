---
title: "Extend Content Builder"
domain: mc-app-development
topic: extend-content-builder
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-04-07T09:06:25.949Z
estimatedTokens: 585
keywords: [Extend, Content, Builder, includes, native, editors, block, widgets, edit, block's, give, users, customized, editing, experience]
---

# Extend Content Builder

> Content Builder includes native editors, called block widgets, used to create and edit the block's content. To give your users a customized editing experience within the Content Builder editor, you can develop custom block widgets with the Content Builder Block SDK. For example, instead of using the

# Extend Content Builder

Content Builder includes native editors, called block widgets, used to create and edit the block's content. To give your users a customized editing experience within the Content Builder editor, you can develop custom block widgets with the Content Builder Block SDK. For example, instead of using the CKEditor WYSIWYG for HTML editing, you could use a different WYSIWYG, like QuillJS, by making a block widget for it.

Custom blocks are also available in the CloudPages Content Builder editor.

## What’s a Block?

A block is the simplest form of subcontent in the Content Builder asset model. A content block is a piece of HTML content that you can build using the Content Builder editor. You can build a content block individually or within a larger asset, like an email or a web page. Each content block has a type that determines what block widget to use. A block widget is a user interface used to create and edit the content of a block.

Use the block framework to create your own block widgets. ![](/docs/resources/img/en-us/noversion?doc_id=images%2Fblock_widget.png&folder=mc-app-development)

## How Does a Block Widget Work?

In its basic form, a block widget is an HTML page that the editor renders in the widgets section. Block widgets use cross-document messages to interact with the editor. To facilitate the communication with the editor, the Content Builder Block SDK exposes available interactions as simple Javascript methods.

You can host and serve the block widget as an HTML page from anywhere, then add it as an installed package component in Marketing Cloud. When a user provisions the package, the editor shows the block icon as an available custom block. When the user drags the block icon onto the editor or edits a previously created content block of this type, the block widget’s HTML page opens in an iframe.

As the user interacts with the widget, its HTML page uses the SDK to update the content block in the app in real time.

## Related Items

-   [Introduction to Content Builder](https://help.salesforce.com/articleView?id=mc_ceb_content_builder.htm=5)
-   [Content Builder Block SDK on GitHub](https://github.com/salesforce-marketingcloud/blocksdk)
-   [List Your App on AppExchange](atlas.en-us.noversion.mc-app-development.meta/mc-app-development/list-app-appexchange.htm)

## Related Topics

- List Your App on AppExchange (atlas.en-us.noversion.mc-app-development.meta/mc-app-development/list-app-appexchange.htm)
