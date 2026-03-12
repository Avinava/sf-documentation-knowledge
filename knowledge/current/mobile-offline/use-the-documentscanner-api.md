---
title: "Use the DocumentScanner API"
domain: mobile-offline
topic: use-the-documentscanner-api
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:56.964Z
estimatedTokens: 744
keywords: [DocumentScanner, API, add, document, scanning, features, Lightning, web, component, Test, Availability, Scan, Process, Results]
---

# Use the DocumentScanner API

> To add document scanning features to a Lightning web component, use the
        DocumentScanner API.

# Use the DocumentScanner API

To add document scanning features to a Lightning web component, use the DocumentScanner API.

1.  Import DocumentScanner into your component definition to make the DocumentScanner API functions available to your code.
2.  Test to make sure DocumentScanner is available before you call the scan() function.
3.  Use the scan() function to begin a document scanning session.
4.  Process the scan results.

For complete reference documentation of the DocumentScanner API, see DocumentScanner API in the Lightning Web Components Developer Guide.

## Add DocumentScanner to a Lightning Web Component

In your component’s JavaScript file, import DocumentScanner using the standard JavaScript import statement. Specifically, import the getDocumentScanner() factory function from the lightning/mobileCapabilities module, like so:

```

```

After it’s imported into your component, use the factory function to get an instance of DocumentScanner. With your DocumentScanner instance, use the utility functions and constants to verify availability. Then use the scan function to initiate a document scan.

## Test DocumentScanner Availability

DocumentScanner depends on physical device hardware and platform features. A component that uses DocumentScanner renders without errors on a desktop computer or in a mobile browser, but scanning functions fail.. To avoid these errors, test if DocumentScanner functionality is available before you use it.

```

```

## Scan a Document

Scanning documents with DocumentScanner is straightforward.

-   Start a scan with scan(options).
-   (Your user scans a document.)
-   Handle the result of the scan, which is returned in the form of a promise.

For example:

```

```

When scanning is successful, the returned promise contains the string value of the scanned text. See (reference doc link) for the structure and contents of the result.

If scanning is unsuccessful, the promise is returned as an error, which includes an error code and message that you can use in error handling. See DocumentScanner API in the Lightning Web Components Developer Guide for more information.

## Process Scan Results

When scanning completes successfully, DocumentScanner returns an array of Document objects in the result object. Document objects include scan data in two different formats.

-   A simple string of all recognized text.
-   Structured text data that includes positional details aligned with the underlying scanned image.

Both formats are available from Documents in the result object. The simple string of all recognized text makes it easy to implement simple features where you scan a document into a text field. The structured text results require more processing to handle, but allow you to develop complex UIs for extracting portions of the scanned document, assign elements to multiple form fields, and so on. See DocumentScanner Example for an example of handling both types of scanned document data.

## Code Examples

```
import { getDocumentScanner } from 'lightning/mobileCapabilities';
```

```
handleBeginScanEventClick(event) {
    const myDocumentScanner = getDocumentScanner();
    if(myDocumentScanner.isAvailable()) {
        // Perform document scanning operations
    }
    else {
        // DocumentScanner not available, or consuming app hasn’t implemented it
        // Not running on hardware with a scanner
        // Handle with message, error, beep, and so on
    }
}
```

```
myScanner
  .scan(scanningOptions)
  .then((result) => {
    // Do something with the result of the scan
    console.log(result);
    this.scannedDocument = result.value;
  })
  .catch((error) => {
    // Handle cancellation and scanning errors here
    console.error(error);
  });
```
