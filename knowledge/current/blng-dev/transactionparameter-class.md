---
title: "TransactionParameter Class"
domain: blng-dev
topic: transactionparameter-class
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:08.143Z
estimatedTokens: 4373
keywords: [TransactionParameter, Acts, container, store, calculation-specific, setRequestingInvoiceId, requestingInvoiceId, getRequestingInvoiceId, setCardCodeResponse, cardCodeResponse, getCardCodeResponse, setCardNumber, requestingCreditCardNumber, getCardNumber, setPayment]
---

# TransactionParameter Class

> Acts as a container to store calculation-specific
    information.

# TransactionParameter Class

Acts as a container to store calculation-specific information.

## Namespace

blng

-   **[TransactionParameter Methods](atlas.en-us.blng_dev.meta/blng_dev/apex_class_blng_TransactionParameter.htm#apex_blng_TransactionParameter_methods)**


## TransactionParameter Methods

The following are methods for TransactionParameter.

-   **[setRequestingInvoiceId(requestingInvoiceId)](atlas.en-us.blng_dev.meta/blng_dev/apex_class_blng_TransactionParameter.htm#apex_blng_TransactionParameter_setRequestingInvoiceId)**
    Sets RequestingInvoiceId.
-   **[getRequestingInvoiceId()](atlas.en-us.blng_dev.meta/blng_dev/apex_class_blng_TransactionParameter.htm#apex_blng_TransactionParameter_getRequestingInvoiceId)**
    Gets Requesting InvoiceId.
-   **[setCardCodeResponse(cardCodeResponse)](atlas.en-us.blng_dev.meta/blng_dev/apex_class_blng_TransactionParameter.htm#apex_blng_TransactionParameter_setCardCodeResponse)**
    Sets cardCodeResponse.
-   **[getCardCodeResponse()](atlas.en-us.blng_dev.meta/blng_dev/apex_class_blng_TransactionParameter.htm#apex_blng_TransactionParameter_getCardCodeResponse)**
    Gets cardCodeResponse.
-   **[setCardNumber(requestingCreditCardNumber)](atlas.en-us.blng_dev.meta/blng_dev/apex_class_blng_TransactionParameter.htm#apex_blng_TransactionParameter_setCardNumber)**
    Sets requestingCreditCardNumber.
-   **[getCardNumber()](atlas.en-us.blng_dev.meta/blng_dev/apex_class_blng_TransactionParameter.htm#apex_blng_TransactionParameter_getCardNumber)**
    Gets requestingCreditCardNumber.
-   **[setPayment(paymentInstance)](atlas.en-us.blng_dev.meta/blng_dev/apex_class_blng_TransactionParameter.htm#apex_blng_TransactionParameter_setPayment)**
    Sets payment details like merchantRefId, RequestCreditCardNumber\_\_c, CardCodeResponse\_\_c, GatewayID\_\_c. Also sets payment method details for PaymentType\_\_c, CardExpirationYear\_\_c, CardExpirationMonth\_\_c, BankName\_\_c, BankAccountType\_\_c, BankAccountNumber\_\_c, BankAccountName\_\_c, CardType\_\_c, BankRoutingCode\_\_c if they aren't already set.
-   **[getPayment()](atlas.en-us.blng_dev.meta/blng_dev/apex_class_blng_TransactionParameter.htm#apex_blng_TransactionParameter_getPayment)**
    Gets Payment.
-   **[getMerchantId()](atlas.en-us.blng_dev.meta/blng_dev/apex_class_blng_TransactionParameter.htm#apex_blng_TransactionParameter_getMerchantId)**
    Gets merchantRefId.
-   **[setMerchantId()](atlas.en-us.blng_dev.meta/blng_dev/apex_class_blng_TransactionParameter.htm#apex_blng_TransactionParameter_setMerchantId)**
    Sets MerchantId.
-   **[getGatewayId()](atlas.en-us.blng_dev.meta/blng_dev/apex_class_blng_TransactionParameter.htm#apex_blng_TransactionParameter_getGatewayId)**
    Gets Gateway ID.
-   **[getResponseValueByKey()](atlas.en-us.blng_dev.meta/blng_dev/apex_class_blng_TransactionParameter.htm#apex_blng_TransactionParameter_getResponseValueByKey)**
    Gets ResponseValueByKey
-   **[setGateway(gateway)](atlas.en-us.blng_dev.meta/blng_dev/apex_class_blng_TransactionParameter.htm#apex_blng_TransactionParameter_setGateway)**
    Sets Gateway ID.
-   **[setPaymentMethod(paymentMethod)](atlas.en-us.blng_dev.meta/blng_dev/apex_class_blng_TransactionParameter.htm#apex_blng_TransactionParameter_setPaymentMethod)**
    Sets PaymentMethod.
-   **[getPaymentMethod()](atlas.en-us.blng_dev.meta/blng_dev/apex_class_blng_TransactionParameter.htm#apex_blng_TransactionParameter_getPaymentMethod)**
    Gets PaymentMethod.
-   **[setInvoice(invoice)](atlas.en-us.blng_dev.meta/blng_dev/apex_class_blng_TransactionParameter.htm#apex_blng_TransactionParameter_setInvoice)**
    Sets invoice.
-   **[getInvoice()](atlas.en-us.blng_dev.meta/blng_dev/apex_class_blng_TransactionParameter.htm#apex_blng_TransactionParameter_getInvoice)**
    Gets Invoice.
-   **[setInputParameter(inputParameter)](atlas.en-us.blng_dev.meta/blng_dev/apex_class_blng_TransactionParameter.htm#apex_blng_TransactionParameter_setInputParameter)**
    Sets the input parameters for a payment capture transaction.
-   **[getInputParameter()](atlas.en-us.blng_dev.meta/blng_dev/apex_class_blng_TransactionParameter.htm#apex_blng_TransactionParameter_getInputParameter)**
    Returns the input parameters sent from the inputParameter class.
-   **[setInvoiceLine(line)](atlas.en-us.blng_dev.meta/blng_dev/apex_class_blng_TransactionParameter.htm#apex_blng_TransactionParameter_setInvoiceLine)**
    Sets listOfInvoiceLine.
-   **[getInvoiceLine()](atlas.en-us.blng_dev.meta/blng_dev/apex_class_blng_TransactionParameter.htm#apex_blng_TransactionParameter_getInvoiceLine)**
    Gets listOfInvoiceLine.
-   **[setTransaction(transactionInstance)](atlas.en-us.blng_dev.meta/blng_dev/apex_class_blng_TransactionParameter.htm#apex_blng_TransactionParameter_setTransaction)**
    Sets transaction instance and details like merchantRefId, RequestCreditCardNumber, ResponseCode, and GatewayID.
-   **[getTransaction()](atlas.en-us.blng_dev.meta/blng_dev/apex_class_blng_TransactionParameter.htm#apex_blng_TransactionParameter_getTransaction)**
    Gets Transaction.
-   **[setAccount(accountInstance)](atlas.en-us.blng_dev.meta/blng_dev/apex_class_blng_TransactionParameter.htm#apex_blng_TransactionParameter_setAccount)**
    Sets Account.
-   **[getAccount()](atlas.en-us.blng_dev.meta/blng_dev/apex_class_blng_TransactionParameter.htm#apex_blng_TransactionParameter_getAccount)**
    Gets Account.
-   **[setRequestBody(requestBody)](atlas.en-us.blng_dev.meta/blng_dev/apex_class_blng_TransactionParameter.htm#apex_blng_TransactionParameter_setRequestBody)**
    Sets RequestBody.
-   **[getRequestBody()](atlas.en-us.blng_dev.meta/blng_dev/apex_class_blng_TransactionParameter.htm#apex_blng_TransactionParameter_getRequestBody)**
    Gets RequestBody.
-   **[setFirstName(firstName)](atlas.en-us.blng_dev.meta/blng_dev/apex_class_blng_TransactionParameter.htm#apex_blng_TransactionParameter_setFirstName)**
    Sets FirstName.
-   **[getFirstName()](atlas.en-us.blng_dev.meta/blng_dev/apex_class_blng_TransactionParameter.htm#apex_blng_TransactionParameter_getFirstName)**
    Gets FirstName.
-   **[setLastName(lastName)](atlas.en-us.blng_dev.meta/blng_dev/apex_class_blng_TransactionParameter.htm#apex_blng_TransactionParameter_setLastName)**
    Sets LastName.
-   **[getLastName()](atlas.en-us.blng_dev.meta/blng_dev/apex_class_blng_TransactionParameter.htm#apex_blng_TransactionParameter_getLastName)**
    Gets LastName.
-   **[setEmailId(emailId)](atlas.en-us.blng_dev.meta/blng_dev/apex_class_blng_TransactionParameter.htm#apex_blng_TransactionParameter_setEmailId)**
    Sets EmailId.
-   **[getEmailId()](atlas.en-us.blng_dev.meta/blng_dev/apex_class_blng_TransactionParameter.htm#apex_blng_TransactionParameter_getEmailId)**
    Gets EmailId.
-   **[setStreet(street)](atlas.en-us.blng_dev.meta/blng_dev/apex_class_blng_TransactionParameter.htm#apex_blng_TransactionParameter_setStreet)**
    Sets street.
-   **[getStreet()](atlas.en-us.blng_dev.meta/blng_dev/apex_class_blng_TransactionParameter.htm#apex_blng_TransactionParameter_getStreet)**
    Gets Street.
-   **[setCity(city)](atlas.en-us.blng_dev.meta/blng_dev/apex_class_blng_TransactionParameter.htm#apex_blng_TransactionParameter_setCity)**
    Sets City.
-   **[getCity()](atlas.en-us.blng_dev.meta/blng_dev/apex_class_blng_TransactionParameter.htm#apex_blng_TransactionParameter_getCity)**
    Gets City.
-   **[setState(state)](atlas.en-us.blng_dev.meta/blng_dev/apex_class_blng_TransactionParameter.htm#apex_blng_TransactionParameter_setState)**
    Sets state.
-   **[getState()](atlas.en-us.blng_dev.meta/blng_dev/apex_class_blng_TransactionParameter.htm#apex_blng_TransactionParameter_getState)**
    Gets State.
-   **[setZipCode(zipCode)](atlas.en-us.blng_dev.meta/blng_dev/apex_class_blng_TransactionParameter.htm#apex_blng_TransactionParameter_setZipCode)**
    Sets zip code.
-   **[getZipCode()](atlas.en-us.blng_dev.meta/blng_dev/apex_class_blng_TransactionParameter.htm#apex_blng_TransactionParameter_getZipCode)**
    Gets ZipCode.
-   **[setCountry(country)](atlas.en-us.blng_dev.meta/blng_dev/apex_class_blng_TransactionParameter.htm#apex_blng_TransactionParameter_setCountry)**
    Sets Country.
-   **[getCountry()](atlas.en-us.blng_dev.meta/blng_dev/apex_class_blng_TransactionParameter.htm#apex_blng_TransactionParameter_getCountry)**
    Gets Country.
-   **[setPhone(phone)](atlas.en-us.blng_dev.meta/blng_dev/apex_class_blng_TransactionParameter.htm#apex_blng_TransactionParameter_setPhone)**
    Sets phone.
-   **[getPhone()](atlas.en-us.blng_dev.meta/blng_dev/apex_class_blng_TransactionParameter.htm#apex_blng_TransactionParameter_getPhone)**
    Gets Phone.
-   **[setCurrencyId(currencyId)](atlas.en-us.blng_dev.meta/blng_dev/apex_class_blng_TransactionParameter.htm#apex_blng_TransactionParameter_setCurrencyId)**
    Sets Currency Id.
-   **[getCurrencyId()](atlas.en-us.blng_dev.meta/blng_dev/apex_class_blng_TransactionParameter.htm#apex_blng_TransactionParameter_getCurrencyId)**
    Gets Currency Id.
-   **[setAmount(amount)](atlas.en-us.blng_dev.meta/blng_dev/apex_class_blng_TransactionParameter.htm#apex_blng_TransactionParameter_setAmount)**
    Sets amount.
-   **[getAmount()](atlas.en-us.blng_dev.meta/blng_dev/apex_class_blng_TransactionParameter.htm#apex_blng_TransactionParameter_getAmount)**
    Gets Amount.

### setRequestingInvoiceId(requestingInvoiceId)

Sets RequestingInvoiceId.

#### Signature

global void setRequestingInvoiceId(Id requestingInvoiceId)

#### Parameters

requestingInvoiceId

Type: Id

#### Return Value

Type: void

### getRequestingInvoiceId()

Gets Requesting InvoiceId.

#### Signature

global Id getRequestingInvoiceId()

#### Return Value

Type: Id

### setCardCodeResponse(cardCodeResponse)

Sets cardCodeResponse.

#### Signature

global void setCardCodeResponse(String cardCodeResponse)

#### Parameters

cardCodeResponse

Type: String

#### Return Value

Type: void

### getCardCodeResponse()

Gets cardCodeResponse.

#### Signature

global String getCardCodeResponse()

#### Return Value

Type: String

### setCardNumber(requestingCreditCardNumber)

Sets requestingCreditCardNumber.

#### Signature

global void setCardNumber(String requestingCreditCardNumber)

#### Parameters

requestingCreditCardNumber

Type: String

#### Return Value

Type: void

### getCardNumber()

Gets requestingCreditCardNumber.

#### Signature

global String getCardNumber()

#### Return Value

Type: String

### setPayment(paymentInstance)

Sets payment details like merchantRefId, RequestCreditCardNumber\_\_c, CardCodeResponse\_\_c, GatewayID\_\_c. Also sets payment method details for PaymentType\_\_c, CardExpirationYear\_\_c, CardExpirationMonth\_\_c, BankName\_\_c, BankAccountType\_\_c, BankAccountNumber\_\_c, BankAccountName\_\_c, CardType\_\_c, BankRoutingCode\_\_c if they aren't already set.

#### Signature

global void setPayment(Payment\_\_c paymentInstance)

#### Parameters

paymentInstance

Type: Payment\_\_c

#### Return Value

Type: void

### getPayment()

Gets Payment.

#### Signature

global Payment\_\_c getPayment()

#### Return Value

Type: Payment\_\_c

### getMerchantId()

Gets merchantRefId.

#### Signature

global String getMerchantId()

#### Return Value

Type: String

### setMerchantId()

Sets MerchantId.

#### Signature

global String setMerchantId()

#### Return Value

Type: String

### getGatewayId()

Gets Gateway ID.

#### Signature

global String getGatewayId()

#### Return Value

Type: String

### getResponseValueByKey()

Gets ResponseValueByKey

#### Signature

global Map<String, String\> getResponseValueByKey()

#### Return Value

Type: Map<String, String>

### setGateway(gateway)

Sets Gateway ID.

#### Signature

global void setGateway(PaymentGateway\_\_c gateway)

#### Parameters

gateway

Type: PaymentGateway\_\_c

#### Return Value

Type: void

### setPaymentMethod(paymentMethod)

Sets PaymentMethod.

#### Signature

global void setPaymentMethod(PaymentMethod\_\_c paymentMethod)

#### Parameters

paymentMethod

Type: PaymentMethod\_\_c

#### Return Value

Type: void

### getPaymentMethod()

Gets PaymentMethod.

#### Signature

global PaymentMethod\_\_c getPaymentMethod()

#### Return Value

Type: PaymentMethod\_\_c

### setInvoice(invoice)

Sets invoice.

#### Signature

global void setInvoice(Invoice\_\_c invoice)

#### Parameters

invoice

Type: Invoice\_\_c

#### Return Value

Type: void

### getInvoice()

Gets Invoice.

#### Signature

global Invoice\_\_c getInvoice()

#### Return Value

Type: Invoice\_\_c

### setInputParameter(inputParameter)

Sets the input parameters for a payment capture transaction.

#### Signature

global void setInputParameter(InputParameter inputParameter)

#### Parameters

inputParameter

Type: InputParameter

#### Return Value

Type: void

### getInputParameter()

Returns the input parameters sent from the inputParameter class.

#### Signature

global InputParameter getInputParameter()

#### Return Value

Type: InputParameter

### setInvoiceLine(line)

Sets listOfInvoiceLine.

#### Signature

global void setInvoiceLine(InvoiceLine\_\_c line)

#### Parameters

line

Type: InvoiceLine\_\_c

#### Return Value

Type: void

### getInvoiceLine()

Gets listOfInvoiceLine.

#### Signature

global List<InvoiceLine\_\_c> getInvoiceLine()

#### Return Value

Type: List<InvoiceLine\_\_c>

### setTransaction(transactionInstance)

Sets transaction instance and details like merchantRefId, RequestCreditCardNumber, ResponseCode, and GatewayID.

#### Signature

global void setTransaction(PaymentTransaction\_\_c transactionInstance)

#### Parameters

transactionInstance

Type: PaymentTransaction\_\_c

#### Return Value

Type: void

### getTransaction()

Gets Transaction.

#### Signature

global PaymentTransaction\_\_c getTransaction()

#### Return Value

Type: PaymentTransaction\_\_c

### setAccount(accountInstance)

Sets Account.

#### Signature

global void setAccount(Account accountInstance)

#### Parameters

accountInstance

Type: Account

#### Return Value

Type: void

### getAccount()

Gets Account.

#### Signature

global Account getAccount()

#### Return Value

Type: Account

### setRequestBody(requestBody)

Sets RequestBody.

#### Signature

global void setRequestBody(String requestBody)

#### Parameters

requestBody

Type: String

#### Return Value

Type: void

### getRequestBody()

Gets RequestBody.

#### Signature

global String getRequestBody()

#### Return Value

Type: String

### setFirstName(firstName)

Sets FirstName.

#### Signature

global void setFirstName(String firstName)

#### Parameters

firstName

Type: String

#### Return Value

Type: void

### getFirstName()

Gets FirstName.

#### Signature

global String getFirstName()

#### Return Value

Type: String

### setLastName(lastName)

Sets LastName.

#### Signature

global void setLastName(String lastName)

#### Parameters

lastName

Type: String

#### Return Value

Type: void

### getLastName()

Gets LastName.

#### Signature

global String getLastName()

#### Return Value

Type: String

### setEmailId(emailId)

Sets EmailId.

#### Signature

global void setEmailId(String emailId)

#### Parameters

emailId

Type: String

#### Return Value

Type: void

### getEmailId()

Gets EmailId.

#### Signature

global String getEmailId()

#### Return Value

Type: String

### setStreet(street)

Sets street.

#### Signature

global void setStreet(String street)

#### Parameters

street

Type: String

#### Return Value

Type: void

### getStreet()

Gets Street.

#### Signature

global String getStreet()

#### Return Value

Type: String

### setCity(city)

Sets City.

#### Signature

global void setCity(String city)

#### Parameters

city

Type: String

#### Return Value

Type: void

### getCity()

Gets City.

#### Signature

global String getCity()

#### Return Value

Type: String

### setState(state)

Sets state.

#### Signature

global void setState(String state)

#### Parameters

state

Type: String

#### Return Value

Type: void

### getState()

Gets State.

#### Signature

global String getState()

#### Return Value

Type: String

### setZipCode(zipCode)

Sets zip code.

#### Signature

global void setZipCode(String zipCode)

#### Parameters

zipCode

Type: String

#### Return Value

Type: void

### getZipCode()

Gets ZipCode.

#### Signature

global String getZipCode()

#### Return Value

Type: String

### setCountry(country)

Sets Country.

#### Signature

global void setCountry(String country)

#### Parameters

country

Type: String

#### Return Value

Type: void

### getCountry()

Gets Country.

#### Signature

global String getCountry()

#### Return Value

Type: String

### setPhone(phone)

Sets phone.

#### Signature

global void setPhone(String phone)

#### Parameters

phone

Type: String

#### Return Value

Type: void

### getPhone()

Gets Phone.

#### Signature

global String getPhone()

#### Return Value

Type: String

### setCurrencyId(currencyId)

Sets Currency Id.

#### Signature

global void setCurrencyId(String currencyId)

#### Parameters

currencyId

Type: String

#### Return Value

Type: void

### getCurrencyId()

Gets Currency Id.

#### Signature

global String getCurrencyId()

#### Return Value

Type: String

### setAmount(amount)

Sets amount.

#### Signature

global void setAmount(String amount)

#### Parameters

amount

Type: String

#### Return Value

Type: void

### getAmount()

Gets Amount.

#### Signature

global String getAmount()

#### Return Value

Type: String

## Related Topics

- TransactionParameter Methods (atlas.en-us.blng_dev.meta/blng_dev/apex_class_blng_TransactionParameter.htm)
- setRequestingInvoiceId(requestingInvoiceId) (atlas.en-us.blng_dev.meta/blng_dev/apex_class_blng_TransactionParameter.htm)
- getRequestingInvoiceId() (atlas.en-us.blng_dev.meta/blng_dev/apex_class_blng_TransactionParameter.htm)
- setCardCodeResponse(cardCodeResponse) (atlas.en-us.blng_dev.meta/blng_dev/apex_class_blng_TransactionParameter.htm)
- getCardCodeResponse() (atlas.en-us.blng_dev.meta/blng_dev/apex_class_blng_TransactionParameter.htm)
- setCardNumber(requestingCreditCardNumber) (atlas.en-us.blng_dev.meta/blng_dev/apex_class_blng_TransactionParameter.htm)
- getCardNumber() (atlas.en-us.blng_dev.meta/blng_dev/apex_class_blng_TransactionParameter.htm)
- setPayment(paymentInstance) (atlas.en-us.blng_dev.meta/blng_dev/apex_class_blng_TransactionParameter.htm)
- getPayment() (atlas.en-us.blng_dev.meta/blng_dev/apex_class_blng_TransactionParameter.htm)
- getMerchantId() (atlas.en-us.blng_dev.meta/blng_dev/apex_class_blng_TransactionParameter.htm)
