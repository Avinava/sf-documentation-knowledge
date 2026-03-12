---
title: "Use the Core Salesforce DX MCP Tools (Beta)"
domain: sfdx-dev
topic: use-the-core-salesforce-dx-mcp-tools-beta
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:36:18.332Z
estimatedTokens: 1796
keywords: [Core, Salesforce, MCP, Tools, Beta, run, classic, tasks, work, orgs, retrieve, deploy, metadata, Apex, tests]
---

# Use the Core Salesforce DX MCP Tools (Beta)

> Use the core Salesforce DX MCP tools to run classic DX tasks, such as work with orgs, retrieve and deploy metadata, run Apex tests, and more.

# Use the Core Salesforce DX MCP Tools (Beta)

Use the core Salesforce DX MCP tools to run classic DX tasks, such as work with orgs, retrieve and deploy metadata, run Apex tests, and more.

The core DX tools are grouped into these toolsets:

-   orgs
-   metadata
-   data
-   users
-   testing

See the [toolset topic](atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_mcp_server.htm#valid-values-toolsets) for information about the other available toolsets, such as DevOps and LWC, and links to documentation about how to effectively use them.

## Prerequisites for Using the Core DX MCP Tools

To work with the core DX MCP tools, you need the standard Salesforce DX environment set up on your computer. In particular:

-   [Install and configure the Salesforce DX MCP Server in your MCP client.](atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_mcp_server.htm#sfdx_dev_mcp_server "Install the Salesforce DX MCP Server in your MCP client to start using the tools.")
-   [Install Salesforce CLI on your computer.](https://developer.salesforce.com/docs/atlas.en-us.260.0.sfdx_setup.meta/sfdx_setup/sfdx_setup_install_cli.htm#sfdx_setup_install_cli)
-   [Install VS Code on your computer.](https://code.visualstudio.com/docs)
-   [Create a Salesforce DX project and open it in VS Code.](https://developer.salesforce.com/docs/atlas.en-us.260.0.sfdx_dev.meta/sfdx_dev/sfdx_dev_ws_create_new.htm) You can also clone an example repo, such as [dreamhouse-lwc](https://developer.salesforce.com/docs/atlas.en-us.260.0.sfdx_dev.meta/sfdx_dev/sfdx_dev_intro_sample_repo.htm), which is a ready-to-use DX project that contains a simple Salesforce application, with metadata and test data.
-   [Authorize at least one development Salesforce org to use with your DX project](https://developer.salesforce.com/docs/atlas.en-us.260.0.sfdx_dev.meta/sfdx_dev/sfdx_dev_auth_web_flow.htm), such as a Trailhead playground, sandbox, scratch org, or Developer Edition org, and set it as your default org.

    If you want to create a scratch org using MCP, then you must also authorize a Dev Hub org.


## Sample Prompts that Invoke the Core DX MCP Tools

Here are some sample prompts to get you started using the core DX MCP tools. You never call a specific MCP tool directly; as always in this exciting new AI world, you use natural language to tell the LLM what you want to accomplish, and it then figures out what tools to call to complete the task.

You can configure your MCP client to automatically run MCP tools that just provide information, but to ask for your explicit confirmation before it runs a tool that makes a real change in your local DX project or in your org. We think this behavior is a good idea.

**Get information about the orgs that the DX MCP Server knows about:**

-   *List all my orgs and provide all the details you know about them.*
-   *Fully describe the org with the alias my-org.*

Tips:

-   If the MCP client doesn’t list the authorized orgs that you want to use, update the \--orgs flag in your DX MCP Server configuration and either add the org’s alias or username or specify ALLOW\_ALL\_ORGS.
-   In general, if the LLM seems to be getting confused, start a new chat session which clears the context. This tip applies to pretty much all LLM usage.

**Open your org in a browser:**

-   *Open my org in a browser.*
-   *Open the Resort Manager agent in Agent Builder.*
-   *Open the Get Experiences flow in its associated builder.*
-   *Open the file I’m currently working on (in my IDE) in my org.*

Tips:

-   To open an agent or flow in its associated org builder, you must have the metadata files in your Salesforce DX project. Try retrieving them if they’re in your org, but not in your DX project.

**Work with scratch orgs and snapshots:**

-   *Do I have any active scratch orgs? What about inactive scratch orgs?*
-   *Create a scratch org, give it the alias my-scratch, and make it my default org.*
-   *Create a snapshot from the scratch org you just created.*
-   *Create a scratch org from the snapshot you just created.*
-   *Delete the scratch org with the alias my-scratch.*

Tips:

-   If you successfully create a scratch org using a prompt, but it doesn’t show up when you ask to list your orgs, update the \--orgs flag in your DX MCP Server configuration and either add the new scratch org alias or username or specify ALLOW\_ALL\_ORGS.

**Get information about your org:**

-   *Show me all the accounts in my org.*
-   *What are all the fields of the account object?*
-   *Show me all the accounts in my org; include the name, billing address, web site, and phone fields.*
-   *How many system administrators do I have in my org? What are their usernames?*

**Deploy and retrieve metadata:**

-   *Deploy all local Apex classes to my org.*
-   *Deploy everything in my DX project to my org.*
-   *Retrieve all agents from my org.*

**Run tests:**

-   *Run all local Apex tests and diagnose any failures.*
-   *Run all agent tests.*

## Core DX MCP Tools Reference

The core Salesforce DX MCP Server provides these tools for working with orgs, metadata, and so on. We provide this reference information so you understand what kinds of tasks these tools can accomplish; you don’t call these tools directly, but rather the LLM does.

The tools marked NON-GA are not yet generally available, specify the \--allow-non-ga-tools flag in your DX MCP Server configuration to use them. See [Configure the Salesforce DX MCP Server for Your Environment](atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_mcp_server.htm#sfdx_dev_mcp_configure_orgs_toolsets "After you’ve added the basic Salesforce DX MCP Server to your MCP client, configure the server for your specific environment by updating the args option with new flags or new values to the flags.").

| Tool name | Toolset | GA? | Description |
| --- | --- | --- | --- |
| get_username | coreAlways available | GA | Determines the appropriate username or alias for Salesforce operations, handling both default orgs and Dev Hubs. |
| resume_tool_operation | coreAlways available | GA | Resumes a long-running operation that wasn't completed by another tool. |
| list_all_orgs | orgs | GA | Lists all configured Salesforce orgs. |
| create_org_snapshot | orgs | NON-GA | Creates a scratch org snapshot. |
| create_scratch_org | orgs | NON-GA | Creates a scratch org. |
| delete_org | orgs | NON-GA | Deletes a locally-authorized Salesforce scratch org or sandbox. |
| org_open | orgs | NON-GA | Opens a Salesforce org in a browser. |
| run_soql_query | data | GA | Runs a SOQL query against a Salesforce org. |
| assign_permission_set | users | GA | Assigns a permission set to the user or on behalf of another user. |
| deploy_metadata | metadata | GA | Deploys metadata from your Salesforce DX project to an authorized org. |
| retrieve_metadata | metadata | GA | Retrieves metadata from an authorized org to your Salesforce DX project. |
| run_agent_test | testing | GA | Executes Agentforce agent tests in your authorized org. |
| run_apex_test | testing | GA | Executes Apex tests in your authorized org. |

#### See Also

-   [*GitHub*: Salesforce DX MCP Server Repository](https://github.com/salesforcecli/mcp)

## Related Topics

- toolset topic (atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_mcp_server.htm)
- Install and configure the Salesforce
						DX MCP Server in your MCP client. (atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_mcp_server.htm)
- Configure the
					Salesforce DX MCP Server for Your Environment (atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_mcp_server.htm)
