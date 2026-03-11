---
title: "Using Page References to Open Console Workspace Tabs and
            Subtabs"
domain: service-cloud
topic: using-page-references-to-open-console-workspace-tabs-and-subtabs
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:47:50.315Z
keywords: [Page, References, Open, Console, Workspace, Tabs, Subtabs, LWC, Navigate, URL, Addressable, Component, Aura, Components, See]
---

# Using Page References to Open Console Workspace Tabs and
            Subtabs

# Using Page References to Open Console Workspace Tabs and Subtabs

You can navigate to different page types, including a URL addressable custom component. To make a custom component URL addressable using LWC, use the lightning\_\_UrlAddressable target. To make an Aura component URL addressable, implement the lightning:isUrlAddressable interface on your custom component.

## Use Page References in LWC

You can use a page reference to open different page types in a tab or subtab. This example opens a subtab using [openTab()](atlas.en-us.api_console.meta/api_console/sforce_api_console_lightning_opentab.htm "Opens a new workspace tab. If the tab is already open, the tab is focused.") to display the view page on a specified PersonAccount record.

```

```

## Navigate to a URL Addressable Component in LWC

Making a component URL addressable provides the following benefits for console apps:

-   Future-proofs your apps from changes in URL formats.
-   Generates a user-friendly URL for your tabs.
-   Opens an Aura component as a subtab, even if called from a utility, a hover, or another page.
-   Allows a mechanism to conditionally open a given component more than once or redirect to an already open workspace or subtab using the uid parameter.
    
    ![Warning](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_warning.png&folder=api_console)
    
    #### Warning
    
    Other uses for the uid parameter that are not explicitly outlined in this document are not supported.
    

For example, you have a URL addressable myComponent component, and a workspaceOpenTab component that navigates to the addressable component.

To make myComponent available for navigation, set the <isExposed\> tag to true in the myComponent.js-meta.xml configuration file. The <apiVersion\> tag has no impact on the lightning\_\_UrlAddressable target and can be set to an earlier version.

```

```

myComponent displays the URL and page reference information that the workspaceOpenTab component passes in.

```

```

The component's JavaScript uses the CurrentPageReference wire adapter to return page reference information. In this example, the URL returns https://MyDomainName.my.salesforce.com/lightning/cmp/c\_\_myComponent?c\_\_mystate=value&uid=\_uniqueId\_.

```

```

This workspaceOpenTab has a button that opens the URL addressable component in a new workspace tab. Its .js-meta.xml configuration file includes the lightning\_\_AppPage target only. It assumes that you add the workspaceOpenTab component to a Lightning console app.

```

```

The component's JavaScript calls the [openTab()](atlas.en-us.api_console.meta/api_console/sforce_api_console_lightning_opentab.htm "Opens a new workspace tab. If the tab is already open, the tab is focused.") method from lightning/platformWorkspaceApi. To prevent the app from opening a new tab if the tab with the component is already opened, pass in a uid value to the state object.

```

```

## Use Page References in Aura Components

To create a page reference we can use to open workspace tabs and subtabs, let’s create greetings.cmp, and implement lightning:isUrlAddressable. This component displays “Hello, <name>” where a URL parameter, c\_\_name, provides the name when the component is opened. The component also defines a pageReference that we can use to navigate to it.

```

```

The JavaScript controller greetingsController.js handles URL parameters in the init method and assigns the name attribute using that URL parameter.

```

```

Now let’s create openGreetings.cmp, which includes an input field to set the c\_\_name URL parameter when we open greetings.cmp.

```

```

The controller openGreetingsController.js uses [openSubtab()](atlas.en-us.api_console.meta/api_console/sforce_api_console_lightning_openSubtab.htm "Opens a subtab within a workspace tab. If the subtab is already open, the subtab is focused. This method works only in Lightning console apps.") and sets c\_\_name to the value of the myname input field. You can use the uid parameter to conditionally dedupe tabs and subtabs. Omit the uid to open a new tab or subtab every time.

```

```

Now that we have everything set up, we can test our components by creating a custom tab in Setup for openGreetings.cmp. Add the custom tab to a console app and open the console app. Select the custom tab from the nav menu to open openGreetings.cmp. Enter a name and click “Open Greeting in Subtab.” greetings.cmp opens as a subtab and displays its greeting with the provided name.

#### See Also

-   [*Lightning Web Components Developer Guide*: Basic Navigation](https://developer.salesforce.com/docs/platform/lwc/guide/use-navigate-basic.html)
    
-   [*Lightning Web Components Developer Guide*: pageReference Types](https://developer.salesforce.com/docs/platform/lwc/guide/reference-page-reference-type.html "Lightning Web Components Developer Guide: pageReference Types - HTML (New Window)")
    
-   [*Aura Components Developer Guide*: Navigate Across Your Apps with Page References](https://developer.salesforce.com/docs/atlas.en-us.260.0.lightning.meta/lightning/components_navigation.htm "Aura Components Developer Guide: Navigate Across Your Apps with Page
    References - HTML (New Window)")