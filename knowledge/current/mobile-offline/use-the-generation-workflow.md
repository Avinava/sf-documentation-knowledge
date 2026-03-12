---
title: "Use the Generation Workflow"
domain: mobile-offline
topic: use-the-generation-workflow
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:34:56.534Z
estimatedTokens: 531
keywords: [Generation, Workflow, divided, three, phases, Plan, Template, Selection, Setup, Design, Iterate]
---

# Use the Generation Workflow

> The workflow is divided into three phases: Plan, Template Selection and Setup, and
    Design and Iterate.

# Use the Generation Workflow

The workflow is divided into three phases: Plan, Template Selection and Setup, and Design and Iterate.

## Plan

Start the generation process by using natural language in your chat interface. For example, "Generate an app using the sfmobile-native-project-manager tool...".

The agent prompts you for specific metadata. You can provide these details upfront or answer when asked:

-   **Platform**: iOS or Android.
-   **Project Name**: The name of your app (for example, MyServiceApp).
-   **Package Identifier**: A unique bundle ID (for example, com.salesforce.myserviceapp).
-   **Organization Name**: Your company name.
-   **Salesforce Host**: (Optional) Login URL if using a custom domain or sandbox.

## Template Selection and Setup

Based on your description, the tool automatically selects the correct template.

| Use Case | Description | Requirements |
| --- | --- | --- |
| Agentforce Service Agent (B2C) | Customer-facing apps for chatting with AI agents to resolve issues or schedule appointments. | Agent ID, ES Developer Name, Org ID, API Lift |
| Mobile SDK Applications (B2B) | Internal employee apps that require secure login and access to data like Accounts, Contacts, or Cases. | Standard Connected App credentials |

![Tip](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_tip.png&folder=mobile_offline)

#### Tip

The tool guides you on where to find specific IDs (like Agent ID) within your Salesforce setup.

## Design and Iterate

After the creation of a "steel thread" skeleton, you enter a loop of feature implementation.

-   Describe the feature by telling the agent what you want (for example, "Add a login screen," or "Change the header to blue").
-   The agent analyzes the request, breaking it down into "Simple," "Moderate," or "Complex" tasks to ensure stability.
-   The tool generates a Feature Brief and Product Requirements Document (PRD) for you to review and to confirm it understands your goals before writing code.
-   Your workflow state saves in a .magen/ directory, allowing you to close your IDE and resume later without losing context.
