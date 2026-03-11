---
title: "Configure Agentforce Vibes"
domain: metadata-api
topic: configure-agentforce-vibes
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-11T15:45:53.478Z
keywords: [Configure, Agentforce, Vibes, extension, AI-powered, developer, tool, that's, available, easy-to-install, Visual, Studio, Code, extension.]
---

# Configure Agentforce Vibes

> The Agentforce Vibes extension is an AI-powered developer tool that's available
            as an easy-to-install Visual Studio Code extension.

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