---
title: "ApexOrgWideCoverage"
domain: tooling-api
topic: apexorgwidecoverage
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:46:37.202Z
keywords: [ApexOrgWideCoverage, Supported, SOAP, API, Calls, REST, HTTP, Methods, Special, Access, Rules, Fields]
---

# ApexOrgWideCoverage

# ApexOrgWideCoverage

Represents code coverage test results for an entire organization. Available in Tooling API version 29.0 and later.

## Supported SOAP API Calls

describeSObjects(), delete(), query(), retrieve()

## Supported REST API HTTP Methods

Query, GET, DELETE

## Special Access Rules

In API version 49.0 and later, users must have the View Setup and Configuration permission to access this object.

## Fields

| Field | Details |
| --- | --- |
| PercentCovered | TypeintPropertiesFilter, Group, Nillable, SortDescriptionThe percentage of the code in the organization that is covered by tests. |