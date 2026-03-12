---
title: "PaymentMethodTokenizationRequest Class"
domain: apex-reference
topic: paymentmethodtokenizationrequest-class
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:22.396Z
estimatedTokens: 2488
namespace: CommercePayments
keywords: [PaymentMethodTokenizationRequest, Stores, data, tokenize, card, payment, tokenization, process, occurs, gateway, replaces, sensitive, customer, number, CVV]
---

# PaymentMethodTokenizationRequest Class

> Stores data about a request to tokenize a card payment method. The
            tokenization process occurs in the payment gateway. This process replaces sensitive
            customer data, such as a card number or CVV, with unique identification symbols. The
            symbols are used while the data is handled by Salesforce, the payment gateway, and the
            customer bank, allowing Salesforce to store the token without storing sensitive customer
            data.

**Namespace:** `CommercePayments`

# PaymentMethodTokenizationRequest Class

Stores data about a request to tokenize a card payment method. The tokenization process occurs in the payment gateway. This process replaces sensitive customer data, such as a card number or CVV, with unique identification symbols. The symbols are used while the data is handled by Salesforce, the payment gateway, and the customer bank, allowing Salesforce to store the token without storing sensitive customer data.

## Namespace

[CommercePayments](atlas.en-us.apexref.meta/apexref/apex_namespace_commercepayments.htm "Use the CommercePayments namespace to provide a safe and customizable platform for managing customer payments and refunds.")

## Usage

The constructor of this class takes no arguments. For example:

CommercePayments.PaymentMethodTokenizationRequest pmtr = new CommercePayments.PaymentMethodTokenizationRequest();

This class holds all the required details about the tokenize request. Gateway adapters read the information in this class while constructing a tokenization JSON request, which is sent to the payment gateway.

## Example

The following code is used within your payment gateway adapter Apex class.

Use the GatewayResponse class's processRequest method to build responses based on the request type that it receives from an instance of [PaymentGatewayContext](atlas.en-us.apexref.meta/apexref/apex_class_commercepayments_PaymentGatewayContext.htm#apex_class_commerce_payments_PaymentGatewayContext "Wraps the information related to a payment request."). If the request type is Tokenize, [GatewayResponse](atlas.en-us.apexref.meta/apexref/apex_interface_commercepayments_GatewayResponse.htm#apex_interface_commerce_payments_GatewayResponse "Generic payment gateway response interface. This class extends the CaptureResponse, AbstractTransactionResponse, and AbstractResponse classes and inherits all their properties. It has no unique methods or parameters.") calls the createTokenizeResponse method and passes an instance of the PaymentMethodTokenizationRequest class. The passed PaymentMethodTokenizationRequest object contains the address and cardPaymentMethod information that the payment gateway needs to manage the tokenization process. For example:

```

```

Configure the createTokenizeResponse method to accept an instance of PaymentMethodTokenizationRequest. Then, build an instance of PaymentMethodTokenizationResponse based on the values received from the payment gateway.

```

```

The tokenizeResponse contains the results of the gateway's tokenization process, and if successful, the tokenized value.

