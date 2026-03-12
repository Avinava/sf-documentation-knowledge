---
title: "GetMemberActiveSegmentsInputBuilder Class"
domain: loyalty
topic: getmemberactivesegmentsinputbuilder-class
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:50.531Z
estimatedTokens: 860
namespace: LoyaltyManagement
keywords: [GetMemberActiveSegmentsInputBuilder, build, instance, setLoyaltyProgramMemberID, loyaltyProgramMemberID, setSegmentIds, segmentIds]
---

# GetMemberActiveSegmentsInputBuilder Class

> Contains methods to build an instance of the LoyaltyManagement.GetMemberActiveSegmentsInput
    class.

**Namespace:** `LoyaltyManagement`

# GetMemberActiveSegmentsInputBuilder Class

Contains methods to build an instance of the LoyaltyManagement.GetMemberActiveSegmentsInput class.

## Namespace

[LoyaltyManagement](atlas.en-us.loyalty.meta/loyalty/apex_namespace_LoyaltyManagement.htm "The LoyaltyManagement namespace provides Apex classes and methods to run the Loyalty Management actions.")

-   **[GetMemberActiveSegmentsInputBuilder Methods](atlas.en-us.loyalty.meta/loyalty/apex_class_LoyaltyManagement_GetMemberActiveSegmentsInputBuilder.htm#apex_LoyaltyManagement_GetMemberActiveSegmentsInputBuilder_methods)**


## GetMemberActiveSegmentsInputBuilder Methods

The following are methods for GetMemberActiveSegmentsInputBuilder.

-   **[build()](atlas.en-us.loyalty.meta/loyalty/apex_class_LoyaltyManagement_GetMemberActiveSegmentsInputBuilder.htm#apex_LoyaltyManagement_GetMemberActiveSegmentsInputBuilder_build)**
    Returns an instance of the LoyaltyManagement.GetMemberActiveSegmentsInput object.
-   **[setLoyaltyProgramMemberID(loyaltyProgramMemberID)](atlas.en-us.loyalty.meta/loyalty/apex_class_LoyaltyManagement_GetMemberActiveSegmentsInputBuilder.htm#apex_LoyaltyManagement_GetMemberActiveSegmentsInputBuilder_setLoyaltyProgramMemberID)**
    Represents the ID of the loyalty program member to retrieve associated active segments for. This is a required field.
-   **[setSegmentIds(segmentIds)](atlas.en-us.loyalty.meta/loyalty/apex_class_LoyaltyManagement_GetMemberActiveSegmentsInputBuilder.htm#apex_LoyaltyManagement_GetMemberActiveSegmentsInputBuilder_setSegmentIds)**
    Represents a comma-delimited list of segmentIds to retrieve for the specified member's associated segments.

### build()

Returns an instance of the LoyaltyManagement.GetMemberActiveSegmentsInput object.

#### Signature

public LoyaltyManagement.GetMemberActiveSegmentsInput build()

#### Return Value

Type: [LoyaltyManagement.GetMemberActiveSegmentsInput](atlas.en-us.loyalty.meta/loyalty/apex_class_LoyaltyManagement_GetMemberActiveSegmentsInput.htm#apex_class_LoyaltyManagement_GetMemberActiveSegmentsInput "Use this class to retrieve active Data Cloud market segments that a loyalty program member is part of. This class receives the input parameter values for the Get Member's Active Segments action.")

### setLoyaltyProgramMemberID(loyaltyProgramMemberID)

Represents the ID of the loyalty program member to retrieve associated active segments for. This is a required field.

#### Signature

public LoyaltyManagement.GetMemberActiveSegmentsInputBuilder setLoyaltyProgramMemberID(String loyaltyProgramMemberID)

#### Parameters

loyaltyProgramMemberID

Type: String

#### Return Value

Type: [LoyaltyManagement.GetMemberActiveSegmentsInputBuilder](#apex_class_LoyaltyManagement_GetMemberActiveSegmentsInputBuilder "Contains methods to build an instance of the LoyaltyManagement.GetMemberActiveSegmentsInput class.")

### setSegmentIds(segmentIds)

Represents a comma-delimited list of segmentIds to retrieve for the specified member's associated segments.

#### Signature

public LoyaltyManagement.GetMemberActiveSegmentsInputBuilder setSegmentIds(List<String\> segmentIds)

#### Parameters

segmentIds

Type: List<String>

#### Return Value

Type: [LoyaltyManagement.GetMemberActiveSegmentsInputBuilder](#apex_class_LoyaltyManagement_GetMemberActiveSegmentsInputBuilder "Contains methods to build an instance of the LoyaltyManagement.GetMemberActiveSegmentsInput class.")

## Related Topics

- LoyaltyManagement (atlas.en-us.loyalty.meta/loyalty/apex_namespace_LoyaltyManagement.htm)
- GetMemberActiveSegmentsInputBuilder Methods (atlas.en-us.loyalty.meta/loyalty/apex_class_LoyaltyManagement_GetMemberActiveSegmentsInputBuilder.htm)
- build() (atlas.en-us.loyalty.meta/loyalty/apex_class_LoyaltyManagement_GetMemberActiveSegmentsInputBuilder.htm)
- setLoyaltyProgramMemberID(loyaltyProgramMemberID) (atlas.en-us.loyalty.meta/loyalty/apex_class_LoyaltyManagement_GetMemberActiveSegmentsInputBuilder.htm)
- setSegmentIds(segmentIds) (atlas.en-us.loyalty.meta/loyalty/apex_class_LoyaltyManagement_GetMemberActiveSegmentsInputBuilder.htm)
- LoyaltyManagement.GetMemberActiveSegmentsInput (atlas.en-us.loyalty.meta/loyalty/apex_class_LoyaltyManagement_GetMemberActiveSegmentsInput.htm)
