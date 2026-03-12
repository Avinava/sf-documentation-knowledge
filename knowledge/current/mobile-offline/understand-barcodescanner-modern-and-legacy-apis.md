---
title: "Understand BarcodeScanner Modern and Legacy APIs"
domain: mobile-offline
topic: understand-barcodescanner-modern-and-legacy-apis
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:56.840Z
estimatedTokens: 889
keywords: [Understand, BarcodeScanner, Modern, Legacy, APIs, previous, versions, scanning, barcode, session, different, programmatic, approach, several, barcodes]
---

# Understand BarcodeScanner Modern and Legacy APIs

> In previous versions of BarcodeScanner, scanning a single barcode in a scanning session
  required a different programmatic approach than scanning several barcodes in a row without
  requiring user intervention after each scan. Now, BarcodeScanner has new APIs to streamline the
  development experience for these common use cases, and new capabilities to scan large quantities
  of barcodes more efficiently.

# Understand BarcodeScanner Modern and Legacy APIs

In previous versions of BarcodeScanner, scanning a single barcode in a scanning session required a different programmatic approach than scanning several barcodes in a row without requiring user intervention after each scan. Now, BarcodeScanner has new APIs to streamline the development experience for these common use cases, and new capabilities to scan large quantities of barcodes more efficiently.

## Legacy APIs and Modern APIs

We use the terms legacy APIs and modern APIs here. Let’s clarify what they mean.

-   **Legacy APIs** refer to the functions beginCapture(), resumeCapture(), and endCapture()
-   **Modern APIs** refer to the functions scan() and dismiss()

The legacy APIs are supported, but will be retired in a future release–the modern APIs replace them fully. The legacy APIs support single scanning and continuous scanning modes, but not bulk scanning or multi-scanning.

The modern APIs are, as you’ve probably guessed, a newer addition to BarcodeScanner. They were created to simplify the development experience, and they support [all scanning modes](atlas.en-us.mobile_offline.meta/mobile_offline/use_barcodescanner_scanning_lifecycle.htm "BarcodeScanner has four distinct scanning modes, each appropriate for different use cases."), including bulk scanning and multi-scanning.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=mobile_offline)

#### Note

If you’re adding BarcodeScanner to your LWC for the first time, use the modern APIs. There’s no advantage to using the legacy APIs, and you’ll eventually have to switch to the modern APIs anyway, when the retirement of the legacy APIs becomes official.

If you have an existing LWC that uses the legacy APIs, we encourage you to update your code to use the modern APIs as soon as possible, so you can enjoy a more streamlined development experience and also have access to the new bulk scanning and multi-scanning capabilities.

The following table summarizes the relationships of the legacy APIs to the modern APIs replacing them:

| Legacy API | Modern API | Notes |
| --- | --- | --- |
| beginCapture() | scan() | scan() replaces both beginCapture() and resumeCapture(). |
| resumeCapture() | scan() |
| endCapture() | dismiss() |  |

## Practical Differences Between scan() and beginCapture()

For the most part, the behavior of the modern APIs is identical to their legacy counterparts. One notable difference is how the returned promise is resolved in scan(), compared to beginCapture().

In beginCapture(), the returned Promise resolves to **a single result**. In scan(), the returned Promise resolves to **an array of results**. Because bulk scanning and multi-scanning process multiple barcodes simultaneously, only the modern scan() API supports them.

#### See Also

-   [*Lightning Web Components Developer Guide:* BarcodeScanner API](https://developer.salesforce.com/docs/platform/lwc/guide/reference-lightning-barcodescanner.html "Lightning Web Components Developer Guide: BarcodeScanner API - HTML (New Window)")

-   [Understand the BarcodeScanner Scanning Lifecycle](atlas.en-us.mobile_offline.meta/mobile_offline/use_barcodescanner_scanning_lifecycle.htm "BarcodeScanner has four distinct scanning modes, each appropriate for different use cases.")

-   [Use the BarcodeScanner API](atlas.en-us.mobile_offline.meta/mobile_offline/use_barcodescanner_in_a_lightning_component.htm "To develop a Lightning component with barcode scanning features, use the BarcodeScanner API.")

## Related Topics

- all scanning modes (atlas.en-us.mobile_offline.meta/mobile_offline/use_barcodescanner_scanning_lifecycle.htm)
- Understand the BarcodeScanner Scanning Lifecycle (atlas.en-us.mobile_offline.meta/mobile_offline/use_barcodescanner_scanning_lifecycle.htm)
- Use the BarcodeScanner API (atlas.en-us.mobile_offline.meta/mobile_offline/use_barcodescanner_in_a_lightning_component.htm)
