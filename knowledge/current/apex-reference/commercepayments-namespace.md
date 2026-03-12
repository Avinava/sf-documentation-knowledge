---
title: "CommercePayments Namespace"
domain: apex-reference
topic: commercepayments-namespace
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:31.653Z
estimatedTokens: 4372
namespace: CommercePayments
keywords: [CommercePayments, provide, safe, customizable, platform, managing, customer, payments, refunds.]
---

# CommercePayments Namespace

> Use the CommercePayments namespace to provide a
    safe and customizable platform for managing customer payments and refunds.

**Namespace:** `CommercePayments`

# CommercePayments Namespace

Use the CommercePayments namespace to provide a safe and customizable platform for managing customer payments and refunds.

To review CommercePayments use cases and walkthroughs, go to [Use Cases for the CommercePayments Namespace](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/apex_commercepayments_use_cases.htm).

The following are the classes in the CommercePayments namespace.

-   **[AbstractResponse Class](atlas.en-us.apexref.meta/apexref/apex_class_commercepayments_AbstractResponse.htm#apex_class_commerce_payments_AbstractResponse)**
    Contains the normalized response fields from payment gateways that are common to all the other gateway responses.
-   **[AbstractTransactionResponse Class](atlas.en-us.apexref.meta/apexref/apex_class_commercepayments_AbstractTransactionResponse.htm#apex_class_commercepayments_AbstractTransactionResponse)**
    Abstract class for storing normalized information sent from payment gateways about a payment transaction. Holds the common response fields sent from payment gateways for authorization, sale, capture, and refund transactions.
-   **[AccountType Enum](atlas.en-us.apexref.meta/apexref/apex_enum_commercepayments_AccountType.htm)**
    Specifies the account type.
-   **[AccountHolderType Enum](atlas.en-us.apexref.meta/apexref/apex_enum_commercepayments_AccountHolderType.htm)**
    Specifies the type of the account holder.
-   **[AddressRequest Class](atlas.en-us.apexref.meta/apexref/apex_class_commercepayments_AddressRequest.htm#apex_class_commercepayments_AddressRequest)**
    Contains address request data that is sent to a gateway adapter during a service call.
-   **[AlternativePaymentMethodRequest Class](atlas.en-us.apexref.meta/apexref/apex_class_commercepayments_AlternativePaymentMethodRequest.htm#apex_class_commercepayments_AlternativePaymentMethodRequest)**
    The class contains information about the alternative payment method that are required for a gateway to process the request.
-   **[AlternativePaymentMethodResponse Class](atlas.en-us.apexref.meta/apexref/apex_class_commercepayments_AlternativePaymentMethodResponse.htm#apex_class_commercepayments_AlternativePaymentMethodResponse)**
    The class contains the response details of the alternative payment method.
-   **[AuditParamsRequest](atlas.en-us.apexref.meta/apexref/apex_class_commercepayments_AuditParamsRequest.htm#apex_class_commerce_payments_AuditParamsRequest)**
    AuditParamsRequest is used for audit parameters in a transaction request. This is an abstract request class that is extended by the BaseRequest class.
-   **[AuthApiPaymentMethodRequest Class](atlas.en-us.apexref.meta/apexref/apex_class_commercepayments_AuthApiPaymentMethodRequest.htm#apex_class_commercepayments_AuthApiPaymentMethodRequest)**
    Sends information about a payment method to a gateway adapter during an authorization service call.
-   **[AuthorizationRequest Class](atlas.en-us.apexref.meta/apexref/apex_class_commercepayments_AuthorizationRequest.htm#apex_class_commercepayments_AuthorizationRequest)**
    Sends information about an authorization request to a gateway adapter during a service call. This class extends the BaseRequest class and inherits all its methods.
-   **[AuthorizationResponse Class](atlas.en-us.apexref.meta/apexref/apex_class_commercepayments_AuthorizationResponse.htm#apex_class_commercepayments_AuthorizationResponse)**
    Response sent by the payment gateway adapter for an authorization service.
-   **[AuthorizationReversalRequest Class](atlas.en-us.apexref.meta/apexref/apex_class_commercepayments_AuthorizationReversalRequest.htm#apex_class_commercepayments_AuthorizationReversalRequest)**
    Sends information about an authorization reversal request to a gateway adapter during a service call.
-   **[AuthorizationReversalResponse Class](atlas.en-us.apexref.meta/apexref/apex_class_commercepayments_AuthorizationReversalResponse.htm#apex_class_commercepayments_AuthorizationReversalResponse)**
    Response sent by the payment gateway following a payment authorization reversal service.
-   **[BankType Enum](atlas.en-us.apexref.meta/apexref/apex_enum_commercepayments_BankType.htm)**
    Specifies the bank type.
-   **[BankPaymentMethodRequest Class](atlas.en-us.apexref.meta/apexref/apex_class_commercepayments_BankPaymentMethodRequest.htm#apex_class_commercepayments_BankPaymentMethodRequest)**
    Sends data related to a bank payment method to a gateway adapter during a service call.
-   **[BankPaymentMethodResponse Class](atlas.en-us.apexref.meta/apexref/apex_class_commercepayments_BankPaymentMethodResponse.htm#apex_class_commercepayments_BankPaymentMethodResponse)**
    This class contains information about the bank payment method response. The gateway adapter reads the gateway response and generates a BankPaymentMethodResponse, populating the required fields to create a bank payment method.
-   **[BaseApiPaymentMethodRequest Class](atlas.en-us.apexref.meta/apexref/apex_class_commercepayments_BaseApiPaymentMethodRequest.htm#apex_class_commercepayments_BaseApiPaymentMethodRequest)**
    Abstract class used to send information about a payment method to a gateway adapter during a service call.
-   **[BaseNotification Class](atlas.en-us.apexref.meta/apexref/apex_class_commercepayments_BaseNotification.htm#apex_class_commercepayments_BaseNotification)**
    Abstract class for storing notification information sent from payment gateways.
-   **[BasePaymentMethodRequest Class](atlas.en-us.apexref.meta/apexref/apex_class_commercepayments_BasePaymentMethodRequest.htm#apex_class_commercepayments_BasePaymentMethodRequest)**
    Abstract class for storing information about payment methods.
-   **[BaseRequest Class](atlas.en-us.apexref.meta/apexref/apex_class_commercepayments_BaseRequest.htm#apex_class_System_BaseRequest)**
    BaseRequest is extended by all the request classes.
-   **[CaptureNotification Class](atlas.en-us.apexref.meta/apexref/apex_class_commercepayments_CaptureNotification.htm#apex_class_commercepayments_CaptureNotification)**
    When a payment gateway sends a notification for a capture transaction, the payment gateway adapter creates the CaptureNotification object to store information about the notification.
-   **[CaptureRequest Class](atlas.en-us.apexref.meta/apexref/apex_class_commercepayments_CaptureRequest.htm#apex_class_commerce_payments_CaptureRequest)**
    Represents a capture request. This class extends the BaseRequest class and inherits all its methods.
-   **[CaptureResponse Class](atlas.en-us.apexref.meta/apexref/apex_class_commercepayments_CaptureResponse.htm#apex_class_commerce_payments_CaptureResponse)**
    The payment gateway adapter sends this response for the capture request type. This class extends AbstractResponse and inherits its methods.
-   **[CardCategory Enum](atlas.en-us.apexref.meta/apexref/apex_enum_commercepayments_CardCategory.htm)**
    Defines whether the payment method represents a credit card or a debit card.
-   **[CardPaymentMethodRequest Class](atlas.en-us.apexref.meta/apexref/apex_class_commercepayments_CardPaymentMethodRequest.htm#apex_class_commercepayments_CardPaymentMethodRequest)**
    Sends data related to a card payment method to a gateway adapter during a service call.
-   **[CardPaymentMethodResponse Class](atlas.en-us.apexref.meta/apexref/apex_class_commercepayments_CardPaymentMethodResponse.htm#apex_class_commercepayments_CardPaymentMethodResponse)**
    This class contains details about the card payment method.
-   **[CardType Enum](atlas.en-us.apexref.meta/apexref/apex_enum_commercepayments_CardType.htm)**
    Specifies the credit card issuer.
-   **[CustomMetadataTypeInfo Class](atlas.en-us.apexref.meta/apexref/apex_class_commercepayments_CustomMetadataTypeInfo.htm#apex_class_commerce_payments_CustomMetadataTypeInfo)**
    Access information about custom metadata. The PaymentGatewayAdapter can send CustomMetadataTypeInfo to transaction requests through the response object’s SalesforceResultCodeInfo.
-   **[GatewayErrorResponse Class](atlas.en-us.apexref.meta/apexref/apex_class_commercepayments_GatewayErrorResponse.htm#apex_class_commerce_payments_GatewayErrorResponse)**
    Use to respond with an error indication following errors from the PaymentGateway adapter, such as request-forbidden responses, custom validation errors, or expired API tokens.
-   **[GatewayNotificationResponse Class](atlas.en-us.apexref.meta/apexref/apex_class_commercepayments_GatewayNotificationResponse.htm#apex_class_commercepayments_GatewayNotificationResponse)**
    When the payment gateway sends a notification to the payments platform, the platform responds with a GatewayNotificationResponse indicating whether the platform succeeded or failed at receiving the notification.
-   **[GatewayResponse Interface](atlas.en-us.apexref.meta/apexref/apex_interface_commercepayments_GatewayResponse.htm#apex_interface_commerce_payments_GatewayResponse)**
    Generic payment gateway response interface. This class extends the CaptureResponse, AbstractTransactionResponse, and AbstractResponse classes and inherits all their properties. It has no unique methods or parameters.
-   **[NotificationClient Class](atlas.en-us.apexref.meta/apexref/apex_class_commercepayments_NotificationClient.htm#apex_class_commercepayments_NotificationClient)**
    Communicates with the payment platform regarding the gateway’s notification.
-   **[NotificationSaveResult Class](atlas.en-us.apexref.meta/apexref/apex_class_commercepayments_NotificationSaveResult.htm#apex_class_commercepayments_NotificationSaveResult)**
    Contains the result of the payment platform’s attempt to record data from the gateway’s notification.
-   **[NotificationStatus Enum](atlas.en-us.apexref.meta/apexref/apex_enum_commercepayments_NotificationStatus.htm)**
    Shows whether the payments platform successfully received the notification from the gateway.
-   **[PaymentGatewayAdapter Interface](atlas.en-us.apexref.meta/apexref/apex_interface_commercepayments_PaymentGatewayAdapter.htm#apex_interface_commerce_payments_PaymentGatewayAdapter)**
    PaymentGatewayAdapters can implement this interface in order to process requests.
-   **[PaymentGatewayAsyncAdapter Interface](atlas.en-us.apexref.meta/apexref/apex_interface_commercepayments_PaymentGatewayAsyncAdapter.htm#apex_interface_commercepayments_PaymentGatewayAsyncAdapter)**
    Implement the interface to allow customers to process payments asynchronously.
-   **[PaymentGatewayContext Class](atlas.en-us.apexref.meta/apexref/apex_class_commercepayments_PaymentGatewayContext.htm#apex_class_commerce_payments_PaymentGatewayContext)**
    Wraps the information related to a payment request.
-   **[PaymentGatewayNotificationContext Class](atlas.en-us.apexref.meta/apexref/apex_class_commercepayments_PaymentGatewayNotificationContext.htm#apex_class_commercepayments_PaymentGatewayNotificationContext)**
    Wraps the information related to a gateway notification.
-   **[PaymentGatewayNotificationRequest Class](atlas.en-us.apexref.meta/apexref/apex_class_commercepayments_PaymentGatewayNotificationRequest.htm#apex_class_commercepayments_PaymentGatewayNotificationRequest)**
    Contains the notification request data from the gateway.
-   **[PaymentMethodDetailsResponse Class](atlas.en-us.apexref.meta/apexref/apex_class_commercepayments_PaymentMethodDetailsResponse.htm#apex_class_commercepayments_PaymentMethodDetailsResponse)**
    This class contains the details about the payment method.
-   **[PaymentMethodIdType Enum](atlas.en-us.apexref.meta/apexref/apex_enum_commercepayments_PaymentMethodIdType.htm)**
    Specifies the ID of the payment method type.
-   **[PaymentMethodTokenizationRequest Class](atlas.en-us.apexref.meta/apexref/apex_class_commercepayments_PaymentMethodTokenizationRequest.htm#apex_class_commercepayments_PaymentMethodTokenizationRequest)**
    Stores data about a request to tokenize a card payment method. The tokenization process occurs in the payment gateway. This process replaces sensitive customer data, such as a card number or CVV, with unique identification symbols. The symbols are used while the data is handled by Salesforce, the payment gateway, and the customer bank, allowing Salesforce to store the token without storing sensitive customer data.
-   **[PaymentMethodTokenizationResponse Class](atlas.en-us.apexref.meta/apexref/apex_class_commercepayments_PaymentMethodTokenizationResponse.htm#apex_class_commercepayments_PaymentMethodTokenizationResponse)**
    Gateway response sent by payment gateway adapters for the payment method tokenization request. The response includes the payment method’s token ID value.
-   **[PaymentsHttp Class](atlas.en-us.apexref.meta/apexref/apex_class_commercepayments_PaymentsHttp.htm#apex_class_commerce_payments_PaymentsHttp)**
    Makes an HTTP request to start the interaction with the payment gateway.
-   **[PostAuthApiPaymentMethodRequest Class](atlas.en-us.apexref.meta/apexref/apex_class_commercepayments_PostAuthApiPaymentMethodRequest.htm)**
    Sends information about a payment method to a gateway adapter during a postauthorization service call.
-   **[PostAuthorizationRequest Class](atlas.en-us.apexref.meta/apexref/apex_class_commercepayments_PostAuthorizationRequest.htm)**
    Sends information about a postauthorization request to a gateway adapter during a service call.
-   **[PostAuthorizationResponse Class](atlas.en-us.apexref.meta/apexref/apex_class_commercepayments_PostAuthorizationResponse.htm)**
    Response sent by the payment gateway adapter for a postauthorization service.
-   **[ReferencedRefundNotification Class](atlas.en-us.apexref.meta/apexref/apex_class_commercepayments_ReferencedRefundNotification.htm#apex_class_commercepayments_ReferencedRefundNotification)**
    When a payment gateway sends a notification for a refund transaction, the payment gateway adapter creates the ReferencedRefundNotification object to store information about notification.
-   **[ReferencedRefundRequest](atlas.en-us.apexref.meta/apexref/apex_class_commercepayments_ReferencedRefundRequest.htm#apex_class_commerce_payments_ReferencedRefundRequest)**
    Access information about the referenced refund requests. Extends the RefundRequest class.
-   **[ReferencedRefundResponse Class](atlas.en-us.apexref.meta/apexref/apex_class_commercepayments_ReferencedRefundResponse.htm#apex_class_commerce_payments_ReferencedRefundResponse)**
    The payment gateway adapter sends this response for the ReferencedRefund request type.
-   **[RefundRequest Class](atlas.en-us.apexref.meta/apexref/apex_class_commercepayments_RefundRequest.htm#apex_class_commercepayments_RefundRequest)**
    Sends data related to a refund to the payment gateway adapter.
-   **[RequestType Enum](atlas.en-us.apexref.meta/apexref/apex_enum_commercepayments_RequestType.htm)**
    Defines the type of payment transaction request made to the payment gateway.
-   **[RetryCategory Enum](atlas.en-us.apexref.meta/apexref/apex_enum_commercepayments_RetryCategory.htm)**
    Specifies the retry category.
-   **[RetryDecision Enum](atlas.en-us.apexref.meta/apexref/apex_enum_commercepayments_RetryDecision.htm)**
    Specifies the retry decision.
-   **[SaleApiPaymentMethodRequest Class](atlas.en-us.apexref.meta/apexref/apex_class_commercepayments_SaleApiPaymentMethodRequest.htm#apex_class_commercepayments_SaleApiPaymentMethodRequest)**
    Sends data related to a card payment method to a gateway adapter during a sale service call.
-   **[SaleNotification Class](atlas.en-us.apexref.meta/apexref/apex_class_commercepayments_SaleNotification.htm#apex_class_commercepayments_SaleNotification)**
    When a payment gateway sends a notification for a sale payment, the payment gateway adapter creates the SaleNotification object to store information about notification.
-   **[SaleRequest Class](atlas.en-us.apexref.meta/apexref/apex_class_commercepayments_SaleRequest.htm#apex_class_commercepayments_SaleRequest)**
    Stores information about a sales request.
-   **[SaleResponse Class](atlas.en-us.apexref.meta/apexref/apex_class_commercepayments_SaleResponse.htm#apex_class_commercepayments_SaleResponse)**
    Response sent by payment gateway adapters for a sales service.
-   **[SalesforceResultCode Enum](atlas.en-us.apexref.meta/apexref/apex_enum_commercepayments_SalesforceResultCode.htm)**
    Defines the gateway call status values in Salesforce based on the call status values that the payment gateway returned.
-   **[SalesforceResultCodeInfo](atlas.en-us.apexref.meta/apexref/apex_class_commercepayments_SalesforceResultCodeInfo.htm#apex_class_commerce_payments_SalesforceResultCodeInfo)**
    Stores Salesforce result code information from payment gateway adapters.
-   **[StandardEntryClassCode Enum](atlas.en-us.apexref.meta/apexref/apex_enum_commercepayments_StandardEntryClassCode.htm)**
    Specifies the three-letter code that identifies the type of electronic payment transaction being processed within the Automated Clearing House (ACH) network.
-   **[TokenizeNotification Class](atlas.en-us.apexref.meta/apexref/apex_class_commercepayments_TokenizeNotification.htm#apex_class_commercepayments_TokenizeNotification)**
    When a payment gateway sends a notification for a payment method tokenization, the payment gateway adapter creates the TokenizeNotification object to store information about notification.

## Related Topics

- AbstractResponse Class (atlas.en-us.apexref.meta/apexref/apex_class_commercepayments_AbstractResponse.htm)
- AbstractTransactionResponse Class (atlas.en-us.apexref.meta/apexref/apex_class_commercepayments_AbstractTransactionResponse.htm)
- AccountType Enum (atlas.en-us.apexref.meta/apexref/apex_enum_commercepayments_AccountType.htm)
- AccountHolderType Enum (atlas.en-us.apexref.meta/apexref/apex_enum_commercepayments_AccountHolderType.htm)
- AddressRequest Class (atlas.en-us.apexref.meta/apexref/apex_class_commercepayments_AddressRequest.htm)
- AlternativePaymentMethodRequest Class (atlas.en-us.apexref.meta/apexref/apex_class_commercepayments_AlternativePaymentMethodRequest.htm)
- AlternativePaymentMethodResponse Class (atlas.en-us.apexref.meta/apexref/apex_class_commercepayments_AlternativePaymentMethodResponse.htm)
- AuditParamsRequest (atlas.en-us.apexref.meta/apexref/apex_class_commercepayments_AuditParamsRequest.htm)
- AuthApiPaymentMethodRequest Class (atlas.en-us.apexref.meta/apexref/apex_class_commercepayments_AuthApiPaymentMethodRequest.htm)
- AuthorizationRequest Class (atlas.en-us.apexref.meta/apexref/apex_class_commercepayments_AuthorizationRequest.htm)
