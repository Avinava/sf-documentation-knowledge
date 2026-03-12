---
title: "BenefitDisbursementIAOutput Class"
domain: psc-api
topic: benefitdisbursementiaoutput-class
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:29.572Z
estimatedTokens: 732
namespace: PublicSectrSltn
keywords: [BenefitDisbursementIAOutput, disbursement, eligible, benefit, assignment, created, previewed, Usage, benefitAssignmentId, benefitDisbursements, isPreviewMode]
---

# BenefitDisbursementIAOutput Class

> This class contains details about the disbursement for the eligible
      benefit assignment that is created or is to be previewed.

**Namespace:** `PublicSectrSltn`

# BenefitDisbursementIAOutput Class

This class contains details about the disbursement for the eligible benefit assignment that is created or is to be previewed.

## Namespace

[PublicSectrSltn](atlas.en-us.psc_api.meta/psc_api/apex_namespace_PublicSectrSltn.htm "The PublicSectrSltn namespace provides classes for Public Sector Solutions.")

## Usage

The CreateBenefitDisbursement action returns the BenefitDisbursementIAOutput class, an Apex output type that contains nested arrays . This output representation contains an array of the BenefitDisbursementDetail fields. An array of BenefitDisbursementAdjDetail is contained in BenefitDisbursementDetail.

-   **[BenefitDisbursementIAOutput Properties](atlas.en-us.psc_api.meta/psc_api/apex_class_publicsectrsltn_BenefitDisbursementIAOutput.htm#apex_publicsectrsltn_BenefitDisbursementIAOutput_properties)**


## BenefitDisbursementIAOutput Properties

BenefitDisbursementIAOutput has these properties.

-   **[benefitAssignmentId](atlas.en-us.psc_api.meta/psc_api/apex_class_publicsectrsltn_BenefitDisbursementIAOutput.htm#apex_publicsectrsltn_BenefitDisbursementIAOutput_benefitAssignmentId)**
    The ID of the eligible benefit assignment that is specified in the CreateBenefitDisbursement action.
-   **[benefitDisbursements](atlas.en-us.psc_api.meta/psc_api/apex_class_publicsectrsltn_BenefitDisbursementIAOutput.htm#apex_publicsectrsltn_BenefitDisbursementIAOutput_benefitDisbursements)**
    The details of the benefit disbursement for the specified benefit assignment.
-   **[isPreviewMode](atlas.en-us.psc_api.meta/psc_api/apex_class_publicsectrsltn_BenefitDisbursementIAOutput.htm#apex_publicsectrsltn_BenefitDisbursementIAOutput_isPreviewMode)**
    Indicates whether preview disbursement details are available (true) or whether disbursement records are created (false), as specified in the CreateBenefitDisbursement action.

### benefitAssignmentId

The ID of the eligible benefit assignment that is specified in the CreateBenefitDisbursement action.

#### Signature

public String benefitAssignmentId {get; set;}

#### Property Value

Type: String

### benefitDisbursements

The details of the benefit disbursement for the specified benefit assignment.

#### Signature

public List<publicsectrsltn.BenefitDisbursementDetail> benefitDisbursements {get; set;}

#### Property Value

Type: List<[publicsectrsltn.BenefitDisbursementDetail](atlas.en-us.psc_api.meta/psc_api/apex_class_publicsectrsltn_BenefitDisbursementDetail.htm#apex_class_publicsectrsltn_BenefitDisbursementDetail "This class contains the benefit disbursement details for an eligible benefit assignment.")\>

### isPreviewMode

Indicates whether preview disbursement details are available (true) or whether disbursement records are created (false), as specified in the CreateBenefitDisbursement action.

#### Signature

public Boolean isPreviewMode {get; set;}

#### Property Value

Type: Boolean

## Related Topics

- PublicSectrSltn (atlas.en-us.psc_api.meta/psc_api/apex_namespace_PublicSectrSltn.htm)
- BenefitDisbursementIAOutput Properties (atlas.en-us.psc_api.meta/psc_api/apex_class_publicsectrsltn_BenefitDisbursementIAOutput.htm)
- benefitAssignmentId (atlas.en-us.psc_api.meta/psc_api/apex_class_publicsectrsltn_BenefitDisbursementIAOutput.htm)
- benefitDisbursements (atlas.en-us.psc_api.meta/psc_api/apex_class_publicsectrsltn_BenefitDisbursementIAOutput.htm)
- isPreviewMode (atlas.en-us.psc_api.meta/psc_api/apex_class_publicsectrsltn_BenefitDisbursementIAOutput.htm)
- publicsectrsltn.BenefitDisbursementDetail (atlas.en-us.psc_api.meta/psc_api/apex_class_publicsectrsltn_BenefitDisbursementDetail.htm)
