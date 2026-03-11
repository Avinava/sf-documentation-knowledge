---
title: "TestSetup Annotation Annotation"
domain: apex-guide
topic: testsetup-annotation-annotation
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:43:46.504Z
keywords: [TestSetup, Annotation, Syntax, Note]
---

# TestSetup Annotation Annotation

# TestSetup Annotation Annotation

Methods defined with the @TestSetup annotation are used for creating common test records that are available for all test methods in the class.

## Syntax

Test setup methods are defined in a test class, take no arguments, and return no value. The following is the syntax of a test setup method.

```

```

If a test class contains a test setup method, the testing framework executes the test setup method first, before any test method in the class. Records that are created in a test setup method are available to all test methods in the test class and are rolled back at the end of test class execution. If a test method changes those records, such as record field updates or record deletions, those changes are rolled back after each test method finishes execution. The next executing test method gets access to the original unmodified state of those records.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=apexcode)

#### Note

You can have only one test setup method per test class.

Test setup methods are supported only with the default data isolation mode for a test class. If the test class or a test method has access to organization data by using the @IsTest(SeeAllData=true) annotation, test setup methods aren’t supported in this class. Because data isolation for tests is available for API versions 24.0 and later, test setup methods are also available for those versions only.

For more information, see [Using Test Setup Methods](atlas.en-us.apexcode.meta/apexcode/apex_testing_testsetup_using.htm "Use test setup methods (methods that are annotated with @testSetup) to create test records once and then access them in every test method in the test class. Test setup methods can be time-saving when you need to create reference or prerequisite data for all test methods, or a common set of records that all test methods operate on.").

-   [← Previous](atlas.en-us.apexcode.meta/apexcode/apex_classes_annotation_SuppressWarnings.htm "SuppressWarnings Annotation Annotation")
-   [Next →](atlas.en-us.apexcode.meta/apexcode/apex_classes_annotation_testvisible.htm "TestVisible Annotation Annotation")