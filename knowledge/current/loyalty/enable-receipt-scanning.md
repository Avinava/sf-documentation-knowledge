---
title: "Enable Receipt Scanning"
domain: loyalty
topic: enable-receipt-scanning
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:34:52.252Z
estimatedTokens: 606
keywords: [Enable, Receipt, Scanning, org, Loyalty, Management, Scanner, Kit, unlocked, package, installed, Members, their, mobile, device]
---

# Enable Receipt Scanning

> Enable receipt scanning in the org where the Loyalty Management Receipt Scanner Kit
  unlocked package is installed. Members can then use their mobile device to upload receipts and get
  loyalty points.

# Enable Receipt Scanning

Enable receipt scanning in the org where the Loyalty Management Receipt Scanner Kit unlocked package is installed. Members can then use their mobile device to upload receipts and get loyalty points.

| Available in: all editions that have Loyalty Management and Receipt Scanning enabled |
| --- |


| User Permissions Needed |
| --- |
| To create and save Lightning Pages in the Lightning App Builder: | Customize Application |
| To view Lightning Pages in the Lightning App Builder: | View Setup and Configuration |

1.  From Setup, in the Quick Find box, enter Lightning, and then select **Lightning App Builder**.
2.  Next to the Receipt Scanning app, click **Edit**.
3.  From the Setup menu, click **Edit Page**.
4.  Click **Activation**.
5.  To change the icon, click **Change**, and then assign another logo for Receipt Scanning.
6.  Click the Lightning Experience tab, and then click **Loyalty Management**.
7.  In the Loyalty Management section, drag the Receipt Scanning app based on where you want the app to appear.
8.  Save your changes.
9.  From the App Launcher, enter Receipt, and then select **Receipt Scanning**.
10.  Under Named Credential, click **Assign Named Credential**.
11.  Select the named credential that you created for the Loyalty Management Receipt Scanning Kit unlocked package to connect with AWS.
12.  Read and agree to the terms and conditions, and then save your changes.
13.  Turn on Receipt Scanning.
14.  Enter the confidence value at which the receipt is eligible for submission.
15.  To show ineligible items for a member after a receipt is scanned and analyzed, turn on Ineligible Receipt Items.
16.  Under Required Receipt Fields, select the fields that you want to include in a scanned receipt.

     Select the Receipt Number field if you want to uniquely identify each receipt that’s uploaded.

17.  Under Eligible Item Identifier Fields, select the fields that identify the eligible items from a receipt.
18.  Save your changes.

## Example

If you select Receipt Number as a required receipt field, the members can upload only the receipts that contain a receipt number. If you select Product Name as an eligible item identifier field, you earn loyalty points only for the items with matching product names in the Products object.

-   [← Previous](atlas.en-us.loyalty.meta/loyalty/loyalty_receipt_createremotesite.htm "Create a Remote Site Setting")

## Related Topics

- ← Previous (atlas.en-us.loyalty.meta/loyalty/loyalty_receipt_createremotesite.htm)
