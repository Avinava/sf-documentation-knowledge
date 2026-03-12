---
title: "call(action, args)"
domain: financial-services-cloud-object-reference
topic: callaction-args
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:27.943Z
estimatedTokens: 508
keywords: [call, action, args, calls, IntegrationHandler, actions, passes, arguments, Usage, DisputeMgmtHelper, AssessmentHelperFunction, ComplaintMgmtHelper, FSCFinancialAccountService, API, Version, FSCGoalService, FSCHouseholdService, FSCPlanService, RetrievalSummaryDataRefresh, AddressUpdateHelperFunctions]
---

# call(action, args)

> This method calls one of the available AddressUpdateHelperFunctions
      actions and passes arguments to that action.

# call(action, args)

This method calls one of the available AddressUpdateHelperFunctions actions and passes arguments to that action.

## Signature

public Object call(String action, Map<String, Object\> args)

## Parameters

action

Type: String

The action to call. The value must be one of the following:

-   getAddressUpdateAttrs — Fetches the list of Service Process attributes for the Address Update request.
-   convertArrayToKeyValuePairs — Converts the formats of Financial Account numbers.
-   ConvertToList — Converts document type data to list format.
-   convertAndMergeAccounts — Converts Financial Account data to list format.
-   convertUploadedDocuments — Converts uploaded files metadata json for OS.
-   ifUploadContainsMultipleFiles — Indicates if a single file input element in OS contains multiple uploads.
-   convertAddresses — Converts the account level addresses to consumable format for the OmniScript.
-   callCreateCaseApi — Creates a new Case and a related Service Process record with the address data.

args

Type: Map<String, Object>

The first three keys must be input, output, and options. The required content for each depends on the action:

-   getAddressUpdateAttrs
    -   String svcCatalogRequestId — Id of the request created using the Address Update OmniScript.
-   convertArrayToKeyValuePairs
    -   List<Object> financialAccountsObj — List of financial account objects for transformation.
-   ConvertToList
    -   Object args — String of comma-separated document types.
-   convertAndMergeAccounts
    -   List<Object> args — list of financial accounts.
-   convertUploadedDocuments
    -   List<Object> args — list of uploaded documents from the OmniScript data.
-   ifUploadContainsMultipleFiles
    -   List<Object> args — list of uploaded documents from the OmniScript data.
-   convertAddresses
    -   Map<String,Object> args — Account level addresses.
-   callCreateCaseApi
    -   Map<String,Object>

## Return Value

Type: Map<String, Object>

The return values of the corresponding action.

## Usage

To use this class in an Integration Procedure, specify the class in the Remote Class property, the action in the Remote Method property, and the arguments in the Additional Input property.

## Examples

Input and output JSON examples for some of the actions are as follows.

convertArrayToKeyValuePairs

Input format:

\[ { "AccountName": "Priority Checking", "Address1": "33 Ridgemond Street", "City": "San Fransisco", "FinancialAccountId": "a0FRN000000Dt6C2AS", "PostalCode": "512534", "Country": "United States", "State": "CA", "FinancialAccountNumber": "700021878" }, { "AccountName": "Cash Rewards Credit Card", "Address1": "91 Town Road", "City": "Naples", "FinancialAccountId": "a0FRN000000Dt7Z2AS", "PostalCode": "514534", "Country": "United State", "State": "Florisa", "FinancialAccountNumber": "78000130" }, { "AccountName": "Regular Savings", "Address1": "33 Ridgemond Street", "City": "San Fransisco", "FinancialAccountId": "a0FRN000000Dt7U2AS", "PostalCode": "51345", "Country": "United States", "State": "CA", "FinancialAccountNumber": "200048376" } \]

Output format:

