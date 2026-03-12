---
title: "Create a Snippet Settings File for an Experience Site"
domain: snapins-web-dev
topic: create-a-snippet-settings-file-for-an-experience-site
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:36:19.487Z
estimatedTokens: 1330
keywords: [Snippet, Settings, File, Experience, Site, Take, snippet-only, extra, pre-chat, configuration, direct-to-button, routing, JavaScript, upload, resource]
---

# Create a Snippet Settings File for an Experience Site

> Take your snippet-only settings like extra pre-chat configuration or direct-to-button
    routing to your Experience site. Create a JavaScript file and upload it as a static resource
    that you reference in your Embedded Chat component settings.

# Create a Snippet Settings File for an Experience Site

Take your snippet-only settings like extra pre-chat configuration or direct-to-button routing to your Experience site. Create a JavaScript file and upload it as a static resource that you reference in your Embedded Chat component settings.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=snapins_web_dev)

#### Important

The legacy chat product is in maintenance-only mode, and we won't continue to build new features. You can continue to use it, but we no longer recommend that you implement new chat channels. Instead, you can modernize your customer communication with [Messaging for In-App and Web](https://help.salesforce.com/s/articleView?id=service.miaw_intro_landing.htm&type=5&language=en_US). Messaging offers many of the [chat features that you](https://help.salesforce.com/s/articleView?id=service.miaw_chat_vs_messaging.htm&type=5&language=en_US) love plus asynchronous conversations that can be picked back up at any time.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=snapins_web_dev)

#### Note

Automated chat invitations are available in Experience sites using static resources (see [Chat Code Settings to Experience Sites](https://help.salesforce.com/articleView?id=embedded_chat_communities_code_settings.htm&language=en_US)).

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=snapins_web_dev)

#### Note

In this file, you can’t set pre-chat fields to fill in for logged-in users. Use the Fill-in pre-chat fields option in your Embedded Chat component settings.

## 1\. Create a Snippet Settings File Using JavaScript

In your JavaScript file, define the settings you want to use in your site’s chat window.

| Setting Name | To Specify in Your File |
| --- | --- |
| Auto-open for post chat | embedded_svc.snippetSettingsFile.autoOpenPostChat = true; // or false |
| Avatar image URL | embedded_svc.snippetSettingsFile.avatarImgURL = ''; |
| Chatbot (Einstein Bots) image URL | embedded_svc.snippetSettingsFile.chatbotAvatarImgURL = ''; |
| Company logo image URL | embedded_svc.snippetSettingsFile.smallCompanyLogoImgURL = ''; |
| Direct-to-button routing | embedded_svc.snippetSettingsFile.directToButtonRouting = function(prechatFormData) {}; |
| External scripts | embedded_svc.snippetSettingsFile.externalScripts = []; |
| External styles | embedded_svc.snippetSettingsFile.externalStyles = []; |
| Extra pre-chat form details | embedded_svc.snippetSettingsFile.extraPrechatFormDetails = []; |
| Extra pre-chat information | embedded_svc.snippetSettingsFile.extraPrechatInfo = []; |
| Pre-chat background image URL | embedded_svc.snippetSettingsFile.prechatBackgroundImgURL = ''; |
| Routing order | embedded_svc.snippetSettingsFile.fallbackRouting = []; |
| Waiting state background image URL | embedded_svc.snippetSettingsFile.waitingStateBackgroundImgURL = ''; |

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=snapins_web_dev)

#### Important

Your settings are applied first from the Embedded Chat component settings in the Experience Builder, then from your JavaScript file, then from Setup. For example:

-   If you set an avatar image in your JavaScript file but leave the setting blank in Setup, the image you set in your JavaScript file displays.
-   Let’s say you include an agent avatar in Setup but don’t specify one in your Embedded Chat component settings or in your JavaScript file. Then the image you included in Setup displays.

## 2\. Upload Your File to Static Resources

Upload your file as a static resource in Setup. If you can’t access Setup, ask your Salesforce admin for help.

When you upload your file, make sure that you:

-   Select Public for the cache control.
-   Give it a name that’s easy to remember and type. You use the static resource name, not the file name, to reference the file from the Embedded Chat component settings.

