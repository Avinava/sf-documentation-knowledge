---
title: "AnalyticsDatasetDefinition"
domain: loyalty
topic: analyticsdatasetdefinition
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:52.073Z
estimatedTokens: 620
keywords: [AnalyticsDatasetDefinition, datasets, analytics, CRM, Tableau, API, version, 65.0, later, Calls, Parent, File, Suffix, Directory, Location, Version, Special, Access, Rules, Declarative]
---

# AnalyticsDatasetDefinition

> Represents the datasets used for analytics, such as those in CRM Analytics
         and Tableau. This object is available in API version 65.0 and later.

# AnalyticsDatasetDefinition

Represents the datasets used for analytics, such as those in CRM Analytics and Tableau. This object is available in API version 65.0 and later.

## Supported Calls

create(), delete(), describeSObjects(), query(), retrieve(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| DatasetCategory | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Restricted picklist, Sort, UpdateDescriptionThe type of metric that the dataset is designed to support.Possible values are:PromotionsByMembers—MembersPromotionsByRevenue—RevenuePromotionsByTransactions—Transaction JournalsThe default value is PromotionsByRevenue. |
| DatasetName | TypestringPropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe name of the dataset. |
| DeveloperName | TypestringPropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe developer name of the dataset. |
| Language | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe language of the dataset. |
| MasterLabel | TypestringPropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe label of the dataset. |
| NamespacePrefix | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe namespace prefix that is associated with this object. Each Developer Edition org that creates a managed package has a unique namespace prefix. Limit: 15 characters. You can refer to a component in a managed package by using the namespacePrefix__componentNamenotation.The namespace prefix can have one of the following values:In Developer Edition organizations, the namespace prefix is set to the namespace prefix of the organization for all objects that support it. There’s an exception if an object is in an installed managed package. In that case, the object has the namespace prefix of the installed managed package. This field’s value is the namespace prefix of the Developer Edition organization of the package developer.In organizations that aren’t Developer Edition organizations, NamespacePrefix is only set for objects that are part of an installed managed package. There’s no namespace prefix for all other objects. |
| UsageCategory | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Restricted picklist, Sort, UpdateDescriptionThe category of usage that uniquely identifies an agent topic.Possible values are:PromotionPerformanceInsightsThe default value is PromotionPerformanceInsights. |

## Code Examples

```
<?xml version="1.0" encoding="UTF-8"?>
<AnalyticsDatasetDefinition xmlns="http://soap.sforce.com/2006/04/metadata">
    <datasetCategory>1</datasetCategory>
    <datasetName>analytics</datasetName>
    <masterLabel>sample</masterLabel>
    <usageCategory>PromotionPerformanceInsights</usageCategory>
</AnalyticsDatasetDefinition>
```

```
<Package xmlns="http://soap.sforce.com/2006/04/metadata">
    <types>
        <members>*</members>
        <name>AnalyticsDatasetDefinition</name>
    </types>
    <version>[ftest]</version>
</Package>
```
