---
title: "Quick Start: Metadata API Context MCP Tools"
domain: metadata-api
topic: quick-start-metadata-api-context-mcp-tools
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-05-10T00:40:11.451Z
estimatedTokens: 864
keywords: [Quick, Start, Metadata, API, Context, MCP, Tools, provide, contextual, Salesforce, help, generate, accurate, files, working]
---

> The Metadata API Context MCP tools provide contextual information about Salesforce
  metadata types to help generate accurate Salesforce metadata files when working with the Metadata
  API.

# Quick Start: Metadata API Context MCP Tools

The Metadata API Context MCP tools provide contextual information about Salesforce metadata types to help generate accurate Salesforce metadata files when working with the Metadata API.

| Available in: Professional, Enterprise, Unlimited, Developer, sandbox, and scratch orgs that have API enabled. |
| --- |


![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=api_meta)

#### Note

Metadata API Context MCP Tools are a beta service that is subject to the Beta Services Terms at [Agreements - Salesforce.com](https://www.salesforce.com/company/legal/agreements/) or a written Unified Pilot Agreement if executed by Customer, and applicable terms in the [Product Terms Directory](https://ptd.salesforce.com/). Use of this beta service is at the Customer's sole discretion.

For a given metadata type, these tools give you:

-   complete field definitions
-   valid values
-   constraints
-   examples

They’re a useful resource for creating valid Salesforce metadata XML files when you need to generate them programmatically, or want to ensure accuracy.

| Server Name | Tool Name | Tool Description |
| --- | --- | --- |
| platform/salesforce-api-context | get_metadata_type_sections | Returns valid context sections available for a metadata type. |
| platform/salesforce-api-context | get_metadata_type_context | Returns metadata context for the requested metadata type sections. |
| platform/salesforce-api-context | get_metadata_type_fields | Returns field names and field-column metadata for a metadata type. |
| platform/salesforce-api-context | get_metadata_type_fields_properties | Returns field properties for the specified field. |
| platform/salesforce-api-context | search_metadata_types | Searches metadata type names for a provided string and returns a list of matching metadata types. |

These MCP tools are part of the Salesforce API Context MCP Server, which is [hosted in Salesforce](https://help.salesforce.com/s/articleView?id=platform.hosted_mcp_servers.htm&type=5&language=en_US).

With this feature, you might make API calls to your org. API usage counts against your org’s API quota.

-   **[Prerequisites: Set Up Salesforce Hosted MCP Servers](atlas.en-us.api_meta.meta/api_meta/meta_mcp_server_eca.htm)**
    The Salesforce API Context MCP server is one of many Salesforce Hosted MCP Servers. To use the Salesforce API Context MCP server, you must first set up the Salesforce Hosted MCP Server.
-   **[Step 1: Configure an MCP Client](atlas.en-us.api_meta.meta/api_meta/meta_mcp_cursor_configuration.htm)**
    Configure a client to connect to MCP servers hosted in your Salesforce org. In this quick start guide, we provide guidance on how to configure Agentforce Vibes, Cursor, and Claude.
-   **[Step 2: Test Your Connection to the MCP Server](atlas.en-us.api_meta.meta/api_meta/meta_mcp_prompt_examples.htm)**
    Use simple prompts to test your client’s connection to the Salesforce API Context MCP server you configured.
-   **[Step 3 \[Optional\]: Configure a Rule](atlas.en-us.api_meta.meta/api_meta/meta_mcp_configure_rule.htm)**
    ​​To help the MCP server function optimally, you can create a rule that guides your AI assistant, such as Agentforce Vibes or Cursor Agent, to call the Metadata API Context MCP tools. An AI rule is a plain-text file like markdown that provides specific instructions, context, or constraints to your AI assistant.

## Related Topics

- Prerequisites: Set Up Salesforce Hosted MCP Servers (atlas.en-us.api_meta.meta/api_meta/meta_mcp_server_eca.htm)
- Step 1: Configure an MCP Client (atlas.en-us.api_meta.meta/api_meta/meta_mcp_cursor_configuration.htm)
- Step 2: Test Your Connection to the MCP Server (atlas.en-us.api_meta.meta/api_meta/meta_mcp_prompt_examples.htm)
- Step 3 [Optional]: Configure a Rule (atlas.en-us.api_meta.meta/api_meta/meta_mcp_configure_rule.htm)
