---
title: "CdpBasedLoyaltyPromotionInputBuilder Class"
domain: loyalty
topic: cdpbasedloyaltypromotioninputbuilder-class
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:50.490Z
estimatedTokens: 870
namespace: LoyaltyManagement
keywords: [CdpBasedLoyaltyPromotionInputBuilder, build, instance, setMemberId, memberId, setPromotions, promotions]
---

# CdpBasedLoyaltyPromotionInputBuilder Class

> Contains methods to build an instance of the LoyaltyManagement.CdpBasedLoyaltyPromotionInput
    class.

**Namespace:** `LoyaltyManagement`

# CdpBasedLoyaltyPromotionInputBuilder Class

Contains methods to build an instance of the LoyaltyManagement.CdpBasedLoyaltyPromotionInput class.

## Namespace

[LoyaltyManagement](atlas.en-us.loyalty.meta/loyalty/apex_namespace_LoyaltyManagement.htm "The LoyaltyManagement namespace provides Apex classes and methods to run the Loyalty Management actions.")

-   **[CdpBasedLoyaltyPromotionInputBuilder Methods](atlas.en-us.loyalty.meta/loyalty/apex_class_LoyaltyManagement_CdpBasedLoyaltyPromotionInputBuilder.htm#apex_LoyaltyManagement_CdpBasedLoyaltyPromotionInputBuilder_methods)**


## CdpBasedLoyaltyPromotionInputBuilder Methods

The following are methods for CdpBasedLoyaltyPromotionInputBuilder.

-   **[build()](atlas.en-us.loyalty.meta/loyalty/apex_class_LoyaltyManagement_CdpBasedLoyaltyPromotionInputBuilder.htm#apex_LoyaltyManagement_CdpBasedLoyaltyPromotionInputBuilder_build)**
    Returns an instance of the LoyaltyManagement.CdpBasedLoyaltyPromotionInput object.
-   **[setMemberId(memberId)](atlas.en-us.loyalty.meta/loyalty/apex_class_LoyaltyManagement_CdpBasedLoyaltyPromotionInputBuilder.htm#apex_LoyaltyManagement_CdpBasedLoyaltyPromotionInputBuilder_setMemberId)**
    Represents the ID of a loyalty program member for whom promotions must be filtered. This is a required field. Ensure that the member is part of a Data Cloud market segment.
-   **[setPromotions(promotions)](atlas.en-us.loyalty.meta/loyalty/apex_class_LoyaltyManagement_CdpBasedLoyaltyPromotionInputBuilder.htm#apex_LoyaltyManagement_CdpBasedLoyaltyPromotionInputBuilder_setPromotions)**
    Represents the promotion records to filter the promotions that are applicable to the member's market segment.

### build()

Returns an instance of the LoyaltyManagement.CdpBasedLoyaltyPromotionInput object.

#### Signature

public LoyaltyManagement.CdpBasedLoyaltyPromotionInput build()

#### Return Value

Type: [LoyaltyManagement.CdpBasedLoyaltyPromotionInput](atlas.en-us.loyalty.meta/loyalty/apex_class_LoyaltyManagement_CdpBasedLoyaltyPromotionInput.htm#apex_class_LoyaltyManagement_CdpBasedLoyaltyPromotionInput "Use this class to retrieve promotions that are eligible for a member based on the member’s market segment. This class receives the input parameter values for the Data Cloud based Loyalty Promotion action.")

### setMemberId(memberId)

Represents the ID of a loyalty program member for whom promotions must be filtered. This is a required field. Ensure that the member is part of a Data Cloud market segment.

#### Signature

public LoyaltyManagement.CdpBasedLoyaltyPromotionInputBuilder setMemberId(String memberId)

#### Parameters

memberId

Type: String

#### Return Value

Type: [LoyaltyManagement.CdpBasedLoyaltyPromotionInputBuilder](#apex_class_LoyaltyManagement_CdpBasedLoyaltyPromotionInputBuilder "Contains methods to build an instance of the LoyaltyManagement.CdpBasedLoyaltyPromotionInput class.")

### setPromotions(promotions)

Represents the promotion records to filter the promotions that are applicable to the member's market segment.

#### Signature

public LoyaltyManagement.CdpBasedLoyaltyPromotionInputBuilder setPromotions(List<SObject> promotions)

#### Parameters

promotions

Type: List<SObject>

#### Return Value

Type: [LoyaltyManagement.CdpBasedLoyaltyPromotionInputBuilder](#apex_class_LoyaltyManagement_CdpBasedLoyaltyPromotionInputBuilder "Contains methods to build an instance of the LoyaltyManagement.CdpBasedLoyaltyPromotionInput class.")

## Related Topics

- LoyaltyManagement (atlas.en-us.loyalty.meta/loyalty/apex_namespace_LoyaltyManagement.htm)
- CdpBasedLoyaltyPromotionInputBuilder Methods (atlas.en-us.loyalty.meta/loyalty/apex_class_LoyaltyManagement_CdpBasedLoyaltyPromotionInputBuilder.htm)
- build() (atlas.en-us.loyalty.meta/loyalty/apex_class_LoyaltyManagement_CdpBasedLoyaltyPromotionInputBuilder.htm)
- setMemberId(memberId) (atlas.en-us.loyalty.meta/loyalty/apex_class_LoyaltyManagement_CdpBasedLoyaltyPromotionInputBuilder.htm)
- setPromotions(promotions) (atlas.en-us.loyalty.meta/loyalty/apex_class_LoyaltyManagement_CdpBasedLoyaltyPromotionInputBuilder.htm)
- LoyaltyManagement.CdpBasedLoyaltyPromotionInput (atlas.en-us.loyalty.meta/loyalty/apex_class_LoyaltyManagement_CdpBasedLoyaltyPromotionInput.htm)
