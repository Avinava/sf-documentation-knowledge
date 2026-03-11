---
title: "ArticleType CustomField"
domain: metadata-api
topic: articletype-customfield
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-11T15:45:50.643Z
keywords: [ArticleType, CustomField, Declarative, Metadata, File, Suffix, Directory, Location, Retrieving, Custom, Fields, Standard, Objects, Version, Note, Sample, Definition, See]
---

# ArticleType CustomField

# ArticleType CustomField

Represents the metadata associated with an article type custom field. Use this metadata type to create, update, or delete article type custom field definitions.

This type extends the [Metadata](atlas.en-us.api_meta.meta/api_meta/metadata.htm "The base class for all metadata types. You can’t edit this object. A component is an instance of a metadata type.") metadata type and inherits its fullName field.

Always specify the full name whenever you create or update a custom field. For example, a custom field on a custom object:

```

```

## Declarative Metadata File Suffix and Directory Location

Custom fields are defined as part of the article type. ArticleType field names have a suffix of \_\_c like other custom objects, and must be dot-qualified with the name of the article type to which they belong. See [ArticleType](atlas.en-us.api_meta.meta/api_meta/meta_articletype.htm "Represents the metadata associated with an article type.") for more information.

## Retrieving Custom Fields on Custom or Standard Objects

When you retrieve a custom or standard object, you return everything associated with the object. However, you can also retrieve only the custom fields for an object by explicitly naming the object and fields in package.xml. The following definition in package.xml retrieves the files objects/MyCustomObject\_\_c.object, objects/Account.object\_\_c.object, and objects/MyArticleType\_\_kav.object, each containing one custom field definition.

```

```

## Version

ArticleTypes custom fields are available in API version 19.0 and later.

## Fields for ArticleType

Unless otherwise noted, all fields are createable, filterable, and nillable.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=api_meta)

#### Note

If you create a knowledge validation rule, the errors always display at the top of the page, even if you add it beside the field. Therefore, write the errors descriptively so authors know how to satisfy the validation rule. For example, identify which field is causing the error. The Salesforce Classic user interface does not support field level error messages for articles.

| Field Name | Field Type | Description |
| --- | --- | --- |
| defaultValue | string | If specified, represents the default value of the field. This field was deprecated in API version 48.0. |
| deleteConstraint | Metadata Field Types (enumeration of type string) | Provides deletion options for lookup relationships. Valid values are:Cascade—Deletes the lookup record as well as associated lookup fields.Restrict—Prevents the record from being deleted if it's in a lookup relationship.SetNull—This is the default. If the lookup record is deleted, the lookup field is cleared.For more information on lookup relationships, see "Object Relationships" in Salesforce Help. |
| description | string | Description of the field. |
| formula | string | If specified, represents a formula on the field. |
| formulaTreatBlankAs | Metadata Field Types (enumeration of type string) | Indicates how to treat blanks in a formula. Valid values are: BlankAsBlank and BlankAsZero. |
| fullName | string | Inherited from Metadata, this field is defined in the WSDL for this metadata type. It must be specified when creating, updating, or deleting. See createMetadata() to see an example of this field specified for a call.This value cannot be null. |
| inlineHelpText | string | Represents the content of field-level help. For more information, see "Define Field-Level Help" in Salesforce Help. |
| label | string | Label for the field. You cannot update the label for standard fields in Article Type such as Title, UrlName, Summary, etc. |
| length | int | Length of the field. |
| picklist | Picklist (Including Dependent Picklist) | (Deprecated. Use this field in API version 37.0 and earlier only. In later versions, use valueSet instead.) If specified, the field is a picklist, and this field enumerates the picklist values and labels. |
| referenceTo | string | If specified, indicates a reference this field has to another object. |
| relationshipLabel | string | Label for the relationship. |
| relationshipName | string | If specified, indicates the value for one-to-many relationships. For example, in the object MyObject that had a relationship to YourObject, the relationship name might be YourObjects. |
| required | boolean | Indicates whether the field requires a value on creation (true) or not (false). |
| type | FieldType | Required. Indicates the field type for the field. Valid values are:Checkbox available in version 30.0 and laterCurrencyArticleCurrencyDateDateTimeEmailFileFormulaHtmlLookupNumberPercentPhonePicklistDependentPicklistMultiselectPicklistTextTextAreaLongTextAreaURL |
| visibleLines | int | Indicates the number of lines displayed for the field. |

## Declarative Metadata Sample Definition

```

```

#### See Also

-   [ArticleType](atlas.en-us.api_meta.meta/api_meta/meta_articletype.htm "Represents the metadata associated with an article type.")
    
-   [ArticleType Layout](atlas.en-us.api_meta.meta/api_meta/meta_articletype_layout.htm "Represents the metadata associated with an article type page layout. Article type layouts determine which fields users can view and edit when entering data for an article. Article type layouts also determine which sections appear when users view articles.")