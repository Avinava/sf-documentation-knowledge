---
title: "Scan Multiple Barcodes (Legacy)"
domain: mobile-offline
topic: scan-multiple-barcodes-legacy
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:34:56.850Z
estimatedTokens: 2251
keywords: [Scan, Multiple, Barcodes, Legacy, scanning, session, resumeCapture, continuous, cycle, scans, until, user, clicks, Cancel, button]
---

# Scan Multiple Barcodes (Legacy)

> To scan multiple barcodes in a single scanning session, use resumeCapture() to create a continuous scanning cycle
        that scans barcodes until the user clicks the Cancel
        button.

# Scan Multiple Barcodes (Legacy)

To scan multiple barcodes in a single scanning session, use resumeCapture() to create a continuous scanning cycle that scans barcodes until the user clicks the **Cancel** button.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=mobile_offline)

#### Important

We recommend using the modern [scan()](https://developer.salesforce.com/docs/platform/lwc/guide/reference-lightning-barcodescanner-scan.html "HTML (New Window)") and [dismiss()](https://developer.salesforce.com/docs/platform/lwc/guide/reference-lightning-barcodescanner-dismiss.html "HTML (New Window)") API functions in your LWC scanning code to streamline your development experience. The legacy API functions beginCapture(), resumeCapture(), and endCapture() are still available, but will be retired in a future release. See [Understand BarcodeScanner Modern and Legacy APIs](atlas.en-us.mobile_offline.meta/mobile_offline/use_barcodescanner_scan_barcodes.htm "In previous versions of BarcodeScanner, scanning a single barcode in a scanning session required a different programmatic approach than scanning several barcodes in a row without requiring user intervention after each scan. Now, BarcodeScanner has new APIs to streamline the development experience for these common use cases, and new capabilities to scan large quantities of barcodes more efficiently.") for additional details.

Sometimes you want to scan many barcodes in a row, without requiring user interaction between scans. For example, when scanning a shelf of inventory, you might not want to stop after each item, or to click a **Scan** button for every item. In these cases, it can make more sense to click **Scan** once, and then scan barcodes repeatedly until done with all of the items. Implementing a continuous scanning cycle like this is slightly different from scanning a single item.

1.  Start a scanning session as usual, with beginCapture().
2.  When the promise resolves, process the scanned barcode as usual, in the then() block.

    ![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=mobile_offline)

    #### Note

    Processing the barcode can’t change the user interface, or require interacting with the user. That needs to wait until *after* the scanning cycle completes.

3.  At the end of the then() block, call a new continue scanning function, which uses resumeCapture() to continue the current scanning session.
4.  Call endCapture() at the end of the catch() block, instead of in the finally() block.
5.  When the user clicks **Cancel** to end the scanning session, BarcodeScanner returns a BarcodeScannerError object with a code property value of userDismissedScanner. Handle cancellation and actual errors in the catch() block.

## Single Scan vs. Continuous Scan

The core scanning lifecycles for single scans and continuous scanning are similar, but different enough that it’s worth comparing the two.

| Single Scan | Continuous Scan |
| --- | --- |
| singleScanner.beginCapture(scanningOptions)     .then((scannedBarcode) =>          this.processScannedBarcode(scannedBarcode)      )     .catch((error) => {         console.error(error);      })     .finally(() => {         singleScanner.endCapture();     }); | sessionScanner.beginCapture(scanningOptions)     .then((scannedBarcode) =>         this.processScannedBarcode(scannedBarcode)         this.continueScanning();     )     .catch((error) => {         console.error(error);         sessionScanner.endCapture();     }); |

There are two significant differences to note.

-   The continuous scanning then() block has a call to a new function, continueScanning(). See the **Continue a Scanning Session** section.
-   The call to endCapture() is made in the finally() block for the single scan, but is called in the catch() error handling block for continuous scanning. See the **End Capture for Continuous Scanning** section.

## Continue a Scanning Session

In the preceding code comparison, the technique of continuing a scanning session was hidden behind the new line, a call to continueScanning(). Here’s an example of that function.

```

```

This code should look familiar; it’s nearly identical to the earlier beginCapture() example for continuous scanning. There‘s only one difference: continueScanning() creates a promise chain by calling sessionScanner.**resume**Capture(), while the earlier example called sessionScanner.**begin**Capture(). It might be obvious, but you only call beginCapture() *once,* at the beginning of a scanning cycle.

While the difference in the code is minor, the difference in the flow of execution is significant. The scanning cycle begins in a promise chain created by beginCapture(), which executes **only once.** That initial promise resolves one of two ways:

-   If the scan is successful, the barcode result is processed, and then the flow of control for the scanning cycle is handed off to continueScanning().
-   If the user clicks **Cancel**, or if there’s an error, the promise chain ends in the catch() error handling block, covered in the **End Capture for Continuous Scanning** section.

The promise chain in continueScanning() ends the same two ways, with one important difference. While the code is the same, after a successful scan it continues the scanning cycle by calling *itself*, creating a recursive loop that continues the scanning cycle until the user clicks **Cancel**, or there’s an error.

Whoops. Didn’t mean to scare you with that word, recursive. Yes, continueScanning() ends by calling itself, which makes it a recursive function. But this recursion is pretty simple—it’s just a loop, an event loop of sorts. The loop handles *scan-something* events (in the then() block) until a *user-clicked-Cancel* event comes along (in the catch() block), and then it ends. It might take a minute, but you can wrap your head around it.

The overall pattern here is the following:

-   You begin a scanning cycle using beginCapture().
-   The promise resolution chain from beginCapture() ends in a call to continueScanning(), your own function.
-   continueScanning() continues the existing scanning cycle by calling resumeCapture(), but is otherwise the same as the beginCapture() that started the cycle.
-   The promise resolution chain in continueScanning() ends in a call to continueScanning(), creating a scanning cycle loop.
-   The loop ends when the user clicks **Cancel**, BarcodeScanner rejects the promise with a BarcodeScannerError, and you call endCapture() in the error handling catch() block.

The code duplication between the beginCapture() and resumeCapture() promise chains is unfortunate, but unavoidable. Move as much processing code, such as the handling of a scanned barcode, into functions you can call from both chains. In the example here, processScannedBarcode() is a function that both promise chains use to handle a successful scan. See [BarcodeScanner Example—Continuous Scanning (Legacy)](atlas.en-us.mobile_offline.meta/mobile_offline/use_barcodescanner_example_continuous.htm "Here’s a minimal but complete example of a Lightning web component that uses BarcodeScanner to scan for and recognize multiple barcodes in a continuous cycle.") for the complete sample, which includes that function’s implementation.

## End Capture for Continuous Scanning

In a continuous scanning session, the user scans items repeatedly until they’re out of items. Then they click the **Cancel** button to end the session. In code, BarcodeScanner handles cancellation by rejecting the promise, and returning a BarcodeScannerError to signal that the user canceled scanning. See [BarcodeScanner Example—Continuous Scanning (Legacy)](atlas.en-us.mobile_offline.meta/mobile_offline/use_barcodescanner_example_continuous.htm "Here’s a minimal but complete example of a Lightning web component that uses BarcodeScanner to scan for and recognize multiple barcodes in a continuous cycle.") for how to distinguish between the user clicking **Cancel** and an actual error.

Importantly, clicking the **Cancel** button is the only way to end a continuous scanning session. This is in contrast to a single scan session, which can end with either a successful scan *or* the **Cancel** button.

Because continuous scanning always ends with the **Cancel** button, and thus a BarcodeScannerError, we can call endCapture() in the error handling catch() block.

However, because a single scan might *not* end in a BarcodeScannerError, the catch() block might never execute. So for a single scan, we put endCapture() in the finally() block, to make sure that, success or failure, it always gets called.

#### See Also

-   [BarcodeScanner Example—Continuous Scanning (Legacy)](atlas.en-us.mobile_offline.meta/mobile_offline/use_barcodescanner_example_continuous.htm "Here’s a minimal but complete example of a Lightning web component that uses BarcodeScanner to scan for and recognize multiple barcodes in a continuous cycle.")

## Code Examples

```
singleScanner.beginCapture(scanningOptions)
    .then((scannedBarcode) => 
        this.processScannedBarcode(scannedBarcode)

    )
    .catch((error) => {
        console.error(error);

    })
    .finally(() => {
        singleScanner.endCapture();
    });
```

```
sessionScanner.beginCapture(scanningOptions)
    .then((scannedBarcode) =>
        this.processScannedBarcode(scannedBarcode)
        this.continueScanning();
    )
    .catch((error) => {
        console.error(error);
        sessionScanner.endCapture();
    });
```

```
continueScanning() {
    this.sessionScanner.resumeCapture()
    .then((scannedBarcode) => {
        this.processScannedBarcode(scannedBarcode);
        this.continueScanning();
    })
    .catch((error) => {
        this.processError(error);
        this.sessionScanner.endCapture();
    });
}
```

## Related Topics

- Understand BarcodeScanner Modern and Legacy APIs (atlas.en-us.mobile_offline.meta/mobile_offline/use_barcodescanner_scan_barcodes.htm)
- BarcodeScanner Example—Continuous Scanning (Legacy) (atlas.en-us.mobile_offline.meta/mobile_offline/use_barcodescanner_example_continuous.htm)
