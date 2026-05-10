---
title: "Step 2: Test Your Connection to the MCP Server"
domain: metadata-api
topic: step-2-test-your-connection-to-the-mcp-server
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-05-10T00:40:08.466Z
estimatedTokens: 219
keywords: [Step, Test, Connection, MCP, Server, simple, prompts, client’s, Salesforce, API, Context, configured]
---

> Use simple prompts to test your client’s connection to the Salesforce API Context MCP
    server you configured.

# Step 2: Test Your Connection to the MCP Server

Use simple prompts to test your client’s connection to the Salesforce API Context MCP server you configured.

## EXAMPLE 1

In your client's chat field, enter the prompt "Query the Salesforce API Context MCP tools to get the metadata context for the CustomTab Metadata Type".

The MCP client should respond with information about the CustomTab Metadata Type.

## EXAMPLE 2

In your client's chat field, enter the prompt "Can you create a new custom object to track Projects with the following fields: Start Date (date), End Date (date), and Budget (number). Use the Salesforce API Context MCP tools as context when creating each metadata type."

The MCP client should respond with information about the CustomObject and CustomField Metadata Types. The MCP client uses this context to generate the proper metadata XML files.
