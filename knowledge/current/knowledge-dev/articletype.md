---
title: "ArticleType"
domain: knowledge-dev
topic: articletype
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:34:41.554Z
estimatedTokens: 1479
keywords: [ArticleType, metadata, associated, article, Declarative, File, Suffix, Directory, Location, Version, ArticleTypeChannelDisplay, ArticleTypeTemplate, Sample, Definitions, Wildcard]
---

# ArticleType

> Represents the metadata associated with an article
        type.

# ArticleType

Represents the metadata associated with an article type.

All articles in Salesforce Knowledge are assigned to an article type. An article's type determines the type of content it contains, its appearance, and which users can access it. For example, a simple FAQ article type can have two custom fields, Question and Answer, where article managers enter data when creating or updating FAQ articles. A more complex article type can have dozens of fields organized into several sections. Using layouts and templates, administrators can structure the article type in the most effective way for its particular content. User access to article types is controlled by permissions. For each article type, an administrator can grant “Create,” “Read,” “Edit,” or “Delete” permissions to users. For example, the article manager can allow internal users to read, create, and edit FAQ article types, but let partner users only read FAQs. See “[Knowledge Article Types](https://help.salesforce.com/s/articleView?id=service.knowledge_article_types_manage.htm&type=5&language=en_US)” in the Salesforce online help and [Knowledge](https://developer.salesforce.com/docs/atlas.en-us.260.0.api.meta/api/sforce_api_guidelines_knowledge.htm) in the SOAP API Developer Guide.

## Declarative Metadata File Suffix and Directory Location

An ArticleType is defined as a custom object and is stored in the objects folder. ArticleTypes have a suffix \_\_kav (instead of \_\_c for custom objects). ArticleType field names have a suffix of \_\_c like other custom objects, and must be dot-qualified with the name of the article type to which they belong. This is shown in the following sample package.xml file:

```

```

## Version

ArticleTypes are available in API version 19.0 and later.

## Fields

| Field Name | Field Type | Description |
| --- | --- | --- |
| articleTypeChannel​Display | articleTypeChannelDisplay | Represents the article-type templates used to display an article in the various channels. See “Article Type Templates” in the Salesforce online help. |
| deploymentStatus | DeploymentStatus (enumeration of type string) | A string which represents the deployment status of a custom object or field. Valid values are:InDevelopmentDeployed |
| description | string | A description of the article type. Maximum of 1000 characters. |
| fields | CustomField[] | Represents one or more fields in the article type. |
| gender | Gender | Indicates the gender of the noun that represents the object. This is used for languages where words need different treatment depending on their gender. |
| label | string | Label that represents the object throughout the Salesforce user interface. |
| pluralLabel | string | Plural version of the label value. |
| startsWith | StartsWith (enumeration of type string) | Indicates whether the noun starts with a vowel, consonant, or is a special character. This is used for languages where words need different treatment depending on the first character. Valid values are listed in StartsWith. |

## ArticleTypeChannelDisplay

Determines the article-type templates that are used to display an article in its channels. Unless otherwise noted, all fields are createable, filterable, and nillable.

| Field Name | Field Type | Description |
| --- | --- | --- |
| articleTypeTemplates | ArticleTypeTemplate[] | Indicates which article-type template applies in the specified channel. |

## ArticleTypeTemplate

Sets the article-type template for a specific channel. If not specified, the default article-type template applies.

| Field Name | Field Type | Description |
| --- | --- | --- |
| channel | string | Specifies the channel where the article-type template applies:AllChannels: all the available channels.App: the Articles tab in Salesforce Knowledge.Pkb: the public knowledge base.Csp: the Customer Portal.Prm: the partner portal. |
| page | string | Represents the name of the custom Visualforce page used as a custom article-type template. Use this field when you select Page in the template field. |
| template | string | Indicates the article-type template used for the specified channel:Page: custom Visualforce page. When specifying this value, you must also set the page field with the Visualforce page name.Tab: display the sections you defined in the layout as tabs.Toc: display the sections you defined in the layout as table of content. |

## Declarative Metadata Sample Definitions

A sample article type definition follows:

```

```

## Wildcard Support in the Manifest File

This metadata type supports the wildcard character \* (asterisk) in the package.xml manifest file. For information about using the manifest file, see Deploying and Retrieving Metadata with the Zip File.

-   **[ArticleType Layout](atlas.en-us.knowledge_dev.meta/knowledge_dev/meta_articletype_layout.htm)**
    Represents the metadata associated with an article type page layout. Article type layouts determine which fields users can view and edit when entering data for an article. Article type layouts also determine which sections appear when users view articles.
-   **[ChannelLayout](atlas.en-us.knowledge_dev.meta/knowledge_dev/meta_articletype_channellayout.htm)**
    Represents the metadata associated with a communication channel layout. Communication channel layouts let admins share article content inline into communication channels (for example, in email publishers, Experience Builder sites, or social media publishers). Admins can create a list of fields for an article type or record type that they want to share for each communication channel. You can customize the order of the fields.
-   **[ArticleType CustomField](atlas.en-us.knowledge_dev.meta/knowledge_dev/meta_articletype_customfield.htm)**
    Represents the metadata associated with an article type custom field. Use this metadata type to create, update, or delete article type custom field definitions.

## Code Examples

```
<?xml version="1.0" encoding="UTF-8"?>
<Package xmlns="http://soap.sforce.com/2006/04/metadata">
    <fullName>articlefilemetadata</fullName>
    <apiAccessLevel>Unrestricted</apiAccessLevel>
    <types>
        <members>newarticle__kav.description__c</members>
        <name>CustomField</name>
    </types>
    <types>
        <members>newarticle__kav</members>
        <name>CustomObject</name>
    </types>
</Package>
```

```
<?xml version="1.0" encoding="UTF-8"?>
<CustomObject xmlns="http://soap.sforce.com/2006/04/metadata">
    <articleTypeChannelDisplay>
        <articleTypeTemplates>
            <channel>App</channel>
            <template>Tab</template>
        </articleTypeTemplates>
        <articleTypeTemplates>
            <channel>Prm</channel>
            <template>Tab</template>
        </articleTypeTemplates>
        <articleTypeTemplates>
            <channel>Csp</channel>
            <template>Tab</template>
        </articleTypeTemplates>
        <articleTypeTemplates>
            <channel>Pkb</channel>
            <template>Toc</template>
        </articleTypeTemplates>
    </articleTypeChannelDisplay>
    <deploymentStatus>Deployed</deploymentStatus>
    <description>Article type with custom fields</description>
    <fields>
        <fullName>description__c</fullName>
        <label>Description</label>
        <length>48</length>
        <type>Text</type>
    </fields>
    <label>newarticle</label>
    <pluralLabel>newarticles</pluralLabel>
</CustomObject>
```

## Related Topics

- ArticleType Layout (atlas.en-us.knowledge_dev.meta/knowledge_dev/meta_articletype_layout.htm)
- ChannelLayout (atlas.en-us.knowledge_dev.meta/knowledge_dev/meta_articletype_channellayout.htm)
- ArticleType CustomField (atlas.en-us.knowledge_dev.meta/knowledge_dev/meta_articletype_customfield.htm)
