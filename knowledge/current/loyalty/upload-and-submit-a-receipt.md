---
title: "Upload and Submit a Receipt"
domain: loyalty
topic: upload-and-submit-a-receipt
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:52.339Z
estimatedTokens: 584
keywords: [Upload, Submit, Receipt, Members, receipts, their, third-party, store, purchases, less, loyalty, points, eligible, line, items]
---

# Upload and Submit a Receipt

> Members can upload receipts from their third-party store purchases that are less than 5
  MB, and get loyalty points for eligible receipt line items. After the receipt is scanned, members
  can review the line items detected by the Expense Analysis API and then submit the
  receipt.

# Upload and Submit a Receipt

Members can upload receipts from their third-party store purchases that are less than 5 MB, and get loyalty points for eligible receipt line items. After the receipt is scanned, members can review the line items detected by the Expense Analysis API and then submit the receipt.

| The Loyalty Management mobile app is available in: all editions that have Loyalty Management and Receipt Scanning enabled |
| --- |


1.  On the home screen of the iOS or the Android Loyalty Management mobile app, tap ![Receipt icon](/docs/resources/img/en-us/260.0?doc_id=dev_guides%2Floyalty%2Fmobile_sdk%2Fimages%2Floyalty_receipt_icon.png&folder=loyalty).
2.  Tap **New**, and provide access to your photo library.
3.  Tap the camera, and click the photo of a receipt or tap the gallery icon and upload a receipt from your mobile device.
4.  Tap **Upload**.

    The receipt is processed and the results show eligible and ineligible items from the receipt.

5.  Select an option:
    -   If the processed receipt results are accurate, tap **Submit**, and then tap **Done**.

        The receipt is submitted and the screen shows the number of loyalty points credited for the receipt.

    -   To rescan or upload another receipt, tap **Try Again**.
    -   If your receipt doesn’t list all eligible items, tap **Request a Manual Review**.

        Enter a reason for the manual request, and tap **Submit**.


-   **[What Happens When Members Upload Receipts](atlas.en-us.loyalty.meta/loyalty/loyalty_receipt_afterupload.htm)**
    Members can upload receipts of their third-party store purchases and after they upload the receipts, the Expense Analysis API scans the receipts and reviews the eligibility of the receipt.
-   **[What Happens When Members Submit Receipts](atlas.en-us.loyalty.meta/loyalty/loyalty_receipt_aftersubmit.htm)**
    After members submit receipts, they can view the submitted receipts and the line items for which they are rewarded from their loyalty management mobile app.
-   **[What Happens When Members Submit Receipts for Manual Review](atlas.en-us.loyalty.meta/loyalty/loyalty_receipt_manualreview.htm)**
    If the eligible items of a receipt don’t show all items or if there’s an incorrect evaluation of loyalty points for the receipt, members can submit the receipt for a manual review.

## Related Topics

- What Happens When Members Upload Receipts (atlas.en-us.loyalty.meta/loyalty/loyalty_receipt_afterupload.htm)
- What Happens When Members Submit Receipts (atlas.en-us.loyalty.meta/loyalty/loyalty_receipt_aftersubmit.htm)
- What Happens When Members Submit Receipts for Manual Review (atlas.en-us.loyalty.meta/loyalty/loyalty_receipt_manualreview.htm)
