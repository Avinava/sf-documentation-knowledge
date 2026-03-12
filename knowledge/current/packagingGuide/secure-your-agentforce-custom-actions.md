---
title: "Secure Your Agentforce Custom Actions"
domain: packagingGuide
topic: secure-your-agentforce-custom-actions
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:21.104Z
estimatedTokens: 3781
keywords: [Secure, Agentforce, Custom, Actions, enable, agents, carry, specialized, tasks, data, retrieval, integration, external, systems, take]
---

# Secure Your Agentforce Custom Actions

> Agentforce custom actions enable agents to carry out specialized tasks like data
    retrieval or integration with external systems. These actions can take various forms, including
    autolaunched flows, invocable Apex classes, and prompt templates. If your Agentforce solution
    includes a custom action, you must adhere to these requirements.

# Secure Your Agentforce Custom Actions

Agentforce custom actions enable agents to carry out specialized tasks like data retrieval or integration with external systems. These actions can take various forms, including autolaunched flows, invocable Apex classes, and prompt templates. If your Agentforce solution includes a custom action, you must adhere to these requirements.

## Custom Action Classification

In your managed package documentation, classify all custom actions. Indicate what type of agent the action is intended to be used with. Also indicate whether the action returns public or nonpublic data. These classifications help customers understand how to use the actions, and manage user access securely.

Identify whether the custom action is designed for use with employee-facing or service agents.

