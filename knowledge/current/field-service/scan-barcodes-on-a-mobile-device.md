---
title: "Scan Barcodes on a Mobile Device"
domain: field-service
topic: scan-barcodes-on-a-mobile-device
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:33:53.822Z
estimatedTokens: 898
keywords: [Scan, Barcodes, Mobile, Device, Lightning, web, component, device’s, camera, platform, features, barcode, UPC, symbol, code]
---

# Scan Barcodes on a Mobile Device

> A Lightning web component can use a mobile device’s camera and mobile OS platform
    features to scan a barcode, such as a UPC symbol or QR code. When a barcode is successfully
    scanned, the data that was read from the barcode is returned to the Lightning web component that
    invoked it.

# Scan Barcodes on a Mobile Device

A Lightning web component can use a mobile device’s camera and mobile OS platform features to scan a barcode, such as a UPC symbol or QR code. When a barcode is successfully scanned, the data that was read from the barcode is returned to the Lightning web component that invoked it.

Scanning is performed locally on the mobile device and doesn’t need a network connection. BarcodeScanner does require access to platform-specific APIs that are available only within compatible Salesforce mobile apps.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=field_service_dev)

#### Important

BarcodeScanner does not and cannot function when running in a web browser, whether running on a desktop or mobile device.

BarcodeScanner provides to your component a string value of the data encoded in a scanned barcode. It doesn't attempt to interpret or process the decoded value.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=field_service_dev)

#### Note

This barcode scanner plugin is for use only in the Field Service mobile app.

## Use the BarcodeScanner API

To develop a Lightning web component with barcode scanning features, use the BarcodeScanner API.

-   Import BarcodeScanner into your component definition to make the BarcodeScanner API functions available to your code.
-   Test to make sure BarcodeScanner is available before you call scanning lifecycle functions.
-   Use the scanning lifecycle functions to start, continue, and stop scanning.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=field_service_dev)

#### Note

We recommend using the modern scan() and dismiss() APIs in your LWC scanning code to streamline your development experience. The legacy APIs beginCapture(), resumeCapture(), and endCapture() are still available, but will be retired in a future release.

## Add BarcodeScanner to a Lightning Web Component

In your component’s JavaScript file, import BarcodeScanner using the standard JavaScript import statement. Specifically, import the getBarcodeScanner factory function from the lightning/mobileCapabilities module, like so:

```

```

After it’s imported into your component, use the factory function to get an instance of BarcodeScanner. With your BarcodeScanner instance, use the utility functions and constants to verify scanner availability and to configure scans. Use the scanning lifecycle functions to perform scanning operations.

## Test BarcodeScanner Availability

BarcodeScanner depends on physical device hardware and platform features. A component that uses BarcodeScanner renders without errors on a desktop computer, but scanning functions fail. To avoid these errors, test if BarcodeScanner functionality is available before you use it.

```

```

## Supported Barcode Types

-   aztec
-   code39
-   code93
-   code128
-   dataMatrix
-   ean8
-   ean13
-   interleaved2of5
-   pdf417
-   qr
-   upce

## Scan a Barcode

Scan with BarcodeScanner using the scanning lifecycle functions.

-   Start a scan with scan(options).
-   Handle the result of the scan, which is returned in the form of a promise.
-   End the scan with dismiss().

For example:

```

```

See [scan(options)](https://developer.salesforce.com/docs/platform/lwc/guide/reference-lightning-barcodescanner-scan.html) for more details of how to handle scan results, handle errors, and so on.

#### See Also

-   [BarcodeScanner API](https://developer.salesforce.com/docs/platform/lwc/guide/reference-lightning-barcodescanner.html)

## Code Examples

```
import { getBarcodeScanner } from "lightning/mobileCapabilities";
```

```
import { LightningElement } from 'lwc';
import { getBarcodeScanner } from 'lightning/mobileCapabilities';
export default class ImplementBarcodeScanner extends LightningElement {
  const myScanner = getBarcodeScanner();

  barcodeResults = 'Nothing scanned yet!';

  handleBeginScanClick(event) {
    if(myScanner.isAvailable()) {
      // Perform scanning operations
      let scanningOptions = {
        "barcodeTypes": ["code128","code39", "code93", "ean13", "ean8", "upca", "upce", "qr", "datamatrix", "itf", "pdf417"], "instructionText":"Position barcode in the scanner view.
Press x to stop.",
"successText":"Successful Scan!"
      };
      myScanner.scan(scanningOptions)
        .then((results) => {
          // Do something with the results of the scan
          this.barcodeResults = '';
          results.forEach(result => {
            this.barcodeResults += 'type: ' + result.type + ', value: ' + result.value + '
'; 
          });
        })
        .catch((error) => {
          // Handle cancellation and scanning errors here
          this.barcodeResults = 'Error code: ' + error.code + '
Error message: ' + error.message;
        })
        .finally(() => {
          myScanner.dismiss();
        });
  } else {
      // Scanner not available
      // Not running on hardware with a scanner
      // Handle with message, error, beep, and so on
      this.barcodeResults = 'Problem initiating scanner.  Are you using a mobile device?';
    }
  }
}
```

```
myScanner
  .scan(scanningOptions)
  .then((result) => {
    // Do something with the result of the scan
    console.log(result);
    this.scannedBarcode = result.value;
  })
  .catch((error) => {
    // Handle cancellation and scanning errors here
    console.error(error);
  })
  .finally(() => {
    myScanner.dismiss();
  });
```
