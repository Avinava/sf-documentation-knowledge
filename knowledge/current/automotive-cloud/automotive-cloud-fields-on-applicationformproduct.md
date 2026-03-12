---
title: "Automotive Cloud Fields on ApplicationFormProduct"
domain: automotive-cloud
topic: automotive-cloud-fields-on-applicationformproduct
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:00.946Z
estimatedTokens: 426
keywords: [Automotive, Cloud, ApplicationFormProduct, Standard, extend, represent, relationship, application, form, product, deviation]
---

# Automotive Cloud Fields on ApplicationFormProduct

> Standard fields extend the ApplicationFormProduct object for use in
         Automotive Cloud to represent the relationship between an application form product and a
         deviation.

# Automotive Cloud Fields on ApplicationFormProduct

Standard fields extend the ApplicationFormProduct object for use in Automotive Cloud to represent the relationship between an application form product and a deviation.

## Fields

| Field | Details |
| --- | --- |
| DownPayment | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe downpayment amount an applicant wants to pay for the applicant form product. |
| PartnerVisibleStatus | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionSpecifies the status of the application for a product that is submitted by the applicant as visible to a partner, such as a broker or a dealer.Possible values are:ApprovedAwaiting SignatureContract GenerationContract in reviewLender ApprovedLender RejectedLoan BookedNeed More InfoRejectedSignature CompleteSubmitted for review |
| RequestedMonthlyPayment | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe monthly payment amount an applicant wants to pay for the applicant form product. |
| TotalBrandOwnedItemAmt | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe total value of brand-owned seller items requested for financing. |
| TotalVendorOwnedItemAmt | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe total value of vendor-owned seller items requested for financing. |

#### See Also

-   [*Object Reference for the Salesforce Platform*: ApplicationFormProduct](https://developer.salesforce.com/docs/atlas.en-us.260.0.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/sforce_api_objects_applicationformproduct.htm)
