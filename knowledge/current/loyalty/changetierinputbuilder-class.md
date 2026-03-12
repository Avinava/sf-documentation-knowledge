---
title: "ChangeTierInputBuilder Class"
domain: loyalty
topic: changetierinputbuilder-class
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:50.505Z
estimatedTokens: 1283
namespace: LoyaltyManagement
keywords: [ChangeTierInputBuilder, build, instance, LoyaltyManagement.ChangeTierInput, setChangeReason, changeReason, setLoyaltyProgramMemberId, loyaltyProgramMemberId, setProgramName, programName, setTargetTierName, targetTierName, setTierGroupName, tierGroupName]
---

# ChangeTierInputBuilder Class

> Contains methods to build an instance of the LoyaltyManagement.ChangeTierInput class.

**Namespace:** `LoyaltyManagement`

# ChangeTierInputBuilder Class

Contains methods to build an instance of the LoyaltyManagement.ChangeTierInput class.

## Namespace

[LoyaltyManagement](atlas.en-us.loyalty.meta/loyalty/apex_namespace_LoyaltyManagement.htm "The LoyaltyManagement namespace provides Apex classes and methods to run the Loyalty Management actions.")

-   **[ChangeTierInputBuilder Methods](atlas.en-us.loyalty.meta/loyalty/apex_class_LoyaltyManagement_ChangeTierInputBuilder.htm#apex_LoyaltyManagement_ChangeTierInputBuilder_methods)**


## ChangeTierInputBuilder Methods

The following are methods for ChangeTierInputBuilder.

-   **[build()](atlas.en-us.loyalty.meta/loyalty/apex_class_LoyaltyManagement_ChangeTierInputBuilder.htm#apex_LoyaltyManagement_ChangeTierInputBuilder_build)**
    Returns an instance of the LoyaltyManagement.ChangeTierInput object.
-   **[setChangeReason(changeReason)](atlas.en-us.loyalty.meta/loyalty/apex_class_LoyaltyManagement_ChangeTierInputBuilder.htm#apex_LoyaltyManagement_ChangeTierInputBuilder_setChangeReason)**
    Represents the reason to change a member tier.
-   **[setLoyaltyProgramMemberId(loyaltyProgramMemberId)](atlas.en-us.loyalty.meta/loyalty/apex_class_LoyaltyManagement_ChangeTierInputBuilder.htm#apex_LoyaltyManagement_ChangeTierInputBuilder_setLoyaltyProgramMemberId)**
    Represents the ID of the loyalty program member. This is a required field.
-   **[setProgramName(programName)](atlas.en-us.loyalty.meta/loyalty/apex_class_LoyaltyManagement_ChangeTierInputBuilder.htm#apex_LoyaltyManagement_ChangeTierInputBuilder_setProgramName)**
    Represents the loyalty program name associated with the tier. This is a required field.
-   **[setTargetTierName(targetTierName)](atlas.en-us.loyalty.meta/loyalty/apex_class_LoyaltyManagement_ChangeTierInputBuilder.htm#apex_LoyaltyManagement_ChangeTierInputBuilder_setTargetTierName)**
    Represents the new tier to associate with the loyalty program member. This is a required field.
-   **[setTierGroupName(tierGroupName)](atlas.en-us.loyalty.meta/loyalty/apex_class_LoyaltyManagement_ChangeTierInputBuilder.htm#apex_LoyaltyManagement_ChangeTierInputBuilder_setTierGroupName)**
    Represents the name of the loyalty tier group. This is a required field.

### build()

Returns an instance of the LoyaltyManagement.ChangeTierInput object.

#### Signature

public LoyaltyManagement.ChangeTierInput build()

#### Return Value

Type: [LoyaltyManagement.ChangeTierInput](atlas.en-us.loyalty.meta/loyalty/apex_class_LoyaltyManagement_ChangeTierInput.htm#apex_class_LoyaltyManagement_ChangeTierInput "Use this class to change the tier for a given loyalty program member. This class receives the input parameter values for the Change Tier action.")

### setChangeReason(changeReason)

Represents the reason to change a member tier.

#### Signature

public LoyaltyManagement.ChangeTierInputBuilder setChangeReason(String changeReason)

#### Parameters

changeReason

Type: String

#### Return Value

Type: [LoyaltyManagement.ChangeTierInputBuilder](#apex_class_LoyaltyManagement_ChangeTierInputBuilder "Contains methods to build an instance of the LoyaltyManagement.ChangeTierInput class.")

### setLoyaltyProgramMemberId(loyaltyProgramMemberId)

Represents the ID of the loyalty program member. This is a required field.

#### Signature

public LoyaltyManagement.ChangeTierInputBuilder setLoyaltyProgramMemberId(String loyaltyProgramMemberId)

#### Parameters

loyaltyProgramMemberId

Type: String

#### Return Value

Type: [LoyaltyManagement.ChangeTierInputBuilder](#apex_class_LoyaltyManagement_ChangeTierInputBuilder "Contains methods to build an instance of the LoyaltyManagement.ChangeTierInput class.")

### setProgramName(programName)

Represents the loyalty program name associated with the tier. This is a required field.

#### Signature

public LoyaltyManagement.ChangeTierInputBuilder setProgramName(String programName)

#### Parameters

programName

Type: String

#### Return Value

Type: [LoyaltyManagement.ChangeTierInputBuilder](#apex_class_LoyaltyManagement_ChangeTierInputBuilder "Contains methods to build an instance of the LoyaltyManagement.ChangeTierInput class.")

### setTargetTierName(targetTierName)

Represents the new tier to associate with the loyalty program member. This is a required field.

#### Signature

public LoyaltyManagement.ChangeTierInputBuilder setTargetTierName(String targetTierName)

#### Parameters

targetTierName

Type: String

#### Return Value

Type: [LoyaltyManagement.ChangeTierInputBuilder](#apex_class_LoyaltyManagement_ChangeTierInputBuilder "Contains methods to build an instance of the LoyaltyManagement.ChangeTierInput class.")

### setTierGroupName(tierGroupName)

Represents the name of the loyalty tier group. This is a required field.

#### Signature

public LoyaltyManagement.ChangeTierInputBuilder setTierGroupName(String tierGroupName)

#### Parameters

tierGroupName

Type: String

#### Return Value

Type: [LoyaltyManagement.ChangeTierInputBuilder](#apex_class_LoyaltyManagement_ChangeTierInputBuilder "Contains methods to build an instance of the LoyaltyManagement.ChangeTierInput class.")

## Related Topics

- LoyaltyManagement (atlas.en-us.loyalty.meta/loyalty/apex_namespace_LoyaltyManagement.htm)
- ChangeTierInputBuilder Methods (atlas.en-us.loyalty.meta/loyalty/apex_class_LoyaltyManagement_ChangeTierInputBuilder.htm)
- build() (atlas.en-us.loyalty.meta/loyalty/apex_class_LoyaltyManagement_ChangeTierInputBuilder.htm)
- setChangeReason(changeReason) (atlas.en-us.loyalty.meta/loyalty/apex_class_LoyaltyManagement_ChangeTierInputBuilder.htm)
- setLoyaltyProgramMemberId(loyaltyProgramMemberId) (atlas.en-us.loyalty.meta/loyalty/apex_class_LoyaltyManagement_ChangeTierInputBuilder.htm)
- setProgramName(programName) (atlas.en-us.loyalty.meta/loyalty/apex_class_LoyaltyManagement_ChangeTierInputBuilder.htm)
- setTargetTierName(targetTierName) (atlas.en-us.loyalty.meta/loyalty/apex_class_LoyaltyManagement_ChangeTierInputBuilder.htm)
- setTierGroupName(tierGroupName) (atlas.en-us.loyalty.meta/loyalty/apex_class_LoyaltyManagement_ChangeTierInputBuilder.htm)
- LoyaltyManagement.ChangeTierInput (atlas.en-us.loyalty.meta/loyalty/apex_class_LoyaltyManagement_ChangeTierInput.htm)
