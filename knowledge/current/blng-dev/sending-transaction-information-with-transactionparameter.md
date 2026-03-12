---
title: "Sending Transaction Information with TransactionParameter"
domain: blng-dev
topic: sending-transaction-information-with-transactionparameter
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:07.998Z
estimatedTokens: 1178
keywords: [Sending, Transaction, TransactionParameter, Salesforce, Billing, payment, gateway, package, class’s, attributes, API, Center, run]
---

# Sending Transaction Information with TransactionParameter

> The transaction parameter class represents a list of transaction field values that
  Salesforce Billing sends to the payment gateway package. You can set the class’s attributes
  through Salesforce Billing global API, the Payment Center, or a payment run.

# Sending Transaction Information with TransactionParameter

The transaction parameter class represents a list of transaction field values that Salesforce Billing sends to the payment gateway package. You can set the class’s attributes through Salesforce Billing global API, the Payment Center, or a payment run.

For complete reference information on the TransactionParameter class’s methods and parameters, review [TransactionParameter Class](atlas.en-us.blng_dev.meta/blng_dev/apex_class_blng_TransactionParameter.htm#apex_class_blng_TransactionParameter "Acts as a container to store calculation-specific information.").

This table shows how to set TransactionParameter’s attributes for transactions made through Salesforce Billing Global API, the Payment Center, or payment runs. Billing Global API attributes are optional unless otherwise indicated.

| TransactionParameter Attribute | Source: Billing Global API | Source: Payment Center | Source: Payment Run |
| --- | --- | --- | --- |
| PaymentMethod | setPaymentMethod(paymentMethod) | Set by the Billing package. | Set by the Billing package. |
| Invoice | setInvoice(invoice)Required for sending Level 2 (L2) and Level 3 (L3) parameters when making a payment against an invoice.Level 2 includes data such as tax details and customer codes. Level 3 includes additional details such as item descriptions and quantities. Level 2 and Level 3 payment processing is used especially for B2B and B2G transactions. | Set by the Billing package for payments made against an invoice. | Set by the Billing package for all payments. |
| InvoiceLine | setInvoiceLine(line)Sets a list of invoice lines. Required for sending L2 and L3 parameters when making a payment against one or more invoice lines. | Set by the Billing package for payments made against an invoice line. | Not set. |
| Account | setAccount(accountInstance) | Set by the Billing package. | Set by the Billing package. |
| RequestBody | setRequestBody(requestBody) | Set by the payment gateway package. Contains the request sent to the gateway. | Set by the payment gateway package. Contains the request sent to the gateway. |
| FirstName | setFirstName(firstName) | Set by the Billing package. | Set by the Billing packag.e |
| LastName | setLastName(lastName) | Set by the Billing package. | Set by the Billing package. |
| EmailId | setEmailId(emailId) | Set by the Billing package. | Set by the Billing package. |
| Street | setStreet(street) | Set by the Billing package. | Set by the Billing package. |
| City | setCity(city) | Set by the Billing package. | Set by the Billing package. |
| State | setState(state) | Set by the Billing package. | Set by the Billing package. |
| ZIP code | setZipCode(zipCode) | Set by the Billing package. | Set by the Billing package. |
| Country | setCountry(country) | Set by the Billing package. | Set by the Billing package. |
| Phone | setPhone(phone) | Set by the Billing package. | Set by the Billing package. |
| Amount | setAmount(amount) | Set by the Billing package. | Set by the Billing package. |
| Transaction | Not set | Not set | Set by the Billing package. |
| RequestingInvoiceId | setRequestingInvoiceId(requestingInvoiceId) | Set by the Billing package for L2 and L3 parameters. | Set by the Billing package for L2 and L3 parameters. |
| CardCodeResponse | setCardCodeResponseRequired only for reference refund transactions made through Payeezy. | Set by the Billing package for reference refunds made through Payeezy. | Not set |
| MerchantId | setMerchantId() | Set by the Billing package for reference refunds made through Payeezy. | Not set |
| GatewayId | setGateway(gateway)Sets the transaction ID for the payment. Required only for reference refund transactions.Required to set by caller for Reference Refund transaction. It is transaction id for the payment. | Set by the Billing package as Gateway reference ID for payment. Used in reference refund transactions. | Not set |
| CurrencyId | setCurrencyId(currencyId)Set only for transactions made through Payeezy. | Set only for transactions made through Payeezy. | Set only for transactions made through Payeezy. |
| Gateway | setGateway(gateway)Required. Contains the ID of the Salesforce Billing payment gateway record used in the transaction. | Set by the Billing package. | Set by the Billing package. |
| ResponseValueByKey | Not set | Not set. | NA |
| Payment | setPayment(paymentInstance)Required to set when calling refundTransaction. Must query all fields from the payment instance except system fields. | Set by the Billing package when RefundTransaction is called. Must query all fields from the payment instance except system fields. | NA |

## Example

```

```

## Code Examples

```apex
global class TransactionParameter 
{
    
    global Map<string, string> mapOfResponseValueByKey = new Map<string, string>();
    
    // Transaction Result
    global TransactionResult transactionResult = new TransactionResult();
    
    global void setTransactionUseCase(TransactionUseCase transactionUseCase) {}

    global TransactionUseCase getTransactionUseCase() {}

    global void setTransactionFrequencyType(TransactionFrequency transactionFrequencyType) {}

    global TransactionFrequency getTransactionFrequencyType() {}

    global void setIsCredentialsOnFile(Boolean isCredentialsOnFile) {}

    global Boolean getIsCredentialsOnFile() {}

    //Set RequestingInvoiceId
    global void setRequestingInvoiceId(Id requestingInvoiceId) {}
    
    //Get RequestingInvoiceId
    global Id getRequestingInvoiceId() {}

    //Set cardCodeResponse
    global void setCardCodeResponse(String cardCodeResponse) {}

    // Get cardCodeResponse
    global String getCardCodeResponse() {}

    // Set requestingCreditCardNumber
    global void setCardNumber(String requestingCreditCardNumber) {}

    // Get requestingCreditCardNumber
    global String getCardNumber() {}

    // Set Payment
    global void setPayment(Payment__c paymentInstance) {}

    // Get Payment
    global Payment__c getPayment() {}

    // Get merchantRefId
    global String getMerchantId() {}

    //Set MerchantId
    global void setMerchantId(String merchantId) {}

    //set Gateway ID
    global void setGateWayId(String gatewayId) {}

    // Get Gateway ID
    global String getGateWayId() {}
    
    // Get ResponseValueByKey
    global Map<string, string> getResponseValueByKey() {}
    
    // Set Gateway
    global void setGateWay(PaymentGateway__c gateway) {}
   
    // Get Gateway
    global PaymentGateway__c getGateWay() {}

    // Set PaymentMethod
    global void setPaymentMethod(PaymentMethod__c paymentMethod) {}
    
    // Get PaymentMethod
    global PaymentMethod__c getPaymentMethod() {}
    
    // Set Invoice
    global void setInvoice(Invoice__c invoice) {}
    
    // Get Invoice
    global Invoice__c getInvoice() {}

    // Set listOfInvoiceLine
    global void setInvoiceLine(InvoiceLine__c line) {}
    
    // Get listOfInvoiceLine
    global List<InvoiceLine__c> getInvoiceLine() {}

    // Set Transaction
    global void setTransaction(PaymentTransaction__c transactionInstance) {}
    
    // Get Transaction
    global PaymentTransaction__c getTransaction() {}
    
    // Set Account
    global void setAccount(Account accountInstance) {}
    
    // Get Account
    global Account getAccount() {}
    
    // Set RequestBody
    global void setRequestBody(String requestBody) {}
    
    // Get RequestBody
    global String getRequestBody() {}
    
    // Set FirstName
    global void setFirstName(String firstName) {}
    
    // Get FirstName
    global String getFirstName() {}
    
    // Set LastName
    global void setLastName(String lastName) {}
    
    // Get LastName
    global String getLastName() {}
    
    // Set EmailId
    global void setEmailId(String emailId) {}
    
    // Get EmailId
    global String getEmailId() {}
    
    // Set Street
    global void setStreet(String street) {}
    
    // Get Street
    global String getStreet() {}
    
    // Set City
    global void setCity(String city) {}
    
    // Get City
    global String getCity() {}
    
    // Set State
    global void setState(String state) {}
    
    // Get State
    global String getState() {}
    
    // Set ZipCode
    global void setZipCode(String zipCode) {}
    
    // Get ZipCode
    global String getZipCode() {}
    
    // Set Country
    global void setCountry(String country) {}
    
    // Get Country
    global String getCountry() {}
    
    // Set Phone
    global void setPhone(String phone) {}
    
    // Get Phone
    global String getPhone() {}
    
    // Set Currency Id
    global void setCurrencyId(String currencyId) {}
    
    // Get Currency Id
    global String getCurrencyId() {}
    
    // Set Amount
    global void setAmount(String amount) {}
    
    // Get Amount
    global String getAmount() {}

}
```

## Related Topics

- TransactionParameter Class (atlas.en-us.blng_dev.meta/blng_dev/apex_class_blng_TransactionParameter.htm)
