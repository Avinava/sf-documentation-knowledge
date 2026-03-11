---
title: "AuditParamsRequest Constructors"
domain: apex-reference
topic: auditparamsrequest-constructors
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:34.828Z
keywords: [AuditParamsRequest, Constructors, constructor, intended, test, usage, throws, exception, used, outside, Apex, context., email, macAddress, ipAddress, phone, Signature, Parameters]
---

# AuditParamsRequest Constructors

> This constructor is intended for test usage and throws an exception
      if used outside of the Apex test context.

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