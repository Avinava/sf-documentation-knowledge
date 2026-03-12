---
title: "LoyaltyActionResult Class"
domain: loyalty
topic: loyaltyactionresult-class
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:50.567Z
estimatedTokens: 472
namespace: LoyaltyManagement
keywords: [LoyaltyActionResult, result, loyalty, action, getErrors, isSuccess]
---

# LoyaltyActionResult Class

> A class that contains the result returned by a loyalty
    action.

**Namespace:** `LoyaltyManagement`

# LoyaltyActionResult Class

A class that contains the result returned by a loyalty action.

## Namespace

[LoyaltyManagement](atlas.en-us.loyalty.meta/loyalty/apex_namespace_LoyaltyManagement.htm "The LoyaltyManagement namespace provides Apex classes and methods to run the Loyalty Management actions.")

-   **[LoyaltyActionResult Methods](atlas.en-us.loyalty.meta/loyalty/apex_class_LoyaltyManagement_LoyaltyActionResult.htm#apex_LoyaltyManagement_LoyaltyActionResult_methods)**


## LoyaltyActionResult Methods

The following are methods for LoyaltyActionResult.

-   **[getErrors()](atlas.en-us.loyalty.meta/loyalty/apex_class_LoyaltyManagement_LoyaltyActionResult.htm#apex_LoyaltyManagement_LoyaltyActionResult_getErrors)**
    If an error occurred, returns a LoyaltyManagement.LoyaltyActionError object providing the error code and description.
-   **[isSuccess()](atlas.en-us.loyalty.meta/loyalty/apex_class_LoyaltyManagement_LoyaltyActionResult.htm#apex_LoyaltyManagement_LoyaltyActionResult_isSuccess)**
    Returns a Boolean that is set to true if the Loyalty Management action operation was successful for this object, false otherwise.

### getErrors()

If an error occurred, returns a LoyaltyManagement.LoyaltyActionError object providing the error code and description.

#### Signature

public List<LoyaltyManagement.LoyaltyActionError> getErrors()

#### Return Value

Type: List<[LoyaltyManagement.LoyaltyActionError](atlas.en-us.loyalty.meta/loyalty/apex_class_LoyaltyManagement_LoyaltyActionError.htm#apex_class_LoyaltyManagement_LoyaltyActionError "A class that contains the errors related to the execution of a Loyalty Management action.")\>

### isSuccess()

Returns a Boolean that is set to true if the Loyalty Management action operation was successful for this object, false otherwise.

#### Signature

public Boolean isSuccess()

#### Return Value

Type: Boolean

## Related Topics

- LoyaltyManagement (atlas.en-us.loyalty.meta/loyalty/apex_namespace_LoyaltyManagement.htm)
- LoyaltyActionResult Methods (atlas.en-us.loyalty.meta/loyalty/apex_class_LoyaltyManagement_LoyaltyActionResult.htm)
- getErrors() (atlas.en-us.loyalty.meta/loyalty/apex_class_LoyaltyManagement_LoyaltyActionResult.htm)
- isSuccess() (atlas.en-us.loyalty.meta/loyalty/apex_class_LoyaltyManagement_LoyaltyActionResult.htm)
- LoyaltyManagement.LoyaltyActionError (atlas.en-us.loyalty.meta/loyalty/apex_class_LoyaltyManagement_LoyaltyActionError.htm)
