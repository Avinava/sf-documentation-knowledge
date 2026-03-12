---
title: "Common Navigation Actions"
domain: mobile-offline
topic: common-navigation-actions
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:56.678Z
estimatedTokens: 931
keywords: [Common, Navigation, Actions, aren’t, specific, Salesforce, Depending, situation, LWC, service, special, cases, standard, JavaScript, code]
---

# Common Navigation Actions

> These common navigation actions aren’t specific to Salesforce. Depending on your
    situation, use the LWC navigation service, or in some special cases use standard JavaScript code
    techniques.

# Common Navigation Actions

These common navigation actions aren’t specific to Salesforce. Depending on your situation, use the LWC navigation service, or in some special cases use standard JavaScript code techniques.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=mobile_offline)

#### Important

Differences between desktop and mobile, and between different mobile applications, can affect the behavior of these common navigation actions. Test your navigation thoroughly, on every platform and device onto which you plan to deploy your components.

## Open an Arbitrary URL

Navigate to another web page or URL. The equivalent of clicking a link, or entering a URL into the browser location field.

Don’t use window.open() to open or navigate to a new URL. Instead, use the navigation service to navigate to the URL using a web page PageReference.

```

```

In addition to standard URLs, you can use the navigation service to open other apps or features. See [PageReference Types](https://developer.salesforce.com/docs/platform/lwc/guide/reference-page-reference-type.html) and the deep link documentation for your mobile apps for additional details on the kinds and format of special URL types.

## Close a Modal Quick Action Panel

Close a modal panel opened by a quick action, usually to dismiss or cancel the action.

When used to close or cancel a quick action, this is a special case of the Go Back navigation action. As a result, it’s tempting to use the built-in window.history.back() JavaScript function. This works in some, but not all, contexts.

The correct approach in Lightning Web Components is to fire the CloseActionScreenEvent event, and let the framework take care of closing the panel, disposing of framework resources, and so on. For example:

```

```

Not all Salesforce mobile apps support the CloseActionScreenEvent event. For those mobile apps, use window.history.back() as a work-around.

## Go Back

Navigate back to the previous page, the equivalent of clicking the browser Back button.

This navigation action is so common, it’s built into all browsers. As a result, it generally doesn’t have on screen user interface elements in most web apps. However, Salesforce mobile apps don’t have a Back button in the standard user interface. If you want to provide a button or other UI element to navigate backwards, you’ll need to build it yourself.

The standard method for doing so is to use the window.history.back() JavaScript function that’s available in most browser containers. This function depends on the history mechanism built into the browser, or the web view of a mobile app, where it requires explicit support. As a result, window.history.back() can behave differently across different browsers and mobile apps. It’s not supported on all Salesforce mobile apps.

#### See Also

-   [*Lightning Web Components Developer Guide:* PageReference Types](https://developer.salesforce.com/docs/platform/lwc/guide/reference-page-reference-type.html "Lightning Web Components Developer Guide: PageReference Types - HTML (New Window)")

-   [*Salesforce Help:* Configure Deep Linking for the Salesforce Mobile App](https://help.salesforce.com/s/articleView?id=xcloud.sapp_url_schemes.htm&type=5&language=en_US "Salesforce Help: Configure Deep Linking for the Salesforce Mobile
    App - HTML (New Window)")

-   [*Field Service Developer Guide:* Deep Linking Schema for the Field Service Mobile App](https://developer.salesforce.com/docs/atlas.en-us.260.0.field_service_dev.meta/field_service_dev/fsl_dev_mobile_deep_linking_schema.htm "Field Service Developer Guide: Deep Linking Schema for the Field Service
    Mobile App - HTML (New Window)")

## Code Examples

```
import { NavigationMixin } from "lightning/navigation";
// ...

  navigateToDsc() {
    this[NavigationMixin.Navigate]({
      type: "standard__webPage",
      attributes: {
        "url": "https://developer.salesforce.com"
      },
    });
  }
```

```
import { CloseActionScreenEvent } from "lightning/actions";
// ...

  handleCancelClick(clickEvent) {
    // Close the modal window 
    this.dispatchEvent(new CloseActionScreenEvent());
  }
```
