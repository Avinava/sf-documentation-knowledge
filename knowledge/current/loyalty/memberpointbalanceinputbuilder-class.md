---
title: "MemberPointBalanceInputBuilder Class"
domain: loyalty
topic: memberpointbalanceinputbuilder-class
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:50.628Z
estimatedTokens: 1007
namespace: LoyaltyManagement
keywords: [MemberPointBalanceInputBuilder, build, instance, setLoyaltyProgramMemberId, loyaltyProgramMemberId, setProgramCurrencyName, programCurrencyName, setProgramName, programName]
---

# MemberPointBalanceInputBuilder Class

> Contains methods to build an instance of the LoyaltyManagement.MemberPointsBalanceInput
    class.

**Namespace:** `LoyaltyManagement`

# MemberPointBalanceInputBuilder Class

Contains methods to build an instance of the LoyaltyManagement.MemberPointsBalanceInput class.

## Namespace

[LoyaltyManagement](atlas.en-us.loyalty.meta/loyalty/apex_namespace_LoyaltyManagement.htm "The LoyaltyManagement namespace provides Apex classes and methods to run the Loyalty Management actions.")

-   **[MemberPointBalanceInputBuilder Methods](atlas.en-us.loyalty.meta/loyalty/apex_class_LoyaltyManagement_MemberPointBalanceInputBuilder.htm#apex_LoyaltyManagement_MemberPointBalanceInputBuilder_methods)**


## MemberPointBalanceInputBuilder Methods

The following are methods for MemberPointBalanceInputBuilder.

-   **[build()](atlas.en-us.loyalty.meta/loyalty/apex_class_LoyaltyManagement_MemberPointBalanceInputBuilder.htm#apex_LoyaltyManagement_MemberPointBalanceInputBuilder_build)**
    Returns an instance of the LoyaltyManagement.MemberPointsBalanceInput object.
-   **[setLoyaltyProgramMemberId(loyaltyProgramMemberId)](atlas.en-us.loyalty.meta/loyalty/apex_class_LoyaltyManagement_MemberPointBalanceInputBuilder.htm#apex_LoyaltyManagement_MemberPointBalanceInputBuilder_setLoyaltyProgramMemberId)**
    Represents the ID of the loyalty program member whose points balance is to be fetched. This is a required field.
-   **[setProgramCurrencyName(programCurrencyName)](atlas.en-us.loyalty.meta/loyalty/apex_class_LoyaltyManagement_MemberPointBalanceInputBuilder.htm#apex_LoyaltyManagement_MemberPointBalanceInputBuilder_setProgramCurrencyName)**
    Represents the name of the program currency. This is a required field.
-   **[setProgramName(programName)](atlas.en-us.loyalty.meta/loyalty/apex_class_LoyaltyManagement_MemberPointBalanceInputBuilder.htm#apex_LoyaltyManagement_MemberPointBalanceInputBuilder_setProgramName)**
    Represents the name of the loyalty program. This is a required field.

### build()

Returns an instance of the LoyaltyManagement.MemberPointsBalanceInput object.

#### Signature

public LoyaltyManagement.MemberPointBalanceInput build()

#### Return Value

Type: [LoyaltyManagement.MemberPointBalanceInput](atlas.en-us.loyalty.meta/loyalty/apex_class_LoyaltyManagement_MemberPointBalanceInput.htm#apex_class_LoyaltyManagement_MemberPointBalanceInput "Use this class to retrieve loyalty points balance for a given loyalty program member. This class receives the input parameter values for the Get Member Points action.")

### setLoyaltyProgramMemberId(loyaltyProgramMemberId)

Represents the ID of the loyalty program member whose points balance is to be fetched. This is a required field.

#### Signature

public LoyaltyManagement.MemberPointBalanceInputBuilder setLoyaltyProgramMemberId(String loyaltyProgramMemberId)

#### Parameters

loyaltyProgramMemberId

Type: String

#### Return Value

Type: [LoyaltyManagement.MemberPointBalanceInputBuilder](#apex_class_LoyaltyManagement_MemberPointBalanceInputBuilder "Contains methods to build an instance of the LoyaltyManagement.MemberPointsBalanceInput class.")

### setProgramCurrencyName(programCurrencyName)

Represents the name of the program currency. This is a required field.

#### Signature

public LoyaltyManagement.MemberPointBalanceInputBuilder setProgramCurrencyName(String programCurrencyName)

#### Parameters

programCurrencyName

Type: String

#### Return Value

Type: [LoyaltyManagement.MemberPointBalanceInputBuilder](#apex_class_LoyaltyManagement_MemberPointBalanceInputBuilder "Contains methods to build an instance of the LoyaltyManagement.MemberPointsBalanceInput class.")

### setProgramName(programName)

Represents the name of the loyalty program. This is a required field.

#### Signature

public LoyaltyManagement.MemberPointBalanceInputBuilder setProgramName(String programName)

#### Parameters

programName

Type: String

#### Return Value

Type: [LoyaltyManagement.MemberPointBalanceInputBuilder](#apex_class_LoyaltyManagement_MemberPointBalanceInputBuilder "Contains methods to build an instance of the LoyaltyManagement.MemberPointsBalanceInput class.")

## Related Topics

- LoyaltyManagement (atlas.en-us.loyalty.meta/loyalty/apex_namespace_LoyaltyManagement.htm)
- MemberPointBalanceInputBuilder Methods (atlas.en-us.loyalty.meta/loyalty/apex_class_LoyaltyManagement_MemberPointBalanceInputBuilder.htm)
- build() (atlas.en-us.loyalty.meta/loyalty/apex_class_LoyaltyManagement_MemberPointBalanceInputBuilder.htm)
- setLoyaltyProgramMemberId(loyaltyProgramMemberId) (atlas.en-us.loyalty.meta/loyalty/apex_class_LoyaltyManagement_MemberPointBalanceInputBuilder.htm)
- setProgramCurrencyName(programCurrencyName) (atlas.en-us.loyalty.meta/loyalty/apex_class_LoyaltyManagement_MemberPointBalanceInputBuilder.htm)
- setProgramName(programName) (atlas.en-us.loyalty.meta/loyalty/apex_class_LoyaltyManagement_MemberPointBalanceInputBuilder.htm)
- LoyaltyManagement.MemberPointBalanceInput (atlas.en-us.loyalty.meta/loyalty/apex_class_LoyaltyManagement_MemberPointBalanceInput.htm)
