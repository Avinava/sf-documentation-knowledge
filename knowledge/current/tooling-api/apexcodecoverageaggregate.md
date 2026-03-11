---
title: "ApexCodeCoverageAggregate"
domain: tooling-api
topic: apexcodecoverageaggregate
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:46:37.173Z
keywords: [ApexCodeCoverageAggregate, Supported, SOAP, API, Calls, REST, HTTP, Methods, Special, Access, Rules, Fields, Usage]
---

# ApexCodeCoverageAggregate

# ApexCodeCoverageAggregate

Represents aggregate code coverage test results for an Apex class or trigger. Available in Tooling API version 29.0 and later.

## Supported SOAP API Calls

describeSObjects(), query(), retrieve()

## Supported REST API HTTP Methods

Query, GET, DELETE

## Special Access Rules

In API version 49.0 and later, users must have the View Setup and Configuration permission to access this object.

## Fields

| Field | Details |
| --- | --- |
| ApexClassorTriggerId | TypestringPropertiesFilter, Group, SortDescriptionThe ID of the class or trigger under test. |
| NumLinesCovered | TypeintPropertiesFilter, Group, SortDescriptionThe number of covered lines. |
| NumLinesUncovered | TypeintPropertiesFilter, Group, SortDescriptionThe number of uncovered lines. |
| Coverage | TypecomplexvaluePropertiesNoneDescriptionTwo lists of integers. The first is the covered lines, and the second is the list of uncovered lines. If a line is missing from both lists, the line isn’t executable and doesn’t require coverage.Coverage includes the following fields:coveredLinesnamespaceuncoveredLines |

## Usage

To query for aggregate code coverage, specify an Apex test class. The returned JSON or XML object will contain two lists of integers: one for covered and one for uncovered lines. For examples, see [ApexCodeCoverage](atlas.en-us.api_tooling.meta/api_tooling/tooling_api_objects_apexcodecoverage.htm "Represents code coverage test results for an Apex class or trigger. Available in Tooling API version 29.0 and later.").