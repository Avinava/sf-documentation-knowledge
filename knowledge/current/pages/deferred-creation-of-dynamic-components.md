---
title: "Deferred Creation of Dynamic Components"
domain: pages
topic: deferred-creation-of-dynamic-components
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:23.438Z
estimatedTokens: 734
keywords: [Deferred, Creation, Dynamic, Components, Apex, component, executed, load, time, any, action, that’s, defined, run, invokeAfterAction]
---

# Deferred Creation of Dynamic Components

> The Apex method that defines a dynamic component is by default executed at page load
        time, before any action method that’s defined for the page is run. Set the invokeAfterAction attribute of a dynamic component to
            true to wait for page actions to be completed
        before the method that creates the dynamic component runs. This enables you to design
        dynamic components that change depending on the result of, for example, a page
        initialization action or a callout.

# Deferred Creation of Dynamic Components

The Apex method that defines a dynamic component is by default executed at page load time, before any action method that’s defined for the page is run. Set the invokeAfterAction attribute of a dynamic component to true to wait for page actions to be completed before the method that creates the dynamic component runs. This enables you to design dynamic components that change depending on the result of, for example, a page initialization action or a callout.

Here’s a page that has a single dynamic component, which is created after the page’s action method, pageActionUpdateMessage, is completed.

```

```

Here’s the associated controller that provides the dynamic component definition, and illustrates the effect of the invokeAfterAction attribute.

```

```

With the default behavior for dynamic components, the msgText value that’s set in the constructor is displayed by the dynamic component. Setting invokeAfterAction="true" on the dynamic component changes that behavior. The page waits for the pageActionUpdateMethod to be completed and *then* creates the dynamic component, and so the component displays the value for msgText that’s set in the pageActionUpdateMessage action method instead.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=pages)

#### Note

The invokeAfterAction attribute is available for dynamic components in pages set to API version 31.0 or later.

## Deferred Creation of Dynamic Components and Other Actions

invokeAfterAction="true" affects dynamic components immediately at page load time, because that’s when page actions run. Setting invokeAfterAction="true" reverses the order of component creation and *any* action method on the page. That is, the order of execution is changed for action methods on all of the following components.

-   <apex:actionFunction\>
-   <apex:actionPoller\>
-   <apex:actionSupport\>
-   <apex:commandButton\>
-   <apex:commandLink\>
-   <apex:page\>

When invokeAfterAction="false" is set on a dynamic component, the order of execution is as follows. This is the default behavior for dynamic components.

1.  Invoke the dynamic component’s creation method, which constructs the component.
2.  Invoke the action method.
3.  Rerender the page.

When invokeAfterAction="true" is set on a dynamic component, the order of execution is as follows.

1.  Invoke the action method.
2.  Invoke the dynamic component’s creation method, which constructs the component.
3.  Rerender the page.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=pages)

#### Note

In the second case, if the action method returns a PageReference, Visualforce will redirect the request to the new page, and the dynamic component’s creation method won’t be run. To avoid a possible order-of-execution bug, it’s a best practice that methods that create dynamic components don’t have side effects.

## Code Examples

```
<apex:page controller="DeferredDynamicComponentController" 
    action="{!pageActionUpdateMessage}" showHeader="false">
    
    <apex:dynamicComponent componentValue="{!dynamicComp}" invokeAfterAction="true"/>
  
</apex:page>
```

```apex
public class DeferredDynamicComponentController {

    private String msgText { get; set; }

    public DeferredDynamicComponentController() {  
        this.msgText = 'The controller is constructed.';
    }
    
    public Component.Apex.OutputPanel getDynamicComp() {

        // This is the component to return
        Component.Apex.OutputPanel dynOutPanel= new Component.Apex.OutputPanel();
        dynOutPanel.layout = 'block';
        
        // Child component to hold the message text
        Component.Apex.OutputText msgOutput = new Component.Apex.OutputText();
        msgOutput.value = this.msgText;
        dynOutPanel.childComponents.add(msgOutput);
        
        return dynOutPanel;
    }
    
    public Object pageActionUpdateMessage() {
        this.msgText= 'The page action method has been run.';
        return null;
    }
}
```
