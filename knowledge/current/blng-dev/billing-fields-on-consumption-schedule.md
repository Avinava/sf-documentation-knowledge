---
title: "Billing Fields on Consumption Schedule"
domain: blng-dev
topic: billing-fields-on-consumption-schedule
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:08.953Z
estimatedTokens: 368
keywords: [Billing, Consumption, Schedule, Standard, custom, extend, represent, schedules]
---

# Billing Fields on Consumption Schedule

> Standard and custom fields extend the standard Consumption Schedule
         object for use in Billing to represent information about consumption
      schedules.

# Billing Fields on Consumption Schedule

Standard and custom fields extend the standard Consumption Schedule object for use in Billing to represent information about consumption schedules.

## Fields

| Field | Details |
| --- | --- |
| blng__BillingRule__c | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThis rule is used to invoice usage summaries related to the consumption schedule.This field is a relationship field.Relationship Nameblng__BillingRule__rRelationship TypeLookupRefers Toblng__BillingRule__r |
| blng__RevenueRecognitionRule__c | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThis rule is used to recognize the revenue of usage summaries based on the summary's related revenue recognition rule.This field is a relationship field.Relationship Nameblng__RevenueRecognitionRule__rRelationship TypeLookupRefers Toblng__RevenueRecognitionRule__r |
| blng__TaxRule__c | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThis rule is used to tax usage summary invoice lines based on the summary's related tax rule.This field is a relationship field.Relationship Nameblng__TaxRule__rRelationship TypeLookupRefers Toblng__TaxRule__r |

#### See Also

-   [*Object Reference for the Salesforce Platform*: ConsumptionSchedule](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_consumption_schedule.htm)
