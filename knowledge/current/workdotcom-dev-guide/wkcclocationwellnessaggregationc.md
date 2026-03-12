---
title: "wkcc__LocationWellnessAggregation__c"
domain: workdotcom-dev-guide
topic: wkcclocationwellnessaggregationc
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:22.394Z
estimatedTokens: 596
keywords: [wkcc__LocationWellnessAggregation__c, Aggregates, wellness, counts, location, status, employees, directly, linked, orgs, Workplace, Command, Center, version, 4.2]
---

# wkcc__LocationWellnessAggregation__c

> Aggregates wellness counts by location and status of employees directly linked
      to a location. This object is available in orgs that have Workplace Command Center
    version 4.2 and later installed.

# wkcc\_\_LocationWellnessAggregation\_\_c

Aggregates wellness counts by location and status of employees directly linked to a location. This object is available in orgs that have Workplace Command Center version 4.2 and later installed.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionThe record name. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionThe ID of the user who currently owns this record. Default value is the user logged in to the API to perform the create. |
| wkcc__ExternalId__c | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionA unique identifier for the record in the format ["Cascade" + ":" +] <Location Id> + ‘:’ + <Wellness Status>. The cascade prefix is only present in records that include child location wellness status values. This field is unique within your organization. |
| wkcc__LocationIndividualCount__c | TypedoublePropertiesCreate, Defaulted on create, Filter, Sort, UpdateDescriptionThe total count of individuals regardless of wellness status. |
| wkcc__Location__c | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe related Location. |
| wkcc__NeedsReaggregation__c | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates to a batch process that wellness status data (specifically, employee counts with each status) must be reaggregated (true).This field is reset to false after the batch process reaggregates the data. |
| wkcc__WellnessPercent__c | TypepercentPropertiesFilter, Nillable, SortDescriptionThe calculated percent of the location’s employees that are in the wellness status.IF(   wkcc__LocationIndividualCount__c = 0,   0,   wkcc__WellnessStatusIndividualCount__c / wkcc__LocationIndividualCount__c ) |
| wkcc__WellnessStatusIndividualCount__c | TypedoublePropertiesCreate, Defaulted on create, Filter, Sort, UpdateDescriptionThe count of individuals having the wellness status. |
| wkcc__WellnessStatus__c | TypestringPropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe wellness status for the individual. |

## Code Examples

```
IF(
  wkcc__LocationIndividualCount__c = 0,
  0,
  wkcc__WellnessStatusIndividualCount__c / wkcc__LocationIndividualCount__c
)
```
