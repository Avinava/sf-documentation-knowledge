---
title: "FlowTestCoverage"
domain: tooling-api
topic: flowtestcoverage
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:44.866Z
estimatedTokens: 686
keywords: [FlowTestCoverage, test, coverage, flow, process, Apex, SOAP, Calls, REST, HTTP, Usage, Sample, Query]
---

# FlowTestCoverage

> Represents test coverage for a flow or
            process by a given Apex method.

# FlowTestCoverage

Represents test coverage for a flow or process by a given Apex method. Available in API version 44.0 and later.

## Supported SOAP Calls

delete(), describeSObjects(), query(), retrieve(), update()

## Supported REST HTTP Methods

GET, HEAD

## Fields

| Field | Details |
| --- | --- |
| ApexTestClassId | TypeIDPropertiesFilter, Group, Sort, UpdateDescriptionThe ID of the Apex test class. |
| FlowVersionId | TypeIDPropertiesFilter, Group, SortDescriptionThe ID of the flow version that was executed by the test method. |
| NumElementsCovered | TypeintPropertiesFilter, Group, Nillable, Sort, UpdateDescriptionThe number of elements that were executed by the test method. |
| NumElementsNotCovered | TypeintPropertiesFilter, Group, Nillable, Sort, UpdateDescriptionThe number of elements that weren’t executed by the test method. |
| TestMethodName | TypestringPropertiesFilter, Group, Nillable, Sort, UpdateDescriptionThe name of the Apex method that executed the flow version. |

## Usage

To deploy a process or autolaunched flow as active in production orgs, you must meet the flow test coverage requirement for your org. At least one Apex test must cover the flow test coverage percentage of the active processes and autolaunched flows. Flow test coverage requirements don’t apply to flows that have screens. FlowTestCoverage records are deleted when changes are saved to the associated flow version.

A flow version corresponds to a process built in Process Builder or a flow built in Flow Builder. For a process, Apex tests execute only the active version. For a flow, Apex tests execute the active version. When a flow has no active version, Apex tests execute the latest version.

![Tip](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_tip.png&folder=api_tooling)

#### Tip

Make sure that **Deploy processes and flows as active** is enabled in your org’s process automation settings. Otherwise, when you deploy active flows and processes via change sets or Metadata API, they’re deployed as inactive.

To calculate your org’s flow test coverage, Salesforce divides the number of covered flows and processes by the sum of the number of active processes and active autolaunched flows.

## Sample Query

Get the names of all flows and processes that have test coverage.

```

```

Get the names of all active autolaunched flows and processes that don’t have test coverage.

```

```

Get overall test coverage for a flow version.

```

```

#### See Also

-   [*Salesforce Help*: Deploy Processes and Flows as Active](https://help.salesforce.com/s/articleView?id=platform.flow_distribute_deploy_active.htm&type=5&language=en_US "Salesforce Help: Deploy Processes and Flows as Active - HTML (New Window)")

## Code Examples

```
SELECT FlowVersion.Definition.DeveloperName
FROM FlowTestCoverage
GROUP BY FlowVersion.Definition.DeveloperName
```

```
SELECT Definition.DeveloperName
FROM Flow
WHERE Status = 'Active'
      AND (ProcessType = 'AutolaunchedFlow' OR ProcessType = 'Workflow' OR ProcessType = 'CustomEvent' OR ProcessType = 'InvocableProcess')
      AND Id NOT IN (SELECT FlowVersionId FROM FlowTestCoverage)
```

```
SELECT Id, ApexTestClassId, TestMethodName, FlowVersionId, NumElementsCovered, NumElementsNotCovered 
FROM FlowTestCoverage 
WHERE flowversionid='301RM0000004GiK'
```