\[ { "isSelected": null, "ConvertedFinancialAccountNumber": "1878", "FinancialAccountNumber": "700021878", "State": "CA", "Country": "United States", "PostalCode": "512534", "FinancialAccountId": "a0FRN000000Dt6C2AS", "City": "San Fransisco", "Address1": "33 Ridgemond Street", "AccountName": "Priority Checking" }, { "isSelected": null, "ConvertedFinancialAccountNumber": "0130", "FinancialAccountNumber": "78000130", "State": "Florisa", "Country": "United State", "PostalCode": "514534", "FinancialAccountId": "a0FRN000000Dt7Z2AS", "City": "Naples", "Address1": "91 Town Road", "AccountName": "Cash Rewards Credit Card" }, { "isSelected": null, "ConvertedFinancialAccountNumber": "8376", "FinancialAccountNumber": "200048376", "State": "CA", "Country": "United States", "PostalCode": "51345", "FinancialAccountId": "a0FRN000000Dt7U2AS", "City": "San Fransisco", "Address1": "33 Ridgemond Street", "AccountName": "Regular Savings" } \]

convertAndMergeAccounts

Input format:

\[ { "Id": "REC0", "isSelected": true, "ConvertedFinancialAccountNumber": "1878", "FinancialAccountNumber": "700021878", "State": "CA", "Country": "United States", "PostalCode": "512534", "FinancialAccountId": "a0FRN000000Dt6C2AS", "City": "San Fransisco", "Address1": "33 Ridgemond Street", "AccountName": "Priority Checking", "uniqueKey": "REC0", "\_flex": { "uniqueKey": "REC0" } }, { "Id": "REC1", "isSelected": true, "ConvertedFinancialAccountNumber": "0130", "FinancialAccountNumber": "78000130", "State": "Florisa", "Country": "United State", "PostalCode": "514534", "FinancialAccountId": "a0FRN000000Dt7Z2AS", "City": "Naples", "Address1": "91 Town Road", "AccountName": "Cash Rewards Credit Card", "uniqueKey": "REC1", "\_flex": { "uniqueKey": "REC1" } } \]

Output format:

\[ "700021878", "78000130" \]

convertAddresses

Input format:

{ "Name": "Julia Green", "ShippingAddress": "33 Ridgemond Street,San Fransisco,CA,613654,United States", "BillingAddress": "33 Ridgemond Street,San Fransisco,CA,67136,United States" }

Output format:

\[ { "isSelected": null, "type": "Shipping", "Address": "33 Ridgemond Street San Fransisco CA 613654 United States" }, { "isSelected": null, "type": "Billing", "Address": "33 Ridgemond Street San Fransisco CA 67136 United States" } \]

convertUploadedDocuments

Input format:

\[ { "DocumentType-Block": { "DocumentType": "Passport" }, "Files": \[ { "data": "069RN00000033O1YAI", "filename": "Passport.pdf", "vId": "068RN00000038q3YAA", "size": 5385, "deleteLabel": "Delete Passport.pdf" } \] }, { "DocumentType-Block": { "DocumentType": "Medicard" }, "Files": \[ { "data": "069RN00000033O6YAI", "filename": "Passport.pdf", "vId": "068RN00000038q8YAA", "size": 5385, "deleteLabel": "Delete Passport.pdf" } \] } \]

Output format:

\[ { "typeId": "0deRN000000009UYAQ", "docType": "Passport", "name": "Passport.pdf", "id": "069RN00000033O1YAI" }, { "typeId": "0deRN00000000CnYAI", "docType": "Medicard", "name": "Passport.pdf", "id": "069RN00000033O6YAI" } \]

ifUploadContainsMultipleFiles

Input format:

\[ { "DocumentType-Block": { "DocumentType": "Passport" }, "Files": \[ { "data": "069RN00000033O1YAI", "filename": "Passport.pdf", "vId": "068RN00000038q3YAA", "size": 5385, "deleteLabel": "Delete Passport.pdf" } \] }, { "DocumentType-Block": { "DocumentType": "Medicard" }, "Files": \[ { "data": "069RN00000033O6YAI", "filename": "Passport.pdf", "vId": "068RN00000038q8YAA", "size": 5385, "deleteLabel": "Delete Passport.pdf" } \] } \]

Output format: None

callCreateCaseApi

The input map contains these key-value pairs:

AddressLine1 (String): "32 baker street" AddressLine2 (String): "abc" PostalCode: 63164 City: "San Francisco" State: "CA" CountryCode: "United States" accountId: "001RN0000037rzqYAA" effectiveDate: "2022-12-31" svcCatalogItemDefApiName: "AddressUpdate" defaultAccountStatus: caseSubject: "Address Update Service Request"

