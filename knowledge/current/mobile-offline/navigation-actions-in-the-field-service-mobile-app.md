---
title: "Navigation Actions in the Field Service Mobile App"
domain: mobile-offline
topic: navigation-actions-in-the-field-service-mobile-app
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:34:56.684Z
estimatedTokens: 664
keywords: [Navigation, Actions, Service, Mobile, App, programmatic, Lightning, web, components, intended, Navigate, LWC, Native, Screen, via]
---

# Navigation Actions in the Field Service Mobile App

> Use these supported programmatic navigation actions in your Lightning web components
        intended for use in the Field Service Mobile app.

# Navigation Actions in the Field Service Mobile App

Use these supported programmatic navigation actions in your Lightning web components intended for use in the Field Service Mobile app.

Each Salesforce mobile app implements support for the navigation service independently, which results in some differences in available navigation actions. The following PageReference types are supported by the LWC navigation service when used in the Field Service Mobile app.

-   standard\_\_webPage

You can implement a surprising number of different navigation actions with this PageReference type. The following are examples of navigation actions, and the PageReference used to implement them.

## Navigate from LWC to a Native Screen via Deep Link

Create a navigation action that moves from a LWC to a screen native to the Field Service mobile app.

```

```

There’s a wide range of targets available for deep linking into the Field Service mobile app. See [Deep Linking Schema for the Field Service Mobile App](https://developer.salesforce.com/docs/atlas.en-us.260.0.field_service_dev.meta/field_service_dev/fsl_dev_mobile_deep_linking_schema.htm "HTML (New Window)") in the Field Service Developer Guide for available URL formats.

## Navigate to a Quick Action via Deep Link

Create a navigation action that opens a quick action, including quick actions built with LWCs.

```

```

## Open Salesforce Mobile App via Deep Link

Create a navigation action that leaves the Field Service mobile app, and opens a specific page in the Salesforce mobile app.

```

```

See [Configure Deep Linking for the Salesforce Mobile App](https://help.salesforce.com/s/articleView?id=xcloud.sapp_url_schemes.htm&type=5&language=en_US "HTML (New Window)") for available URL formats.

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

-   [*Field Service Developer Guide:* Deep Linking Schema for the Field Service Mobile App](https://developer.salesforce.com/docs/atlas.en-us.260.0.field_service_dev.meta/field_service_dev/fsl_dev_mobile_deep_linking_schema.htm "Field Service Developer Guide: Deep Linking Schema for the Field Service
    Mobile App - HTML (New Window)")

## Code Examples

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
        "url": `com.salesforce.fieldservice://v1/sObject/${this.recordId}/quickaction/<api_name>`
    }
}
```

```
{
    "type": "standard__webPage",
    "attributes": {
        "url": "salesforce1://sObject/WorkOrder/home"
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
