---
title: "DebitPointsOutput Class"
domain: loyalty
topic: debitpointsoutput-class
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:50.524Z
estimatedTokens: 973
namespace: LoyaltyManagement
keywords: [DebitPointsOutput, points, debited, loyalty, program, member’s, balance, getCurrencyName, getErrors, getJournalId, getLoyaltyProgramMemberId, getPoints, getProgramName, isSuccess]
---

# DebitPointsOutput Class

> Represents the details of points debited from a loyalty program
      member’s balance.

**Namespace:** `LoyaltyManagement`

# DebitPointsOutput Class

Represents the details of points debited from a loyalty program member’s balance.

## Namespace

[LoyaltyManagement](atlas.en-us.loyalty.meta/loyalty/apex_namespace_LoyaltyManagement.htm "The LoyaltyManagement namespace provides Apex classes and methods to run the Loyalty Management actions.")

-   **[DebitPointsOutput Methods](atlas.en-us.loyalty.meta/loyalty/apex_class_LoyaltyManagement_DebitPointsOutput.htm#apex_LoyaltyManagement_DebitPointsOutput_methods)**


## DebitPointsOutput Methods

The following are methods for DebitPointsOutput.

-   **[getCurrencyName()](atlas.en-us.loyalty.meta/loyalty/apex_class_LoyaltyManagement_DebitPointsOutput.htm#apex_LoyaltyManagement_DebitPointsOutput_getCurrencyName)**
    Returns a String that contains the name of the program currency.
-   **[getErrors()](atlas.en-us.loyalty.meta/loyalty/apex_class_LoyaltyManagement_DebitPointsOutput.htm#apex_LoyaltyManagement_DebitPointsOutput_getErrors)**
    If an error occurred, returns a list providing the error code and description.
-   **[getJournalId()](atlas.en-us.loyalty.meta/loyalty/apex_class_LoyaltyManagement_DebitPointsOutput.htm#apex_LoyaltyManagement_DebitPointsOutput_getJournalId)**
    Returns a String that contains the ID of the transaction journal.
-   **[getLoyaltyProgramMemberId()](atlas.en-us.loyalty.meta/loyalty/apex_class_LoyaltyManagement_DebitPointsOutput.htm#apex_LoyaltyManagement_DebitPointsOutput_getLoyaltyProgramMemberId)**
    Returns a String that contains the ID of the loyalty program member.
-   **[getPoints()](atlas.en-us.loyalty.meta/loyalty/apex_class_LoyaltyManagement_DebitPointsOutput.htm#apex_LoyaltyManagement_DebitPointsOutput_getPoints)**
    Returns a Double that contains the total points available for the loyalty program member.
-   **[getProgramName()](atlas.en-us.loyalty.meta/loyalty/apex_class_LoyaltyManagement_DebitPointsOutput.htm#apex_LoyaltyManagement_DebitPointsOutput_getProgramName)**
    Returns a String that contains the name of the loyalty program.
-   **[isSuccess()](atlas.en-us.loyalty.meta/loyalty/apex_class_LoyaltyManagement_DebitPointsOutput.htm#apex_LoyaltyManagement_DebitPointsOutput_isSuccess)**
    Returns a Boolean that is set to true if the debit points operation was successful for this object, false otherwise.

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

### getPoints()

Returns a Double that contains the total points available for the loyalty program member.

#### Signature

public Double getPoints()

#### Return Value

Type: Double

### getProgramName()

Returns a String that contains the name of the loyalty program.

#### Signature

public String getProgramName()

#### Return Value

Type: String

### isSuccess()

Returns a Boolean that is set to true if the debit points operation was successful for this object, false otherwise.

#### Signature

public Boolean isSuccess()

#### Return Value

Type: Boolean

## Related Topics

- LoyaltyManagement (atlas.en-us.loyalty.meta/loyalty/apex_namespace_LoyaltyManagement.htm)
- DebitPointsOutput Methods (atlas.en-us.loyalty.meta/loyalty/apex_class_LoyaltyManagement_DebitPointsOutput.htm)
- getCurrencyName() (atlas.en-us.loyalty.meta/loyalty/apex_class_LoyaltyManagement_DebitPointsOutput.htm)
- getErrors() (atlas.en-us.loyalty.meta/loyalty/apex_class_LoyaltyManagement_DebitPointsOutput.htm)
- getJournalId() (atlas.en-us.loyalty.meta/loyalty/apex_class_LoyaltyManagement_DebitPointsOutput.htm)
- getLoyaltyProgramMemberId() (atlas.en-us.loyalty.meta/loyalty/apex_class_LoyaltyManagement_DebitPointsOutput.htm)
- getPoints() (atlas.en-us.loyalty.meta/loyalty/apex_class_LoyaltyManagement_DebitPointsOutput.htm)
- getProgramName() (atlas.en-us.loyalty.meta/loyalty/apex_class_LoyaltyManagement_DebitPointsOutput.htm)
- isSuccess() (atlas.en-us.loyalty.meta/loyalty/apex_class_LoyaltyManagement_DebitPointsOutput.htm)
- LoyaltyManagement.LoyaltyActionError (atlas.en-us.loyalty.meta/loyalty/apex_class_LoyaltyManagement_LoyaltyActionError.htm)
