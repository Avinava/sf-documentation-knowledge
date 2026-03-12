---
title: "KeywordList"
domain: metadata-api
topic: keywordlist
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:40.175Z
estimatedTokens: 788
keywords: [KeywordList, keywords, Experience, Cloud, site, moderation, keyword, criteria, offensive, language, inappropriate, content, don’t, want, File]
---

# KeywordList

> Represents a list of keywords used in Experience Cloud
      site moderation. This keyword list is a type of moderation criteria that defines offensive
      language or inappropriate content that you don’t want in your site.

# KeywordList

Represents a list of keywords used in Experience Cloud site moderation. This keyword list is a type of moderation criteria that defines offensive language or inappropriate content that you don’t want in your site.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=api_meta)

#### Important

Where possible, we changed noninclusive terms to align with our company value of Equality. We maintained certain terms to avoid any effect on customer implementations.

This type extends the [Metadata](atlas.en-us.api_meta.meta/api_meta/metadata.htm "The base class for all metadata types. You can’t edit this object. A component is an instance of a metadata type.") metadata type and inherits its fullName field.

Keep the following things in mind when creating keyword list criteria:

-   Your org can have up to 30 keyword list criteria. This limit is per org, not per Experience Cloud site.
-   A keyword list can have up to 2,000 keywords.
-   Capitalization and trailing punctuation are ignored when matching your keywords to user-generated content. For example, if your criteria includes BadWord, it’s matched when a user types BADWORD or badword.

## File Suffix and Directory Location

KeywordList components have the suffix .keywords and are stored in the moderation directory of the corresponding package directory. The file name format follows site\_name.keyword\_list\_developer\_name.keywords.

## Version

KeywordList components are available in API version 36.0 and later.

## Special Access Rules

To view, create, edit, and delete a keyword list, you need the Manage Experiences or Create and Set Up Experiences permission. As of Spring ’20 and later, only users with permission to edit moderation rules can access this object.

## Fields

| Field Name | Field Type | Description |
| --- | --- | --- |
| Description | string | A description of the keyword list. |
| keywords | Keyword[] | The keywords you want moderate in your Experience Cloud site. |
| masterLabel | string | Required. Label for the keyword list. |

## Keyword

Keywords in the keyword list.

| Field Name | Field Type | Description |
| --- | --- | --- |
| keyword | string | Required. Keywords you want to moderate.Keywords can only be up to 100 characters and can include letters, numbers, spaces, and special characters.Wildcard characters aren’t supported. |

## Declarative Metadata Sample Definition

The following is an example of a KeywordList component.

```

```

The following is an example package.xml that references the previous definition.

```

```

## Wildcard Support in the Manifest File

This metadata type supports the wildcard character \* (asterisk) in the package.xml manifest file. For information about using the manifest file, see [Deploying and Retrieving Metadata with the Zip File](atlas.en-us.api_meta.meta/api_meta/file_based_zip_file.htm "The deploy() and retrieve() calls are used to deploy and retrieve a .zip file. Within the .zip file is a project manifest (package.xml) that lists what to retrieve or deploy, and one or more XML components that are organized into folders.").

## Code Examples

```apex
<?xml version="1.0" encoding="UTF-8"?>
<KeywordList xmlns="http://soap.sforce.com/2006/04/metadata">
   <masterLabel>Bad Word List</masterLabel>
   <description>List of bad words updated by Joe in Nov 2015.</description>
   <keywords>
     <keyword>bad-word</keyword>
   </keywords>
   <keywords>
     <keyword>b a d w o r d</keyword>
   </keywords>
   <keywords>
     <keyword>b@dword</keyword>
   </keywords>
</KeywordList>
```

```
<?xml version="1.0" encoding="UTF-8"?>
<Package xmlns="http://soap.sforce.com/2006/04/metadata">
   <types>
     <name>KeywordList</name>
     <members>site1.badword_list</members>
   </types>
   <version>36.0</version>
</Package>
```

## Related Topics

- Metadata (atlas.en-us.api_meta.meta/api_meta/metadata.htm)
- Deploying and Retrieving Metadata with the Zip File (atlas.en-us.api_meta.meta/api_meta/file_based_zip_file.htm)
