---
title: "Commerce: Promotion Mapping"
domain: data-cloud
topic: commerce-promotion-mapping
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:14.120Z
estimatedTokens: 351
keywords: [Commerce, Promotion, Mapping, data, stream, deployed, starter, bundle, automatically, maps, Cloud, model, objects, DMO, any]
---

# Commerce: Promotion Mapping

> After a data stream is deployed, the Commerce starter data bundle
         automatically maps data from Commerce Cloud to data model objects (DMO)s in Data Cloud. Promotion data is any type of marketing
         communication used to inform or persuade target audiences of the merits of a product,
         service, brand, or issue.

# Commerce: Promotion Mapping

After a data stream is deployed, the Commerce starter data bundle automatically maps data from Commerce Cloud to data model objects (DMO)s in Data Cloud. Promotion data is any type of marketing communication used to inform or persuade target audiences of the merits of a product, service, brand, or issue.

## DLO to DMO Mapping

These data mappings relate to the Promotion object included in the Salesforce Commerce connector and how that data connects to DMOs.

| DLO Field | DLO Field Data Type | DMO | DMO Field Name |
| --- | --- | --- | --- |
| Id | ID | Promotion | id |
| CurrencyIsoCode | picklist | Promotion | LoyaltyProgramCurrencyId |
| CurrencyId |
| DisplayName | string | Promotion | DisplayName |
| Objective | textarea | Promotion | ObjectiveText |
| Description | string | Promotion | Description |
| EndDateTime | dateTime | Promotion | EndDate |
| StartDateTime | dateTime | Promotion | StartDate |
| IsActive | boolean | Promotion | IsActive |
| IsAutomatic | boolean | Promotion | IsAutomatic |
| IsCommercePromotion | boolean | Promotion | IsCommercePromotion |
| Name | string | Promotion | Name |
| PriorityNumber | int | Promotion | EvaluationOrderRankNbr |
| QualifierCriteria | picklist | Promotion | DiscountExclusivityTypeId |
| CreatedDate | dateTime | Promotion | CreatedDate |
| LastModifiedDate | dateTime | Promotion | LastModifiedDate |
