---
title: "IssueVoucherOutput Class"
domain: loyalty
topic: issuevoucheroutput-class
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:50.558Z
estimatedTokens: 551
namespace: LoyaltyManagement
keywords: [IssueVoucherOutput, voucher, issued, loyalty, program, member, getErrors, getVoucherId, isSuccess]
---

# IssueVoucherOutput Class

> Represents the voucher ID issued to a loyalty program
    member.

**Namespace:** `LoyaltyManagement`

# IssueVoucherOutput Class

Represents the voucher ID issued to a loyalty program member.

## Namespace

[LoyaltyManagement](atlas.en-us.loyalty.meta/loyalty/apex_namespace_LoyaltyManagement.htm "The LoyaltyManagement namespace provides Apex classes and methods to run the Loyalty Management actions.")

-   **[IssueVoucherOutput Methods](atlas.en-us.loyalty.meta/loyalty/apex_class_LoyaltyManagement_IssueVoucherOutput.htm#apex_LoyaltyManagement_IssueVoucherOutput_methods)**


## IssueVoucherOutput Methods

The following are methods for IssueVoucherOutput.

-   **[getErrors()](atlas.en-us.loyalty.meta/loyalty/apex_class_LoyaltyManagement_IssueVoucherOutput.htm#apex_LoyaltyManagement_IssueVoucherOutput_getErrors)**
    If an error occurred, returns a list providing the error code and description.
-   **[getVoucherId()](atlas.en-us.loyalty.meta/loyalty/apex_class_LoyaltyManagement_IssueVoucherOutput.htm#apex_LoyaltyManagement_IssueVoucherOutput_getVoucherId)**
    Returns the ID of the voucher that’s generated after the request is successful.
-   **[isSuccess()](atlas.en-us.loyalty.meta/loyalty/apex_class_LoyaltyManagement_IssueVoucherOutput.htm#apex_LoyaltyManagement_IssueVoucherOutput_isSuccess)**
    Returns a Boolean that is set to true if the issue voucher operation was successful for this object, false otherwise.

### getErrors()

If an error occurred, returns a list providing the error code and description.

#### Signature

public List<LoyaltyManagement.LoyaltyActionError> getErrors()

#### Return Value

Type: List<[LoyaltyManagement.LoyaltyActionError](atlas.en-us.loyalty.meta/loyalty/apex_class_LoyaltyManagement_LoyaltyActionError.htm#apex_class_LoyaltyManagement_LoyaltyActionError "A class that contains the errors related to the execution of a Loyalty Management action.")\>

### getVoucherId()

Returns the ID of the voucher that’s generated after the request is successful.

#### Signature

public String getVoucherId()

#### Return Value

Type: String

### isSuccess()

Returns a Boolean that is set to true if the issue voucher operation was successful for this object, false otherwise.

#### Signature

public Boolean isSuccess()

#### Return Value

Type: Boolean

## Related Topics

- LoyaltyManagement (atlas.en-us.loyalty.meta/loyalty/apex_namespace_LoyaltyManagement.htm)
- IssueVoucherOutput Methods (atlas.en-us.loyalty.meta/loyalty/apex_class_LoyaltyManagement_IssueVoucherOutput.htm)
- getErrors() (atlas.en-us.loyalty.meta/loyalty/apex_class_LoyaltyManagement_IssueVoucherOutput.htm)
- getVoucherId() (atlas.en-us.loyalty.meta/loyalty/apex_class_LoyaltyManagement_IssueVoucherOutput.htm)
- isSuccess() (atlas.en-us.loyalty.meta/loyalty/apex_class_LoyaltyManagement_IssueVoucherOutput.htm)
- LoyaltyManagement.LoyaltyActionError (atlas.en-us.loyalty.meta/loyalty/apex_class_LoyaltyManagement_LoyaltyActionError.htm)
