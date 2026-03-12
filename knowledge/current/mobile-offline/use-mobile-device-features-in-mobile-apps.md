---
title: "Use Mobile Device Features in Mobile Apps"
domain: mobile-offline
topic: use-mobile-device-features-in-mobile-apps
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:34:56.407Z
estimatedTokens: 1737
keywords: [Mobile, Device, Features, Apps, capabilities, let, Lightning, web, component, Access, camera, location, detection, hardware, platform]
---

# Use Mobile Device Features in Mobile Apps

> Mobile capabilities let you use mobile device features from within a
  Lightning web component. Access camera and location detection hardware, and platform features like
  contacts and calendar data, right from your component code. Build Lightning apps that feel like
  native mobile apps using these mobile-specific features.

# Use Mobile Device Features in Mobile Apps

Mobile capabilities let you use mobile device features from within a Lightning web component. Access camera and location detection hardware, and platform features like contacts and calendar data, right from your component code. Build Lightning apps that feel like native mobile apps using these mobile-specific features.

Mobile capabilities are built by Salesforce using the Nimbus framework. Nimbus creates a bridge between Lightning web components and a mobile device’s native operating system and hardware. Nimbus plugins use the Nimbus framework, and are compiled into Salesforce mobile apps, with each plugin providing access to a specific feature area.

Nimbus plugins expose native features to Lightning web components through JavaScript APIs, allowing you to easily access these features in your Lightning web components.

Mobile capabilities built with Nimbus can only be used when your Lightning web component runs in a supported mobile app running on a mobile device. They are built on, and depend on, compiled code included in the mobile app. They **cannot** be used on desktop, or in a mobile web browser.

## Mobile Capabilities Compatibility Summary

Mobile capabilities are supported individually by each Salesforce mobile app. Not every mobile capability is supported in every mobile app. The following table provides a compatibility overview, but see the compatibility topic for each mobile capability for full compatibility details.

| Mobile Capability | Salesforce Mobile | Salesforce Mobile App Plus | Mobile Publisher | Field Service Mobile |
| --- | --- | --- | --- | --- |
| AppReviewService |  |  |  |  |
| BarcodeScanner |  |  |  | See note. |
| BiometricsService |  |  |  |  |
| CalendarService |  | iOS only. |  |  |
| ContactsService |  | iOS only. |  |  |
| DocumentScanner |  |  |  |  |
| GeofencingService |  |  |  |  |
| LocationService | Android only. |  |  |  |
| NFCService |  |  |  |  |
| PaymentsService |  |  |  |  |

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=mobile_offline)

#### Note

