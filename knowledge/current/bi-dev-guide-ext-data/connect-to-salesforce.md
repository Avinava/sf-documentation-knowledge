---
title: "Connect to Salesforce"
domain: bi-dev-guide-ext-data
topic: connect-to-salesforce
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:02.138Z
estimatedTokens: 288
keywords: [Connect, Salesforce, preparing, data, files, step, loading, external, CRM, Analytics, organization, standard, APIs]
---

# Connect to Salesforce

> After preparing your data files, the next step in loading external data into CRM
    Analytics is to connect to your Salesforce organization by using standard Salesforce
    APIs.

# Connect to Salesforce

After preparing your data files, the next step in loading external data into CRM Analytics is to connect to your Salesforce organization by using standard Salesforce APIs.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=bi_dev_guide_ext_data)

#### Note

The following examples use SOAP API, but you can use any of the Salesforce APIs, such as REST API or Apex. The examples assume that you’re using the Web Services Connector.

To load external data into CRM Analytics, first connect to your Salesforce organization. Use the PartnerConnection object to log in to your organization, as shown in the following example. You need to supply a username, password, and endpoint.

```

```

For more information about the Web Services Connector (WSC), see [Introduction to the Web Services Connector](https://developer.salesforce.com/page/Introduction_to_the_Force.com_Web_Services_Connector). For more information about user authentication, see [Security and the API](https://developer.salesforce.com/docs/atlas.en-us.260.0.api.meta/api/sforce_api_concepts_security.htm) in the SOAP API Developer Guide.

## Code Examples

```
ConnectorConfig config = new ConnectorConfig();
config.setUsername(username);
config.setPassword(password);
config.setAuthEndpoint(endpoint);

PartnerConnection partnerConnection = new PartnerConnection(config);
```
