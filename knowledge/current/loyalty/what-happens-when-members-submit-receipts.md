---
title: "What Happens When Members Submit Receipts"
domain: loyalty
topic: what-happens-when-members-submit-receipts
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:52.204Z
estimatedTokens: 293
keywords: [Happens, Members, Submit, Receipts, they, view, submitted, line, items, rewarded, their, loyalty, management, mobile, app]
---

# What Happens When Members Submit Receipts

> After members submit receipts, they can view the submitted receipts and the line items
  for which they are rewarded from their loyalty management mobile app.

# What Happens When Members Submit Receipts

After members submit receipts, they can view the submitted receipts and the line items for which they are rewarded from their loyalty management mobile app.

| The Loyalty Management mobile app is available in: all editions that have Loyalty Management and Receipt Scanning enabled |
| --- |


Here’s what happens in your Loyalty Management Receipt Scanner Kit unlocked package org after members submit their receipts.

-   The ReceiptStatusUpdate Apex class runs the Receipt Status Updation API, to update the status of the receipt to Processed.
-   The ProcessTransactionJournal Apex class runs the [Transaction Journal Execution Business API](https://developer.salesforce.com/docs/atlas.en-us.260.0.loyalty.meta/loyalty/connect_resources_loyalty_program_realtime.htm), which creates and processes transaction journals.
-   The RulesEngineResponseWrapper class deserializes the response from the Rules Engine API that includes transaction journal details. The response provides loyalty points, which are shown in the mobile app.
-   The Receipt Status Updation API creates and processes receipt records for each line item.
