---
title: "Deploy a Sample Project to Your Org"
domain: api-streaming
topic: deploy-a-sample-project-to-your-org
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:34:00.206Z
estimatedTokens: 954
keywords: [Deploy, Sample, Project, Org, Salesforce, CLI, copy, components]
---

# Deploy a Sample Project to Your Org

> Use the Salesforce CLI to copy all project components to your org.

# Deploy a Sample Project to Your Org

Use the Salesforce CLI to copy all project components to your org.

1.  Download the [Salesforce Durable Streaming Demo.zip](https://github.com/developerforce/SalesforceDurableStreamingDemo/archive/master.zip) file from the developerforce github repository.

    You can browse the contents of the project at [https://github.com/developerforce/SalesforceDurableStreamingDemo](https://github.com/developerforce/SalesforceDurableStreamingDemo). The sample app contains two Visualforce pages with related components and some common components. These common components are installed in your org when you deploy the .zip file.

    | Component | Description |
    | --- | --- |
    | cometdReplayExtension | Static resource representing a CometD extension in JavaScript. This extension implements the replay mechanism for Streaming API. |
    | cometd, jquery, jquery_cometd, json2 | Static resources for CometD 3.1.0, jquery, and JSON. |

    These app components are for the Durable PushTopic Streaming page.

    | Component | Description |
    | --- | --- |
    | DurablePushTopicEventDisplay | A Visualforce component that uses the CometD extension cometdReplayExtension to replay events. The extension handles the handshake and subscribe calls and sets replay options.Having the replay functionality in a Visualforce component allows you to add it to your Visualforce page for reuse in your app. |
    | DurablePushTopicStreamingController | Apex controller that holds the logic behind the Visualforce page. |
    | DurablePushTopicStreamingDemo Visualforce Page | Visualforce page. This page is the main page you use to generate, view, and replay durable PushTopic events. |

    These app components are for the Durable Generic Streaming page.

    | Component | Description |
    | --- | --- |
    | DurableGenericEventDisplay | A Visualforce component that uses the CometD extension cometdReplayExtension to replay events. The extension handles the handshake and subscribe calls and sets replay options.Having the replay functionality in a Visualforce component allows you to add it to your Visualforce page for reuse in your app. |
    | DurableGenericStreamingController | Apex controller that holds the logic behind the Visualforce page. |
    | StreamingChannel | Custom object used for creating streaming channels. |
    | DurableGenericStreamingDemo Visualforce Page | Visualforce page. This page is the main page you use to generate, view, and replay durable generic events. |
    | DurableStreamingDemo Permission Set | Permission set used to grant read and create access to the StreamingChannel sObject. |

    You use the Salesforce CLI to migrate the zip file to your org.

2.  To download and install the Salesforce CLI, see [Install Salesforce CLI](https://developer.salesforce.com/docs/atlas.en-us.260.0.sfdx_setup.meta/sfdx_setup/sfdx_setup_install_cli.htm) in the Salesforce CLI Setup Guide.
3.  To log in to your org, enter this CLI command in a Terminal window, and then log in via the web browser.

    ```

    ```

4.  To deploy the zip file that you downloaded, enter this CLI command. Replace <Path to zip file> with the path to the zip that you downloaded, and replace <Username> with your org’s username.

    ```

    ```

    After the command executes, it prints out a list of the components that were deployed to your org.


#### See Also

-   [*GitHub*: Streaming Replay Client Extensions](https://github.com/developerforce/StreamingReplayClientExtensions "GitHub: Streaming Replay Client Extensions - HTML (New Window)")

-   [*Salesforce CLI Command Reference*](https://developer.salesforce.com/docs/atlas.en-us.260.0.sfdx_cli_reference.meta/sfdx_cli_reference/cli_reference_top.htm "Salesforce CLI Command Reference - HTML (New Window)")

## Code Examples

```
sf org login web
```

```
sf project deploy start --metadata-dir <Path to zip file> -o <Username>
```
