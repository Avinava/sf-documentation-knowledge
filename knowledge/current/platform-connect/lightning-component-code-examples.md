---
title: "Lightning Component Code Examples"
domain: platform-connect
topic: lightning-component-code-examples
apiVersion: 67.0
release: summer-26-v67
docType: example
lastCollected: 2026-03-12T09:35:27.222Z
estimatedTokens: 1106
keywords: [Lightning, Component, Code, Examples, show, how, <force, canvasApp>, applicationName, developerName, namespacePrefix, Detail, Standard]
---

# Lightning Component Code Examples

> The following examples show how to reference a <force:canvasApp> component using applicationName, developerName, and
            namespacePrefix.

# Lightning Component Code Examples

The following examples show how to reference a <force:canvasApp> component using applicationName, developerName, and namespacePrefix.

<force:canvasApp> represents a canvas app that's embedded in a Lightning component. It provides attributes and event handlers that you can use to customize the canvas app. Sfdc.canvas is not supported for use with Lightning components. For more information, see the [<force:canvasApp> reference documentation](https://developer.salesforce.com/docs/component-library/bundle/force:canvasApp/specification).

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=platform_connect)

#### Note

When possible, use developerName instead of applicationName. The developerName (also called the API name) is the permanent name assigned to a Connected App when you create a canvas app. You can change the applicationName, which can break Aura components that use an outdated name.

## Object Detail Page

This example displays a canvas app on an Account page using the applicationName and namespacePrefix attributes of <force:canvasApp>.

In myCanvasApp.cmp, we first define an Aura attribute called canvasParameters. We use this attribute to pass a recordId into the canvas app. Next, we define an init handler, which invokes the action method doInit when the component is initialized. In <force:canvasApp>, we set the size of the canvas app in pixels.

```

```

In myCanvasAppController.js, the doInit method sets the recordId in the canvasParameters attribute.

```

```

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=platform_connect)

#### Important

When your code has dependencies that require a prior action to complete, don’t call dependent actions until the earlier action completes. For example, render a dependent element conditionally, based on the result of the earlier action being available. Or call the dependent action from the earlier action’s callback function. This ensures that the dependent call isn’t made until after the earlier call completes. See “Hidden Dependencies in a Canvas Component” in [Manage Synchronous Action Dependencies](https://developer.salesforce.com/docs/atlas.en-us.260.0.lightning.meta/lightning/controllers_server_actions_manage_dependencies.htm) in the Lightning Aura Components Developer Guide.

## Standard Page

This example displays a canvas app in an Aura component using the developerName and namespacePrefix attributes of <apex:canvasApp>. The code specifies the size of the canvas app to be 1000 pixels high and 800 pixels wide. It passes three custom parameters to the canvas app.

```

```

#### See Also

-   [Canvas SDK](atlas.en-us.platform_connect.meta/platform_connect/canvas_framework_using_sdk.htm "Canvas is a set of tools that enable you to integrate your apps within Salesforce. This framework includes an SDK that you can use to authenticate your app and retrieve data from Salesforce.")

-   [Canvas Apps and Visualforce Pages](atlas.en-us.platform_connect.meta/platform_connect/canvas_framework_using_vf_intro.htm)

-   [Canvas Apps in a Page Layout or a Mobile Card](atlas.en-us.platform_connect.meta/platform_connect/canvas_framework_using_pl_intro.htm "You can add a canvas app to a page layout for any standard or custom object. For the Canvas Apps category to appear in the palette when you edit a page layout, you must set the canvas app location to Layouts and Mobile Cards when you create the canvas app in the Salesforce application.")

-   [Canvas Apps in the Publisher](atlas.en-us.platform_connect.meta/platform_connect/canvas_apps_in_publisher.htm)

-   [Canvas Apps in the Chatter Feed](atlas.en-us.platform_connect.meta/platform_connect/canvas_apps_in_chatter_feed.htm)

-   [Canvas in the Salesforce Mobile App](atlas.en-us.platform_connect.meta/platform_connect/canvas_apps_in_salesforce1.htm)

-   [Customizing Your App Lifecycle](atlas.en-us.platform_connect.meta/platform_connect/canvas_customizing_app_lifecycle.htm "By providing a custom Apex class, you can control the context information that’s sent to your canvas app and add custom behavior when your app is rendered.")

-   [*Lightning Aura Components Developer Guide*: Manage Synchronous Action Dependencies](https://developer.salesforce.com/docs/atlas.en-us.260.0.lightning.meta/lightning/controllers_server_actions_manage_dependencies.htm)

## Code Examples

```
<!-- myCanvasApp.cmp file -->
<aura:component implements="flexipage:availableForAllPageTypes, force:hasRecordId">
    <aura:attribute name="canvasParameters" type="string" />
    <aura:handler name="init" value="{!this}" action="{!c.doInit}"/>

    <aura:if isTrue="{!v.canvasParameters}">
        <force:canvasApp developerName="Test_Inline_Aura" 
            namespacePrefix="testorg"
            height="400px" width="750px"
            parameters="{!v.canvasParameters}"/>
    </aura:if>

</aura:component>
```

```
// myCanvasAppController.js
({
    doInit : function(cmp, evt, helper) {
        var recordId = cmp.get("v.recordId");
        cmp.set("v.canvasParameters", JSON.stringify({
            recordId: recordId
        }));
    }
})
```

```
<aura:component>

    <force:canvasApp developerName="Test_Standard_Aura" 
        namespacePrefix="testorg" height="1000px" width="800px" 
        parameters='{"p1":"value1", "p2":"value2", "p3":"value3"}'/>

</aura:component>
```

## Related Topics

- Canvas SDK (atlas.en-us.platform_connect.meta/platform_connect/canvas_framework_using_sdk.htm)
- Canvas Apps and Visualforce Pages (atlas.en-us.platform_connect.meta/platform_connect/canvas_framework_using_vf_intro.htm)
- Canvas Apps in a Page Layout or a Mobile Card (atlas.en-us.platform_connect.meta/platform_connect/canvas_framework_using_pl_intro.htm)
- Canvas Apps in the Publisher (atlas.en-us.platform_connect.meta/platform_connect/canvas_apps_in_publisher.htm)
- Canvas Apps in the Chatter Feed (atlas.en-us.platform_connect.meta/platform_connect/canvas_apps_in_chatter_feed.htm)
- Canvas in the Salesforce Mobile App (atlas.en-us.platform_connect.meta/platform_connect/canvas_apps_in_salesforce1.htm)
- Customizing Your App Lifecycle (atlas.en-us.platform_connect.meta/platform_connect/canvas_customizing_app_lifecycle.htm)
