---
title: "Step 3 [Optional]: Configure a Rule"
domain: metadata-api
topic: step-3-optional-configure-a-rule
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T05:14:41.085Z
estimatedTokens: 224
keywords: [Step, Optional, Configure, Rule, ​​To, help, MCP, server, function, optimally, create, rule, guides, assistant, such, Agentforce, Vibes, Cursor, Agent, call]
---

# Step 3 [Optional]: Configure a Rule

> ​​To help the MCP server function optimally, you can create a rule that guides your AI
  assistant, such as Agentforce Vibes or Cursor Agent, to call the Metadata API Context MCP tool. An
  AI rule is a plain-text file like Markdown that provides specific instructions, context, or
  constraints to your AI assistant.

# Step 3 \[Optional\]: Configure a Rule

​​To help the MCP server function optimally, you can create a rule that guides your AI assistant, such as Agentforce Vibes or Cursor Agent, to call the Metadata API Context MCP tool. An AI rule is a plain-text file like Markdown that provides specific instructions, context, or constraints to your AI assistant.

Use this example rule to ensure that the Metadata API Context MCP tool is called to provide AI with additional context when generating metadata XML files. This helps ensure the structural integrity of the metadata XML files generated, and minimize errors during deployment.

```

```

For more details about configuring AI rules, see:

-   Agentforce Vibes Extension: [Agentforce Rules](https://developer.salesforce.com/docs/platform/einstein-for-devs/guide/devagent-rules.html)
-   Cursor Docs: [Rules](https://cursor.com/docs/context/rules)

## Code Examples

```
# Rule: Metadata Context and XML Structure

**Description:** To guarantee the creation of accurate and deployable Salesforce metadata files, you must call the get_metadata_api_context MCP tool. This step provides comprehensive contextual information—including complete field definitions, valid values, and constraints—that is essential for correctly determining the required entity shape and creating a valid Metadata XML structure.

**Guidelines:**
- Before generating the XML structure for any Salesforce Metadata Type, the get_metadata_api_context MCP tool must be called.
- The returned information—which includes field definitions, valid values, constraints, and examples—must be used to correctly determine the required shape of the entity.
- The resulting Metadata XML structure must strictly adhere to the determined shape to leverage the complete field definitions and constraints provided by the tool.
- Following these constraints is mandatory to ensure the resulting XML file is valid and will pass Salesforce validation upon deployment.
```
