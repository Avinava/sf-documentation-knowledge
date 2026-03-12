---
title: "BarcodeScanner Example–Modern Scanning API"
domain: mobile-offline
topic: barcodescanner-examplemodern-scanning-api
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:34:56.827Z
estimatedTokens: 211
keywords: [BarcodeScanner, Example–Modern, Scanning, API, Here’s, Lightning, web, component, uses, scan, multiple, barcodes, simultaneously, process, batch]
---

# BarcodeScanner Example–Modern Scanning API

> Here’s a complete example of a Lightning web component that uses BarcodeScanner to scan
    multiple barcodes simultaneously and process them in a batch after scanning is
    completed.

# BarcodeScanner Example–Modern Scanning API

Here’s a complete example of a Lightning web component that uses BarcodeScanner to scan multiple barcodes simultaneously and process them in a batch after scanning is completed.

The HTML template provides a minimal scanning user interface. There’s an element to display the results of the scans in a list view, a bit of static help text, and a button to start scanning.

```

```

This example displays all the values of successful scans in a list view. It’s a streamlined example, emphasizing the scanning lifecycle of the modern scanning APIs.

```

```

#### See Also

-   [Use the BarcodeScanner API](atlas.en-us.mobile_offline.meta/mobile_offline/use_barcodescanner_in_a_lightning_component.htm "To develop a Lightning component with barcode scanning features, use the BarcodeScanner API.")

## Code Examples

```
<!-- barcodeScannerMultiScan.html -->
  <template>
    <div class="slds-text-align_center">
      <span class="slds-text-heading_large">BarcodeScanner: Multi-Scan</span>
    </div>
   
   <!-- Static help text -->
  <div class="slds-text-color_weak slds-m-vertical_large slds-m-horizontal_medium">
    <p>Tap <strong>Start a Scanning Session</strong> to open a barcode scanner camera view. Position barcodes in the scanner view to scan them.</p>
    <p>Continue scanning items. Tap Done when you are done scanning.</p>
  </div>
   
   <!-- Scan button, always enabled -->
  <div class="slds-align_absolute-center slds-m-vertical_large">
    <lightning-button
     variant="brand"
     class="slds-var-m-left_x-small"
     icon-name="utility:scan"
     label="Start a Scanning Session"
     title="Start scanning barcodes, until there are no more barcodes to scan"
     onclick={beginScanning}
    ></lightning-button>
  </div>
   
   <!-- After barcodes are scanned, their values are displayed here: -->
    <template lwc:if={scannedBarcodes}>
      <div class="slds-var-m-vertical_large slds-var-p-vertical_medium slds-border_top slds-border_bottom">
        <p>Scanned barcode values are:</p>
        <pre>{scannedBarcodesAsString}</pre>
      </div>
    </template>
  </template>
```

```
// barcodeScannerMultiScan.js
import { LightningElement, track } from "lwc";
import { getBarcodeScanner } from "lightning/mobileCapabilities";

export default class BarcodeScannerContinuousDocDemo extends LightningElement {
  barcodeScanner;
  @track scannedBarcodes;

  connectedCallback() {
    this.barcodeScanner = getBarcodeScanner();
  }

  beginScanning() {
    // Set your configuration options, including bulk and multi-scanning if desired, in this scanningOptions object
    const scanningOptions = {
      barcodeTypes: [this.barcodeScanner.barcodeTypes.QR],
      scannerSize: "FULLSCREEN",
      cameraFacing: "BACK",
      showSuccessCheckMark: true,
      enableBulkScan: true,
      enableMultiScan: true,
    };

    // Make sure BarcodeScanner is available before trying to use it
    if (this.barcodeScanner != null && this.barcodeScanner.isAvailable()) {
      // Reset scannedBarcodes before starting new scanning session
      this.scannedBarcodes = [];

      // Start scanning barcodes
      this.barcodeScanner
        .scan(scanningOptions)
        .then((results) => {
          this.processScannedBarcodes(results);
        })
        .catch((error) => {
          this.processError(error);
        })
        .finally(() => {
          this.barcodeScanner.dismiss();
        });
    } else {
      console.log("BarcodeScanner unavailable. Non-mobile device?");
    }
  }

  processScannedBarcodes(barcodes) {
    // Do something with the barcode scan value:
    // - look up a record
    // - create or update a record
    // - parse data and put values into a form
    // - and so on; this is YOUR code
    console.log(JSON.stringify(barcodes));
    this.scannedBarcodes = this.scannedBarcodes.concat(barcodes);
  }

  processError(error) {
    // Check to see if user ended scanning
    if (error.code == "USER_DISMISSED") {
      console.log("User terminated scanning session.");
    } else {
      console.error(error);
    }
  }

  get scannedBarcodesAsString() {
    return this.scannedBarcodes.map((barcode) => barcode.value).join("
");
  }
}
```

## Related Topics

- Use the BarcodeScanner API (atlas.en-us.mobile_offline.meta/mobile_offline/use_barcodescanner_in_a_lightning_component.htm)
