---
title: "Create Aura Components Using Salesforce CLI"
domain: lightning
topic: create-aura-components-using-salesforce-cli
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:34:48.247Z
estimatedTokens: 1759
keywords: [Aura, Components, Salesforce, CLI, develop, synchronize, source, code, orgs, version, control, system, Alternatively, Developer, Console]
---

# Create Aura Components Using Salesforce CLI

> To develop Aura components, use Salesforce CLI to synchronize source code between
        your Salesforce orgs and version control system. Alternatively, you can use the Developer
        Console.

# Create Aura Components Using Salesforce CLI

To develop Aura components, use Salesforce CLI to synchronize source code between your Salesforce orgs and version control system. Alternatively, you can use the Developer Console.

Your development environment includes:

-   Salesforce CLI
-   Visual Studio Code or another code editor
-   Salesforce Extension Pack, if using Visual Studio Code
-   A Developer Edition org

To install Salesforce CLI and verify the installation, follow the instructions at [Salesforce CLI Setup Guide](https://developer.salesforce.com/docs/atlas.en-us.260.0.sfdx_setup.meta/sfdx_setup/sfdx_setup_install_cli.htm "HTML (New Window)").

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=lightning)

#### Note

If you have an old version of the CLI installed, run this command to update it.

sf update

Use your favorite code editor with Salesforce CLI. We recommend using Visual Studio Code because its Salesforce Extension Pack provides powerful features for working with Salesforce CLI, the Lightning Component framework, Apex, and Visualforce.

If you choose to work with Visual Studio Code, install it and the Salesforce Extension Pack.

-   [Visual Studio Code](https://code.visualstudio.com/ "HTML (New Window)") (VS Code)
-   [Salesforce Extension Pack](https://marketplace.visualstudio.com/items?itemName=salesforce.salesforcedx-vscode "HTML (New Window)") for Visual Studio Code

To create and deploy an Aura Component to your org:

1.  Create a Salesforce DX project.
    1.  In Visual Studio code, open the Command Palette by pressing **Ctrl+Shift+P** on Windows or **Cmd+Shift+P** on macOS.
    2.  Type SFDX and then select **SFDX: Create Project**.
    3.  Enter HelloAuraComponent and then press **Enter**. Select a folder to store the project.
    4.  Click **Create Project**. You should see something like this in your Visual Studio Code workspace.![Workspace view for new project](/docs/resources/img/en-us/260.0?doc_id=dev_guides%2Faura%2Fimages%2Fvscode_aura.png&folder=lightning)

        ![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=lightning)

        #### Note

        The default Salesforce DX project structure facilitates moving source to and from your orgs. See [Create a Salesforce DX Project](https://developer.salesforce.com/docs/atlas.en-us.260.0.sfdx_dev.meta/sfdx_dev/sfdx_dev_ws_create_new.htm "HTML (New Window)").

2.  Create an Aura component.
    1.  Open the Command Palette and select **SFDX: Create Lightning Component**.
    2.  Enter a name for your component, such as myComponent. Press **Enter**.
    3.  Enter the directory for your component or press **Enter** to accept the default. The default directory is force-app/main/default/aura. You should see a similar directory like this.![Directory example for Aura component](/docs/resources/img/en-us/260.0?doc_id=dev_guides%2Faura%2Fimages%2Fvscode_aura_dir.png&folder=lightning)
    4.  Open **myComponent.cmp** and replace its content.

        ```

        ```

3.  Authenticate to your org. This step uses a Dev Hub org.

    ![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=lightning)

    #### Note

    You can develop Aura components in scratch orgs and non-scratch orgs. A Dev Hub org enables you to create scratch orgs. Configure an org as a Dev Hub by following the instructions at [Salesforce DX Developer Guide](https://developer.salesforce.com/docs/atlas.en-us.260.0.sfdx_dev.meta/sfdx_dev/sfdx_setup_enable_devhub.htm "HTML (New Window)").

    1.  Open the Command Palette and select **SFDX: Authorize a Dev Hub Org**. A browser window opens with a Salesforce login page.
    2.  Log in to your org. If prompted to allow access, click **Allow**.

        After you authenticate in the browser, the CLI remembers your credentials. The success message looks like this.

        13:40:34.679 sfdx org:login:web --alias <alias> --set-default-dev-hub Successfully authorized username@my.org with org ID 00D1a0000000000000 13:41:48.720 sfdx org:login:web --alias <alias> --set-default-dev-hub ended with exit code 0

        If the authentication fails, follow the troubleshooting guide at [Salesforce CLI Setup Guide](https://developer.salesforce.com/docs/atlas.en-us.260.0.sfdx_dev.meta/sfdx_dev/sfdx_dev_troubleshoot.htm "HTML (New Window)").

4.  Deploy your files.
    1.  In the Visual Studio Code terminal, run this command.

        sf project deploy start --source-dir force-app --target-org username@my.org

        The success message looks like this.

        Deployed Source ============================================================================================================ | State Name Type Path | ─────── ─────────── ──────────────────── ────────────────────────────────────────────────────────────────── | Created myComponent AuraDefinitionBundle force-app/main/default/aura/myComponent/myComponent.auradoc | Created myComponent AuraDefinitionBundle force-app/main/default/aura/myComponent/myComponent.cmp | Created myComponent AuraDefinitionBundle force-app/main/default/aura/myComponent/myComponent.cmp-meta.xml | Created myComponent AuraDefinitionBundle force-app/main/default/aura/myComponent/myComponent.css | Created myComponent AuraDefinitionBundle force-app/main/default/aura/myComponent/myComponent.design | Created myComponent AuraDefinitionBundle force-app/main/default/aura/myComponent/myComponent.svg | Created myComponent AuraDefinitionBundle force-app/main/default/aura/myComponent/myComponentController.js | Created myComponent AuraDefinitionBundle force-app/main/default/aura/myComponent/myComponentHelper.js | Created myComponent AuraDefinitionBundle force-app/main/default/aura/myComponent/myComponentRenderer.js


If you make changes to your component via the Developer Console in the Dev Hub org, use the project retrieve start command to retrieve your changes. The source you retrieve overwrites the corresponding source files in your local project.

sf project retrieve start --source-dir force-app --target-org username@my.org

#### See Also

-   [Component Bundles](atlas.en-us.lightning.meta/lightning/components_bundle.htm "A component bundle contains a component or an app and all its related resources.")

-   [*Salesforce DX Developer Guide:* Develop Against Any Org](https://developer.salesforce.com/docs/atlas.en-us.260.0.sfdx_dev.meta/sfdx_dev/sfdx_dev_develop_any_org.htm "Salesforce DX Developer Guide: Develop Against Any Org - HTML (New Window)")

-   [*Salesforce DX Developer Guide:* Pull Source from the Scratch Org to Your Project](https://developer.salesforce.com/docs/atlas.en-us.260.0.sfdx_dev.meta/sfdx_dev/sfdx_dev_pull_md_from_scratch_org.htm "Salesforce DX Developer Guide: Pull Source from the Scratch Org to Your
    Project - HTML (New Window)")

-   [Using the Developer Console](atlas.en-us.lightning.meta/lightning/intro_devconsole.htm "The Developer Console provides tools for developing your Aura components and applications.")

## Code Examples

```
<aura:component>
    Hello World!
</aura:component>
```

## Related Topics

- Component Bundles (atlas.en-us.lightning.meta/lightning/components_bundle.htm)
- Using the Developer Console (atlas.en-us.lightning.meta/lightning/intro_devconsole.htm)
