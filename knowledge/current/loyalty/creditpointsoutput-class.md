---
title: "CreditPointsOutput Class"
domain: loyalty
topic: creditpointsoutput-class
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:50.517Z
estimatedTokens: 868
namespace: LoyaltyManagement
keywords: [CreditPointsOutput, points, credited, loyalty, program, member’s, balance, getCurrencyName, getErrors, getJournalId, getLoyaltyProgramMemberId, getProgramName, isSuccess]
---

# CreditPointsOutput Class

> Represents the details of points credited to a loyalty program
      member’s balance.

**Namespace:** `LoyaltyManagement`

# CreditPointsOutput Class

Represents the details of points credited to a loyalty program member’s balance.

## Namespace

[LoyaltyManagement](atlas.en-us.loyalty.meta/loyalty/apex_namespace_LoyaltyManagement.htm "The LoyaltyManagement namespace provides Apex classes and methods to run the Loyalty Management actions.")

-   **[CreditPointsOutput Methods](atlas.en-us.loyalty.meta/loyalty/apex_class_LoyaltyManagement_CreditPointsOutput.htm#apex_LoyaltyManagement_CreditPointsOutput_methods)**


## CreditPointsOutput Methods

The following are methods for CreditPointsOutput.

-   **[getCurrencyName()](atlas.en-us.loyalty.meta/loyalty/apex_class_LoyaltyManagement_CreditPointsOutput.htm#apex_LoyaltyManagement_CreditPointsOutput_getCurrencyName)**
    Returns a String that contains the name of the program currency.
-   **[getErrors()](atlas.en-us.loyalty.meta/loyalty/apex_class_LoyaltyManagement_CreditPointsOutput.htm#apex_LoyaltyManagement_CreditPointsOutput_getErrors)**
    If an error occurred, returns a list providing the error code and description.
-   **[getJournalId()](atlas.en-us.loyalty.meta/loyalty/apex_class_LoyaltyManagement_CreditPointsOutput.htm#apex_LoyaltyManagement_CreditPointsOutput_getJournalId)**
    Returns a String that contains the ID of the transaction journal.
-   **[getLoyaltyProgramMemberId()](atlas.en-us.loyalty.meta/loyalty/apex_class_LoyaltyManagement_CreditPointsOutput.htm#apex_LoyaltyManagement_CreditPointsOutput_getLoyaltyProgramMemberId)**
    Returns a String that contains the ID of the loyalty program member.
-   **[getProgramName()](atlas.en-us.loyalty.meta/loyalty/apex_class_LoyaltyManagement_CreditPointsOutput.htm#apex_LoyaltyManagement_CreditPointsOutput_getProgramName)**
    Returns a String that contains the name of the loyalty program.
-   **[isSuccess()](atlas.en-us.loyalty.meta/loyalty/apex_class_LoyaltyManagement_CreditPointsOutput.htm#apex_LoyaltyManagement_CreditPointsOutput_isSuccess)**
    Returns a Boolean that is set to true if the credit points operation was successful for this object, false otherwise.

### getCurrencyName()

Returns a String that contains the name of the program currency.

#### Signature

public String getCurrencyName()

#### Return Value

Type: String

### getErrors()

If an error occurred, returns a list providing the error code and description.

#### Signature

public List<LoyaltyManagement.LoyaltyActionError> getErrors()

#### Return Value

Type: List<[LoyaltyManagement.LoyaltyActionError](atlas.en-us.loyalty.meta/loyalty/apex_class_LoyaltyManagement_LoyaltyActionError.htm#apex_class_LoyaltyManagement_LoyaltyActionError "A class that contains the errors related to the execution of a Loyalty Management action.")\>

### getJournalId()

Returns a String that contains the ID of the transaction journal.

#### Signature

public String getJournalId()

#### Return Value

Type: String

### getLoyaltyProgramMemberId()

Returns a String that contains the ID of the loyalty program member.

#### Signature

public String getLoyaltyProgramMemberId()

#### Return Value

Type: String

### getProgramName()

Returns a String that contains the name of the loyalty program.

#### Signature

public String getProgramName()

#### Return Value

Type: String

### isSuccess()

Returns a Boolean that is set to true if the credit points operation was successful for this object, false otherwise.

#### Signature

public Boolean isSuccess()

#### Return Value

Type: Boolean

## Related Topics

- LoyaltyManagement (atlas.en-us.loyalty.meta/loyalty/apex_namespace_LoyaltyManagement.htm)
- CreditPointsOutput Methods (atlas.en-us.loyalty.meta/loyalty/apex_class_LoyaltyManagement_CreditPointsOutput.htm)
- getCurrencyName() (atlas.en-us.loyalty.meta/loyalty/apex_class_LoyaltyManagement_CreditPointsOutput.htm)
- getErrors() (atlas.en-us.loyalty.meta/loyalty/apex_class_LoyaltyManagement_CreditPointsOutput.htm)
- getJournalId() (atlas.en-us.loyalty.meta/loyalty/apex_class_LoyaltyManagement_CreditPointsOutput.htm)
- getLoyaltyProgramMemberId() (atlas.en-us.loyalty.meta/loyalty/apex_class_LoyaltyManagement_CreditPointsOutput.htm)
- getProgramName() (atlas.en-us.loyalty.meta/loyalty/apex_class_LoyaltyManagement_CreditPointsOutput.htm)
- isSuccess() (atlas.en-us.loyalty.meta/loyalty/apex_class_LoyaltyManagement_CreditPointsOutput.htm)
- LoyaltyManagement.LoyaltyActionError (atlas.en-us.loyalty.meta/loyalty/apex_class_LoyaltyManagement_LoyaltyActionError.htm)
