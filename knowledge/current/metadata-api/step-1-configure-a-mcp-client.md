---
title: "Step 1: Configure a MCP Client"
domain: metadata-api
topic: step-1-configure-a-mcp-client
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:33:40.574Z
estimatedTokens: 1120
keywords: [Step, Configure, MCP, Client, connect, servers, hosted, Salesforce, org, quick, start, provide, guidance, how, Agentforce]
---

# Step 1: Configure a MCP Client

> Configure a client to connect to MCP servers hosted in your Salesforce org. In this
        quick start guide, we provide guidance on how to configure Agentforce Vibes, Cursor, and
        Claude.

# Step 1: Configure a MCP Client

Configure a client to connect to MCP servers hosted in your Salesforce org. In this quick start guide, we provide guidance on how to configure Agentforce Vibes, Cursor, and Claude.

## Configure Agentforce Vibes

The Agentforce Vibes extension is an AI-powered developer tool that's available as an easy-to-install Visual Studio Code extension.

1.  Install the [Agentforce Vibes VS Code Extension](https://developer.salesforce.com/docs/platform/einstein-for-devs/guide/einstein-setup.html)
2.  From the VS Code Activity Bar, click the Agentforce icon (![Graphic of Vibe Codey](/docs/resources/img/en-us/260.0?doc_id=dev_guides%2Fapi_meta%2Fimages%2Fvibecodey_icon.png&folder=api_meta)).
3.  To open the MCP Servers interface, click the icon (![Graphic of Servers](/docs/resources/img/en-us/260.0?doc_id=dev_guides%2Fapi_meta%2Fimages%2Fserver.png&folder=api_meta)) in the top-right corner of the Agentforce panel.

    The MCP Servers interface is divided into three main tabs:

    -   **Marketplace:** Discover and install pre-configured MCP servers (if enabled).
    -   **Remote Servers:** Connect to existing MCP servers via URL endpoints.
    -   **Installed:** Manage your connected MCP servers.

4.  In the MCP interface, click the **Remote Servers** tab.
5.  To open up the a4d\_mcp\_settings.json file, select **Edit Configuration**.
6.  Update the a4d\_mcp\_settings.json file and include this code.

    ```

    ```

7.  Replace placeholder values in the a4d\_mcp\_settings.json file.
    1.  Replace YOUR\_CONSUMER\_KEY with the consumer key that you saved from your external client app setup.

        ![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=api_meta)

        #### Note

        The client\_secret is an empty string. Leave this string blank.

    2.  If you're connecting to a scratch or sandbox org, change the URL to https://api.salesforce.com/platform/mcp/v1-beta.2/sandbox/platform/salesforce-api-context.

Agentforce attempts to connect to the server and display the connection status. Verify the connection using the status indicators. For more details, review the Managed Connected Servers, or the Troubleshoot Connection Issues sections in [Connect to Remote MCP Servers](https://developer.salesforce.com/docs/platform/einstein-for-devs/guide/devagent-mcpservers.html) in the Agentforce Vibes Extension Guide.

## Configure Cursor in Developer Mode

Cursor is an AI-driven coding editor that supports MCP.

1.  Select **Cursor** | **Settings** | **Cursor Settings** | **MCP**
2.  Click **New MCP Server**.

    This creates a file called mcp.json.

3.  Replace the contents of mcp.json file with this code.

    ```

    ```

4.  Replace placeholder values in the mcp.json file.
    1.  Replace YOUR\_CONSUMER\_KEY with the consumer key that you saved from your external client app setup.

        ![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=api_meta)

        #### Note

        The client\_secret is an empty string. Leave this string blank.

    2.  If you're connecting to a scratch or sandbox org, change the URL to https://api.salesforce.com/platform/mcp/v1-beta.2/sandbox/platform/salesforce-api-context.

You can now test the client's connection to the MCP server.

1.  From Cursor, select **Settings**, and then select **Cursor Settings**.
2.  From the Cursor Settings page, select **MCP & Integrations**.
3.  In the MCP Tools section, locate salesforce\_api\_context. Confirm that get\_metadata\_api\_context is enabled.

## Configure Claude Desktop in Developer Mode

Claude is an AI assistant that you configure to connect to Salesforce Hosted MCP Servers. Configure Claude using a special Claude Desktop Extensions file.

1.  Download salesforce-hosted-mcp-servers.mcpb from this [GitHub repository](https://github.com/forcedotcom/mcp-hosted). This is the extension file for Salesforce Hosted MCP Servers.
2.  Double-click the salesforce-hosted-mcp-servers.mcpb file. The Claude desktop client opens and shows the Salesforce extension.
3.  Click **Install**.
4.  In Server Name, enter platform/salesforce-api-context.
5.  In Consumer Key, paste the consumer key that you saved from the external client app, then click **Save**.

    A toggle to enable the extension appears.

6.  Enable the extension using the toggle.

    If you encounter an error, quit and restart Claude.


You can now test the client's connection to the MCP server.

## Code Examples

```
{
    "mcpServers": {
        "salesforce-api-context": {
            "command": "npx",
            "args": [
                "-y",
                "mcp-remote@0.1.18",
                "https://api.salesforce.com/platform/mcp/v1-beta.2/platform/salesforce-api-context",
                "8080",
                "--static-oauth-client-info",
                "{"client_id":"YOUR_CONSUMER_KEY","client_secret":""}"
            ]
        }
    }
}
```

```
{
    "mcpServers": {
        "salesforce-api-context": {
            "command": "npx",
            "args": [
                "-y",
                "mcp-remote@0.1.18",
                "https://api.salesforce.com/platform/mcp/v1-beta.2/platform/salesforce-api-context",
                "8080",
                "--static-oauth-client-info",
                "{"client_id":"YOUR_CONSUMER_KEY","client_secret":""}"
            ]
        }
    }
}
```
