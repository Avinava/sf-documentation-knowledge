---
title: "Use Live Datasets in a CRM Analytics Template"
domain: bi-dev-guide-wave-templates
topic: use-live-datasets-in-a-crm-analytics-template
apiVersion: 67.0
release: summer-26-v67
docType: concept
lastCollected: 2026-03-12T09:34:07.705Z
estimatedTokens: 697
keywords: [Live, Datasets, CRM, Analytics, Template, liveConnection, attribute, bring, connections, Snowflake, source, tables, Creating, app, generates]
---

# Use Live Datasets in a CRM Analytics Template

> Use live datasets in your CRM Analytics template with the liveConnection attribute to bring in live connections to Snowflake source
		tables. Creating a template from a source app with live datasets generates the dataset
		information, but there are considerations for successful app creation for your
		users.

# Use Live Datasets in a CRM Analytics Template

Use live datasets in your CRM Analytics template with the liveConnection attribute to bring in live connections to Snowflake source tables. Creating a template from a source app with live datasets generates the dataset information, but there are considerations for successful app creation for your users.

## Live Datasets in template-info.json

Live datasets are generated when a template is created from the source app containing a live connection to Snowflake. Like a standard SFDC dataset, a live dataset contains a name attribute and an optional label attribute. Live datasets also contain a liveConnection attribute with the Snowflake source table information.

```

```

## Live Datasets in Templated Assets

When you create your template from your source app with a live dataset, the template generation tokenizes the live dataset, just as it does for standard SFDC datasets. Here’s an example of a tokenized live dataset in a dashboard template file.

```

```

## Considerations for Templates with Live Datasets

For a user to create an app from your template, their consumer org must have an existing connection to Snowflake. This Snowflake connection must have a developer name with the exact value that is specified for the connectionName of the dataset entry in the template-info.json file. As a template developer, you must document that your template relies on a Snowflake connection with a specific name in order for app creation from the template to succeed. Prompt your users to verify a Snowflake connection on a custom Visualforce page that you can create and use in the configuration wizard.

![Warning](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_warning.png&folder=bi_dev_guide_wave_templates)

#### Warning

If a Snowflake connection developer name doesn’t match the connectionName in the consumer org, app creation from the template fails. The app creation notification email notifies the user of the failure.

To clarify that a Snowflake connection is for use in a templated app, it’s recommended that you create a unique, longer connectionName value. The previous examples highlight using a unique and long connection name.

When an app instance is created from your template, the connection information is cloned for each instance. When an app instance is deleted, the cloned connection associated with that app is also deleted, as long as no other live datasets are referencing the connection. The original Snowflake connection created to support templated app instances isn’t deleted, in case other app instances are using the connection.

#### See Also

-   [Create an App](https://help.salesforce.com/s/articleView?id=sf.bi_explorer_direct_data_snowflake_create_connection.xml&language=en_US)

## Code Examples

```
"datasetFiles": [
    {
        "name": "my_live_data",
        "label": "My Live Dataset",
        "liveConnection": {
            "connectionName": "myuniquelongconnectioname",
            "sourceObjectName": "Account"
        }
    }
]
```

```
"connectionName" : "${App.Connections.myuniquelongconnectioname.Name}",
"datasets" : [
    {
        "name" : "${App.Datasets.my_live_data.Name}"
    } 
],
```
