---
title: "Install Local Development Server Plugin"
domain: field-service
topic: install-local-development-server-plugin
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:33:55.171Z
estimatedTokens: 212
keywords: [Install, Local, Development, Server, Plugin, Whether, you’re, debugging, component, iOS, Android, LWC, mobile]
---

# Install Local Development Server Plugin

> Whether you’re debugging your component for iOS or Android, you must first install the
    LWC Development Server for mobile.

# Install Local Development Server Plugin

Whether you’re debugging your component for iOS or Android, you must first install the LWC Development Server for mobile.

1.  In a terminal window in VS Code or Terminal, run the following command to ensure you’re using the latest version of Salesforce CLI.

    sf update

    ![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=field_service_dev)

    #### Note

    If you encounter an error when updating Salesforce CLI, see [Update Salesforce CLI](https://developer.salesforce.com/docs/atlas.en-us.260.0.sfdx_setup.meta/sfdx_setup/sfdx_setup_update_cli.htm "HTML (New Window)") for troubleshooting instructions.

2.  In the same terminal window, run the following command to install the LWC Development Server for mobile.

    sf plugins install @salesforce/lwc-dev-server
