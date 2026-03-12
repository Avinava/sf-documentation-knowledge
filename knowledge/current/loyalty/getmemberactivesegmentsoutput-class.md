---
title: "GetMemberActiveSegmentsOutput Class"
domain: loyalty
topic: getmemberactivesegmentsoutput-class
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:50.537Z
estimatedTokens: 675
namespace: LoyaltyManagement
keywords: [GetMemberActiveSegmentsOutput, ist, active, segment, IDs, loyalty, program, member, part, getErrors, getMemberSegmentIDs, isSuccess]
---

# GetMemberActiveSegmentsOutput Class

> Represents the ist of the active segment IDs that the specified
      loyalty program member is a part of.

**Namespace:** `LoyaltyManagement`

# GetMemberActiveSegmentsOutput Class

Represents the ist of the active segment IDs that the specified loyalty program member is a part of.

## Namespace

[LoyaltyManagement](atlas.en-us.loyalty.meta/loyalty/apex_namespace_LoyaltyManagement.htm "The LoyaltyManagement namespace provides Apex classes and methods to run the Loyalty Management actions.")

-   **[GetMemberActiveSegmentsOutput Methods](atlas.en-us.loyalty.meta/loyalty/apex_class_LoyaltyManagement_GetMemberActiveSegmentsOutput.htm#apex_LoyaltyManagement_GetMemberActiveSegmentsOutput_methods)**


## GetMemberActiveSegmentsOutput Methods

The following are methods for GetMemberActiveSegmentsOutput.

-   **[getErrors()](atlas.en-us.loyalty.meta/loyalty/apex_class_LoyaltyManagement_GetMemberActiveSegmentsOutput.htm#apex_LoyaltyManagement_GetMemberActiveSegmentsOutput_getErrors)**
    If an error occurred, returns a list providing the error code and description.
-   **[getMemberSegmentIDs()](atlas.en-us.loyalty.meta/loyalty/apex_class_LoyaltyManagement_GetMemberActiveSegmentsOutput.htm#apex_LoyaltyManagement_GetMemberActiveSegmentsOutput_getMemberSegmentIDs)**
    Returns a comma-delimited list of the active segment IDs that the specified loyalty program member is a part of.
-   **[isSuccess()](atlas.en-us.loyalty.meta/loyalty/apex_class_LoyaltyManagement_GetMemberActiveSegmentsOutput.htm#apex_LoyaltyManagement_GetMemberActiveSegmentsOutput_isSuccess)**
    Returns a Boolean that is set to true if the get member active segments operation was successful for this object, false otherwise.

### getErrors()

If an error occurred, returns a list providing the error code and description.

#### Signature

public List<LoyaltyManagement.LoyaltyActionError> getErrors()

#### Return Value

Type: List<[LoyaltyManagement.LoyaltyActionError](atlas.en-us.loyalty.meta/loyalty/apex_class_LoyaltyManagement_LoyaltyActionError.htm#apex_class_LoyaltyManagement_LoyaltyActionError "A class that contains the errors related to the execution of a Loyalty Management action.")\>

### getMemberSegmentIDs()

Returns a comma-delimited list of the active segment IDs that the specified loyalty program member is a part of.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=loyalty)

#### Note

If input segment IDs are passed, then the response is a subset of the specified segment IDs.

#### Signature

public List<String\> getMemberSegmentIDs()

#### Return Value

Type: List<String>

### isSuccess()

Returns a Boolean that is set to true if the get member active segments operation was successful for this object, false otherwise.

#### Signature

public Boolean isSuccess()

#### Return Value

Type: Boolean

## Related Topics

- LoyaltyManagement (atlas.en-us.loyalty.meta/loyalty/apex_namespace_LoyaltyManagement.htm)
- GetMemberActiveSegmentsOutput Methods (atlas.en-us.loyalty.meta/loyalty/apex_class_LoyaltyManagement_GetMemberActiveSegmentsOutput.htm)
- getErrors() (atlas.en-us.loyalty.meta/loyalty/apex_class_LoyaltyManagement_GetMemberActiveSegmentsOutput.htm)
- getMemberSegmentIDs() (atlas.en-us.loyalty.meta/loyalty/apex_class_LoyaltyManagement_GetMemberActiveSegmentsOutput.htm)
- isSuccess() (atlas.en-us.loyalty.meta/loyalty/apex_class_LoyaltyManagement_GetMemberActiveSegmentsOutput.htm)
- LoyaltyManagement.LoyaltyActionError (atlas.en-us.loyalty.meta/loyalty/apex_class_LoyaltyManagement_LoyaltyActionError.htm)
