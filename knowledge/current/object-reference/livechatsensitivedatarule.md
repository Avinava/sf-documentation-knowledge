---
title: "LiveChatSensitiveDataRule"
domain: object-reference
topic: livechatsensitivedatarule
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:35:12.390Z
estimatedTokens: 1064
keywords: [LiveChatSensitiveDataRule, rule, masking, deleting, data, pattern, Written, regular, expression, regex, API, version, 35.0, later, Calls]
---

# LiveChatSensitiveDataRule

> Represents a rule for masking or deleting data of a specified pattern.
   Written as a regular expression (regex). This object is available in API version 35.0 and
  later.

# LiveChatSensitiveDataRule

Represents a rule for masking or deleting data of a specified pattern. Written as a regular expression (regex). This object is available in API version 35.0 and later.

## Supported Calls

create(), delete(), describeSObjects(), query(), update(), retrieve()

## Special Access Rules

As of Summer ’20 and later, only authenticated internal and external users can access this object.

## Fields

| Field Name | Details |
| --- | --- |
| ActionType | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, Sort, UpdateDescriptionThe action to take on the text (remove or replace) when the sensitive data rule is triggered. |
| Description | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionThe description of the sensitive data rule—for example, “Block social security numbers.” |
| DeveloperName | TypestringPropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe unique name of the object in the API. This name can contain only underscores and alphanumeric characters, and must be unique in your org. It must begin with a letter, not include spaces, not end with an underscore, and not contain two consecutive underscores. In managed packages, this field prevents naming conflicts on package installations. With this field, a developer can change the object’s name in a managed package and the changes are reflected in a subscriber’s organization.NoteWhen creating large sets of data, always specify a unique DeveloperName for each record. If no DeveloperName is specified, performance slows down while Salesforce generates one for each record.NoteOnly users with View DeveloperName OR View Setup and Configuration permission can view, group, sort, and filter this field. |
| EnforceOn | TypeintPropertiesCreate, Filter, Group, Sort, UpdateDescriptionDetermines the roles on which the rule is enforced. The value is determined using bitwise OR operation. There are seven possible values:Rule enforced on AgentRule enforced on VisitorRule enforced on Agent and VisitorRule enforced on SupervisorRule enforced on Agent and SupervisorRule enforced on Visitor and SupervisorRule enforced on Agent, Visitor, and Supervisor |
| IsEnabled | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionSpecifies whether a sensitive data rule is active (true) or not (false). Default value (if none is provided) is false. |
| Language | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe language of the sensitive data rule. |
| MasterLabel | TypestringPropertiesCreate, Filter, Group, Sort, UpdateDescriptionLabel for the sensitive data rule. |
| NamespacePrefix | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe namespace prefix that is associated with this object. Each Developer Edition org that creates a managed package has a unique namespace prefix. Limit: 15 characters. You can refer to a component in a managed package by using the namespacePrefix__componentName notation.The namespace prefix can have one of the following values.In Developer Edition orgs, NamespacePrefix is set to the namespace prefix of the org for all objects that support it, unless an object is in an installed managed package. In that case, the object has the namespace prefix of the installed managed package. This field’s value is the namespace prefix of the Developer Edition org of the package developer.In orgs that are not Developer Edition orgs, NamespacePrefix is set only for objects that are part of an installed managed package. All other objects have no namespace prefix. |
| Pattern | TypetextareaPropertiesCreate, UpdateDescriptionThe pattern of text blocked by the rule. Written as a JavaScript regular expression (regex). |
| Priority | TypeintPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionIndicates the priority level of a Chat. |
| Replacement | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe string of characters that replaces the blocked text (if ActionType Replace is selected). |

## Usage

Use this object to mask or delete data of specified patterns, such as credit card, social security, phone and account numbers, or even profanity.
