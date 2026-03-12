---
title: "FlowElementTestCoverage"
domain: tooling-api
topic: flowelementtestcoverage
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:45.708Z
estimatedTokens: 390
keywords: [FlowElementTestCoverage, Represents, flow, element, executed, given, Apex, test, method., Supported, SOAP, Calls, REST, HTTP, Fields, Usage, Tip, Sample, Queries]
---

# FlowElementTestCoverage

> Represents a flow element that was
            executed by a given Apex test method.

# FlowElementTestCoverage

Represents a flow element that was executed by a given Apex test method. Available in API version 44.0 and later.

## Supported SOAP Calls

query(), delete(), retrieve(), update()

## Supported REST HTTP Methods

GET, HEAD

## Fields

| Field | Details |
| --- | --- |
| ElementName | TypestringPropertiesFilter, Group, Nillable, Sort, UpdateDescriptionThe unique name of the flow element that’s executed by the test method. |
| FlowTestCoverageId | TypeIDPropertiesFilter, Group, SortDescriptionThe ID of the parent FlowTestCoverage record. |
| FlowVersionId | TypeIDPropertiesFilter, Group, Sort, UpdateDescriptionThe ID of the flow version that’s executed by the test method. |

## Usage

FlowElementTestCoverage records are deleted when changes are saved to the associated flow version.

![Tip](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_tip.png&folder=api_tooling)

#### Tip

A flow version corresponds to a process built in Process Builder or a flow built in Flow Builder. When you create a process, Salesforce names each element for you. To understand which criteria node or action corresponds with an element name, see [Troubleshoot Processes with Apex Debug Logs](https://help.salesforce.com/articleView?id=process_troubleshoot_debuglogs.htm&language=en_US "HTML (New Window)").

## Sample Queries

Get the executed elements that were executed by any test

```

```

Get the number of elements that were executed by any test

```

```

Get the names of the elements that were executed by any test

```

```

## Code Examples

```
SELECT Id, Elementname, FlowTestCoverageId 
FROM FlowElementTestCoverage 
WHERE FlowVersionId='301RM0000004GiK'
```

```
SELECT count_distinct(ElementName) 
FROM FlowElementTestCoverage 
WHERE FlowVersionId='301RM0000004GiK'
```

```
SELECT ElementName, count(Id) 
FROM FlowElementTestCoverage 
WHERE FlowVersionId='301RM0000004GiK' 
GROUP BY ElementName
```
