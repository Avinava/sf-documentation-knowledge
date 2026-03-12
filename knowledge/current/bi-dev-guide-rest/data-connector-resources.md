---
title: "Data Connector Resources"
domain: bi-dev-guide-rest
topic: data-connector-resources
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:03.643Z
estimatedTokens: 1199
keywords: [Data, Connector, Resources, connectors, prebuilt, quickly, connect, Salesforce, orgs, apps, warehouses, database, services, allow, users]
---

# Data Connector Resources

> Data connectors are prebuilt connectors to quickly connect to data in your Salesforce orgs, apps,
 data warehouses, and database services. These resources allow users to manage data connectors and their source objects, run data syncs, 
 and check statuses.

# Data Connector Resources

Data connectors are prebuilt connectors to quickly connect to data in your Salesforce orgs, apps, data warehouses, and database services. These resources allow users to manage data connectors and their source objects, run data syncs, and check statuses.

Available resources:

| Resource | Description | Supported HTTP Method | Resource URL |
| --- | --- | --- | --- |
| Data Connector List Resource | Returns a collection of Analytics connectors and creates an Analytics connector. | GET POST | /wave/dataConnectors |
| Data Connector Resource | Returns Analytics connector properties and updates or deletes Analytics connectors. | GET PATCH DELETE | /wave/dataConnectors/<connectorId> |
| Data Connector Ingest Resource | Triggers the Analytics connector to run a data sync. This API is the equivalent of the “Run Now” UI feature. | POST | /wave/dataConnectors/<connectorId>/​ingest |
| Data Connector Source Objects List Resource | Returns a list of all the source objects that are present under the specified CRM Analytics connection. | GET | /wave/dataConnectors/<connectorId>/​sourceObjects |
| Data Connector Source Object Resource | Returns a source object resource for an Analytics connector. A source object represents a specific category or type of data that the Analytics connector knows about. When a source object is synced to Analytics, it can be used to create datasets. | GET | /wave/dataConnectors/<connectorId>/​sourceObjects/<sourceObjectName> |
| Data Connector Source Object Data Preview Resource | Returns a preview of the source object data that the Analytics connector knows about. When a source object is synced to Analytics, it can be used to create datasets. | GET POST | /wave/dataConnectors/<connectorId>/​sourceObjects/<sourceObjectName>/dataPreview |
| Data Connector Source Object Fields Resource | Returns a list of source fields for a particular source object. | GET | /wave/dataConnectors/<connectorId>/​sourceObjects/<sourceObjectName>/fields |
| Data Connector Status Resource | Tests the status of an external Analytics connector. This API doesn't work to test a local Salesforce connector. | GET | /wave/dataConnectors/<connectorId>/status |
| Data Connector Types Resource | Returns a collection of Analytics connector types. | GET | /wave/dataConnectorTypes |

-   **[Data Connector Resource](atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_resources_dataconnectors_connectorid.htm)**
    Returns Analytics connector properties and updates or deletes Analytics connectors.
-   **[Data Connectors List Resource](atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_resources_dataconnectors.htm)**
    Returns a collection of Analytics connectors and creates an Analytics connector.
-   **[Data Connector Ingest Resource](atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_resources_dataconnectors_connectorid_ingest.htm)**
    Triggers the Analytics connector to run a data sync. This API is the equivalent of the “Run Now” UI feature.
-   **[Data Connector Source Objects List Resource](atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_resources_dataconnectors_connectorid_sourceobjects.htm)**
    Returns a list of all the source objects that are present under the specified Analytics connection.
-   **[Data Connector Source Object Resource](atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_resources_dataconnectors_connectorid_sourceobjects_sourceobjectname.htm)**
    Returns a source object resource for an Analytics connector. A source object represents a specific category or type of data that the Analytics connector knows about. When a source object is synced to Analytics, it can be used to create datasets.
-   **[Data Connector Source Object Data Preview Resource](atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_resources_dataconnectors_connectorid_sourceobjects_sourceobjectname_datapreview.htm)**
    Returns a preview of the source object data that the Analytics connector knows about. When a source object is synced to Analytics, it can be used to create datasets.
-   **[Data Connector Source Object Fields Resource](atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_resources_dataconnectors_connectorid_sourceobjects_sourceobjectname_fields.htm)**
    Returns a list of source fields for a particular source object.
-   **[Data Connector Status Resource](atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_resources_dataconnectors_connectorid_status.htm)**
    Tests the status of an external Analytics connector. This API doesn't work to test a local Salesforce connector.
-   **[Data Connector Types Resource](atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_resources_dataconnectortypes.htm)**
    Returns a collection of Analytics connector types.

## Related Topics

- Data Connector List Resource (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_resources_dataconnectors.htm)
- Data Connector Resource (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_resources_dataconnectors_connectorid.htm)
- Data Connector Ingest Resource (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_resources_dataconnectors_connectorid_ingest.htm)
- Data Connector Source Objects List Resource (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_resources_dataconnectors_connectorid_sourceobjects.htm)
- Data Connector Source Object Resource (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_resources_dataconnectors_connectorid_sourceobjects_sourceobjectname.htm)
- Data Connector Source Object Data Preview Resource (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_resources_dataconnectors_connectorid_sourceobjects_sourceobjectname_datapreview.htm)
- Data Connector Source Object Fields Resource (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_resources_dataconnectors_connectorid_sourceobjects_sourceobjectname_fields.htm)
- Data Connector Status Resource (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_resources_dataconnectors_connectorid_status.htm)
- Data Connector Types Resource (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_resources_dataconnectortypes.htm)
- Data Connectors List Resource (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_resources_dataconnectors.htm)