## 3\. Reference Your File in Your Embedded Chat Component Settings

In the Experience Builder, enter the static resource name (not the file name) in the **Snippet Settings File** field. If you can’t access the Experience Builder, ask your Salesforce admin for help.

For example, if your JavaScript file is called SnapInCodeSnippetSettings.js and you named it SnippetSettings in your static resources, enter SnippetSettings in the **Snippet Settings File** field.

## Example of a Snippet Settings File

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=snapins_web_dev)

#### Note

This example doesn’t use real URLs, file names, user IDs, button IDs, or email addresses. Enter your own information if you copy parts of this example for your own snippet settings file.

```

```

## Updating Your Snippet Settings File

When you change your JavaScript file, follow these steps. They help you to ensure that you don’t have to regenerate your Embedded Service code snippet or edit your Embedded Chat component settings.

1.  Go to Static Resources in Setup.
2.  Next to your static resource for your old JavaScript file, click **Edit**.
3.  Upload your updated JavaScript file.
4.  Click **Save**.

Your static resource name doesn’t change, so you don’t have to modify any additional settings.

## Code Examples

```
window._snapinsSnippetSettingsFile = (function() {
console.log("Snippet settings file loaded.");	// Logs that the snippet settings file was loaded successfully

embedded_svc.snippetSettingsFile.avatarImgURL = 'https://yourwebsite.here/avatar.jpg';
embedded_svc.snippetSettingsFile.smallCompanyLogoImgURL = 'https://yourwebsite.here/company_logo.png';
embedded_svc.snippetSettingsFile.prechatBackgroundImgURL = 'https://yourwebsite.here/prechat_background.jpg';
embedded_svc.snippetSettingsFile.waitingStateBackgroundImgURL = 'https://yourwebsite.here/waiting_background.png';
embedded_svc.snippetSettingsFile.headerBackgroundURL = 'https://yourwebsite.here/header_background.jpg';
embedded_svc.snippetSettingsFile.chatbotAvatarImgURL = 'https://yourwebsite.here/bot_avatar.jpg';
embedded_svc.snippetSettingsFile.autoOpenPostChat = true;

embedded_svc.snippetSettingsFile.externalScripts = ['my_scripts'];
embedded_svc.snippetSettingsFile.externalStyles = ['my_styles'];

embedded_svc.snippetSettingsFile.directToButtonRouting = function(prechatFormData) {
if(prechatFormData[1].value === "Computer") {
console.log("direct to button routing initiated.");
alert("Alert: direct to button routing initiated!");
return "BUTTONIDHERE";
}
}

embedded_svc.snippetSettingsFile.fallbackRouting = ['USERIDHERE', 'BUTTONIDHERE', 'USERID_BUTTONID'];


embedded_svc.snippetSettingsFile.extraPrechatFormDetails = [{"label":"FirstName","value":"John","displayToAgent":true},
{"label":"LastName","value":"Doe","displayToAgent":true},
{"label":"Email","value":"john.doe@salesforce.com","displayToAgent":true}];

embedded_svc.snippetSettingsFile.extraPrechatInfo = [{
"entityName": "Contact",
"showOnCreate": true,
"linkToEntityName": "Case",
"linkToEntityField": "ContactId",
"saveToTranscript": "ContactId",
"entityFieldMaps" : [{
"doCreate":true,
"doFind":true,
"fieldName":"FirstName",
"isExactMatch":true,
"label":"First Name"
}, {
"doCreate":true,
"doFind":true,
"fieldName":"LastName",
"isExactMatch":true,
"label":"Last Name"
}, {
"doCreate":true,
"doFind":true,
"fieldName":"Email",
"isExactMatch":true,
"label":"Email"
}],
}, {
"entityName":"Case",
"showOnCreate": true,
"saveToTranscript": "CaseId",
"entityFieldMaps": [{
"isExactMatch": false,
"fieldName": "Subject",
"doCreate": true,
"doFind": false,
"label": "Issue"
}, {
"isExactMatch": false,
"fieldName": "Status",
"doCreate": true,
"doFind": false,
"label": "Status"
}, {
"isExactMatch": false,
"fieldName": "Origin",
"doCreate": true,
"doFind": false,
"label": "Origin"
}]
}];
})();
```
