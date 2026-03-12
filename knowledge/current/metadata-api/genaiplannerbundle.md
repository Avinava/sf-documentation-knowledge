---
title: "GenAiPlannerBundle"
domain: metadata-api
topic: genaiplannerbundle
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:40.264Z
estimatedTokens: 2407
namespace: Namespace.TopicName.ActionName.AttributeName
keywords: [GenAiPlannerBundle, Represents, planner, agent, template., It’s, container, topics, actions, used, interact, large, language, model, LLM, Parent, File, Suffix, Directory, Location]
---

# GenAiPlannerBundle

> Represents a planner for an agent or agent template. It’s a
			container for all the topics and actions used to interact with a large language model
			(LLM).

**Namespace:** `Namespace.TopicName.ActionName.AttributeName`

# GenAiPlannerBundle

Represents a planner for an agent or agent template. It’s a container for all the topics and actions used to interact with a large language model (LLM).

## Parent Type

This type extends the [Metadata](atlas.en-us.api_meta.meta/api_meta/metadata.htm "The base class for all metadata types. You can’t edit this object. A component is an instance of a metadata type.") metadata type and inherits its fullName field.

## File Suffix and Directory Location

GenAiPlannerBundle components have the suffix .genAiPlannerBundle and are stored in a subfolder for the agent in the genAiPlannerBundles folder.

## Version

GenAiPlannerBundle components are available in API version 64.0 and later. GenAiPlannerBundle replaces GenAiPlanner, which is available in API version 63.0 and earlier.

## Special Access Rules

GenAiPlannerBundle is available only if Agents is enabled in your org.

## Fields

| Field Name | Description |
| --- | --- |
| attributeMappings | Field TypeGenAiPlannerAttrMapping[]DescriptionA list of action attribute mappings. |
| botTemplate | Field TypestringDescriptionIf this planner is used by an agent template instead of an agent, this field is the template associated with the planner. |
| capabilities | Field TypestringDescriptionA set of tags associated with the agent. |
| description | Field TypestringDescriptionA description explaining the general purpose and domain of the agent. |
| genAiFunctions | Field TypeGenAiPlannerFunctionDef[]DescriptionA list of agent action definitions, such as a knowledge action, that are not contained in a topic. |
| genAiPlugins | Field TypeGenAiPlannerFunctionDef[]DescriptionA list of agent topic definitions. |
| masterLabel | Field TypestringDescriptionRequired. The master label for the planner. |
| plannerType | Field TypePlannerType (enumeration of type string)DescriptionRequired. A particular approach to problem solving that is given as prompt instructions to a large language model (LLM).The supported values are:AiCopilot__AgileAppDev—Uses an iterative development strategy to assist with building applications using the LLM. This strategy prompts the LLM to generate modular, testable components based on evolving user input and context. Unlike linear workflows, it supports continuous refinement and feedback loops throughout the development process.AiCopilot__ReAct—Uses a reactive reasoning strategy to solve problems with the LLM. This strategy consists of prompting the LLM to generate the next step in response to an event and the current context. It differs from a sequential reasoning engine in that it doesn’t plan more than one step ahead of time. |
| ruleExpressionAssignments | Field TypeGenAiPlannerRuleExprAsgn[]DescriptionA list of rule expression assignments. |
| ruleExpressions | Field TypeGenAiPlannerRuleExprDef[]DescriptionA list of rule expressions. |

## GenAiPlannerAttrMapping

Represents an attribute mapping, which enables you to map the output of one action attribute to the input of another attribute. This mapping enables you to propagate sensitive data safely without relying on untrusted user input.

| Field Name | Description |
| --- | --- |
| attributeName | Field TypestringDescriptionRequired. The attribute name in the format: Namespace.TopicName.ActionName.AttributeName. |
| attributeType | Field TypeAttributeType (enumeration of type string)DescriptionRequired. The attribute type. Values are:CustomPluginFunctionAttribute—Map to a custom action input or outputStandardPluginFunctionInput—Map to a standard action inputStandardPluginFunctionOutput—Map output to a variable |
| constantValue | Field TypestringDescriptionReserved for future use. |
| mappingTargetName | Field TypestringDescriptionThe target name for the attribute mapping. |
| mappingType | Field TypeAttributeMappingType (enumeration of type string)DescriptionRequired. The target type. Values are:ActionAttributeConstantVariableContextVariable |

## GenAiPlannerFunctionDef

Represents an agent topic or action definition.

| Field Name | Description |
| --- | --- |
| genAiCustomizedPlugin | Field TypeGenAiLocalPlugin[]DescriptionA list of custom agent topics. |
| genAiFunctionName | Field TypestringDescriptionThe name of the agent action. |
| genAiPluginName | Field TypestringDescriptionThe name of the agent topic. |

