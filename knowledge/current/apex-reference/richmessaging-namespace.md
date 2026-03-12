---
title: "RichMessaging Namespace"
domain: apex-reference
topic: richmessaging-namespace
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:31.589Z
estimatedTokens: 1288
namespace: RichMessaging
keywords: [RichMessaging, Provides, objects, handling, content, enhanced, Messaging, channels.]
---

# RichMessaging Namespace

> Provides objects and methods for handling content in enhanced Messaging
    channels.

**Namespace:** `RichMessaging`

# RichMessaging Namespace

Provides objects and methods for handling content in enhanced Messaging channels.

The following are the classes in the RichMessaging namespace.

-   **[AbstractTiming Class](atlas.en-us.apexref.meta/apexref/apex_class_RichMessaging_AbstractTiming.htm#apex_class_RichMessaging_AbstractTiming)**
    Parent class for other RichMessaging timing classes.
-   **[AddressableContact Class](atlas.en-us.apexref.meta/apexref/apex_class_RichMessaging_AddressableContact.htm#apex_class_RichMessaging_AddressableContact)**
    Represents an addressable contact.
-   **[AuthRequestHandler Interface](atlas.en-us.apexref.meta/apexref/apex_interface_RichMessaging_AuthRequestHandler.htm#apex_interface_RichMessaging_AuthRequestHandler)**
    Use this interface to handle authorization request responses.
-   **[AuthRequestResponse Class](atlas.en-us.apexref.meta/apexref/apex_class_RichMessaging_AuthRequestResponse.htm#apex_class_RichMessaging_AuthRequestResponse)**
    This class contains authorization request response data.
-   **[AuthRequestResult Class](atlas.en-us.apexref.meta/apexref/apex_class_RichMessaging_AuthRequestResult.htm#apex_class_RichMessaging_AuthRequestResult)**
    This class contains the result from handling the authorization request response.
-   **[AuthRequestResultStatus Enum](atlas.en-us.apexref.meta/apexref/apex_enum_RichMessaging_AuthRequestResultStatus.htm)**
    This enum describes the authentication result status.
-   **[DeferredTiming Class](atlas.en-us.apexref.meta/apexref/apex_class_RichMessaging_DeferredTiming.htm#apex_class_RichMessaging_DeferredTiming)**
    Represents timing for a transaction that occurs in the future.
-   **[MessageDefinitionInputParameter Class](atlas.en-us.apexref.meta/apexref/apex_class_RichMessaging_MessageDefinitionInputParameter.htm#apex_class_RichMessaging_MessageDefinitionInputParameter)**
    Represents a messaging component parameter value. This class is used to provide parameter payloads that can be translated to structured content payloads in rich content messages.
-   **[PaymentItemStatus Enum](atlas.en-us.apexref.meta/apexref/apex_enum_RichMessaging_PaymentItemStatus.htm)**
    Represents the status of a payment item in payment requests sent in enhanced Messaging channels.
-   **[PaymentLineItem Class](atlas.en-us.apexref.meta/apexref/apex_class_RichMessaging_PaymentLineItem.htm#apex_class_RichMessaging_PaymentLineItem)**
    Represents a payment line item in payment requests sent in enhanced Messaging channels.
-   **[PaymentMethod Class](atlas.en-us.apexref.meta/apexref/apex_class_RichMessaging_PaymentMethod.htm#apex_class_RichMessaging_PaymentMethod)**
    Represents a payment method.
-   **[PostalAddress Class](atlas.en-us.apexref.meta/apexref/apex_class_RichMessaging_PostalAddress.htm#apex_class_RichMessaging_PostalAddress)**
    Represents the postal address.
-   **[ProcessFormHandler Interface](atlas.en-us.apexref.meta/apexref/apex_interface_RichMessaging_ProcessFormHandler.htm#apex_interface_RichMessaging_ProcessFormHandler)**
    Apex interface that processes the responses to forms submitted in a messaging session.
-   **[ProcessPaymentHandler Interface](atlas.en-us.apexref.meta/apexref/apex_interface_RichMessaging_ProcessPaymentHandler.htm#apex_interface_RichMessaging_ProcessPaymentHandler)**
    Interface used to process payment requests.
-   **[ProcessPaymentRequest Class](atlas.en-us.apexref.meta/apexref/apex_class_RichMessaging_ProcessPaymentRequest.htm#apex_class_RichMessaging_ProcessPaymentRequest)**
    Represents a request to process a payment.
-   **[ProcessPaymentResult Class](atlas.en-us.apexref.meta/apexref/apex_class_RichMessaging_ProcessPaymentResult.htm#apex_class_RichMessaging_ProcessPaymentResult)**
    Represents the result of a payment processing operation.
-   **[ProcessPaymentResultStatus Enum](atlas.en-us.apexref.meta/apexref/apex_enum_RichMessaging_ProcessPaymentResultStatus.htm)**
    Represents the status of a payment processing result.
-   **[RecurringTiming Class](atlas.en-us.apexref.meta/apexref/apex_class_RichMessaging_RecurringTiming.htm#apex_class_RichMessaging_RecurringTiming)**
    Represents a payment that occurs on a regular basis.
-   **[ShippingMethod Class](atlas.en-us.apexref.meta/apexref/apex_class_RichMessaging_ShippingMethod.htm#apex_class_RichMessaging_ShippingMethod)**
    Represents a shipping method listed in payment requests sent in enhanced Messaging channels.
-   **[TimeSlotOption Class](atlas.en-us.apexref.meta/apexref/apex_class_RichMessaging_TimeSlotOption.htm#apex_class_RichMessaging_TimeSlotOption)**
    Represents a complex time slot option type. This class is used to provide time option payloads that can be translated to structured content payloads in rich content messages.
-   **[TimingIntervalUnit Enum](atlas.en-us.apexref.meta/apexref/apex_enum_RichMessaging_TimingIntervalUnit.htm)**
    Represents an enumerated type that describes the timing interval.
-   **[TimingType Enum](atlas.en-us.apexref.meta/apexref/apex_enum_RichMessaging_TimingType.htm)**
    Represents an enumerated type that describes the type of timing.

## Related Topics

- AbstractTiming Class (atlas.en-us.apexref.meta/apexref/apex_class_RichMessaging_AbstractTiming.htm)
- AddressableContact Class (atlas.en-us.apexref.meta/apexref/apex_class_RichMessaging_AddressableContact.htm)
- AuthRequestHandler Interface (atlas.en-us.apexref.meta/apexref/apex_interface_RichMessaging_AuthRequestHandler.htm)
- AuthRequestResponse Class (atlas.en-us.apexref.meta/apexref/apex_class_RichMessaging_AuthRequestResponse.htm)
- AuthRequestResult Class (atlas.en-us.apexref.meta/apexref/apex_class_RichMessaging_AuthRequestResult.htm)
- AuthRequestResultStatus Enum (atlas.en-us.apexref.meta/apexref/apex_enum_RichMessaging_AuthRequestResultStatus.htm)
- DeferredTiming Class (atlas.en-us.apexref.meta/apexref/apex_class_RichMessaging_DeferredTiming.htm)
- MessageDefinitionInputParameter Class (atlas.en-us.apexref.meta/apexref/apex_class_RichMessaging_MessageDefinitionInputParameter.htm)
- PaymentItemStatus Enum (atlas.en-us.apexref.meta/apexref/apex_enum_RichMessaging_PaymentItemStatus.htm)
- PaymentLineItem Class (atlas.en-us.apexref.meta/apexref/apex_class_RichMessaging_PaymentLineItem.htm)
