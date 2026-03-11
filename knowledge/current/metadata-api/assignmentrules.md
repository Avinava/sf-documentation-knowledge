---
title: "AssignmentRules"
domain: metadata-api
topic: assignmentrules
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T15:45:50.667Z
keywords: [AssignmentRules, File, Suffix, Directory, Location, Version, Fields, AssignmentRule, RuleEntry, Declarative, Metadata, Sample, Definition, Wildcard, Support, Manifest]
---

# AssignmentRules

# AssignmentRules

Represents assignment rules that allow you to automatically route cases to the appropriate users or queues. You can access rules metadata for all applicable objects, for a specific object, or for a specific rule on a specific object.

The package.xml syntax for accessing all assignment rules for all objects is:

```

```

All rules for a specific object use a similar syntax without the wildcard. For example, all assignment rules for the Case object would use this syntax:

```

```

You can also access specific assignment rules for an object. The following example only accesses the “samplerule” and “newrule” assignment rules on the Case object. Notice that for this example the type name syntax is AssignmentRule and not AssignmentRules.

```

```

## File Suffix and Directory Location

Assignment rules for an object have the suffix .assignmentRules and are stored in the assignmentRules folder. For example, all Case assignment rules are stored in the Case.assignmentRules file.

## Version

AssignmentRules components are available in API version 27.0 and later.

## Fields

| Field Name | Field Type | Description |
| --- | --- | --- |
| assignmentRule | AssignmentRule[] | Represents the definitions of the named assignment rules. |

## AssignmentRule

Specifies whether the rule is active or not and its definition. Rules are processed in the order they appear within the AssignmentRules container.

| Field Name | Field Type | Description |
| --- | --- | --- |
| active | boolean | Indicates whether the assignment rule is active (true) or not (false). |
| fullname | string | Inherited from Metadata, this field is defined in the WSDL for this metadata type. It must be specified when creating, updating, or deleting. See createMetadata() to see an example of this field specified for a call.This value can't be null. |
| ruleEntry | RuleEntry[] | Represents the type and description for the assignment rule. |

## RuleEntry

Represents the fields used by the rule.

| Field Name | Field Type | Description |
| --- | --- | --- |
| assignedTo | string | The name of the user or queue the item is assigned to. |
| assignedToType | AssignToLookupValueType (enumeration of type string) | Valid values are:UserQueue |
| booleanFilter | string | Advanced filter conditions that were specified for the rule. |
| criteriaItems | FilterItem[] | The items in the list that define the assignment criteria. |
| formula | string | The validation formula.Specify either formula or criteriaItems, but not both fields. |
| notifyCcRecipients | boolean | Specifies whether email addresses included on the Cc line of an incoming Email-to-Case or Web-to-Lead message are included on the Cc line of the auto-response to that message (true) or not (false). Available in API version 32.0 and later. |
| overrideExistingTeams | boolean | Specifies whether the case team resets when the assignment is done true) or if the current team is added to the case instead of replacing the previous team (false). |
| team | string[] | The name of the case team. It can occur 0 or more times. |
| template | string | Specifies the template to use for the email that is automatically sent to the designated recipient.Lightning email templates aren’t packageable. We recommend using a Classic email template. |

## Declarative Metadata Sample Definition

The following is an example file showing two assignment rules on the Case object:

```

```

## Wildcard Support in the Manifest File

This metadata type supports the wildcard character \* (asterisk) in the package.xml manifest file. For information about using the manifest file, see [Deploying and Retrieving Metadata with the Zip File](atlas.en-us.api_meta.meta/api_meta/file_based_zip_file.htm "The deploy() and retrieve() calls are used to deploy and retrieve a .zip file. Within the .zip file is a project manifest (package.xml) that lists what to retrieve or deploy, and one or more XML components that are organized into folders.").