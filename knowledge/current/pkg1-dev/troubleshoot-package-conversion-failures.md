---
title: "Troubleshoot Package Conversion Failures"
domain: pkg1-dev
topic: troubleshoot-package-conversion-failures
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:35:25.498Z
estimatedTokens: 1245
keywords: [Troubleshoot, Package, Conversion, Failures, possible, error, scenarios, occur, convert, API, Version, RecordType, Errors, Org, Shape]
---

# Troubleshoot Package Conversion Failures

> Here are some possible error scenarios that can occur when you convert a package.

# Troubleshoot Package Conversion Failures

Here are some possible error scenarios that can occur when you convert a package.

## API Version

Salesforce API version 57 is the minimum API version required for converting a package from first-generation packaging (1GP) to second-generation packaging (2GP). If you encounter errors during conversion, first make sure that the package version you’re converting was created using Salesforce API version 57 or later. If your package is using a lower API version, create a 1GP package version using the latest API version, then try the conversion process again.

## RecordType Errors

If the package you’re converting contains a RecordType, you must specify it under object settings in a scratch org definition file. For example,

```

```

Then specify the scratch org definition file when you run the package conversion CLI command.

```

```

## Org Shape Errors

An [org shape](https://developer.salesforce.com/docs/atlas.en-us.260.0.sfdx_dev.meta/sfdx_dev/sfdx_dev_shape_intro.htm) is a stored representation of a source org’s baseline setup. In the conversion process, the org shape is used to create the 2GP version of the 1GP package.

When you convert a 1GP package to 2GP, and you have not previously set up an org shape for the source 1GP packaging org, we create an org shape for you so that we’re using a replica of your 1GP packaging org’s baseline setup. To learn more about org shapes, see [Create and Manage Org Shapes](https://developer.salesforce.com/docs/atlas.en-us.260.0.sfdx_dev.meta/sfdx_dev/sfdx_dev_shape_create_shape.htm) and [Troubleshoot Org Shape](https://developer.salesforce.com/docs/atlas.en-us.260.0.sfdx_dev.meta/sfdx_dev/sfdx_dev_shape_limitations.htm).

If you already have an org shape set up for your 1GP packaging org, we use your existing org shape in the conversion process. When you have an existing org shape, you can sometimes experience org shape issues in the conversion process.

If you encounter an org shape error when you run the sf package convert command, [delete the packaging org’s existing org shape and then recreate the org shape](https://developer.salesforce.com/docs/atlas.en-us.260.0.sfdx_dev.meta/sfdx_dev/sfdx_dev_shape_create_shape.htm). Then, try the conversion process again.

If you continue to experience org shape errors, contact Salesforce Partner Support for help.

## Permission Sets for Code Coverage

When you use the sf package convert command with the \--code-coverage flag, the conversion process runs the packaged Apex tests to validate the code coverage. If the permission sets required to run the tests aren’t defined, the package conversion can fail.

To resolve this issue, add the required permission sets to the sfdx-project.json file. Make sure that the package name is also in the sfdx-project.json file, so that the permission sets can be identified.

This example sfdx-project.json file adds the SampleAccess apexTestAccess permission set.

```

```

After you update the sfdx-project.json file, try the conversion process again.

## Picklist Value Errors

If your package references a custom picklist value that isn’t included in Salesforce’s StandardValueSet, a picklist error occurs during package conversion.

For more details on Standard Value Sets, [StandardValueSet](https://developer.salesforce.com/docs/atlas.en-us.260.0.api_meta.meta/api_meta/meta_standardvalueset.htm) in Metadata API Developer Guide.

To resolve this error, follow these steps.

1.  Create a package.xml file that follows this example. Replace the example AccountType value with the object identified in the error you received. Update the version field to the current Salesforce API version

    ```

    ```

2.  Authenticate to your packaging org. The required picklist values should be present in your packaging org
3.  Run the project retrieve Salesforce CLI command. Replace the variables for org alias and path, with the actual values you need.

    ```

    ```

    After the retrieve command completes, a new file is created in your force-app/main/default/standardValueSets directory. The name of the file will be AccountType.standardValueSet-meta.xml, where AccountType is the object you specified in your package.xml file.

4.  Create a parent and child folder in your project root

    New parent folder: seed-metadata/

    New child folder: standardValueSets/

    ![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=pkg1_dev)

    #### Note

    Only standardValueSet metadata type is allowed in the seed-metadata folder

5.  Move the <object>.standardValueSet-meta.xml file into the seedmetadata/standardValueSets/ directory you created.
6.  Run the package conversion CLI command and specify the \--seed-metadata flag and the path to your seed metadata file.

    sf package convert --package <033xxxx> --seed-metadata=<path-to-seedmetadata>


If you package encounter new errors for other picklist values, repeat these steps.

## Code Examples

```
"objectSettings": {
    "Contact": {
    "defaultRecordType": "default"
    }
    }
```

```
sf package convert -p 033xx0000004Jx3 –-definition-file config/project-scratch-def.json
```

```
{
  "packageDirectories": [
    {
      "versionName": "ver 0.1",
      "versionNumber": "0.1.0.NEXT",
      "path": "<YOUR APP PATH>",
      "default": true,
      "package": "<YOUR PACKAGE NAME>",
      "versionDescription": "",
      "apexTestAccess": {
        "permissionSets": [
          "SampleAccess"
        ],
        "permissionSetLicenses": []
      }
    }
  ],
  "namespace": "<YOUR NAMESPACE>",
  "sfdcLoginUrl": "https://login.salesforce.com",
  "sourceApiVersion": "63.0",
  "packageAliases": {
    "<YOUR PACKAGE ALIAS>": "<YOUR PACKAGE ID>"
  }
}
```

```
<?xml version="1.0" encoding="UTF-8"?>
     <Package xmlns="http://soap.sforce.com/2006/04/metadata">
       <types>
         <members>AccountType</members>
         <name>StandardValueSet</name>
       </types>
       <version>64.0</version>
     </Package>
```

```
sf project retrieve start --manifest package.xml --target-org <org-alias> –-output-dir <path>
```
