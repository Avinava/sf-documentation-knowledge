---
title: "BarcodeScanner Example—Continuous Scanning (Legacy)"
domain: mobile-offline
topic: barcodescanner-examplecontinuous-scanning-legacy
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:34:56.812Z
estimatedTokens: 916
keywords: [BarcodeScanner, Example—Continuous, Scanning, Legacy, Here’s, minimal, Lightning, web, component, uses, scan, recognize, multiple, barcodes, continuous]
---

# BarcodeScanner Example—Continuous Scanning (Legacy)

> Here’s a minimal but complete example of a Lightning web component that uses
        BarcodeScanner to scan for and recognize multiple barcodes in a continuous
        cycle.

# BarcodeScanner Example—Continuous Scanning (Legacy)

Here’s a minimal but complete example of a Lightning web component that uses BarcodeScanner to scan for and recognize multiple barcodes in a continuous cycle.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=mobile_offline)

#### Important

We recommend using the modern [scan()](https://developer.salesforce.com/docs/platform/lwc/guide/reference-lightning-barcodescanner-scan.html "HTML (New Window)") and [dismiss()](https://developer.salesforce.com/docs/platform/lwc/guide/reference-lightning-barcodescanner-dismiss.html "HTML (New Window)") API functions in your LWC scanning code to streamline your development experience. The legacy API functions beginCapture(), resumeCapture(), and endCapture() are still available, but will be retired in a future release. See [Understand BarcodeScanner Modern and Legacy APIs](atlas.en-us.mobile_offline.meta/mobile_offline/use_barcodescanner_scan_barcodes.htm "In previous versions of BarcodeScanner, scanning a single barcode in a scanning session required a different programmatic approach than scanning several barcodes in a row without requiring user intervention after each scan. Now, BarcodeScanner has new APIs to streamline the development experience for these common use cases, and new capabilities to scan large quantities of barcodes more efficiently.") for additional details.

The HTML template provides the bare minimum for a scanning [user interface](atlas.en-us.mobile_offline.meta/mobile_offline/use_barcodescanner_intro.htm "Your component can deliver any user experience you desire, but there’s a common flow for any component that can scan a barcode."). There’s an element to display the results of the scans, a bit of static help text, and a button to start scanning.

```

```

This example displays all of the values of successful scans, one after the other. This example is streamlined, omitting some of the comments and processing illustrated in [BarcodeScanner Example—Single Scan (Legacy)](atlas.en-us.mobile_offline.meta/mobile_offline/use_barcodescanner_example.htm "Here’s a minimal but complete example of a Lightning web component that uses BarcodeScanner to recognize a barcode."), to focus on the scanning cycle itself.

```

```

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=mobile_offline)

#### Note

This example doesn’t process a scanned barcode in any meaningful way. As a result, the processScannedBarcode() function executes quickly—*too* quickly. It can trigger a timing issue that causes the example to fail. To avoid the issue, we’ve inserted a one-second delay before starting the next scan. Real-world barcode processing typically takes long enough to avoid the issue. In that case, you can remove the line with the delay and the async keyword preceding the continueScanning() function.

See [Scan Multiple Barcodes (Legacy)](atlas.en-us.mobile_offline.meta/mobile_offline/use_barcodescanner_scan_multiple_barcodes.htm "To scan multiple barcodes in a single scanning session, use resumeCapture() to create a continuous scanning cycle that scans barcodes until the user clicks the Cancel button.") for an explanation of how beginScanning() and continueScanning() work together to create the continuous scanning cycle.

#### See Also

-   [Scan Multiple Barcodes (Legacy)](atlas.en-us.mobile_offline.meta/mobile_offline/use_barcodescanner_scan_multiple_barcodes.htm "To scan multiple barcodes in a single scanning session, use resumeCapture() to create a continuous scanning cycle that scans barcodes until the user clicks the Cancel button.")

## Code Examples

