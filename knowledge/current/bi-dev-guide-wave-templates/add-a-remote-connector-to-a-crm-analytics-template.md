---
title: "Add a Remote Connector to a CRM Analytics Template"
domain: bi-dev-guide-wave-templates
topic: add-a-remote-connector-to-a-crm-analytics-template
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:07.367Z
estimatedTokens: 534
keywords: [Add, Remote, Connector, CRM, Analytics, Template, connectors, digest, node, dataflow, referencing, variables.json, editing, ui.json, rules.json]
---

# Add a Remote Connector to a CRM Analytics Template

> Add remote connectors to the digest node of a template dataflow by referencing
  connectors in variables.json and editing ui.json and rules.json.

# Add a Remote Connector to a CRM Analytics Template

Add remote connectors to the digest node of a template dataflow by referencing connectors in variables.json and editing ui.json and rules.json.

## Using the ConnectorType Variable in variables.json

If your app includes a connection to a remote data source, add the connection to the template using a ConnectorType variable to variables.json. ConnectorType is a variation of the StringType variable with an added connectorType attribute. The attribute lets you specify types of connectors to add to the template dataflow, as follows:

```

```

The connectorType attribute must be a string. It corresponds to values in WaveDataConnectorTypeEnum. The value is a “starts with” instead of an “equals,” so using Salesforce includes any connector beginning with that string, such as SalesforceExternal, SalesforceMarketingCloud, and SalesforceMarketingCloudOAuth2. Leave the connectorType value blank to include all defined connectors in the org. You can also use a ConnectorType variable as the itemType in an ArrayType variable.

After using the ConnectorType variable in variables.json, add the variable to ui.json so a user creating an app can choose connectors in the template wizard. The user’s org must have at least one connector of the specified type already authenticated, but that connector doesn’t need existing replicated objects. The wizard displays all remote connectors that match the connectorType attribute’s criteria, as shown here.

![An app creation wizard page showing connector selections](/docs/resources/img/en-us/260.0?doc_id=dev_guides%2Fbi_dev_guide_wave_templates%2Fimages%2Fbi_templatesdev_connector_types_in_wizard.png&folder=bi_dev_guide_wave_templates)

## Add a Rule to Replace the connectionName in the Dataflow

Use the ConnectorType variable in a rule to update the dataflow's digest node connectionName at app creation time. Here’s an example rule:

```

```

Avoid using ${Variables.ExternalConnector} directly in the template workflow JSON. Every time the template is updated from the source app, this variable token is overwritten and removed.

## Code Examples

```
"ExternalConnector" : {
  "label" : "my connector",
  "description" : "This will be the connector.",
  "variableType" : {
      "type" : "ConnectorType",
       "connectorType" : "SalesforceExternal”
  },
  "required" : true
}
```

```
{
"rules" : [
  {
     "name" : "UpdateConnectors",
     "appliesTo" : [ {
         "type" : "workflow",
         "name" : "*"
     }],
     "actions" : [
     {
         "action" : "set",
         "description" : "Use connector for digest node",
         "path" : "$..workflowDefinition.digest_Account.parameters.connectionName",
         "value" : "${Variables.ExternalConnector}"
     }]
  }]
}
```
