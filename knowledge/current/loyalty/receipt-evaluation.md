---
title: "Receipt Evaluation"
domain: loyalty
topic: receipt-evaluation
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:52.256Z
estimatedTokens: 1543
keywords: [Receipt, Evaluation, Members, their, mobile, phones, upload, purchase, receipts, member, uploads, they, review, receipt’s, scanned]
---

# Receipt Evaluation

> Members use their mobile phones to upload their purchase receipts. After a member uploads
    a receipt, they can review the receipt’s scanned line items, and submit the scanned receipt.
    After a receipt is submitted, the eligible line items are processed as transaction journals and
    members are rewarded. You can define how a receipt is evaluated when you enable Receipt
    Scanning.

# Receipt Evaluation

Members use their mobile phones to upload their purchase receipts. After a member uploads a receipt, they can review the receipt’s scanned line items, and submit the scanned receipt. After a receipt is submitted, the eligible line items are processed as transaction journals and members are rewarded. You can define how a receipt is evaluated when you enable Receipt Scanning.

| Available in: all editions that have Loyalty Management enabled |
| --- |


Here are the factors for evaluating.

## Confidence Score

Define a confidence score to assess if the scanned receipt meets the criteria to extract the receipt information. A confidence value higher than the defined threshold value typically implies greater certainty in the accuracy of the receipt scanning result, while a lower value suggests more uncertainty in reading the receipt.

To understand how a receipt is evaluated based on the confidence score, consider these scenarios:

| Business Scenario | Result | What Happens in this Scenario? |
| --- | --- | --- |
| A member uploads a clean receipt and the receipt content is readable. | The confidence value for the receipt is higher than or equal to the threshold value. | Submit the receipt and get rewards for eligible items. |
| A member uploads a crumpled receipt or a receipt with poor image quality, and the receipt lines are partially readable. | The confidence value for the crumpled receipt is lower than the threshold value. | Submit the receipt for a manual review or capture the image again to ensure that it's readable. |
| A member uploads a crumpled or a torn receipt, and the mandatory fields on the receipt such as receipt number, date, and store name aren’t readable. | The confidence value for the crumpled receipt is lower than the threshold value. | The receipt is rejected because the information required to process the receipt wasn’t extracted. |

## Ineligible Receipt Items

Configure the receipt scanning to show members the items from their receipt that aren’t eligible for loyalty points. Typically, items that don't meet the criteria for earning loyalty points include certain excluded categories, products, or expired promotions.

## Required Receipt Fields

If any mandatory information is missing in a receipt uploaded by a member, the receipt is rejected. When you enable receipt scanning, Receipt Date is a mandatory field to be included in every receipt. You can select the other mandatory fields from these options:

-   Receipt Number
-   Store Name
-   Postal Code

You can also configure additional mandatory fields on a receipt.

## Eligible Item Identifier Fields

When you enable receipt scanning, you can select fields that uniquely determine eligible items from a receipt. For example, if you select product name and product code as the eligible item identifier fields, the receipt is evaluated to determine the eligible items, and the results show the products that match the filter criteria with product name and product code.

Consider this example to understand how an eligible item is determined. Adam Smith submits a receipt by using the Loyalty Management mobile app.

![Receipt Image](/docs/resources/img/en-us/260.0?doc_id=dev_guides%2Floyalty%2Fmobile_sdk%2Fimages%2Floyalty_receipt.png&folder=loyalty)

The receipt is uploaded using the Receipt Upload API, and the Expense Analysis API provides the scanned results by using this JSON response:

