---
title: "Create an Apex Class"
domain: sfdx-dev
topic: create-an-apex-class
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:36:18.227Z
estimatedTokens: 530
keywords: [Apex, Salesforce, CLI, classes, local, project, generated, files, live, directory, package]
---

# Create an Apex Class

> You can use Salesforce CLI to create Apex classes in your local Salesforce DX project.
  The generated class files live in a classes directory in a
  package directory of your project.

# Create an Apex Class

You can use Salesforce CLI to create Apex classes in your local Salesforce DX project. The generated class files live in a classes directory in a package directory of your project.

1.  Open a terminal (macOS and Linux) or command prompt Windows and change to your Salesforce DX project directory.
2.  Create the classes directory in the location you want to generate the Apex class. For example, if you want to generate it in the default package directory, create the force-app/main/default/classes directory if it doesn’t exist.
3.  Create the Apex class; specify the class name with the \--name flag and the classes directory with the \--output-dir flag.

    ```

    ```


The command generates two files:

-   myClass.cls-meta.xml—metadata file
-   myClass.cls—Apex source file

By default, the command creates an empty Apex class. However, you can select different templates, depending on what you’re creating, by specifying the \--template flag.

| Template | Description | More Information in Apex Developer Guide |
| --- | --- | --- |
| DefaultApexClass (default) | Standard Apex class. | Classes |
| ApexException | Use Apex built-in exceptions or create custom exceptions. All exceptions have common methods. | Exception Class and Built-in Exceptions |
| ApexUnitTest | Use the @isTest annotation to define classes and methods that only contain code used for testing your application. | isTest Annotation |
| InboundEmailService | Use email services to process the contents, headers, and attachments of inbound email. | Apex Email Service |

This example selects the ApexException template.

```

```

Use the project deploy start command to deploy the new Apex class to your org.

```

```

#### See Also

-   [*Apex Developer Guide*](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/apex_dev_guide.htm "Apex Developer Guide - HTML (New Window)")

-   [*VS Code Command*: SFDX: Create Apex Class](https://developer.salesforce.com/docs/platform/sfvscode-extensions/guide/apex-overview.html "VS Code Command: SFDX: Create Apex Class  - HTML (New Window)")

## Code Examples

```
sf apex generate class --name myClass --output-dir force-app/main/default/classes
```

```
sf apex generate class --name myException --template ApexException --output-dir force-app/main/default/classes
```

```
sf project deploy start --metadata ApexClass:myClass
```
