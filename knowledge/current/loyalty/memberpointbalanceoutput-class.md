---
title: "MemberPointBalanceOutput Class"
domain: loyalty
topic: memberpointbalanceoutput-class
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:50.637Z
estimatedTokens: 1065
namespace: LoyaltyManagement
keywords: [MemberPointBalanceOutput, loyalty, points, balance, program, member, getCurrencyName, getErrors, getEscrowPointsBalance, getLoyaltyProgramMemberId, getPoints, getProgramName, isSuccess]
---

# MemberPointBalanceOutput Class

> Represents the loyalty points balance for a specified loyalty program
      member.

**Namespace:** `LoyaltyManagement`

# MemberPointBalanceOutput Class

Represents the loyalty points balance for a specified loyalty program member.

## Namespace

[LoyaltyManagement](atlas.en-us.loyalty.meta/loyalty/apex_namespace_LoyaltyManagement.htm "The LoyaltyManagement namespace provides Apex classes and methods to run the Loyalty Management actions.")

-   **[MemberPointBalanceOutput Methods](atlas.en-us.loyalty.meta/loyalty/apex_class_LoyaltyManagement_MemberPointBalanceOutput.htm#apex_LoyaltyManagement_MemberPointBalanceOutput_methods)**


## MemberPointBalanceOutput Methods

The following are methods for MemberPointBalanceOutput.

-   **[getCurrencyName()](atlas.en-us.loyalty.meta/loyalty/apex_class_LoyaltyManagement_MemberPointBalanceOutput.htm#apex_LoyaltyManagement_MemberPointBalanceOutput_getCurrencyName)**
    Returns a String that contains the name of the program currency.
-   **[getErrors()](atlas.en-us.loyalty.meta/loyalty/apex_class_LoyaltyManagement_MemberPointBalanceOutput.htm#apex_LoyaltyManagement_MemberPointBalanceOutput_getErrors)**
    If an error occurred, returns a list providing the error code and description.
-   **[getEscrowPointsBalance()](atlas.en-us.loyalty.meta/loyalty/apex_class_LoyaltyManagement_MemberPointBalanceOutput.htm#apex_LoyaltyManagement_MemberPointBalanceOutput_getEscrowPointsBalance)**
    Returns a Double that contains the escrow points balance for a loyalty program member. These points are yet to be credited from Escrow to the loyalty member’s points balance.
-   **[getLoyaltyProgramMemberId()](atlas.en-us.loyalty.meta/loyalty/apex_class_LoyaltyManagement_MemberPointBalanceOutput.htm#apex_LoyaltyManagement_MemberPointBalanceOutput_getLoyaltyProgramMemberId)**
    Returns a String that contains the ID of the loyalty program member.
-   **[getPoints()](atlas.en-us.loyalty.meta/loyalty/apex_class_LoyaltyManagement_MemberPointBalanceOutput.htm#apex_LoyaltyManagement_MemberPointBalanceOutput_getPoints)**
    Returns a Double that contains the points available for the loyalty program member.
-   **[getProgramName()](atlas.en-us.loyalty.meta/loyalty/apex_class_LoyaltyManagement_MemberPointBalanceOutput.htm#apex_LoyaltyManagement_MemberPointBalanceOutput_getProgramName)**
    Returns a String that contains the loyalty program name.
-   **[isSuccess()](atlas.en-us.loyalty.meta/loyalty/apex_class_LoyaltyManagement_MemberPointBalanceOutput.htm#apex_LoyaltyManagement_MemberPointBalanceOutput_isSuccess)**
    Returns a Boolean that is set to true if the member points operation was successful for this object, false otherwise.

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

### getEscrowPointsBalance()

Returns a Double that contains the escrow points balance for a loyalty program member. These points are yet to be credited from Escrow to the loyalty member’s points balance.

#### Signature

public Double getEscrowPointsBalance()

#### Return Value

Type: Double

### getLoyaltyProgramMemberId()

Returns a String that contains the ID of the loyalty program member.

#### Signature

public String getLoyaltyProgramMemberId()

#### Return Value

Type: String

### getPoints()

Returns a Double that contains the points available for the loyalty program member.

#### Signature

public Double getPoints()

#### Return Value

Type: Double

### getProgramName()

Returns a String that contains the loyalty program name.

#### Signature

public String getProgramName()

#### Return Value

Type: String

### isSuccess()

Returns a Boolean that is set to true if the member points operation was successful for this object, false otherwise.

#### Signature

public Boolean isSuccess()

#### Return Value

Type: Boolean

## Related Topics

- LoyaltyManagement (atlas.en-us.loyalty.meta/loyalty/apex_namespace_LoyaltyManagement.htm)
- MemberPointBalanceOutput Methods (atlas.en-us.loyalty.meta/loyalty/apex_class_LoyaltyManagement_MemberPointBalanceOutput.htm)
- getCurrencyName() (atlas.en-us.loyalty.meta/loyalty/apex_class_LoyaltyManagement_MemberPointBalanceOutput.htm)
- getErrors() (atlas.en-us.loyalty.meta/loyalty/apex_class_LoyaltyManagement_MemberPointBalanceOutput.htm)
- getEscrowPointsBalance() (atlas.en-us.loyalty.meta/loyalty/apex_class_LoyaltyManagement_MemberPointBalanceOutput.htm)
- getLoyaltyProgramMemberId() (atlas.en-us.loyalty.meta/loyalty/apex_class_LoyaltyManagement_MemberPointBalanceOutput.htm)
- getPoints() (atlas.en-us.loyalty.meta/loyalty/apex_class_LoyaltyManagement_MemberPointBalanceOutput.htm)
- getProgramName() (atlas.en-us.loyalty.meta/loyalty/apex_class_LoyaltyManagement_MemberPointBalanceOutput.htm)
- isSuccess() (atlas.en-us.loyalty.meta/loyalty/apex_class_LoyaltyManagement_MemberPointBalanceOutput.htm)
- LoyaltyManagement.LoyaltyActionError (atlas.en-us.loyalty.meta/loyalty/apex_class_LoyaltyManagement_LoyaltyActionError.htm)
