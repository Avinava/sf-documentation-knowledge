---
title: "Automotive Cloud Fields on ApplicationFormProductProposal"
domain: automotive-cloud
topic: automotive-cloud-fields-on-applicationformproductproposal
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:00.951Z
estimatedTokens: 279
keywords: [Automotive, Cloud, ApplicationFormProductProposal, Standard, extend, represent, terms, attached, scheme, sanction, loan, lease]
---

# Automotive Cloud Fields on ApplicationFormProductProposal

> Standard fields extend the ApplicationFormProductProposal object for use in
         Automotive Cloud to represent the terms attached to a scheme to sanction an automotive loan
         or lease.

# Automotive Cloud Fields on ApplicationFormProductProposal

Standard fields extend the ApplicationFormProductProposal object for use in Automotive Cloud to represent the terms attached to a scheme to sanction an automotive loan or lease.

## Fields

| Field | Details |
| --- | --- |
| IsManualReviewRequired | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether manual review is required for the application form product proposal (true) or not (false).The default value is false. |
| ProposalGenerationMethod | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionSpecifies the method in which the application form product proposal is generated, such as manual or automatic.Possible values are:AutomaticManual |

#### See Also

-   [*Object Reference for the Salesforce Platform*: ApplicationFormProductProposal](https://developer.salesforce.com/docs/atlas.en-us.260.0.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/sforce_api_objects_applicationformproductproposal.htm)
