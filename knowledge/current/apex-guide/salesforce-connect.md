---
title: "Salesforce Connect"
domain: apex-guide
topic: salesforce-connect
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:33.068Z
estimatedTokens: 934
namespace: DataSource
keywords: [Salesforce, Connect, Apex, code, access, external, data, via, any, adapter, Connector, Framework, develop, custom, retrieve]
---

# Salesforce Connect

> Apex code can access external object data via any Salesforce Connect adapter. Use the
    Apex Connector Framework to develop a custom adapter for Salesforce Connect. The custom adapter can retrieve data from external systems and synthesize data locally.
    Salesforce Connect represents that data in Salesforce external objects, enabling users and the
    Lightning Platform to seamlessly interact with data that’s stored outside the Salesforce
    org.

**Namespace:** `DataSource`

# Salesforce Connect

Apex code can access external object data via any Salesforce Connect adapter. Use the Apex Connector Framework to develop a custom adapter for Salesforce Connect. The custom adapter can retrieve data from external systems and synthesize data locally. Salesforce Connect represents that data in Salesforce external objects, enabling users and the Lightning Platform to seamlessly interact with data that’s stored outside the Salesforce org.

-   **[Apex Considerations for Salesforce Connect External Objects](atlas.en-us.apexcode.meta/apexcode/apex_external_objects_considerations.htm)**
    Apex code can access external object data via any Salesforce Connect adapter, but some requirements and limitations apply.
-   **[Writable External Objects](atlas.en-us.apexcode.meta/apexcode/apex_connector_external_objects_writeable.htm)**
    By default, external objects are read only, but you can make them writable. Doing so lets Salesforce users and APIs create, update, and delete data that’s stored outside the org by interacting with external objects within the org. For example, users can see all the orders that reside in an SAP system that are associated with an account in Salesforce. Then, without leaving the Salesforce user interface, they can place a new order or route an existing order. The relevant data is automatically created or updated in the SAP system.
-   **[External Change Data Capture Packaging and Testing](atlas.en-us.apexcode.meta/apexcode/apex_connector_external_tracking_package_and_test.htm)**
    You can distribute External Change Data Capture components in managed packages, including a framework for testing your Apex triggers. Special behaviors and limitations apply to packaging and package installation.
-   **[Mock SOQL Tests for External Objects](atlas.en-us.apexcode.meta/apexcode/apex_connector_external_objects_mock_soql_tests.htm)**
    You can mock SOQL query responses for external objects in Apex testing by using SOQL stub methods and a new test class. Use basic and joined SOQL queries against external objects and return mock records in a testing context.
-   **[Get Started with the Apex Connector Framework](atlas.en-us.apexcode.meta/apexcode/apex_connector_start.htm)**
    To get started with your first custom adapter for Salesforce Connect, create two Apex classes: one that extends the DataSource.Connection class, and one that extends the DataSource.Provider class.
-   **[Key Concepts About the Apex Connector Framework](atlas.en-us.apexcode.meta/apexcode/apex_connector_concepts.htm)**
    The DataSource namespace provides the classes for the Apex Connector Framework. Use the Apex Connector Framework to develop a custom adapter for Salesforce Connect. Then connect your Salesforce org to any data anywhere via the Salesforce Connect custom adapter.
-   **[Considerations for the Apex Connector Framework](atlas.en-us.apexcode.meta/apexcode/apex_connector_considerations.htm)**
    Understand the limits and considerations for creating Salesforce Connect custom adapters with the Apex Connector Framework.
-   **[Apex Connector Framework Examples](atlas.en-us.apexcode.meta/apexcode/apex_connector_examples.htm)**
    These examples illustrate how to use the Apex Connector Framework to create custom adapters for Salesforce Connect.

#### See Also

-   [*Salesforce Help*: Access External Data With Salesforce Connect](https://help.salesforce.com/s/articleView?id=platform.salesforce_connect.htm&type=5&language=en_US "Salesforce Help: Access External Data With Salesforce
    Connect - HTML (New Window)")

-   [Salesforce Connect Learning Map](https://salesforceconnect-learningmap.herokuapp.com/ "Salesforce Connect Learning Map - HTML (New Window)")

## Related Topics

- Apex Considerations for Salesforce Connect External Objects (atlas.en-us.apexcode.meta/apexcode/apex_external_objects_considerations.htm)
- Writable External Objects (atlas.en-us.apexcode.meta/apexcode/apex_connector_external_objects_writeable.htm)
- External Change Data Capture Packaging and Testing (atlas.en-us.apexcode.meta/apexcode/apex_connector_external_tracking_package_and_test.htm)
- Mock SOQL Tests for External Objects (atlas.en-us.apexcode.meta/apexcode/apex_connector_external_objects_mock_soql_tests.htm)
- Get Started with the Apex Connector Framework (atlas.en-us.apexcode.meta/apexcode/apex_connector_start.htm)
- Key Concepts About the Apex Connector Framework (atlas.en-us.apexcode.meta/apexcode/apex_connector_concepts.htm)
- Considerations for the Apex Connector Framework (atlas.en-us.apexcode.meta/apexcode/apex_connector_considerations.htm)
- Apex Connector Framework Examples (atlas.en-us.apexcode.meta/apexcode/apex_connector_examples.htm)
