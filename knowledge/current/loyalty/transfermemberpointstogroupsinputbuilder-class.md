---
title: "TransferMemberPointsToGroupsInputBuilder Class"
domain: loyalty
topic: transfermemberpointstogroupsinputbuilder-class
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:50.685Z
estimatedTokens: 677
namespace: LoyaltyManagement
keywords: [build, instance, setJournalId, journalId]
---

# TransferMemberPointsToGroupsInputBuilder Class

> Contains methods to build an instance of the LoyaltyManagement.TransferMemberPointsToGroupsInput
      class.

**Namespace:** `LoyaltyManagement`

# TransferMemberPointsToGroupsInputBuilder Class

Contains methods to build an instance of the LoyaltyManagement.TransferMemberPointsToGroupsInput class.

## Namespace

[LoyaltyManagement](atlas.en-us.loyalty.meta/loyalty/apex_namespace_LoyaltyManagement.htm "The LoyaltyManagement namespace provides Apex classes and methods to run the Loyalty Management actions.")

-   **[TransferMemberPointsToGroupsInputBuilder Methods](atlas.en-us.loyalty.meta/loyalty/apex_class_LoyaltyManagement_TransferMemberPointsToGroupsInputBuilder.htm#apex_LoyaltyManagement_TransferMemberPointsToGroupsInputBuilder_methods)**


## TransferMemberPointsToGroupsInputBuilder Methods

The following are methods for TransferMemberPointsToGroupsInputBuilder.

-   **[build()](atlas.en-us.loyalty.meta/loyalty/apex_class_LoyaltyManagement_TransferMemberPointsToGroupsInputBuilder.htm#apex_LoyaltyManagement_TransferMemberPointsToGroupsInputBuilder_build)**
    Returns an instance of the LoyaltyManagement.TransferMemberPointsToGroupsInput object.
-   **[setJournalId(journalId)](atlas.en-us.loyalty.meta/loyalty/apex_class_LoyaltyManagement_TransferMemberPointsToGroupsInputBuilder.htm#apex_LoyaltyManagement_TransferMemberPointsToGroupsInputBuilder_setJournalId)**
    Represents the transaction journal that is used to transfer points to groups. This is a required field.

### build()

Returns an instance of the LoyaltyManagement.TransferMemberPointsToGroupsInput object.

#### Signature

public LoyaltyManagement.TransferMemberPointsToGroupsInput build()

#### Return Value

Type: [LoyaltyManagement.TransferMemberPointsToGroupsInput](atlas.en-us.loyalty.meta/loyalty/apex_class_LoyaltyManagement_TransferMemberPointsToGroupsInput.htm#apex_class_LoyaltyManagement_TransferMemberPointsToGroupsInput "Use this class to transfer points from an individual member or a corporate member to the member's associated group. This class receives the input parameter values for the Transfer Member Points To Groups action.")

### setJournalId(journalId)

Represents the transaction journal that is used to transfer points to groups. This is a required field.

#### Signature

public LoyaltyManagement.TransferMemberPointsToGroupsInputBuilder setJournalId(String journalId)

#### Parameters

journalId

Type: String

The transaction journal must be associated with either an Individual or a Corporate type member. The points are transferred to the member’s associated groups.

#### Return Value

Type: [LoyaltyManagement.TransferMemberPointsToGroupsInputBuilder](#apex_class_LoyaltyManagement_TransferMemberPointsToGroupsInputBuilder "Contains methods to build an instance of the LoyaltyManagement.TransferMemberPointsToGroupsInput class.")

## Related Topics

- LoyaltyManagement (atlas.en-us.loyalty.meta/loyalty/apex_namespace_LoyaltyManagement.htm)
- TransferMemberPointsToGroupsInputBuilder Methods (atlas.en-us.loyalty.meta/loyalty/apex_class_LoyaltyManagement_TransferMemberPointsToGroupsInputBuilder.htm)
- build() (atlas.en-us.loyalty.meta/loyalty/apex_class_LoyaltyManagement_TransferMemberPointsToGroupsInputBuilder.htm)
- setJournalId(journalId) (atlas.en-us.loyalty.meta/loyalty/apex_class_LoyaltyManagement_TransferMemberPointsToGroupsInputBuilder.htm)
- LoyaltyManagement.TransferMemberPointsToGroupsInput (atlas.en-us.loyalty.meta/loyalty/apex_class_LoyaltyManagement_TransferMemberPointsToGroupsInput.htm)
