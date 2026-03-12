---
title: "ApexTestSuite"
domain: tooling-api
topic: apextestsuite
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:43.860Z
estimatedTokens: 369
keywords: [ApexTestSuite, suite, Apex, classes, include, test, run, TestSuiteMembership, associates, ens, Tooling, API, version, 36.0, later]
---

# ApexTestSuite

> Represents a suite of Apex classes to include in a test run. A
   TestSuiteMembership object associates each class with the suite. Available in the ens namespace in Tooling API
      version 36.0 and later. Also, available in the mns
      namespace in Tooling API version 38.0 and later.

# ApexTestSuite

Represents a suite of Apex classes to include in a test run. A TestSuiteMembership object associates each class with the suite. Available in the ens namespace in Tooling API version 36.0 and later. Also, available in the mns namespace in Tooling API version 38.0 and later.

## Supported SOAP API Calls

create(), delete(), describeSObjects(), query(), retrieve(), update(), upsert()

## Supported REST API HTTP Methods

Query, GET, POST, PATCH, DELETE

## Fields (ens Namespace)

| Field Name | Description |
| --- | --- |
| TestSuiteName | TypestringPropertiesCreate, Filter, Group, Sort, Unique, UpdateDescriptionThe name of the Apex test suite. This label appears in the user interface.This value is case-sensitive and must be unique. |

## Fields (mns Namespace)

| Field Name | Field Type | Description |
| --- | --- | --- |
| testClassName | string[] | A list of Apex test classes, specified by name, to include in this test suite. |

## Usage

Insert a TestSuiteMembership object using an API call to associate an Apex class with an ApexTestSuite object. (ApexTestSuite and TestSuiteMembership aren’t editable through Apex DML.) To remove the class from the test suite, delete the TestSuiteMembership object. If you delete an Apex test class or test suite, all TestSuiteMembership objects that contain that class or suite are deleted.

The following SOQL query returns the membership object that relates this Apex class to this test suite.

```

```

## Code Examples

```
SELECT Id FROM TestSuiteMembership WHERE ApexClassId = '01pD0000000Fhy9IAC'
    AND ApexTestSuiteId = '05FD00000004CDBMA2'
```
