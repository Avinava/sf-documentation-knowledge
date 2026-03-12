---
title: "Service Cloud Base Connector API"
domain: service-connector-api-developer-guide
topic: service-cloud-base-connector-api
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:45.327Z
estimatedTokens: 296
keywords: [Service, Cloud, Base, Connector, API, initialize, send, Salesforce, events, occur, Contact, Center, CCaaS, telephony, system]
---

# Service Cloud Base Connector API

> The Base Connector API allows you to initialize the API and send
            information to Salesforce when events occur with your Contact Center as a Service
            (CCaaS) or telephony system.

# Service Cloud Base Connector API

The Base Connector API allows you to initialize the API and send information to Salesforce when events occur with your Contact Center as a Service (CCaaS) or telephony system.

In addition to initializing the connector, the Base Connector API also provides two functions to publish events and errors to Salesforce.

-   **[initializeConnector](atlas.en-us.service_connector_api_developer_guide.meta/service_connector_api_developer_guide/service_connector_base_initializeconnector.htm)**
    Initializes the Salesforce Connector API Base.
-   **[publishError](atlas.en-us.service_connector_api_developer_guide.meta/service_connector_api_developer_guide/service_connector_base_publisherror.htm)**
    Publishes a partner connector error or telephony error to Salesforce.
-   **[publishEvent](atlas.en-us.service_connector_api_developer_guide.meta/service_connector_api_developer_guide/service_connector_base_publishevent.htm)**
    Publishes an event to Salesforce. The event payload is verified to ensure that it’s the correct type before it’s published. Use this method to publish an event from a desk phone or directly from the partner connector.

## Related Topics

- initializeConnector (atlas.en-us.service_connector_api_developer_guide.meta/service_connector_api_developer_guide/service_connector_base_initializeconnector.htm)
- publishError (atlas.en-us.service_connector_api_developer_guide.meta/service_connector_api_developer_guide/service_connector_base_publisherror.htm)
- publishEvent (atlas.en-us.service_connector_api_developer_guide.meta/service_connector_api_developer_guide/service_connector_base_publishevent.htm)
