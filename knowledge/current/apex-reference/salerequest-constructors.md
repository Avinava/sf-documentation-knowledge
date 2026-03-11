---
title: "SaleRequest Constructors"
domain: apex-reference
topic: salerequest-constructors
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:35.145Z
keywords: [SaleRequest, Constructors, Constructor, defining, amount, sale, request., constructor, intended, test, usage, throws, exception, used, outside, Apex, context., Signature, Parameters]
---

# SaleRequest Constructors

> Constructor for defining an amount for the sale request. This
      constructor is intended for test usage and throws an exception if used outside of the Apex
      test context.

## SaleRequest Constructors

The following are constructors for SaleRequest.

-   **[SaleRequest(amount)](atlas.en-us.apexref.meta/apexref/apex_class_commercepayments_SaleRequest.htm#apex_commercepayments_SaleRequest_ctor)**  
    Constructor for defining an amount for the sale request. This constructor is intended for test usage and throws an exception if used outside of the Apex test context.

### SaleRequest(amount)

Constructor for defining an amount for the sale request. This constructor is intended for test usage and throws an exception if used outside of the Apex test context.

#### Signature

global SaleRequest(Double amount)

#### Parameters

amount

Type: [Double](atlas.en-us.apexref.meta/apexref/apex_methods_system_double.htm#apex_methods_system_double "Contains methods for the Double primitive data type.")

Amount of the sale request.