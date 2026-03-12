---
title: "wkplan__CrisisMetricThreshold__c"
domain: workdotcom-dev-guide
topic: wkplancrisismetricthresholdc
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:36:22.632Z
estimatedTokens: 1626
keywords: [wkplan__CrisisMetricThreshold__c, organization's, threshold, every, crisis, metric, Workplace, Strategy, Planner, location, opening, closing, thresholds, data, evaluated]
---

# wkplan__CrisisMetricThreshold__c

> Defines your organization's threshold values for every crisis metric.
      By default, Workplace Strategy Planner allows location opening and closing thresholds. The
      metric data value for each location is evaluated by the threshold values to determine its risk
      level and whether the location can be considered for either opening or closing. This object is
      installed as a part of the Workplace Strategy Planner managed package. This object is
    available in API version 50.0 and later.

# wkplan\_\_CrisisMetricThreshold\_\_c

Defines your organization's threshold values for every crisis metric. By default, Workplace Strategy Planner allows location opening and closing thresholds. The metric data value for each location is evaluated by the threshold values to determine its risk level and whether the location can be considered for either opening or closing. This object is installed as a part of the Workplace Strategy Planner managed package. This object is available in API version 50.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed a record related to this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed this record. A null value can mean the record was only referenced and not viewed. |
| Name | TypestringPropertiesCreate, Defaulted on create, Filter, Group, idLookup, Nillable, Sort, UpdateDescriptionThe name of a crisis metric. |
| wkplan__CrisisMetric__c | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe crisis metric to which a threshold belongs. This field refers to the custom object Crisis Metric. |
| wkplan__DefaultValueText__c | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionStores the default value for the text display of wkplan__DefaultValue__c. The default value displays only when the threshold values aren’t customized in your org. |
| wkplan__DefaultValue__c | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe default value for a metric threshold in Workplace Strategy Planner. The default values are intended only to demonstrate the app features and capabilities. Customize metric threshold values in your org before using Workplace Strategy Planner. |
| wkplan__DisplayTextLabel__c | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionA reference to the label used for translating the display text. This field is used by Salesforce for translating labels from English into other supported languages. This field shouldn’t be edited. |
| wkplan__DisplayText__c | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionDisplay text for a metric threshold to display in the Workplace Strategy Planner app. For example, Less Than {value} per 100,000. The display text can be an integer, percent, or text string. |
| wkplan__IsLowerThreshold__c | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the value of the field wkplan__Value__c is lower than the threshold value.For example, if data for a crisis metric associated with a location is greater than or equal to the wkplan__Value__c of the opening threshold and the wkplan__IsLowerThreshold__c is set to true, the location is considered low risk and can be a candidate for opening. If the current metric data for a location is greater than or equal to the wkplan__Value__c of the closing threshold whenwkplan__IsLowerThreshold__cis set to true, the location is considered high risk and can be a candidate for closing. |
| wkplan__Type__c | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, Sort, UpdateDescriptionThe type of crisis metric threshold. The threshold type indicates the action or response to take when a threshold is reached.The default values are:ClosingOpening |
| wkplan__Value__c | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe numeric value of a threshold.When the data value for a metric is greater than or equal to this field value and wkplan__IsLowerThreshold__c is set to true, the metric for that location is categorized into the appropriate risk level or threshold recommendation. See the field wkplan__IsLowerThreshold__c for more information. |

## Usage

Crisis metric thresholds allow your organization to set a range for the data values associated with each wkplan\_\_CrisisMetric\_\_c. When a data value for a metric associated with a location reaches a threshold, Workplace Strategy Planner categorizes the metric for that location as low, medium, or high risk. By default, the thresholds in Workplace Strategy Planner indicate when an organization should consider opening or closing a workplace location.

Set threshold values in your org. If a threshold value isn’t set for any metric, the default value is used to calculate the risk level for that metric in the dashboard. For information on how crisis metric thresholds are used in Workplace Strategy Planner, see Salesforce Help: How Risk Are Levels Calculated..

#### See Also

-   [wkplan\_\_CrisisMetric\_\_c](atlas.en-us.workdotcom_dev_guide.meta/workdotcom_dev_guide/wkplan_sforce_api_objects_wkplan__crisismetric__c.htm "Stores quantitative and qualitative data that can be used to measure an aspect of a crisis. Crisis metrics are used to better understand the severity of a crisis, such as the COVID-19 pandemic. Use them to help decide how to manage individual workplace locations during the crisis. This object is installed as a part of the Workplace Strategy Planner managed package. This object is available in API version 50.0 and later.")

-   [wkplan\_\_LocationAssessment\_\_c](atlas.en-us.workdotcom_dev_guide.meta/workdotcom_dev_guide/wkplan_sforce_api_objects_wkplan__locationassessment__c.htm "Stores data for metrics used to evaluate location risk during a crisis, such as the COVID-19 pandemic, including hospital capacity and public guidelines for operating safely. This object is installed as a part of the Workplace Strategy Planner managed package. This object is available in API version 50.0 and later.")

-   [wkplan\_\_CrisisMetric\_\_c](atlas.en-us.workdotcom_dev_guide.meta/workdotcom_dev_guide/wkplan_sforce_api_objects_wkplan__crisismetric__c.htm "Stores quantitative and qualitative data that can be used to measure an aspect of a crisis. Crisis metrics are used to better understand the severity of a crisis, such as the COVID-19 pandemic. Use them to help decide how to manage individual workplace locations during the crisis. This object is installed as a part of the Workplace Strategy Planner managed package. This object is available in API version 50.0 and later.")

## Related Topics

- wkplan__CrisisMetric__c (atlas.en-us.workdotcom_dev_guide.meta/workdotcom_dev_guide/wkplan_sforce_api_objects_wkplan__crisismetric__c.htm)
- wkplan__LocationAssessment__c (atlas.en-us.workdotcom_dev_guide.meta/workdotcom_dev_guide/wkplan_sforce_api_objects_wkplan__locationassessment__c.htm)
