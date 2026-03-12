---
title: "UpdateCumulativeUsageCompletedOutput Class"
domain: loyalty
topic: updatecumulativeusagecompletedoutput-class
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:50.695Z
estimatedTokens: 798
namespace: LoyaltyManagement
keywords: [UpdateCumulativeUsageCompletedOutput, progress, made, loyalty, program, member, towards, attaining, Cumulative, promotion, getCumulativeUsageTarget, getErrors, getUpdatedCumulativeUsageCompleted, isSuccess]
---

# UpdateCumulativeUsageCompletedOutput Class

> Represents the details of the progress made by a loyalty program
      member towards attaining a Cumulative type promotion.

**Namespace:** `LoyaltyManagement`

# UpdateCumulativeUsageCompletedOutput Class

Represents the details of the progress made by a loyalty program member towards attaining a Cumulative type promotion.

## Namespace

[LoyaltyManagement](atlas.en-us.loyalty.meta/loyalty/apex_namespace_LoyaltyManagement.htm "The LoyaltyManagement namespace provides Apex classes and methods to run the Loyalty Management actions.")

-   **[UpdateCumulativeUsageCompletedOutput Methods](atlas.en-us.loyalty.meta/loyalty/apex_class_LoyaltyManagement_UpdateCumulativeUsageCompletedOutput.htm#apex_LoyaltyManagement_UpdateCumulativeUsageCompletedOutput_methods)**


## UpdateCumulativeUsageCompletedOutput Methods

The following are methods for UpdateCumulativeUsageCompletedOutput.

-   **[getCumulativeUsageTarget()](atlas.en-us.loyalty.meta/loyalty/apex_class_LoyaltyManagement_UpdateCumulativeUsageCompletedOutput.htm#apex_LoyaltyManagement_UpdateCumulativeUsageCompletedOutput_getCumulativeUsageTarget)**
    Returns the target value or quantity which members must achieve to attain the promotion.
-   **[getErrors()](atlas.en-us.loyalty.meta/loyalty/apex_class_LoyaltyManagement_UpdateCumulativeUsageCompletedOutput.htm#apex_LoyaltyManagement_UpdateCumulativeUsageCompletedOutput_getErrors)**
    If an error occurred, returns a list providing the error code and description.
-   **[getUpdatedCumulativeUsageCompleted()](atlas.en-us.loyalty.meta/loyalty/apex_class_LoyaltyManagement_UpdateCumulativeUsageCompletedOutput.htm#apex_LoyaltyManagement_UpdateCumulativeUsageCompletedOutput_getUpdatedCumulativeUsageCompleted)**
    Returns the updated value or quantity by which the member has progressed towards attaining the promotion.
-   **[isSuccess()](atlas.en-us.loyalty.meta/loyalty/apex_class_LoyaltyManagement_UpdateCumulativeUsageCompletedOutput.htm#apex_LoyaltyManagement_UpdateCumulativeUsageCompletedOutput_isSuccess)**
    Returns a Boolean that is set to true if the update cumulative usage completed operation was successful for this object, false otherwise.

### getCumulativeUsageTarget()

Returns the target value or quantity which members must achieve to attain the promotion.

#### Signature

public Integer getCumulativeUsageTarget()

#### Return Value

Type: Integer

### getErrors()

If an error occurred, returns a list providing the error code and description.

#### Signature

public List<LoyaltyManagement.LoyaltyActionError> getErrors()

#### Return Value

Type: List<[LoyaltyManagement.LoyaltyActionError](atlas.en-us.loyalty.meta/loyalty/apex_class_LoyaltyManagement_LoyaltyActionError.htm#apex_class_LoyaltyManagement_LoyaltyActionError "A class that contains the errors related to the execution of a Loyalty Management action.")\>

### getUpdatedCumulativeUsageCompleted()

Returns the updated value or quantity by which the member has progressed towards attaining the promotion.

#### Signature

public Integer getUpdatedCumulativeUsageCompleted()

#### Return Value

Type: Integer

### isSuccess()

Returns a Boolean that is set to true if the update cumulative usage completed operation was successful for this object, false otherwise.

#### Signature

public Boolean isSuccess()

#### Return Value

Type: Boolean

## Related Topics

- LoyaltyManagement (atlas.en-us.loyalty.meta/loyalty/apex_namespace_LoyaltyManagement.htm)
- UpdateCumulativeUsageCompletedOutput Methods (atlas.en-us.loyalty.meta/loyalty/apex_class_LoyaltyManagement_UpdateCumulativeUsageCompletedOutput.htm)
- getCumulativeUsageTarget() (atlas.en-us.loyalty.meta/loyalty/apex_class_LoyaltyManagement_UpdateCumulativeUsageCompletedOutput.htm)
- getErrors() (atlas.en-us.loyalty.meta/loyalty/apex_class_LoyaltyManagement_UpdateCumulativeUsageCompletedOutput.htm)
- getUpdatedCumulativeUsageCompleted() (atlas.en-us.loyalty.meta/loyalty/apex_class_LoyaltyManagement_UpdateCumulativeUsageCompletedOutput.htm)
- isSuccess() (atlas.en-us.loyalty.meta/loyalty/apex_class_LoyaltyManagement_UpdateCumulativeUsageCompletedOutput.htm)
- LoyaltyManagement.LoyaltyActionError (atlas.en-us.loyalty.meta/loyalty/apex_class_LoyaltyManagement_LoyaltyActionError.htm)
