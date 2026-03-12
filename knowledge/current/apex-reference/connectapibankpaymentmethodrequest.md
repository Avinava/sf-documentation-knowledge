---
title: "ConnectApi.BankPaymentMethodRequest"
domain: apex-reference
topic: connectapibankpaymentmethodrequest
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:24.365Z
estimatedTokens: 564
keywords: [ConnectApi.BankPaymentMethodRequest, Bank, payment, input, representation.]
---

# ConnectApi.BankPaymentMethodRequest

> Bank payment method input representation.

# ConnectApi.BankPaymentMethodRequest

Bank payment method input representation.

| Property | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| accountHolder​FirstName | String | First name of the bank account holder. | Optional | 65.0 |
| accountHolder​LastName | String | Last name of the bank account holder. | Optional | 65.0 |
| accountHolderName | String | Name of the bank account holder. | Required | 65.0 |
| accountHolder​Type | ConnectApi.​AccountHolderType | Bank account holder type. Valid values are:BusinessIndividual | Optional | 65.0 |
| accountId | String | Salesforce account to which this payment method is linked. | Required | 65.0 |
| accountNumber | String | Unique account number for the bank account. | Required | 65.0 |
| accountType | ConnectApi.​AccountType | Bank account type. Valid values are:BusinessSavingsfor e.g. Savings/Checking | Optional | 65.0 |
| autoPay | Boolean | Indicates whether a token for recurring payments is being requested (true) or not (false). The token lets the payment method be used for recurring payments. | Optional | 65.0 |
| bankCode | String | Routing number is a unique nine-digit code that identifies the bank. | Required | 65.0 |
| bankType | ConnectApi.​BankType | Bank type. Valid values are:ACH—Automated Clearing House transactionBACS—Bankers' Automated Clearing Services transactionBECS—Bulk Electronic Clearing System transactionSepaDebit—Single Euro Payments Area transaction | Optional | 65.0 |
| comments | String | Comments for providing more information about the bank. | Optional | 65.0 |
| email | String | Email address of the bank account holder. | Optional | 65.0 |
| mandate | String | Authorization from the account holder to debit their payment method. | Optional | 65.0 |
| nickName | String | Nick name of the bank account holder. | Optional | 65.0 |
| standardEntry​ClassCode | ConnectApi.​StandardEntryClassCode | Three-letter code that identifies the type of electronic payment transaction being processed within the Automated Clearing House (ACH) network. Valid values are:CCD—Corporate Credit or DebitPPD—Prearranged Payment and DepositTEL—Telephone-Initiated EntryWEB—Internet Initiated/Mobile | Optional | 65.0 |

## Related Topics

- String (atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm)
- ConnectApi.​AccountHolderType (atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm)
- ConnectApi.​AccountType (atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm)
- Boolean (atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm)
- ConnectApi.​BankType (atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm)
- ConnectApi.​StandardEntryClassCode (atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm)