## GenAiLocalPlugin

Represents a custom agent topic.

| Field Name | Description |
| --- | --- |
| aiPluginUtterances | Field TypeAiPluginUtteranceDef[]DescriptionA list of utterances that can be used to pick a topic during runtime. |
| canEscalate | Field TypebooleanDescriptionDetermines whether this topic is applicable for escalation to a rep. |
| description | Field TypestringDescriptionRequired.The description of the topic. |
| genAiFunctions | Field TypeGenAiPluginFunctionDef[]DescriptionA list of functions in the topic. |
| genAiPluginInstructions | Field TypeGenAiPluginInstructionDef[]DescriptionA list of instructions in the topic. |
| language | Field TypestringDescriptionRequired.The language of the topic. |
| masterLabel | Field TypestringDescriptionRequired.The master label for the topic. |
| name | Field TypestringDescriptionRequired.Represents the API name of the topic. This name must be unique across all custom and customized topics. Can contain only underscores and alphanumeric characters and must be unique in your org. It must begin with a letter, not include spaces, not end with an underscore, and not contain two consecutive underscores. |
| pluginType | Field TypePluginType (enumeration of type string)DescriptionRequired.Values are:TopicAPICustomTopic |
| scope | Field TypestringDescriptionA specific job description for a topic. |

## GenAiPlannerRuleExprAsgn

Represents a rule-expression assignment to either a topic or an action.

| Field Name | Description |
| --- | --- |
| ruleExpressionName | Field TypestringDescriptionRequired. The name of the rule expression. |
| targetName | Field TypestringDescriptionRequired. The target of the assignment, which is a Namespace.TopicName.ActionName or a TopicName. |
| targetType | Field TypestringDescriptionRequired. The type of the target. Values are:Function—A knowledge actionPlugin—A topicPluginFunction—An action in a topic |

## GenAiPlannerRuleExprDef

Represents a rule expression, which conditionally locks or unlocks topics and actions based on defined security criteria.

| Field Name | Description |
| --- | --- |
| conditions | Field TypeGenAiPlannerRuleExprCondition[]DescriptionA list of conditions for a rule expression. |
| expression | Field TypestringDescriptionAn expression with the combined conditions. |
| expressionLabel | Field TypestringDescriptionRequired. The expression label. |
| expressionName | Field TypestringDescriptionRequired. The expression name. |
| expressionType | Field TypestringDescriptionThe expression type. Values are:handlebars—Reserved for future usesel—Salesforce Expression Language, as used in formula fields |

## GenAiPlannerRuleExprCondition

Represents a condition for a rule expression.

| Field Name | Description |
| --- | --- |
| leftOperand | Field TypestringDescriptionRequired. The left operand in the expression. |
| leftOperandType | Field TypeGenAiAgentVariableType (enumeration of type string)DescriptionRequired. The type for the left operand. Values are:VariableContextVariableAttribute |
| operator | Field TypeGenAiRuleExpressionOperator (enumeration of type string)DescriptionRequired. The operator in the expression. Values are:equalgreaterThangreaterThanOrEquallessThanlessThanOrEqualnotEqualisEmptyisNotEmpty |
| rightOperandValue | Field TypestringDescriptionThe value for the right operand. |

## Usage

In Winter ‘26 orgs and later, use GenAiPlannerBundle to retrieve topics and actions created in an agent. To retrieve global topics and actions, or those created in the Asset Library, use [GenAiPlugin](atlas.en-us.api_meta.meta/api_meta/meta_genaiplugin.htm "Represents an agent topic, which is a category of actions related to a particular job to be done by AI agents.") and [GenAiFunction](atlas.en-us.api_meta.meta/api_meta/meta_genaifunction.htm "Represents an agent action that can be added to an AI agent.").

In Summer ‘25 orgs and earlier, deploy topic and action metadata using [GenAiPlugin](atlas.en-us.api_meta.meta/api_meta/meta_genaiplugin.htm "Represents an agent topic, which is a category of actions related to a particular job to be done by AI agents.") and [GenAiFunction](atlas.en-us.api_meta.meta/api_meta/meta_genaifunction.htm "Represents an agent action that can be added to an AI agent.").

When deploying topic or action metadata to a Summer '25 (version 64.0) org, retrieve the metadata using Metadata API version 64.0, even if your source org is Winter '26 or later (version 65.0). For Winter \`26 and later, use Metadata API version 65.0 and later.

## Declarative Metadata Sample Definition

Here’s an example of a GenAiPlannerBundle component.

```

