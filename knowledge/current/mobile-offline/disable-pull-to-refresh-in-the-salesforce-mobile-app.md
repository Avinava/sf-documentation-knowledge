---
title: "Disable Pull-to-Refresh in the Salesforce Mobile App"
domain: mobile-offline
topic: disable-pull-to-refresh-in-the-salesforce-mobile-app
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:57.187Z
estimatedTokens: 795
keywords: [Disable, Pull-to-Refresh, Salesforce, Mobile, App, pages, accidentally, triggering, cause, loss, data, Disabling, simple, firing, CustomEvent]
---

# Disable Pull-to-Refresh in the Salesforce Mobile App

> Disable pull-to-refresh on pages where accidentally triggering it can cause loss of
        data in the Salesforce mobile app. Disabling pull-to-refresh is as simple as firing a
            CustomEvent. Fire this event in your own
        components, or create a component you can use throughout your Salesforce org.

# Disable Pull-to-Refresh in the Salesforce Mobile App

Disable pull-to-refresh on pages where accidentally triggering it can cause loss of data in the Salesforce mobile app. Disabling pull-to-refresh is as simple as firing a CustomEvent. Fire this event in your own components, or create a component you can use throughout your Salesforce org.

Pull-to-refresh is a long-established convention in mobile apps as a way to reload data appearing on a mobile app screen. It’s the default behavior for nearly all screens in the Salesforce mobile app. However, triggering pull-to-refresh while entering data into a form causes the form to refresh, losing values entered into the form. A custom event lets you disable pull-to-refresh on any screen from within a Lightning web component.

First, create a CustomEvent with the name updateScrollSettings, and a data payload as illustrated here:

```

```

Then fire the event:

```

```

This event has no effect outside the Salesforce mobile app. You can include it on pages that are shared between desktop and mobile without affecting the behavior of Salesforce for your desktop users.

## Faceless DisablePullToRefresh Component

The following example code shows a component that does only one thing: disable pull-to-refresh on any page that includes it in the Salesforce mobile app. This component is “faceless”, in that it doesn’t have a user interface, or any visual effect at all on pages that include it.

Create the component in your org, and then use it anywhere you need to disable pull-to-refresh. You can add it to Lightning Pages, flows, and record pages just by adding this component to your page or layout. You can also add it as a child component to any custom component you create where pull-to-refresh could interfere with your component’s intended behavior.

**Component Metadata**

Adding the correct targets to the component metadata allows it to be used in all contexts where it’s useful.

```

```

**Component Template**

This component has no user interface. Its only purpose is to fire the event that disables pull-to-refresh. As such, the component template is empty.

```

```

**Component Implementation**

The component does one thing: fire the event that disables pull-to-refresh as soon as it’s loaded. It defines a function that fires the event, and calls that function in the connectedCallback lifecycle hook.

```

```

#### See Also

-   [*Lightning Web Components Developer Guide:* XML Configuration File Elements](https://developer.salesforce.com/docs/platform/lwc/guide/reference-configuration-tags.html "Lightning Web Components Developer Guide: XML Configuration File
    Elements - HTML (New Window)")

-   [*Lightning Web Components Developer Guide:* Lifecycle Hooks](https://developer.salesforce.com/docs/platform/lwc/guide/reference-lifecycle-hooks.html "Lightning Web Components Developer Guide: Lifecycle Hooks - HTML (New Window)")

-   [*Lightning Web Components Developer Guide:* Create and Dispatch Events](https://developer.salesforce.com/docs/platform/lwc/guide/events-create-dispatch.html "Lightning Web Components Developer Guide: Create and Dispatch
    Events - HTML (New Window)")

## Code Examples

```
const disable_ptr_event = new CustomEvent("updateScrollSettings", {
    detail: {
        isPullToRefreshEnabled: false
    },
    bubbles: true,
    composed: true
});
```

```
this.dispatchEvent(disable_ptr_event);
```

```
<?xml version="1.0" encoding="UTF-8"?>
<!-- disablePullToRefresh.js-meta.xml -->
<LightningComponentBundle xmlns="http://soap.sforce.com/2006/04/metadata">
    <masterLabel>Disable Pull-to-Refresh (No UI)</masterLabel>
    <description>This component disables "pull to refresh" behavior in the Salesforce Mobile app. 
    Add it to a page, or as a child component in your component. This component has no user 
    interface, and has no effect outside supported mobile apps.</description>
    <apiVersion>54.0</apiVersion>
    <isExposed>true</isExposed>
    <targets>
        <target>lightning__AppPage</target>
        <target>lightning__FlowScreen</target>
        <target>lightning__HomePage</target>
        <target>lightning__RecordAction</target>
        <target>lightning__RecordPage</target>
        <target>lightning__Tab</target>
    </targets>
</LightningComponentBundle>
```

```
<!-- disablePullToRefresh.html -->
<template>
    <!-- This component has no user interface -->
    <!-- It just fires its event, and is done -->
</template>
```

```
// disablePullToRefresh.js
import { LightningElement } from 'lwc';

export default class DocDisablePullToRefresh extends LightningElement {

    // Trigger this component's effect when the component loads
    connectedCallback() {
        this.disablePullToRefresh();
    }

    // Fire the event to disable pull-to-refresh on this page
    // This has an effect only in the Salesforce Mobile and 
    // Mobile Publisher apps
    disablePullToRefresh () {
        // CustomEvent is standard JavaScript. See:
        // https://developer.mozilla.org/en-US/docs/Web/API/CustomEvent/CustomEvent
        const disable_ptr_event = new CustomEvent("updateScrollSettings", {
            detail: {
                isPullToRefreshEnabled: false
            },
            bubbles: true,
            composed: true
        });
        this.dispatchEvent(disable_ptr_event);
    }
}
```
