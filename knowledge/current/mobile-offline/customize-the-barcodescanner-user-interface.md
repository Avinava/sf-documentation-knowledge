---
title: "Customize the BarcodeScanner User Interface"
domain: mobile-offline
topic: customize-the-barcodescanner-user-interface
apiVersion: 67.0
release: summer-26-v67
docType: concept
lastCollected: 2026-03-12T09:34:56.860Z
estimatedTokens: 1017
keywords: [Customize, BarcodeScanner, User, standard, minimal, box, applications, cases, doesn’t, provide, enough, company, brand, custom, HTML]
---

# Customize the BarcodeScanner User Interface

> BarcodeScanner provides a standard, minimal user interface that can be used out of the
    box. For applications and use cases where the standard user interface doesn’t provide enough
    information, or to customize for your company or brand, create a custom UI using
    HTML.

# Customize the BarcodeScanner User Interface

BarcodeScanner provides a standard, minimal user interface that can be used out of the box. For applications and use cases where the standard user interface doesn’t provide enough information, or to customize for your company or brand, create a custom UI using HTML.

Using HTML to define your custom user interface gives you a lot of flexibility for your UI. Here’s an example of the HTML for a minimal custom UI:

```

```

You can use a static HTML string, or generate the HTML at runtime. There are only a few requirements.

-   The <header\> element is required, and should not be modified. Confine your customizations to the <html\> and child elements of the page.
-   You should also provide a UI element to dismiss or cancel the scanning session. See [Dismiss the Scanner](#dismiss_scanner).

To apply your custom UI to BarcodeScanner, set the backgroundViewHTML property of the BarcodeScannerOptions configuration object to the string value of your HTML page, including the <header\>. Then provide BarcodeScannerOptions when calling beginCapture().

## UI Customization Layers

Your custom UI overlays — and completely hides — all parts of the standard BarcodeScanner UI. The following diagram illustrates the layers of the scanner UI as rendered by BarcodeScanner:![Diagram showing standard UI underneath custom UI underneath camera view with increasing z-index](/docs/resources/img/en-us/260.0?doc_id=images%2Fbarcodescanner_ui_layers.png&folder=mobile_offline)

## Dismiss the Scanner

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=mobile_offline)

#### Important

We recommend using the modern [scan()](https://developer.salesforce.com/docs/platform/lwc/guide/reference-lightning-barcodescanner-scan.html "HTML (New Window)") and [dismiss()](https://developer.salesforce.com/docs/platform/lwc/guide/reference-lightning-barcodescanner-dismiss.html "HTML (New Window)") API functions in your LWC scanning code to streamline your development experience. The legacy API functions beginCapture(), resumeCapture(), and endCapture() are still available, but will be retired in a future release. See [Understand BarcodeScanner Modern and Legacy APIs](atlas.en-us.mobile_offline.meta/mobile_offline/use_barcodescanner_scan_barcodes.htm "In previous versions of BarcodeScanner, scanning a single barcode in a scanning session required a different programmatic approach than scanning several barcodes in a row without requiring user intervention after each scan. Now, BarcodeScanner has new APIs to streamline the development experience for these common use cases, and new capabilities to scan large quantities of barcodes more efficiently.") for additional details.

When you define a custom UI, you replace the standard scanner dismissal control. In your custom UI, it’s *your* responsibility to handle dismissing the scanner. You can dismiss the scanner two different ways:

-   Programatically: by calling endCapture to dismiss the scanner UI.
-   UI Triggered: by adding an element to your custom UI that, when triggered, navigates to a special URL: nimbusbarcodescanner://dismiss.

    For example, here’s a simple text link that closes the scanner when tapped

    ```

    ```

    Place this anywhere in your custom user interface that makes sense.


## Considerations

-   The camera view is always placed in the center of the device screen (horizontally and vertically), and is superimposed onto your custom UI. Consider this when designing your custom UI, and avoid having essential parts of the UI obscured by the camera view.
-   The custom UI is rendered in a separate webview container than the main webview container that hosts your Lightning web component. The HTML that renders your custom UI can’t reference or access elements or objects that are defined in your component.
-   ![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=mobile_offline)

    #### Note

    This plugin is not supported in the Field Service mobile app.

## Code Examples

```
<header><meta name="viewport" content="width=device-width, initial-scale=1.0, 
    maximum-scale=1.0, minimum-scale=1.0"></header>
<html>
  <head>
    <style>
        a:link { text-decoration: none; }
        a:hover { text-decoration: none; }
    </style>
  </head>
  <body>
    <h1 align="right"><a href="nimbusbarcodescanner://dismiss">✖</a></h1>
    <h2 align="center">Welcome, let's get you verified!</h2>
    <h3 align="center">Point the front side of your Health Card<br/>
      at the camera on this device.</h3>
  </body>
<html>
```

```
<a href="nimbusbarcodescanner://dismiss">Dismiss</a>
```

## Related Topics

- Understand BarcodeScanner Modern and Legacy APIs (atlas.en-us.mobile_offline.meta/mobile_offline/use_barcodescanner_scan_barcodes.htm)
