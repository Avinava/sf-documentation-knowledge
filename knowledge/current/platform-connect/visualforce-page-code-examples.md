---
title: "Visualforce
        Page Code Examples"
domain: platform-connect
topic: visualforce-page-code-examples
apiVersion: 67.0
release: summer-26-v67
docType: example
lastCollected: 2026-03-12T09:35:27.317Z
estimatedTokens: 554
keywords: [Visualforce, Code, Examples, display, canvas, app, number, ways, Detail, Standard, Border, Scrolling]
---

# Visualforce
        Page Code Examples

> You can display a canvas app on a Visualforce page in a number of ways.

# Visualforce Page Code Examples

You can display a canvas app on a Visualforce page in a number of ways.

These examples show the different ways to reference the canvas app using applicationName, developerName, and namespacePrefix.

## Object Detail Page

The following code snippet is an example of how to display a canvas app on an Account page. The code specifies the size of the canvas app to be 400 pixels high and 750 pixels wide. This examples specifies the canvas app using the applicationName and namespacePrefix.

```

```

## Standard Page

The following code snippet is an example of how to display a canvas app on a Visualforce page. The code specifies the size of the canvas app to be 1,000 pixels high and 800 pixels wide. In addition, the code passes three custom parameters to the canvas app. This examples specifies the canvas app using the developerName and namespacePrefix.

```

```

## Standard Page with a Border and Scrolling

The following code snippet is an example of how to display a canvas app with some additional UI enhancements on a Visualforce page. The code specifies the size of the canvas app to be 100 pixels high and 500 pixels wide. In addition, the code specifies that there should be a border of 2 pixels around the canvas app and that scrolling should be enabled. This examples specifies the canvas app using only the applicationName (this is only valid in the organization in which the canvas app was created, and if that organization doesn’t have a namespacePrefix.

```

```

#### See Also

-   [Canvas Apps and Visualforce Pages](atlas.en-us.platform_connect.meta/platform_connect/canvas_framework_using_vf_intro.htm)

-   [Visualforce Considerations](atlas.en-us.platform_connect.meta/platform_connect/canvas_app_vf_considerations.htm)

-   [Visualforce Developer's Guide](https://salesforce.com/us/developer/docs/pages/index_Left.htm#StartTopic=Content/pages_compref_canvasApp.htm "Visualforce Developer's Guide - HTML (New Window)")

-   [apex:canvasApp Component](atlas.en-us.platform_connect.meta/platform_connect/canvas_app_vf_component_ref.htm "Use this component to display a canvas app on a Visualforce page. The table below lists the component attributes.")

## Code Examples

```
<apex:page standardController="Account">

    <apex:canvasApp applicationName="Test Inline Visualforce" 
        namespacePrefix="testorg" 
        height="400px" width="750px"/>
</apex:page>
```

```
<apex:page>

    <apex:canvasApp developerName="Test_Standard_Visualforce" 
        namespacePrefix="testorg" height="1000px" width="800px" 
        parameters='{"p1":"value1", "p2":"value2", "p3":"value3"}'/>

</apex:page>
```

```
<apex:page>

    <apex:canvasApp applicationName="Test Scrolling Visualforce" 
        height="100px" width="500px" 
        border="2" scrolling="yes"/>

</apex:page>
```

## Related Topics

- Canvas Apps and Visualforce Pages (atlas.en-us.platform_connect.meta/platform_connect/canvas_framework_using_vf_intro.htm)
- Visualforce Considerations (atlas.en-us.platform_connect.meta/platform_connect/canvas_app_vf_considerations.htm)
- apex:canvasApp Component (atlas.en-us.platform_connect.meta/platform_connect/canvas_app_vf_component_ref.htm)
