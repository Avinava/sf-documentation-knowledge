---
title: "CreditResponseOutputRepresentations Class"
domain: revenue-cloud
topic: creditresponseoutputrepresentations-class
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-04-05T00:23:12.633Z
estimatedTokens: 823
namespace: IssueCreditMemo
keywords: [CreditResponseOutputRepresentations, result, credit, memo, operation, success, failure, any, additional, message, Usage, additionalInformation]
---

# CreditResponseOutputRepresentations Class

> Represents the result of a credit memo operation. Indicates success or failure and any additional information or message.

**Namespace:** `IssueCreditMemo`

# CreditResponseOutputRepresentations Class

Represents the result of a credit memo operation. Indicates success or failure and any additional information or message.

## Namespace

[IssueCreditMemo](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_namespace_IssueCreditMemo.htm "Issue credit memos from disputed invoices. Use this namespace to create and apply credit memos against invoices or invoice lines based on dispute adjustments.")

## Usage

## Example

-   **[CreditResponseOutputRepresentations Constructors](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_class_IssueCreditMemo_CreditResponseOutputRepresentations.htm#apex_IssueCreditMemo_CreditResponseOutputRepresentations_constructors)**

-   **[CreditResponseOutputRepresentations Properties](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_class_IssueCreditMemo_CreditResponseOutputRepresentations.htm#apex_IssueCreditMemo_CreditResponseOutputRepresentations_properties)**


## CreditResponseOutputRepresentations Constructors

The CreditResponseOutputRepresentations class includes these constructors.

-   **[CreditResponseOutputRepresentations(success, additionalInformation)](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_class_IssueCreditMemo_CreditResponseOutputRepresentations.htm#apex_IssueCreditMemo_CreditResponseOutputRepresentations_ctor)**
    Creates a response with the given success flag and additional information.

### CreditResponseOutputRepresentations(success, additionalInformation)

Creates a response with the given success flag and additional information.

#### Signature

public CreditResponseOutputRepresentations(Boolean success, String additionalInformation)

#### Parameters

success

Type: Boolean

Indicates whether the credit memo is issued successfully (true) or not (false).

additionalInformation

Type: String

Additional information or message, such as error details or confirmation.

## CreditResponseOutputRepresentations Properties

The CreditResponseOutputRepresentations class includes these properties.

-   **[additionalInformation](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_class_IssueCreditMemo_CreditResponseOutputRepresentations.htm#apex_IssueCreditMemo_CreditResponseOutputRepresentations_additionalInformation)**
    Additional information or message, such as error details or confirmation.
-   **[success](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_class_IssueCreditMemo_CreditResponseOutputRepresentations.htm#apex_IssueCreditMemo_CreditResponseOutputRepresentations_success)**
    Indicates whether the credit memo is issued successfully (true) or not (false).

### additionalInformation

Additional information or message, such as error details or confirmation.

#### Signature

public String additionalInformation {get; set;}

#### Property Value

Type: String

### success

Indicates whether the credit memo is issued successfully (true) or not (false).

#### Signature

public Boolean success {get; set;}

#### Property Value

Type: Boolean

## Related Topics

- IssueCreditMemo (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_namespace_IssueCreditMemo.htm)
- CreditResponseOutputRepresentations Constructors (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_class_IssueCreditMemo_CreditResponseOutputRepresentations.htm)
- CreditResponseOutputRepresentations Properties (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_class_IssueCreditMemo_CreditResponseOutputRepresentations.htm)
- CreditResponseOutputRepresentations(success, additionalInformation) (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_class_IssueCreditMemo_CreditResponseOutputRepresentations.htm)
- additionalInformation (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_class_IssueCreditMemo_CreditResponseOutputRepresentations.htm)
- success (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_class_IssueCreditMemo_CreditResponseOutputRepresentations.htm)
