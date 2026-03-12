---
title: "AuditParamsRequest"
domain: apex-reference
topic: auditparamsrequest
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:22.164Z
estimatedTokens: 1175
namespace: CommercePayments
keywords: [AuditParamsRequest, audit, transaction, abstract, extended, BaseRequest, Usage, email, macAddress, ipAddress, phone]
---

# AuditParamsRequest

> AuditParamsRequest is used for audit parameters in a
      transaction request. This is an abstract request class that is extended by the BaseRequest class.

**Namespace:** `CommercePayments`

# AuditParamsRequest

AuditParamsRequest is used for audit parameters in a transaction request. This is an abstract request class that is extended by the BaseRequest class.

## Namespace

[CommercePayments](atlas.en-us.apexref.meta/apexref/apex_namespace_commercepayments.htm "Use the CommercePayments namespace to provide a safe and customizable platform for managing customer payments and refunds.")

## Usage

AuditParamsRequest is an abstract class that holds attributes related to audit parameters such as email, IP address, MAC address, and phone number. This class can't be instantiated on its own. All CommercePayments request classes extend this class.

-   **[AuditParamsRequest Constructors](atlas.en-us.apexref.meta/apexref/apex_class_commercepayments_AuditParamsRequest.htm#apex_commerce_payments_AuditParamsRequest_constructors)**

-   **[AuditParamsRequest Properties](atlas.en-us.apexref.meta/apexref/apex_class_commercepayments_AuditParamsRequest.htm#apex_commerce_payments_AuditParamsRequest_properties)**


## AuditParamsRequest Constructors

The following are constructors for AuditParamsRequest.

-   **[AuditParamsRequest(email, macAddress, ipAddress, phone)](atlas.en-us.apexref.meta/apexref/apex_class_commercepayments_AuditParamsRequest.htm#apex_commerce_payments_AuditParamsRequest_ctor)**
    This constructor is intended for test usage and throws an exception if used outside of the Apex test context.

### AuditParamsRequest(email, macAddress, ipAddress, phone)

This constructor is intended for test usage and throws an exception if used outside of the Apex test context.

#### Signature

AuditParamsRequest(String email, String macAddress, String ipAddress, String phone)

#### Parameters

email

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

Email of the client that initiated the request.

macAddress

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

Mac address of the customer’s device. Gateways often use this data in risk checks.

ipAddress

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

The customer’s IP address. Gateways often use this data in risk checks.

phone

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

Phone number of the client that initiated the request.

## AuditParamsRequest Properties

The following are properties for AuditParamsRequest.

-   **[email](atlas.en-us.apexref.meta/apexref/apex_class_commercepayments_AuditParamsRequest.htm#apex_commerce_payments_AuditParamsRequest_email)**
    Email of the client that initiated the request.
-   **[ipAddress](atlas.en-us.apexref.meta/apexref/apex_class_commercepayments_AuditParamsRequest.htm#apex_commerce_payments_AuditParamsRequest_ipAddress)**
    The customer’s IP address. Gateways often use this data in risk checks.
-   **[macAddress](atlas.en-us.apexref.meta/apexref/apex_class_commercepayments_AuditParamsRequest.htm#apex_commerce_payments_AuditParamsRequest_macAddress)**
    Mac address of the customer’s device. Gateways often use this data in risk checks.
-   **[phone](atlas.en-us.apexref.meta/apexref/apex_class_commercepayments_AuditParamsRequest.htm#apex_commerce_payments_AuditParamsRequest_phone)**
    Phone number of the client that initiated the request.

### email

Email of the client that initiated the request.

#### Property Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

### ipAddress

The customer’s IP address. Gateways often use this data in risk checks.

#### Property Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

### macAddress

Mac address of the customer’s device. Gateways often use this data in risk checks.

#### Property Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

### phone

Phone number of the client that initiated the request.

#### Property Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

## Related Topics

- CommercePayments (atlas.en-us.apexref.meta/apexref/apex_namespace_commercepayments.htm)
- AuditParamsRequest Constructors (atlas.en-us.apexref.meta/apexref/apex_class_commercepayments_AuditParamsRequest.htm)
- AuditParamsRequest Properties (atlas.en-us.apexref.meta/apexref/apex_class_commercepayments_AuditParamsRequest.htm)
- AuditParamsRequest(email, macAddress, ipAddress, phone) (atlas.en-us.apexref.meta/apexref/apex_class_commercepayments_AuditParamsRequest.htm)
- String (atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm)
- email (atlas.en-us.apexref.meta/apexref/apex_class_commercepayments_AuditParamsRequest.htm)
- ipAddress (atlas.en-us.apexref.meta/apexref/apex_class_commercepayments_AuditParamsRequest.htm)
- macAddress (atlas.en-us.apexref.meta/apexref/apex_class_commercepayments_AuditParamsRequest.htm)
- phone (atlas.en-us.apexref.meta/apexref/apex_class_commercepayments_AuditParamsRequest.htm)
