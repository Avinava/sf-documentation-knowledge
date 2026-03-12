---
title: "Get Settings from the Embedded Service Code Snippet"
domain: snapins-web-dev
topic: get-settings-from-the-embedded-service-code-snippet
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:36:19.398Z
estimatedTokens: 711
keywords: [Settings, Embedded, Service, Code, Snippet, Aura, components, Chat, button, deployment, assigned, agent, chatbot, avatar, image]
---

# Get Settings from the Embedded Service Code Snippet

> Get settings for use with your Embedded Service Aura components. You can get the Chat
        button ID or deployment ID assigned to your Embedded Service deployment and the agent and
        chatbot avatar image URLs.

# Get Settings from the Embedded Service Code Snippet

Get settings for use with your Embedded Service Aura components. You can get the Chat button ID or deployment ID assigned to your Embedded Service deployment and the agent and chatbot avatar image URLs.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=snapins_web_dev)

#### Important

The legacy chat product is in maintenance-only mode, and we won't continue to build new features. You can continue to use it, but we no longer recommend that you implement new chat channels. Instead, you can modernize your customer communication with [Messaging for In-App and Web](https://help.salesforce.com/s/articleView?id=service.miaw_intro_landing.htm&type=5&language=en_US). Messaging offers many of the [chat features that you](https://help.salesforce.com/s/articleView?id=service.miaw_chat_vs_messaging.htm&type=5&language=en_US) love plus asynchronous conversations that can be picked back up at any time.

Use the Aura method getLiveAgentSettings() to grab the settings that you want to use: liveAgentButtonId, liveAgentDeploymentId, chatbotAvatarImgURL, avatarImgURL.

This example shows you how to use the lightningsnapin:settingsAPI component with a custom pre-chat component. The pre-chat component uses different fields and a CSS class when a specific Chat button is used with the chat window.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=snapins_web_dev)

#### Important

This example isn’t of a complete pre-chat component. We’ve marked where the rest of your code should go in the code comments.

Before you start, make sure that you have an Embedded Service deployment already set up. You should also have a working Embedded Service Aura component before you make any changes based on the Embedded Service deployment settings.

To get started, go to the Developer Console and open one of your Embedded Service Aura components.

1.  Add a line in your component markup file to create the settings API component.

    ```

    ```

2.  In your init handler, use the Aura method getLiveAgentSettings() to grab the settings you want.

    This example customizes the First Name and Last Name fields when a certain Chat button is used by the current chat window by:

    -   Pre-populating the visitor's name as "Anonymous Visitor"
    -   Making the fields read-only
    -   Adding a CSS class called anonymousField

    ```

    ```

3.  In your component CSS file, add a CSS rule for our new anonymousField CSS class.

    ```

    ```

4.  Save your component.

#### See Also

-   [Lightning Aura Components Developer Guide](https://developer.salesforce.com/docs/atlas.en-us.260.0.lightning.meta/lightning/intro_framework.htm "Lightning Aura Components Developer Guide - HTML (New Window)")

## Code Examples

```
<!-- Your pre-chat component's markup file -->
<aura:component implements="lightningsnapin:prechatUI">

    <!-- Contains a method for fetching Chat settings -->
    <lightningsnapin:settingsAPI aura:id="settingsAPI"/>

    <!-- The rest of your custom pre-chat component goes here -->
</aura:component>
```

```
// Your pre-chat component’s controller file
({
    // Your pre-chat component's init handler
    onInit: function(cmp, evt, hlp) {
        // The ID of the Chat button for which you want to customize your pre-chat fields
        var ANONYMOUS_BUTTON_ID = "(your button id here)";

        // Fetch the ID of the Chat button currently in use
        var buttonId = cmp.find("settingsAPI").getLiveAgentSettings().liveAgentButtonId;

        // Get your pre-chat fields. This example assumes that your pre-chat form includes First Name and Last Name fields.
        var prechatFields = cmp.find("prechatAPI").getPrechatFields();
        var prechatFieldComponents = prechatFields.map(function(field) {
            // If the specified button is currently in use, customize the First Name and Last Name fields
            if (buttonId === ANONYMOUS_BUTTON_ID) {
                if (field.label === "First Name") {
                    // Pre-populate the value, make the field read-only, and add a CSS class
                    field.value = "Anonymous";
                    field.readOnly = true;
                    field.className += " anonymousField";
                } else if (field.label === "Last Name") {
                    field.value = "Visitor";
                    field.readOnly = true;
                    field.className += " anonymousField";
                }
            }

            return [
                "ui:inputText",
                {
                    "aura:id": "prechatField",
                    required: field.required,
                    label: field.label,
                    disabled: field.readOnly,
                    maxlength: field.maxLength,
                    class: field.className,
                    value: field.value
                }
            ];
        });

        $A.createComponents(prechatFieldComponents, function(components, status) {
            if (status === "SUCCESS") {
                cmp.set("v.prechatFieldComponents", components);
            }
        });
    },

    // The rest of your component's controller goes here
})
```

```
/* Your pre-chat component's CSS file */

.THIS .anonymousField {
    background-color: rgba(255,0,0,0.3);
}

/* The rest of your component's CSS goes here */
```
