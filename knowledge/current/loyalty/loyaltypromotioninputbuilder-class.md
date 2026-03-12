---
title: "LoyaltyPromotionInputBuilder Class"
domain: loyalty
topic: loyaltypromotioninputbuilder-class
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:50.576Z
estimatedTokens: 607
namespace: LoyaltyManagement
keywords: [LoyaltyPromotionInputBuilder, build, instance, LoyaltyManagement.LoyaltyPromotionInput, setJournalId, journalId]
---

# LoyaltyPromotionInputBuilder Class

> Contains methods to build an instance of the LoyaltyManagement.LoyaltyPromotionInput
    class.

**Namespace:** `LoyaltyManagement`

# LoyaltyPromotionInputBuilder Class

Contains methods to build an instance of the LoyaltyManagement.LoyaltyPromotionInput class.

## Namespace

[LoyaltyManagement](atlas.en-us.loyalty.meta/loyalty/apex_namespace_LoyaltyManagement.htm "The LoyaltyManagement namespace provides Apex classes and methods to run the Loyalty Management actions.")

-   **[LoyaltyPromotionInputBuilder Methods](atlas.en-us.loyalty.meta/loyalty/apex_class_LoyaltyManagement_LoyaltyPromotionInputBuilder.htm#apex_LoyaltyManagement_LoyaltyPromotionInputBuilder_methods)**


## LoyaltyPromotionInputBuilder Methods

The following are methods for LoyaltyPromotionInputBuilder.

-   **[build()](atlas.en-us.loyalty.meta/loyalty/apex_class_LoyaltyManagement_LoyaltyPromotionInputBuilder.htm#apex_LoyaltyManagement_LoyaltyPromotionInputBuilder_build)**
    Returns an instance of the LoyaltyManagement.LoyaltyPromotionInput object.
-   **[setJournalId(journalId)](atlas.en-us.loyalty.meta/loyalty/apex_class_LoyaltyManagement_LoyaltyPromotionInputBuilder.htm#apex_LoyaltyManagement_LoyaltyPromotionInputBuilder_setJournalId)**
    Represents the ID of an Accrual or Redemption type Transaction Journal record that retrieval of active loyalty promotions is based on. This is a required field.

### build()

Returns an instance of the LoyaltyManagement.LoyaltyPromotionInput object.

#### Signature

public LoyaltyManagement.LoyaltyPromotionInput build()

#### Return Value

Type: [LoyaltyManagement.LoyaltyPromotionInput](atlas.en-us.loyalty.meta/loyalty/apex_class_LoyaltyManagement_LoyaltyPromotionInput.htm#apex_class_LoyaltyManagement_LoyaltyPromotionInput "Use this class to retrieve active promotions that are eligible for a transaction journal. The action can process accrual or redemption transactions. This class receives the input parameter values for the Loyalty Promotion action.")

### setJournalId(journalId)

Represents the ID of an Accrual or Redemption type Transaction Journal record that retrieval of active loyalty promotions is based on. This is a required field.

#### Signature

public LoyaltyManagement.LoyaltyPromotionInputBuilder setJournalId(String journalId)

#### Parameters

journalId

Type: String

#### Return Value

Type: [LoyaltyManagement.LoyaltyPromotionInputBuilder](#apex_class_LoyaltyManagement_LoyaltyPromotionInputBuilder "Contains methods to build an instance of the LoyaltyManagement.LoyaltyPromotionInput class.")

## Related Topics

- LoyaltyManagement (atlas.en-us.loyalty.meta/loyalty/apex_namespace_LoyaltyManagement.htm)
- LoyaltyPromotionInputBuilder Methods (atlas.en-us.loyalty.meta/loyalty/apex_class_LoyaltyManagement_LoyaltyPromotionInputBuilder.htm)
- build() (atlas.en-us.loyalty.meta/loyalty/apex_class_LoyaltyManagement_LoyaltyPromotionInputBuilder.htm)
- setJournalId(journalId) (atlas.en-us.loyalty.meta/loyalty/apex_class_LoyaltyManagement_LoyaltyPromotionInputBuilder.htm)
- LoyaltyManagement.LoyaltyPromotionInput (atlas.en-us.loyalty.meta/loyalty/apex_class_LoyaltyManagement_LoyaltyPromotionInput.htm)
