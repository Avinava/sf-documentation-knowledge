---
title: "Customize the Minimized Embedded Service UI with Aura
            Components"
domain: snapins-web-dev
topic: customize-the-minimized-embedded-service-ui-with-aura-components
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:36:19.366Z
estimatedTokens: 806
keywords: [Customize, Minimized, Embedded, Service, Aura, Components, user, component, it’s, web, custom]
---

# Customize the Minimized Embedded Service UI with Aura
            Components

> Customize the user interface for the embedded component when it’s minimized on your
        web page using a custom Aura component.

# Customize the Minimized Embedded Service UI with Aura Components

Customize the user interface for the embedded component when it’s minimized on your web page using a custom Aura component.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=snapins_web_dev)

#### Important

The legacy chat product is in maintenance-only mode, and we won't continue to build new features. You can continue to use it, but we no longer recommend that you implement new chat channels. Instead, you can modernize your customer communication with [Messaging for In-App and Web](https://help.salesforce.com/s/articleView?id=service.miaw_intro_landing.htm&type=5&language=en_US). Messaging offers many of the [chat features that you](https://help.salesforce.com/s/articleView?id=service.miaw_chat_vs_messaging.htm&type=5&language=en_US) love plus asynchronous conversations that can be picked back up at any time.

Before you start, make sure that you have an Embedded Service deployment already set up. Next, go to the Developer Console and click **File** | **New** | **Lightning Component**. Enter a name and description for your component and click **Submit**.

1.  Implement the minimized interface.

    Change the opening aura component tag to:

    ```

    ```

    This code implements the lightningsnapin:minimizedUI interface, which makes the component available to select as your minimized component from Embedded Service Setup.

2.  Create the minimized API component.

    ```

    ```

    This code provides an API that you can use to customize the user interface for the minimized component.

3.  Add an initialize aura handler.

    This action gets called when the component is initialized.

    ```

    ```

4.  Add your markup.

    Create your buttons, images, validation, or whatever else you want to create. You have full control over the layout using the fields you specified in Embedded Service Setup.

    Make sure to add a maximize container action so your customers can open the embedded component. We recommend you add the following as a click handler on a button, for example.

    ```

    ```

5.  Add an initialize action in your component controller.

    ```

    ```

6.  Add a handler for maximizing chat from the minimized component.

    Add a click handler to a button element. The customer uses this button to maximize chat.

    ```

    ```

7.  Add a minimized event generic handler to your helper.

    ```

    ```

8.  Save your component and select it from Embedded Service Setup.

    After you save your component, go to Embedded Service Setup and navigate to your chat settings. Your component should be available to select as a custom component for the minimized embedded component.


-   **[Events for the Minimized Chat Window](atlas.en-us.snapins_web_dev.meta/snapins_web_dev/snapins_web_minimized_events.htm)**
    Use the following events in eventHandlerFunction in your minimized Embedded Service Aura component.

#### See Also

-   [Lightning Aura Components Developer Guide](https://developer.salesforce.com/docs/atlas.en-us.260.0.lightning.meta/lightning/intro_framework.htm "Lightning Aura Components Developer Guide - HTML (New Window)")

## Code Examples

```
<aura:component implements="lightningsnapin:minimizedUI">
```

```
<lightningsnapin:minimizedAPI aura:id="minimizedAPI"/>
```

```
<aura:handler name="init" value="{!this}" action="{!c.onInit}" />
```

```
<button onclick=”{!c.handleMaximize}”>
    {!v.message}
</button>
```

```
/**
 * On initialization of this component, register the generic event handler for all the minimized events..
 * 
 * @param cmp - The component for this state.
 * @param evt - The Aura event.
 * @param hlp - The helper for this state.
 */
onInit: function(cmp, evt, hlp) {
   cmp.find(“minimizedAPI”).registerEventHandler(hlp.minimizedEventHandler.bind(hlp, cmp));
},
```

## Related Topics

- Events for the Minimized Chat Window (atlas.en-us.snapins_web_dev.meta/snapins_web_dev/snapins_web_minimized_events.htm)
