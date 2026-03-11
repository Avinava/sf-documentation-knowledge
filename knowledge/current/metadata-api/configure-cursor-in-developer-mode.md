---
title: "Configure Cursor in Developer Mode"
domain: metadata-api
topic: configure-cursor-in-developer-mode
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-11T15:45:53.478Z
keywords: [Configure, Cursor, Developer, Mode, AI-driven, coding, editor, supports, MCP.]
---

# Configure Cursor in Developer Mode

> Cursor is an AI-driven coding editor that supports MCP.

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