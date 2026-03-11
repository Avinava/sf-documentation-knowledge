---
title: "GitHub Issues Custom Adapter for Salesforce Connect"
domain: apex-guide
topic: github-issues-custom-adapter-for-salesforce-connect
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:43:46.799Z
keywords: [GitHub, Issues, Custom, Adapter, Salesforce, Connect, DataSource.Connection, Class, DataSource.Provider]
---

# GitHub Issues Custom Adapter for Salesforce Connect

# GitHub Issues Custom Adapter for Salesforce Connect

This example creates a custom adapter that links GitHub Issues to products in Salesforce using an indirect lookup relationship. An external lookup relationship also links GitHub Issues to the comments on each issue.

This example illustrates a range of common use cases for custom adapters, including how to:

-   Query external data.
-   Work with a range of external object field types, such as Date and Picklist fields.
-   Use indirect lookup relationships, which link a child external object to a parent standard or custom object.
-   Use external lookup relationships, which link a child standard, custom, or external object to a parent external object.
-   Use Data Manipulation Language (DML) operations to insert, update, and delete external data.

To improve unit tests for the Apex code in this example, you can also return mock records in a testing context. See [Mock SOQL Tests for External Objects](atlas.en-us.apexcode.meta/apexcode/apex_connector_external_objects_mock_soql_tests.htm "You can mock SOQL query responses for external objects in Apex testing by using SOQL stub methods and a new test class. Use basic and joined SOQL queries against external objects and return mock records in a testing context.").

## DataSource.Connection Class

This example creates a class named GitHubDataSourceConnection. For this example to work, create a custom field on the Product2 standard object. Specify the name of the custom text field as Repository, and select the External ID and Unique attributes.

```

```

## DataSource.Provider Class

This example creates a class named GitHubDataSourceProvider.

```

```