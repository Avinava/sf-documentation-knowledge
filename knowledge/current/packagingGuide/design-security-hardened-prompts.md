---
title: "Design Security-Hardened Prompts"
domain: packagingGuide
topic: design-security-hardened-prompts
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:35:21.112Z
estimatedTokens: 399
keywords: [Design, Security-Hardened, Prompts, designing, prompt, sure, it’s, hardened, against, attacks, attempt, alter, instructions, Define, roles]
---

# Design Security-Hardened Prompts

> When designing a prompt, make sure it’s hardened against attacks that attempt to alter
    it’s instructions. Define roles and boundaries for the LLM, and the expected output content and
    format. Don't allow data to alter or override prompt instructions.

# Design Security-Hardened Prompts

When designing a prompt, make sure it’s hardened against attacks that attempt to alter it’s instructions. Define roles and boundaries for the LLM, and the expected output content and format. Don't allow data to alter or override prompt instructions.

In your prompt, clearly define:

-   A role for the LLM to assume when it processes and generates content based on a prompt. Whether it's the LLM acting as a customer support agent or a sales representative, a role helps the LLM provide on-topic responses.
-   Boundaries for the LLM that delineate the content it should process. This can include topics that the LLM should and shouldn’t respond to. For example, if the LLM processes a user question that unrelated to a specific topic, have it respond with a generic statement.
-   The expected output content and format, if applicable. In the prompt instructions, explicitly state the type of data that should and shouldn’t be included in a response. If the intended output is a data structure, such as JSON, define the output schema and how it should be populated with data.
-   Where untrusted or user-input data is included in the prompt, indicate that the data must not alter or override any the prompt instructions.

For more prompt engineering best practices, see:

-   [*Salesforce Blog*: 7 Tips for Powerful Prompt Design](https://www.salesforce.com/blog/prompt-design-tips/)
-   [*Salesforce Help*: Best Practices for Building Prompt Templates](https://help.salesforce.com/s/articleView?id=ai.prompt_builder_best_practices.htm&type=5&language=en_US)
