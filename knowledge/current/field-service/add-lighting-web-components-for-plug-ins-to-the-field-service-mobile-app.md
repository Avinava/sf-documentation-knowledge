---
title: "Add Lighting Web Components for Plug-Ins to the Field Service Mobile App"
domain: field-service
topic: add-lighting-web-components-for-plug-ins-to-the-field-service-mobile-app
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T15:47:12.239Z
keywords: [Add, Lighting, Web, Components, Plug-Ins, Field, Service, Mobile, App]
---

# Add Lighting Web Components for Plug-Ins to the Field Service Mobile App

# Add Lighting Web Components for Plug-Ins to the Field Service Mobile App

Enhance the Field Service mobile app by creating Lightning web components (LWCs) for plug-ins.

-   [**Access a Mobile Device’s Biometrics Capabilities**](https://developer.salesforce.com/docs/atlas.en-us.260.0.mobile_offline.meta/mobile_offline/use_biometricsservice.htm) (Mobile and Offline Developer Guide)
    
    A Lightning web component can use a device’s biometrics functionality to prompt a user to confirm their identity. When these biometrics-related actions occur, the result is returned to the Lightning web component that invoked it. Biometrics checks are managed locally on the mobile device, and don't need a network connection. However, BiometricsService requires access to platform-specific APIs that are available only within compatible Salesforce mobile apps.
    
-   [**Scan Documents on a Mobile Device**](https://developer.salesforce.com/docs/atlas.en-us.260.0.mobile_offline.meta/mobile_offline/use_documentscanner.htm) (Mobile and Offline Developer Guide)
    
    A Lightning web component can use a device’s camera and optical character recognition (OCR) to scan documents. When a document is successfully scanned, text data extracted from the scanned document is returned to the Lightning web component that invoked it. DocumentScanner recognizes machine printed text, not handwriting.
    
-   [**Monitor Geofence Regions on a Mobile Device**](https://developer.salesforce.com/docs/atlas.en-us.260.0.mobile_offline.meta/mobile_offline/use_geofencingservice.htm) (Mobile and Offline Developer Guide)
    
    A Lightning web component can use a mobile device’s location features to determine a user’s current location to the user’s proximity to areas that may be of interest, or to perform location-related tasks. The longitude, latitude, and radius define a geofence around the regions of interest. Geofence location is determined locally on the mobile device, and doesn’t need a network connection. However, GeofencingService does require a GPS signal from the device. For Android devices, Google Location Accuracy must be enabled in the system settings. GeofencingService does require access to platform-specific APIs that are available only within compatible Salesforce mobile apps.
    
-   [**Use Location on a Mobile Device**](https://developer.salesforce.com/docs/atlas.en-us.260.0.mobile_offline.meta/mobile_offline/use_locationservice.htm) (Mobile and Offline Developer Guide)
    
    A Lightning web component can use a mobile device’s location features to determine the current location of the device and, by association, the person who is holding it. You can access the device’s current location at a moment in time, or you can subscribe to location changes, and receive updates to the device’s location when it changes significantly. Location is determined locally on the mobile device, and doesn’t need a network connection. LocationService does require access to platform-specific APIs that are available only within compatible Salesforce mobile apps.
    
-   [**Interact with NFC Tags on a Mobile Device**](https://developer.salesforce.com/docs/atlas.en-us.260.0.mobile_offline.meta/mobile_offline/use_nfcservice.htm) (Mobile and Offline Developer Guide)
    
    A Lightning web component can use a device’s native NFC functionality to read, erase, and write to NFC tags. When an NFC operation is successful, the text data extracted from the NFC tag or a simple success message is returned to the Lightning web component that invoked it.
    
-   [**Accept On-Site Payments with Tap-to-Pay**](https://developer.salesforce.com/docs/atlas.en-us.260.0.mobile_offline.meta/mobile_offline/use_paymentsservice.htm) (Mobile and Offline Developer Guide)
    
    A Lightning web component can use a mobile device to let your customers use the Tap-to-Pay capability of the Payments plug-in to pay mobile workers directly. The Field Service mobile app then integrates with Pay Now to connect the Lightning web component to a secure payment system that processes the interaction. The PaymentsService plugin allows Field Service mobile workers to collect payments from their customers using Tap to Pay. This service integrates with Salesforce Payments and Stripe as a payment provider. Tap to Pay is supported on iOS and Android devices with Stripe as the payment provider.
    

-   **[Scan Barcodes on a Mobile Device](atlas.en-us.field_service_dev.meta/field_service_dev/fsl_dev_mobile_lwc_barcode_scanner.htm)**  
    A Lightning web component can use a mobile device’s camera and mobile OS platform features to scan a barcode, such as a UPC symbol or QR code. When a barcode is successfully scanned, the data that was read from the barcode is returned to the Lightning web component that invoked it.
-   **[Capture a Space on a Mobile Device](atlas.en-us.field_service_dev.meta/field_service_dev/fsl_dev_mobile_lwc_space_capture.htm)**  
    Create a Lightning web component (LWC) that uses the AR SpaceCapture plugin to create a 2D or 3D model of a room. The model is created by interactively scanning the physical environment using the device’s Lidar capabilities.