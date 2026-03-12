---
title: "MemberTierOutput Class"
domain: loyalty
topic: membertieroutput-class
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:50.661Z
estimatedTokens: 972
namespace: LoyaltyManagement
keywords: [MemberTierOutput, tier, loyalty, program, member, getErrors, getLoyaltyProgramMemberId, getMemberTier, getProgramName, getSequenceNumber, getTierGroupName, isSuccess]
---

# MemberTierOutput Class

> Represents the tier details for a specified loyalty program
      member.

**Namespace:** `LoyaltyManagement`

# MemberTierOutput Class

Represents the tier details for a specified loyalty program member.

## Namespace

[LoyaltyManagement](atlas.en-us.loyalty.meta/loyalty/apex_namespace_LoyaltyManagement.htm "The LoyaltyManagement namespace provides Apex classes and methods to run the Loyalty Management actions.")

-   **[MemberTierOutput Methods](atlas.en-us.loyalty.meta/loyalty/apex_class_LoyaltyManagement_MemberTierOutput.htm#apex_LoyaltyManagement_MemberTierOutput_methods)**


## MemberTierOutput Methods

The following are methods for MemberTierOutput.

-   **[getErrors()](atlas.en-us.loyalty.meta/loyalty/apex_class_LoyaltyManagement_MemberTierOutput.htm#apex_LoyaltyManagement_MemberTierOutput_getErrors)**
    If an error occurred, returns a list providing the error code and description.
-   **[getLoyaltyProgramMemberId()](atlas.en-us.loyalty.meta/loyalty/apex_class_LoyaltyManagement_MemberTierOutput.htm#apex_LoyaltyManagement_MemberTierOutput_getLoyaltyProgramMemberId)**
    Returns a String that contains the loyalty program member ID.
-   **[getMemberTier()](atlas.en-us.loyalty.meta/loyalty/apex_class_LoyaltyManagement_MemberTierOutput.htm#apex_LoyaltyManagement_MemberTierOutput_getMemberTier)**
    Returns a String that contains the name of the tier associated with the program member.
-   **[getProgramName()](atlas.en-us.loyalty.meta/loyalty/apex_class_LoyaltyManagement_MemberTierOutput.htm#apex_LoyaltyManagement_MemberTierOutput_getProgramName)**
    Returns a String that contains the loyalty program name associated with the tier.
-   **[getSequenceNumber()](atlas.en-us.loyalty.meta/loyalty/apex_class_LoyaltyManagement_MemberTierOutput.htm#apex_LoyaltyManagement_MemberTierOutput_getSequenceNumber)**
    Returns an Integer that contains the ranking of the tier.
-   **[getTierGroupName()](atlas.en-us.loyalty.meta/loyalty/apex_class_LoyaltyManagement_MemberTierOutput.htm#apex_LoyaltyManagement_MemberTierOutput_getTierGroupName)**
    Returns a String that contains the name of the tier group.
-   **[isSuccess()](atlas.en-us.loyalty.meta/loyalty/apex_class_LoyaltyManagement_MemberTierOutput.htm#apex_LoyaltyManagement_MemberTierOutput_isSuccess)**
    Returns a Boolean that is set to true if the member tier operation was successful for this object, false otherwise.

### getErrors()

If an error occurred, returns a list providing the error code and description.

#### Signature

public List<LoyaltyManagement.LoyaltyActionError> getErrors()

#### Return Value

Type: List<[LoyaltyManagement.LoyaltyActionError](atlas.en-us.loyalty.meta/loyalty/apex_class_LoyaltyManagement_LoyaltyActionError.htm#apex_class_LoyaltyManagement_LoyaltyActionError "A class that contains the errors related to the execution of a Loyalty Management action.")\>

### getLoyaltyProgramMemberId()

Returns a String that contains the loyalty program member ID.

#### Signature

public String getLoyaltyProgramMemberId()

#### Return Value

Type: String

### getMemberTier()

Returns a String that contains the name of the tier associated with the program member.

#### Signature

public String getMemberTier()

#### Return Value

Type: String

### getProgramName()

Returns a String that contains the loyalty program name associated with the tier.

#### Signature

public String getProgramName()

#### Return Value

Type: String

### getSequenceNumber()

Returns an Integer that contains the ranking of the tier.

#### Signature

public Integer getSequenceNumber()

#### Return Value

Type: Integer

### getTierGroupName()

Returns a String that contains the name of the tier group.

#### Signature

public String getTierGroupName()

#### Return Value

Type: String

### isSuccess()

Returns a Boolean that is set to true if the member tier operation was successful for this object, false otherwise.

#### Signature

public Boolean isSuccess()

#### Return Value

Type: Boolean

## Related Topics

- LoyaltyManagement (atlas.en-us.loyalty.meta/loyalty/apex_namespace_LoyaltyManagement.htm)
- MemberTierOutput Methods (atlas.en-us.loyalty.meta/loyalty/apex_class_LoyaltyManagement_MemberTierOutput.htm)
- getErrors() (atlas.en-us.loyalty.meta/loyalty/apex_class_LoyaltyManagement_MemberTierOutput.htm)
- getLoyaltyProgramMemberId() (atlas.en-us.loyalty.meta/loyalty/apex_class_LoyaltyManagement_MemberTierOutput.htm)
- getMemberTier() (atlas.en-us.loyalty.meta/loyalty/apex_class_LoyaltyManagement_MemberTierOutput.htm)
- getProgramName() (atlas.en-us.loyalty.meta/loyalty/apex_class_LoyaltyManagement_MemberTierOutput.htm)
- getSequenceNumber() (atlas.en-us.loyalty.meta/loyalty/apex_class_LoyaltyManagement_MemberTierOutput.htm)
- getTierGroupName() (atlas.en-us.loyalty.meta/loyalty/apex_class_LoyaltyManagement_MemberTierOutput.htm)
- isSuccess() (atlas.en-us.loyalty.meta/loyalty/apex_class_LoyaltyManagement_MemberTierOutput.htm)
- LoyaltyManagement.LoyaltyActionError (atlas.en-us.loyalty.meta/loyalty/apex_class_LoyaltyManagement_LoyaltyActionError.htm)
