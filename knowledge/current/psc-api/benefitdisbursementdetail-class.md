---
title: "BenefitDisbursementDetail Class"
domain: psc-api
topic: benefitdisbursementdetail-class
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:29.568Z
estimatedTokens: 1351
namespace: PublicSectrSltn
keywords: [BenefitDisbursementDetail, benefit, disbursement, eligible, assignment, adjustmentAmount, approvalStatus, benefitDisbursementAdjs, category, endDate, entitlementAmount, payoutAmount, recipientId, startDate]
---

# BenefitDisbursementDetail Class

> This class contains the benefit disbursement details for an eligible
      benefit assignment.

**Namespace:** `PublicSectrSltn`

# BenefitDisbursementDetail Class

This class contains the benefit disbursement details for an eligible benefit assignment.

## Namespace

[PublicSectrSltn](atlas.en-us.psc_api.meta/psc_api/apex_namespace_PublicSectrSltn.htm "The PublicSectrSltn namespace provides classes for Public Sector Solutions.")

-   **[BenefitDisbursementDetail Properties](atlas.en-us.psc_api.meta/psc_api/apex_class_publicsectrsltn_BenefitDisbursementDetail.htm#apex_publicsectrsltn_BenefitDisbursementDetail_properties)**


## BenefitDisbursementDetail Properties

BenefitDisbursementDetail has these properties.

-   **[adjustmentAmount](atlas.en-us.psc_api.meta/psc_api/apex_class_publicsectrsltn_BenefitDisbursementDetail.htm#apex_publicsectrsltn_BenefitDisbursementDetail_adjustmentAmount)**
    The adjustment amount of the benefit disbursement, which is the total of all the adjustment amounts for the benefit disbursement adjustment records.
-   **[approvalStatus](atlas.en-us.psc_api.meta/psc_api/apex_class_publicsectrsltn_BenefitDisbursementDetail.htm#apex_publicsectrsltn_BenefitDisbursementDetail_approvalStatus)**
    The approval status of the benefit disbursement that is created or previewed.
-   **[benefitDisbursementAdjs](atlas.en-us.psc_api.meta/psc_api/apex_class_publicsectrsltn_BenefitDisbursementDetail.htm#apex_publicsectrsltn_BenefitDisbursementDetail_benefitDisbursementAdjs)**
    Lists the benefit disbursement adjustment details.
-   **[category](atlas.en-us.psc_api.meta/psc_api/apex_class_publicsectrsltn_BenefitDisbursementDetail.htm#apex_publicsectrsltn_BenefitDisbursementDetail_category)**
    The category of the benefit assignment.
-   **[endDate](atlas.en-us.psc_api.meta/psc_api/apex_class_publicsectrsltn_BenefitDisbursementDetail.htm#apex_publicsectrsltn_BenefitDisbursementDetail_endDate)**
    The end date of the benefit disbursement.
-   **[entitlementAmount](atlas.en-us.psc_api.meta/psc_api/apex_class_publicsectrsltn_BenefitDisbursementDetail.htm#apex_publicsectrsltn_BenefitDisbursementDetail_entitlementAmount)**
    The entitlement amount of the benefit disbursement.
-   **[id](atlas.en-us.psc_api.meta/psc_api/apex_class_publicsectrsltn_BenefitDisbursementDetail.htm#apex_publicsectrsltn_BenefitDisbursementDetail_id)**
    The ID of the benefit disbursement record that is created.
-   **[payoutAmount](atlas.en-us.psc_api.meta/psc_api/apex_class_publicsectrsltn_BenefitDisbursementDetail.htm#apex_publicsectrsltn_BenefitDisbursementDetail_payoutAmount)**
    The payout amount of the benefit disbursement, which is the total of the entitlement and adjustment amounts.
-   **[recipientId](atlas.en-us.psc_api.meta/psc_api/apex_class_publicsectrsltn_BenefitDisbursementDetail.htm#apex_publicsectrsltn_BenefitDisbursementDetail_recipientId)**
    The ID of the recipient of the benefit disbursement.
-   **[startDate](atlas.en-us.psc_api.meta/psc_api/apex_class_publicsectrsltn_BenefitDisbursementDetail.htm#apex_publicsectrsltn_BenefitDisbursementDetail_startDate)**
    The start date of the benefit disbursement.

### adjustmentAmount

The adjustment amount of the benefit disbursement, which is the total of all the adjustment amounts for the benefit disbursement adjustment records.

#### Signature

public Double adjustmentAmount {get; set;}

#### Property Value

Type: Double

### approvalStatus

The approval status of the benefit disbursement that is created or previewed.

The default values are:

-   Approved
-   In Review
-   Not Applicable
-   Pending
-   Rejected

Salesforce administrators can define these values.

#### Signature

public String approvalStatus {get; set;}

#### Property Value

Type: String

### benefitDisbursementAdjs

Lists the benefit disbursement adjustment details.

#### Signature

public List<publicsectrsltn.BenefitDisbursementAdjDetail> benefitDisbursementAdjs {get; set;}

#### Property Value

Type: List<[publicsectrsltn.BenefitDisbursementAdjDetail](atlas.en-us.psc_api.meta/psc_api/apex_class_publicsectrsltn_BenefitDisbursementAdjDetail.htm#apex_class_publicsectrsltn_BenefitDisbursementAdjDetail "This class contains the benefit disbursement adjustment details for the eligible benefit assignment.")\>

### category

The category of the benefit assignment.

#### Signature

public String category {get; set;}

#### Property Value

Type: String

### endDate

The end date of the benefit disbursement.

#### Signature

public Datetime endDate {get; set;}

#### Property Value

Type: Datetime

### entitlementAmount

The entitlement amount of the benefit disbursement.

#### Signature

public Double entitlementAmount {get; set;}

#### Property Value

Type: Double

### id

The ID of the benefit disbursement record that is created.

If the isPreviewMode parameter is set to true, the value of this field is null.

#### Signature

public String id {get; set;}

#### Property Value

Type: String

### payoutAmount

The payout amount of the benefit disbursement, which is the total of the entitlement and adjustment amounts.

#### Signature

public Double payoutAmount {get; set;}

#### Property Value

Type: Double

### recipientId

The ID of the recipient of the benefit disbursement.

#### Signature

public String recipientId {get; set;}

#### Property Value

Type: String

### startDate

The start date of the benefit disbursement.

#### Signature

public Datetime startDate {get; set;}

#### Property Value

Type: Datetime

## Related Topics

- PublicSectrSltn (atlas.en-us.psc_api.meta/psc_api/apex_namespace_PublicSectrSltn.htm)
- BenefitDisbursementDetail Properties (atlas.en-us.psc_api.meta/psc_api/apex_class_publicsectrsltn_BenefitDisbursementDetail.htm)
- adjustmentAmount (atlas.en-us.psc_api.meta/psc_api/apex_class_publicsectrsltn_BenefitDisbursementDetail.htm)
- approvalStatus (atlas.en-us.psc_api.meta/psc_api/apex_class_publicsectrsltn_BenefitDisbursementDetail.htm)
- benefitDisbursementAdjs (atlas.en-us.psc_api.meta/psc_api/apex_class_publicsectrsltn_BenefitDisbursementDetail.htm)
- category (atlas.en-us.psc_api.meta/psc_api/apex_class_publicsectrsltn_BenefitDisbursementDetail.htm)
- endDate (atlas.en-us.psc_api.meta/psc_api/apex_class_publicsectrsltn_BenefitDisbursementDetail.htm)
- entitlementAmount (atlas.en-us.psc_api.meta/psc_api/apex_class_publicsectrsltn_BenefitDisbursementDetail.htm)
- payoutAmount (atlas.en-us.psc_api.meta/psc_api/apex_class_publicsectrsltn_BenefitDisbursementDetail.htm)
- recipientId (atlas.en-us.psc_api.meta/psc_api/apex_class_publicsectrsltn_BenefitDisbursementDetail.htm)
