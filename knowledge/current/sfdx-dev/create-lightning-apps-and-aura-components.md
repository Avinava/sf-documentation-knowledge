---
title: "Create Lightning Apps and Aura Components"
domain: sfdx-dev
topic: create-lightning-apps-and-aura-components
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:18.230Z
estimatedTokens: 369
keywords: [Lightning, Apps, Aura, Components, Salesforce, CLI, local, project, generated, files, live, directory, package]
---

# Create Lightning Apps and Aura Components

> You can use Salesforce CLI to create Lightning apps and Aura components in your local
  Salesforce DX project. The generated files live in an aura
  directory in a package directory of your project.

# Create Lightning Apps and Aura Components

You can use Salesforce CLI to create Lightning apps and Aura components in your local Salesforce DX project. The generated files live in an aura directory in a package directory of your project.

1.  Open a terminal (macOS and Linux) or command prompt Windows and change to your Salesforce DX project directory.
2.  Create the aura directory in the location you want to generate the Lightning app and Aura components. For example, if you want to generate them in the default package directory, create the force-app/main/default/aura directory if it doesn’t exist.
3.  Create a Lightning app or an Aura component; specify the app or component name with the \--name flag and the aura directory with the \--output-dir flag.

    ```

    ```

    ```

    ```


Use the project deploy start command to deploy the new Lightning app and Aura component to your org.

```

```

#### See Also

-   [*VS Code Command*: SFDX: Create Aura App|Component|Event|Interface](https://developer.salesforce.com/docs/platform/sfvscode-extensions/guide/aura-writing.html "VS Code Command: SFDX: Create Aura App|Component|Event|Interface  - HTML (New Window)")

-   [Create Lightning Web Components](atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_develop_create_lwc.htm "You can use Salesforce CLI to create Lightning web components in your local Salesforce DX project. The generated files live in a lwc directory in a package directory of your project.")

## Code Examples

```
sf lightning generate app --name myApp --output-dir force-app/main/default/aura
```

```
sf lightning generate component --type aura --name myAuraComponent --output-dir force-app/main/default/aura
```

```
sf project deploy start --metadata AuraDefinitionBundle:myApp --metadata AuraDefinitionBundle:myAuraComponent
```

## Related Topics

- Create Lightning Web Components (atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_develop_create_lwc.htm)
