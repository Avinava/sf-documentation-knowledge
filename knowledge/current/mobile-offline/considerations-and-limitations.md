---
title: "Considerations and Limitations"
domain: mobile-offline
topic: considerations-and-limitations
apiVersion: 67.0
release: summer-26-v67
docType: concept
lastCollected: 2026-03-12T09:34:56.766Z
estimatedTokens: 768
keywords: [Considerations, Limitations, Consider, guidelines, developing, features, AppReviewService, API, Keep, mind, BarcodeScanner, BiometricsService, CalendarService, ContactsService, DocumentScanner, GeofencingService, LocationService, NFCService, PaymentsService]
---

# Considerations and Limitations

> Keep the following in mind when developing features that use the BarcodeScanner
  API.

# Considerations and Limitations

Keep the following in mind when developing features that use the BarcodeScanner API.

**Device Limitations**

-   BarcodeScanner requires the use of a mobile device camera. The user must grant your app access to the camera. The platform governs the exact user experience. The request happens automatically on first use, and is managed by the device itself. However, you can plan for it when designing the user experience of your app.
-   BarcodeScanner doesn’t implement scanning itself. Instead, it makes available the scanning feature of the underlying platform (Android or iOS). While the features provided by BarcodeScanner are the same across both platforms, it *is* subject to some platform-specific quirks and minor differences.
    -   The scanner can't recognize the barcode if you can’t get a clear picture of it. The quality of the device camera affects barcode recognition. A damaged or low-quality camera lens or focusing system, poor lighting, motion, and other factors can make it difficult to get a clear picture of a barcode.
    -   The quality of the barcode affects barcode recognition. Specifically, damaged or obscured barcodes are hard to recognize successfully.
-   If you’re having trouble getting BarcodeScanner to recognize a barcode:
    -   First, verify that the barcode type is one of the [supported barcode symbologies](atlas.en-us.mobile_offline.meta/mobile_offline/use_barcodescanner_compatibility.htm "BarcodeScanner is a JavaScript module that provides an API to Lightning web components to make mobile hardware and platform (operating system) features available in JavaScript. It requires access to device hardware and device platform APIs. This access is only available when BarcodeScanner runs within a compatible Salesforce mobile app. It does not and cannot function when running in a web browser, whether the browser runs on a desktop or mobile device."). There are other barcode types that aren’t supported.
    -   Second, verify that you’ve configured BarcodeScanner to recognize the expected symbology. See BarcodeScannerOptions in [BarcodeScanner Data Types](https://developer.salesforce.com/docs/platform/lwc/guide/reference-lightning-barcodescanner-data-types.html "HTML (New Window)") for configuration details.
    -   Finally, check whether another app on the same device is able to recognize the barcode. If the standard camera app on the device can’t recognize the barcode, neither can BarcodeScanner.

**Development Considerations**

-   BarcodeScanner requires access to camera hardware. To test scanning during development, use actual, physical devices.
    -   The Android emulator can simulate camera hardware by using a webcam on your development system. To do so, edit the camera configuration for your Android Virtual Device, in the advanced settings panel. However, the camera built into most laptops is much lower quality than what’s found on modern mobile phones. A low-quality camera limits the usefulness of testing barcode recognition.
    -   The iOS simulator doesn’t provide access to simulated camera hardware at all.

You can certainly develop the user experience for your component on a desktop or laptop development system. But be sure to test scanning functionality on the physical devices on which you plan to deploy your Lightning app.

**Usage Considerations**

Keep in mind these considerations to increase the chances of ‌performing a successful scan.

-   Barcode scanning is functional only in portrait orientation, not in landscape orientation.
-   Device camera quality significantly impacts barcode scanning success. High-end devices with better cameras scan barcodes more accurately and efficiently than low-end devices, which are more likely to make mistakes in finding them.
-   For optimal scanner performance, make sure that barcodes are printed on a flat surface, not a curved, or deformed one.
-   Scanning barcodes from digital screens can be challenging due to minor image artifacts introduced by the screen when viewed through a device’s camera lens. This is a common issue when aiming a camera at a digital display, making digital screen scanning inherently more difficult.
-   Scanning becomes more challenging when barcodes are resized or scaled down to fit a smaller area (such as a digital screen), especially long variable-length barcodes.
-   When scanning a small barcode, bring your phone as close as possible without blurring the image. Blurring reduces the chances of a successful scan. You can also pinch-to-zoom on the scanner viewport to enlarge the image.
-   Prioritize moving the phone closer to the barcode before using pinch-to-zoom. Many devices, especially older Android models, use digital zoom for pinch-to-zoom, particularly at higher zoom levels. This can significantly reduce image quality.
-   On Apple Pro and Pro MAX series devices, the Nimbus BarcodeScanner uses the ultra-wide angle lens for macro-mode shooting when the phone is positioned physically closer to a barcode. This automatic lens switch enables successful scans even at close distances by preventing blurry images. This feature isn’t available for Android devices.

**BarcodeScanner Considerations**

Be aware of the these considerations when using BarcodeScanner in your Lightning app.

-   BarcodeScanner is built on top of mobile operating system features. BarcodeScanner’s scanning capabilities therefore depend on Android or iOS features, which are subject to change beyond our control. When mobile operating system features change, the behavior of BarcodeScanner can change without notice.
-   BarcodeScanner provides haptic feedback (a short vibration) after a successful scan on iOS devices. There’s no haptic feedback on Android devices.
-   The Nimbus BarcodeScanner plugin can behave differently on iOS and Android, because of the differences in their operating systems and how their barcode scanning APIs work.
-   Third-party barcode scanning apps often use their own scanning and detection tools and libraries to scan barcodes. These tools can differ from the built-in operating system (Android and iOS) APIs used by the Nimbus BarcodeScanner.
-   BarcodeScanner performs better with 2D barcodes (such as QR codes) due to their lower error susceptibility during detection. In contrast, "linear" or 1D barcodes (such as Code128, UPC) are more prone to detection errors.

    Furthermore, some 1D barcodes have variable data lengths. This can lead to partial payload scans, as the scanner might mistakenly register a complete barcode even when only a portion is visible. Therefore, if you have the option, 2D barcodes are preferable.

    To improve handling of 1D barcodes, you can configure the scanner by setting manualConfirmation=true in the [BarcodeScanner options](https://developer.salesforce.com/docs/platform/lwc/guide/reference-lightning-barcodescanner-data-types.html#barcodescanneroptions). This setting requires the user to confirm the detected barcode by tapping a screen button, allowing time to bring the entire barcode into view.

-   BarcodeScanner uses OS-level APIs for barcode processing, particularly 1D barcodes that may contain special characters. It doesn’t filter or process these characters. Instead, whatever is detected by the APIs is returned to the LWC as-is. This approach maintains the scanner's generic utility, catering to diverse customer needs where special characters in the payload are desired. Therefore, any subsequent filtering or processing of special characters is the developer's responsibility.

## Related Topics

- supported barcode symbologies (atlas.en-us.mobile_offline.meta/mobile_offline/use_barcodescanner_compatibility.htm)
