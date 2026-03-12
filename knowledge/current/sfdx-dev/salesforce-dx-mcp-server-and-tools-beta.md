---
title: "Salesforce DX MCP Server and Tools (Beta)"
domain: sfdx-dev
topic: salesforce-dx-mcp-server-and-tools-beta
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:36:18.298Z
estimatedTokens: 1669
keywords: [Salesforce, MCP, Server, Tools, Beta, enter, natural, language, prompts, IDE, standard, tasks, syncing, metadata, running]
---

# Salesforce DX MCP Server and Tools (Beta)

> Use the Salesforce DX MCP Server and its tools to enter natural language prompts in your
		IDE to complete standard DX tasks like syncing metadata, running Apex and agent tests, and
		creating scratch orgs. The DX MCP server includes over 60 MCP tools for various Salesforce
		features, such as DevOps, LWC development, and code analysis. These tools provide
		predictable, secure, and structured context to large language models (LLMs), ensuring
		efficient and accurate results.

# Salesforce DX MCP Server and Tools (Beta)

Use the Salesforce DX MCP Server and its tools to enter natural language prompts in your IDE to complete standard DX tasks like syncing metadata, running Apex and agent tests, and creating scratch orgs. The DX MCP server includes over 60 MCP tools for various Salesforce features, such as DevOps, LWC development, and code analysis. These tools provide predictable, secure, and structured context to large language models (LLMs), ensuring efficient and accurate results.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=sfdx_dev)

#### Note

Salesforce DX MCP Server is a pilot or beta service that is subject to the Beta Services Terms at [Agreements - Salesforce.com](https://www.salesforce.com/company/legal/agreements/) or a written Unified Pilot Agreement if executed by Customer, and applicable terms in the [Product Terms Directory](https://ptd.salesforce.com/). Use of this pilot or beta service is at the Customer's sole discretion.

Let's see how this work with an example. Say you enter Deploy my metadata in your IDE's agentic chat window. The LLM sees that the DX MCP Server provides a deploy\_metadata MCP tool, which sounds perfect! The LLM then calls that tool within the context of your local DX project. Success and error messages that result from the metadata deploy are then returned back to the LLM to determine the next steps. In sum, the MCP DX tools guide the LLM to accomplish your goals in the the most accurate, tested, and up-to-date way.

If the LLM didn't have the specific context for your prompt, it would still come up with a suggestion, and eventually even the correct one. But because the LLM might be relying on out-of-date training data, getting to the correct answer often involves inefficiencies, guesswork, and unpredictable behavior. MCP solves this problem.

The Salesforce DX MCP Server is a specialized Model Context Protocol (MCP) implementation designed to facilitate seamless interaction between LLMs and Salesforce orgs. See [MCP Solutions for Developers](https://developer.salesforce.com/docs/einstein/genai/guide/mcp.html) in the Agentforce Developer Guide for general MCP information and descriptions of other Salesforce MCP Servers.

Key features of Salesforce DX MCP Server include:

-   Direct interaction with Salesforce orgs through LLM-driven tools.
-   Secure access using TypeScript libraries (not shelling out to Salesforce CLI).
-   Improved security by avoiding the exposure of secrets in plain text.
-   Granular access control with org allowlisting.
-   Modular tool architecture for easy extensibility.

## Salesforce DX MCP Server Security Features

The Salesforce DX MCP Server was designed with security as a top priority.

-   Uses TypeScript libraries directly.
    -   Greatly decreases the size of the MCP Server.
    -   Significantly reduces the risk of remote code execution (RCE).
-   No secrets needed in configuration.
    -   Eliminates the risk of plain text secret exposure.
    -   Accesses pre-existing (encrypted) auth files on the user's machine.
    -   Implements allowlisting for auth info key/values to prevent sensitive data exposure.
-   No secrets exposed via MCP tools.
    -   Prevents other tools from accessing unencrypted tokens.
    -   Tools pass usernames around instead of tokens.
-   Granular access control.
    -   MCP Server can access auth info for only orgs that have been explicitly allowlisted.
    -   Users specify allowed orgs when starting the server.

## Agentforce Vibes Extension Includes the Salesforce DX MCP Server

Agentforce Vibes is an AI-powered Salesforce developer tool that's available as an easy-to-install Visual Studio Code (VS Code) extension. It includes Agentforce, an intelligent coding partner that provides information and, most importantly, can take action.

The Salesforce DX MCP Server is pre-configured in Agentforce Vibes, so you can start using the DX MCP tools immediately after you install the extension in VS Code.

See [Set Up Agentforce Vibes](https://developer.salesforce.com/docs/platform/einstein-for-devs/guide/einstein-setup.html) and [Build with Agentforce](https://developer.salesforce.com/docs/platform/einstein-for-devs/guide/devagent-overview.html) for more information.

## Types of MCP Tools Included in Salesforce DX MCP Server

The Salesforce DX MCP Server includes many tools for working with different Salesforce features. To narrow the LLM context, the DX MCP Server groups the tools into toolsets based on functionality. You can then easily enable only those tools you want to use, rather than enable them all and overwhelm the LLM.

These are the high-level types of MCP tools included in the DX MCP Server:

-   **Core DX**: Usual DX tools for working with orgs, deploying and retrieving metadata, and so on.
-   **Code Analysis**: Run a static analysis of your code using Salesforce Code Analyzer.
-   **DevOps**: Manage work items, resolve merge conflicts, and troubleshoot deployment problems within DevOps Center.
-   **Lightning Types**: Create and enhance custom Lightning types to define complex data structures and build custom user interfaces for Agentforce, Prompt Builder, and other Salesforce applications. See the [Lightning Types MCP Tool documentation](https://developer.salesforce.com/docs/platform/lightning-types/guide/lightning-types-mcp-tool.html).
-   **Lightning Web Components (LWC) and Aura**: Help you design, build, test, and optimize LWC code and facilitate Aura migration to LWC.
-   **Mobile**: Help LWC developers create Lightning web components that integrate with device-native features and adhere to Mobile Offline design patterns.
-   **Scale Products**: Use ApexGuru to detect and fix Apex performance issues.

## MCP Terminology

Here are the MCP-specific terms we use in this document.

-   **MCP Server** - An MCP server lets users interact with a system (such as Salesforce) using an LLM and natural language instead of an API. MCP servers provide the LLM with tools, prompts, and resources that the LLM can use to perform specific tasks.
-   **MCP Tools** - Executable functions that the LLM can call to perform actions.
-   **MCP Toolsets** - Logical groups of MCP tools based on their functionality. For example, the Salesforce DX MCP Server has metadata and orgs toolsets.
-   **MCP Client** - The interface (such as Agentforce) or IDE (such as Cursor) that can host an MCP server and act as an interface to the LLM. Also called MCP Host, although this document uses the term MCP client.

#### See Also

-   [*GitHub*: Salesforce DX MCP Server Repository](https://github.com/salesforcecli/mcp)
