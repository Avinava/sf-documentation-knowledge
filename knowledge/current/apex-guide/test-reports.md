---
title: "Test Reports"
domain: apex-guide
topic: test-reports
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:43:46.265Z
keywords: [Test, Reports, Create, Class, Note]
---

# Test Reports

# Test Reports

Like all Apex code, Salesforce Reports and Dashboards API via Apex code requires test coverage.

The Reporting Apex methods don’t run in system mode, they run in the context of the current user (also called the *context user* or the *logged-in* user). The methods have access to whatever the current user has access to.

In Apex tests, report runs always ignore the SeeAllData annotation, regardless of whether the annotation is set to true or false. This means that report results will include pre-existing data that the test didn’t create. There is no way to disable the SeeAllData annotation for a report execution. To limit results, use a filter on the report.

## Create a Reports Test Class

The following example tests asynchronous and synchronous reports. Each method:

-   Creates a new Opportunity object and uses it to set a filter on the report.
-   Runs the report.
-   Calls assertions to validate the data.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=apexcode)

#### Note

In Apex tests, asynchronous reports execute only after the test is stopped using the Test.stopTest method.

```

```