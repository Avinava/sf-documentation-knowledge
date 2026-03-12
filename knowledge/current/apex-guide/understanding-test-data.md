---
title: "Understanding Test Data"
domain: apex-guide
topic: understanding-test-data
apiVersion: 67.0
release: summer-26-v67
docType: concept
lastCollected: 2026-03-12T05:14:34.039Z
estimatedTokens: 631
keywords: [Understanding, Test, Data, Apex, test, data, transient, isn’t, committed, database.]
---

# Understanding Test Data

> Apex test data is transient and isn’t committed to the database.

# Understanding Test Data

Apex test data is transient and isn’t committed to the database.

This means that after a test method finishes execution, the data inserted by the test doesn’t persist in the database. As a result, there is no need to delete any test data at the conclusion of a test. Likewise, all the changes to existing records, such as updates or deletions, don’t persist. This transient behavior of test data makes the management of data easier as you don’t have to perform any test data cleanup. At the same time, if your tests access organization data, this prevents accidental deletions or modifications to existing records.

By default, existing organization data isn’t visible to test methods, with the exception of certain setup objects. You should create test data for your test methods whenever possible. However, test code saved against Salesforce API version 23.0 or earlier has access to all data in the organization. Data visibility for tests is covered in more detail in the next section.

-   **[Isolation of Test Data from Organization Data in Unit Tests](atlas.en-us.apexcode.meta/apexcode/apex_testing_data_access.htm)**

-   **[Using the isTest(SeeAllData=True) Annotation](atlas.en-us.apexcode.meta/apexcode/apex_testing_seealldata_using.htm)**
    Annotate your test class or test method with IsTest(SeeAllData=true) to open up data access to records in your organization. The IsTest(SeeAllData=true) annotation applies to data queries but doesn't apply to record creation or changes, including deletions. New and changed records are still rolled back in Apex tests even when using the annotation.
-   **[Loading Test Data](atlas.en-us.apexcode.meta/apexcode/apex_testing_load_data.htm)**
    Using the Test.loadData method, you can populate data in your test methods without having to write many lines of code.
-   **[Common Test Utility Classes for Test Data Creation](atlas.en-us.apexcode.meta/apexcode/apex_testing_utility_classes.htm)**
    Common test utility classes are public test classes that contain reusable code for test data creation.
-   **[Using Test Setup Methods](atlas.en-us.apexcode.meta/apexcode/apex_testing_testsetup_using.htm)**
    Use test setup methods (methods that are annotated with @testSetup) to create test records once and then access them in every test method in the test class. Test setup methods can be time-saving when you need to create reference or prerequisite data for all test methods, or a common set of records that all test methods operate on.

## Related Topics

- Isolation of Test Data from Organization Data in Unit Tests (atlas.en-us.apexcode.meta/apexcode/apex_testing_data_access.htm)
- Using the isTest(SeeAllData=True) Annotation (atlas.en-us.apexcode.meta/apexcode/apex_testing_seealldata_using.htm)
- Loading Test Data (atlas.en-us.apexcode.meta/apexcode/apex_testing_load_data.htm)
- Common Test Utility Classes for Test Data Creation (atlas.en-us.apexcode.meta/apexcode/apex_testing_utility_classes.htm)
- Using Test Setup Methods (atlas.en-us.apexcode.meta/apexcode/apex_testing_testsetup_using.htm)
