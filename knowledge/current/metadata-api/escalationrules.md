---
title: "EscalationRules"
domain: metadata-api
topic: escalationrules
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:39.008Z
estimatedTokens: 1162
keywords: [EscalationRules, case, escalation, rules, escalate, cases, automatically, they, aren’t, resolved, certain, time, access, metadata, applicable]
---

# EscalationRules

> Represents case escalation rules to escalate cases
            automatically if they aren’t resolved within a certain time. You can access rules
            metadata for all applicable objects, for a specific object, or for a specific rule on a
            specific object.

# EscalationRules

Represents case escalation rules to escalate cases automatically if they aren’t resolved within a certain time. You can access rules metadata for all applicable objects, for a specific object, or for a specific rule on a specific object.

The package.xml syntax for accessing all escalation rules for all objects is:

```

```

All rules for a specific object use a similar syntax without the wildcard. For example, all escalation rules for the Case object would use this syntax:

```

```

You can also access specific escalation rules for an object. The following example only accesses the “samplerule” and “newrule” escalation rules on the Case object. Notice that for this example the type name syntax is EscalationRule and not EscalationRules.

```

```

## File Suffix and Directory Location

EscalationRules for an object have the suffix .escalationRules and are stored in the escalationRules folder. For example, all Case escalation rules are stored in the Case.escalationRules file.

## Version

EscalationRules components are available in API version 27.0 and later.

## Fields

| Field Name | Field Type | Description |
| --- | --- | --- |
| escalationRule | EscalationRule[] | Represents one escalation rule and specifies whether it’s active or not. Escalation rules are processed in the order they appear in the EscalationRules container. |

## EscalationRule

| Field Name | Field Type | Description |
| --- | --- | --- |
| active | boolean | Indicates whether the escalation rule is active (true) or not (false). |
| fullname | string | Inherited from Metadata, this field is defined in the WSDL for this metadata type. It must be specified when creating, updating, or deleting. See createMetadata() to see an example of this field specified for a call.This value can't be null. |
| ruleEntry | RuleEntry[] | Contains the definitions of the rule entries in the escalation rule. |

## RuleEntry

Represents the fields used by the rule.

| Field Name | Field Type | Description |
| --- | --- | --- |
| booleanFilter | string | Advanced filter conditions that were specified for the rule. |
| businessHours | string | The hours when escalation actions are performed. Specify only if businessHoursSource is set to Static. |
| businessHoursSource | BusinessHoursSourceType (enumerations of type string) | Valid values are:NoneCaseStatic |
| criteriaItems | FilterItem | The items in the list that define the assignment criteria. |
| disableEscalationWhenModified | boolean | Indicates whether the escalation is disabled when the record is modified true) or not (false). |
| escalationAction | EscalationAction[] | The actions to perform when the escalation criteria are met. |
| escalationStartTime | EscalationStartTimeType (enumeration of type string) | Indicates the start time for the escalation. Valid values are:CaseCreationCaseLastModified |
| formula | string | The validation formula.Specify either formula or criteriaItems, but not both fields. |

## EscalationAction

Describes the action to take for an escalation rule.

| Field Name | Field Type | Description |
| --- | --- | --- |
| assignedTo | string | The name of the user or queue the item is assigned to. |
| assignedToTemplate | string | Specifies the template to use for the email that is automatically sent to the new owner specified by the escalation rule.Lightning email templates aren’t packageable. We recommend using a Classic email template. |
| assignedToType | AssignToLookupValueType (enumeration of type string) | Valid values are:UserQueue |
| minutesToEscalation | int | The number of minutes until the escalation occurs. |
| notifyCaseOwner | boolean | Indicates that the owner of the case is notified when the case is escalated true) or not (false). |
| notifyEmail | string | Specifies the email address of the user to notify. |
| notifyTo | string | Specifies the user to notify. |
| notifyToTemplate | string | Specifies the template to user for the notification email. |

## Declarative Metadata Sample Definition

The following is an example EscalationRules component:

```

```

## Wildcard Support in the Manifest File

This metadata type supports the wildcard character \* (asterisk) in the package.xml manifest file. For information about using the manifest file, see [Deploying and Retrieving Metadata with the Zip File](atlas.en-us.api_meta.meta/api_meta/file_based_zip_file.htm "The deploy() and retrieve() calls are used to deploy and retrieve a .zip file. Within the .zip file is a project manifest (package.xml) that lists what to retrieve or deploy, and one or more XML components that are organized into folders.").

## Code Examples

```
<types>
        <members>*</members>
        <name>EscalationRules</name>
    </types>
```

```
<types>
        <members>Case</members>
        <name>EscalationRules</name>
    </types>
```

```
<types>
        <members>Case.samplerule</members>
        <members>Case.newrule</members>
        <name>EscalationRule</name>
    </types>
```

```
<EscalationRules xmlns="http://soap.sforce.com/2006/04/metadata">
    <escalationRule>
        <fullName>samplerule</fullName>
        <active>false</active>
        <ruleEntry>
            <businessHours>test</businessHours>
            <businessHoursSource>Static</businessHoursSource>
            <criteriaItems>
                <field>Case.Description</field>
                <operation>contains</operation>
                <value>test</value>
            </criteriaItems>
            <escalationAction>
                <assignedTo>someuser@org.com</assignedTo>
                <assignedToTemplate>emailtemplatename</assignedToTemplate>
                <assignedToType>User</assignedToType>
                <minutesToEscalation>1440</minutesToEscalation>
                <notifyCaseOwner>false</notifyCaseOwner>
            </escalationAction>
            <escalationStartTime>CaseLastModified</escalationStartTime>
        </ruleEntry>
    </escalationRule>
</EscalationRules>
```

## Related Topics

- Metadata (atlas.en-us.api_meta.meta/api_meta/metadata.htm)
- createMetadata() (atlas.en-us.api_meta.meta/api_meta/meta_createMetadata.htm)
- FilterItem (atlas.en-us.api_meta.meta/api_meta/customfield.htm)
- Deploying and Retrieving Metadata with the Zip File (atlas.en-us.api_meta.meta/api_meta/file_based_zip_file.htm)
