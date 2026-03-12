---
title: "wkcc__LocationWellnessFact__c"
domain: workdotcom-dev-guide
topic: wkcclocationwellnessfactc
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:22.400Z
estimatedTokens: 804
keywords: [wkcc__LocationWellnessFact__c, Aggregates, wellness, counts, location, status, rolls, hierarchy, aggregating, employees, directly, linked, any, record, location’s]
---

# wkcc__LocationWellnessFact__c

> Aggregates wellness counts by location and status. This object rolls up the
      location hierarchy, aggregating status counts for all employees directly linked to a location
      or linked to any record in that location’s descendent hierarchy. This object is available
    in orgs that have Work.com installed.

# wkcc\_\_LocationWellnessFact\_\_c

Aggregates wellness counts by location and status. This object rolls up the location hierarchy, aggregating status counts for all employees directly linked to a location or linked to any record in that location’s descendent hierarchy. This object is available in orgs that have Work.com installed.

Location Wellness Facts are created and updated whenever Locations change, or Employee Crisis Assessments change, or Employees change locations. These records hold summaries to make dashboard queries more performant. Wellness fact records are created for each wellness status type for a particular location and include both the percent of employees and the count of employees in that wellness status bracket. Wellness facts also include the total employee count in that particular location, such that *Wellness Status Employee Count / Location Employee Count = Wellness Percent.*

Directly related counts are maintained for level 1 locations. Cascading counts are maintained for level 1 and level 2 locations.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionThe record name. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionThe ID of the user who currently owns this record. Default value is the user logged in to the API to perform the create. |
| wkcc__ExternalId__c | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionA unique identifier for the record in the format ["Cascade" + ":" +] <Location Id> + ‘:’ + <Wellness Status>. The cascade prefix is only present in records that include child location wellness status values. This field is unique within your organization. |
| wkcc__LocationEmployeeCount__c | TypedoublePropertiesCreate, Filter, Sort, UpdateDescriptionThe total count of employees regardless of wellness status. |
| wkcc__LocationLevel__c | TypedoublePropertiesFilter, Nillable, SortDescriptionThe related location's location level. |
| wkcc__Location__c | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe related Location. |
| wkcc__NeedsReaggregation__c | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates to a batch process that wellness status data (specifically, employee counts with each status) must be reaggregated (true).This field is reset to false after the batch process reaggregates the data.This field is available in orgs that have Workplace Command Center 4.2 and later installed. |
| wkcc__WellnessPercent__c | TypepercentPropertiesFilter, Nillable, SortDescriptionThe percent of the location’s employees that are in the wellness status. |
| wkcc__WellnessStatusEmployeeCount__c | TypedoublePropertiesCreate, Filter, Sort, UpdateDescriptionThe count of employees having the wellness status. |
| wkcc__WellnessStatus__c | TypestringPropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe wellness status for the employee. |
