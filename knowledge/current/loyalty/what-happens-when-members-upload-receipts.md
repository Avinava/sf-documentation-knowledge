---
title: "What Happens When Members Upload Receipts"
domain: loyalty
topic: what-happens-when-members-upload-receipts
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:52.206Z
estimatedTokens: 259
keywords: [Happens, Members, Upload, Receipts, their, third-party, store, purchases, they, Expense, Analysis, API, scans, reviews, eligibility]
---

# What Happens When Members Upload Receipts

> Members can upload receipts of their third-party store purchases and after they upload
    the receipts, the Expense Analysis API scans the receipts and reviews the eligibility of the
    receipt.

# What Happens When Members Upload Receipts

Members can upload receipts of their third-party store purchases and after they upload the receipts, the Expense Analysis API scans the receipts and reviews the eligibility of the receipt.

| Available in: all editions that have Loyalty Management and Receipt Scanning enabled |
| --- |


Here’s what happens in the Loyalty Management Receipt Scanner Kit unlocked package org when members upload their receipts.

-   The ReceiptUpload Apex class runs the Receipt Upload API to upload the receipt.
-   Then, the ReceiptScanningControllerUtils Apex class runs the Expense Analysis API to scan receipts uploaded by members.
-   The ExpenseAnalysis class runs the Expense Analysis API to analyze the receipt.
-   The API scans the receipts and provides a response, which is stored in the ReceiptScanningResponseWrapper class. The response consists of the store details, receipt ID, number, and date, and the detected line item details. The response also shows a confidence value, if applicable.
