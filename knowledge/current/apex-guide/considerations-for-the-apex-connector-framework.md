---
title: "Considerations for the Apex Connector Framework"
domain: apex-guide
topic: considerations-for-the-apex-connector-framework
apiVersion: 67.0
release: summer-26-v67
docType: concept
lastCollected: 2026-03-12T09:33:32.934Z
estimatedTokens: 499
keywords: [Considerations, Apex, Connector, Framework, Understand, limits, creating, Salesforce, Connect, custom, adapters]
---

# Considerations for the Apex Connector Framework

> Understand the limits and considerations for creating Salesforce Connect custom
        adapters with the Apex Connector Framework.

# Considerations for the Apex Connector Framework

Understand the limits and considerations for creating Salesforce Connect custom adapters with the Apex Connector Framework.

-   If you change and save a DataSource.Connection class, resave the corresponding DataSource.Provider class. Otherwise, when you define the external data source, the custom adapter doesn’t appear as an option for the Type field. Also, the associated external objects’ custom tabs no longer appear in the Salesforce UI.
-   DML operations aren’t allowed in the Apex code that comprises the custom adapter.
-   Make sure that you understand the limits of the external system’s APIs. For example, some external systems accept only requests for up to 40 rows.
-   Apex data type limitations:
    -   Double—The value loses precision beyond 18 significant digits. For higher precision, use decimals instead of doubles.
    -   String—If the length is greater than 255 characters, the string is mapped to a long text area field in Salesforce.
-   Custom adapters for Salesforce Connect are subject to the same limitations as any other Apex code. For example:
    -   All Apex governor limits apply.
    -   Test methods don’t support web service callouts. Tests that perform web service callouts fail. For an example that shows how to avoid these failing tests by returning mock responses, see [Google Drive™ Custom Adapter for Salesforce Connect](atlas.en-us.apexcode.meta/apexcode/apex_connector_example_google_drive.htm "This example illustrates how to use callouts and OAuth to connect to an external system, which in this case is the Google Drive™ online storage service. The example also shows how to avoid failing tests from web service callouts by returning mock responses for test methods.").
-   In Apex tests, use dynamic SOQL to query external objects. Tests that perform static SOQL queries of external objects fail.

#### See Also

-   [Dynamic SOQL](atlas.en-us.apexcode.meta/apexcode/apex_dynamic_soql.htm)

## Related Topics

- Google Drive™ Custom Adapter for Salesforce
                            Connect (atlas.en-us.apexcode.meta/apexcode/apex_connector_example_google_drive.htm)
- Dynamic SOQL (atlas.en-us.apexcode.meta/apexcode/apex_dynamic_soql.htm)
