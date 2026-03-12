---
title: "Customize the Pre-Chat Page UI with Aura Components"
domain: snapins-web-dev
topic: customize-the-pre-chat-page-ui-with-aura-components
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:36:19.379Z
estimatedTokens: 714
keywords: [Customize, Pre-Chat, Aura, Components, layout, buttons, images, validation, any, part, user, custom, component]
---

# Customize the Pre-Chat Page UI with Aura Components

> Customize the fields, layout, buttons, images, validation, or any other part of the
        user interface for pre-chat using a custom Aura component.

# Customize the Pre-Chat Page UI with Aura Components

Customize the fields, layout, buttons, images, validation, or any other part of the user interface for pre-chat using a custom Aura component.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=snapins_web_dev)

#### Important

The legacy chat product is in maintenance-only mode, and we won't continue to build new features. You can continue to use it, but we no longer recommend that you implement new chat channels. Instead, you can modernize your customer communication with [Messaging for In-App and Web](https://help.salesforce.com/s/articleView?id=service.miaw_intro_landing.htm&type=5&language=en_US). Messaging offers many of the [chat features that you](https://help.salesforce.com/s/articleView?id=service.miaw_chat_vs_messaging.htm&type=5&language=en_US) love plus asynchronous conversations that can be picked back up at any time.

Before you start, make sure that you have an Embedded Service deployment with pre-chat already set up. Next, go to the Developer Console and click **File** | **New** | **Lightning Component**. Enter a name and description for your component and click **Submit**.

1.  Implement the pre-chat interface.

    Change the opening aura component tag to:

    ```

    ```

    This code implements the lightningsnapin:prechatUI interface, which makes the component available to select as your pre-chat page from Embedded Service Setup.

2.  Create the pre-chat API component.

    ```

    ```

    This code provides an API that you can use to customize the user interface for the pre-chat page.

3.  Add an initialize aura handler.

    This action gets called when the component is initialized.

    ```

    ```

    ![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=snapins_web_dev)

    #### Note

    There’s a separate handler for when the component renders.

4.  Add your markup.

    Create your buttons, images, validation, or whatever else you want to create. You have full control over the layout using the fields you specified in Embedded Service Setup.

5.  Add an initialize action in your component controller.

    ```

    ```

6.  Add a handler for starting a chat.

    Add a click handler to a button element. The customer uses this button to request a chat.

    ```

    ```

7.  Save your component and select it from Embedded Service Setup.

    After you save your component, go to Embedded Service Setup and navigate to your chat settings. Your component should be available to select as a custom component for your pre-chat page.


#### See Also

-   [Lightning Aura Components Developer Guide](https://developer.salesforce.com/docs/atlas.en-us.260.0.lightning.meta/lightning/intro_framework.htm "Lightning Aura Components Developer Guide - HTML (New Window)")

## Code Examples

```
<aura:component implements="lightningsnapin:prechatUI">
```

```
<lightningsnapin:prechatAPI aura:id="prechatAPI"/>
```

```
<aura:handler name="init" value="{!this}" action="{!c.onInit}" />
```

```
/**
 * On initialization of this component, set the prechatFields attribute and render prechat fields.
 * 
 * @param cmp - The component for this state.
 * @param evt - The Aura event.
 * @param hlp - The helper for this state.
 */
onInit: function(cmp, evt, hlp) {
   // Get prechat fields defined in setup using the prechatAPI component.
   var prechatFields = cmp.find("prechatAPI").getPrechatFields();

   // Render your fields
},
```

```
/**
 * Function to start a chat request (by accessing the chat API component)
 *
 * @param cmp - The component for this state
 */
onStartButtonClick: function(cmp) {
    // Make an array of field objects for the library.
    var fields = // Get your prechat fields.
        
    // If the prechat fields pass validation, start a chat.
    if(cmp.find("prechatAPI").validateFields(fields).valid) {
        cmp.find("prechatAPI").startChat(fields);
    } else {
        console.warn("Prechat fields did not pass validation!");
    }
},
```
