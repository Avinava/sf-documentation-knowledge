---
title: "Barcode Scanning User Experience"
domain: mobile-offline
topic: barcode-scanning-user-experience
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:56.835Z
estimatedTokens: 286
keywords: [Barcode, Scanning, User, Experience, component, deliver, any, desire, there’s, common, flow, scan]
---

# Barcode Scanning User Experience

> Your component can deliver any user experience you desire, but there’s a common flow for
    any component that can scan a barcode.

# Barcode Scanning User Experience

Your component can deliver any user experience you desire, but there’s a common flow for any component that can scan a barcode.

1.  A Lightning web component displays a button (or other user interface control) to start a scan.![Lightning web component with a Scan an Item button](/docs/resources/img/en-us/260.0?doc_id=images%2Fbarcode_scanning_step_1.png&folder=mobile_offline)
2.  When the button is pressed, BarcodeScanner invokes the mobile device’s user interface for the camera and barcode scanning function. When the camera detects a valid barcode, it displays a bounding box around the barcode, reads the data from the barcode, and returns the result to the Lightning web component that invoked it.![Lightning web component scanning a barcode](/docs/resources/img/en-us/260.0?doc_id=images%2Fbarcodescanner_standard_ui.png&folder=mobile_offline)
3.  The Lightning web component displays or otherwise processes the results of the scan.![Lightning web component displaying data read from the barcode](/docs/resources/img/en-us/260.0?doc_id=images%2Fbarcode_scanning_step_3.png&folder=mobile_offline)
