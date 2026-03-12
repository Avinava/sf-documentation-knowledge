---
title: "ValidationRule"
domain: metadata-api
topic: validationrule
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:43.559Z
estimatedTokens: 818
keywords: [ValidationRule, Represents, validation, rule, which, used, verify, data, user, enters, record, valid, saved., contains, formula, expression, evaluates, fields, true, false.]
---

# ValidationRule

> Represents a validation rule, which is used to
            verify that the data a user enters in a record is valid and can be saved. A validation
            rule contains a formula or expression that evaluates the data in one or more fields and
            returns a value of true or false. Validation rules also include an error message that your client
            application can display to the user when the rule returns a value of true due to invalid data.

# ValidationRule

Represents a validation rule, which is used to verify that the data a user enters in a record is valid and can be saved. A validation rule contains a formula or expression that evaluates the data in one or more fields and returns a value of true or false. Validation rules also include an error message that your client application can display to the user when the rule returns a value of true due to invalid data.

This type extends the [Metadata](atlas.en-us.api_meta.meta/api_meta/metadata.htm "The base class for all metadata types. You can’t edit this object. A component is an instance of a metadata type.") metadata type and inherits its fullName field.

As of API version 20.0, validation rules can't have compound fields. Examples of compound fields include addresses, first and last names, dependent picklists, and dependent lookups.

As of API version 40.0, you can use validation rules with custom metadata types.

## Version

Validation rules are available in API version 12.0 and later.

## Fields

| Field Name | Field Type | Description |
| --- | --- | --- |
| active | boolean | Required. Indicates whether this validation rule is active, (true), or not active (false). |
| description | string | A description of the validation rule. |
| errorConditionFormula | string | Required. The formula defined in the validation rule. If the formula returns a value of true, an error message is displayed. |
| errorDisplayField | string | The fully specified name of a field in the application. If a value is supplied, the error message appears next to the specified field. If you do not specify a value or the field isn’t visible on the page layout, the value changes automatically to Top of Page. |
| errorMessage | string | Required. The message that appears if the validation rule fails. The message must be 255 characters or less. |
| fullName | string | The internal name of the object. White spaces and special characters are escaped for validity. The name must:Contain characters, letters, or the underscore (_) characterMust start with a letterCan’t end with an underscoreCan't contain two consecutive underscore characters.Inherited from the Metadata component, this field isn’t defined in the WSDL for this component. It must be specified when creating, updating, or deleting. See create() to see an example of this field specified for a call. |

## Declarative Metadata Sample Definition

A sample XML definition of a validation rule in a custom object is shown in this code block.

```

```

## Wildcard Support in the Manifest File

This metadata type doesn’t support the wildcard character \* (asterisk) in the package.xml manifest file. For information about using the manifest file, see [Deploying and Retrieving Metadata with the Zip File](atlas.en-us.api_meta.meta/api_meta/file_based_zip_file.htm "The deploy() and retrieve() calls are used to deploy and retrieve a .zip file. Within the .zip file is a project manifest (package.xml) that lists what to retrieve or deploy, and one or more XML components that are organized into folders.").

-   [← Previous](atlas.en-us.api_meta.meta/api_meta/meta_apexsharingrecalculation.htm "SharingRecalculation")
-   [Next →](atlas.en-us.api_meta.meta/api_meta/meta_weblink.htm "WebLink")

## Code Examples

```
<?xml version="1.0" encoding="UTF-8"?>
<CustomObject xmlns="http://soap.sforce.com/2006/04/metadata">
    <deploymentStatus>Deployed</deploymentStatus>
    <fields>
        <fullName>Mommy_Cat__c</fullName>
        <label>Mommy Cat</label>
        <referenceTo>Cat__c</referenceTo>
        <relationshipName>Cats</relationshipName>
        <type>Lookup</type>
    </fields>
    <label>Cat</label>
    <nameField>
        <label>Cat Name</label>
        <type>Text</type>
    </nameField>
    <pluralLabel>Cats</pluralLabel>
    <sharingModel>ReadWrite</sharingModel>
    <validationRules>
        <fullName>CatsRule</fullName>
        <active>true</active>
        <errorConditionFormula>OR(Name = &apos;Milo&apos;,Name = &apos;Moop&apos;)</errorConditionFormula>
        <validationMessage>Name must be that of one of my cats</validationMessage>
    </validationRules>
</CustomObject>
```

## Related Topics

- Metadata (atlas.en-us.api_meta.meta/api_meta/metadata.htm)
- create() (atlas.en-us.api_meta.meta/api_meta/meta_create.htm)
- Deploying and Retrieving Metadata with the Zip File (atlas.en-us.api_meta.meta/api_meta/file_based_zip_file.htm)
- ← Previous (atlas.en-us.api_meta.meta/api_meta/meta_apexsharingrecalculation.htm)
- Next → (atlas.en-us.api_meta.meta/api_meta/meta_weblink.htm)
