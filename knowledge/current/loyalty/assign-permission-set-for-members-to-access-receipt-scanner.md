---
title: "Assign Permission Set for Members to Access Receipt Scanner"
domain: loyalty
topic: assign-permission-set-for-members-to-access-receipt-scanner
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:34:52.216Z
estimatedTokens: 403
keywords: [Assign, Permission, Members, Access, Receipt, Scanner, feature, their, mobile, devices, Scanning, Experience, Cloud, users, ensure]
---

# Assign Permission Set for Members to Access Receipt Scanner

> For your members to access the Receipt Scanner feature on their mobile devices, assign
  the Receipt Scanning permission set to the Experience Cloud users. Assign permission set to the
  members to ensure that Apex classes are automatically run when members upload a receipt. After you
  assign the permission set, modify the Receipts object to provide read and edit
  permissions.

# Assign Permission Set for Members to Access Receipt Scanner

For your members to access the Receipt Scanner feature on their mobile devices, assign the Receipt Scanning permission set to the Experience Cloud users. Assign permission set to the members to ensure that Apex classes are automatically run when members upload a receipt. After you assign the permission set, modify the Receipts object to provide read and edit permissions.

| Available in: all editions that have Loyalty Management and Receipt Scanning enabled |
| --- |


| User Permissions Needed |
| --- |
| To assign a permission set: | Assign Permission Sets |
| To assign a permission set license: | Manage Users |

1.  From Setup, in the Quick Find box, enter User, and then select **Users**.
2.  Select the user record of the Loyalty Customer Community User.
3.  Click **Permission Set Assignments** | **Edit Assignments**.
4.  Move the **Receipt Scanning** permission set to the Enabled Permission Sets list.
5.  Save your changes.
6.  From Setup, in the Quick Find box, enter Permission Sets, and then select **Permission Sets**.
7.  Click **Receipt Scanning**.
8.  Click **Object Settings**.
9.  From the object settings, click **Receipts**, and then click **Edit**.
10.  For the ReceiptScanner\_\_ReceiptID\_\_c field, select the Read and Edit permissions.
11.  Save your changes.

-   [← Previous](atlas.en-us.loyalty.meta/loyalty/loyalty_receipt_assign_permsets_existing_user.htm "Assign Permission Set to Existing Users")
-   [Next →](atlas.en-us.loyalty.meta/loyalty/loyalty_receipt_create_namedcred.htm "Create a Named Credential")

## Related Topics

- ← Previous (atlas.en-us.loyalty.meta/loyalty/loyalty_receipt_assign_permsets_existing_user.htm)
- Next → (atlas.en-us.loyalty.meta/loyalty/loyalty_receipt_create_namedcred.htm)
