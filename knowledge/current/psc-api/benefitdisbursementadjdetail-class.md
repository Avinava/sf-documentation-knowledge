---
title: "BenefitDisbursementAdjDetail Class"
domain: psc-api
topic: benefitdisbursementadjdetail-class
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:29.559Z
estimatedTokens: 608
namespace: PublicSectrSltn
keywords: [BenefitDisbursementAdjDetail, benefit, disbursement, adjustment, eligible, assignment, adjustmentAmount, adjustmentReason, baaId]
---

# BenefitDisbursementAdjDetail Class

> This class contains the benefit disbursement adjustment details for
      the eligible benefit assignment.

**Namespace:** `PublicSectrSltn`

# BenefitDisbursementAdjDetail Class

This class contains the benefit disbursement adjustment details for the eligible benefit assignment.

## Namespace

[PublicSectrSltn](atlas.en-us.psc_api.meta/psc_api/apex_namespace_PublicSectrSltn.htm "The PublicSectrSltn namespace provides classes for Public Sector Solutions.")

-   **[BenefitDisbursementAdjDetail Properties](atlas.en-us.psc_api.meta/psc_api/apex_class_publicsectrsltn_BenefitDisbursementAdjDetail.htm#apex_publicsectrsltn_BenefitDisbursementAdjDetail_properties)**


## BenefitDisbursementAdjDetail Properties

BenefitDisbursementAdjDetail has these properties.

-   **[adjustmentAmount](atlas.en-us.psc_api.meta/psc_api/apex_class_publicsectrsltn_BenefitDisbursementAdjDetail.htm#apex_publicsectrsltn_BenefitDisbursementAdjDetail_adjustmentAmount)**
    The adjustment amount of the benefit disbursement adjustment.
-   **[adjustmentReason](atlas.en-us.psc_api.meta/psc_api/apex_class_publicsectrsltn_BenefitDisbursementAdjDetail.htm#apex_publicsectrsltn_BenefitDisbursementAdjDetail_adjustmentReason)**
    The reason for the benefit disbursement adjustment.
-   **[baaId](atlas.en-us.psc_api.meta/psc_api/apex_class_publicsectrsltn_BenefitDisbursementAdjDetail.htm#apex_publicsectrsltn_BenefitDisbursementAdjDetail_baaId)**
    The ID of the benefit assignment adjustment record that the record is being created for or previewed against.
-   **[id](atlas.en-us.psc_api.meta/psc_api/apex_class_publicsectrsltn_BenefitDisbursementAdjDetail.htm#apex_publicsectrsltn_BenefitDisbursementAdjDetail_id)**
    The ID of the benefit disbursement adjustment record that is created.

### adjustmentAmount

The adjustment amount of the benefit disbursement adjustment.

#### Signature

public Double adjustmentAmount {get; set;}

#### Property Value

Type: Double

### adjustmentReason

The reason for the benefit disbursement adjustment.

#### Signature

public String adjustmentReason {get; set;}

#### Property Value

Type: String

### baaId

The ID of the benefit assignment adjustment record that the record is being created for or previewed against.

#### Signature

public String baaId {get; set;}

#### Property Value

Type: String

### id

The ID of the benefit disbursement adjustment record that is created.

If the isPreviewMode parameter is set to true, the value of this field is null.

#### Signature

public String id {get; set;}

#### Property Value

Type: String

## Related Topics

- PublicSectrSltn (atlas.en-us.psc_api.meta/psc_api/apex_namespace_PublicSectrSltn.htm)
- BenefitDisbursementAdjDetail Properties (atlas.en-us.psc_api.meta/psc_api/apex_class_publicsectrsltn_BenefitDisbursementAdjDetail.htm)
- adjustmentAmount (atlas.en-us.psc_api.meta/psc_api/apex_class_publicsectrsltn_BenefitDisbursementAdjDetail.htm)
- adjustmentReason (atlas.en-us.psc_api.meta/psc_api/apex_class_publicsectrsltn_BenefitDisbursementAdjDetail.htm)
- baaId (atlas.en-us.psc_api.meta/psc_api/apex_class_publicsectrsltn_BenefitDisbursementAdjDetail.htm)
