---
title: "Create Lightning Web Components"
domain: sfdx-dev
topic: create-lightning-web-components
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:18.235Z
estimatedTokens: 539
keywords: [Lightning, Web, Components, Salesforce, CLI, local, project, generated, files, live, lwc, directory, package]
---

# Create Lightning Web Components

> You can use Salesforce CLI to create Lightning web components in your local
        Salesforce DX project. The generated files live in a lwc directory in a package directory of your project.

# Create Lightning Web Components

You can use Salesforce CLI to create Lightning web components in your local Salesforce DX project. The generated files live in a lwc directory in a package directory of your project.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=sfdx_dev)

#### Note

Want to develop your Lightning web components in a real-time preview of your Lightning app or Experience Cloud site? Try [the new Local Dev experience](https://developer.salesforce.com/docs/platform/lwc/guide/get-started-test-components.html "HTML (New Window)"), which lets you iterate faster on your components without deploying code or manually refreshing the preview.

1.  Open a terminal (macOS and Linux) or command prompt Windows and change to your Salesforce DX project directory.
2.  Create the lwc directory in the location you want to generate the Lightning app and Aura components. For example, if you want to generate them in the default package directory, create the force-app/main/default/aura directory if it doesn’t exist.
3.  Create the Lightning web component; specify the component name with the \--name flag and the lwc directory with the \--output-dir flag.

    ```

    ```


Use the project deploy start command to deploy your new Lightning web component to your org.

```

```

#### See Also

-   [Create Lightning Apps and Aura Components](atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_develop_create_lightning.htm "You can use Salesforce CLI to create Lightning apps and Aura components in your local Salesforce DX project. The generated files live in an aura directory in a package directory of your project.")

-   [*Lightning Web Components Dev Guide*: Introducing Lightning Web Components](https://developer.salesforce.com/docs/component-library/documentation/lwc "Lightning Web Components Dev Guide: Introducing Lightning
    Web Components - HTML (New Window)")

-   [*VS Code Command*: SFDX: Create Lightning Web Component | Test](https://developer.salesforce.com/docs/platform/sfvscode-extensions/guide/lwc-writing.html "VS Code Command: SFDX: Create Lightning Web Component | Test  - HTML (New Window)")

## Code Examples

```
sf lightning generate component --type lwc --name myLightningWebComponent --output-dir force-app/main/default/lwc
```

```
sf project deploy start --metadata LightningComponentBundle:myLightningWebComponent
```

## Related Topics

- Create Lightning Apps and Aura Components (atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_develop_create_lightning.htm)
