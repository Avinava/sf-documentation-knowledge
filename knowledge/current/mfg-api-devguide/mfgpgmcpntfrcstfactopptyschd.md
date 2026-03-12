---
title: "MfgPgmCpntFrcstFactOpptySchd"
domain: mfg-api-devguide
topic: mfgpgmcpntfrcstfactopptyschd
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:55.810Z
estimatedTokens: 367
keywords: [MfgPgmCpntFrcstFactOpptySchd, junction, forecast, opportunity, line, item, schedule, objects, providing, relationship, data, corresponding, sales, order, schedules]
---

# MfgPgmCpntFrcstFactOpptySchd

> Represents a junction between the forecast and opportunity line item schedule
         objects, providing details on the relationship between forecast data and corresponding
         sales order schedules. This object is available in API version 55.0 and later.

# MfgPgmCpntFrcstFactOpptySchd

Represents a junction between the forecast and opportunity line item schedule objects, providing details on the relationship between forecast data and corresponding sales order schedules. This object is available in API version 55.0 and later.

## Supported Calls

create(), delete(), describeSObjects(), query(), retrieve(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| ManufacturingProgramComponentForecastFact | TypereferencePropertiesCreate, Filter, Group, SortDescriptionRepresents information about the generated manufacturing program forecast records. |
| OpportunityLineItemSchedule | TypereferencePropertiesCreate, Filter, Group, SortDescriptionRepresents information about the quantity, revenue distribution, and delivery dates for a particular OpportunityLineItemRelationship TypeLookupRefers ToOpportunityLineItemSchedule |
| OpportunityLineItem | TypereferencePropertiesCreate, Filter, Group, SortDescriptionRepresents an opportunity line item associated with an Opportunity.Relationship TypeLookupRefers ToOpportunityLineItem |
| Opportunity | TypereferencePropertiesCreate, Filter, Group, SortDescriptionRepresents an opportunity, which is a sale or pending deal.Relationship TypeLookupRefers ToOpportunity |
| Product | TypereferencePropertiesCreate, Filter, Group, SortDescriptionRepresents Product on fact that is being converted to Oppotunity Line itemRelationship TypeLookupRefers ToProduct2 |
