---
title: "Quick Start: Metadata API Context MCP Tool"
domain: metadata-api
topic: quick-start-metadata-api-context-mcp-tool
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:33:41.953Z
estimatedTokens: 768
keywords: [Quick, Start, Metadata, API, Context, MCP, Tool, contextual, Salesforce, help, generate, accurate, files, working]
---

# Quick Start: Metadata API Context MCP Tool

> The Metadata API Context MCP tool provides contextual information about Salesforce
  metadata types to help generate accurate Salesforce metadata files when working with the Metadata
  API.

# Quick Start: Metadata API Context MCP Tool

The Metadata API Context MCP tool provides contextual information about Salesforce metadata types to help generate accurate Salesforce metadata files when working with the Metadata API.

| Available in: Developer, sandbox, and scratch orgs that have API enabled. |
| --- |


For a given metadata type, this tool gives you:

-   complete field definitions
-   valid values
-   constraints
-   examples

It's a useful resource for creating valid Salesforce metadata XML files when you need to generate them programmatically, or want to ensure accuracy.

| Server Name | Tool Name | Tool Description |
| --- | --- | --- |
| platform/salesforce-api-context | get_metadata_api_context | Provides contextual information about Salesforce metadata types to help generate accurate Salesforce metadata files. This tool gives you complete field definitions, valid values, constraints, and examples for metadata types. It is a useful resource for creating valid Salesforce metadata files when you need to generate them programmatically, or want to ensure accuracy. |

This MCP tool is part of the Salesforce API Context MCP Server, which is [hosted in Salesforce](https://help.salesforce.com/s/articleView?id=platform.hosted_mcp_servers.htm&type=5&language=en_US).

With this feature, you might make API calls to your org. API usage counts against your org’s API quota.

Metadata API Context MCP Tool is a beta service that is subject to the Beta Services Terms at [Agreements - Salesforce.com](https://www.salesforce.com/company/legal/agreements/) or a written Unified Pilot Agreement if executed by Customer, and applicable terms in the [Product Terms Directory](https://ptd.salesforce.com/). Use of this beta service is at the Customer's sole discretion.

-   **[Prerequisites: Set Up Salesforce Hosted MCP Servers (Beta)](atlas.en-us.api_meta.meta/api_meta/meta_mcp_server_eca.htm)**
    The Salesforce API Context MCP server is one of many Salesforce Hosted MCP Servers. To use the Salesforce API Context MCP server, you must first set up the Salesforce Hosted MCP Server.
-   **[Step 1: Configure a MCP Client](atlas.en-us.api_meta.meta/api_meta/meta_mcp_cursor_configuration.htm)**
    Configure a client to connect to MCP servers hosted in your Salesforce org. In this quick start guide, we provide guidance on how to configure Agentforce Vibes, Cursor, and Claude.
-   **[Step 2: Test Your Connection to the MCP Server](atlas.en-us.api_meta.meta/api_meta/meta_mcp_prompt_examples.htm)**
    Use simple prompts to test your client’s connection to the Salesforce API Context MCP server you configured.
-   **[Step 3 \[Optional\]: Configure a Rule](atlas.en-us.api_meta.meta/api_meta/meta_mcp_configure_rule.htm)**
    ​​To help the MCP server function optimally, you can create a rule that guides your AI assistant, such as Agentforce Vibes or Cursor Agent, to call the Metadata API Context MCP tool. An AI rule is a plain-text file like Markdown that provides specific instructions, context, or constraints to your AI assistant.

## Related Topics

- Prerequisites: Set Up Salesforce Hosted MCP Servers (Beta) (atlas.en-us.api_meta.meta/api_meta/meta_mcp_server_eca.htm)
- Step 1: Configure a MCP Client (atlas.en-us.api_meta.meta/api_meta/meta_mcp_cursor_configuration.htm)
- Step 2: Test Your Connection to the MCP Server (atlas.en-us.api_meta.meta/api_meta/meta_mcp_prompt_examples.htm)
- Step 3 [Optional]: Configure a Rule (atlas.en-us.api_meta.meta/api_meta/meta_mcp_configure_rule.htm)
