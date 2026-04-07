---
title: "Customize and Localize Strings with the"
domain: service-sdk-android
topic: customize-and-localize-strings-with-the
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-04-07T09:06:32.645Z
estimatedTokens: 993
keywords: [Customize, Localize, Strings, change, text, throughout, user, resource, XML, files, named, strings.xml, project's, values-, locale]
---

# Customize and Localize Strings with the

> You can change the text throughout the user interface. To customize text, create string
  resource XML files (named strings.xml) in your project's
   values-[locale] resource folder for the language(s) you want
  to update.

# Customize and Localize Strings with the

You can change the text throughout the user interface. To customize text, create string resource XML files (named strings.xml) in your project's values-\[locale\] resource folder for the language(s) you want to update.

![Important](/docs/resources/img/en-us/noversion?doc_id=images%2Ficon_note_important.png&folder=service_sdk_android)

#### Important

The legacy chat product is scheduled for retirement on February 14, 2026, and is in maintenance mode until then. During this phase, you can continue to use chat, but we no longer recommend that you implement new chat channels. To avoid service interruptions to your customers, migrate to [Messaging for In-App and Web](https://help.salesforce.com/s/articleView?id=service.miaw_intro_landing.htm&type=5&language=en_US) before that date. Messaging offers many of the [chat features that you](https://help.salesforce.com/s/articleView?id=service.miaw_chat_vs_messaging.htm&type=5&language=en_US) love plus asynchronous conversations that can be picked back up at any time. Learn about chat retirement in [Help](https://help.salesforce.com/s/articleView?id=001790618&type=1&language=en_US).

To see the complete list of string resource values, refer to the string resources document for the feature you want to customize.

-   [Chat String Resources](https://forcedotcom.github.io/ServiceSDK-Android/releases/chat/4.1.1/api/reference/doc-files/resource_overrides.html#Strings)
-   [Common String Resources](https://forcedotcom.github.io/ServiceSDK-Android/releases/common/8.0.2/api/reference/doc-files/resource_overrides.html#Strings)

SDK text is translated into more than 25 different languages. In order for your string customizations to take effect in all languages, provide a translation for each language. To add support for a language, create a resources subdirectory that includes a hyphen and the ISO language code at the end of the directory name. For example, values-es/ is the directory containing string resources for Spanish. Android loads the appropriate resources according to the locale settings of the device at run time. The system falls back on the strings in the default values/ directory if the appropriate locale directory isn't found.

The following languages are currently supported:

| Language Code | Language |
| --- | --- |
| values-ar | Arabic |
| values-cs | Czech |
| values-da | Danish |
| values-de | German |
| values-el | Greek |
| values-en | English |
| values-es | Spanish |
| values-fi | Finnish |
| values-fr | French |
| values-hu | Hungarian |
| values-in | Indonesian |
| values-it | Italian |
| values-iw | Hebrew |
| values-ja | Japanese |
| values-ko | Korean |
| values-nl | Dutch |
| values-no | Norwegian |
| values-pl | Polish |
| values-pt-rBR | Brazilian Portuguese |
| values-ro | Romanian |
| values-ru | Russian |
| values-sv | Swedish |
| values-th | Thai |
| values-tr | Turkish |
| values-uk | Ukranian |
| values-vi | Vietnamese |
| values-zh | Chinese |
| values-zh-rTW | Traditional Chinese |

Check out [Supporting Different Languages](http://developer.android.com/training/basics/supporting-devices/languages.html) in the Android Developer documentation for more info about localization.

## Example

To learn how you can change string values, let's go through an example. The image below shows the default connection prompt dialog text in English:

![Original string](/docs/resources/img/en-us/noversion?doc_id=images%2Fandroid_strings_dialog_start_session.png&folder=service_sdk_android)

You can change the title and body of this dialog by changing the sos\_title and the sos\_connect\_prompt strings in the strings.xml file in the values folders for your locale (values-en/ for English):

```

```

Now, whenever you start a session you see the updated dialog text:

![Modified string](/docs/resources/img/en-us/noversion?doc_id=images%2Fandroid_strings_dialog_string_override.png&folder=service_sdk_android)

## Code Examples

```
<!-- other string resources omitted -->

<string name="sos_title">Live Help</string>
<string name="sos_connect_prompt">
  We can connect you with an agent who can troubleshoot your problems</string>
```
