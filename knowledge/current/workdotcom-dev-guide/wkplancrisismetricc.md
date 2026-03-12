---
title: "wkplan__CrisisMetric__c"
domain: workdotcom-dev-guide
topic: wkplancrisismetricc
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:36:22.624Z
estimatedTokens: 1724
keywords: [wkplan__CrisisMetric__c, Stores, quantitative, qualitative, data, measure, aspect, crisis, metrics, better, understand, severity, COVID-19, pandemic, help]
---

# wkplan__CrisisMetric__c

> Stores quantitative and qualitative data that can be used to measure
      an aspect of a crisis. Crisis metrics are used to better understand the severity of a crisis,
      such as the COVID-19 pandemic. Use them to help decide how to manage individual workplace
      locations during the crisis. This object is installed as a part of the Workplace Strategy
      Planner managed package. This object is available in API version 50.0 and later.

# wkplan\_\_CrisisMetric\_\_c

Stores quantitative and qualitative data that can be used to measure an aspect of a crisis. Crisis metrics are used to better understand the severity of a crisis, such as the COVID-19 pandemic. Use them to help decide how to manage individual workplace locations during the crisis. This object is installed as a part of the Workplace Strategy Planner managed package. This object is available in API version 50.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| Name | TypestringPropertiesCreate, Defaulted on create, Filter, Group, idLookup, Nillable, Sort, UpdateDescriptionRequired. The crisis metric name. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionThe ID of the user who currently owns this record. The default value is the user logged in to the API to perform the create operation. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed a record related to this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed this record. A null value can mean the record was only referenced and not viewed. |
| wkplan__Crisis__c | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe specific crisis that is measured by the related crisis metrics. This field refers to the Crisis object. |
| wkplan__DataSource__c | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionReserved for future use. |
| wkplan__DescriptionLabel__c | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionA reference to the label used for translating the description. This field is used by Salesforce for translating labels from English into other supported languages. This field shouldn’t be edited. |
| wkplan__Description__c | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionA short explanation of what this crisis metric measures. For example, a description for the Workplace Strategy Planner default metric Percent Positive is Percentage of COVID-19 tests that are positive. |
| wkplan__IgnoreIfDataIsEmpty__c | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionAllows the Workplace Strategy Planner dashboard to ignore a metric when it has no data. This field isn’t used by default in Strategy Planner. Developers can use this field to create a checkbox that, when selected, allows Strategy Planner users to exclude metrics with no data from the dashboard. |
| wkplan__IsCustomMetric__c | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionReserved for future use. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed a record related to this record. |
| wkplan__MaxValue__c | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionAlong with wkplan__MinValue__c, used to define a metric threshold range. For example, the maximum value for the default Workplace Strategy Planner metric New Tests per 100,000 is 100,000. |
| wkplan__MetricCategory__c | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, Sort, UpdateDescriptionRequired. The category or criterion to which a crisis metric belongs. All metrics belong to criteria. These values can’t be customized.The values are:BusinessPriority—The business importance of opening or operating a location.EmployeeData—Workforce availability, based on employee health and preference.GovernmentGuidance—Public-policy and government recommendations or restrictions.MedicalTrends—Data related to COVID-19 testing and patient care. |
| wkplan__MinValue__c | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionAlong with wkplan__MaxValue__c, used to define a metric threshold range. The minimum value for all default metrics is 1. |

## Usage

Crisis metrics track discrete data points and are organized into one of four criteria, the values for wkplan\_\_MetricCategory\_\_c. The default crisis metrics are populated in your org by the Workplace Strategy Planner managed package. Each metric can have opening and closing threshold values, set by your organization with the wkplan\_\_CrisisMetricThreshold\_\_c object. The threshold values are used in aggregate to determine the risk level for every workplace location, organized by criteria, and displayed in the Strategy Planner App dashboard.

The Strategy Planner managed package includes a custom, pre-configured connector that imports public COVID-19 data from a Snowflake Data Warehouse to populate the values for some default crisis metrics. Your organization must populate other crisis metrics. For information on the data type and source for all default metrics, review Salesforce Help: Understand Strategy Planner Criteria, Metrics, and Thresholds.

#### See Also

-   [wkplan\_\_CrisisMetricThreshold\_\_c](atlas.en-us.workdotcom_dev_guide.meta/workdotcom_dev_guide/wkplan_sforce_api_objects_wkplan__crisismetricthreshold__c.htm "Defines your organization's threshold values for every crisis metric. By default, Workplace Strategy Planner allows location opening and closing thresholds. The metric data value for each location is evaluated by the threshold values to determine its risk level and whether the location can be considered for either opening or closing. This object is installed as a part of the Workplace Strategy Planner managed package. This object is available in API version 50.0 and later.")

-   [wkplan\_\_LocationAssessment\_\_c](atlas.en-us.workdotcom_dev_guide.meta/workdotcom_dev_guide/wkplan_sforce_api_objects_wkplan__locationassessment__c.htm "Stores data for metrics used to evaluate location risk during a crisis, such as the COVID-19 pandemic, including hospital capacity and public guidelines for operating safely. This object is installed as a part of the Workplace Strategy Planner managed package. This object is available in API version 50.0 and later.")

-   [wkplan\_\_CrisisMetricThreshold\_\_c](atlas.en-us.workdotcom_dev_guide.meta/workdotcom_dev_guide/wkplan_sforce_api_objects_wkplan__crisismetricthreshold__c.htm "Defines your organization's threshold values for every crisis metric. By default, Workplace Strategy Planner allows location opening and closing thresholds. The metric data value for each location is evaluated by the threshold values to determine its risk level and whether the location can be considered for either opening or closing. This object is installed as a part of the Workplace Strategy Planner managed package. This object is available in API version 50.0 and later.")

## Related Topics

- wkplan__CrisisMetricThreshold__c (atlas.en-us.workdotcom_dev_guide.meta/workdotcom_dev_guide/wkplan_sforce_api_objects_wkplan__crisismetricthreshold__c.htm)
- wkplan__LocationAssessment__c (atlas.en-us.workdotcom_dev_guide.meta/workdotcom_dev_guide/wkplan_sforce_api_objects_wkplan__locationassessment__c.htm)
