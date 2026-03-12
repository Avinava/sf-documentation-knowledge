---
title: "TestSuiteMembership"
domain: tooling-api
topic: testsuitemembership
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:46.032Z
estimatedTokens: 333
keywords: [TestSuiteMembership, Associates, Apex, ApexTestSuite, Tooling, API, version, 36.0, later, SOAP, Calls, REST, HTTP, Usage]
---

# TestSuiteMembership

> Associates an Apex class with an ApexTestSuite. Available in Tooling API version 36.0 and later.

# TestSuiteMembership

Associates an Apex class with an ApexTestSuite. Available in Tooling API version 36.0 and later.

## Supported SOAP API Calls

create(), delete(), describeSObjects(), query(), retrieve(), update(), upsert()

## Supported REST API HTTP Methods

Query, GET, POST, PATCH, DELETE

## Fields

| Field Name | Description |
| --- | --- |
| ApexClassId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe Apex class whose tests are to be executed.This is a relationship field.Relationship NameApexClassRelationship TypeLookupRefers ToApexClass |
| ApexTestSuiteId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe test suite to which the Apex class is assigned.This is a relationship field.Relationship NameApexTestSuiteRelationship TypeLookupRefers ToApexTestSuite |

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