The Field Service Mobile app provides an alternative implementation of BarcodeScanner. See [Scan Barcodes on a Mobile Device](https://developer.salesforce.com/docs/atlas.en-us.260.0.field_service_dev.meta/field_service_dev/fsl_dev_mobile_lwc_barcode_scanner.htm) in the Field Service Developer Guide for details.

-   **[Request an App Review on a Mobile Device](atlas.en-us.mobile_offline.meta/mobile_offline/use_appreviewservice.htm)**
    A Lightning web component can use a mobile device to prompt users to rate and submit a review of your app to the app stores (Apple and Google). Their feedback can help improve your app experience, encourage downloads, and improve your app’s discoverability.
-   **[Scan Barcodes on a Mobile Device](atlas.en-us.mobile_offline.meta/mobile_offline/use_barcodescanner.htm)**
    A Lightning web component can use a mobile device’s camera and mobile OS platform features to scan a barcode, such as a UPC symbol or QR code. When a barcode is successfully scanned, the data that was read from the barcode is returned to the Lightning web component that invoked it.
-   **[Access a Mobile Device’s Biometrics Capabilities](atlas.en-us.mobile_offline.meta/mobile_offline/use_biometricsservice.htm)**
    A Lightning web component can use a device’s biometrics functionality to prompt a user to confirm their identity. When these biometrics-related actions occur, the result is returned to the Lightning web component that invoked it.
-   **[Manage Calendar Events on a Mobile Device](atlas.en-us.mobile_offline.meta/mobile_offline/use_calendarservice.htm)**
    A Lightning web component can use a device’s calendar functionality to create, read, update, and delete calendar events to and from the device. When these calendar-related actions occur, the event data is returned to the Lightning web component that invoked it.
-   **[Access and Manage Contacts on a Mobile Device](atlas.en-us.mobile_offline.meta/mobile_offline/use_contactsservice.htm)**
    A Lightning web component can use a mobile device’s contacts features to select contacts from the device's address book or save new contacts to it. When contacts are selected, they’re returned to the Lightning web component that invoked it. Your component can then import the contacts into Salesforce, attach contact data to a record, or otherwise process the contacts as needed. Your component can also take contact information from Salesforce and export it to create a new contact on the device.
-   **[Scan Documents on a Mobile Device](atlas.en-us.mobile_offline.meta/mobile_offline/use_documentscanner.htm)**
    A Lightning web component can use a device’s camera and optical character recognition (OCR) to scan documents. When a document is successfully scanned, text data extracted from the scanned document is returned to the Lightning web component that invoked it. DocumentScanner recognizes printed text and handwritten form factors. However, DocumentScanner provides the most accurate results when scanning printed text compared handwritten text, which varies on the legibility of handwritten characters.
-   **[Monitor Geofence Regions on a Mobile Device](atlas.en-us.mobile_offline.meta/mobile_offline/use_geofencingservice.htm)**
    A Lightning web component can use a mobile device’s location features to determine a user’s current location to the user’s proximity to areas that may be of interest, or to perform location-related tasks. The longitude, latitude, and radius define a geofence around the regions of interest.
-   **[Use Location on a Mobile Device](atlas.en-us.mobile_offline.meta/mobile_offline/use_locationservice.htm)**
    A Lightning web component can use a mobile device’s location features to determine the current location of the device and, by association, the person who is holding it. You can access the device’s current location at a moment in time, or you can subscribe to location changes, and receive updates to the device’s location when it changes significantly.
-   **[Interact with NFC Tags on a Mobile Device](atlas.en-us.mobile_offline.meta/mobile_offline/use_nfcservice.htm)**
    A Lightning web component can use a device’s native NFC functionality to read, erase, and write to NFC tags. When an NFC operation is successful, the text data extracted from the NFC tag or a simple success message is returned to the Lightning web component that invoked it.
-   **[Accept On-Site Payments with Tap-to-Pay](atlas.en-us.mobile_offline.meta/mobile_offline/use_paymentsservice.htm)**
    A Lightning web component can use a mobile device to let your customers use the Tap-to-Pay capability of the Payments plug-in to pay mobile workers directly. The Field Service mobile app then integrates with Pay Now to connect the Lightning web component to a secure payment system that processes the interaction.

## Related Topics

- AppReviewService (atlas.en-us.mobile_offline.meta/mobile_offline/use_appreviewservice_compatibility.htm)
- BarcodeScanner (atlas.en-us.mobile_offline.meta/mobile_offline/use_barcodescanner_compatibility.htm)
- BiometricsService (atlas.en-us.mobile_offline.meta/mobile_offline/use_biometricsservice_compatibility.htm)
- CalendarService (atlas.en-us.mobile_offline.meta/mobile_offline/use_calendarservice_compatibility.htm)
- ContactsService (atlas.en-us.mobile_offline.meta/mobile_offline/use_contactsservice_compatibility.htm)
- DocumentScanner (atlas.en-us.mobile_offline.meta/mobile_offline/use_documentscanner_compatibility.htm)
- GeofencingService (atlas.en-us.mobile_offline.meta/mobile_offline/use_geofencingservice_compatibility.htm)
- LocationService (atlas.en-us.mobile_offline.meta/mobile_offline/use_locationservice_compatibility.htm)
- NFCService (atlas.en-us.mobile_offline.meta/mobile_offline/use_nfcservice_compatibility.htm)
- PaymentsService (atlas.en-us.mobile_offline.meta/mobile_offline/use_paymentsservice_compatibility.htm)
