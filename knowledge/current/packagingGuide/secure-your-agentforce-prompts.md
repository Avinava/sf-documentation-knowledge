---
title: "Secure Your Agentforce Prompts"
domain: packagingGuide
topic: secure-your-agentforce-prompts
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:21.118Z
estimatedTokens: 1043
keywords: [Secure, Agentforce, Prompts, prompt, structured, instructions, provided, agent, behavior, solutions, listed, AppExchange, includes, adhere, requirements]
---

# Secure Your Agentforce Prompts

> A prompt is a structured set of instructions provided to an agent to guide its
    behavior. All Agentforce solutions listed on AppExchange that includes prompts must adhere to
    these requirements.

# Secure Your Agentforce Prompts

A prompt is a structured set of instructions provided to an agent to guide its behavior. All Agentforce solutions listed on AppExchange that includes prompts must adhere to these requirements.

## Sensitive and Secret Data

Make sure the prompts in your managed package don’t include sensitive or secret data. You can use [merge fields](https://help.salesforce.com/s/articleView?id=ai.prompt_builder_ground_template.htm&type=5&language=en_US) to add user input or Salesforce org data to a prompt before it’s sent to the large language model (LLM), but don’t hard code this data.

## Authentication Tokens

Prompts in your managed package must not ask users for authentication tokens. Authentication tokens include API keys, passwords, and so on. Requesting one-time passwords for user-verification purposes is permitted.

## Prompt Storage

Securely store prompts within your managed package. Use one of these approved methods.

-   [Prompt templates](https://help.salesforce.com/s/articleView?id=ai.prompt_builder_build_template.htm&type=5&language=en_US)

    ![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=packagingGuide)

    #### Note

    A prompt template that your manage package installs is visible and can be cloned, but it can't be modified by the Salesforce org it's installed in. See [Considerations for Packaging Prompt Templates](https://help.salesforce.com/s/articleView?id=ai.prompt_builder_considerations_packaging.htm&type=5&language=en_US).

-   [Protected custom settings](https://help.salesforce.com/s/articleView?id=platform.cs_schema_settings.htm&type=5&language=en_US)
-   [Protected custom metadata](https://help.salesforce.com/s/articleView?id=platform.custommetadatatypes_protection.htm&type=5&language=en_US)

We recommend using these mechanisms wherever possible. However, if they aren’t sufficient for your use case, you can hard-code prompts directly in your Apex code.

## Prompt Injection Mitigation

Prompt injection is a vulnerability where attacker-controlled input in a prompt causes unexpected behavior or LLM outputs. It can cause unintended data generation, data leaks, harmful content generation, and other adverse effects. Make sure prompts in your managed package guard against prompt-injection attacks. When constructing a prompt that contains user-controlled or untrusted input, employ a prompt-injection mitigation strategy. You may need to use a combination of mitigation techniques.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=packagingGuide)

#### Important

Prompt injection mitigation is an evolving area of security guidance. Monitor the area for new strategies that can help your company mitigate prompt injection risk.

-   **[Design Security-Hardened Prompts](atlas.en-us.packagingGuide.meta/packagingGuide/secure_agentforce_prompt_injection_harden.htm)**
    When designing a prompt, make sure it’s hardened against attacks that attempt to alter it’s instructions. Define roles and boundaries for the LLM, and the expected output content and format. Don't allow data to alter or override prompt instructions.
-   **[Validate User-Controlled Data Added to a Prompt](atlas.en-us.packagingGuide.meta/packagingGuide/secure_agentforce_prompt_injection_data.htm)**
    Before including user-controlled data in a prompt, validate the data. Ensure it meets criteria for an acceptable input based on your use case. If the criteria isn't met, don’t include the data in the prompt.
-   **[Use Random Sequence Enclosures and Prompt Sandwiching](atlas.en-us.packagingGuide.meta/packagingGuide/secure_agentforce_prompt_injection_enclosure.htm)**
    If untrusted or user-controlled data is included in a prompt, use a secure random-sequence enclosure to clearly segment the data from other instructions in the prompt. The goal is to prevent an attacker from guessing the random sequence.
-   **[Prompt Injection Mitigation Resources](atlas.en-us.packagingGuide.meta/packagingGuide/secure_agentforce_prompt_injection_resources.htm)**
    Learn more about prompt injection vulnerabilities and mitigation techniques.

## Related Topics

- Design Security-Hardened Prompts (atlas.en-us.packagingGuide.meta/packagingGuide/secure_agentforce_prompt_injection_harden.htm)
- Validate User-Controlled Data Added to a Prompt (atlas.en-us.packagingGuide.meta/packagingGuide/secure_agentforce_prompt_injection_data.htm)
- Use Random Sequence Enclosures and Prompt Sandwiching (atlas.en-us.packagingGuide.meta/packagingGuide/secure_agentforce_prompt_injection_enclosure.htm)
- Prompt Injection Mitigation Resources (atlas.en-us.packagingGuide.meta/packagingGuide/secure_agentforce_prompt_injection_resources.htm)
