---
title: "Compatibility and Requirements"
domain: mobile-offline
topic: compatibility-and-requirements
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:34:56.763Z
estimatedTokens: 412
keywords: [Compatibility, Requirements, AppReviewService, JavaScript, module, API, Lightning, web, components, mobile, hardware, platform, operating, system, features, BarcodeScanner, BiometricsService, CalendarService, ContactsService, DocumentScanner]
---

# Compatibility and Requirements

> BarcodeScanner is a JavaScript module that provides an API to Lightning web components
        to make mobile hardware and platform (operating system) features available in JavaScript. It
            requires access to device hardware and device platform APIs. This access is only
        available when BarcodeScanner runs within a compatible Salesforce mobile app. It does not
            and cannot function when running in a web browser, whether the browser runs on a desktop
            or mobile device.

# Compatibility and Requirements

BarcodeScanner is a JavaScript module that provides an API to Lightning web components to make mobile hardware and platform (operating system) features available in JavaScript. It **requires** access to device hardware and device platform APIs. This access is only available when BarcodeScanner runs within a compatible Salesforce mobile app. **It does not and cannot function when running in a web browser, whether the browser runs on a desktop or mobile device.**

BarcodeScanner is available in Lightning apps distributed using:

-   Salesforce Mobile app
-   Mobile Publisher for Salesforce App
-   Mobile Publisher for Experience Cloud

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=mobile_offline)

#### Note

The Field Service Mobile app provides an alternative implementation of BarcodeScanner. See [Scan Barcodes on a Mobile Device](https://developer.salesforce.com/docs/atlas.en-us.260.0.field_service_dev.meta/field_service_dev/fsl_dev_mobile_lwc_barcode_scanner.htm) in the Field Service Developer Guide for details.

BarcodeScanner is fully functional when used in a Lightning app or Lightning site run from one of these Salesforce apps on a compatible iOS or Android mobile device. See [Requirements for the Salesforce Mobile App](https://help.salesforce.com/articleView?id=salesforce_app_requirements.htm&type=5&language=en_US "HTML (New Window)"), or the requirements page for your target mobile app, for specific device and operating system requirements.

BarcodeScanner is **not** fully functional when running on other devices, such as a desktop, or when running in a web browser, even on a mobile device. It **requires** one of the mobile apps listed above. The BarcodeScanner API is accessible in Lightning Experience on all devices, so your code won’t fail due to missing functions. However, when your app runs in a browser—desktop or mobile—it can use only BarcodeScanner constants and utility functions. Attempting any scanning operation will fail.

## Supported Barcode Types

BarcodeScanner can recognize the following [standard barcode symbologies](https://www.barcodefaq.com/barcode-match/ "HTML (New Window)"). (References not affiliated with Salesforce.)

| Barcode Symbology Standard | BarcodeScanner Type (barcodeTypes) |
| --- | --- |
| Code 128 | CODE_128 |
| Code 39 | CODE_39 |
| Code 93 | CODE_93 |
| Data Matrix | DATA_MATRIX |
| EAN-13 / GTIN-13 | EAN_13 |
| EAN-8 / GTIN-8 | EAN_8 |
| Interleaved 2 of 5 | ITF |
| PDF417 | PDF_417 |
| QR-Code | QR |
| UPC-A / GTIN-12 | UPC_A |
| UPC-E / GTIN-12 | UPC_E |

To access or compare barcode types in code, use the [barcodeTypes](https://developer.salesforce.com/docs/platform/lwc/guide/reference-lightning-barcodescanner-constants.html "HTML (New Window)") constant.

BarcodeScanner doesn’t attempt to interpret the value found in a barcode. The contents of the barcode are decoded into a string value. It’s up to the controlling component or application to further parse and interpret the result and decide what to do with it. For more information about barcode standards and symbologies, see [Barcoding for Beginners](https://www.barcodefaq.com/barcoding-for-beginners/ "HTML (New Window)") (not affiliated with Salesforce).
