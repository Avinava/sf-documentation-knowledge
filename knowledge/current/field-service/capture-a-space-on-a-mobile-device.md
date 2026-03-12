---
title: "Capture a Space on a Mobile Device"
domain: field-service
topic: capture-a-space-on-a-mobile-device
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:55.518Z
estimatedTokens: 457
keywords: [Capture, Space, Mobile, Device, Create, Lightning, web, component, LWC, uses, SpaceCapture, plugin, create, model, room., created, interactively, scanning, physical, environment]
---

# Capture a Space on a Mobile Device

> Create a Lightning web component (LWC) that uses the AR SpaceCapture plugin to create a
    2D or 3D model of a room. The model is created by interactively scanning the physical
    environment using the device’s Lidar capabilities.

# Capture a Space on a Mobile Device

Create a Lightning web component (LWC) that uses the AR SpaceCapture plugin to create a 2D or 3D model of a room. The model is created by interactively scanning the physical environment using the device’s Lidar capabilities.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=field_service_dev)

#### Note

This AR SpaceCapture plug-in is supported only by iOS devices that have Lidar (iPhone 12 pro+ and iPad Pro and above), and that are running on iOS 16.0+ and iPadOS 16.0+.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=field_service_dev)

#### Note

This AR SpaceCapture plugin is for use only in the Field Service mobile app.

-   **[Use the AR SpaceCapture API](atlas.en-us.field_service_dev.meta/field_service_dev/fsl_dev_mobile_lwc_space_capture_use.htm)**
    To develop an LWC with AR Space Capture features, use the AR SpaceCapture API as your method for accessing a device’s native AR functionality.
-   **[AR SpaceCapture User Experience](atlas.en-us.field_service_dev.meta/field_service_dev/fsl_dev_mobile_lwc_space_capture_user_experience.htm)**
    Your component can deliver any user experience you desire, but you must follow a common flow for any component that calls for an AR SpaceCapture scan.
-   **[AR SpaceCapture Example](atlas.en-us.field_service_dev.meta/field_service_dev/fsl_dev_mobile_lwc_space_capture_example.htm)**
    The component’s HTML template is minimal and includes a button that initiates the room scan.
-   **[AR SpaceCapture API](atlas.en-us.field_service_dev.meta/field_service_dev/fsl_dev_mobile_lwc_space_capture_api.htm)**
    Access a device’s camera and AR capabilities from an LWC.

#### See Also

-   [Apple’s RoomPlan](https://developer.apple.com/augmented-reality/roomplan)

## Related Topics

- Use the AR SpaceCapture API (atlas.en-us.field_service_dev.meta/field_service_dev/fsl_dev_mobile_lwc_space_capture_use.htm)
- AR SpaceCapture User Experience (atlas.en-us.field_service_dev.meta/field_service_dev/fsl_dev_mobile_lwc_space_capture_user_experience.htm)
- AR SpaceCapture Example (atlas.en-us.field_service_dev.meta/field_service_dev/fsl_dev_mobile_lwc_space_capture_example.htm)
- AR SpaceCapture API (atlas.en-us.field_service_dev.meta/field_service_dev/fsl_dev_mobile_lwc_space_capture_api.htm)
