---
title: "Understand the BarcodeScanner Scanning Lifecycle"
domain: mobile-offline
topic: understand-the-barcodescanner-scanning-lifecycle
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:56.855Z
estimatedTokens: 1135
keywords: [Understand, BarcodeScanner, Scanning, Lifecycle, four, distinct, modes, appropriate, different, cases, Continuous, Bulk, Multi-Scanning, Similarities]
---

# Understand the BarcodeScanner Scanning Lifecycle

> BarcodeScanner has four distinct scanning modes, each appropriate for different use
  cases.

# Understand the BarcodeScanner Scanning Lifecycle

BarcodeScanner has four distinct scanning modes, each appropriate for different use cases.

The different scanning cycles are the following:

-   Single Scanning
-   Continuous Scanning
-   Bulk Scanning
-   Multi-Scanning

## Single Scanning

**Single scanning** mode consists of scanning a single barcode, followed immediately by processing the barcode data.

Single scanning is ideal when the use case is a situation where user interaction is desired right after the barcode is scanned. For example, if your application seeks to confirm the user’s identity, one possible implementation starts with a barcode scan and then immediately prompts the user to answer a security question before the next user can scan their barcode.

## Continuous Scanning

**Continuous scanning** mode consists of scanning several barcodes, one after the other, processing each one after it’s scanned.

Continuous scanning is ideal where only one barcode must be scanned at a time and the processing must take place after each scan. For example, if your application relates to inventory management in a warehouse, one possible implementation involves employees scanning many items, one at a time, updating the inventory system in real-time and prompting inventory managers to reorder more of a given product if stock runs low.

## Bulk Scanning and Multi-Scanning

The default continuous scanning mode (explained in the previous section) is ideal for use cases where you want to scan one barcode at a time, over and over again, processing each barcode as it’s scanned. But what if you want to scan several barcodes before processing them? Or scan a bunch simultaneously? Enter **bulk scanning** and **multi-scanning**.

Bulk scanning and multi-scanning are represented as Boolean parameters (enableBulkScan and enableMultiScan, respectively) on the BarcodeScannerOptions object. They’re enabled when their values are set to true.

**Bulk scanning** mode consists of scanning several barcodes, one after the other, and then processing all of them in a batch after scanning is completed.

Bulk scanning is ideal when multiple barcodes are to be scanned in a single session, but the processing can take place in one batch at the end, after all items are scanned. For example, if your application is used for checking out materials at a library, one possible implementation involves librarians scanning many books, one at a time. After all the books have been scanned for check-out, the system processes all the books at once, assigning them to the patron checking out the books and marking those books unavailable for other patrons until they’re returned.

**Multi-scanning** mode consists of scanning several barcodes simultaneously, processing all of them in a batch after scanning is completed.

Multi-scanning is ideal when the use case is a situation where many barcodes must be scanned at a time. For example, if your application is used in a manufacturing quality control setting, one possible implementation involves multiple barcodes being placed on each product, at different stages of the manufacturing process. Scanning all of these barcodes simultaneously allows for an efficient quality check, confirming that each product is ready for sale and shipment.

## Similarities Between the Scanning Modes

From a technical perspective, there aren’t **really** four distinct scanning modes–there are just two.

We’ve defined four modes in the preceding section because, from a user perspective, those four styles of scanners are what you have to choose from, depending on your use case. However, when it comes to controlling the scanning cycle from your LWC code, single scanning is just a special case of continuous scanning. And, although bulk scanning and multi-scanning provide a different user experience, they’re practically identical in the scanning code you need to write. So, single and continuous scanning represent one of the fundamental scanning lifecycles, while bulk and multi-scanning represent the other.

The main difference between these two types of scanning lifecycles is when the processing of the barcode data occurs. For single scanning and continuous scanning, the processing takes place immediately after each scan, while for bulk scanning and multi-scanning it takes place after the user manually ends the scanning cycle. **Your** code handles the actual processing of the barcode data, so be sure to select the type of scanning behavior that works best for your application.
