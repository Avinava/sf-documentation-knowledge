---
title: "Apex Connector Framework Examples"
domain: apex-guide
topic: apex-connector-framework-examples
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:43:46.833Z
keywords: [Apex, Connector, Framework, Examples]
---

# Apex Connector Framework Examples

# Apex Connector Framework Examples

These examples illustrate how to use the Apex Connector Framework to create custom adapters for Salesforce Connect.

-   **[GitHub Issues Custom Adapter for Salesforce Connect](atlas.en-us.apexcode.meta/apexcode/apex_connector_example_github_issues.htm)**  
    This example creates a custom adapter that links GitHub Issues to products in Salesforce using an indirect lookup relationship. An external lookup relationship also links GitHub Issues to the comments on each issue.
-   **[GitHub Custom Adapter for Salesforce Connect](atlas.en-us.apexcode.meta/apexcode/apex_connector_example_github.htm)**  
    This example illustrates how to support indirect lookup relationships. An indirect lookup relationship links a child external object to a parent standard or custom object.
-   **[Google Drive™ Custom Adapter for Salesforce Connect](atlas.en-us.apexcode.meta/apexcode/apex_connector_example_google_drive.htm)**  
    This example illustrates how to use callouts and OAuth to connect to an external system, which in this case is the Google Drive™ online storage service. The example also shows how to avoid failing tests from web service callouts by returning mock responses for test methods.
-   **[Google Books™ Custom Adapter for Salesforce Connect](atlas.en-us.apexcode.meta/apexcode/apex_connector_example_google_books.htm)**  
    This example illustrates how to work around the requirements and limits of an external system’s APIs: in this case, the Google Books API Family.
-   **[Loopback Custom Adapter for Salesforce Connect](atlas.en-us.apexcode.meta/apexcode/apex_connector_example_loopback.htm)**  
    This example illustrates how to handle filtering in queries. For simplicity, this example connects the Salesforce org to itself as the external system.
-   **[Stack Overflow Custom Adapter for Salesforce Connect](atlas.en-us.apexcode.meta/apexcode/apex_connector_example_stackoverflow.htm)**  
    This example illustrates how to support external lookup relationships and multiple tables. An external lookup relationship links a child standard, custom, or external object to a parent external object. Each table can become an external object in the Salesforce org.