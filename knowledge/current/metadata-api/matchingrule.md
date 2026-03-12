---
title: "MatchingRule"
domain: metadata-api
topic: matchingrule
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:41.082Z
estimatedTokens: 844
keywords: [MatchingRule, Represents, matching, rule, used, identify, duplicate, records., File, Suffix, Directory, Location, Version, Fields, MatchingRuleItem, Declarative, Metadata, Sample, Definition, Wildcard]
---

# MatchingRule

> Represents a matching rule that is used to identify duplicate
   records.

# MatchingRule

Represents a matching rule that is used to identify duplicate records.

This type extends the [Metadata](atlas.en-us.api_meta.meta/api_meta/metadata.htm "The base class for all metadata types. You can’t edit this object. A component is an instance of a metadata type.") metadata type and inherits its fullName field.

## File Suffix and Directory Location

Matching rule components have the .matchingRule suffix and are stored in the matchingRules folder. The name of the component file is the standard or custom object name that is associated with the matching rule.

In API version 39.0 and later, MatchingRule supports the Person Account object.

-   The component file name is PersonAccount.matchingRule.
-   The component directory is matchingRules.

## Version

MatchingRule is available in API version 33.0 and later.

## Fields

| Field Name | Field Type | Description |
| --- | --- | --- |
| booleanFilter | string | Specifies filter logic conditions. |
| description | string | The description of the matching rule. |
| label | string | Required. The name of the matching rule. |
| matchingRuleItems | MatchingRuleItem | The criteria that make up a matching rule. |
| ruleStatus | MatchingRuleStatus (enumeration of type string) | Required. The activation status of the matching rule. Values are:InactiveDeactivatingDeactivationFailedActiveActivatingActivationFailedImportantThe only valid values you can declare when deploying a package are Active and Inactive. |

## MatchingRuleItem

| Field Name | Field Type | Description |
| --- | --- | --- |
| blankValueBehavior | BlankValueBehavior (enumeration of type string) | Specifies how blank fields affect whether the fields being compared are considered matches. Valid values are:MatchBlanksNullNotAllowed (default) |
| fieldName | string | Required. Indicates which field to compare when determining if a record is similar enough to an existing record to be considered a match. |
| matchingMethod | MatchingMethod (enumeration of type string) | Required. Defines how the fields are compared. Choose between the exact matching method and various fuzzy matching methods. Valid values are:ExactFirstNameLastNameCompanyNamePhoneCityStreetZipTitleFor details on each matching method, see “Matching Methods Used with Matching Rules” in the Salesforce Help. |

## Declarative Metadata Sample Definition

The following is a sample XML definition of a matching rule. A matching rule can be associated with either a standard or a custom object.

```

```

The following package.xml shows how to reference a matching rule by name. It specifies the type name of MatchingRule.

```

```

The following package.xml shows how to reference all matching rules by specifying the plural MatchingRules type name and using a wildcard to include all members.

```

```

## Wildcard Support in the Manifest File

This metadata type supports the wildcard character \* (asterisk) in the package.xml manifest file. For information about using the manifest file, see [Deploying and Retrieving Metadata with the Zip File](atlas.en-us.api_meta.meta/api_meta/file_based_zip_file.htm "The deploy() and retrieve() calls are used to deploy and retrieve a .zip file. Within the .zip file is a project manifest (package.xml) that lists what to retrieve or deploy, and one or more XML components that are organized into folders.").

## Code Examples

```
<?xml version="1.0" encoding="UTF-8"?>
<MatchingRules xmlns="http://soap.sforce.com/2006/04/metadata">
<matchingRules>
<fullName>AccountMatchingRule</fullName>
<label>Matching rule for accounts</label>
<description>this is sample rule description</description>
<matchingRuleItems>
<blankValueBehavior>NullNotAllowed</blankValueBehavior>
<fieldName>BillingCity</fieldName>
<matchingMethod>City</matchingMethod>
</matchingRuleItems>

<matchingRuleItems>
<blankValueBehavior>NullNotAllowed</blankValueBehavior>
<fieldName>Name</fieldName>
<matchingMethod>CompanyName</matchingMethod>
</matchingRuleItems>

<ruleStatus>Inactive</ruleStatus>
</matchingRules>
</MatchingRules>
```

```
<?xml version="1.0" encoding="UTF-8"?>
<Package xmlns="http://soap.sforce.com/2006/04/metadata">
<types>
<members>Account.AccountMatchingRule</members>
<name>MatchingRule</name>
</types>
<version>66.0</version>
</Package>
```

```
<?xml version="1.0" encoding="UTF-8"?>
<Package xmlns="http://soap.sforce.com/2006/04/metadata">
<types>
<members>*</members>
<name>MatchingRules</name>
</types>
<version>66.0</version>
</Package>
```

## Related Topics

- Metadata (atlas.en-us.api_meta.meta/api_meta/metadata.htm)
- enumeration (atlas.en-us.api_meta.meta/api_meta/meta_objects_intro.htm)
- Deploying and Retrieving Metadata with the Zip File (atlas.en-us.api_meta.meta/api_meta/file_based_zip_file.htm)
