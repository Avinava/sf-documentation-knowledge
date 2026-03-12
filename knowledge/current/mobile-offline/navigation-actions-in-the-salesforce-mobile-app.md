---
title: "Navigation Actions in the Salesforce Mobile App"
domain: mobile-offline
topic: navigation-actions-in-the-salesforce-mobile-app
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:34:56.688Z
estimatedTokens: 762
keywords: [Navigation, Actions, Salesforce, Mobile, App, programmatic, Lightning, web, components, intended, Plus, Navigate, Quick, Action, Open]
---

# Navigation Actions in the Salesforce Mobile App

> Use these supported programmatic navigation actions in your Lightning web components
        intended for use in Salesforce Mobile App Plus.

# Navigation Actions in the Salesforce Mobile App

Use these supported programmatic navigation actions in your Lightning web components intended for use in Salesforce Mobile App Plus.

Each Salesforce mobile app implements support for the navigation service independently, which results in some differences in available navigation actions. The following PageReference types are supported by the LWC navigation service when used in the Salesforce Mobile App Plus mobile app.

-   standard\_\_quickAction
-   standard\_\_webPage

You can implement a surprising number of different navigation actions with these PageReference types. The following are examples of navigation actions, and the PageReference used to implement them.

## Navigate to a Quick Action

Create a navigation action that opens an LWC-based quick action.

```

```

objectApiName.actionApiName represents the name of the quick action (actionApiName), and the sObject that it’s defined on (objectApiName). The state object provides a way to pass data into the target component. In this example, recordID and objectApiName are public properties defined in the objectApiName.actionApiName quick action’s JavaScript code.

## Open Salesforce Mobile App via Deep Link

Create a navigation action that leaves Mobile App Plus, and opens a specific page in the Salesforce mobile app.

```

```

There’s a wide range of targets available for deep linking into the Salesforce Mobile app. See [Configure Deep Linking for the Salesforce Mobile App](https://help.salesforce.com/s/articleView?id=xcloud.sapp_url_schemes.htm&type=5&language=en_US "HTML (New Window)") in the Salesforce Help for available URL formats.

## Open the Field Service Mobile App via Deep Link

Create a navigation action that leaves Offline App Plus, and opens a specific page in the Field Service mobile app.

```

```

There’s a wide range of targets available for deep linking into the Field Service mobile app. See [Deep Linking Schema for the Field Service Mobile App](https://developer.salesforce.com/docs/atlas.en-us.260.0.field_service_dev.meta/field_service_dev/fsl_dev_mobile_deep_linking_schema.htm "HTML (New Window)") in the Field Service Developer Guide for available URL formats.

## Open Web Page

Create a navigation action that opens a screen that displays an external web page.

```

```

## Open Email App

Create a navigation action that opens the device’s native email client and pre-fills the addressee and subject lines.

```

```

## Open Phone App

Create a navigation action that opens the device’s native phone app, and dials a phone number.

```

```

## Open Message App

Create a navigation action that opens the device’s native SMS or message app, and pre-fills the recipient phone number.

```

```

#### See Also

-   [*Salesforce Help:* Configure Deep Linking for the Salesforce Mobile App](https://help.salesforce.com/s/articleView?id=xcloud.sapp_url_schemes.htm&type=5&language=en_US "Salesforce Help: Configure Deep Linking for the Salesforce Mobile
    App - HTML (New Window)")

## Code Examples

```
{
    "type": "standard__quickAction",
    "attributes": {
        "actionName": `objectApiName.actionApiName` },
        "state": {
            "recordId": "<recordId>",
            "objectApiName": "<objectApiName>"
    }
}
```

```
{
    "type": "standard__webPage",
    "attributes": {
        "url": "salesforce1://sObject/001D000000Jwj9v/view"
    }
}
```

```
{
    "type": "standard__webPage",
    "attributes": {
        "url": `com.salesforce.fieldservice://v1/sObject/${this.recordId}/details`
    }
}
```

```
{
    "type": "standard__webPage",
    "attributes": {
        "url": "https://salesforce.com"
    }
}
```

```
{
    "type": "standard__webPage",
    "attributes": {
        "url": "mailto:help@AcmeSupport.com?subject=Help with Asset"
    }
}
```