```

The following is an example package.xml that references the previous definition.

```

```

## Wildcard Support in the Manifest File

This metadata type supports the wildcard character \* (asterisk) in the package.xml manifest file. For information about using the manifest file, see [Deploying and Retrieving Metadata with the Zip File](atlas.en-us.api_meta.meta/api_meta/file_based_zip_file.htm "The deploy() and retrieve() calls are used to deploy and retrieve a .zip file. Within the .zip file is a project manifest (package.xml) that lists what to retrieve or deploy, and one or more XML components that are organized into folders.").

## Code Examples

```
<?xml version="1.0" encoding="UTF-8"?>
<GenAiPlannerBundle xmlns="http://soap.sforce.com/2006/04/metadata">
    <attributeMappings>
        attributeName>SvcCopilotTmpl__CaseManagement.SvcCopilotTmpl__CreateCaseEnhancedData.verifiedCustomerID</attributeName>
        <attributeType>StandardPluginFunctionInput</attributeType>
        <mappingTargetName>VerifiedCustomerId</mappingTargetName>
        <mappingType>Variable</mappingType>
    </attributeMappings>
    <attributeMappings>
        <attributeName>SvcCopilotTmpl__CaseManagement.SvcCopilotTmpl__GetCasesForVerifiedContact.verifiedContactID</attributeName>
        <attributeType>StandardPluginFunctionInput</attributeType>
        <mappingTargetName>VerifiedCustomerId</mappingTargetName>
        <mappingType>Variable</mappingType>
    </attributeMappings>
    <attributeMappings>
        <attributeName>SvcCopilotTmpl__CaseManagement.SvcCopilotTmpl__GetCaseByVerifiedCaseNumber.verifiedContactID</attributeName>
        <attributeType>StandardPluginFunctionInput</attributeType>
        <mappingTargetName>VerifiedCustomerId</mappingTargetName>
        <mappingType>Variable</mappingType>
    </attributeMappings>
    <attributeMappings>
        <attributeName>SvcCopilotTmpl__ServiceCustomerVerification.SvcCopilotTmpl__SendEmailVerificationCode.authenticationKey</attributeName>
        <attributeType>StandardPluginFunctionOutput</attributeType>
        <mappingTargetName>authenticationKey</mappingTargetName>
        <mappingType>Variable</mappingType>
    </attributeMappings>
    <attributeMappings>
        <attributeName>SvcCopilotTmpl__ServiceCustomerVerification.SvcCopilotTmpl__SendEmailVerificationCode.customerId</attributeName>
        <attributeType>StandardPluginFunctionOutput</attributeType>
        <mappingTargetName>customerId</mappingTargetName>
        <mappingType>Variable</mappingType>
    </attributeMappings>
    <attributeMappings>
        <attributeName>SvcCopilotTmpl__ServiceCustomerVerification.SvcCopilotTmpl__SendEmailVerificationCode.customerType</attributeName>
        <attributeType>StandardPluginFunctionOutput</attributeType>
        <mappingTargetName>customerType</mappingTargetName>
        <mappingType>Variable</mappingType>
    </attributeMappings>
    <attributeMappings>
        <attributeName>SvcCopilotTmpl__ServiceCustomerVerification.SvcCopilotTmpl__VerifyCustomer.authenticationKey</attributeName>
        <attributeType>StandardPluginFunctionInput</attributeType>
        <mappingTargetName>authenticationKey</mappingTargetName>
        <mappingType>Variable</mappingType>
    </attributeMappings>
    <attributeMappings>
        <attributeName>SvcCopilotTmpl__ServiceCustomerVerification.SvcCopilotTmpl__VerifyCustomer.customerId</attributeName>
        <attributeType>StandardPluginFunctionInput</attributeType>
        <mappingTargetName>customerId</mappingTargetName>
        <mappingType>Variable</mappingType>
    </attributeMappings>
    <attributeMappings>
        <attributeName>SvcCopilotTmpl__ServiceCustomerVerification.SvcCopilotTmpl__VerifyCustomer.customerType</attributeName>
        <attributeType>StandardPluginFunctionInput</attributeType>
        <mappingTargetName>customerType</mappingTargetName>
        <mappingType>Variable</mappingType>
    </attributeMappings>
    <attributeMappings>
        <attributeName>SvcCopilotTmpl__ServiceCustomerVerification.SvcCopilotTmpl__VerifyCustomer.isVerified</attributeName>
        <attributeType>StandardPluginFunctionOutput</attributeType>
        <mappingTargetName>isVerified</mappingTargetName>
        <mappingType>Variable</mappingType>
    </attributeMappings>
    <attributeMappings>
        <attributeName>SvcCopilotTmpl__ServiceCustomerVerification.SvcCopilotTmpl__VerifyCustomer.customerId</attributeName>
        <attributeType>StandardPluginFunctionOutput</attributeType>
        <mappingTargetName>VerifiedCustomerId</mappingTargetName>
        <mappingType>Variable</mappingType>
    </attributeMappings>
    <attributeMappings>
        <attributeName>SvcCopilotTmpl__AccountManagement.SvcCopilotTmpl__ResetSecurePassword.verifiedContactID</attributeName>
        <attributeType>StandardPluginFunctionInput</attributeType>
        <mappingTargetName>VerifiedCustomerId</mappingTargetName>
        <mappingType>Variable</mappingType>
    </attributeMappings>
    <attributeMappings>
        <attributeName>SvcCopilotTmpl__AccountManagement.SvcCopilotTmpl__UpdateVerifiedContact.verifiedContactID</attributeName>
        <attributeType>StandardPluginFunctionInput</attributeType>
        <mappingTargetName>VerifiedCustomerId</mappingTargetName>
        <mappingType>Variable</mappingType>
    </attributeMappings>
    <description>Deliver personalized customer interactions with an autonomous AI agent. Agentforce Service Agent intelligently supports your customers with common inquiries and escalates complex issues.</description>
    <genAiFunctions>
        <genAiFunctionName>EmployeeCopilot__AnswerQuestionsWithKnowledge</genAiFunctionName>
    </genAiFunctions>
    <genAiPlugins>
        <genAiPluginName>SvcCopilotTmpl__AccountManagement</genAiPluginName>
    </genAiPlugins>
    <genAiPlugins>
        <genAiPluginName>SvcCopilotTmpl__CaseManagement</genAiPluginName>
    </genAiPlugins>
    <genAiPlugins>
        <genAiPluginName>SvcCopilotTmpl__Escalation</genAiPluginName>
    </genAiPlugins>
    <genAiPlugins>
        <genAiPluginName>SvcCopilotTmpl__GeneralFAQ</genAiPluginName>
    </genAiPlugins>
    <genAiPlugins>
        <genAiPluginName>SvcCopilotTmpl__ServiceCustomerVerification</genAiPluginName>
    </genAiPlugins>
    <masterLabel>ASA Template Base</masterLabel>
    <plannerType>AiCopilot__ReAct</plannerType>
    <ruleExpressionAssignments>
        <ruleExpressionName>Verified_User</ruleExpressionName>
        <targetName>SvcCopilotTmpl__AccountManagement</targetName>
        <targetType>Plugin</targetType>
    </ruleExpressionAssignments>
    <ruleExpressionAssignments>
        <ruleExpressionName>Verified_User</ruleExpressionName>
        <targetName>SvcCopilotTmpl__CaseManagement</targetName>
        <targetType>Plugin</targetType>
    </ruleExpressionAssignments>
    <ruleExpressions>
        <conditions>
            <leftOperand>isVerified</leftOperand>
            <leftOperandType>Variable</leftOperandType>
            <operator>equal</operator>
            <rightOperandValue>true</rightOperandValue>
        </conditions>
        <expression>Verified_User</expression>
        <expressionLabel>Verified User</expressionLabel>
        <expressionName>Verified_User</expressionName>
        <expressionType>sel</expressionType>
    </ruleExpressions>
</GenAiPlannerBundle>
```

```
<?xml version="1.0" encoding="UTF-8"?>
<Package xmlns="http://soap.sforce.com/2006/04/metadata">
   <types>
      <members>*</members>
      <name>GenAiPlannerBundle</name>
   </types>
   <version>64.0</version>
</Package>
```

## Related Topics

- Metadata (atlas.en-us.api_meta.meta/api_meta/metadata.htm)
- AiPluginUtteranceDef (atlas.en-us.api_meta.meta/api_meta/meta_aipluginutterancedef.htm)
- GenAiPluginFunctionDef (atlas.en-us.api_meta.meta/api_meta/meta_genaiplugin.htm)
- GenAiPluginInstructionDef (atlas.en-us.api_meta.meta/api_meta/meta_genaiplugininstructiondef.htm)
- GenAiPlugin (atlas.en-us.api_meta.meta/api_meta/meta_genaiplugin.htm)
- GenAiFunction (atlas.en-us.api_meta.meta/api_meta/meta_genaifunction.htm)
- Deploying and Retrieving Metadata with the Zip File (atlas.en-us.api_meta.meta/api_meta/file_based_zip_file.htm)
