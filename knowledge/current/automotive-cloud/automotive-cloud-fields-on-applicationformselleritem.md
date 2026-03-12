---
title: "Automotive Cloud Fields on ApplicationFormSellerItem"
domain: automotive-cloud
topic: automotive-cloud-fields-on-applicationformselleritem
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:00.954Z
estimatedTokens: 352
keywords: [Automotive, Cloud, ApplicationFormSellerItem, Standard, extend, represent, junction, application, form, seller, product]
---

# Automotive Cloud Fields on ApplicationFormSellerItem

> Standard fields extend the ApplicationFormSellerItem object for use in
         Automotive Cloud to represent a junction between an application form and an automotive
         seller product.

# Automotive Cloud Fields on ApplicationFormSellerItem

Standard fields extend the ApplicationFormSellerItem object for use in Automotive Cloud to represent a junction between an application form and an automotive seller product.

## Fields

| Field | Details |
| --- | --- |
| AddlProductTermInMonths | TypeintPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe duration of the term in months for a seller item that's marked as an additional product related to an application form. |
| IntendedUse | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionSpecifies the intention or purpose of use for a seller item related to an application form. |
| IsAdditionalProduct | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether a seller item related to an application product is an additional product (true), or not (false).The default value is false. |
| ItemCondition | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionSpecifies the condition of a seller item related to an application form. |

#### See Also

-   [*Object Reference for the Salesforce Platform*: ApplicationFormSellerItem](https://developer.salesforce.com/docs/atlas.en-us.260.0.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/sforce_api_objects_applicationformselleritem.htm)
