---
title: "Specify Chat Images"
domain: snapins-web-dev
topic: specify-chat-images
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:36:19.453Z
estimatedTokens: 799
keywords: [Specify, Chat, Images, own, pre-chat, banner, logo, waiting, state, image, agent, Einstein, Bots, avatars, recommend]
---

# Specify Chat Images

> Use your own images for the pre-chat banner, header logo, waiting state
   image, and the agent and Einstein Bots avatars. We recommend adding your images in Embedded
   Service setup, but you can use these settings to override what you created in
  setup.

# Specify Chat Images

Use your own images for the pre-chat banner, header logo, waiting state image, and the agent and Einstein Bots avatars. We recommend adding your images in Embedded Service setup, but you can use these settings to override what you created in setup.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=snapins_web_dev)

#### Important

The legacy chat product is in maintenance-only mode, and we won't continue to build new features. You can continue to use it, but we no longer recommend that you implement new chat channels. Instead, you can modernize your customer communication with [Messaging for In-App and Web](https://help.salesforce.com/s/articleView?id=service.miaw_intro_landing.htm&type=5&language=en_US). Messaging offers many of the [chat features that you](https://help.salesforce.com/s/articleView?id=service.miaw_chat_vs_messaging.htm&type=5&language=en_US) love plus asynchronous conversations that can be picked back up at any time.

If the images are hosted in the same repository as the web page where you add the chat window, you can use either the relative URL paths and names or full URLs. If the images are hosted elsewhere, use the full URLs.

Before customizing the code, upload the image files that you want to use in the chat window. Create your images in .png format and use the recommended sizes to ensure that the images don’t become distorted during the chat experience.

## Pre-Chat Banner

embedded\_svc.settings.prechatBackgroundImgURL = "..."

Specify a URL to set an image in the pre-chat form below the header and above the fields.

![Tip](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_tip.png&folder=snapins_web_dev)

#### Tip

We recommend an image that’s 320x100 pixels.

## Logo for Header and Minimized Chat

embedded\_svc.settings.smallCompanyLogoImgURL = "..."

Specify a URL to set the logo for the chat header and minimized chat.

![Tip](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_tip.png&folder=snapins_web_dev)

#### Tip

We recommend a logo that’s 36x36 pixels.

## Waiting State

embedded\_svc.settings.waitingStateBackgroundImgURL = "..."

Specify a URL to set the background image when the chat is in a waiting state.

![Tip](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_tip.png&folder=snapins_web_dev)

#### Tip

We recommend an image that’s 250x60 pixels.

## Agent Avatar

embedded\_svc.settings.avatarImgURL = "..."

Specify a URL to set the image of the agent that appears during pre-chat and chat. If your chat window uses an automated invitation, this image appears in the top left of the invitation with the default HTML and CSS in the snippet.

![Tip](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_tip.png&folder=snapins_web_dev)

#### Tip

We recommend an image size that’s 40x40 pixels.

## Einstein Bots Avatar

embedded\_svc.settings.chatbotAvatarImgURL = “...”

Specify a URL to set the avatar image that appears when the customer is chatting with a bot.

![Tip](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_tip.png&folder=snapins_web_dev)

#### Tip

We recommend an image size that’s 40x40 pixels.
