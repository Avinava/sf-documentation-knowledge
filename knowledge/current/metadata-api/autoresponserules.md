---
title: "AutoResponseRules"
domain: metadata-api
topic: autoresponserules
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:36.930Z
estimatedTokens: 891
keywords: [AutoResponseRules, auto-response, rule, conditions, sending, automatic, email, responses, lead, case, submissions, attributes, submitted, record, access]
---

# AutoResponseRules

> Represents an auto-response rule that sets conditions
            for sending automatic email responses to lead or case submissions based on the
            attributes of the submitted record. You can access rules metadata for all applicable
            objects, for a specific object, or for a specific rule on a specific
        object.

# AutoResponseRules

Represents an auto-response rule that sets conditions for sending automatic email responses to lead or case submissions based on the attributes of the submitted record. You can access rules metadata for all applicable objects, for a specific object, or for a specific rule on a specific object.

The package.xml syntax for accessing all auto-response rules for all objects is:

```

```

All rules for a specific object use a similar syntax without the wildcard. For example, all auto-response rules for the Case object would use this syntax:

```

```

You can also access specific auto-response rules for an object. The following example only accesses the “samplerule” and “newrule” auto-response rules on the Case object. Notice that for this example the type name syntax is AutoResponseRule and not AutoResponseRules.

```

```

## File Suffix and Directory Location

AutoResponseRules for an object have the suffix .autoResponseRules and are stored in the autoResponseRules folder. For example, all Case auto-response rules are stored in the Case.autoResponseRules file.

## Version

AutoResponseRules components are available in API version 27.0 and later.

## Fields

| Field Name | Field Type | Description |
| --- | --- | --- |
| autoresponseRule | AutoResponseRule[] | Represents the definitions of the named auto-response rules. |

## AutoResponseRule

Represents whether a rule is active or not and the order in which the entry is processed in the rule.

| Field Name | Field Type | Description |
| --- | --- | --- |
| active | boolean | Indicates whether the autoresponse rule is active (true) or not (false). |
| fullname | string | Inherited from Metadata, this field is defined in the WSDL for this metadata type. It must be specified when creating, updating, or deleting. See createMetadata() to see an example of this field specified for a call.This value can't be null. |
| ruleEntry | RuleEntry[] | Represents the type and description for the auto-response rule. |

## RuleEntry

Represents the fields used by the rule.

| Field Name | Field Type | Description |
| --- | --- | --- |
| booleanFilter | string | Advanced filter conditions that were specified for the rule. |
| criteriaItems | FilterItem[] | The items in the list that define the assignment criteria. |
| formula | string | The validation formula.Specify either formula or criteriaItems, but not both fields. |
| replyToEmail | string | The email address that appears in the reply-to header. |
| senderEmail | string | The email address of the person or queue sending the email notification. |
| senderName | string | The name of the person or queue sending the email notification. |
| template | string | Specifies the template to use for the email that is automatically sent to the designated recipient.Lightning email templates aren’t packageable. We recommend using a Classic email template. |

## Declarative Metadata Sample Definition

The following is an example AutoResponseRules component:

```

```

## Wildcard Support in the Manifest File

This metadata type supports the wildcard character \* (asterisk) in the package.xml manifest file. For information about using the manifest file, see [Deploying and Retrieving Metadata with the Zip File](atlas.en-us.api_meta.meta/api_meta/file_based_zip_file.htm "The deploy() and retrieve() calls are used to deploy and retrieve a .zip file. Within the .zip file is a project manifest (package.xml) that lists what to retrieve or deploy, and one or more XML components that are organized into folders.").

## Code Examples

```
<types>
        <members>*</members>
        <name>AutoResponseRules</name>
    </types>
```

```
<types>
        <members>Case</members>
        <name>AutoResponseRules</name>
    </types>
```

```
<types>
        <members>Case.samplerule</members>
        <members>Case.newrule</members>
        <name>AutoResponseRule</name>
    </types>
```

```
<AutoResponseRules xmlns="http://soap.sforce.com/2006/04/metadata">
    <autoResponseRule>
        <fullName>ajbdeploytest2</fullName>
        <active>false</active>
        <ruleEntry>
            <criteriaItems>
                <field>Case.Description</field>
                <operation>contains</operation>
                <value>testing</value>
            </criteriaItems>
            <senderEmail>test@test.org</senderEmail>
            <senderName>tester name j</senderName>
            <replyToEmail>test@@test.org</replyToEmail>
            <template>emailtemplate</template>
        </ruleEntry>
    </autoResponseRule>
</AutoResponseRules>
```

## Related Topics

- Metadata (atlas.en-us.api_meta.meta/api_meta/metadata.htm)
- createMetadata() (atlas.en-us.api_meta.meta/api_meta/meta_createMetadata.htm)
- FilterItem (atlas.en-us.api_meta.meta/api_meta/customfield.htm)
- Deploying and Retrieving Metadata with the Zip
                    File (atlas.en-us.api_meta.meta/api_meta/file_based_zip_file.htm)
