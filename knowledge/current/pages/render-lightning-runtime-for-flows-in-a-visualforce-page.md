---
title: "Render Lightning Runtime for Flows in a Visualforce Page"
domain: pages
topic: render-lightning-runtime-for-flows-in-a-visualforce-page
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:23.626Z
estimatedTokens: 1046
keywords: [Render, Lightning, Runtime, Flows, Visualforce, embed, flow, renders, Classic, suggests, looks, feels, regular, pages, Salesforce]
---

# Render Lightning Runtime for Flows in a Visualforce Page

> By default, when you embed a flow in a Visualforce page, the flow
    renders in Classic runtime. Like its name suggests, Classic runtime looks
    and feels like regular Visualforce pages and the Salesforce Classic desktop
    experience. To render a flow in Lightning runtime, add the lightning:flow Aura component to your
    Visualforce page.

# Render Lightning Runtime for Flows in a Visualforce Page

By default, when you embed a flow in a Visualforce page, the flow renders in Classic runtime. Like its name suggests, Classic runtime looks and feels like regular Visualforce pages and the Salesforce Classic desktop experience. To render a flow in Lightning runtime, add the lightning:flow Aura component to your Visualforce page.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=pages)

#### Important

Lightning Components for Visualforce is based on Lightning Out (Beta), a powerful and flexible feature you can use to embed Aura and Lightning web components into almost any web page. When used with Visualforce, some of the details become simpler. For example, you don’t need to deal with authentication, and you don’t need to configure a Connected App.

In other ways, using Lightning Components for Visualforce is identical to using Lightning Out. See [Use Components Outside Salesforce with Lightning Out (Beta)](https://developer.salesforce.com/docs/platform/lwc/guide/lightning-out.html "HTML (New Window)") in the Lightning Web Components Developer Guide.

1.  Create a Lightning Out app that declares a dependency on the lightning:flow component. This app is globally accessible and extends ltng:outApp.

    Your Lightning Out app must exist in the same org as the Visualforce page.

2.  To add the Lightning Components for Visualforce JavaScript library to your Visualforce page, use the <apex:includeLightning/> component.
3.  In the Visualforce page, reference the dependency app by using the syntax $Lightning.use("theNamespace:theAppName”, function() {});
4.  Write a JavaScript function that creates the component on the page by using the syntax $Lightning.createComponent(String type, Object attributes, String domLocator, function callback).

## Example

Here’s an example of a Lightning app named lightningOutApp.

```

```

To render a pre-existing flow called myFlowName in Lightning runtime, add lightningOutApp to the Visualforce page. The $Lightning.createComponent() function creates the component and inserts it into a div element called flowContainer. The component passes in initial values for the flow and handles a change in the flow interview status using the onstatuschange event handler.

<apex:page > <html> <head> <apex:includeLightning /> </head> <body class="slds-scope" > <div id="flowContainer" /> <script> var statusChange = function (event) { if(event.getParam("status") === "FINISHED") { // Control what happens when the interview finishes var outputVariables = event.getParam("outputVariables"); var key; for(key in outputVariables) { if(outputVariables\[key\].name === "myOutput") { // Do something with an output variable } } } }; $Lightning.use("c:lightningOutApp", function() { // Create the flow component and set the onstatuschange attribute $Lightning.createComponent("lightning:flow", {"onstatuschange":statusChange}, "flowContainer", function (component) { // Set the input variables var inputVariables = \[ { name : "myInput", type : "String", value : "Hello, world" } \]; // Start an interview in the flowContainer div and // initialize the input variables component.startFlow("myFlowName", inputVariables); } ); }); </script> </body> </html> </apex:page>

#### See Also

-   [*Lightning Aura Components Developer Guide*: Use Lightning Components in Visualforce Pages](https://developer.salesforce.com/docs/atlas.en-us.260.0.lightning.meta/lightning/components_visualforce.htm "Lightning Aura Components Developer Guide: Use
    Lightning Components in Visualforce Pages - HTML (New Window)")

-   [*Lightning Aura Components Developer Guide*: Embed a Flow in a Custom Aura Component](https://developer.salesforce.com/docs/atlas.en-us.260.0.lightning.meta/lightning/components_using_flow_cmp.htm "Lightning Aura Components Developer Guide: Embed a
    Flow in a Custom Aura Component - HTML (New Window)")

-   [*Component Library*: lightning:flow Component](https://developer.salesforce.com/docs/component-library/bundle/lightning:flow/documentation "Component Library: lightning:flow
    Component - HTML (New Window)")

## Code Examples

```apex
<aura:application access="global" extends="ltng:outApp" >
    <aura:dependency resource="lightning:flow"/>
</aura:application>
```
