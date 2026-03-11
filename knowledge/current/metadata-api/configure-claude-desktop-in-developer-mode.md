---
title: "Configure Claude Desktop in Developer Mode"
domain: metadata-api
topic: configure-claude-desktop-in-developer-mode
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T15:45:53.478Z
keywords: [Configure, Claude, Desktop, Developer, Mode, assistant, configure, connect, Salesforce, Hosted, MCP, Servers., special, Extensions, file.]
---

# Configure Claude Desktop in Developer Mode

> Claude is an AI assistant that you configure to connect to Salesforce Hosted MCP
            Servers. Configure Claude using a special Claude Desktop Extensions file.

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