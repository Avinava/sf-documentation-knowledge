---
title: "BarcodeScanner Example—Single Scan (Legacy)"
domain: mobile-offline
topic: barcodescanner-examplesingle-scan-legacy
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:34:56.804Z
estimatedTokens: 695
keywords: [BarcodeScanner, Example—Single, Scan, Legacy, Here’s, minimal, Lightning, web, component, uses, recognize, barcode]
---

# BarcodeScanner Example—Single Scan (Legacy)

> Here’s a minimal but complete example of a Lightning web component that uses
        BarcodeScanner to recognize a barcode.

# BarcodeScanner Example—Single Scan (Legacy)

Here’s a minimal but complete example of a Lightning web component that uses BarcodeScanner to recognize a barcode.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=mobile_offline)

#### Important

We recommend using the modern [scan()](https://developer.salesforce.com/docs/platform/lwc/guide/reference-lightning-barcodescanner-scan.html "HTML (New Window)") and [dismiss()](https://developer.salesforce.com/docs/platform/lwc/guide/reference-lightning-barcodescanner-dismiss.html "HTML (New Window)") API functions in your LWC scanning code to streamline your development experience. The legacy API functions beginCapture(), resumeCapture(), and endCapture() are still available, but will be retired in a future release. See [Understand BarcodeScanner Modern and Legacy APIs](atlas.en-us.mobile_offline.meta/mobile_offline/use_barcodescanner_scan_barcodes.htm "In previous versions of BarcodeScanner, scanning a single barcode in a scanning session required a different programmatic approach than scanning several barcodes in a row without requiring user intervention after each scan. Now, BarcodeScanner has new APIs to streamline the development experience for these common use cases, and new capabilities to scan large quantities of barcodes more efficiently.") for additional details.

The HTML template provides the bare minimum for a scanning [user interface](atlas.en-us.mobile_offline.meta/mobile_offline/use_barcodescanner_intro.htm "Your component can deliver any user experience you desire, but there’s a common flow for any component that can scan a barcode."). There’s an element to display the results of a scan, a bit of static help text, and a button to start a scan. The only thing mildly interesting is the use of the disabled attribute to disable the scan button when not on a mobile device. This attribute is set based on the results of isAvailable() when the component is initialized.

```

```

This simple example displays the decoded value of a successful scan. It also displays a toast-style message based on the results of the scan. Each phase of the scanning lifecycle writes a console message.

```

```

#### See Also

-   [BarcodeScanner Example–Modern Scanning API](atlas.en-us.mobile_offline.meta/mobile_offline/use_barcodescanner_example_modern.htm "Here’s a complete example of a Lightning web component that uses BarcodeScanner to scan multiple barcodes simultaneously and process them in a batch after scanning is completed.")

-   [Use the BarcodeScanner API](atlas.en-us.mobile_offline.meta/mobile_offline/use_barcodescanner_in_a_lightning_component.htm "To develop a Lightning component with barcode scanning features, use the BarcodeScanner API.")

## Code Examples

```
<!-- barcodeScannerExample.html -->
<template>
    <div class="slds-text-align_center">
        <span class="slds-text-heading_large">BarcodeScanner: Single Scan</span>
    </div>

    <!-- After a barcode is successfully scanned, 
         its value is displayed here: -->
    <template lwc:if={scannedBarcode}>
        <div class="slds-var-m-vertical_large slds-var-p-vertical_medium 
             slds-text-align_center slds-border_top slds-border_bottom">
            Scanned barcode value is:
            <span class="slds-text-heading_small">{scannedBarcode}</span>
        </div>
    </template>

    <!-- Static help text -->
    <div class="slds-text-align_center slds-text-color_weak slds-m-vertical_large">
        Click <strong>Scan Barcode</strong> to open a barcode scanner camera view. Position a
        barcode in the scanner view to scan it.
    </div>

    <!-- The click-to-scan button;
         Disabled if BarcodeScanner isn't available -->
    <div class="slds-align_absolute-center slds-m-vertical_large">
        <lightning-button
            variant="brand"
            class="slds-var-m-left_x-small"
            disabled={scanButtonDisabled}
            icon-name="utility:scan"
            label="Scan Barcode"
            title="Open a camera view and look for a barcode to scan"
            onclick={handleBeginScanClick}>
        </lightning-button>
    </div>
</template>
```

```
// barcodeScannerExample.js
import { LightningElement } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import { getBarcodeScanner } from 'lightning/mobileCapabilities';

export default class BarcodeScannerExample extends LightningElement {
    myScanner;
    scanButtonDisabled = false;
    scannedBarcode = '';

    // When component is initialized, detect whether to enable Scan button
    connectedCallback() {
        this.myScanner = getBarcodeScanner();
        if (this.myScanner == null || !this.myScanner.isAvailable()) {
            this.scanButtonDisabled = true;
        }
    }

    handleBeginScanClick(event) {
        // Reset scannedBarcode to empty string before starting new scan
        this.scannedBarcode = '';

        // Make sure BarcodeScanner is available before trying to use it
        // Note: We _also_ disable the Scan button if there's no BarcodeScanner
        if (this.myScanner != null && this.myScanner.isAvailable()) {
            const scanningOptions = {
                barcodeTypes: [this.myScanner.barcodeTypes.QR],
                instructionText: 'Scan a QR Code',
                successText: 'Scanning complete.'
            };
            this.myScanner
                .beginCapture(scanningOptions)
                .then((result) => {
                    console.log(result);

                    // Do something with the barcode scan value:
                    // - look up a record
                    // - create or update a record
                    // - parse data and put values into a form
                    // - and so on; this is YOUR code
                    // Here, we just display the scanned value in the UI
                    this.scannedBarcode = result.value;
                    this.dispatchEvent(
                        new ShowToastEvent({
                            title: 'Successful Scan',
                            message: 'Barcode scanned successfully.',
                            variant: 'success'
                        })
                    );
                })
                .catch((error) => {
                    // Handle cancellation and unexpected errors here
                    console.error(error);

                    if (error.code == 'USER_DISMISSED') {
                        // User clicked Cancel
                        this.dispatchEvent(
                            new ShowToastEvent({
                                title: 'Scanning Cancelled',
                                message:
                                    'You cancelled the scanning session.',
                                mode: 'sticky'
                            })
                        );
                    }
                    else { 
                        // Inform the user we ran into something unexpected
                        this.dispatchEvent(
                            new ShowToastEvent({
                                title: 'Barcode Scanner Error',
                                message:
                                    'There was a problem scanning the barcode: ' +
                                    error.message,
                                variant: 'error',
                                mode: 'sticky'
                            })
                        );
                    }
                })
                .finally(() => {
                    console.log('#finally');

                    // Clean up by ending capture,
                    // whether we completed successfully or had an error
                    this.myScanner.endCapture();
                });
        } else {
            // BarcodeScanner is not available
            // Not running on hardware with a camera, or some other context issue
            console.log(
                'Scan Barcode button should be disabled and unclickable.'
            );
            console.log('Somehow it got clicked: ');
            console.log(event);

            // Let user know they need to use a mobile phone with a camera
            this.dispatchEvent(
                new ShowToastEvent({
                    title: 'Barcode Scanner Is Not Available',
                    message:
                        'Try again from the Salesforce app on a mobile device.',
                    variant: 'error'
                })
            );
        }
    }
}
```

## Related Topics

- Understand BarcodeScanner Modern and Legacy APIs (atlas.en-us.mobile_offline.meta/mobile_offline/use_barcodescanner_scan_barcodes.htm)
- user interface (atlas.en-us.mobile_offline.meta/mobile_offline/use_barcodescanner_intro.htm)
- BarcodeScanner Example–Modern Scanning API (atlas.en-us.mobile_offline.meta/mobile_offline/use_barcodescanner_example_modern.htm)
- Use the BarcodeScanner API (atlas.en-us.mobile_offline.meta/mobile_offline/use_barcodescanner_in_a_lightning_component.htm)
