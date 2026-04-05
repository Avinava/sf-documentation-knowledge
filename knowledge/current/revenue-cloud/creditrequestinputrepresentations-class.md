---
title: "CreditRequestInputRepresentations Class"
domain: revenue-cloud
topic: creditrequestinputrepresentations-class
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-04-05T00:23:12.623Z
estimatedTokens: 2149
namespace: IssueCreditMemo
keywords: [CreditRequestInputRepresentations, credit, invoice, dispute, identifiers, total, amount, category, line-level, issuing, memo, invoiceId, creditAmount, disputeId, creditLineRequestInputRepresentations]
---

# CreditRequestInputRepresentations Class

> Represents a credit request for an invoice. Contains invoice and dispute identifiers, total credit amount, category, and line-level credit details for issuing a credit memo.

**Namespace:** `IssueCreditMemo`

# CreditRequestInputRepresentations Class

Represents a credit request for an invoice. Contains invoice and dispute identifiers, total credit amount, category, and line-level credit details for issuing a credit memo.

## Namespace

[IssueCreditMemo](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_namespace_IssueCreditMemo.htm "Issue credit memos from disputed invoices. Use this namespace to create and apply credit memos against invoices or invoice lines based on dispute adjustments.")

-   **[CreditRequestInputRepresentations Constructors](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_class_IssueCreditMemo_CreditRequestInputRepresentations.htm#apex_IssueCreditMemo_CreditRequestInputRepresentations_constructors)**

-   **[CreditRequestInputRepresentations Properties](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_class_IssueCreditMemo_CreditRequestInputRepresentations.htm#apex_IssueCreditMemo_CreditRequestInputRepresentations_properties)**


## CreditRequestInputRepresentations Constructors

The CreditRequestInputRepresentations class includes these constructors.

-   **[CreditRequestInputRepresentations(invoiceId, creditAmount, description, disputeId, category, creditLineRequestInputRepresentations)](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_class_IssueCreditMemo_CreditRequestInputRepresentations.htm#apex_IssueCreditMemo_CreditRequestInputRepresentations_ctor)**
    Creates a credit request with the given invoice, amount, description, dispute, category, and line-level credit details.
-   **[CreditRequestInputRepresentations(invoiceId, creditAmount, description, creditLineRequestInputRepresentations)](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_class_IssueCreditMemo_CreditRequestInputRepresentations.htm#apex_IssueCreditMemo_CreditRequestInputRepresentations_ctor_2)**
    Creates a credit request with the given invoice, amount, description, and line-level credit details.
-   **[CreditRequestInputRepresentations()](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_class_IssueCreditMemo_CreditRequestInputRepresentations.htm#apex_IssueCreditMemo_CreditRequestInputRepresentations_ctor_3)**
    Creates an empty credit request.

### CreditRequestInputRepresentations(invoiceId, creditAmount, description, disputeId, category, creditLineRequestInputRepresentations)

Creates a credit request with the given invoice, amount, description, dispute, category, and line-level credit details.

#### Signature

public CreditRequestInputRepresentations(String invoiceId, Double creditAmount, String description, String disputeId, String category, List<IssueCreditMemo.CreditLineRequestInputRepresentations> creditLineRequestInputRepresentations)

#### Parameters

invoiceId

Type: String

ID of the invoice to credit.

creditAmount

Type: Double

Total credit amount to apply to the invoice.

description

Type: String

Optional description for the credit request.

disputeId

Type: String

ID of the billing dispute associated with this credit request.

category

Type: String

Category of the credit memo.

creditLineRequestInputRepresentations

Type: List<[IssueCreditMemo.CreditLineRequestInputRepresentations](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_class_IssueCreditMemo_CreditLineRequestInputRepresentations.htm#apex_class_IssueCreditMemo_CreditLineRequestInputRepresentations "Represents a single line-level credit request. Specifies the invoice line to credit, the amount to apply, and an optional description.")\>

List of line-level credit requests for this invoice.

### CreditRequestInputRepresentations(invoiceId, creditAmount, description, creditLineRequestInputRepresentations)

Creates a credit request with the given invoice, amount, description, and line-level credit details.

#### Signature

public CreditRequestInputRepresentations(String invoiceId, Double creditAmount, String description, List<IssueCreditMemo.CreditLineRequestInputRepresentations> creditLineRequestInputRepresentations)

#### Parameters

invoiceId

Type: String

ID of the invoice to credit.

creditAmount

Type: Double

Total credit amount to apply to the invoice.

description

Type: String

Optional description for the credit request.

creditLineRequestInputRepresentations

Type: List<[IssueCreditMemo.CreditLineRequestInputRepresentations](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_class_IssueCreditMemo_CreditLineRequestInputRepresentations.htm#apex_class_IssueCreditMemo_CreditLineRequestInputRepresentations "Represents a single line-level credit request. Specifies the invoice line to credit, the amount to apply, and an optional description.")\>

List of line-level credit requests for this invoice.

### CreditRequestInputRepresentations()

Creates an empty credit request.

#### Signature

public CreditRequestInputRepresentations()

## CreditRequestInputRepresentations Properties

The CreditRequestInputRepresentations class includes these properties.

-   **[category](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_class_IssueCreditMemo_CreditRequestInputRepresentations.htm#apex_IssueCreditMemo_CreditRequestInputRepresentations_category)**
    The credit memo category.
-   **[creditAmount](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_class_IssueCreditMemo_CreditRequestInputRepresentations.htm#apex_IssueCreditMemo_CreditRequestInputRepresentations_creditAmount)**
    The total credit amount to apply to the invoice.
-   **[creditLineRequestInputRepresentations](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_class_IssueCreditMemo_CreditRequestInputRepresentations.htm#apex_IssueCreditMemo_CreditRequestInputRepresentations_creditLineRequestInputRepresentations)**
    List of line-level credit requests for this invoice.
-   **[description](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_class_IssueCreditMemo_CreditRequestInputRepresentations.htm#apex_IssueCreditMemo_CreditRequestInputRepresentations_description)**
    Optional description for the credit request.
-   **[disputeId](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_class_IssueCreditMemo_CreditRequestInputRepresentations.htm#apex_IssueCreditMemo_CreditRequestInputRepresentations_disputeId)**
    The ID of the billing dispute associated with this credit request.
-   **[invoiceId](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_class_IssueCreditMemo_CreditRequestInputRepresentations.htm#apex_IssueCreditMemo_CreditRequestInputRepresentations_invoiceId)**
    The ID of the invoice to credit.

### category

The credit memo category.

#### Signature

public String category {get; set;}

#### Property Value

Type: String

### creditAmount

The total credit amount to apply to the invoice.

#### Signature

public Double creditAmount {get; set;}

#### Property Value

Type: Double

### creditLineRequestInputRepresentations

List of line-level credit requests for this invoice.

#### Signature

public List<IssueCreditMemo.CreditLineRequestInputRepresentations> creditLineRequestInputRepresentations {get; set;}

#### Property Value

Type: List<[IssueCreditMemo.CreditLineRequestInputRepresentations](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_class_IssueCreditMemo_CreditLineRequestInputRepresentations.htm#apex_class_IssueCreditMemo_CreditLineRequestInputRepresentations "Represents a single line-level credit request. Specifies the invoice line to credit, the amount to apply, and an optional description.")\>

### description

Optional description for the credit request.

#### Signature

public String description {get; set;}

#### Property Value

Type: String

### disputeId

The ID of the billing dispute associated with this credit request.

#### Signature

public String disputeId {get; set;}

#### Property Value

Type: String

### invoiceId

The ID of the invoice to credit.

#### Signature

public String invoiceId {get; set;}

#### Property Value

Type: String

## Related Topics

- IssueCreditMemo (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_namespace_IssueCreditMemo.htm)
- CreditRequestInputRepresentations Constructors (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_class_IssueCreditMemo_CreditRequestInputRepresentations.htm)
- CreditRequestInputRepresentations Properties (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_class_IssueCreditMemo_CreditRequestInputRepresentations.htm)
- CreditRequestInputRepresentations(invoiceId, creditAmount, description, disputeId, category, creditLineRequestInputRepresentations) (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_class_IssueCreditMemo_CreditRequestInputRepresentations.htm)
- CreditRequestInputRepresentations(invoiceId, creditAmount, description, creditLineRequestInputRepresentations) (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_class_IssueCreditMemo_CreditRequestInputRepresentations.htm)
- CreditRequestInputRepresentations() (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_class_IssueCreditMemo_CreditRequestInputRepresentations.htm)
- IssueCreditMemo.CreditLineRequestInputRepresentations (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_class_IssueCreditMemo_CreditLineRequestInputRepresentations.htm)
- category (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_class_IssueCreditMemo_CreditRequestInputRepresentations.htm)
- creditAmount (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_class_IssueCreditMemo_CreditRequestInputRepresentations.htm)
- creditLineRequestInputRepresentations (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_class_IssueCreditMemo_CreditRequestInputRepresentations.htm)
