---
title: "Service Cloud Connector API Reference"
domain: service-connector-api-developer-guide
topic: service-cloud-connector-api-reference
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:45.351Z
estimatedTokens: 690
keywords: [Service, Cloud, Connector, API, partner, telephony, Contact, Center, CCaaS, system, Salesforce, org, pass, receive, events]
---

# Service Cloud Connector API Reference

> The Connector API is the interface between your partner telephony or Contact Center
        as a Service (CCaaS) system and your Salesforce org. This API allows you to pass information
        to Salesforce and to receive events back from Salesforce.

# Service Cloud Connector API Reference

The Connector API is the interface between your partner telephony or Contact Center as a Service (CCaaS) system and your Salesforce org. This API allows you to pass information to Salesforce and to receive events back from Salesforce.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=service_connector_api_developer_guide)

#### Important

The Connector API is for partners who are implementing Bring Your Own Channel for CCaaS or Service Cloud Voice with Partner Telephony.

The Connector API contains two parts:

-   [Base Connector API](atlas.en-us.service_connector_api_developer_guide.meta/service_connector_api_developer_guide/service_connector_api_base.htm "The Base Connector API allows you to initialize the API and send information to Salesforce when events occur with your Contact Center as a Service (CCaaS) or telephony system."): The Base Connector API allows you to initialize the API and send information to Salesforce when events occur with your Contact Center as a Service (CCaaS) or telephony system.
-   [Connector API Methods](atlas.en-us.service_connector_api_developer_guide.meta/service_connector_api_developer_guide/service_connector_api_interface.htm "The Connector API methods are what you implement in order to be notified when messaging or telephony events occur within the Salesforce org."): The Connector API methods are what you implement in order to be notified when messaging or telephony events occur within the Salesforce org.

When you initialize the Connector API using the [Base Connector API](atlas.en-us.service_connector_api_developer_guide.meta/service_connector_api_developer_guide/service_connector_api_base.htm "The Base Connector API allows you to initialize the API and send information to Salesforce when events occur with your Contact Center as a Service (CCaaS) or telephony system."), you pass it your implementation of the [Connector API Methods](atlas.en-us.service_connector_api_developer_guide.meta/service_connector_api_developer_guide/service_connector_api_interface.htm "The Connector API methods are what you implement in order to be notified when messaging or telephony events occur within the Salesforce org.").

#### See Also

-   [Service Cloud Voice for Partner Telephony Developer Guide](https://developer.salesforce.com/docs/atlas.en-us.260.0.voice_pt_developer_guide.meta/voice_pt_developer_guide/voice_pt_dev_guide.htm "Service Cloud Voice for Partner Telephony Developer Guide - HTML (New Window)")

-   [Bring Your Own Channel for CCaaS Developer Guide](https://developer.salesforce.com/docs/service/messaging-byoc-ccaas/overview "Bring Your Own Channel for CCaaS Developer Guide - HTML (New Window)")

## Related Topics

- Base Connector API (atlas.en-us.service_connector_api_developer_guide.meta/service_connector_api_developer_guide/service_connector_api_base.htm)
- Connector API Methods (atlas.en-us.service_connector_api_developer_guide.meta/service_connector_api_developer_guide/service_connector_api_interface.htm)
- Connector API
                Methods (atlas.en-us.service_connector_api_developer_guide.meta/service_connector_api_developer_guide/service_connector_api_interface.htm)
