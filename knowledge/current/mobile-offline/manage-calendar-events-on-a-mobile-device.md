---
title: "Manage Calendar Events on a Mobile Device"
domain: mobile-offline
topic: manage-calendar-events-on-a-mobile-device
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:56.884Z
estimatedTokens: 679
keywords: [Manage, Calendar, Events, Mobile, Device, Lightning, web, component, device’s, functionality, calendar-related, actions, occur, event, data]
---

# Manage Calendar Events on a Mobile Device

> A Lightning web component can use a device’s calendar functionality to create, read,
    update, and delete calendar events to and from the device. When these calendar-related actions
    occur, the event data is returned to the Lightning web component that invoked it.

# Manage Calendar Events on a Mobile Device

A Lightning web component can use a device’s calendar functionality to create, read, update, and delete calendar events to and from the device. When these calendar-related actions occur, the event data is returned to the Lightning web component that invoked it.

Calendar events are managed locally on the mobile device, and don’t need a network connection. However, CalendarService requires access to platform-specific APIs that are available only within compatible Salesforce mobile apps.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=mobile_offline)

#### Important

CalendarService does not and cannot function when running in a web browser, whether on a desktop or mobile device.

-   **[CalendarService User Experience](atlas.en-us.mobile_offline.meta/mobile_offline/use_calendarservice_intro.htm)**
    Your component can deliver any user experience you like. There are a number of common calendar-based features where CalendarService might be suitable.
-   **[Use the CalendarService API](atlas.en-us.mobile_offline.meta/mobile_offline/use_calendarservice_in_a_lightning_component.htm)**
    To develop a Lightning web component with calendar-based features, use the CalendarService API as your method for accessing a device’s native calendar functionality.
-   **[CalendarService Example](atlas.en-us.mobile_offline.meta/mobile_offline/use_calendarservice_example.htm)**
    Here’s a basic example of a Lightning web component that displays calendar events and allows the user to perform basic calendar-related functions.
-   **[Compatibility and Requirements](atlas.en-us.mobile_offline.meta/mobile_offline/use_calendarservice_compatibility.htm)**
    CalendarService is a JavaScript module that provides an API to Lightning web components to make mobile hardware and platform (operating system) features available in JavaScript. It requires access to device hardware and device platform APIs. This access is only available when CalendarService runs within a compatible Salesforce mobile app. **It does not and cannot function when running in a standard web browser, whether the browser runs on a desktop or mobile device.**
-   **[Considerations and Limitations](atlas.en-us.mobile_offline.meta/mobile_offline/use_calendarservice_considerations.htm)**
    Keep the following in mind when developing features that use the CalendarService API.

#### See Also

-   [*Lightning Web Components Developer Guide:* CalendarService API](https://developer.salesforce.com/docs/platform/lwc/guide/reference-lightning-calendarservice.html "Lightning Web Components Developer Guide: CalendarService API - HTML (New Window)")

## Related Topics

- CalendarService User Experience (atlas.en-us.mobile_offline.meta/mobile_offline/use_calendarservice_intro.htm)
- Use the CalendarService API (atlas.en-us.mobile_offline.meta/mobile_offline/use_calendarservice_in_a_lightning_component.htm)
- CalendarService Example (atlas.en-us.mobile_offline.meta/mobile_offline/use_calendarservice_example.htm)
- Compatibility and Requirements (atlas.en-us.mobile_offline.meta/mobile_offline/use_calendarservice_compatibility.htm)
- Considerations and Limitations (atlas.en-us.mobile_offline.meta/mobile_offline/use_calendarservice_considerations.htm)
