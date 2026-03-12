---
title: "MemberTierInputBuilder Class"
domain: loyalty
topic: membertierinputbuilder-class
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:50.650Z
estimatedTokens: 919
namespace: LoyaltyManagement
keywords: [MemberTierInputBuilder, build, instance, LoyaltyManagement.MemberTierInput, setLoyaltyProgramMemberId, loyaltyProgramMemberId, setProgramName, programName, setTierGroupName, tierGroupName]
---

# MemberTierInputBuilder Class

> Contains methods to build an instance of the LoyaltyManagement.MemberTierInput class.

**Namespace:** `LoyaltyManagement`

# MemberTierInputBuilder Class

Contains methods to build an instance of the LoyaltyManagement.MemberTierInput class.

## Namespace

[LoyaltyManagement](atlas.en-us.loyalty.meta/loyalty/apex_namespace_LoyaltyManagement.htm "The LoyaltyManagement namespace provides Apex classes and methods to run the Loyalty Management actions.")

-   **[MemberTierInputBuilder Methods](atlas.en-us.loyalty.meta/loyalty/apex_class_LoyaltyManagement_MemberTierInputBuilder.htm#apex_LoyaltyManagement_MemberTierInputBuilder_methods)**


## MemberTierInputBuilder Methods

The following are methods for MemberTierInputBuilder.

-   **[build()](atlas.en-us.loyalty.meta/loyalty/apex_class_LoyaltyManagement_MemberTierInputBuilder.htm#apex_LoyaltyManagement_MemberTierInputBuilder_build)**
    Returns an instance of the LoyaltyManagement.MemberTierInput object.
-   **[setLoyaltyProgramMemberId(loyaltyProgramMemberId)](atlas.en-us.loyalty.meta/loyalty/apex_class_LoyaltyManagement_MemberTierInputBuilder.htm#apex_LoyaltyManagement_MemberTierInputBuilder_setLoyaltyProgramMemberId)**
    Represents the ID of the loyalty program member whose tier details are to be fetched. This is a required field.
-   **[setProgramName(programName)](atlas.en-us.loyalty.meta/loyalty/apex_class_LoyaltyManagement_MemberTierInputBuilder.htm#apex_LoyaltyManagement_MemberTierInputBuilder_setProgramName)**
    Represents the loyalty program name associated with the tier.
-   **[setTierGroupName(tierGroupName)](atlas.en-us.loyalty.meta/loyalty/apex_class_LoyaltyManagement_MemberTierInputBuilder.htm#apex_LoyaltyManagement_MemberTierInputBuilder_setTierGroupName)**
    Represents the name of the tier group. This is a required field.

### build()

Returns an instance of the LoyaltyManagement.MemberTierInput object.

#### Signature

public LoyaltyManagement.MemberTierInput build()

#### Return Value

Type: [LoyaltyManagement.MemberTierInput](atlas.en-us.loyalty.meta/loyalty/apex_class_LoyaltyManagement_MemberTierInput.htm#apex_class_LoyaltyManagement_MemberTierInput "Use this class to retrieve the current tier for a specified loyalty program member. This class receives the input parameter values for the Get Member Tier action.")

### setLoyaltyProgramMemberId(loyaltyProgramMemberId)

Represents the ID of the loyalty program member whose tier details are to be fetched. This is a required field.

#### Signature

public LoyaltyManagement.MemberTierInputBuilder setLoyaltyProgramMemberId(String loyaltyProgramMemberId)

#### Parameters

loyaltyProgramMemberId

Type: String

#### Return Value

Type: [LoyaltyManagement.MemberTierInputBuilder](#apex_class_LoyaltyManagement_MemberTierInputBuilder "Contains methods to build an instance of the LoyaltyManagement.MemberTierInput class.")

### setProgramName(programName)

Represents the loyalty program name associated with the tier.

#### Signature

public LoyaltyManagement.MemberTierInputBuilder setProgramName(String programName)

#### Parameters

programName

Type: String

#### Return Value

Type: [LoyaltyManagement.MemberTierInputBuilder](#apex_class_LoyaltyManagement_MemberTierInputBuilder "Contains methods to build an instance of the LoyaltyManagement.MemberTierInput class.")

### setTierGroupName(tierGroupName)

Represents the name of the tier group. This is a required field.

#### Signature

public LoyaltyManagement.MemberTierInputBuilder setTierGroupName(String tierGroupName)

#### Parameters

tierGroupName

Type: String

#### Return Value

Type: [LoyaltyManagement.MemberTierInputBuilder](#apex_class_LoyaltyManagement_MemberTierInputBuilder "Contains methods to build an instance of the LoyaltyManagement.MemberTierInput class.")

## Related Topics

- LoyaltyManagement (atlas.en-us.loyalty.meta/loyalty/apex_namespace_LoyaltyManagement.htm)
- MemberTierInputBuilder Methods (atlas.en-us.loyalty.meta/loyalty/apex_class_LoyaltyManagement_MemberTierInputBuilder.htm)
- build() (atlas.en-us.loyalty.meta/loyalty/apex_class_LoyaltyManagement_MemberTierInputBuilder.htm)
- setLoyaltyProgramMemberId(loyaltyProgramMemberId) (atlas.en-us.loyalty.meta/loyalty/apex_class_LoyaltyManagement_MemberTierInputBuilder.htm)
- setProgramName(programName) (atlas.en-us.loyalty.meta/loyalty/apex_class_LoyaltyManagement_MemberTierInputBuilder.htm)
- setTierGroupName(tierGroupName) (atlas.en-us.loyalty.meta/loyalty/apex_class_LoyaltyManagement_MemberTierInputBuilder.htm)
- LoyaltyManagement.MemberTierInput (atlas.en-us.loyalty.meta/loyalty/apex_class_LoyaltyManagement_MemberTierInput.htm)
