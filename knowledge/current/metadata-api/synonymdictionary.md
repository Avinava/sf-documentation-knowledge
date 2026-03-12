---
title: "SynonymDictionary"
domain: metadata-api
topic: synonymdictionary
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:42.436Z
estimatedTokens: 863
keywords: [SynonymDictionary, synonym, groups, words, phrases, treated, equivalent, users’, searches, define, optimize, search, results, acronyms, variations]
---

# SynonymDictionary

> Represents a set of synonym groups, which are groups
            of words or phrases that are treated as equivalent in users’ searches. You can
            define synonym groups to optimize search results for acronyms, variations of product
            names, and other terminology unique to your organization.

# SynonymDictionary

Represents a set of synonym groups, which are groups of words or phrases that are treated as equivalent in users’ searches. You can define synonym groups to optimize search results for acronyms, variations of product names, and other terminology unique to your organization.

Synonyms are available in Service Cloud features such as Salesforce Knowledge. This type extends the [Metadata](atlas.en-us.api_meta.meta/api_meta/metadata.htm "The base class for all metadata types. You can’t edit this object. A component is an instance of a metadata type.") metadata type and inherits its fullName field.

## File Suffix and Directory Location

SynonymDictionary components have the suffix .synonymDictionary and are stored in the synonymDictionaries folder.

## Version

SynonymDictionary components are available in API version 29.0 and later.

## Special Access Rules

Synonyms must be enabled in your organization. Only users with the “Manage Synonyms” permission can access this object.

## Fields

| Field Name | Field Type | Description |
| --- | --- | --- |
| groups | SynonymGroup | The synonym groups defined in this dictionary. |
| isProtected | boolean | Indicates whether this component is protected (true) or not (false). Protected components cannot be linked to or referenced by components created in the installing organization. |
| label | string | Required. Specifies the display name of the synonym dictionary. |

## SynonymGroup

Represents a group of synonymous words or phrases.

| Field Name | Field Type | Description |
| --- | --- | --- |
| languages | Language | Required. Specifies the languages the synonym group applies to. If synonyms are specific to a single language, specify only that language. If the synonyms apply to multiple languages, specify multiple languages for one synonym group. |
| terms | string | Required. A word or phrase synonymous with other terms in the group. Maximum of 50 characters. Minimum of two terms per group.Synonym groups are symmetric, which means that if oranges and apples are defined in a synonym group, a search for oranges will return a match for apples, and vice versa for a search for apples. |

## Declarative Metadata Sample Definition

The following is an example of a SynonymDictionary component:

```

```

The following is an example package.xml that references the SynonymDictionary component.

```

```

## Usage

If you have existing synonym groups defined before API version 29.0, your existing groups are associated with a default dictionary called \_Default.

If you have a set of synonyms that require frequent updates, we recommend assigning the synonym group or groups to a dedicated dictionary with a small number of groups. Each time you deploy an existing dictionary, all of its synonym groups are overwritten. We don’t support deploying updates to only a single synonym group within a dictionary.

## Wildcard Support in the Manifest File

This metadata type supports the wildcard character \* (asterisk) in the package.xml manifest file. For information about using the manifest file, see [Deploying and Retrieving Metadata with the Zip File](atlas.en-us.api_meta.meta/api_meta/file_based_zip_file.htm "The deploy() and retrieve() calls are used to deploy and retrieve a .zip file. Within the .zip file is a project manifest (package.xml) that lists what to retrieve or deploy, and one or more XML components that are organized into folders.").

## Code Examples

```
<?xml version="1.0" encoding="UTF-8"?>
<SynonymDictionary xmlns="http://soap.sforce.com/2006/04/metadata">
    <groups>
        <languages>en_US</languages>
        <terms>Salesforce</terms>
        <terms>salesforce.com</terms>
        <terms>The Customer Company</terms>
        <terms>SFDC</terms>
    </groups>
    <groups>
        <languages>fr</languages>
        <terms>renault</terms>
        <terms>clio</terms>
    </groups>
    <label>Sample Dictionary</label>
</SynonymDictionary>
```

```
<?xml version="1.0" encoding="UTF-8"?>
<Package xmlns="http://soap.sforce.com/2006/04/metadata">
    <types>
        <members>Sample Dictionary</members>
        <name>SynonymDictionary</name>
    </types>
    <version>66.0</version>
</Package>
```

## Related Topics

- Metadata (atlas.en-us.api_meta.meta/api_meta/metadata.htm)
- Language (atlas.en-us.api_meta.meta/api_meta/meta_translations.htm)
- Deploying and Retrieving Metadata with the Zip File (atlas.en-us.api_meta.meta/api_meta/file_based_zip_file.htm)
