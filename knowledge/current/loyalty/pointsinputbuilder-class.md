---
title: "PointsInputBuilder Class"
domain: loyalty
topic: pointsinputbuilder-class
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:50.677Z
estimatedTokens: 2235
namespace: LoyaltyManagement
keywords: [PointsInputBuilder, build, instance, LoyaltyManagement.PointsInput, setAdditionalNotes, additionalNotes, setCorrelationId, correlationId, setFlowId, flowId, setJournalId, journalId, setLoyaltyProgramMemberId, loyaltyProgramMemberId, setPoints]
---

# PointsInputBuilder Class

> Contains methods to build an instance of the LoyaltyManagement.PointsInput class.

**Namespace:** `LoyaltyManagement`

# PointsInputBuilder Class

Contains methods to build an instance of the LoyaltyManagement.PointsInput class.

## Namespace

[LoyaltyManagement](atlas.en-us.loyalty.meta/loyalty/apex_namespace_LoyaltyManagement.htm "The LoyaltyManagement namespace provides Apex classes and methods to run the Loyalty Management actions.")

-   **[PointsInputBuilder Methods](atlas.en-us.loyalty.meta/loyalty/apex_class_LoyaltyManagement_PointsInputBuilder.htm#apex_LoyaltyManagement_PointsInputBuilder_methods)**


## PointsInputBuilder Methods

The following are methods for PointsInputBuilder.

-   **[build()](atlas.en-us.loyalty.meta/loyalty/apex_class_LoyaltyManagement_PointsInputBuilder.htm#apex_LoyaltyManagement_PointsInputBuilder_build)**
    Returns an instance of the LoyaltyManagement.PointsInput object.
-   **[setAdditionalNotes(additionalNotes)](atlas.en-us.loyalty.meta/loyalty/apex_class_LoyaltyManagement_PointsInputBuilder.htm#apex_LoyaltyManagement_PointsInputBuilder_setAdditionalNotes)**
    Represents extra information about the transactions performed by the loyalty program member.
-   **[setCorrelationId(correlationId)](atlas.en-us.loyalty.meta/loyalty/apex_class_LoyaltyManagement_PointsInputBuilder.htm#apex_LoyaltyManagement_PointsInputBuilder_setCorrelationId)**
    Represents the ID of any Salesforce entity.
-   **[setFlowId(flowId)](atlas.en-us.loyalty.meta/loyalty/apex_class_LoyaltyManagement_PointsInputBuilder.htm#apex_LoyaltyManagement_PointsInputBuilder_setFlowId)**
    Represents the ID of the flow associated with the credit or debit points action.
-   **[setJournalId(journalId)](atlas.en-us.loyalty.meta/loyalty/apex_class_LoyaltyManagement_PointsInputBuilder.htm#apex_LoyaltyManagement_PointsInputBuilder_setJournalId)**
    Represents the ID of the transaction journal. This is a required field.
-   **[setLoyaltyProgramMemberId(loyaltyProgramMemberId)](atlas.en-us.loyalty.meta/loyalty/apex_class_LoyaltyManagement_PointsInputBuilder.htm#apex_LoyaltyManagement_PointsInputBuilder_setLoyaltyProgramMemberId)**
    Represents the ID of the loyalty program member to whom the points must be credited or debited. This is a required field.
-   **[setPoints(points)](atlas.en-us.loyalty.meta/loyalty/apex_class_LoyaltyManagement_PointsInputBuilder.htm#apex_LoyaltyManagement_PointsInputBuilder_setPoints)**
    Represents the points available with the loyalty program member. This is a required field.
-   **[setPointsExpirationDate(pointsExpirationDate)](atlas.en-us.loyalty.meta/loyalty/apex_class_LoyaltyManagement_PointsInputBuilder.htm#apex_LoyaltyManagement_PointsInputBuilder_setPointsExpirationDate)**
    Represents the date on which fixed-model non-qualifying points credited by the action expire.
-   **[setProgramCurrencyName(programCurrencyName)](atlas.en-us.loyalty.meta/loyalty/apex_class_LoyaltyManagement_PointsInputBuilder.htm#apex_LoyaltyManagement_PointsInputBuilder_setProgramCurrencyName)**
    Represents the name of the loyalty program currency.
-   **[setLoyaltyProgramCurrencySubtypeName(LoyaltyProgramCurrencySubtypeName)](atlas.en-us.loyalty.meta/loyalty/apex_class_LoyaltyManagement_PointsInputBuilder.htm#apex_LoyaltyManagement_PointsInputBuilder_setProgramCurrencySubtypeName)**
    This method sets specific LoyaltyProgramCurrencySubtype for the LoyaltyProgramCurrency.
-   **[setProgramName(programName)](atlas.en-us.loyalty.meta/loyalty/apex_class_LoyaltyManagement_PointsInputBuilder.htm#apex_LoyaltyManagement_PointsInputBuilder_setProgramName)**
    Represents the name of the loyalty program.

### build()

Returns an instance of the LoyaltyManagement.PointsInput object.

#### Signature

public LoyaltyManagement.PointsInput build()

#### Return Value

Type: [LoyaltyManagement.PointsInput](atlas.en-us.loyalty.meta/loyalty/apex_class_LoyaltyManagement_PointsInput.htm#apex_class_LoyaltyManagement_PointsInput "Use this class to credit loyalty points to a loyalty program member’s balance or debit loyalty points from a loyalty program member’s balance. This class receives the input parameter values for the Credit and Debit point actions.")

### setAdditionalNotes(additionalNotes)

Represents extra information about the transactions performed by the loyalty program member.

#### Signature

public LoyaltyManagement.PointsInputBuilder setAdditionalNotes(String additionalNotes)

#### Parameters

additionalNotes

Type: String

#### Return Value

Type: [LoyaltyManagement.PointsInputBuilder](#apex_class_LoyaltyManagement_PointsInputBuilder "Contains methods to build an instance of the LoyaltyManagement.PointsInput class.")

### setCorrelationId(correlationId)

Represents the ID of any Salesforce entity.

#### Signature

public LoyaltyManagement.PointsInputBuilder setCorrelationId(String correlationId)

#### Parameters

correlationId

Type: String

#### Return Value

Type: [LoyaltyManagement.PointsInputBuilder](#apex_class_LoyaltyManagement_PointsInputBuilder "Contains methods to build an instance of the LoyaltyManagement.PointsInput class.")

### setFlowId(flowId)

Represents the ID of the flow associated with the credit or debit points action.

#### Signature

public LoyaltyManagement.PointsInputBuilder setFlowId(String flowId)

#### Parameters

flowId

Type: String

#### Return Value

Type: [LoyaltyManagement.PointsInputBuilder](#apex_class_LoyaltyManagement_PointsInputBuilder "Contains methods to build an instance of the LoyaltyManagement.PointsInput class.")

### setJournalId(journalId)

Represents the ID of the transaction journal. This is a required field.

#### Signature

public LoyaltyManagement.PointsInputBuilder setJournalId(String journalId)

#### Parameters

journalId

Type: String

#### Return Value

Type: [LoyaltyManagement.PointsInputBuilder](#apex_class_LoyaltyManagement_PointsInputBuilder "Contains methods to build an instance of the LoyaltyManagement.PointsInput class.")

### setLoyaltyProgramMemberId(loyaltyProgramMemberId)

Represents the ID of the loyalty program member to whom the points must be credited or debited. This is a required field.

#### Signature

public LoyaltyManagement.PointsInputBuilder setLoyaltyProgramMemberId(String loyaltyProgramMemberId)

#### Parameters

loyaltyProgramMemberId

Type: String

#### Return Value

Type: [LoyaltyManagement.PointsInputBuilder](#apex_class_LoyaltyManagement_PointsInputBuilder "Contains methods to build an instance of the LoyaltyManagement.PointsInput class.")

### setPoints(points)

Represents the points available with the loyalty program member. This is a required field.

#### Signature

public LoyaltyManagement.PointsInputBuilder setPoints(Double points)

#### Parameters

points

Type: Double

#### Return Value

Type: [LoyaltyManagement.PointsInputBuilder](#apex_class_LoyaltyManagement_PointsInputBuilder "Contains methods to build an instance of the LoyaltyManagement.PointsInput class.")

### setPointsExpirationDate(pointsExpirationDate)

Represents the date on which fixed-model non-qualifying points credited by the action expire.

#### Signature

public LoyaltyManagement.PointsInputBuilder setPointsExpirationDate(String pointsExpirationDate)

#### Parameters

pointsExpirationDate

Type: String

The supported date format is YYYY-MM-DD. This input is available in API version 55.0 and later.

#### Return Value

Type: [LoyaltyManagement.PointsInputBuilder](#apex_class_LoyaltyManagement_PointsInputBuilder "Contains methods to build an instance of the LoyaltyManagement.PointsInput class.")

### setProgramCurrencyName(programCurrencyName)

Represents the name of the loyalty program currency.

#### Signature

public LoyaltyManagement.PointsInputBuilder setProgramCurrencyName(String programCurrencyName)

#### Parameters

programCurrencyName

Type: String

#### Return Value

Type: [LoyaltyManagement.PointsInputBuilder](#apex_class_LoyaltyManagement_PointsInputBuilder "Contains methods to build an instance of the LoyaltyManagement.PointsInput class.")

### setLoyaltyProgramCurrencySubtypeName(LoyaltyProgramCurrencySubtypeName)

This method sets specific LoyaltyProgramCurrencySubtype for the LoyaltyProgramCurrency.

#### Signature

public LoyaltyManagement.PointsInputBuilder setLoyaltyProgramCurrencySubtypeName(String loyaltyProgramCurrencySubtypeName)

#### Parameters

loyaltyProgramCurrencySubtypeName

Type: String

#### Return Value

Type: [LoyaltyManagement.PointsInputBuilder](#apex_class_LoyaltyManagement_PointsInputBuilder "Contains methods to build an instance of the LoyaltyManagement.PointsInput class.")

### setProgramName(programName)

Represents the name of the loyalty program.

#### Signature

public LoyaltyManagement.PointsInputBuilder setProgramName(String programName)

#### Parameters

programName

Type: String

#### Return Value

Type: [LoyaltyManagement.PointsInputBuilder](#apex_class_LoyaltyManagement_PointsInputBuilder "Contains methods to build an instance of the LoyaltyManagement.PointsInput class.")

## Related Topics

- LoyaltyManagement (atlas.en-us.loyalty.meta/loyalty/apex_namespace_LoyaltyManagement.htm)
- PointsInputBuilder Methods (atlas.en-us.loyalty.meta/loyalty/apex_class_LoyaltyManagement_PointsInputBuilder.htm)
- build() (atlas.en-us.loyalty.meta/loyalty/apex_class_LoyaltyManagement_PointsInputBuilder.htm)
- setAdditionalNotes(additionalNotes) (atlas.en-us.loyalty.meta/loyalty/apex_class_LoyaltyManagement_PointsInputBuilder.htm)
- setCorrelationId(correlationId) (atlas.en-us.loyalty.meta/loyalty/apex_class_LoyaltyManagement_PointsInputBuilder.htm)
- setFlowId(flowId) (atlas.en-us.loyalty.meta/loyalty/apex_class_LoyaltyManagement_PointsInputBuilder.htm)
- setJournalId(journalId) (atlas.en-us.loyalty.meta/loyalty/apex_class_LoyaltyManagement_PointsInputBuilder.htm)
- setLoyaltyProgramMemberId(loyaltyProgramMemberId) (atlas.en-us.loyalty.meta/loyalty/apex_class_LoyaltyManagement_PointsInputBuilder.htm)
- setPoints(points) (atlas.en-us.loyalty.meta/loyalty/apex_class_LoyaltyManagement_PointsInputBuilder.htm)
- setPointsExpirationDate(pointsExpirationDate) (atlas.en-us.loyalty.meta/loyalty/apex_class_LoyaltyManagement_PointsInputBuilder.htm)
