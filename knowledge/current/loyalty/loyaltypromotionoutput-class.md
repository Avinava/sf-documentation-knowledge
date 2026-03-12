---
title: "LoyaltyPromotionOutput Class"
domain: loyalty
topic: loyaltypromotionoutput-class
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:50.582Z
estimatedTokens: 593
namespace: LoyaltyManagement
keywords: [LoyaltyPromotionOutput, active, promotions, transaction, journal, getErrors, getPromotions, isSuccess]
---

# LoyaltyPromotionOutput Class

> Represents the active promotions based on the specified transaction
      journal.

**Namespace:** `LoyaltyManagement`

# LoyaltyPromotionOutput Class

Represents the active promotions based on the specified transaction journal.

## Namespace

[LoyaltyManagement](atlas.en-us.loyalty.meta/loyalty/apex_namespace_LoyaltyManagement.htm "The LoyaltyManagement namespace provides Apex classes and methods to run the Loyalty Management actions.")

-   **[LoyaltyPromotionOutput Methods](atlas.en-us.loyalty.meta/loyalty/apex_class_LoyaltyManagement_LoyaltyPromotionOutput.htm#apex_LoyaltyManagement_LoyaltyPromotionOutput_methods)**


## LoyaltyPromotionOutput Methods

The following are methods for LoyaltyPromotionOutput.

-   **[getErrors()](atlas.en-us.loyalty.meta/loyalty/apex_class_LoyaltyManagement_LoyaltyPromotionOutput.htm#apex_LoyaltyManagement_LoyaltyPromotionOutput_getErrors)**
    If an error occurred, returns a list providing the error code and description.
-   **[getPromotions()](atlas.en-us.loyalty.meta/loyalty/apex_class_LoyaltyManagement_LoyaltyPromotionOutput.htm#apex_LoyaltyManagement_LoyaltyPromotionOutput_getPromotions)**
    Returns a List of sObject data type that contains the promotion records that are eligible for the transaction journal.
-   **[isSuccess()](atlas.en-us.loyalty.meta/loyalty/apex_class_LoyaltyManagement_LoyaltyPromotionOutput.htm#apex_LoyaltyManagement_LoyaltyPromotionOutput_isSuccess)**
    Returns a Boolean that is set to true if the loyalty promotion operation was successful for this object, false otherwise.

### getErrors()

If an error occurred, returns a list providing the error code and description.

#### Signature

public List<LoyaltyManagement.LoyaltyActionError> getErrors()

#### Return Value

Type: List<[LoyaltyManagement.LoyaltyActionError](atlas.en-us.loyalty.meta/loyalty/apex_class_LoyaltyManagement_LoyaltyActionError.htm#apex_class_LoyaltyManagement_LoyaltyActionError "A class that contains the errors related to the execution of a Loyalty Management action.")\>

### getPromotions()

Returns a List of sObject data type that contains the promotion records that are eligible for the transaction journal.

#### Signature

public List<SObject> getPromotions()

#### Return Value

Type: List<SObject>

### isSuccess()

Returns a Boolean that is set to true if the loyalty promotion operation was successful for this object, false otherwise.

#### Signature

public Boolean isSuccess()

#### Return Value

Type: Boolean

## Related Topics

- LoyaltyManagement (atlas.en-us.loyalty.meta/loyalty/apex_namespace_LoyaltyManagement.htm)
- LoyaltyPromotionOutput Methods (atlas.en-us.loyalty.meta/loyalty/apex_class_LoyaltyManagement_LoyaltyPromotionOutput.htm)
- getErrors() (atlas.en-us.loyalty.meta/loyalty/apex_class_LoyaltyManagement_LoyaltyPromotionOutput.htm)
- getPromotions() (atlas.en-us.loyalty.meta/loyalty/apex_class_LoyaltyManagement_LoyaltyPromotionOutput.htm)
- isSuccess() (atlas.en-us.loyalty.meta/loyalty/apex_class_LoyaltyManagement_LoyaltyPromotionOutput.htm)
- LoyaltyManagement.LoyaltyActionError (atlas.en-us.loyalty.meta/loyalty/apex_class_LoyaltyManagement_LoyaltyActionError.htm)
