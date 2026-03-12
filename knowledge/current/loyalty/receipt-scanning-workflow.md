---
title: "Receipt Scanning Workflow"
domain: loyalty
topic: receipt-scanning-workflow
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:52.344Z
estimatedTokens: 381
keywords: [Receipt, Scanning, Workflow, how, program, member, uploads, scans, verifies, scanned, result, earns, loyalty, points]
---

# Receipt Scanning Workflow

> The receipt scanning workflow describes how a program member uploads and scans a
  receipt, verifies the scanned result, and earns loyalty points.

# Receipt Scanning Workflow

The receipt scanning workflow describes how a program member uploads and scans a receipt, verifies the scanned result, and earns loyalty points.

![Receipt Scanning Workflow](/docs/resources/img/en-us/260.0?doc_id=dev_guides%2Floyalty%2Fmobile_sdk%2Fimages%2Floyalty_receipt_workflow.png&folder=loyalty)

-   After a member uploads a receipt by using the Loyalty Management iOS or Android mobile app, the Receipt Upload API is automatically run to encode the receipt.

-   The AnalyzeExpense API is then automatically executed for the encoded receipt, and the response creates a record to store the receipt data in an Amazon S3 bucket. The API scans the uploaded receipt and provides the details of the receipt as a response. The response is saved in the custom object, Receipts, in the Loyalty Management app. The member then previews the scanned results on the mobile app, and submits the receipt. A transaction journal is created for each line item in the receipt.

-   If the member submits the receipt for a manual review, the loyalty program manager or admin reviews, and approves or rejects the receipt.

    If the program manager approves the receipt, the Receipt Status Updation API updates the status of the receipt to Processed, updates the reward points, and creates a transaction journal for each line item in the receipt. The RulesEngineResponseWrapper Apex class shows the response returned from Transaction Journal Execution API that includes the transaction journal details.