```
<!-- barcodeScannerContinuous.html -->
<template>
    <div class="slds-text-align_center">
        <span class="slds-text-heading_large">BarcodeScanner: Multi-Scan</span>
    </div>

    <!-- After barcode are scanned, their values are displayed here: -->
    <template lwc:if={scannedBarcodes}>
        <div class="slds-var-m-vertical_large slds-var-p-vertical_medium 
            slds-text-align_center slds-border_top slds-border_bottom">
            Scanned barcode values are:
            <span class="slds-text-heading_small">{scannedBarcodesAsString}</span>
        </div>
    </template>

    <!-- Static help text -->
    <div class="slds-text-align_center slds-text-color_weak slds-m-vertical_large">
        Click <strong>Start a Scanning Session</strong> to open a 
        barcode scanner camera view. Position a barcode in the scanner 
        view to scan it.

        <p>Continue scanning items. Click ✖ when there are no
           more items to scan.</p>
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
</template>
```

```
// barcodeScannerContinuous.js
import { LightningElement, track } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import { getBarcodeScanner } from 'lightning/mobileCapabilities';

export default class BarcodeScannerContinuous extends LightningElement {
    sessionScanner;
    @track scannedBarcodes;

    connectedCallback() {
        this.sessionScanner = getBarcodeScanner();
    }

    beginScanning() {
        // Reset scannedBarcodes before starting new scanning session
        this.scannedBarcodes = [];

        // Make sure BarcodeScanner is available before trying to use it
        if (this.sessionScanner != null && this.sessionScanner.isAvailable()) {
            const scanningOptions = {
                barcodeTypes: [this.sessionScanner.barcodeTypes.QR],
                instructionText: 'Scan barcodes — Click ✖︎ when done',
                successText: 'Successful scan.'
            };
            this.sessionScanner.beginCapture(scanningOptions)
            .then((scannedBarcode) => {
                this.processScannedBarcode(scannedBarcode);
                this.continueScanning();
            })
            .catch((error) => {
                this.processError(error);
                this.sessionScanner.endCapture();
            })
        }
        else {
            console.log("BarcodeScanner unavailable. Non-mobile device?");
        }
    }

    async continueScanning() {
        // Pretend to do some work; see timing note below.
        await new Promise((resolve) => setTimeout(resolve, 1000));
        
        this.sessionScanner.resumeCapture()
        .then((scannedBarcode) => {
            this.processScannedBarcode(scannedBarcode);
            this.continueScanning();
        })
        .catch((error) => {
            this.processError(error);
            this.sessionScanner.endCapture();
        })
    }

    processScannedBarcode(barcode) {
        // Do something with the barcode scan value:
        // - look up a record
        // - create or update a record
        // - parse data and put values into a form
        // - and so on; this is YOUR code
        console.log(JSON.stringify(barcode));
        this.scannedBarcodes.push(barcode);
    }

    processError(error) {
        // Check to see if user ended scanning
        if (error.code == 'USER_DISMISSED') {
            console.log('User terminated scanning session via Cancel.');
        }
        else {
            console.error(error);
        }
    }

    get scannedBarcodesAsString() {
        return this.scannedBarcodes.map(barcodeResult => {
            return barcodeResult.value;
        }).join('

');
    }
}
```

## Related Topics

- Understand BarcodeScanner Modern and Legacy APIs (atlas.en-us.mobile_offline.meta/mobile_offline/use_barcodescanner_scan_barcodes.htm)
- user interface (atlas.en-us.mobile_offline.meta/mobile_offline/use_barcodescanner_intro.htm)
- BarcodeScanner Example—Single Scan (Legacy) (atlas.en-us.mobile_offline.meta/mobile_offline/use_barcodescanner_example.htm)
- Scan Multiple Barcodes (Legacy) (atlas.en-us.mobile_offline.meta/mobile_offline/use_barcodescanner_scan_multiple_barcodes.htm)
