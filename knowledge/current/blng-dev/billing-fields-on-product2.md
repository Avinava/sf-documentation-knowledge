---
title: "Billing
      Fields on Product2"
domain: blng-dev
topic: billing-fields-on-product2
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:09.006Z
estimatedTokens: 350
keywords: [Billing, Product2, Standard, custom, extend, represent, products]
---

# Billing
      Fields on Product2

> Standard and custom fields extend the standard Product2 object for
         use in Billing to represent information about products.

# Billing Fields on Product2

Standard and custom fields extend the standard Product2 object for use in Billing to represent information about products.

## Fields

| Field | Details |
| --- | --- |
| blng__BillingRule__c | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThis rule is used to invoice usage summaries related to the product.This field is a relationship field.Relationship Nameblng__BillingRule__rRelationship TypeLookupRefers Toblng__BillingRule__c |
| blng__RevenueRecognitionRule__c | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThis rule is used to recognize the revenue of usage summaries based on the summary's related revenue recognition rule.This field is a relationship field.Relationship Nameblng__RevenueRecognitionRule__rRelationship TypeLookupRefers Toblng__RevenueRecognitionRule__c |
| blng__TaxRule__c | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThis rule is used to tax usage summary invoice lines based on the summary's related tax rule.This field is a relationship field.Relationship Nameblng__TaxRule__rRelationship TypeLookupRefers Toblng__TaxRule__c |

#### See Also

-   [*Object Reference for the Salesforce Platform*: Product2](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_product2.htm)
