---
title: "Use the BarcodeScanner API"
domain: mobile-offline
topic: use-the-barcodescanner-api
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:34:56.832Z
estimatedTokens: 1232
keywords: [BarcodeScanner, API, develop, Lightning, component, barcode, scanning, features, Add, Web, Test, Availability, Scan]
---

# Use the BarcodeScanner API

> To develop a Lightning component with barcode scanning features, use the BarcodeScanner
        API.

# Use the BarcodeScanner API

To develop a Lightning component with barcode scanning features, use the BarcodeScanner API.

1.  Import BarcodeScanner into your component definition to make the BarcodeScanner API functions available to your code.
2.  Test to make sure BarcodeScanner is available before you call scanning lifecycle functions.
3.  Use the scanning lifecycle functions to start, continue, and stop scanning.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=mobile_offline)

#### Important

We recommend using the modern [scan()](https://developer.salesforce.com/docs/platform/lwc/guide/reference-lightning-barcodescanner-scan.html "HTML (New Window)") and [dismiss()](https://developer.salesforce.com/docs/platform/lwc/guide/reference-lightning-barcodescanner-dismiss.html "HTML (New Window)") API functions in your LWC scanning code to streamline your development experience. The legacy API functions beginCapture(), resumeCapture(), and endCapture() are still available, but will be retired in a future release. See [Understand BarcodeScanner Modern and Legacy APIs](atlas.en-us.mobile_offline.meta/mobile_offline/use_barcodescanner_scan_barcodes.htm "In previous versions of BarcodeScanner, scanning a single barcode in a scanning session required a different programmatic approach than scanning several barcodes in a row without requiring user intervention after each scan. Now, BarcodeScanner has new APIs to streamline the development experience for these common use cases, and new capabilities to scan large quantities of barcodes more efficiently.") for additional details.

## Add BarcodeScanner to a Lightning Web Component

In your component’s JavaScript file, import BarcodeScanner using the standard JavaScript import statement. Specifically, import the getBarcodeScanner() factory function from the lightning/mobileCapabilities module, like so:

```

```

After it’s imported into your component, use the factory function to get an instance of BarcodeScanner. With your BarcodeScanner instance, use the utility functions and constants to verify scanner availability and to configure scans. Use the scanning lifecycle functions to perform scanning operations.

## Test BarcodeScanner Availability

BarcodeScanner depends on physical device hardware and platform features. A component that uses BarcodeScanner renders without errors on a desktop computer, but scanning functions fail. To avoid these errors, test if BarcodeScanner functionality is available before you use it.

```

```

## Scan a Barcode

Scanning with BarcodeScanner is simple using the scanning lifecycle functions.

1.  Start a scan with [scan(options)](https://developer.salesforce.com/docs/platform/lwc/guide/reference-lightning-barcodescanner-scan.html "HTML (New Window)").
2.  Handle the result of the scan, which is returned in the form of a promise.
3.  End the scan with [dismiss()](https://developer.salesforce.com/docs/platform/lwc/guide/reference-lightning-barcodescanner-dismiss.html "HTML (New Window)").

For example:

```

```

See [scan(options)](https://developer.salesforce.com/docs/platform/lwc/guide/reference-lightning-barcodescanner-scan.html "HTML (New Window)") for more details of how to handle scan results, handle errors, and so on.

-   **[Understand BarcodeScanner Modern and Legacy APIs](atlas.en-us.mobile_offline.meta/mobile_offline/use_barcodescanner_scan_barcodes.htm)**
    In previous versions of BarcodeScanner, scanning a single barcode in a scanning session required a different programmatic approach than scanning several barcodes in a row without requiring user intervention after each scan. Now, BarcodeScanner has new APIs to streamline the development experience for these common use cases, and new capabilities to scan large quantities of barcodes more efficiently.
-   **[Understand the BarcodeScanner Scanning Lifecycle](atlas.en-us.mobile_offline.meta/mobile_offline/use_barcodescanner_scanning_lifecycle.htm)**
    BarcodeScanner has four distinct scanning modes, each appropriate for different use cases.

#### See Also

-   [*Lightning Web Components Developer Guide:* BarcodeScanner API](https://developer.salesforce.com/docs/platform/lwc/guide/reference-lightning-barcodescanner.html "Lightning Web Components Developer Guide: BarcodeScanner API - HTML (New Window)")

-   [BarcodeScanner Example–Modern Scanning API](atlas.en-us.mobile_offline.meta/mobile_offline/use_barcodescanner_example_modern.htm "Here’s a complete example of a Lightning web component that uses BarcodeScanner to scan multiple barcodes simultaneously and process them in a batch after scanning is completed.")

-   [BarcodeScanner Example—Single Scan (Legacy)](atlas.en-us.mobile_offline.meta/mobile_offline/use_barcodescanner_example.htm "Here’s a minimal but complete example of a Lightning web component that uses BarcodeScanner to recognize a barcode.")

## Code Examples

```
import { getBarcodeScanner } from 'lightning/mobileCapabilities';
```

```
handleBeginScanClick(event) {
    const myScanner = getBarcodeScanner();
    if(myScanner.isAvailable()) {
        // Perform scanning operations
    }
    else {
        // Scanner not available
        // Not running on hardware with a scanner
        // Handle with message, error, beep, and so on
    }
}
```

```
myScanner.scan(scanningOptions)
    .then((resultsArray) => {
        // Do something with the result of the scan
        for (let singleResult in resultsArray) {
            console.log(singleResult);
            this.scannedBarcodes.push(singleResult.value);
        }
    })
    .catch((error) => {
        // Handle cancellation and scanning errors here
        console.error(error);
    })
    .finally(() => {
        myScanner.dismiss();
    });
```

## Related Topics

- Understand BarcodeScanner Modern and Legacy APIs (atlas.en-us.mobile_offline.meta/mobile_offline/use_barcodescanner_scan_barcodes.htm)
- Understand the BarcodeScanner Scanning Lifecycle (atlas.en-us.mobile_offline.meta/mobile_offline/use_barcodescanner_scanning_lifecycle.htm)
- BarcodeScanner Example–Modern Scanning API (atlas.en-us.mobile_offline.meta/mobile_offline/use_barcodescanner_example_modern.htm)
- BarcodeScanner Example—Single Scan (Legacy) (atlas.en-us.mobile_offline.meta/mobile_offline/use_barcodescanner_example.htm)
