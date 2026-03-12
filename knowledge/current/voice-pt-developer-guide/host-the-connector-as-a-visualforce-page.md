---
title: "Host the Connector as a Visualforce Page"
domain: voice-pt-developer-guide
topic: host-the-connector-as-a-visualforce-page
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:36:21.913Z
estimatedTokens: 424
keywords: [Host, Connector, Visualforce, Salesforce, package]
---

# Host the Connector as a Visualforce Page

> You can also host your connector as a Visualforce page in Salesforce and package
  it.

# Host the Connector as a Visualforce Page

You can also host your connector as a Visualforce page in Salesforce and package it.

1.  Inside your connector, call this command:

    ```

    ```

2.  Add these files to main/default/staticresources in the Salesforce DX project.
3.  Make sure you have the corresponding \-meta.xml files for the resources added in staticresources. For help adding static resources, see [Salesforce DX Project Structure and Source Format](https://developer.salesforce.com/docs/atlas.en-us.260.0.sfdx_dev.meta/sfdx_dev/sfdx_dev_source_file_format.htm)**.**
4.  Create a connector Visualforce page inside scv-external-telephony-quickstart/force-app/main/default/pages/ as follows:

    ```

    ```

5.  Update adapterUrl and reqAdapterUrl to /apex/<namespace>\_\_<connector visual force page name> in the ConversationVendorInfo file of your Salesforce DX project.
6.  Create and install a new package version.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=voice_pt_developer_guide)

#### Note

For different calls to SCRT2 such as transcription, call recording, and create voice call (salesforce-scrt.com/telephony/v1 ), you need a standalone server which can receive requests from the Visualforce page connector and call SCRT2 using JWT.

Alternatively, you can use the Apex web service. The Visualforce page connector can call the Apex web service, which can call the SCRT2 endpoints with a valid JWT token for voice call creation and transcription. For information on Apex Web Services, see [Exposing Apex Classes as REST Web Services](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/apex_rest.htm).

## Code Examples

```
// Generates files at dist/ for the connector
$ npm run build:dev
// (you can use npm run build:prod to generate minified js files)
```

```
<apex:page> 
<apex:includeScript value="{!$Resource.REPLACE_WITH_CONNECTOR_RESOURCE_NAME}"/> 
</apex:page>
```
