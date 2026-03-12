---
title: "DocumentScanner Example"
domain: mobile-offline
topic: documentscanner-example
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:56.960Z
estimatedTokens: 160
keywords: [DocumentScanner, Here’s, Lightning, web, component, uses, capture, text, data, image]
---

# DocumentScanner Example

> Here’s an example of a Lightning web component that uses DocumentScanner to capture
    text data from an image.

# DocumentScanner Example

Here’s an example of a Lightning web component that uses DocumentScanner to capture text data from an image.

There’s an option to select the source of the image to be scanned, from either the device camera or the device image library.

```

```

This example uses DocumentScanner to choose a source for the document to be scanned, and to perform a basic scanning operation. After the scan completes, the results are displayed, along with an SVG graphic that annotates the scanned document graphic with an overlay of the result structured text data. A status message is returned when there’s an error.

```

```

## Code Examples

```
<template>
  <table class="rootTable">
   <tbody>
    
    <!-- Document scanning controls -->
    <tr>
     <td style="height: 1px;">
      // Choose source of the document to be scanned
      <lightning-card title="Document Scanner" icon-name="custom:display_text">
       <div class="slds-var-p-around_medium">
        Select source of document to be scanned:
        <br/><br/>
        
        <lightning-button
         variant="brand"
         label="Camera" 
         title="Capture document with camera"
         onclick={handleScanFromCameraClick}>
        </lightning-button>
        
        <lightning-button
         variant="brand"
         label="Photo Library" 
         title="Scan document from photo library"
         onclick={handleScanFromPhotoLibraryClick} 
         class="slds-var-m-left_x-small">
        </lightning-button>
       </div>
       
       <!-- Display errors, if any -->
       <template if:true={scannerError}>
        <lightning-formatted-text value={scannerError}>
        </lightning-formatted-text>
       </template>
       
       <!-- Display text of scanned document, if any -->
       <template if:true={scannedDocument}>
        // results of the scan are displayed here
        <div class="slds-var-p-around_medium">
         Text Recognition Result: <br/><br/>
         {scannedDocument.text}
        </div>
       </template>
       
      </lightning-card>
     </td>
    </tr>
    
    <!-- If there is a scanned document, display a preview -->
    <tr>
     <td>
      <template if:true={scannedDocument}>
       <div class="previewDiv">
        
        <!-- document image --> 
        <div class="divContentCentered">
         <img class="previewImage" src={scannedDocument.imageBytes} 
          onload={addImageHighlights} />
        </div>
        
        <!-- highlights overlay; note use of manual DOM rendering -->
        <div class="divContentCentered">
         <div class="contour" lwc:dom="manual"></div>
        </div>
        
       </div>
      </template>
     </td>
    </tr>
    
   </tbody>
  </table>
 </template>
```

```
import { LightningElement } from "lwc";
import { getDocumentScanner } from "lightning/mobileCapabilities";

export default class DocumentScanner extends LightningElement {
  // Scan results (if any)
  scannerError;
  scannedDocument;

  handleScanFromCameraClick() {
    this.scanDocument("DEVICE_CAMERA");
  }

  handleScanFromPhotoLibraryClick() {
    this.scanDocument("PHOTO_LIBRARY");
  }

  scanDocument(imageSource) {
    // Clear previous results / errors
    this.resetScanResults();

    // Main document scan cycle
    const myScanner = getDocumentScanner();
    if (myScanner.isAvailable()) {
      // Configure the scan
      const options = {
        imageSource: imageSource,
        scriptHint: "LATIN",
        returnImageBytes: true,
      };

      // Perform document scan
      myScanner
        .scan(options)
        .then((results) => {
          // Do something with the results
          this.processScannedDocuments(results);
        })
        .catch((error) => {
          // Handle errors
          this.scannerError =
            "Error code: " + error.code + "
Error message: " + error.message;
        });
    } else {
      // Scanner not available
      this.scannerError =
        "Problem initiating scan. Are you using a mobile device?";
    }
  }

  resetScanResults() {
    this.scannedDocument = null;
    this.scannerError = null;
  }

  processScannedDocuments(documents) {
    // DocumentScanner only processes the first scanned document in an array
    this.scannedDocument = documents[0];
    // And this is where you take over; process results as desired
  }

  // Build an annotation overlay graphic, to display on top of the scanned image
  addImageHighlights(event) {
    const textBlocks = this.scannedDocument?.blocks;
    if (!textBlocks) {
      return;
    }

    const img = event.srcElement;
    const cWidth = img.clientWidth;
    const cHeight = img.clientHeight;
    const nWidth = img.naturalWidth;
    const nHeight = img.naturalHeight;
    const width = Math.min(cWidth, nWidth);
    const height = Math.min(cHeight, nHeight);

    let svg =
      `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" ` +
      `xmlns:xlink="http://www.w3.org/1999/xlink" ` +
      `width="${width}" height="${height}" viewBox="0, 0, ${nWidth}, ${nHeight}">`;
    textBlocks.forEach((block) =>
      block.lines.forEach((line) =>
        line.elements.forEach((element) => {
          const frame = element.frame;
          svg +=
            `<rect x="${frame.x}" y="${frame.y}" width="${frame.width}" ` +
            `height="${frame.height}" style="fill:green;fill-opacity:0.5" />`;
        })
      )
    );
    svg += "</svg>";

    // Manually attach the overlay SVG to the LWC DOM to render it
    this.template.querySelector(".contour").innerHTML = svg;
  }
}
```
