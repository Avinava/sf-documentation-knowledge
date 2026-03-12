---
title: "TestSuiteMembership"
domain: object-reference
topic: testsuitemembership
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:35:18.181Z
estimatedTokens: 428
keywords: [TestSuiteMembership, Associates, Apex, ApexTestSuite, API, version, 36.0, later, Calls, Special, Access, Rules, Usage]
---

# TestSuiteMembership

> Associates an Apex class with an ApexTestSuite.
   This object is available in API version 36.0 and later.

# TestSuiteMembership

Associates an Apex class with an ApexTestSuite. This object is available in API version 36.0 and later.

## Supported Calls

create(), delete(), describeSObjects(), query(), retrieve(), update(), upsert()

## Special Access Rules

In API version 49.0 and later, users must have the View Setup and Configuration permission to access this object.

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

#### See Also

-   [ApexTestSuite](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_apextestsuite.htm "Represents a suite of Apex classes to include in a test run. A TestSuiteMembership object associates each class with the suite. This object is available in API version 36.0 and later.")

## Code Examples

```
SELECT Id FROM TestSuiteMembership WHERE ApexClassId = '01pD0000000Fhy9IAC'
    AND ApexTestSuiteId = '05FD00000004CDBMA2'
```

## Related Topics

- ApexTestSuite (atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_apextestsuite.htm)
