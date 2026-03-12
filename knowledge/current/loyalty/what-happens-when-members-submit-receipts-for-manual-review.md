---
title: "What Happens When Members Submit Receipts for Manual Review"
domain: loyalty
topic: what-happens-when-members-submit-receipts-for-manual-review
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:52.275Z
estimatedTokens: 327
keywords: [Happens, Members, Submit, Receipts, Manual, Review, eligible, items, receipt, don’t, show, there’s, incorrect, evaluation, loyalty]
---

# What Happens When Members Submit Receipts for Manual Review

> If the eligible items of a receipt don’t show all items or if there’s an incorrect
  evaluation of loyalty points for the receipt, members can submit the receipt for a manual
  review.

# What Happens When Members Submit Receipts for Manual Review

If the eligible items of a receipt don’t show all items or if there’s an incorrect evaluation of loyalty points for the receipt, members can submit the receipt for a manual review.

| The Loyalty Management mobile app is available in: all editions that have Loyalty Management and Receipt Scanning enabled |
| --- |


Here’s what happens when the receipt is submitted for manual review.

-   The ReceiptStatusUpdate Apex class runs the Receipt Status Updation API, to update the status of the receipt to Manual Review.
-   The ReceiptUpdateTrigger updates the receipt record.

To view the receipt in the Loyalty Management app, loyalty program managers go to the App Launcher, and find and select **Receipts**. After the admin or loyalty program manager manually completes the review, the Receipts screen on the mobile app shows the status of the receipt. If the receipt is manually approved, the member gets loyalty points for the eligible items.

![Tip](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_tip.png&folder=loyalty)

#### Tip

Admins can also add the Receipts related list on the Loyalty Program Member record. This allows program managers to review all the receipts that are pending review for a loyalty program member.
