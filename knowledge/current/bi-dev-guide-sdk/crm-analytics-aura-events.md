---
title: "CRM Analytics Aura Events"
domain: bi-dev-guide-sdk
topic: crm-analytics-aura-events
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:06.916Z
estimatedTokens: 948
keywords: [CRM, Analytics, Aura, Events, Easily, interact, embedded, Dashboard, component, custom, applications, Lightning, Apps, Visualforce, preferred]
---

# CRM Analytics Aura Events

> Easily interact with the embedded CRM Analytics Dashboard component in custom
    applications. Use Aura Events for Lightning Apps, Visualforce, or your preferred development
    environment.

# CRM Analytics Aura Events

Easily interact with the embedded CRM Analytics Dashboard component in custom applications. Use Aura Events for Lightning Apps, Visualforce, or your preferred development environment.

## CRM Analytics Aura Events

wave:assetLoaded

A CRM Analytics asset fires this event when the asset is finished loading. The payload contains the asset type and the asset id. For a CRM Analytics dashboard asset, the event is fired: on the initial load of a dashboard, when a user resets to dashboard to the initial view, and when the user selects a dashboard view. After this event is received, you can safely reapply mandatory filters or resync the dashboard state.

wave:update

Use this event to dynamically set the filter on a CRM Analytics dashboard or interact with the dashboard by dynamically changing the selection. It has four attributes: the unique ID of the CRM Analytics asset on which to apply the filter, the payload, the asset type (currently only dashboard), and the fully qualified developer name of the CRM Analytics dashboard. The payload is a JSON string that identifies the datasets and any dimensions and field values.

wave:selectionChanged

A CRM Analytics dashboard fires this event for consumption by custom Aura components. It provides the following attributes: the ID of the dashboard that fired the event and the payload. The payload object contains the selection information—the name of the step involved when changing the selection and an array of objects representing the current selection. Each object in the array contains one or more attributes based on the selection.

wave:discover

This event sends a global request to identify CRM Analytics dashboard assets. The response is a wave:discoverResponse event. You can include your own parameter in this event that is included in the response payload.

wave:discoverResponse

This event is fired by listening to CRM Analytics dashboard assets in response to the wave:discover event. The payload includes the dashboard identifier, the type of component, the dashboard title, whether the dashboard is still loading, and any optional parameter sent with the request.

wave:pageChange

Use this event to update the CRM Analytics dashboard page that is displayed. It has two attributes: the unique ID of the page to display and the fully qualified developer name of the CRM Analytics dashboard

-   **[CRM Analytics Aura Events - Update Event](atlas.en-us.bi_dev_guide_sdk.meta/bi_dev_guide_sdk/bi_sdk_web_example1.htm)**
    Create a custom component to dynamically set filters in a CRM Analytics dashboard embedded in a Lightning page.
-   **[CRM Analytics Aura Events - SelectionChanged Event](atlas.en-us.bi_dev_guide_sdk.meta/bi_dev_guide_sdk/bi_sdk_web_example2.htm)**
    React to selections in your dashboard and get the row data for the selection.
-   **[CRM Analytics Aura Events - Discover Event](atlas.en-us.bi_dev_guide_sdk.meta/bi_dev_guide_sdk/bi_sdk_web_example_discoverdashboard.htm)**
    This event sends a request to CRM Analytics dashboards to identify their assets.
-   **[CRM Analytics Aura Events - Discover Response Event](atlas.en-us.bi_dev_guide_sdk.meta/bi_dev_guide_sdk/bi_sdk_web_example_discoverresponse.htm)**
    This event provides the response following a request for CRM Analytics dashboards to identify their assets.
-   **[CRM Analytics Aura Events - Page Change Event](atlas.en-us.bi_dev_guide_sdk.meta/bi_dev_guide_sdk/bi_sdk_web_example_pagechange.htm)**
    This event sends a request to CRM Analytics dashboards to change the displayed page.
-   **[CRM Analytics Aura Events - Asset Loaded Event](atlas.en-us.bi_dev_guide_sdk.meta/bi_dev_guide_sdk/bi_sdk_web_example_assetloaded.htm)**
    React to the CRM Analytics asset rendering completion event.

## Related Topics

- CRM Analytics Aura Events - Update Event (atlas.en-us.bi_dev_guide_sdk.meta/bi_dev_guide_sdk/bi_sdk_web_example1.htm)
- CRM Analytics Aura Events - SelectionChanged Event (atlas.en-us.bi_dev_guide_sdk.meta/bi_dev_guide_sdk/bi_sdk_web_example2.htm)
- CRM Analytics Aura Events - Discover Event (atlas.en-us.bi_dev_guide_sdk.meta/bi_dev_guide_sdk/bi_sdk_web_example_discoverdashboard.htm)
- CRM Analytics Aura Events - Discover Response Event (atlas.en-us.bi_dev_guide_sdk.meta/bi_dev_guide_sdk/bi_sdk_web_example_discoverresponse.htm)
- CRM Analytics Aura Events - Page Change Event (atlas.en-us.bi_dev_guide_sdk.meta/bi_dev_guide_sdk/bi_sdk_web_example_pagechange.htm)
- CRM Analytics Aura Events - Asset Loaded Event (atlas.en-us.bi_dev_guide_sdk.meta/bi_dev_guide_sdk/bi_sdk_web_example_assetloaded.htm)
