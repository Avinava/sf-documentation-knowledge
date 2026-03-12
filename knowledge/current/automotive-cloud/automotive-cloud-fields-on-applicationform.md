---
title: "Automotive Cloud Fields on ApplicationForm"
domain: automotive-cloud
topic: automotive-cloud-fields-on-applicationform
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:00.942Z
estimatedTokens: 393
keywords: [Automotive, Cloud, ApplicationForm, Standard, extend, represent, high-level, application, that's, submitted, financial, product]
---

# Automotive Cloud Fields on ApplicationForm

> Standard fields extend the ApplicationForm object for use in Automotive Cloud
         to represent high-level information of an application that's submitted for an automotive
         financial product.

# Automotive Cloud Fields on ApplicationForm

Standard fields extend the ApplicationForm object for use in Automotive Cloud to represent high-level information of an application that's submitted for an automotive financial product.

## Fields

| Field | Details |
| --- | --- |
| IntakeChannelType | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionSpecifies the type of channel through which the application form is received by the system. |
| TierType | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionSpecifies the tier type of an application form, based on which the offer terms are evaluated.Possible values are:BronzeGoldPlatinumSilver |
| TotalDebtToIncomePercent | TypepercentPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe cumulative debt to income percentage for all applicants related to the application form. |
| TotalIncomeToExpenseRatio | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe cumulative expense to income ratio for all applicants related to the application form. |
| TotalLoanToValuePercent | TypepercentPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe cumulative loan to value percentage for all applicants related to the application form. |

#### See Also

-   [*Object Reference for the Salesforce Platform*: ApplicationForm](https://developer.salesforce.com/docs/atlas.en-us.260.0.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/sforce_api_objects_applicationform.htm)
