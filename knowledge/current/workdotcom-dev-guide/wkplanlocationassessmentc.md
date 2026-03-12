---
title: "wkplan__LocationAssessment__c"
domain: workdotcom-dev-guide
topic: wkplanlocationassessmentc
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:36:22.640Z
estimatedTokens: 1252
keywords: [wkplan__LocationAssessment__c, Stores, data, metrics, evaluate, location, risk, crisis, COVID-19, pandemic, including, hospital, capacity, guidelines, operating]
---

# wkplan__LocationAssessment__c

> Stores data for metrics used to evaluate location risk during a
      crisis, such as the COVID-19 pandemic, including hospital capacity and public guidelines for
      operating safely. This object is installed as a part of the Workplace Strategy Planner managed
      package. This object is available in API version 50.0 and later.

# wkplan\_\_LocationAssessment\_\_c

Stores data for metrics used to evaluate location risk during a crisis, such as the COVID-19 pandemic, including hospital capacity and public guidelines for operating safely. This object is installed as a part of the Workplace Strategy Planner managed package. This object is available in API version 50.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed a record related to this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed this record. A null value can mean the record was only referenced and not viewed. |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionThe name of the location assessment record. By default, Salesforce assigns location assessment records the prefix LA- and a number, such as LA-125. |
| wkplan__BusinessGuidelines__c | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionThe business priorities and operating guidelines, policies, or requirements for a location. For example, guidelines could be about capacity limitations, using physical barriers, or mandatory distances between employees. |
| wkplan__BusinessPriorityScore__c | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionA number (0 to 100) set by your organization that indicates the importance of this location being open and operating. The priority could be any business need, such as sales or production. A higher score means a greater priority. |
| wkplan__Crisis__c | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe specific crisis that is measured by the related crisis metrics. This field refers to the Crisis object. |
| wkplan__HospitalCapacity__c | TypepercentPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionPercentage of intensive-care units, hospital beds, or other medical amenities available for patient care. |
| wkplan__Location__c | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe workplace affected by a crisis. This field refers to the Location object. |
| wkplan__RegionalGuidanceScore__c | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionA number (0 to 100) set by your organization that indicates the restrictiveness of local public policies and operating guidelines. A higher score means that there are more or stronger restrictions. |
| wkplan__RegionalGuidance__c | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionDetails on opening phases, conditions, or restrictions that are set by a local governing body or political leader. |

## Usage

The following fields provide context and data for some crisis metrics within Workplace Strategy Planner. Your organization must provide the data for these fields:

-   wkplan\_\_BusinessGuidelines\_\_c
-   wkplan\_\_BusinessPriorityScore\_\_c
-   wkplan\_\_HospitalCapacity\_\_c
-   wkplan\_\_RegionalGuidanceScore\_\_c
-   wkplan\_\_RegionalGuidance\_\_c

For more details, see Salesforce Help: Understand Workplace Strategy Planner Criteria, Metrics, and Thresholds in Salesforce Help.

#### See Also

-   [wkplan\_\_CrisisMetric\_\_c](atlas.en-us.workdotcom_dev_guide.meta/workdotcom_dev_guide/wkplan_sforce_api_objects_wkplan__crisismetric__c.htm "Stores quantitative and qualitative data that can be used to measure an aspect of a crisis. Crisis metrics are used to better understand the severity of a crisis, such as the COVID-19 pandemic. Use them to help decide how to manage individual workplace locations during the crisis. This object is installed as a part of the Workplace Strategy Planner managed package. This object is available in API version 50.0 and later.")

-   [wkplan\_\_CrisisMetricThreshold\_\_c](atlas.en-us.workdotcom_dev_guide.meta/workdotcom_dev_guide/wkplan_sforce_api_objects_wkplan__crisismetricthreshold__c.htm "Defines your organization's threshold values for every crisis metric. By default, Workplace Strategy Planner allows location opening and closing thresholds. The metric data value for each location is evaluated by the threshold values to determine its risk level and whether the location can be considered for either opening or closing. This object is installed as a part of the Workplace Strategy Planner managed package. This object is available in API version 50.0 and later.")

-   [Location](atlas.en-us.workdotcom_dev_guide.meta/workdotcom_dev_guide/wdc_cc_sforce_api_objects_location.htm "Location is used by Work.com to represent a physical location, with a visitor address, with extra custom fields added by Work.com. If location search filtering for all levels is enabled in the org, a location can also be an abstraction.")

## Related Topics

- wkplan__CrisisMetric__c (atlas.en-us.workdotcom_dev_guide.meta/workdotcom_dev_guide/wkplan_sforce_api_objects_wkplan__crisismetric__c.htm)
- wkplan__CrisisMetricThreshold__c (atlas.en-us.workdotcom_dev_guide.meta/workdotcom_dev_guide/wkplan_sforce_api_objects_wkplan__crisismetricthreshold__c.htm)
- Location (atlas.en-us.workdotcom_dev_guide.meta/workdotcom_dev_guide/wdc_cc_sforce_api_objects_location.htm)
