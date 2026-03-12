---
title: "Use MCP Tools for Mobile LWC and Offline Development (Beta)"
domain: mobile-offline
topic: use-mcp-tools-for-mobile-lwc-and-offline-development-beta
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:34:56.539Z
estimatedTokens: 1266
keywords: [MCP, Tools, Mobile, LWC, Offline, Development, Beta, Model, Context, Protocol, include, Native, Capabilities, help, developers]
---

# Use MCP Tools for Mobile LWC and Offline Development (Beta)

> The Mobile Model Context Protocol (MCP) tools, which include the Mobile Offline tools
    and the Mobile Native Capabilities tools, help developers create Lightning web components that
    adhere to Mobile Offline design patterns and integrate with device-native features.

# Use MCP Tools for Mobile LWC and Offline Development (Beta)

The Mobile Model Context Protocol (MCP) tools, which include the Mobile Offline tools and the Mobile Native Capabilities tools, help developers create Lightning web components that adhere to Mobile Offline design patterns and integrate with device-native features.

We recommend that you use the MCP tools through [Agentforce Vibes Extension](https://developer.salesforce.com/docs/platform/einstein-for-devs/guide/devagent-overview.html). This setup offers the most integrated and robust experience, including real-time code analysis, context-driven completions, and direct access to Salesforce data models.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=mobile_offline)

#### Note

The Salesforce DX MCP Server and its tools are beta. Within the context of the DX MCP Server, tools are categorized as those that are fully ready to use (GA) and those still in preview (NON-GA).

For developers using other clients, such as VS Code with Copilot or Cursor, install the [Salesforce DX MCP Server](https://developer.salesforce.com/docs/atlas.en-us.260.0.sfdx_dev.meta/sfdx_dev/sfdx_dev_mcp_server.htm) to enable the Mobile MCP tools.

## Mobile Toolset

The mobile toolset provides tools to assist in creating Lightning web components that integrate with device-native capabilities such as calendar access, contact access, and document scanning.

-   [Use The mobile Toolset](atlas.en-us.mobile_offline.meta/mobile_offline/dx_mobile_mcp_toolset_mobile.htm "The mobile toolset contains tools to assist in creating Lightning web components that integrate with device-native capabilities such as calendar access, contact access, and document scanning.")

## Mobile Core Toolset

The mobile-core toolset contains a subset of tools from the mobile toolset focused on development, testing, and optimization of offline capable Lightning web components and the most essential device-native capabilities such as barcode scanning, location services, and biometric functionality.

-   [Use The mobile-core Toolset](atlas.en-us.mobile_offline.meta/mobile_offline/dx_mobile_mcp_toolset_core.htm "The mobile-core toolset contains a subset of tools from the mobile toolset focused on development, testing, and optimization of offline capable Lightning web components and the most essential device-native capabilities.")

## Add the Salesforce DX MCP Server to Your MCP Client

The Salesforce DX MCP Server is an npm package called @salesforce/mcp. Adding the DX MCP Server to an MCP client typically involves updating a JSON file that tells the MCP client how to run the @salesforce/mcp package using npx and specifying the args option to configure the DX MCP Server. We recommend that you also use the @latest tag (@salesforce/mcp@latest) so you always get the latest version of the DX MCP Server.

While each MCP client has different JSON files, the format of the args option is always the same. The example below uses Visual Studio Code (VS Code) with GitHub Copilot to configure the mobile and mobile-core toolsets by adding a .vscode/mcp.json to the root of the DX project.

{ "servers": { "Salesforce DX": { "command": "npx", "args": \["-y", "@salesforce/mcp@latest", "--orgs", "DEFAULT\_TARGET\_ORG", "--toolsets", "orgs,metadata,mobile,mobile-core", "--allow-non-ga-tools"\] } } }

For more information on how to update the JSON file for other popular MCP clients (Cursor, Cline, etc.), see [Install and Configure the Salesforce DX MCP Server (Beta)](https://developer.salesforce.com/docs/atlas.en-us.260.0.sfdx_dev.meta/sfdx_dev/sfdx_dev_mcp_server.htm).

-   **[Use the mobile Toolset](atlas.en-us.mobile_offline.meta/mobile_offline/dx_mobile_mcp_toolset_mobile.htm)**
    The mobile toolset contains tools to assist in creating Lightning web components that integrate with device-native capabilities such as calendar access, contact access, and document scanning.
-   **[Use the mobile-core Toolset](atlas.en-us.mobile_offline.meta/mobile_offline/dx_mobile_mcp_toolset_core.htm)**
    The mobile-core toolset contains a subset of tools from the mobile toolset focused on development, testing, and optimization of offline capable Lightning web components and the most essential device-native capabilities.
-   **[Mobile MCP Tools Reference](atlas.en-us.mobile_offline.meta/mobile_offline/dx_mobile_mcp_tools_ref.htm)**
    Mobile MCP tools for LWC offline and device-native capability development are part of the mobile and mobile-core toolsets.

#### See Also

-   [Salesforce Developers: Salesforce DX MCP Server and Tools (Beta)](https://developer.salesforce.com/docs/atlas.en-us.260.0.sfdx_dev.meta/sfdx_dev/sfdx_dev_mcp.htm)

-   [Salesforce Developers: Use Mobile Device Features in Mobile Apps](https://developer.salesforce.com/docs/atlas.en-us.260.0.mobile_offline.meta/mobile_offline/capabilities.htm)

-   [Salesforce Developers: lightning/mobileCapabilities Module](https://developer.salesforce.com/docs/platform/lwc/guide/reference-lightning-mobilecapabilities.html)

## Related Topics

- Use The mobile Toolset (atlas.en-us.mobile_offline.meta/mobile_offline/dx_mobile_mcp_toolset_mobile.htm)
- Use The mobile-core Toolset (atlas.en-us.mobile_offline.meta/mobile_offline/dx_mobile_mcp_toolset_core.htm)
- Use the mobile Toolset (atlas.en-us.mobile_offline.meta/mobile_offline/dx_mobile_mcp_toolset_mobile.htm)
- Use the mobile-core Toolset (atlas.en-us.mobile_offline.meta/mobile_offline/dx_mobile_mcp_toolset_core.htm)
- Mobile MCP Tools Reference (atlas.en-us.mobile_offline.meta/mobile_offline/dx_mobile_mcp_tools_ref.htm)