FinancialAccounts input format:

\[ { "Id": "REC0", "isSelected": true, "ConvertedFinancialAccountNumber": "1878", "FinancialAccountNumber": "700021878", "State": "CA", "Country": "United States", "PostalCode": "512534", "FinancialAccountId": "a0FRN000000Dt6C2AS", "City": "San Fransisco", "Address1": "33 Ridgemond Street", "AccountName": "Priority Checking", "uniqueKey": "REC0", "\_flex": { "uniqueKey": "REC0" } }, { "Id": "REC1", "isSelected": true, "ConvertedFinancialAccountNumber": "0130", "FinancialAccountNumber": "78000130", "State": "Florisa", "Country": "United States", "PostalCode": "514534", "FinancialAccountId": "a0FRN000000Dt7Z2AS", "City": "Naples", "Address1": "91 Town Road", "AccountName": "Cash Rewards Credit Card", "uniqueKey": "REC1", "\_flex": { "uniqueKey": "REC1" } } \]

customerLevelAddresses input format:

\[ { "Id": "REC0", "isSelected": true, "type": "Shipping", "Address": "33 Ridgemond Street San Fransisco CA 613654 United State", "uniqueKey": "REC0", "\_flex": { "uniqueKey": "REC0" } }, { "Id": "REC1", "isSelected": true, "type": "Billing", "Address": "33 Ridgemond Street San Fransisco CA 67136 United State", "uniqueKey": "REC1", "\_flex": { "uniqueKey": "REC1" } } \]

documentInfo input format:

\[ { "typeId": "0deRN000000009UYAQ", "docType": "Passport", "name": "Passport.pdf", "id": "069RN00000033O1YAI" }, { "typeId": "0deRN00000000CnYAI", "docType": "Medicard", "name": "Passport.pdf", "id": "069RN00000033O6YAI" } \]

Output format: None

## Code Examples

```apex
fschousehold.RetrievalSummaryDataRefresh, call, [String, Map<String,ANY>], Map<String,ANY>
```

```
{
  "Option": "Income",
  "Income": [
    {
      "FinancialAccountName__c": "Simon Checking",
      "PartyId__c": "001SB000003ECqnYAG",
      "PartyName__c": "Simon Maurice",
      "TransactionCategory__c": "Salary",
      "TotalDepositsByCategory__c": 5000,
      "FinancialAccountId__c": "a0USB0000005xYv2AI"
    },
    {
      "FinancialAccountName__c": "Simon Checking",
      "PartyId__c": "001SB000003ECqnYAG",
      "PartyName__c": "Simon Maurice",
      "TransactionCategory__c": "Salary",
      "TotalDepositsByCategory__c": 5000,
      "FinancialAccountId__c": "a0USB0000005xYv2AI"
    },
    {
      "FinancialAccountName__c": "Simon Checking",
      "PartyId__c": "001SB000003ECqnYAG",
      "PartyName__c": "Simon Maurice",
      "TransactionCategory__c": "Bonus",
      "TotalDepositsByCategory__c": 5000,
      "FinancialAccountId__c": "a0USB0000005xYv2AI"
    }
  ]
}
```

```
{
  "Option": "Expenses",
  "Income": [
    {
      "FinancialAccountName__c": "Simon Checking",
      "PartyId__c": "001SB000003ECqnYAG",
      "PartyName__c": "Simon Maurice",
      "TransactionCategory__c": "Car Payment",
      "TotalExpensesByCategory__c": 10000,
      "FinancialAccountId__c": "a0USB0000005xYv2AI"
    }
  ]
}
```

```
{
  "TotalAmount": 15000,
  "Data": [
    {
      "Amount": 10000,
      "Category": "Salary  $10000 (67%)"
    },
    {
      "Amount": 5000,
      "Category": "Bonus  $5000 (33%)"
    }
  ]
}
```

## Related Topics

- executeOmniCallback (atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/apex_commonserviceexcellence_IntegrationHandler_executeOmniCallback.htm)
- getOmniContinuation (atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/apex_commonserviceexcellence_IntegrationHandler_getOmniContinuation.htm)
