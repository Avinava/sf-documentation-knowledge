---
title: "Loyalty Management Receipt Scanner Kit Unlocked Package Components"
domain: loyalty
topic: loyalty-management-receipt-scanner-kit-unlocked-package-components
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:52.319Z
estimatedTokens: 1423
keywords: [Loyalty, Management, Receipt, Scanner, Kit, Unlocked, Package, Components, custom, objects, Apex, classes, Lightning, web, facilitate]
---

# Loyalty Management Receipt Scanner Kit Unlocked Package Components

> The Loyalty Management Receipt Scanner Kit unlocked package contains a set of components
  such as custom objects, fields, Apex classes, Lightning web components, and more to facilitate
  easier distribution of these bundled components.

# Loyalty Management Receipt Scanner Kit Unlocked Package Components

The Loyalty Management Receipt Scanner Kit unlocked package contains a set of components such as custom objects, fields, Apex classes, Lightning web components, and more to facilitate easier distribution of these bundled components.

| Available in: all editions that have Loyalty Management enabled |
| --- |


## Custom Objects

The package consists of custom objects that store the details of the scanned receipts.

| Object | What the Object Stores |
| --- | --- |
| Receipt | Saves the details of the scanned and submitted receipts |
| Receipt Scanning Error | Saves the details of the errors that occur while scanning receipts. |

## Permission Set, List View, Page Layout, and Tab

The Receipt Scanning permission set enables loyalty program members to access the Receipt Scanning feature.

Loyalty program managers can review all submitted receipts on the Receipts tab on the Loyalty Management app. In Setup, the Receipt Scanning setting enables your loyalty program members to scan receipts on their Loyalty Management iOS and Android mobile apps, and to earn loyalty points for eligible items.

## Custom Settings

The package consists of a custom setting that stores the values that are required to connect Loyalty Management with an Optical Character Recognition (OCR) software.

| Setting | What the Setting Stores |
| --- | --- |
| API Endpoint Details | The API Gateway endpoint URL that is used to access and interact withThe APIsThe bucket details that store the objects used in the AWS endpointThe API Named Credential that provides the API Gateway endpoint’s URLThe authentication settings for Salesforce to make callouts to AWS |

## Custom Label

The package consists of a custom label that stores the values that are required to reward non-qualifying points.

| Setting | What the Setting Stores |
| --- | --- |
| PrimaryNQPCurrencyName | This label stores the primary NQP currency name. To replace this currency name with your program’s primary NQP currency, from the Setup page, search and find Custom Label, and then edit and replace the label. |

## Apex Classes

The unlocked package contains Apex classes to run the Expense Analysis API and Receipt Status Updation API for submitted receipts, and to show the scan results on the Loyalty Management mobile app.

| Apex Class | What the Class Does |
| --- | --- |
| DMLManager | Manages Data Manipulation Language (DML) statements to insert, update, merge, delete, and restore data in Salesforce. |
| ExpenseAnalysis | Manages the request to process the uploaded receipt. |
| ProcessTransactionJournal | Creates transaction journals for each line item of a scanned receipt and calls the Rules Engine API to process the transaction journals. |
| ReceiptScanningConfigController | Manages the receipt scanning configuration. |
| ReceiptScanningControllerUtils | Manages the common functionality methods. |
| ReceiptScanningResponseWrapper | Analyzes the eligible and ineligible items in the receipt after a receipt is uploaded and returns a response of line items for the scanned receipt. |
| ReceiptStatusUpdate | Updates the status of receipts by sending REST requests to a specific location or endpoint. |
| ReceiptUpload | Manages the request to upload the receipt and creates a request to analyze the uploaded receipt. |
| ReceiptWrapper | Represents the data structure of an AWS response. |
| RulesEngineResponseWrapper | Analyzes the response returned from the Rules Engine API that includes transaction journal details. |

## Custom Metadata Types

The unlocked package contains custom metadata types to create and store the objects and fields related to receipt scanning.

| Custom Metadata Type | What the Custom Metadata Type Does | Examples |
| --- | --- | --- |
| Accepted Date Format | Represents the configuration of the accepted date format and the store name fields related to the receipt. | 26/02/2022 |
| Required Receipt Fields | Represents the configuration of the mandatory fields to be captured from a scanned receipt. | Receipt Date |
| Receipt Scanning | Represents the configuration details related to the receipt scanning feature. | Confidence score, named credential, receipt scanning activity, and show ineligible receipt items |

## Apex Trigger

The unlocked package contains apex triggers to update the status of a receipt and to automatically assign the Receipt Scanning permission set to Experience Cloud users.

| Apex Trigger | What the Apex Trigger Does |
| --- | --- |
| ReceiptUpdateTrigger | Creates transaction journals, and processes the journals by using the Rule Engine API. |
| UserReceiptScanTrigger | Automatically assigns the Receipt Scanning permission set to all the Experience Cloud profile users, after the admin installs the unlocked package.For existing loyalty program members, the admin has to manually assign the Receipt Scanning permission set to the members’ Experience Cloud users. |

## Customizations

Admins can customize their receipt scanning implementation by extending the component provided by the Loyalty Management Receipt Scanner Kit unlocked package. The admin can add additional checks that decide which elements must be available in a receipt for it to be eligible to be rewarded.

## Example

For example, if the loyalty program manager wants to add a filter logic that decides which products details must be available in a receipt, the admin can customize these package components:

-   Apex classes

    -   ReceiptScanningResponseWrapper
    -   ReceiptScanningControllerUtils
    -   receiptScanningDetail

    -   Eligible Item Identifier Field custom metadata type
