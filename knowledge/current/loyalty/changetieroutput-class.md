---
title: "ChangeTierOutput Class"
domain: loyalty
topic: changetieroutput-class
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:50.511Z
estimatedTokens: 856
namespace: LoyaltyManagement
keywords: [ChangeTierOutput, changed, tier, loyalty, program, member, getErrors, getLoyaltyProgramMemberId, getMemberTier, getProgramName, getTierGroupName, isSuccess]
---

# ChangeTierOutput Class

> Represents the changed tier details for a loyalty program
    member.

**Namespace:** `LoyaltyManagement`

# ChangeTierOutput Class

Represents the changed tier details for a loyalty program member.

## Namespace

[LoyaltyManagement](atlas.en-us.loyalty.meta/loyalty/apex_namespace_LoyaltyManagement.htm "The LoyaltyManagement namespace provides Apex classes and methods to run the Loyalty Management actions.")

-   **[ChangeTierOutput Methods](atlas.en-us.loyalty.meta/loyalty/apex_class_LoyaltyManagement_ChangeTierOutput.htm#apex_LoyaltyManagement_ChangeTierOutput_methods)**


## ChangeTierOutput Methods

The following are methods for ChangeTierOutput.

-   **[getErrors()](atlas.en-us.loyalty.meta/loyalty/apex_class_LoyaltyManagement_ChangeTierOutput.htm#apex_LoyaltyManagement_ChangeTierOutput_getErrors)**
    If an error occurred, returns a list providing the error code and description.
-   **[getLoyaltyProgramMemberId()](atlas.en-us.loyalty.meta/loyalty/apex_class_LoyaltyManagement_ChangeTierOutput.htm#apex_LoyaltyManagement_ChangeTierOutput_getLoyaltyProgramMemberId)**
    Returns a String that contains the loyalty program member ID.
-   **[getMemberTier()](atlas.en-us.loyalty.meta/loyalty/apex_class_LoyaltyManagement_ChangeTierOutput.htm#apex_LoyaltyManagement_ChangeTierOutput_getMemberTier)**
    Returns a String that contains the tier associated with the loyalty program member.
-   **[getProgramName()](atlas.en-us.loyalty.meta/loyalty/apex_class_LoyaltyManagement_ChangeTierOutput.htm#apex_LoyaltyManagement_ChangeTierOutput_getProgramName)**
    Returns a String that contains the loyalty program name.
-   **[getTierGroupName()](atlas.en-us.loyalty.meta/loyalty/apex_class_LoyaltyManagement_ChangeTierOutput.htm#apex_LoyaltyManagement_ChangeTierOutput_getTierGroupName)**
    Returns a String that contains the loyalty tier group name.
-   **[isSuccess()](atlas.en-us.loyalty.meta/loyalty/apex_class_LoyaltyManagement_ChangeTierOutput.htm#apex_LoyaltyManagement_ChangeTierOutput_isSuccess)**
    Returns a Boolean that is set to true if the change tier operation was successful for this object, false otherwise.

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

Returns a String that contains the tier associated with the loyalty program member.

#### Signature

public String getMemberTier()

#### Return Value

Type: String

### getProgramName()

Returns a String that contains the loyalty program name.

#### Signature

public String getProgramName()

#### Return Value

Type: String

### getTierGroupName()

Returns a String that contains the loyalty tier group name.

#### Signature

public String getTierGroupName()

#### Return Value

Type: String

### isSuccess()

Returns a Boolean that is set to true if the change tier operation was successful for this object, false otherwise.

#### Signature

public Boolean isSuccess()

#### Return Value

Type: Boolean

## Related Topics

- LoyaltyManagement (atlas.en-us.loyalty.meta/loyalty/apex_namespace_LoyaltyManagement.htm)
- ChangeTierOutput Methods (atlas.en-us.loyalty.meta/loyalty/apex_class_LoyaltyManagement_ChangeTierOutput.htm)
- getErrors() (atlas.en-us.loyalty.meta/loyalty/apex_class_LoyaltyManagement_ChangeTierOutput.htm)
- getLoyaltyProgramMemberId() (atlas.en-us.loyalty.meta/loyalty/apex_class_LoyaltyManagement_ChangeTierOutput.htm)
- getMemberTier() (atlas.en-us.loyalty.meta/loyalty/apex_class_LoyaltyManagement_ChangeTierOutput.htm)
- getProgramName() (atlas.en-us.loyalty.meta/loyalty/apex_class_LoyaltyManagement_ChangeTierOutput.htm)
- getTierGroupName() (atlas.en-us.loyalty.meta/loyalty/apex_class_LoyaltyManagement_ChangeTierOutput.htm)
- isSuccess() (atlas.en-us.loyalty.meta/loyalty/apex_class_LoyaltyManagement_ChangeTierOutput.htm)
- LoyaltyManagement.LoyaltyActionError (atlas.en-us.loyalty.meta/loyalty/apex_class_LoyaltyManagement_LoyaltyActionError.htm)
