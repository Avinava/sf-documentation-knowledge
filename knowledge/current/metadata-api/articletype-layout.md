---
title: "ArticleType Layout"
domain: metadata-api
topic: articletype-layout
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:36.826Z
estimatedTokens: 787
keywords: [ArticleType, Layout, metadata, associated, article, layouts, determine, users, view, edit, entering, data, sections, appear, articles]
---

# ArticleType Layout

> Represents the metadata associated with an article type page layout.
            Article type layouts determine which fields users can view and edit when entering data
            for an article. Article type layouts also determine which sections appear when users
            view articles.

# ArticleType Layout

Represents the metadata associated with an article type page layout. Article type layouts determine which fields users can view and edit when entering data for an article. Article type layouts also determine which sections appear when users view articles.

The format of the article, for example whether layout sections display as subtabs or as a single page with links, is defined by the [article-type template](atlas.en-us.api_meta.meta/api_meta/meta_articletype.htm#articleTypeTemplates). Each article type has only one layout, but you can choose a different template for each of the article type's four channels. See [Knowledge](https://developer.salesforce.com/docs/atlas.en-us.260.0.api.meta/api/sforce_api_guidelines_knowledge.htm) in SOAP API Developer Guide.

## File Suffix and Directory Location

ArticleType layouts are stored in the layouts directory of the corresponding package directory. The prefix must match with the article type API name. The extension is .layout.

## Version

ArticleType layouts are available in API version 19.0 and later.

## Fields

| Field Name | Field Type | Description |
| --- | --- | --- |
| layoutSections | LayoutSection[] | The main sections of the layout containing the article fields. The order here determines the layout order. |

## LayoutSection

LayoutSection represents a section of an ArticleType layout.

| Field Name | Field Type | Description |
| --- | --- | --- |
| customLabel | boolean | Indicates if this section's label is custom or standard (built-in). Custom labels can be any text, but must be translated. Standard labels have a predefined set of valid values, for example 'System Information', which are automatically translated. |
| label | string | The label; either standard or custom, based on the customLabel flag. |
| layoutColumns | LayoutColumn[] | The columns of the layout, depending on the style. Salesforce Knowledge only supports one column in article type layouts. |
| style | LayoutSectionStyle (enumeration of type string) | The style of the layout. Salesforce Knowledge only supports the value OneColumn, which displays a one-column page. |

## LayoutColumn

LayoutColumn represents the items in a column within a layout section.

| Field Name | Field Type | Description |
| --- | --- | --- |
| layoutItems | LayoutItem[] | The individual items within a column (ordered from top to bottom). |

## LayoutItem

LayoutItem represents the valid values that define a layout item.

| Field Name | Field Type | Description |
| --- | --- | --- |
| field | string | The field name reference, for example MyField__c. |

## Declarative Metadata Sample Definition

The following is the definition of an ArticleType page layout:

```

```

#### See Also

-   [ArticleType](atlas.en-us.api_meta.meta/api_meta/meta_articletype.htm "Represents the metadata associated with an article type.")

-   [ArticleType CustomField](atlas.en-us.api_meta.meta/api_meta/meta_articletype_customfield.htm "Represents the metadata associated with an article type custom field. Use this metadata type to create, update, or delete article type custom field definitions.")

## Code Examples

```
<?xml version="1.0" encoding="UTF-8"?>
<Layout xmlns="http://soap.sforce.com/2006/04/metadata">
    <layoutSections>
        <customLabel>true</customLabel>
        <label>Description</label>
        <layoutColumns>
            <layoutItems>
                <field>description__c</field>
            </layoutItems>
            <layoutItems>
                <field>dateTime__c</field>
            </layoutItems>
        </layoutColumns>
        <style>OneColumn</style>
    </layoutSections>
    <layoutSections>
        <label>Data Sheet</label>
        <layoutColumns>
            <layoutItems>
                <field>file__c</field>
            </layoutItems>
        </layoutColumns>
        <style>OneColumn</style>
    </layoutSections>
</Layout>
```

## Related Topics

- article-type template (atlas.en-us.api_meta.meta/api_meta/meta_articletype.htm)
- LayoutColumn (atlas.en-us.api_meta.meta/api_meta/meta_layouts.htm)
- enumeration (atlas.en-us.api_meta.meta/api_meta/meta_objects_intro.htm)
- LayoutItem (atlas.en-us.api_meta.meta/api_meta/meta_layouts.htm)
- ArticleType (atlas.en-us.api_meta.meta/api_meta/meta_articletype.htm)
- ArticleType CustomField (atlas.en-us.api_meta.meta/api_meta/meta_articletype_customfield.htm)
