---
title: "ApexCodeCoverage"
domain: tooling-api
topic: apexcodecoverage
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:43.747Z
estimatedTokens: 715
keywords: [ApexCodeCoverage, code, coverage, test, results, Apex, trigger, Tooling, API, version, 29.0, later, SOAP, Calls, REST]
---

# ApexCodeCoverage

> Represents code coverage test results for an Apex class or
   trigger. Available in Tooling API version 29.0 and later.

# ApexCodeCoverage

Represents code coverage test results for an Apex class or trigger. Available in Tooling API version 29.0 and later.

## Supported SOAP API Calls

describeSObjects(), query(), retrieve()

## Supported REST API HTTP Methods

Query, GET

## Special Access Rules

In API version 49.0 and later, users must have the View Setup and Configuration and View All Data permissions to access this object.

## Fields

| Field | Details |
| --- | --- |
| ApexTestClassId | TypestringPropertiesFilter, Group, SortDescriptionThe ID of the test class. |
| TestMethodName | TypestringPropertiesFilter, Group, SortDescriptionThe name of the test method. |
| ApexClassorTriggerId | TypestringPropertiesFilter, Group, SortDescriptionThe ID of the class or trigger under test. |
| NumLinesCovered | TypeintPropertiesFilter, Group, SortDescriptionThe number of covered lines. |
| NumLinesUncovered | TypeintPropertiesFilter, Group, SortDescriptionThe number of uncovered lines. |
| Coverage | TypecomplexvaluePropertiesNoneDescriptionTwo lists of integers. The first is the covered lines, and the second is the list of uncovered lines. If a line is missing from both lists, the line isn’t executable and doesn’t require coverage.Coverage includes these fields:coveredLinesnamespaceuncoveredLines |

## Usage

To query for code coverage, specify an Apex class, test class, or both. The returned JSON or XML object contains two lists of integers: one for covered and one for uncovered lines.

The following example SOQL query retrieves code coverage results for a specific class or trigger covered by a specific test class:

```

```

For per-class code coverage, the query is:

```

```

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=api_tooling)

#### Note

In this case, multiple rows can be returned, since there could be multiple test classes that cover the same test class.

Coverage is returned as two lists of integers. The first is the covered lines, and the second is the list of uncovered lines. If a line is missing from both lists, the line isn’t executable and doesn’t require coverage. For example, if the covered lines are 2, 9, and 11, and uncovered lines are 3, 4, 5, and 6; the result is: {2,9,11},{3,4,5,6}. The missing lines (1, 7, 8 and 10) aren’t executable.

Code coverage percentage is a simple calculation of the number of covered lines divided by the sum of the number of covered lines and the number of uncovered lines. For example, to calculate code coverage percentage in SOAP:

```

```

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=api_tooling)

#### Note

If a single deployment has over 2,000 Apex classes, ApexCodeCoverage objects for the deployed classes are deleted even if the deployment fails or is rolled back. ApexCodeCoverageAggregate objects aren’t affected.

## Code Examples

```
SELECT Coverage
FROM ApexCodeCoverage 
WHERE ApexClassOrTriggerId = ‘01pD000000066GR’ 
AND ApexTestClassId = ‘01pD000000064pu’
```

```
SELECT Coverage
FROM ApexCodeCoverage 
WHERE ApexClassOrTriggerId = ‘01pD000000066GR’
```

```apex
ApexCodeCoverage acc = null; //Query for an ApexCodeCoverage object 
Coverage coverage = acc.coverage; 
int[] covered = coverage.coveredLines; 
int[] uncovered = coverage.uncoveredLines; 
int percent = covered.length / (covered.length + uncovered.length); 
System.out.println("Total class coverage is " + percent + "%.");
```
