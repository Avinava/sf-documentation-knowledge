---
title: "Set Up Salesforce Org With Loyalty Management Receipt Scanner Kit Unlocked Package"
domain: loyalty
topic: set-up-salesforce-org-with-loyalty-management-receipt-scanner-kit-unlocked-packa
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:52.332Z
estimatedTokens: 971
keywords: [Salesforce, Org, Loyalty, Management, Receipt, Scanner, Kit, Unlocked, Package, ensure, members, submit, their, receipts, mobile]
---

# Set Up Salesforce Org With Loyalty Management Receipt Scanner Kit Unlocked Package

> To ensure that members can submit their receipts by using their Loyalty Management mobile
    app and get rewarded for eligible receipt line items, install and set up the Loyalty Management
    Receipt Scanner Kit Unlocked Package in your Salesforce org. Before you install the unlocked
    package, ensure that you have a loyalty program already set up in your org.

# Set Up Salesforce Org With Loyalty Management Receipt Scanner Kit Unlocked Package

To ensure that members can submit their receipts by using their Loyalty Management mobile app and get rewarded for eligible receipt line items, install and set up the Loyalty Management Receipt Scanner Kit Unlocked Package in your Salesforce org. Before you install the unlocked package, ensure that you have a loyalty program already set up in your org.

1.  [Install the Loyalty Management Receipt Scanner Kit Unlocked Package](atlas.en-us.loyalty.meta/loyalty/loyalty_receipt_install_unlocked_pkg.htm)
    Install the Loyalty Management Receipt Scanner Kit unlocked package in the org that contains the loyalty program for members to upload their purchase receipts by using the Loyalty Management mobile app.
2.  [Assign Permission Set to Existing Users](atlas.en-us.loyalty.meta/loyalty/loyalty_receipt_assign_permsets_existing_user.htm)
    After admins install the Loyalty Management Receipt Scanner Kit unlocked package in their org, new users are automatically assigned the Receipt Scanning permission set. The Receipt Scanning permission set provides users access to manage the capabilities of the Loyalty Management Receipt Scanner Kit unlocked package. Assign existing users who need the permissions to manage and work with the capabilities of the package the Receipt Scanning permission set.
3.  [Assign Permission Set for Members to Access Receipt Scanner](atlas.en-us.loyalty.meta/loyalty/loyalty_receipt_assign_permsets.htm)
    For your members to access the Receipt Scanner feature on their mobile devices, assign the Receipt Scanning permission set to the Experience Cloud users. Assign permission set to the members to ensure that Apex classes are automatically run when members upload a receipt. After you assign the permission set, modify the Receipts object to provide read and edit permissions.
4.  [Create a Named Credential](atlas.en-us.loyalty.meta/loyalty/loyalty_receipt_create_namedcred.htm)
    Connect Amazon Web Services (AWS) with the Loyalty Management Receipt Scanner Kit unlocked package. Make callout requests to AWS from Salesforce after a receipt is uploaded. The AnalyzeExpense API then scans the receipts to analyze and interpret the information from the receipt.
5.  [Create an External Client App](atlas.en-us.loyalty.meta/loyalty/loyalty_receipt_create_connectedapp.htm)
    Create an external client app for Amazon Web Services (AWS) to connect with the Loyalty Management Receipt Scanner Kit unlocked package. This external client app enables secure OAuth authentication so that the Expense Analysis API runs after the receipts are uploaded and creates transaction journals for the submitted receipts.
6.  [Add a Loyalty Program Name](atlas.en-us.loyalty.meta/loyalty/loyalty_receipt_addprogramname.htm)
    The Loyalty Management Receipt Scanner Kit unlocked package has a custom label to store the name of your loyalty program.
7.  [Add API Endpoint Details in Custom Setting](atlas.en-us.loyalty.meta/loyalty/loyalty_receipt_addapiendpoint.htm)
    The Loyalty Management Receipt Scanner Kit unlocked package has a custom setting to store the API Gateway endpoint URL and bucket details from your Amazon Web Services (AWS) account.
8.  [Create a Remote Site Setting](atlas.en-us.loyalty.meta/loyalty/loyalty_receipt_createremotesite.htm)
    Before any Apex callout can call the API Gateway endpoint, register the API Gateway endpoint on the Remote Site Settings page. Remote site settings authorize your org to access external websites.
9.  [Enable Receipt Scanning](atlas.en-us.loyalty.meta/loyalty/loyalty_receipt_enablereceiptscanning.htm)
    Enable receipt scanning in the org where the Loyalty Management Receipt Scanner Kit unlocked package is installed. Members can then use their mobile device to upload receipts and get loyalty points.

## Related Topics

- Install the Loyalty Management Receipt Scanner Kit Unlocked Package (atlas.en-us.loyalty.meta/loyalty/loyalty_receipt_install_unlocked_pkg.htm)
- Assign Permission Set to Existing Users (atlas.en-us.loyalty.meta/loyalty/loyalty_receipt_assign_permsets_existing_user.htm)
- Assign Permission Set for Members to Access Receipt Scanner (atlas.en-us.loyalty.meta/loyalty/loyalty_receipt_assign_permsets.htm)
- Create a Named Credential (atlas.en-us.loyalty.meta/loyalty/loyalty_receipt_create_namedcred.htm)
- Create an External Client App (atlas.en-us.loyalty.meta/loyalty/loyalty_receipt_create_connectedapp.htm)
- Add a Loyalty Program Name (atlas.en-us.loyalty.meta/loyalty/loyalty_receipt_addprogramname.htm)
- Add API Endpoint Details in Custom Setting (atlas.en-us.loyalty.meta/loyalty/loyalty_receipt_addapiendpoint.htm)
- Create a Remote Site Setting (atlas.en-us.loyalty.meta/loyalty/loyalty_receipt_createremotesite.htm)
- Enable Receipt Scanning (atlas.en-us.loyalty.meta/loyalty/loyalty_receipt_enablereceiptscanning.htm)
