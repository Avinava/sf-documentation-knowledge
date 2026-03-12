---
title: "Install and Configure the Salesforce DX MCP Server (Beta)"
domain: sfdx-dev
topic: install-and-configure-the-salesforce-dx-mcp-server-beta
apiVersion: 67.0
release: summer-26-v67
docType: release-note
lastCollected: 2026-03-12T09:36:18.322Z
estimatedTokens: 3796
keywords: [Install, Configure, Salesforce, MCP, Server, Beta, client, start, tools, Add, Agentforce, Vibes, Code, Copilot, Clients]
---

# Install and Configure the Salesforce DX MCP Server (Beta)

> Install the Salesforce DX MCP Server in your MCP client to start using the tools.

# Install and Configure the Salesforce DX MCP Server (Beta)

Install the Salesforce DX MCP Server in your MCP client to start using the tools.

Follow these steps:

1.  [Install Node.js on your computer](https://nodejs.org/en). We recommend you use the [Active LTS version](https://nodejs.org/en/about/previous-releases).
2.  [Add the Salesforce DX MCP Server to Your MCP Client (Beta)](#sfdx_dev_mcp_add_server_to_client "The Salesforce DX MCP Server is an npm package called @salesforce/mcp. Adding the DX MCP Server to an MCP client typically involves updating a JSON file that tells the MCP client how to run the @salesforce/mcp package using npx and specifying the args option to configure the DX MCP Server. We recommend that you also use the @latest tag (@salesforce/mcp@latest) so you always get the latest version of the DX MCP Server.").
3.  [Configure the Salesforce DX MCP Server for Your Environment (Beta)](#sfdx_dev_mcp_configure_orgs_toolsets "After you’ve added the basic Salesforce DX MCP Server to your MCP client, configure the server for your specific environment by updating the args option with new flags or new values to the flags.").

## Add the Salesforce DX MCP Server to Your MCP Client (Beta)

The Salesforce DX MCP Server is an npm package called @salesforce/mcp. Adding the DX MCP Server to an MCP client typically involves updating a JSON file that tells the MCP client how to run the @salesforce/mcp package using npx and specifying the args option to configure the DX MCP Server. We recommend that you also use the @latest tag (@salesforce/mcp@latest) so you always get the latest version of the DX MCP Server.

While each MCP client has different JSON files, the format of the args option is always the same.

### Agentforce Vibes

The Salesforce DX MCP Server is pre-configured in Agentforce Vibes. See [Agentforce Vibes Extension Includes the Salesforce DX MCP Server](atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_mcp.htm#a4d-includes-dxserver).

### VS Code with Copilot

See the [Quick Start Using the VS Code With Copilot MCP Client (Beta)](atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_mcp_get_started.htm "Get started with the Salesforce DX MCP Server using Visual Studio Code (VS Code) as the MCP client. After you configure it with the Salesforce DX MCP Server, you then use GitHub Copilot and natural language to easily execute typical Salesforce DX development tasks, such as creating scratch orgs, deploying or retrieving metadata, and viewing org records."), which uses VS Code with GitHub Copilot as the example. The topic includes details about which JSON file to update and an example JSON snippet.

### Other MCP Clients

To configure the Salesforce DX MCP Server in other MCP clients, such as Claude Code and Cursor, see the [README](https://github.com/salesforcecli/mcp/blob/main/README.md "HTML (New Window)") for the Salesforce DX MCP Server GitHub repository.

## Configure the Salesforce DX MCP Server for Your Environment (Beta)

After you’ve added the basic Salesforce DX MCP Server to your MCP client, configure the server for your specific environment by updating the args option with new flags or new values to the flags.

Surround the flag name and its value each in double quotes, and separate all flags and values with commas. Boolean flags don't take a value.

Let’s just run through some examples so you get the idea. Then see later sections for the full list of values you can specify for the args option and its flags.

This basic example (for the VS Code with Copilot MCP client) configures the DX MCP Server to access your default org and enables the core DX toolsets.

```

```

The "-y", "@salesforce/mcp@latest" part tells the npx command to automatically install the latest version of the @salesforce/mcp npm package instead of asking permission. Don't change this.

From now on we’ll show examples of just the args option, which is the key configuration option for the Salesforce DX MCP Server.

This example shows how to enable just the data, orgs, and metadata toolsets and allow access to two orgs: your default Dev Hub org and an org with username test-org@example.com.

```

```

This example shows how to configure access to two orgs for which you specified aliases when you authorized them (my-scratch-org and my-dev-hub).

```

```

This example allows the MCP Server to access all your authorized orgs, all toolsets, and tools that are not yet generally available. In other words, this enables everything! Only do this if you truly need everything.

```

```

This example enables five tool sets (data, orgs, metadata, lwc-experts, and code-analysis) and a specific tool (run\_apex\_test) from a different toolset.

```

```

This example allows access to both your default org and default Dev Hub org. It also enables three specific MCP tools rather than using toolsets. The core toolset is always enabled, even if you don't specify it in the server configuration.

```

```

This example enables the orgs toolset and the specific tool deploy\_metadata.

```

```

### Valid Values for the args Option

These are the flags that you can pass to the args option.

| Flag Name | Required? | Description |
| --- | --- | --- |
| --orgs | Yes | One or more orgs that you've locally authorized and are allowing the MCP Server to use.You must specify at least one org.See Valid Values for the --orgs Flag. |
| --toolsets | You must specify at least one of these flags: --toolsets, --tools, --dynamic-tools. | Groups of MCP tools based on functionality. Allows you to run the DX MCP Server with only the tools you require, which in turn reduces the LLM context.See Valid Values for the --toolsets Flag. |
| --tools | You must specify at least one of these flags: --toolsets, --tools, --dynamic-tools. | Specific MCP tools you want to enable.See Valid Values for the --tools Flag. |
| --no-telemetry | No | Boolean flag to disable telemetry, which is the automatic collection of data for monitoring and analysis.Telemetry is enabled by default, so specify this flag to disable it. |
| --debug | No | Boolean flag that requests that the DX MCP Server print debug logs.Debug mode is disabled by default.Not all MCP clients expose MCP logs, so this flag might not work in your environment. |
| --allow-non-ga-tools | No | Boolean flag to allow the DX MCP Server to use both the generally available (GA) and NON-GA tools that are in the toolset you specify.By default, the DX MCP Server uses only the tools marked GA. |
| --dynamic-tools | You must specify at least one of these flags: --toolsets, --tools, --dynamic-tools. | (experimental) Boolean flag that enables dynamic tool discovery and loading. When specified, the DX MCP Server starts with a minimal set of core tools and loads new tools as needed.This flag is useful for reducing the initial context size and improving LLM performance. Dynamic tool discovery is disabled by default.This feature works in VS Code and Cline but may not work in other MCP clients. |

### Valid Values for the --orgs Flag

The Salesforce MCP tools require an org, and so you must include the required \--orgs flag and specify at least one authorized org. Separate multiple values with commas.

We recommend that, for security reasons, you don’t automatically specify all the orgs you’ve authorized but instead only the orgs you want the DX MCP Server to access.

![Tip](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_tip.png&folder=sfdx_dev)

#### Tip

If you’re limiting the MCP tools to those that don’t typically require a Salesforce org (such as Salesforce Code Analyzer tools in the code-analysis toolset), you must still set the \--orgs flag, such as \--orgs DEFAULT\_TARGET\_ORG. You don’t get an error on server start, even if you haven’t set a default org.

You must explicitly [authorize the orgs](https://developer.salesforce.com/docs/atlas.en-us.260.0.sfdx_dev.meta/sfdx_dev/sfdx_dev_auth_web_flow.htm) on your computer before the MCP server can access them. Use the org login web Salesforce CLI command or the **VS Code SFDX: Authorize an Org** command from the command palette.

These are the available values for the \--orgs flag.

| Flag Value | Description |
| --- | --- |
| DEFAULT_TARGET_ORG | Allow access to your default org.If you've set a local default org in your DX project, the DX MCP Server uses it. If not, the server uses a globally-set default org. |
| DEFAULT_TARGET_DEV_HUB | Allow access to your default Dev Hub org.If you've set a local default Dev Hub org in your DX project, the DX MCP Server uses it. If not, the server uses a globally-set default Dev Hub org. |
| ALLOW_ALL_ORGS | Allow access to all authorized orgs.Use caution with this value! |
| <username or alias> | Allow access to a specific org by specifying its username or alias, such as my-org (alias) or test@example.com (username). |

### Valid Values for the \--toolsets Flag

The Salesforce DX MCP Server uses toolsets to logically group MCP tools based on functionality; use the \--toolsets flag to specify the ones you want to enable for your environment. Separate multiple toolsets commas.

![Tip](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_tip.png&folder=sfdx_dev)

#### Tip

If you enable an MCP tool with the \--toolsets flag, you can then disable it in your MCP client, which takes precedence.

These are the available toolsets. For some of these toolsets, the complete list of included tools is documented in separate documentation, as indicated.

| Toolset Name | Description |
| --- | --- |
| all | Enables all available tools from all toolsets.We recommend that you configure only the toolsets you’re going to use, rather than all of them with this value. The DX MCP Server includes over 60 MCP tools, so enabling them all in your MCP client can overwhelm the LLM context. |
| core | Core set of DX MCP tools. This toolset is always enabled.See Core DX MCP Tools Reference for the included tools. |
| orgs | Tools to manage your authorized orgs.See Core DX MCP Tools Reference for the included tools. |
| data | Tools to manage the data in your org, such as listing all accounts.See Core DX MCP Tools Reference for the included tools. |
| users | Tools to manage org users, such as assigning a permission set.See Core DX MCP Tools Reference for the included tools. |
| metadata | Tools to deploy and retrieve metadata between your org and DX project.See Core DX MCP Tools Reference for the included tools. |
| testing | Tools to test Salesforce features, such as Apex classes and Agentforce agents.See Core DX MCP Tools Reference for the included tools. |
| code-analysis | Tools to run a static analysis of your code using Salesforce Code Analyzer.See the Code Analyzer MCP Tools documentation. |
| devops | Tools to manage work items, resolve merge conflicts, and troubleshoot deployment problems within DevOps Center.See the DevOps MCP Tools documentation. |
| lwc-experts | Tools to help you design, build, test, and optimize LWC code.See the LWC MCP Tools documentation. |
| aura-experts | Tools to help you migrate Aura applications to LWC.See the LWC MCP Tools documentation. |
| mobile-core | Core (minimal) set of tools to help LWC developers create Lightning web components that integrate with device-native features and adhere to Mobile Offline design patterns.See the Mobile MCP Tools documentation. |
| mobile | All the tools to help LWC developers create Lightning web components that integrate with device-native features and adhere to Mobile Offline design patterns.See the Mobile MCP Tools documentation. |
| scale-products | Tools to analyze and improve Apex performance.See the ApexGuru documentation. |

### Valid Values for the \--tools Flag

You can use the \--tools flag to enable specific tools. Use the \--toolsets and \--tools flags in combination to enable, for example, all the tools in the orgs toolset and just one tool (run\_apex\_test) in the testing toolset. Separate multiple tools with commas.

![Tip](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_tip.png&folder=sfdx_dev)

#### Tip

If you enable an MCP tool with the \--tools or \--toolsets flag, you can then disable it in your MCP client, which takes precedence.

The easiest way to find the name of a specific MCP tool is using your MCP client. For example, in VS Code with GitHub Copilot, click the **Configure Tools** button in the bottom-right of the chat window to see all the available tools, including the Salesforce DX ones.

![VS Code Copilot chat window with Configure Tools button highlighted](/docs/resources/img/en-us/260.0?doc_id=dev_guides%2Fsfdx_dev%2Fimages%2Fsfdx_mcp_show_tools.png&folder=sfdx_dev)

The Salesforce DX MCP Server GitHub repository [README](https://github.com/salesforcecli/mcp/blob/main/README.md "HTML (New Window)") also has a list of the available MCP tools.

You can also refer to the documentation for the different types of MCP tools:

-   [Core Salesforce DX MCP Tools Documentation](atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_mcp_use_core_tools.htm "Use the core Salesforce DX MCP tools to run classic DX tasks, such as work with orgs, retrieve and deploy metadata, run Apex tests, and more.")
-   [DevOps Center MCP Tools Documentation](https://help.salesforce.com/s/articleView?id=platform.devops_center_mcp_intro.htm&language=en_US)
-   [Code Analyzer MCP Tools Documentation](https://developer.salesforce.com/docs/platform/salesforce-code-analyzer/guide/mcp.html)
-   [Mobile MCP Tools Documentation](https://developer.salesforce.com/docs/atlas.en-us.260.0.mobile_offline.meta/mobile_offline/dx_mobile_mcp_tools.htm)
-   [LWC MCP Tools Documentation](https://developer.salesforce.com/docs/platform/lwc/guide/mcp-intro.html)

## Manage the Salesforce DX MCP Server (Beta)

The exact steps to manage the Salesforce DX MCP Server depends on your MCP client.

But most clients allow you to:

-   Stop and restart the server. If a new version of the DX MCP Server npm package (@salesforce/mcp) was released, then it’s automatically updated.
-   Set the LLM models that the DX MCP Server can use.

Check your MCP client documentation for details.

### MCP Server Updates and Feedback

[Release notes](https://github.com/forcedotcom/mcp/tree/main/releasenotes) are available at the issue-only Github repository for the Salesforce DX MCP server. In this GitHub repository, you can also report bugs and suggest feedback.

To report bugs, first check if someone else already reported the [issue](https://github.com/forcedotcom/mcp/issues). If you don’t see your bug listed, open a new issue.

For feature requests and other related topics, first review the [existing discussions](https://github.com/forcedotcom/mcp/discussions) before you open a new discussion.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=sfdx_dev)

#### Note

GitHub isn’t a mechanism for receiving support under any agreement or SLA. If you require immediate assistance, contact [Salesforce Customer Support](https://help.salesforce.com/s/articleView?id=000384365&type=1&language=en_US).

#### See Also

-   [*GitHub*: Salesforce DX MCP Server Repository](https://github.com/salesforcecli/mcp)

## Code Examples

```
{
  "servers": {
    "Salesforce DX": {
      "command": "npx",
      "args": ["-y", "@salesforce/mcp@latest", 
               "--orgs", "DEFAULT_TARGET_ORG", 
               "--toolsets", "orgs,metadata,data,users,testing"]
    }
  }
}
```

```
"args": ["-y", "@salesforce/mcp@latest", 
         "--orgs", "DEFAULT_TARGET_DEV_HUB,test-org@example.com", 
         "--toolsets", "data,orgs,metadata"]
```

```
"args": ["-y", "@salesforce/mcp@latest", 
         "--orgs", "my-scratch-org,my-dev-hub", 
         "--toolsets", "data,orgs,metadata"]
```

```
"args": ["-y", "@salesforce/mcp@latest", 
         "--orgs", "ALLOW_ALL_ORGS", 
         "--toolsets", "all",
         "--allow-non-ga-tools"]
```

```
"args": ["-y", "@salesforce/mcp@latest", 
         "--orgs", "DEFAULT_TARGET_ORG", 
         "--toolsets", "data,orgs,metadata,lwc-experts,code-analysis",
         "--tools", "run_apex_test",
         "--allow-non-ga-tools"]
```

## Related Topics

- Agentforce
          Vibes Extension Includes the Salesforce DX MCP Server (atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_mcp.htm)
- Quick Start Using the VS Code With Copilot MCP Client (Beta) (atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_mcp_get_started.htm)
- Core DX MCP Tools Reference (atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_mcp_use_core_tools.htm)
- Core
                                                Salesforce DX MCP Tools Documentation (atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_mcp_use_core_tools.htm)
