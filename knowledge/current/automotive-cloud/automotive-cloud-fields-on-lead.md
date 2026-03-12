---
title: "Automotive Cloud Fields on Lead"
domain: automotive-cloud
topic: automotive-cloud-fields-on-lead
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:01.343Z
estimatedTokens: 231
keywords: [Automotive, Cloud, Lead, Standard, extend, represent, time, frame, interested, transaction]
---

# Automotive Cloud Fields on Lead

> Standard fields extend the Lead object for use in Automotive Cloud to
         represent information about the time frame during which a lead is interested in a
         transaction.

# Automotive Cloud Fields on Lead

Standard fields extend the Lead object for use in Automotive Cloud to represent information about the time frame during which a lead is interested in a transaction.

## Fields

| Field | Details |
| --- | --- |
| EarliestInterestDate | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe earliest date from which the lead is interested in purchasing or selling the item. This field is available in API version 56.0 and later. |
| LatestInterestDate | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe latest date by which the lead is interested in purchasing or selling the item. This field is available in API version 56.0 and later. |

#### See Also

-   [*Object Reference for the Salesforce Platform*: Lead](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_lead.htm)
