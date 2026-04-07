---
title: "CreditLineRequestInputRepresentations Class"
domain: revenue-cloud
topic: creditlinerequestinputrepresentations-class
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-04-07T18:35:40.333Z
estimatedTokens: 1072
namespace: IssueCreditMemo
keywords: [CreditLineRequestInputRepresentations, line-level, credit, invoice, line, amount, apply, invoiceLineId, creditLineAmount]
---

> Represents a single line-level credit request. Specifies the invoice line to credit, the amount to apply, and an optional description.

**Namespace:** `IssueCreditMemo`

# CreditLineRequestInputRepresentations Class

Represents a single line-level credit request. Specifies the invoice line to credit, the amount to apply, and an optional description.

## Namespace

[IssueCreditMemo](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_namespace_IssueCreditMemo.htm "Issue credit memos from disputed invoices. Use this namespace to create and apply credit memos against invoices or invoice lines based on dispute adjustments.")

-   **[CreditLineRequestInputRepresentations Constructors](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_class_IssueCreditMemo_CreditLineRequestInputRepresentations.htm#apex_IssueCreditMemo_CreditLineRequestInputRepresentations_constructors)**

-   **[CreditLineRequestInputRepresentations Properties](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_class_IssueCreditMemo_CreditLineRequestInputRepresentations.htm#apex_IssueCreditMemo_CreditLineRequestInputRepresentations_properties)**


## CreditLineRequestInputRepresentations Constructors

The CreditLineRequestInputRepresentations class includes these constructors.

-   **[CreditLineRequestInputRepresentations(invoiceLineId, creditLineAmount, description)](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_class_IssueCreditMemo_CreditLineRequestInputRepresentations.htm#apex_IssueCreditMemo_CreditLineRequestInputRepresentations_ctor)**
    Creates a credit line request for the specified invoice line, amount, and description.
-   **[CreditLineRequestInputRepresentations()](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_class_IssueCreditMemo_CreditLineRequestInputRepresentations.htm#apex_IssueCreditMemo_CreditLineRequestInputRepresentations_ctor_2)**
    Creates an empty credit line request.

### CreditLineRequestInputRepresentations(invoiceLineId, creditLineAmount, description)

Creates a credit line request for the specified invoice line, amount, and description.

#### Signature

public CreditLineRequestInputRepresentations(String invoiceLineId, Double creditLineAmount, String description)

#### Parameters

invoiceLineId

Type: String

The ID of the invoice line to which the credit applies.

creditLineAmount

Type: Double

The monetary amount to credit for this invoice line.

description

Type: String

Optional description or reason for the credit line.

### CreditLineRequestInputRepresentations()

Creates an empty credit line request.

#### Signature

public CreditLineRequestInputRepresentations()

## CreditLineRequestInputRepresentations Properties

The CreditLineRequestInputRepresentations class includes these properties.

-   **[creditLineAmount](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_class_IssueCreditMemo_CreditLineRequestInputRepresentations.htm#apex_IssueCreditMemo_CreditLineRequestInputRepresentations_creditLineAmount)**
    The monetary amount to credit for this invoice line.
-   **[description](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_class_IssueCreditMemo_CreditLineRequestInputRepresentations.htm#apex_IssueCreditMemo_CreditLineRequestInputRepresentations_description)**
    Optional description or reason for the credit line.
-   **[invoiceLineId](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_class_IssueCreditMemo_CreditLineRequestInputRepresentations.htm#apex_IssueCreditMemo_CreditLineRequestInputRepresentations_invoiceLineId)**
    The ID of the invoice line to which the credit applies.

### creditLineAmount

The monetary amount to credit for this invoice line.

#### Signature

public Double creditLineAmount {get; set;}

#### Property Value

Type: Double

### description

Optional description or reason for the credit line.

#### Signature

public String description {get; set;}

#### Property Value

Type: String

### invoiceLineId

The ID of the invoice line to which the credit applies.

#### Signature

public String invoiceLineId {get; set;}

#### Property Value

Type: String

## Related Topics

- IssueCreditMemo (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_namespace_IssueCreditMemo.htm)
- CreditLineRequestInputRepresentations Constructors (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_class_IssueCreditMemo_CreditLineRequestInputRepresentations.htm)
- CreditLineRequestInputRepresentations Properties (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_class_IssueCreditMemo_CreditLineRequestInputRepresentations.htm)
- CreditLineRequestInputRepresentations(invoiceLineId, creditLineAmount, description) (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_class_IssueCreditMemo_CreditLineRequestInputRepresentations.htm)
- CreditLineRequestInputRepresentations() (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_class_IssueCreditMemo_CreditLineRequestInputRepresentations.htm)
- creditLineAmount (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_class_IssueCreditMemo_CreditLineRequestInputRepresentations.htm)
- description (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_class_IssueCreditMemo_CreditLineRequestInputRepresentations.htm)
- invoiceLineId (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_class_IssueCreditMemo_CreditLineRequestInputRepresentations.htm)