-   Employee-facing agent: Users authenticated within a Salesforce org can access the agent from within the Salesforce application. Employee-facing agents include Agent for Setup and SDR. See [Agent Types and Considerations](https://help.salesforce.com/s/articleView?id=ai.agent_setup_explore_types.htm&type=5&language=en_US) in Salesforce Help.
-   Service agent: The Salesforce org owner’s customers can access the agent, typically via customer channels such as email and messaging. For example, a service agent exposed to customers on an Experience site.


Also, classify the action as public or private.

-   Public: The action returns public data and is appropriate for unauthenticated access.
-   Private: The action returns nonpublic data or results in sensitive operations, such as creating, deleting, or altering records in a Salesforce org. At a minimum, require user verification and grant access to private actions to verified users only. Any additional authentication requirements are subject to a customer’s risk tolerance based on the data the action returns and the sensitivity of the action.

Exercise caution when developing private actions that are accessible to external users, such as through a service agent. Improper authentication and authorization can create security vulnerabilities that lead to unintentional data access and exposure. To protect against this, follow the requirements in [Authentication and Authorization for Custom Actions](#section_hps_kqg_wfc).

## Authentication and Authorization for Custom Actions

When an agent invokes a flow or Apex code, the identity used to execute the action depends on the type of agent the action is assigned to. If an employee-facing agent invokes the action, the identity of the *user* that submitted the prompt to the agent is used to execute the action. If a service agent invokes the action, the identity of the *agent* is used to execute the action. As a result, extra care is required by the flow or Apex code that the action invokes to ensure that the end user is authorized to access nonpublic data or alter data within the Salesforce org.

All public and private custom actions must implement:

-   Proper flow execution context that aligns with [security considerations for flow design](https://developer.salesforce.com/docs/atlas.en-us.260.0.secure_coding_guide.meta/secure_coding_guide/secure_coding_considerations_flow_design.htm).
-   CRUD, field-level security (FLS), and record-level (with sharing) access checks. See [Apex Security and Sharing](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/apex_security_sharing_chapter.htm).

## Custom Actions and Generic User Inputs

Custom actions that accept generic record references, record IDs, object names, or field names as user-controlled input aren't allowed. To prevent direct user control, disable user input when you configure the action.

In Setup, when you create a custom action, disable Collect data from user for fields that accept generic user inputs. See [Create a Custom Action for Agents](https://help.salesforce.com/s/articleView?id=sf.copilot_actions_custom_create_scratch.htm&language=en_US&type=5).

In the schema.json metadata file, for any inputs that contain record references, record IDs, object names, or field names, set the copilotAction:isUserInput property to false.

Here’s an example schema.json for an action input configuration. Notice that the copilotAction:isUserInput value is false.

"contactId" : { "title" : "contactId", "description" : "The Id of the contact that will be used to create the related booking.", "lightning:type" : "lightning\_\_textType", "lightning:isPII" : false, "copilotAction:isUserInput" : false }

## Private Custom Actions for Service Agents

Private custom actions for service agents have additional authorization and access-control security requirements beyond those for all custom actions.

At a minimum, a private custom action that's designed for use by service agents, must:

-   Require a verified customer identity.
-   Use the verified customer identity to scope all data accessed by the action.

User identity verification is the process of confirming a user's identity on the basis of specific identifiers such as a one-time password or an email address plus a private, user-identifiable attribute. Implement a verification method that’s appropriate for the level of sensitivity associated with the action.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=packagingGuide)

#### Note

User verification is different than authentication. If a customer has authentication requirements for any data access, or operation that your action invokes, it’s their responsibility to configure the additional authentication requirements. See [Add User Identification to Agentforce Actions](https://help.salesforce.com/s/articleView?id=ai.service_agent_secure_actions_implement.htm&type=5&language=en_US).

We recommend using the out-of-the-box [Customer Verification topic](https://help.salesforce.com/s/articleView?id=ai.service_agentforce_customer_verification.htm&type=5&language=en_US) in Agentforce to verify a user based on their email address and a one-time-password sent to that address. However, for actions that are private, but not considered sensitive enough to require one-time password verification or authentication, you can take a different approach. Use their email address and a private piece of information unique to them to identify them as a customer and let them access certain actions. See [Control Agent Access and Decision-Making with Variables and Filters](https://developer.salesforce.com/blogs/2025/04/control-agent-access-and-decision-making-with-variables-and-filters).

In both approaches, an ID for the verified customer is stored in the VerifiedCustomerId context variable for the agent. This variable is then required as an input value to each private custom action. The action uses it to determine what data the user can access. The action must prohibit users from viewing or altering data that isn’t associated with their verified customer identity. See [Agent Variables](https://help.salesforce.com/s/articleView?id=ai.agent_variables.htm&type=5&language=en_US).

To implement a custom action that properly authorizes access based on the user’s verified customer identity, the action must:

-   Provide the VerifiedCustomerId context variable as an input value. Configure this input value so that it’s sourced from the context variable using the *Assign a Variable* input parameter option within Agent Builder.
-   Validate that the VerifiedCustomerId is a non null value that maps to a customer identity within the Salesforce org. If using the out-of-the-box Customer Verification topic, the customer identity is either a User or Contact record. If you’re not using this topic, the record type can vary.
-   Associate all data accessed, altered, or returned by the custom action with the user’s identity based on the VerifiedCustomerId.
-   Prevent users from accessing or altering any data not associated with their verified customer identity.

## Example

In this example, we develop a secure, private, custom action for a shopping application. The action uses a flow to return details about a customer’s order. It's designed for a service agent to use. We'll secure it with user verification and data scoping.

The customer is associated with a Contact record in the Salesforce org. Each order is tracked with an Order\_\_c record that contains an order number and the Contact record ID for the customer that placed the order.

The action requires that the user is verified, and uses the out-of-the-box [Customer Verification topic](https://help.salesforce.com/s/articleView?id=ai.service_agentforce_customer_verification.htm&type=5&language=en_US). After the user is verified by the Verify Customer action, their customer ID, associated with a Contact record, is stored in the VerifiedCustomerId context variable for the agent. This is done using the Map to Variable option within the custom action’s properties.

When the order details action is invoked, it accepts the VerifiedCustomerId context variable as a non user-controlled input from the VerifiedCustomerId context variable and an order number supplied by the user.

The action then invokes a flow that:

-   Retrieves the Contact record where the Id field matches the VerifiedCustomerId. If the VerifiedCustomerId is empty or null, or the Contact record doesn't exist, the flow returns an error.
-   Retrieves the set of Order\_\_c records associated with the user’s Contact record. For example, Order\_\_c.ContactId = VerifiedCustomerId.
-   Returns the Order\_\_c record matching the user’s supplied order number.

In this example, it's critical that the VerifiedCustomerId value isn’t user-controlled input. Instead, it must be controlled by the output of the actions in the Customer Verification topic by using the variable assignment feature. To learn how to use the variable assignment feature within Agent Builder, see [Control Agent Access and Decision-Making with Variables and Filters](https://developer.salesforce.com/blogs/2025/04/control-agent-access-and-decision-making-with-variables-and-filters).

## Generating Content with Prompts

To securely generate content using Agentforce, send a prompt to the large language model (LLM) with instructions. There are multiple ways to do this. Choose the best content-generation method for your use case.

-   Use prompt templates that a [custom action](https://developer.salesforce.com/agentforce-workshop/agents/5-prompt-template-actions), [Apex](https://developer.salesforce.com/agentforce-workshop/advanced/1-advanced-prompt-template), or [flow](https://help.salesforce.com/s/articleView?id=platform.flow_concepts_trigger_prompt_template_capability.htm&type=5&language=en_US) can invoke.
-   Directly invoke the [Models API](https://developer.salesforce.com/docs/einstein/genai/guide/models-api.html) to generate content based on a supplied prompt. You can [access Models API with Apex](https://developer.salesforce.com/docs/einstein/genai/guide/access-models-api-with-apex.html) or [the Models REST API](https://developer.salesforce.com/docs/einstein/genai/guide/access-models-api-with-rest.html).

When choosing an LLM to use with these methods, consider your requirements for supported features, context window size, cost, and adversarial robustness. See [Supported Models](https://developer.salesforce.com/docs/einstein/genai/guide/supported-models.html).

## Generated Content Output Safety in Apex and Flows

Treat all content that’s generated with prompt templates or the Agentforce Models API in your Apex code or flows as untrusted. This is especially important if the generated content serves as input for other code procedures or visible to a customer in a custom user interface, such as a Lightning Web Component or VisualForce page.

If your flow component or Apex code uses an LLM to generate content that’s used in a downstream flow component or Apex code, validate the content before processing it. Ensure it meets an expected format and value constraint. Length, character set, and integer value bounds are examples of value constraints. Instruct the model to generate structured output, such as JSON, to facilitate parsing and processing.

For example, your Apex code uses the Models API to retrieve the ID of a record from text that’s included in a prompt. Before using the ID for additional operations, such as data manipulation language (DML), SOQL, or other code operations, validate that the ID in the response is in an expected format. In this example, validate that it’s an 8 or 15 character Salesforce ID that contains allowlisted characters only.

If the content generated from an LLM is displayed to users in a custom user interface, make sure the data is properly output encoded. Use a mechanism that’s appropriate for the user interface framework. For example, use sufficient escaping when embedding content in a Lightning web component.

For more information about output handling for LLM-generated content, see [LLM05: 2025 Improper Output Handling - OWASP Top 10 for LLM & Generative AI Security.](https://genai.owasp.org/llmrisk/llm052025-improper-output-handling/)

## Logging

Don’t log Agentforce prompts or responses from the agent. Avoid using System.debug or other logging methods with prompts and generated responses.

If logs are needed, [enable enhanced event logs](https://help.salesforce.com/s/articleView?id=ai.copilot_setup_enhanced_event_logs.htm&type=5&language=en_US) in Agent Builder. These logs capture the events in an agent session. You can use them to help test and troubleshoot your agent.

## Restricted Functionality

Actions that alter the Einstein Trust Layer settings of a Salesforce org aren't allowed in managed packges.

## Third-Party Service Integrations

Third-party service integrations in Agentforce custom actions must meet the same security requirements as a third-party service integration in AppExchange managed packages. For clarification on what integrations are considered in-scope for this requirement, review [Test Your Entire Solution](https://developer.salesforce.com/docs/atlas.en-us.260.0.packagingGuide.meta/packagingGuide/security_review_test_all.htm).

Integrations with third-party LLM services, such as OpenAI and Google, aren't allowed. Use Agentforce’s solutions instead.

## User Confirmation for Data Modification and Action Invocation

For custom actions that alter customer org data or invoke sensitive actions such as sending emails on the user’s behalf, always have the agent prompt the user for confirmation before proceeding. This gives the user an opportunity to validate the planned action before it’s executed and prevents [excessive agency](https://genai.owasp.org/llmrisk/llm062025-excessive-agency/) as defined by OWASP. Excessive agency can lead to unintended or accidental data changes and actions.

To implement user confirmation for a custom action in Agent Builder, enable Require user confirmation for the action. This code shows how to turn on user confirmation via the metadata for the GenAiFunction definition. Notice that the isConfirmationRequired value is true.

```

```

## Code Examples

```
<?xml version="1.0" encoding="UTF-8"?>
<GenAiFunction xmlns="http://soap.sforce.com/2006/04/metadata">
   <description>Provides details about an Experience__c that a user would like more information
       about.</description>
   <invocationTarget>Get_Experience_Details</invocationTarget>
   <invocationTargetType>flow</invocationTargetType>
   <isConfirmationRequired>true</isConfirmationRequired>
   <isIncludeInProgressIndicator>false</isIncludeInProgressIndicator>
   <masterLabel>Get Experience Details</masterLabel>
</GenAiFunction>
```
