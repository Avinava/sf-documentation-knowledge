---
title: "CdpBasedLoyaltyPromotionOutput Class"
domain: loyalty
topic: cdpbasedloyaltypromotionoutput-class
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:50.494Z
estimatedTokens: 612
namespace: LoyaltyManagement
keywords: [CdpBasedLoyaltyPromotionOutput, promotion, records, member, eligible, member's, Data, Cloud, market, segment, getErrors, getPromotions, isSuccess]
---

# CdpBasedLoyaltyPromotionOutput Class

> Represents the promotion records that the member is eligible for based
      on the member's Data Cloud market segment.

**Namespace:** `LoyaltyManagement`

# CdpBasedLoyaltyPromotionOutput Class

Represents the promotion records that the member is eligible for based on the member's Data Cloud market segment.

## Namespace

[LoyaltyManagement](atlas.en-us.loyalty.meta/loyalty/apex_namespace_LoyaltyManagement.htm "The LoyaltyManagement namespace provides Apex classes and methods to run the Loyalty Management actions.")

-   **[CdpBasedLoyaltyPromotionOutput Methods](atlas.en-us.loyalty.meta/loyalty/apex_class_LoyaltyManagement_CdpBasedLoyaltyPromotionOutput.htm#apex_LoyaltyManagement_CdpBasedLoyaltyPromotionOutput_methods)**


## CdpBasedLoyaltyPromotionOutput Methods

The following are methods for CdpBasedLoyaltyPromotionOutput.

-   **[getErrors()](atlas.en-us.loyalty.meta/loyalty/apex_class_LoyaltyManagement_CdpBasedLoyaltyPromotionOutput.htm#apex_LoyaltyManagement_CdpBasedLoyaltyPromotionOutput_getErrors)**
    If an error occurred, returns a list providing the error code and description.
-   **[getPromotions()](atlas.en-us.loyalty.meta/loyalty/apex_class_LoyaltyManagement_CdpBasedLoyaltyPromotionOutput.htm#apex_LoyaltyManagement_CdpBasedLoyaltyPromotionOutput_getPromotions)**
    Returns a List of sObject data type that contains the promotion records.
-   **[isSuccess()](atlas.en-us.loyalty.meta/loyalty/apex_class_LoyaltyManagement_CdpBasedLoyaltyPromotionOutput.htm#apex_LoyaltyManagement_CdpBasedLoyaltyPromotionOutput_isSuccess)**
    Returns a Boolean that is set to true if the Data Cloud based loyalty promotion operation was successful for this object, false otherwise.

### getErrors()

If an error occurred, returns a list providing the error code and description.

#### Signature

public List<LoyaltyManagement.LoyaltyActionError> getErrors()

#### Return Value

Type: List<[LoyaltyManagement.LoyaltyActionError](atlas.en-us.loyalty.meta/loyalty/apex_class_LoyaltyManagement_LoyaltyActionError.htm#apex_class_LoyaltyManagement_LoyaltyActionError "A class that contains the errors related to the execution of a Loyalty Management action.")\>

### getPromotions()

Returns a List of sObject data type that contains the promotion records.

#### Signature

public List<SObject> getPromotions()

#### Return Value

Type: List<SObject>

### isSuccess()

Returns a Boolean that is set to true if the Data Cloud based loyalty promotion operation was successful for this object, false otherwise.

#### Signature

public Boolean isSuccess()

#### Return Value

Type: Boolean

## Related Topics

- LoyaltyManagement (atlas.en-us.loyalty.meta/loyalty/apex_namespace_LoyaltyManagement.htm)
- CdpBasedLoyaltyPromotionOutput Methods (atlas.en-us.loyalty.meta/loyalty/apex_class_LoyaltyManagement_CdpBasedLoyaltyPromotionOutput.htm)
- getErrors() (atlas.en-us.loyalty.meta/loyalty/apex_class_LoyaltyManagement_CdpBasedLoyaltyPromotionOutput.htm)
- getPromotions() (atlas.en-us.loyalty.meta/loyalty/apex_class_LoyaltyManagement_CdpBasedLoyaltyPromotionOutput.htm)
- isSuccess() (atlas.en-us.loyalty.meta/loyalty/apex_class_LoyaltyManagement_CdpBasedLoyaltyPromotionOutput.htm)
- LoyaltyManagement.LoyaltyActionError (atlas.en-us.loyalty.meta/loyalty/apex_class_LoyaltyManagement_LoyaltyActionError.htm)