"{"ExpenseDocuments":\[ {"SummaryFields":\[ {"ValueDetection":{"Text":"FROSTFLAKES SNOWFLAKES"},"Type":{"Text":"NAME"}}, {"ValueDetection":{"Text":"260.00"},"Type":{"Text":"AMOUNT\_PAID"}}, {"ValueDetection":{"Text":"19-04-2018"},"Type":{"Text":"INVOICE\_RECEIPT\_DATE"}}, {"ValueDetection":{"Text":"38"},"Type":{"Text":"INVOICE\_RECEIPT\_ID"}}, {"ValueDetection":{"Text":"23BBNCA2901C1Z6"},"Type":{"Text":"TAX\_PAYER\_ID"}}, {"ValueDetection":{"Text":"23BBNCA2901C1Z6"},"Type":{"Text":"VENDOR\_GST\_NUMBER"}}, {"ValueDetection":{"Text":"247.62"},"Type":{"Text":"SUBTOTAL"}}, {"ValueDetection":{"Text":"6.19"},"Type":{"Text":"TAX"}}, {"ValueDetection":{"Text":"6.19"},"Type":{"Text":"TAX"}}, {"ValueDetection":{"Text":"260.00"},"Type":{"Text":"TOTAL"}}, {"ValueDetection":{"Text":"FROSTFLAKES SNOWFLAKES"},"Type":{"Text":"VENDOR\_NAME"}}, {"ValueDetection":{"Text":"2001"},"Type":{"Text":"OTHER"}}, {"ValueDetection":{"Text":"01"},"Type":{"Text":"OTHER"}}, {"ValueDetection":{"Text":"06:17:34 PM"},"Type":{"Text":"OTHER"}}, {"ValueDetection":{"Text":"Q38"},"Type":{"Text":"OTHER"}}, {"ValueDetection":{"Text":"Cashier 1"},"Type":{"Text":"OTHER"}}, {"ValueDetection":{"Text":"QUICK SERVICE"},"Type":{"Text":"OTHER"}}, {"ValueDetection":{"Text":"Cash"},"Type":{"Text":"OTHER"}}\], "LineItemGroups":\[ "LineItems":\[ {"LineItemExpenseFields":\[ {"ValueDetection":{"Text":"THE PHAL"},"Type":{"Text":"PRODUCT\_NAME"}}, {"ValueDetection":{"Text":"95.24"},"Type":{"Text":"UNIT\_PRICE"}}, {"ValueDetection":{"Text":"1.00"},"Type":{"Text":"QUANTITY"}}, {"ValueDetection":{"Text":"95.24"},"Type":{"Text":"PRICE"}}, {"ValueDetection":{"Text":"THE PHAL 95.24 1.00 95.24"},"Type":{"Text":"EXPENSE\_ROW"}} \]}, {"LineItemExpenseFields":\[ {"ValueDetection":{"Text":"NATURAL"},"Type":{"Text":"PRODUCT\_NAME"}}, {"ValueDetection":{"Text":"76.19"},"Type":{"Text":"UNIT\_PRICE"}}, {"ValueDetection":{"Text":"1.00"},"Type":{"Text":"QUANTITY"}}, {"ValueDetection":{"Text":"76.19"},"Type":{"Text":"PRICE"}}, {"ValueDetection":{"Text":"NATURAL 76.19 1.00 76.19"},"Type":{"Text":"EXPENSE\_ROW"}} \]}, {"LineItemExpenseFields":\[ {"ValueDetection":{"Text":"FIGS"},"Type":{"Text":"PRODUCT\_NAME"}}, {"ValueDetection":{"Text":"76.19"},"Type":{"Text":"UNIT\_PRICE"}}, {"ValueDetection":{"Text":"1.00"},"Type":{"Text":"QUANTITY"}}, {"ValueDetection":{"Text":"76.19"},"Type":{"Text":"PRICE"}}, {"ValueDetection":{"Text":"FIGS 76.19 1.00 76.19"},"Type":{"Text":"EXPENSE\_ROW"}}\]}\]} \]}\]}"

The loyalty program admin has selected Price as the eligible item identifier field, and so the receipt line item's response shows eligible items by comparing the line item’s price with the product price. The eligible items in the receipt are: The Phal, Natural, and Figs.
