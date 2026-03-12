---
title: "Scan Barcodes on a Mobile Device"
domain: mobile-offline
topic: scan-barcodes-on-a-mobile-device
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:56.781Z
estimatedTokens: 1168
keywords: [Scan, Barcodes, Mobile, Device, Lightning, web, component, device’s, camera, platform, features, barcode, UPC, symbol, code]
---

# Scan Barcodes on a Mobile Device

> A Lightning web component can use a mobile device’s camera and mobile OS platform
  features to scan a barcode, such as a UPC symbol or QR code. When a barcode is successfully
  scanned, the data that was read from the barcode is returned to the Lightning web component that
  invoked it.

# Scan Barcodes on a Mobile Device

A Lightning web component can use a mobile device’s camera and mobile OS platform features to scan a barcode, such as a UPC symbol or QR code. When a barcode is successfully scanned, the data that was read from the barcode is returned to the Lightning web component that invoked it.

Scanning is performed locally on the mobile device, and doesn’t need a network connection. BarcodeScanner does require access to platform-specific APIs that are available only within compatible Salesforce mobile apps.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=mobile_offline)

#### Important

BarcodeScanner does not and cannot function when running in a web browser, whether running on a desktop or mobile device.

BarcodeScanner provides to your component a string value of the data encoded in a scanned barcode. It doesn't attempt to interpret or process the decoded value.

-   **[Barcode Scanning User Experience](atlas.en-us.mobile_offline.meta/mobile_offline/use_barcodescanner_intro.htm)**
    Your component can deliver any user experience you desire, but there’s a common flow for any component that can scan a barcode.
-   **[Use the BarcodeScanner API](atlas.en-us.mobile_offline.meta/mobile_offline/use_barcodescanner_in_a_lightning_component.htm)**
    To develop a Lightning component with barcode scanning features, use the BarcodeScanner API.
-   **[BarcodeScanner Example–Modern Scanning API](atlas.en-us.mobile_offline.meta/mobile_offline/use_barcodescanner_example_modern.htm)**
    Here’s a complete example of a Lightning web component that uses BarcodeScanner to scan multiple barcodes simultaneously and process them in a batch after scanning is completed.
-   **[BarcodeScanner Example—Single Scan (Legacy)](atlas.en-us.mobile_offline.meta/mobile_offline/use_barcodescanner_example.htm)**
    Here’s a minimal but complete example of a Lightning web component that uses BarcodeScanner to recognize a barcode.
-   **[Scan Multiple Barcodes (Legacy)](atlas.en-us.mobile_offline.meta/mobile_offline/use_barcodescanner_scan_multiple_barcodes.htm)**
    To scan multiple barcodes in a single scanning session, use resumeCapture() to create a continuous scanning cycle that scans barcodes until the user clicks the **Cancel** button.
-   **[BarcodeScanner Example—Continuous Scanning (Legacy)](atlas.en-us.mobile_offline.meta/mobile_offline/use_barcodescanner_example_continuous.htm)**
    Here’s a minimal but complete example of a Lightning web component that uses BarcodeScanner to scan for and recognize multiple barcodes in a continuous cycle.
-   **[Create a Self-Service Kiosk Application](atlas.en-us.mobile_offline.meta/mobile_offline/use_barcodescanner_create_self_service_application.htm)**
    Use BarcodeScanner with a device’s front-facing camera to create applications suitable for use as an unattended self-service kiosk.
-   **[BarcodeScanner Example—Self-Service Kiosk (Legacy)](atlas.en-us.mobile_offline.meta/mobile_offline/use_barcodescanner_example_kiosk.htm)**
    Here’s a complete example of a Lightning web component with BarcodeScanner that could serve as a self-service kiosk.
-   **[Customize the BarcodeScanner User Interface](atlas.en-us.mobile_offline.meta/mobile_offline/use_barcodescanner_ui.htm)**
    BarcodeScanner provides a standard, minimal user interface that can be used out of the box. For applications and use cases where the standard user interface doesn’t provide enough information, or to customize for your company or brand, create a custom UI using HTML.
-   **[Compatibility and Requirements](atlas.en-us.mobile_offline.meta/mobile_offline/use_barcodescanner_compatibility.htm)**
    BarcodeScanner is a JavaScript module that provides an API to Lightning web components to make mobile hardware and platform (operating system) features available in JavaScript. It **requires** access to device hardware and device platform APIs. This access is only available when BarcodeScanner runs within a compatible Salesforce mobile app. **It does not and cannot function when running in a web browser, whether the browser runs on a desktop or mobile device.**
-   **[Considerations and Limitations](atlas.en-us.mobile_offline.meta/mobile_offline/use_barcodescanner_considerations.htm)**
    Keep the following in mind when developing features that use the BarcodeScanner API.

#### See Also

-   [*Lightning Web Components Developer Guide:* BarcodeScanner API](https://developer.salesforce.com/docs/platform/lwc/guide/reference-lightning-barcodescanner.html "Lightning Web Components Developer Guide: BarcodeScanner API - HTML (New Window)")

## Related Topics

- Barcode Scanning User Experience (atlas.en-us.mobile_offline.meta/mobile_offline/use_barcodescanner_intro.htm)
- Use the BarcodeScanner API (atlas.en-us.mobile_offline.meta/mobile_offline/use_barcodescanner_in_a_lightning_component.htm)
- BarcodeScanner Example–Modern Scanning API (atlas.en-us.mobile_offline.meta/mobile_offline/use_barcodescanner_example_modern.htm)
- BarcodeScanner Example—Single Scan (Legacy) (atlas.en-us.mobile_offline.meta/mobile_offline/use_barcodescanner_example.htm)
- Scan Multiple Barcodes (Legacy) (atlas.en-us.mobile_offline.meta/mobile_offline/use_barcodescanner_scan_multiple_barcodes.htm)
- BarcodeScanner Example—Continuous Scanning (Legacy) (atlas.en-us.mobile_offline.meta/mobile_offline/use_barcodescanner_example_continuous.htm)
- Create a Self-Service Kiosk Application (atlas.en-us.mobile_offline.meta/mobile_offline/use_barcodescanner_create_self_service_application.htm)
- BarcodeScanner Example—Self-Service Kiosk (Legacy) (atlas.en-us.mobile_offline.meta/mobile_offline/use_barcodescanner_example_kiosk.htm)
- Customize the BarcodeScanner User Interface (atlas.en-us.mobile_offline.meta/mobile_offline/use_barcodescanner_ui.htm)
- Compatibility and Requirements (atlas.en-us.mobile_offline.meta/mobile_offline/use_barcodescanner_compatibility.htm)
