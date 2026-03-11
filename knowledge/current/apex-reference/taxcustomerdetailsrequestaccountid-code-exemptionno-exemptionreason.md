---
title: "TaxCustomerDetailsRequest(accountId, code, exemptionNo,
      exemptionReason)"
domain: apex-reference
topic: taxcustomerdetailsrequestaccountid-code-exemptionno-exemptionreason
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:35.314Z
keywords: [TaxCustomerDetailsRequest, accountId, code, exemptionNo, exemptionReason, Initializes, object., constructor, intended, test, usage, throws, exception, used, outside, Apex, context., Signature, Parameters]
---

# TaxCustomerDetailsRequest(accountId, code, exemptionNo,
      exemptionReason)

> Initializes the TaxCustomerDetailsRequest object. This constructor is intended for test usage and
      throws an exception if used outside of the Apex test context.

### TaxCustomerDetailsRequest(accountId, code, exemptionNo, exemptionReason)

Initializes the TaxCustomerDetailsRequest object. This constructor is intended for test usage and throws an exception if used outside of the Apex test context.

#### Signature

global TaxCustomerDetailsRequest(String accountId, String code, String exemptionNo, String exemptionReason)

#### Parameters

accountId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

The customer account ID for the line items sent for tax calculation.

code

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

The tax code used during tax calculation.

exemptionNo

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

The exemption number applied to any tax exempt line items.

exemptionReason

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

The reason that certain line items are tax exempt.