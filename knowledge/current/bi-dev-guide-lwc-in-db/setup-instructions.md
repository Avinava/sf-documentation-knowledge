---
title: "Setup Instructions"
domain: bi-dev-guide-lwc-in-db
topic: setup-instructions
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:34:02.481Z
estimatedTokens: 791
keywords: [Setup, Instructions, Salesforce, org, development, Lightning, Web, Components, CRM, Analytics, Component, examples, provided]
---

# Setup Instructions

> Use these instructions to set up your Salesforce org for development of Lightning Web
    Components and to use the CRM Analytics Lightning Web Component examples provided.

# Setup Instructions

Use these instructions to set up your Salesforce org for development of Lightning Web Components and to use the CRM Analytics Lightning Web Component examples provided.

1.  Create or use a Developer Edition (DE) org enabled for CRM Analytics. Sign up for a new CRM Analytics enabled DE org at [developer.salesforce.com/promotions/orgs/analytics-de](https://developer.salesforce.com/promotions/orgs/analytics-de).
2.  If you plan to publish any of your own Lightning Web Component work to App Exchange, enable your DE org as a dev hub. For more information about enabling dev hubs, see [Enable Dev Hub Features in Your Org](https://developer.salesforce.com/docs/atlas.en-us.260.0.sfdx_dev.meta/sfdx_dev/sfdx_setup_enable_devhub.htm).
3.  Create a Connected App, a record client key, and a secret. DO NOT use the JWT flow. For more information on Connected Apps, see [Create a Connected App for Your Dev Hub Org](https://developer.salesforce.com/docs/atlas.en-us.260.0.sfdx_dev.meta/sfdx_dev/sfdx_dev_auth_connected_app.htm).
4.  Install the Salesforce CLI. For detailed instructions, see [Install Salesforce CLI](https://developer.salesforce.com/docs/atlas.en-us.260.0.sfdx_setup.meta/sfdx_setup/sfdx_setup_install_cli.htm#sfdx_setup_install_cli). Alternatively, you can install Visual Studio Code to perform steps 6–10. See [Install Salesforce Extensions for Visual Studio](https://developer.salesforce.com/tools/vscode/en/getting-started/install).
5.  Log in to your DE org via the CLI. For org login web and other command details, see the [CLI command reference guide](https://developer.salesforce.com/docs/atlas.en-us.260.0.sfdx_cli_reference.meta/sfdx_cli_reference/cli_reference_org_commands_unified.htm).
6.  Clone the GitHub repository containing the CRM Analytics Lightning Web Component example components. This repository is structured as a Salesforce DX project for use with CLI commands.

    ```

    ```

7.  See the [README file](https://github.com/forcedotcom/sfdx-analytics) in the repository for more information on the CRM Analytics Lightning Web Component example components.
8.  Deploy the CRM Analytics Lightning Web Component examples in the project from the command line with

    ```

    ```

    or use the SFDX: Deploy Source to Org command in Visual Studio code.

9.  Use and adapt the CRM Analytics LWC examples to create your own custom Lightning Web Component widgets for CRM Analytics dashboards.
10.  Create your own component using the SFDX: Create Analytics Dashboard LWC command in Visual Studio Code or a standard Lightning Web Component with the sf lightning generate component CLI command.

     ![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=bi_dev_guide_lwc_in_db)

     #### Note

     The SFDX: Create Analytics Dashboard LWC command requires installation of the analyticsdx-vscode extension pack.


#### See Also

-   [Getting Started with Lightning Web Components](atlas.en-us.bi_dev_guide_lwc_in_db.meta/bi_dev_guide_lwc_in_db/bi_lwc_in_db_get_started.htm "Before continuing with this guide, we recommend you familiarize yourself with Lightning Web Components.")

## Code Examples

```
git clone https://github.com/forcedotcom/sfdx-analytics.git
```

```
sf project deploy start --source-dir quick-start/main/default/lwc --target-org <USERNAME>
```

## Related Topics

- Getting Started with Lightning Web Components (atlas.en-us.bi_dev_guide_lwc_in_db.meta/bi_dev_guide_lwc_in_db/bi_lwc_in_db_get_started.htm)
