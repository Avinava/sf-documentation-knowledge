---
title: "Isolation of Test Data from Organization Data in Unit
    Tests"
domain: apex-guide
topic: isolation-of-test-data-from-organization-data-in-unit-tests
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:34.048Z
estimatedTokens: 1116
keywords: [Isolation, Test, Data, Organization, Unit, Tests, Whenever, possible, disable, restriction, annotating, IsTest, SeeAllData=true, annotation]
---

# Isolation of Test Data from Organization Data in Unit
    Tests

> Whenever possible, create test data for each test. You can disable this restriction by
      annotating your test class or test method with the IsTest(SeeAllData=true) annotation.

# Isolation of Test Data from Organization Data in Unit Tests

By default, Apex test methods (API version 24.0 and later) can’t access pre-existing org data such as standard objects, custom objects, and custom settings data. They can only access data that they create. However, objects that are used to manage your organization or metadata objects can still be accessed in your tests. These are some examples of such objects.

-   User
-   Profile
-   Organization
-   CronTrigger
-   RecordType
-   ApexClass
-   ApexTrigger
-   ApexComponent
-   ApexPage

Whenever possible, create test data for each test. You can disable this restriction by annotating your test class or test method with the IsTest(SeeAllData=true) annotation.

Test code saved using Salesforce API version 23.0 or earlier continues to have access to all data in the organization and its data access is unchanged.

Data Access Considerations

-   When working with data silo Apex tests, cross-object field references using the Owner relationship aren’t supported. Due to this limitation, SELECT Owner.IsActive FROM Account returns null when run within a data silo Apex test.
-   If a new test method saved using Salesforce API version 24.0 or later calls a method in another class saved using version 23.0 or earlier, the data access restrictions of the caller are enforced in the called method. The called method can’t access organization data because the caller can’t access it, even though it was saved in an earlier version.
-   The IsTest(SeeAllData=true) annotation has no effect when added to Apex code saved using Salesforce API version 23.0 and earlier.
-   This access restriction to test data applies to all code running in test context. For example, if a test method causes a trigger to execute and the test can’t access organization data, the trigger won’t be able to either.
-   If a test makes a Visualforce request, the executing test stays in test context but runs in a different thread. Therefore, test data isolation is no longer enforced. In this case, the test will be able to access all data in the organization after initiating the Visualforce request. However, if the Visualforce request performs a callback, such as a JavaScript remoting call, any data inserted by the callback isn’t visible to the test.
-   The VLOOKUP validation rule function, in API version 27.0 and earlier, always looks up org data in addition to test data when fired by a running Apex test. Starting with version 28.0, the VLOOKUP validation rule function no longer accesses organization data from a running Apex test. The function looks up only data created by the test, unless the test class or method is annotated with IsTest(SeeAllData=true).
-   There can be some cases where you can’t create certain types of data from your test method because of specific limitations. Here are some examples of such limitations.
    -   Some standard objects aren’t creatable. For more information on these objects, see the [Object Reference for Salesforce](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/ "HTML (New Window)").
    -   For some sObjects that have fields with unique constraints, inserting duplicate sObject records results in an error. For example, inserting CollaborationGroup sObjects with the same names results in an error because CollaborationGroup records must have unique names. This error occurs whether your test is annotated with IsTest(SeeAllData=true), or not.
    -   Records that are created only after related records are committed to the database, like tracked changes in Chatter. Tracked changes for a record (FeedTrackedChange records) in Chatter feeds aren't available when test methods modify the associated record. FeedTrackedChange records require the change to the parent record they're associated with to be committed to the database before they're created. Since test methods don't commit data, they don't result in the creation of FeedTrackedChange records. Similarly, field history tracking records can't be created in test methods because they require other sObject records to be committed first. For example, AccountHistory records can’t be created in test methods because Account records must be committed first.
-   When working with data silo Apex tests, Salesforce recommends that you don’t share record IDs between test data and org data, thereby preventing test data from accessing pre-existing org data.
