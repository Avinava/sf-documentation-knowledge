---
title: "Custom Objects Used by Workplace Strategy Planner"
domain: workdotcom-dev-guide
topic: custom-objects-used-by-workplace-strategy-planner
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:36:22.607Z
estimatedTokens: 486
keywords: [Custom, Objects, Workplace, Strategy, Planner, managed, package, installs, several, addition, standard, Employee, Location, Crisis, Address]
---

# Custom Objects Used by Workplace Strategy Planner

> The Workplace Strategy Planner managed package installs several custom objects that are
    required in addition to the standard objects Employee, Location, Crisis, and
    Address.

# Custom Objects Used by Workplace Strategy Planner

The Workplace Strategy Planner managed package installs several custom objects that are required in addition to the standard objects Employee, Location, Crisis, and Address.

-   **[wkplan\_\_CrisisMetric\_\_c](atlas.en-us.workdotcom_dev_guide.meta/workdotcom_dev_guide/wkplan_sforce_api_objects_wkplan__crisismetric__c.htm)**
    Stores quantitative and qualitative data that can be used to measure an aspect of a crisis. Crisis metrics are used to better understand the severity of a crisis, such as the COVID-19 pandemic. Use them to help decide how to manage individual workplace locations during the crisis. This object is installed as a part of the Workplace Strategy Planner managed package. This object is available in API version 50.0 and later.
-   **[wkplan\_\_CrisisMetricThreshold\_\_c](atlas.en-us.workdotcom_dev_guide.meta/workdotcom_dev_guide/wkplan_sforce_api_objects_wkplan__crisismetricthreshold__c.htm)**
    Defines your organization's threshold values for every crisis metric. By default, Workplace Strategy Planner allows location opening and closing thresholds. The metric data value for each location is evaluated by the threshold values to determine its risk level and whether the location can be considered for either opening or closing. This object is installed as a part of the Workplace Strategy Planner managed package. This object is available in API version 50.0 and later.
-   **[wkplan\_\_LocationAssessment\_\_c](atlas.en-us.workdotcom_dev_guide.meta/workdotcom_dev_guide/wkplan_sforce_api_objects_wkplan__locationassessment__c.htm)**
    Stores data for metrics used to evaluate location risk during a crisis, such as the COVID-19 pandemic, including hospital capacity and public guidelines for operating safely. This object is installed as a part of the Workplace Strategy Planner managed package. This object is available in API version 50.0 and later.

## Related Topics

- wkplan__CrisisMetric__c (atlas.en-us.workdotcom_dev_guide.meta/workdotcom_dev_guide/wkplan_sforce_api_objects_wkplan__crisismetric__c.htm)
- wkplan__CrisisMetricThreshold__c (atlas.en-us.workdotcom_dev_guide.meta/workdotcom_dev_guide/wkplan_sforce_api_objects_wkplan__crisismetricthreshold__c.htm)
- wkplan__LocationAssessment__c (atlas.en-us.workdotcom_dev_guide.meta/workdotcom_dev_guide/wkplan_sforce_api_objects_wkplan__locationassessment__c.htm)
