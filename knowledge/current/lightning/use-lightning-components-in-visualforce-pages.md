---
title: "Use Lightning Components in Visualforce Pages"
domain: lightning
topic: use-lightning-components-in-visualforce-pages
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:48.498Z
estimatedTokens: 1385
keywords: [Lightning, Components, Visualforce, Pages, Add, Aura, combine, features, solutions, Implement, new, functionality, JavaScript, Library, App]
---

# Use Lightning Components in Visualforce Pages

> Add Aura components to your Visualforce pages to combine features that
      use both solutions. Implement new functionality using Aura components and then use it with
      existing Visualforce pages.

# Use Lightning Components in Visualforce Pages

Add Aura components to your Visualforce pages to combine features that use both solutions. Implement new functionality using Aura components and then use it with existing Visualforce pages.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=lightning)

#### Important

Lightning Components for Visualforce is based on Lightning Out (Beta), a powerful and flexible feature you can use to embed Aura and Lightning web components into almost any web page. When used with Visualforce, some of the details become simpler. For example, you don’t need to deal with authentication, and you don’t need to configure a Connected App.

In other ways, using Lightning Components for Visualforce is identical to using Lightning Out. See [Use Components Outside Salesforce with Lightning Out (Beta)](https://developer.salesforce.com/docs/platform/lwc/guide/lightning-out.html "HTML (New Window)") in the Lightning Web Components Developer Guide.

There are three steps to add Aura components to a Visualforce page.

1.  Add the Lightning Components for Visualforce JavaScript library to your Visualforce page using the <apex:includeLightning/> component.
2.  Create and reference a Lightning Out app that declares your component dependencies.
3.  Write a JavaScript function that creates the component on the page using $Lightning.createComponent().

## Add the Lightning Components for Visualforce JavaScript Library

Add <apex:includeLightning/> at the beginning of your page. This component loads the JavaScript file used by Lightning Components for Visualforce.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=lightning)

#### Important

The Lightning Components for Visualforce JavaScript library loads from the org that the Visualforce page is in, so your Lightning Out app must exist in the same org as the Visualforce page.

## Create and Reference a Lightning Out App

To use Lightning Components for Visualforce, define component dependencies by referencing a Lightning Out app. This app is globally accessible and extends ltng:outApp. The app declares dependencies on any Lightning component that it uses.

Here’s an example of a Lightning Out app named lcvfTest.app. The app uses the <aura:dependency> tag to indicate that it uses the standard Lightning component lightning:button.

```

```

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=lightning)

#### Note

Extending from ltng:outApp adds SLDS resources to the page so that your Lightning components can be styled with the Salesforce Lightning Design System (SLDS). If you don’t want SLDS resources added to the page, extend from ltng:outAppUnstyled instead.

To reference this app on your page, use this JavaScript code, where theNamespace is the namespace prefix for the app. That is, either your org’s namespace or the namespace of the managed package that provides the app.

```

```

If the app is defined in your org (that is, not in a managed package), you can use the default “c” namespace instead, as shown in the next example. If your org doesn’t have a namespace defined, you *must* use the default namespace.

For details about creating a Lightning Out app, see [Lightning Out Dependencies](https://developer.salesforce.com/docs/platform/lwc/guide/lightning-out-dependencies.html "HTML (New Window)") in the Lightning Web Components Developer Guide.

## Creating a Component on a Page

Finally, add your top-level component to a page using $Lightning.createComponent(String type, Object attributes, String domLocator, function callback). This function is similar to $A.createComponent(), but it includes an additional parameter, domLocator, that specifies the DOM element where you want the component inserted.

Let’s look at a sample Visualforce page that creates a lightning:button using the lcvfTest.app from the previous example.

```

```

The $Lightning.createComponent() call creates a button with a “Press Me!” label. The button is inserted in a DOM element with the ID “lightning”. After the button is added and active on the page, the callback function is invoked and executes a console.log() statement. The callback receives the component created as its only argument. In this simple example, the button isn't configured to do anything.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=lightning)

#### Important

You can call $Lightning.use() multiple times on a page, but all calls must reference the same Lightning dependency app.

For details about using $Lightning.use() and $Lightning.createComponent(), see [Lightning Out Markup](https://developer.salesforce.com/docs/platform/lwc/guide/lightning-out-markup.html "HTML (New Window)") in the Lightning Web Components Developer Guide.

## Limitations

If a Visualforce page contains an Aura component, you can’t render the Visualforce page as a PDF.

## Browser Third-Party Cookies

Lightning components set cookies in a user’s browser. Because Lightning components and Visualforce are served from different domains, these cookies are “third-party” cookies.

You can use several approaches for enabling Lightning components in Visualforce to work with third-party cookies. See [Enable Browser Third-Party Cookies for Lightning Out](https://developer.salesforce.com/docs/platform/lwc/guide/lightning-out-third-party-cookies.html "HTML (New Window)") in the Lightning Web Components Developer Guide.

## Code Examples

```
<aura:application access="GLOBAL" extends="ltng:outApp"> 
    <aura:dependency resource="lightning:button"/>
</aura:application>
```

```
$Lightning.use("theNamespace:lcvfTest", function() {});
```

```
<apex:page>
    <apex:includeLightning />
    <div id="lightning" />
    <script>
        $Lightning.use("c:lcvfTest", function() {
            $Lightning.createComponent("lightning:button",
                { label : "Press Me!" },
                "lightning",
                function(cmp) {
                    console.log("button was created");
                    // do some stuff
                }
            );
        });
    </script>
</apex:page>
```
