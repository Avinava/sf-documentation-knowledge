---
title: "Scan Documents on a Mobile Device"
domain: mobile-offline
topic: scan-documents-on-a-mobile-device
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:56.947Z
estimatedTokens: 643
keywords: [Scan, Documents, Mobile, Device, Lightning, web, component, device’s, camera, optical, character, recognition, OCR, document, successfully]
---

# Scan Documents on a Mobile Device

> A Lightning web component can use a device’s camera and optical character recognition
    (OCR) to scan documents. When a document is successfully scanned, text data extracted from the
    scanned document is returned to the Lightning web component that invoked it. DocumentScanner
    recognizes printed text and handwritten form factors. However, DocumentScanner provides the most
    accurate results when scanning printed text compared handwritten text, which varies on the
    legibility of handwritten characters.

# Scan Documents on a Mobile Device

A Lightning web component can use a device’s camera and optical character recognition (OCR) to scan documents. When a document is successfully scanned, text data extracted from the scanned document is returned to the Lightning web component that invoked it. DocumentScanner recognizes printed text and handwritten form factors. However, DocumentScanner provides the most accurate results when scanning printed text compared handwritten text, which varies on the legibility of handwritten characters.

DocumentScanner results are returned in two formats:

-   A simple string of all recognized text, suitable for simple document capture.
-   Structured text data aligned with the scanned image, suitable for interactive processing of document content.

Scanning is performed locally on the mobile device, and doesn't need a network connection. However, DocumentScanner requires access to APIs implemented in platform-native code that are available only within compatible Salesforce mobile apps.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=mobile_offline)

#### Important

DocumentScanner does not and cannot function when running in a web browser, whether on a desktop or mobile device.

-   **[Use the DocumentScanner API](atlas.en-us.mobile_offline.meta/mobile_offline/use_documentscanner_in_a_lightning_component.htm)**
    To add document scanning features to a Lightning web component, use the DocumentScanner API.
-   **[DocumentScanner Example](atlas.en-us.mobile_offline.meta/mobile_offline/use_documentscanner_example.htm)**
    Here’s an example of a Lightning web component that uses DocumentScanner to capture text data from an image.
-   **[Compatibility and Requirements](atlas.en-us.mobile_offline.meta/mobile_offline/use_documentscanner_compatibility.htm)**
    DocumentScanner is a JavaScript module that provides an API to Lightning web components to make mobile hardware and platform (operating system) features available in JavaScript. It **requires** access to device hardware and device platform APIs. This access is only available when DocumentScanner runs within a compatible Salesforce mobile app. **It does not and cannot function when running in a standard web browser, whether the browser runs on a desktop or mobile device.**
-   **[Considerations and Limitations](atlas.en-us.mobile_offline.meta/mobile_offline/use_documentscanner_considerations.htm)**
    Consider these guidelines and limitations when developing features that use the DocumentScanner API.

## Related Topics

- Use the DocumentScanner API (atlas.en-us.mobile_offline.meta/mobile_offline/use_documentscanner_in_a_lightning_component.htm)
- DocumentScanner Example (atlas.en-us.mobile_offline.meta/mobile_offline/use_documentscanner_example.htm)
- Compatibility and Requirements (atlas.en-us.mobile_offline.meta/mobile_offline/use_documentscanner_compatibility.htm)
- Considerations and Limitations (atlas.en-us.mobile_offline.meta/mobile_offline/use_documentscanner_considerations.htm)
