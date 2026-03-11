---
title: "GenAiPlanner"
domain: metadata-api
topic: genaiplanner
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T15:45:52.903Z
keywords: [GenAiPlanner, Parent, Type, File, Suffix, Directory, Location, Version, Special, Access, Rules, Fields, GenAiPlannerAttrMapping, GenAiPlannerFunctionDef, GenAiLocalPlugin, GenAiPlannerRuleExprAsgn, GenAiPlannerRuleExprDef, GenAiPlannerRuleExprCondition, Declarative, Metadata]
---

# GenAiPlanner

# GenAiPlanner

Represents a planner for an agent. It’s a container for all the topics and actions used to interact with a large language model (LLM).

## Parent Type

This type extends the [Metadata](atlas.en-us.api_meta.meta/api_meta/metadata.htm "The base class for all metadata types. You can’t edit this object. A component is an instance of a metadata type.") metadata type and inherits its fullName field.

## File Suffix and Directory Location

GenAiPlanner components have the suffix .genAiPlanner and are stored in the genAiPlanners folder.

## Version

GenAiPlanner components are available in API version 60.0 to 63.0. GenAiPlannerBundle replaces GenAiPlanner in API version 64.0 and later.

## Special Access Rules

GenAiPlanner is available only if Agents is enabled in your org.

## Fields

| Field Name | Description |
| --- | --- |
| attributeMappings | Field TypeGenAiPlannerAttrMapping[]DescriptionA list of action attribute mappings. |
| capabilities | Field TypestringDescriptionA set of tags associated with the agent. |
| description | Field TypestringDescriptionA description explaining the general purpose and domain of the agent. |
| genAiFunctions | Field TypeGenAiPlannerFunctionDef[]DescriptionA list of agent action definitions, such as a knowledge action, that are not contained in a topic. |
| genAiPlannerRuleExpressions | Field TypeGenAiPlannerRuleExpr[]DescriptionDeprecated. Use ruleExpressions instead. |
| genAiPlugins | Field TypeGenAiPlannerFunctionDef[]DescriptionA list of agent topic definitions. |
| masterLabel | Field TypestringDescriptionRequired. The master label for the planner. |
| plannerType | Field TypePlannerType (enumeration of type string)DescriptionRequired. A particular approach to problem solving that is given as prompt instructions to a large language model (LLM).The only supported value is:AiCopilot__ReAct—Uses a reactive reasoning strategy to solve problems with the LLM. This strategy consists of prompting the LLM to generate the next step in response to an event and the current context. It differs from a sequential reasoning engine in that it doesn’t plan more than one step ahead of time. |
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
| description | Field TypestringDescriptionThe description of the topic. |
| genAiFunctions | Field TypeGenAiPluginFunctionDef[]DescriptionA list of functions in the topic. |
| genAiPluginInstructions | Field TypeGenAiPluginInstructionDef[]DescriptionA list of instructions in the topic. |
| language | Field TypestringDescriptionRequired.The language of the topic. |
| masterLabel | Field TypestringDescriptionRequired.The master label for the topic. |
| name | Field TypestringDescriptionRequired.Represents the API name of the topic. This name must be unique across all custom and customized topics. Can contain only underscores and alphanumeric characters and must be unique in your org. It must begin with a letter, not include spaces, not end with an underscore, and not contain two consecutive underscores. |
| pluginType | Field TypePluginType (enumeration of type string)DescriptionRequired.Values are:Topic |
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

## Declarative Metadata Sample Definition

The following is an example of a GenAiPlanner component.

```

```

The following is an example package.xml that references the previous definition.

```

```

## Wildcard Support in the Manifest File

This metadata type supports the wildcard character \* (asterisk) in the package.xml manifest file. For information about using the manifest file, see [Deploying and Retrieving Metadata with the Zip File](atlas.en-us.api_meta.meta/api_meta/file_based_zip_file.htm "The deploy() and retrieve() calls are used to deploy and retrieve a .zip file. Within the .zip file is a project manifest (package.xml) that lists what to retrieve or deploy, and one or more XML components that are organized into folders.").