-   **[PaymentMethodTokenizationRequest Constructors](atlas.en-us.apexref.meta/apexref/apex_class_commercepayments_PaymentMethodTokenizationRequest.htm#apex_commercepayments_PaymentMethodTokenizationRequest_constructors)**

-   **[PaymentMethodTokenizationRequest Properties](atlas.en-us.apexref.meta/apexref/apex_class_commercepayments_PaymentMethodTokenizationRequest.htm#apex_commercepayments_PaymentMethodTokenizationRequest_properties)**

-   **[PaymentMethodTokenizationRequest Methods](atlas.en-us.apexref.meta/apexref/apex_class_commercepayments_PaymentMethodTokenizationRequest.htm#apex_commercepayments_PaymentMethodTokenizationRequest_methods)**


## PaymentMethodTokenizationRequest Constructors

The following are constructors for PaymentMethodTokenizationRequest.

-   **[PaymentMethodTokenizationRequest(paymentGatewayId)](atlas.en-us.apexref.meta/apexref/apex_class_commercepayments_PaymentMethodTokenizationRequest.htm#apex_commercepayments_PaymentMethodTokenizationRequest_ctor)**
    Payment gateway ID constructor used with paymentMethodTokenizationRequest. This constructor is intended for test usage and throws an exception if used outside of the Apex test context.
-   **[PaymentMethodTokenizationRequest()](atlas.en-us.apexref.meta/apexref/apex_class_commercepayments_PaymentMethodTokenizationRequest.htm#apex_commercepayments_PaymentMethodTokenizationRequest_ctor_2)**
    The following are constructors for PaymentMethodTokenizationRequest.

### PaymentMethodTokenizationRequest(paymentGatewayId)

Payment gateway ID constructor used with paymentMethodTokenizationRequest. This constructor is intended for test usage and throws an exception if used outside of the Apex test context.

#### Signature

global PaymentMethodTokenizationRequest(String paymentGatewayId)

#### Parameters

paymentGatewayId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

The payment method’s payment gateway ID that will be tokenized.

### PaymentMethodTokenizationRequest()

The following are constructors for PaymentMethodTokenizationRequest.

#### Signature

global PaymentMethodTokenizationRequest()

## PaymentMethodTokenizationRequest Properties

The following are properties for PaymentMethodTokenizationRequest.

-   **[address](atlas.en-us.apexref.meta/apexref/apex_class_commercepayments_PaymentMethodTokenizationRequest.htm#apex_commercepayments_PaymentMethodTokenizationRequest_address)**
    The card payment method address to be tokenized.
-   **[bankPaymentMethod](atlas.en-us.apexref.meta/apexref/apex_class_commercepayments_PaymentMethodTokenizationRequest.htm#apex_commercepayments_PaymentMethodTokenizationRequest_bankPaymentMethod)**
    The bank payment method containing data to be tokenized.
-   **[cardPaymentMethod](atlas.en-us.apexref.meta/apexref/apex_class_commercepayments_PaymentMethodTokenizationRequest.htm#apex_commercepayments_PaymentMethodTokenizationRequest_cardPaymentMethod)**
    The card payment method containing data to be tokenized.
-   **[savedByMerchant](atlas.en-us.apexref.meta/apexref/apex_class_commercepayments_PaymentMethodTokenizationRequest.htm#apex_commercepayments_PaymentMethodTokenizationRequest_savedByMerchant)**
    Indicates whether the payment method to be tokenized is saved by the marchant (true) or not (false).

### address

The card payment method address to be tokenized.

#### Signature

global commercepayments.AddressRequest address {get; set;}

#### Property Value

Type: [AddressRequest](atlas.en-us.apexref.meta/apexref/apex_class_commercepayments_AddressRequest.htm#apex_class_commercepayments_AddressRequest "Contains address request data that is sent to a gateway adapter during a service call.")

### bankPaymentMethod

The bank payment method containing data to be tokenized.

#### Signature

public commercepayments.BankPaymentMethodRequest bankPaymentMethod {get; set;}

#### Property Value

Type: commercepayments.[BankPaymentMethodRequest](atlas.en-us.apexref.meta/apexref/apex_class_commercepayments_BankPaymentMethodRequest.htm#apex_class_commercepayments_BankPaymentMethodRequest "Sends data related to a bank payment method to a gateway adapter during a service call.")

### cardPaymentMethod

The card payment method containing data to be tokenized.

#### Signature

global commercepayments.CardPaymentMethodRequest cardPaymentMethod {get; set;}

#### Property Value

Type: [CardPaymentMethodRequest](atlas.en-us.apexref.meta/apexref/apex_class_commercepayments_CardPaymentMethodRequest.htm#apex_class_commercepayments_CardPaymentMethodRequest "Sends data related to a card payment method to a gateway adapter during a service call.")

### savedByMerchant

Indicates whether the payment method to be tokenized is saved by the marchant (true) or not (false).

#### Signature

public Boolean savedByMerchant {get; set;}

#### Property Value

Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")

## PaymentMethodTokenizationRequest Methods

The following are methods for PaymentMethodTokenizationRequest.

-   **[equals(obj)](atlas.en-us.apexref.meta/apexref/apex_class_commercepayments_PaymentMethodTokenizationRequest.htm#apex_commercepayments_PaymentMethodTokenizationRequest_equals)**
    Maintains the integrity of lists of type PaymentMethodTokenizationRequest by determining the equality of external objects in a list. This method is dynamic and is based on the equals method in Java.
-   **[hashCode()](atlas.en-us.apexref.meta/apexref/apex_class_commercepayments_PaymentMethodTokenizationRequest.htm#apex_commercepayments_PaymentMethodTokenizationRequest_hashCode)**
    Maintains the integrity of lists of type PaymentMethodTokenizationRequest by determining the uniquness of the external object records in a list.
-   **[toString()](atlas.en-us.apexref.meta/apexref/apex_class_commercepayments_PaymentMethodTokenizationRequest.htm#apex_commercepayments_PaymentMethodTokenizationRequest_toString)**
    Converts a date to a string.

### equals(obj)

Maintains the integrity of lists of type PaymentMethodTokenizationRequest by determining the equality of external objects in a list. This method is dynamic and is based on the equals method in Java.

#### Signature

global Boolean equals(Object obj)

#### Parameters

obj

Type: Object

External object whose key is to be validated.

#### Return Value

Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")

### hashCode()

Maintains the integrity of lists of type PaymentMethodTokenizationRequest by determining the uniquness of the external object records in a list.

#### Signature

global Integer hashCode()

#### Return Value

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

### toString()

Converts a date to a string.

#### Signature

global String toString()

#### Return Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

## Code Examples

```apex
global commercepayments.GatewayResponse processRequest(commercepayments.paymentGatewayContext gatewayContext) {
         commercepayments.RequestType requestType = gatewayContext.getPaymentRequestType();
         commercepayments.GatewayResponse response;
         try
         {
             if (requestType == commercepayments.RequestType.Tokenize) {
                     response = createTokenizeResponse((commercepayments.PaymentMethodTokenizationRequest)gatewayContext.getPaymentRequest());
             }
             //Add other else if statements for different request types as needed.
             return response;
         }
         catch(SalesforceValidationException e)
         {
              commercepayments.GatewayErrorResponse error = new commercepayments.GatewayErrorResponse('400', e.getMessage());
              return error;
         }
     }
```

```apex
public commercepayments.GatewayResponse createTokenizeResponse(commercepayments.PaymentMethodTokenizationRequest tokenizeRequest) {
         commercepayments.PaymentMethodTokenizationResponse tokenizeResponse = new commercepayments.PaymentMethodTokenizationResponse();
         tokenizeResponse.setGatewayTokenEncrypted(encryptedValue);
         tokenizeResponse.setGatewayTokenDetails(tokenDetails);
         tokenizeResponse.setGatewayAvsCode(avsCode);
         tokenizeResponse.setGatewayMessage(gatewayMessage);
         tokenizeResponse.setGatewayResultCode(resultcode);
         tokenizeResponse.setGatewayResultCodeDescription(resultCodeDescription);
         tokenizeResponse.setSalesforceResultCodeInfo(resultCodeInfo);
         tokenizeResponse.setGatewayDate(system.now());
         return tokenizeResponse;
     }
```

## Related Topics

- CommercePayments (atlas.en-us.apexref.meta/apexref/apex_namespace_commercepayments.htm)
- PaymentGatewayContext (atlas.en-us.apexref.meta/apexref/apex_class_commercepayments_PaymentGatewayContext.htm)
- GatewayResponse (atlas.en-us.apexref.meta/apexref/apex_interface_commercepayments_GatewayResponse.htm)
- PaymentMethodTokenizationRequest Constructors (atlas.en-us.apexref.meta/apexref/apex_class_commercepayments_PaymentMethodTokenizationRequest.htm)
- PaymentMethodTokenizationRequest Properties (atlas.en-us.apexref.meta/apexref/apex_class_commercepayments_PaymentMethodTokenizationRequest.htm)
- PaymentMethodTokenizationRequest Methods (atlas.en-us.apexref.meta/apexref/apex_class_commercepayments_PaymentMethodTokenizationRequest.htm)
- PaymentMethodTokenizationRequest(paymentGatewayId) (atlas.en-us.apexref.meta/apexref/apex_class_commercepayments_PaymentMethodTokenizationRequest.htm)
- PaymentMethodTokenizationRequest() (atlas.en-us.apexref.meta/apexref/apex_class_commercepayments_PaymentMethodTokenizationRequest.htm)
- String (atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm)
- address (atlas.en-us.apexref.meta/apexref/apex_class_commercepayments_PaymentMethodTokenizationRequest.htm)
