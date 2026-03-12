---
title: "LoyaltyActionError Class"
domain: loyalty
topic: loyaltyactionerror-class
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:50.563Z
estimatedTokens: 533
namespace: LoyaltyManagement
keywords: [LoyaltyActionError, errors, execution, Loyalty, Management, action, code, message, getCode, getMessage]
---

# LoyaltyActionError Class

> A class that contains the errors related to the execution of a Loyalty
      Management action.

**Namespace:** `LoyaltyManagement`

# LoyaltyActionError Class

A class that contains the errors related to the execution of a Loyalty Management action.

## Namespace

[LoyaltyManagement](atlas.en-us.loyalty.meta/loyalty/apex_namespace_LoyaltyManagement.htm "The LoyaltyManagement namespace provides Apex classes and methods to run the Loyalty Management actions.")

## Example

```

```

-   **[LoyaltyActionError Constructors](atlas.en-us.loyalty.meta/loyalty/apex_class_LoyaltyManagement_LoyaltyActionError.htm#apex_LoyaltyManagement_LoyaltyActionError_constructors)**

-   **[LoyaltyActionError Methods](atlas.en-us.loyalty.meta/loyalty/apex_class_LoyaltyManagement_LoyaltyActionError.htm#apex_LoyaltyManagement_LoyaltyActionError_methods)**


## LoyaltyActionError Constructors

The following are constructors for LoyaltyActionError.

-   **[LoyaltyActionError(code, message)](atlas.en-us.loyalty.meta/loyalty/apex_class_LoyaltyManagement_LoyaltyActionError.htm#apex_LoyaltyManagement_LoyaltyActionError_ctor)**
    Creates an instance of the LoyaltyManagement.LoyaltyActionError class.

### LoyaltyActionError(code, message)

Creates an instance of the LoyaltyManagement.LoyaltyActionError class.

#### Signature

public LoyaltyActionError(String code, String message)

#### Parameters

code

Type: String

The error code.

message

Type: String

The error message.

## LoyaltyActionError Methods

The following are methods for LoyaltyActionError.

-   **[getCode()](atlas.en-us.loyalty.meta/loyalty/apex_class_LoyaltyManagement_LoyaltyActionError.htm#apex_LoyaltyManagement_LoyaltyActionError_getCode)**
    Returns a String that contains an error code.
-   **[getMessage()](atlas.en-us.loyalty.meta/loyalty/apex_class_LoyaltyManagement_LoyaltyActionError.htm#apex_LoyaltyManagement_LoyaltyActionError_getMessage)**
    Returns a String that contains an error description.

### getCode()

Returns a String that contains an error code.

#### Signature

public String getCode()

#### Return Value

Type: String

### getMessage()

Returns a String that contains an error description.

#### Signature

public String getMessage()

#### Return Value

Type: String

## Code Examples

```apex
public void creditPointsTestError(){
   List<LoyaltyManagement.PointsInput> creditPointsList = new List<LoyaltyManagement.PointsInput>();
   creditPointsList.add(new LoyaltyManagement.PointsInputBuilder()
      .setLoyaltyProgramMemberId('0lMRM0000002BD12AM')
      .setProgramName('LP01')
      .setProgramCurrencyName('Miles')
      .setPoints(1200)
      .setJournalId('0lVT10000008CnlMAE')
      .build());
   List<LoyaltyManagement.CreditPointsOutput> creditPointActionResults = LoyaltyManagement.LoyaltyResources.creditPoints(creditPointsList);
   System.debug('Is Succcess:'+ creditPointActionResults.get(0).isSuccess());
   System.debug('Errors:'+ creditPointActionResults.get(0).getErrors());
}
```

## Related Topics

- LoyaltyManagement (atlas.en-us.loyalty.meta/loyalty/apex_namespace_LoyaltyManagement.htm)
- LoyaltyActionError Constructors (atlas.en-us.loyalty.meta/loyalty/apex_class_LoyaltyManagement_LoyaltyActionError.htm)
- LoyaltyActionError Methods (atlas.en-us.loyalty.meta/loyalty/apex_class_LoyaltyManagement_LoyaltyActionError.htm)
- LoyaltyActionError(code, message) (atlas.en-us.loyalty.meta/loyalty/apex_class_LoyaltyManagement_LoyaltyActionError.htm)
- getCode() (atlas.en-us.loyalty.meta/loyalty/apex_class_LoyaltyManagement_LoyaltyActionError.htm)
- getMessage() (atlas.en-us.loyalty.meta/loyalty/apex_class_LoyaltyManagement_LoyaltyActionError.htm)
