---
title: "Create a Custom Object"
domain: sfdx-dev
topic: create-a-custom-object
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:36:18.238Z
estimatedTokens: 530
keywords: [Custom, Salesforce, CLI, generate, metadata, files, new, objects, local, project]
---

# Create a Custom Object

> You can use Salesforce CLI to generate the metadata files for new custom objects in your local Salesforce DX project.

# Create a Custom Object

You can use Salesforce CLI to generate the metadata files for new custom objects in your local Salesforce DX project.

1.  Open a terminal (macOS and Linux) or command prompt Windows and change to your Salesforce DX project directory.
2.  Run the interactive schema generate sobject command. You must specify a label for your new custom object with the \--label flag. The command uses this label to provide intelligent suggestions for other object properties, such as its API name and plural label.

    ```

    ```

    Answer all the questions about your new object, such as the location of the generated files in your Salesforce DX project and whether to enable various object properties.


After you create your custom object:

-   Create a custom field on your new object with the interactive schema generate field command, which generates the necessary metadata files in your project. You can also use the command to create a custom field on a standard object, such as Account.
-   Create a custom tab for your new object with the schema generate tab command.

Then deploy your new custom object to your org.

```

```

The first time you deploy your new custom object to a source-tracking org, the org creates additional properties and sets new defaults on it. For this reason, we recommend that you immediately retrieve the custom object so your local source files are updated with this new information.

#### See Also

-   [*Salesforce Help*: Fields Required for Creating Custom Objects](https://help.salesforce.com/s/articleView?id=platform.dev_objectcreate.htm&type=5&language=en_US "Salesforce Help: Fields Required for Creating Custom Objects - HTML (New Window)")

-   [*Salesforce Help*: Custom Field Types](https://help.salesforce.com/s/articleView?id=platform.custom_field_types.htm&type=5&language=en_US "Salesforce Help: Custom Field Types - HTML (New Window)")

-   [*Salesforce Help*: Custom Field Attributes](https://help.salesforce.com/s/articleView?id=platform.custom_field_types.htm&type=5&language=en_US "Salesforce Help: Custom Field Attributes - HTML (New Window)")

## Code Examples

```
sf schema generate sobject --label "New Object"
```

```
sf project deploy start --metadata CustomObject:NewObject__c --target-org myscratch
```
