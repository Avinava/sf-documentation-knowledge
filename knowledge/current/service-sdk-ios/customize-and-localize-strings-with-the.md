---
title: "Customize and Localize Strings with the"
domain: service-sdk-ios
topic: customize-and-localize-strings-with-the
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-04-07T09:06:33.047Z
estimatedTokens: 672
keywords: [Customize, Localize, Strings, change, text, throughout, user, resource, Localizable.strings, file, Localization, bundle, languages, want, tokens]
---

# Customize and Localize Strings with the

> You can change the text used throughout the user interface. To customize text, create
  string resource values in a Localizable.strings file in the
  Localization bundle for the languages you want to update. Create string tokens that match the
  tokens you intend to override.

# Customize and Localize Strings with the

You can change the text used throughout the user interface. To customize text, create string resource values in a Localizable.strings file in the Localization bundle for the languages you want to update. Create string tokens that match the tokens you intend to override.

![Important](/docs/resources/img/en-us/noversion?doc_id=images%2Ficon_note_important.png&folder=service_sdk_ios)

#### Important

The legacy chat product is scheduled for retirement on February 14, 2026, and is in maintenance mode until then. During this phase, you can continue to use chat, but we no longer recommend that you implement new chat channels. To avoid service interruptions to your customers, migrate to [Messaging for In-App and Web](https://help.salesforce.com/s/articleView?id=service.miaw_intro_landing.htm&type=5&language=en_US) before that date. Messaging offers many of the [chat features that you](https://help.salesforce.com/s/articleView?id=service.miaw_chat_vs_messaging.htm&type=5&language=en_US) love plus asynchronous conversations that can be picked back up at any time. Learn about chat retirement in [Help](https://help.salesforce.com/s/articleView?id=001790618&type=1&language=en_US).

Service Chat SDK text is translated into more than 25 different languages. In order for your string customizations to take effect in a given language, provide a translation for that language. For any language you do not override manually in your app, the SDK uses its default values for that language.

Refer to [Internationalization at developer.apple.com](https://developer.apple.com/internationalization/) for more info about localization.

The following list of string tokens are available for customization:

-   [ServiceChat (Chat) String Resources](https://forcedotcom.github.io/ServiceSDK-iOS/releases/api/234.1/servicechatstringconstants.html)
-   [ServiceCore (Common) String Resources](https://forcedotcom.github.io/ServiceSDK-iOS/releases/api/234.1/servicecorestringconstants.html)

The following languages are currently supported:

| Language Code | Language |
| --- | --- |
| ar | Arabic |
| cs | Czech |
| da | Danish |
| de | German |
| el | Greek |
| en | English |
| es | Spanish |
| fi | Finnish |
| fr | French |
| hu | Hungarian |
| id | Indonesian |
| it | Italian |
| iw | Hebrew |
| ja | Japanese |
| ko | Korean |
| nb | Norwegian Bokmål |
| nl | Dutch |
| pl | Polish |
| pt | Portuguese |
| ro | Romanian |
| ru | Russian |
| sv | Swedish |
| th | Thai |
| tr | Turkish |
| uk | Ukranian |
| vi | Vietnamese |
| zh_TW | Chinese (Taiwan) |
| zh-Hans | Chinese (Simplified) |
| zh-Hant | Chinese (Traditional) |
| zh | Chinese |
