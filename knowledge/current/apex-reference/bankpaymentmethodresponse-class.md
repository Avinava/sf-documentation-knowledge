---
title: "BankPaymentMethodResponse Class"
domain: apex-reference
topic: bankpaymentmethodresponse-class
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:22.249Z
estimatedTokens: 2533
namespace: CommercePayments
keywords: [BankPaymentMethodResponse, any, additional, gateway, payment, token, setAccountHolderType, accountHolderType, setAccountId, accountId, setAccountType, accountType, setBankCode, bankCode, setBankName]
---

# BankPaymentMethodResponse Class

> Sets any additional information that the gateway returned about the
      payment token.

**Namespace:** `CommercePayments`

# BankPaymentMethodResponse Class

This class contains information about the bank payment method response. The gateway adapter reads the gateway response and generates a BankPaymentMethodResponse, populating the required fields to create a bank payment method.

## Namespace

[CommercePayments](atlas.en-us.apexref.meta/apexref/apex_namespace_commercepayments.htm "Use the CommercePayments namespace to provide a safe and customizable platform for managing customer payments and refunds.")

-   **[BankPaymentMethodResponse Methods](atlas.en-us.apexref.meta/apexref/apex_class_commercepayments_BankPaymentMethodResponse.htm#apex_commercepayments_BankPaymentMethodResponse_methods)**


## BankPaymentMethodResponse Methods

The following are methods for BankPaymentMethodResponse.

-   **[setAccountHolderType(accountHolderType)](atlas.en-us.apexref.meta/apexref/apex_class_commercepayments_BankPaymentMethodResponse.htm#apex_commercepayments_BankPaymentMethodResponse_setAccountHolderType)**
    Sets the account holder type for the bank payment method.
-   **[setAccountId(accountId)](atlas.en-us.apexref.meta/apexref/apex_class_commercepayments_BankPaymentMethodResponse.htm#apex_commercepayments_BankPaymentMethodResponse_setAccountId)**
    Sets the Payments account ID associated with the bank payment method.
-   **[setAccountType(accountType)](atlas.en-us.apexref.meta/apexref/apex_class_commercepayments_BankPaymentMethodResponse.htm#apex_commercepayments_BankPaymentMethodResponse_setAccountType)**
    Sets the account type for the bank payment method.
-   **[setBankCode(bankCode)](atlas.en-us.apexref.meta/apexref/apex_class_commercepayments_BankPaymentMethodResponse.htm#apex_commercepayments_BankPaymentMethodResponse_setBankCode)**
    Sets the unique nine-digit code that identifies the bank code for the bank payment method.
-   **[setBankName(bankName)](atlas.en-us.apexref.meta/apexref/apex_class_commercepayments_BankPaymentMethodResponse.htm#apex_commercepayments_BankPaymentMethodResponse_setBankName)**
    Sets the bank name for the bank payment method.
-   **[setBankType(bankType)](atlas.en-us.apexref.meta/apexref/apex_class_commercepayments_BankPaymentMethodResponse.htm#apex_commercepayments_BankPaymentMethodResponse_setBankType)**
    Sets the bank type for the bank payment method.
-   **[setComments(comments)](atlas.en-us.apexref.meta/apexref/apex_class_commercepayments_BankPaymentMethodResponse.htm#apex_commercepayments_BankPaymentMethodResponse_setComments)**
    Sets any additional details about the bank account.
-   **[setEmail(email)](atlas.en-us.apexref.meta/apexref/apex_class_commercepayments_BankPaymentMethodResponse.htm#apex_commercepayments_BankPaymentMethodResponse_setEmail)**
    Sets the email address of the bank account holder.
-   **[setGatewayToken(gatewayToken)](atlas.en-us.apexref.meta/apexref/apex_class_commercepayments_BankPaymentMethodResponse.htm#apex_commercepayments_BankPaymentMethodResponse_setGatewayToken)**
    Sets the gateway token value that the gateway returned.
-   **[setGatewayTokenDetails(gatewayTokenDetails)](atlas.en-us.apexref.meta/apexref/apex_class_commercepayments_BankPaymentMethodResponse.htm#apex_commercepayments_BankPaymentMethodResponse_setGatewayTokenDetails)**
    Sets any additional information that the gateway returned about the payment token.
-   **[setLast4(lastFour)](atlas.en-us.apexref.meta/apexref/apex_class_commercepayments_BankPaymentMethodResponse.htm#apex_commercepayments_BankPaymentMethodResponse_setLast4)**
    Sets the last four digits of the bank account number.
-   **[setName(name)](atlas.en-us.apexref.meta/apexref/apex_class_commercepayments_BankPaymentMethodResponse.htm#apex_commercepayments_BankPaymentMethodResponse_setName)**
    Sets the name of the account holder for the bank payment method.
-   **[setSavedPaymentMethodId(savedPaymentMethodId)](atlas.en-us.apexref.meta/apexref/apex_class_commercepayments_BankPaymentMethodResponse.htm#apex_commercepayments_BankPaymentMethodResponse_setSavedPaymentMethodId)**
    Sets the saved payment method ID for the bank account holder.
-   **[setStandardEntryClassCode(standardEntryClassCode)](atlas.en-us.apexref.meta/apexref/apex_class_commercepayments_BankPaymentMethodResponse.htm#apex_commercepayments_BankPaymentMethodResponse_setStandardEntryClassCode)**
    Sets the code that identifies the type of electronic payment transaction being processed within the Automated Clearing House (ACH) network.

### setAccountHolderType(accountHolderType)

Sets the account holder type for the bank payment method.

#### Signature

public void setAccountHolderType(commercepayments.AccountHolderType accountHolderType)

#### Parameters

accountHolderType

Type: commercepayments.[AccountHolderType](atlas.en-us.apexref.meta/apexref/apex_enum_commercepayments_AccountHolderType.htm "Specifies the type of the account holder.")

#### Return Value

Type: void

### setAccountId(accountId)

Sets the Payments account ID associated with the bank payment method.

#### Signature

public void setAccountId(String accountId)

#### Parameters

accountId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

#### Return Value

Type: void

### setAccountType(accountType)

Sets the account type for the bank payment method.

#### Signature

public void setAccountType(commercepayments.AccountType accountType)

#### Parameters

accountType

Type: commercepayments.[AccountType](atlas.en-us.apexref.meta/apexref/apex_enum_commercepayments_AccountType.htm "Specifies the account type.")

#### Return Value

Type: void

### setBankCode(bankCode)

Sets the unique nine-digit code that identifies the bank code for the bank payment method.

#### Signature

public void setBankCode(String bankCode)

#### Parameters

bankCode

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

#### Return Value

Type: void

### setBankName(bankName)

Sets the bank name for the bank payment method.

#### Signature

public void setBankName(String bankName)

#### Parameters

bankName

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

#### Return Value

Type: void

### setBankType(bankType)

Sets the bank type for the bank payment method.

#### Signature

public void setBankType(commercepayments.BankType bankType)

#### Parameters

bankType

Type: commercepayments.[BankType](atlas.en-us.apexref.meta/apexref/apex_enum_commercepayments_BankType.htm "Specifies the bank type.")

#### Return Value

Type: void

### setComments(comments)

Sets any additional details about the bank account.

#### Signature

public void setComments(String comments)

#### Parameters

comments

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

#### Return Value

Type: void

### setEmail(email)

Sets the email address of the bank account holder.

#### Signature

public void setEmail(String email)

#### Parameters

email

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

#### Return Value

Type: void

### setGatewayToken(gatewayToken)

Sets the gateway token value that the gateway returned.

#### Signature

public void setGatewayToken(String gatewayToken)

#### Parameters

gatewayToken

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

#### Return Value

Type: void

### setGatewayTokenDetails(gatewayTokenDetails)

Sets any additional information that the gateway returned about the payment token.

#### Signature

public void setGatewayTokenDetails(String gatewayTokenDetails)

#### Parameters

gatewayTokenDetails

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

#### Return Value

Type: void

### setLast4(lastFour)

Sets the last four digits of the bank account number.

#### Signature

public void setLast4(String lastFour)

#### Parameters

lastFour

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

#### Return Value

Type: void

### setName(name)

Sets the name of the account holder for the bank payment method.

#### Signature

public void setName(String name)

#### Parameters

name

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

#### Return Value

Type: void

### setSavedPaymentMethodId(savedPaymentMethodId)

Sets the saved payment method ID for the bank account holder.

#### Signature

public void setSavedPaymentMethodId(String savedPaymentMethodId)

#### Parameters

savedPaymentMethodId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

#### Return Value

Type: void

### setStandardEntryClassCode(standardEntryClassCode)

Sets the code that identifies the type of electronic payment transaction being processed within the Automated Clearing House (ACH) network.

#### Signature

public void setStandardEntryClassCode(commercepayments.StandardEntryClassCode standardEntryClassCode)

#### Parameters

standardEntryClassCode

Type: commercepayments.[StandardEntryClassCode](atlas.en-us.apexref.meta/apexref/apex_enum_commercepayments_StandardEntryClassCode.htm "Specifies the three-letter code that identifies the type of electronic payment transaction being processed within the Automated Clearing House (ACH) network.")

#### Return Value

Type: void

## Related Topics

- CommercePayments (atlas.en-us.apexref.meta/apexref/apex_namespace_commercepayments.htm)
- BankPaymentMethodResponse Methods (atlas.en-us.apexref.meta/apexref/apex_class_commercepayments_BankPaymentMethodResponse.htm)
- setAccountHolderType(accountHolderType) (atlas.en-us.apexref.meta/apexref/apex_class_commercepayments_BankPaymentMethodResponse.htm)
- setAccountId(accountId) (atlas.en-us.apexref.meta/apexref/apex_class_commercepayments_BankPaymentMethodResponse.htm)
- setAccountType(accountType) (atlas.en-us.apexref.meta/apexref/apex_class_commercepayments_BankPaymentMethodResponse.htm)
- setBankCode(bankCode) (atlas.en-us.apexref.meta/apexref/apex_class_commercepayments_BankPaymentMethodResponse.htm)
- setBankName(bankName) (atlas.en-us.apexref.meta/apexref/apex_class_commercepayments_BankPaymentMethodResponse.htm)
- setBankType(bankType) (atlas.en-us.apexref.meta/apexref/apex_class_commercepayments_BankPaymentMethodResponse.htm)
- setComments(comments) (atlas.en-us.apexref.meta/apexref/apex_class_commercepayments_BankPaymentMethodResponse.htm)
- setEmail(email) (atlas.en-us.apexref.meta/apexref/apex_class_commercepayments_BankPaymentMethodResponse.htm)
