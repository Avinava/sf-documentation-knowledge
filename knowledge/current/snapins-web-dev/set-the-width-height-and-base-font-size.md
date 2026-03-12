---
title: "Set the Width, Height, and Base Font Size"
domain: snapins-web-dev
topic: set-the-width-height-and-base-font-size
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:36:19.471Z
estimatedTokens: 603
keywords: [Width, Height, Base, Font, Size, Change, sizes, chat, window, code, snippet, match, websites, requirements]
---

# Set the Width, Height, and Base Font Size

> Change the default sizes for your chat window in the code snippet to
   match your websites requirements.

# Set the Width, Height, and Base Font Size

Change the default sizes for your chat window in the code snippet to match your websites requirements.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=snapins_web_dev)

#### Important

The legacy chat product is in maintenance-only mode, and we won't continue to build new features. You can continue to use it, but we no longer recommend that you implement new chat channels. Instead, you can modernize your customer communication with [Messaging for In-App and Web](https://help.salesforce.com/s/articleView?id=service.miaw_intro_landing.htm&type=5&language=en_US). Messaging offers many of the [chat features that you](https://help.salesforce.com/s/articleView?id=service.miaw_chat_vs_messaging.htm&type=5&language=en_US) love plus asynchronous conversations that can be picked back up at any time.

Keep the following in mind when setting your sizes:

-   You can enter values in pixels (px), percent (%), or em or rem.
-   When you set the width in your code snippet, the max-width is set to none. Similarly, when you set the height, the max-height is set to none. This action prevents the chat window from auto-sizing if the browser window’s height or width changes to less than the set height or width of the chat window.
-   If the height of the browser window is less than 498px, the height defaults to 90% of the browser window’s height.

## Set the width

embedded\_svc.settings.widgetWidth = "..."

To customize the width of the chat window, add this parameter to your code snippet and set the width in pixels (px) or percent (%). If you don’t specify a value, the default size of 320px is used.

## Set the height

embedded\_svc.settings.widgetHeight = "..."

To customize the height of the chat window, add this parameter to your code snippet and set the height in pixels (px) or percent (%). If you don’t specify a value, the default size of 498px is used.

## Set the font size

embedded\_svc.settings.widgetFontSize = "..."

To customize the base font size for the text in the chat window, add this parameter to your code snippet and set the base font size. If you don’t specify a value, the default size of 16px is used.

![Tip](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_tip.png&folder=snapins_web_dev)

#### Tip

We recommend selecting a size no smaller than 12px and no larger than 24px.
