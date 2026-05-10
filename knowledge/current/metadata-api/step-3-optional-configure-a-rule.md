---
title: "Step 3 [Optional]: Configure a Rule"
domain: metadata-api
topic: step-3-optional-configure-a-rule
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-05-10T00:40:08.446Z
estimatedTokens: 226
keywords: [Step, Configure, Rule, ​​To, help, MCP, server, function, optimally, guides, assistant, Agentforce, Vibes, Cursor, Agent, call, Metadata, API, Context, tools, plain-text, file, markdown, specific, instructions, constraints]
---

> ​​To help the MCP server function optimally, you can create a rule that guides your AI
  assistant, such as Agentforce Vibes or Cursor Agent, to call the Metadata API Context MCP tools.
  An AI rule is a plain-text file like markdown that provides specific instructions, context, or
  constraints to your AI assistant.

# Step 3 \[Optional\]: Configure a Rule

​​To help the MCP server function optimally, you can create a rule that guides your AI assistant, such as Agentforce Vibes or Cursor Agent, to call the Metadata API Context MCP tools. An AI rule is a plain-text file like markdown that provides specific instructions, context, or constraints to your AI assistant.

Use this example rule to make sure that the Metadata API Context MCP tools are called to provide AI with additional context when generating metadata XML files. This helps ensure the structural integrity of the metadata XML files generated, and minimize errors during deployment.

```

```

For more details about configuring AI rules, see:

-   Agentforce Vibes Extension: [Agentforce Rules](https://developer.salesforce.com/docs/platform/einstein-for-devs/guide/devagent-rules.html)
-   Cursor Docs: [Rules](https://cursor.com/docs/context/rules)

## Code Examples

```
# Rule: Salesforce Metadata Generation

##Description: To guarantee the creation of accurate and deployable Salesforce metadata files, you must use these tools from the `salesforce-api-context` MCP server:
    - `get_metadata_type_sections`
    - `get_metadata_type_context`
    - `get_metadata_type_fields`
    - `get_metadata_type_fields_properties`
    - `search_metadata_types`

These tools provide comprehensive contextual information—including complete field definitions, valid values, and constraints—that's essential for correctly determining the required entity shape and creating a valid Salesforce metadata file structure.

## Constraints
1. **One metadata type at a time** - finish one metadata type before starting the next one
3. **One metadata type per tool call** - don't batch metadata types when calling the MCP tools
4. **Child metadata types need their own context** - if adding any child metadata inside a parent metadata's file, treat the child metadata seperately; don't rely on the parent's schema for creating child metadata

## Workflow
### Step 1: Metadata loop - Execute for each metadata type
For each metadata type, use these tools from `salesforce-api-context` MCP server to get metadata type context:
- `get_metadata_type_sections`
- `get_metadata_type_context`
- `get_metadata_type_fields`
- `get_metadata_type_fields_properties`
- `search_metadata_types`

### Step 2. Verify deployment
```bash
sf project deploy start --dry-run -d "force-app/main/default" --target-org <alias> --test-level NoTestRun --wait 10 --json
```
On failure: attempt to fix the errors and re-run, retrying up to a maximum of 3 times until it succeeds.

## Anti-patterns
| Don't | Why | Do |
|-------|-----|-----|
| Batch types in calls to MCP tools | Violates constraint | One type per call |
```
