---
title: "CustomObjectTranslation"
domain: metadata-api
topic: customobjecttranslation
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:33:38.030Z
estimatedTokens: 4881
keywords: [CustomObjectTranslation, metadata, translate, custom, objects, variety, languages, Declarative, File, Suffix, Directory, Location, Version, CustomFieldTranslation, FieldSetTranslation]
---

# CustomObjectTranslation

> This metadata type allows you to translate
            custom objects for a variety of languages.

# CustomObjectTranslation

This metadata type allows you to translate custom objects for a variety of languages.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=api_meta)

#### Important

Where possible, we changed noninclusive terms to align with our company value of Equality. We maintained certain terms to avoid any effect on customer implementations.

This type extends the [Metadata](atlas.en-us.api_meta.meta/api_meta/metadata.htm "The base class for all metadata types. You can’t edit this object. A component is an instance of a metadata type.") metadata type and inherits its fullName field. The ability to translate component labels is part of the Translation Workbench.

## Declarative Metadata File Suffix and Directory Location

Local translations are stored in a file with a format of customObjectName\_\_c\-lang.objectTranslation, where customObjectName\_\_c is the custom object name, and lang is the translation language. A sample file name for German translations is myCustomObject\_\_c-de.objectTranslation.

Similarly, packaged translations are stored in a file with a format of customObjectName-pkgNamespace\_\_c\-lang.objectTranslation, where customObjectName-pkgNamespace\_\_c is the custom object and package namespace, and lang is the translation language. A sample file name for German translations in a package with the namespace of Acme is myCustomObject-Acme\_\_c-de.objectTranslation. Custom object translations are stored in the objectTranslations folder in the corresponding package directory.

Custom object translations are stored in the objectTranslations folder in the corresponding package directory.

## Version

CustomObjectTranslation components are available in API version 14.0 and later.

## Fields

| Field | Field Type | Description |
| --- | --- | --- |
| caseValues | ObjectNameCaseValue[] | Different combinations of the custom object with regard to article, plural, possessive, and case. |
| fields | CustomFieldTranslation[] | A list of translations for the custom fields associated with the custom object. |
| fieldSets | FieldSetTranslation[] | A list of field set translations. Available in API version 41.0 and later. |
| fullName | string | The name of the custom object and the translation language with a format of customObjectName-lang, where customObjectName is the custom object name, and lang is the translation language.Inherited from Metadata, this field is defined in the WSDL for this metadata type. It must be specified when creating, updating, or deleting. See createMetadata() to see an example of this field specified for a call. |
| gender | Gender | Indicates the gender of the noun that represents the object. Used for languages where words need different treatment depending on their gender. |
| layouts | LayoutTranslation[] | A list of page layout translations. |
| nameFieldLabel | string | The label for the name field. Maximum of 80 characters. |
| namedFilters | NamedFilterTranslation[] | A list of translations for lookup filter error messages associated with the custom object.This field has been removed as of API version 30.0 and is only available in prior versions. The translation metadata associated with a lookup filter is now represented by the lookupFilter field in the CustomFieldTranslation subtype. |
| quickActions | QuickActionTranslation[] | A list of translations for actions. |
| recordTypes | RecordTypeTranslation[] | A list of record type translations. |
| sharingReasons | SharingReasonTranslation[] | A list of sharing reason translations. |
| startsWith | StartsWith (enumeration of type string) | Indicates whether the noun starts with a vowel, consonant, or is a special character. This is used for languages where words need different treatment depending on the first character. |
| validationRules | ValidationRuleTranslation[] | A list of validation rule translations. |
| webLinks | WebLinkTranslation[] | A list of web link translations. |
| workflowTasks | WorkflowTaskTranslation[] | A list of workflow task translations. |

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=api_meta)

#### Note

When you retrieve or deploy translations from a package, the translations from the package might override existing translations. The overridden translations appear in the Rename Tabs and Labels UI until you click **Reset** to restore the translations installed by the latest package.

## CustomFieldTranslation

CustomFieldTranslation contains details for a custom field translation. In API versions 37.0 and earlier standard picklist values could be translated with CustomFieldTranslation. In API version 38.0, use StandardValueSetTranslation instead. For more details, see [CustomField](atlas.en-us.api_meta.meta/api_meta/customfield.htm "Represents the metadata associated with a field. Use this metadata type to create, update, or delete custom field definitions on standard, custom, and external objects or standard field definitions on standard objects.").

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=api_meta)

#### Note

Not every language supports all the possible values for the fields in CustomFieldTranslation. For language-specific supported values, see the [fully supported languages](atlas.en-us.api_meta.meta/api_meta/customobjectranslation_language_support_standard.htm) and [end-user languages](atlas.en-us.api_meta.meta/api_meta/customobjectranslation_language_support_enduser.htm) appendices.

| Field | Field Type | Description |
| --- | --- | --- |
| caseValues | ObjectNameCaseValue[] | Different combinations of the custom object with regard to article, plural, possessive, and case. Available in API version 29.0 and later. |
| description | string | Translation for the custom field description. |
| gender | Gender | Available in API version 29.0 and later. |
| help | string | Translation for the text that displays in the field-level help hover text for this field. |
| label | string | Translation for the label. Maximum of 40 characters. |
| lookupFilter | LookupFilterTranslation | Represents the translation metadata associated with a lookup filter.This field is available in API version 30.0 and later.LookupFilter isn’t supported on the article type object. |
| name | string | Required. The name of the field relative to the custom object; for example, MyField__c. |
| picklistValues | PicklistValueTranslation[] | List of translations for picklist values. See PicklistValue.Note: “Subject” on the Task object is a text field, not a picklist value. It can’t be retrieved via Metadata API. Translations can be provided via the Translation Workbench. |
| relationshipLabel | string | Translation for a lookup relationship label. A lookup relationship allows a field to be associated with another field. The relationship field allows users to select an option from a list of values defined by the other field. Maximum of 80 characters. |
| startsWith | StartsWith (enumeration of type string) | Indicates whether the noun starts with a vowel, consonant, or is a special character. Used for languages where words need different treatment depending on the first character. Available in API version 29.0 and later. |

## FieldSetTranslation

FieldSetTranslation contains details for a field set translation. For more details, see [FieldSet](atlas.en-us.api_meta.meta/api_meta/meta_fieldset.htm "Represents a field set. A field set is a grouping of fields. For example, you could have a field set that contains fields describing a user's first name, middle name, last name, and business title."). Available in API 41.0 and later.

| Field | Field Type | Description |
| --- | --- | --- |
| label | string | Required. Translation for the field set label. Maximum of 80 characters. |
| name | string | Required. The field set name. |

## LayoutTranslation

LayoutTranslation contains details for a page layout translation. For more details, see [Fields](atlas.en-us.api_meta.meta/api_meta/meta_layouts.htm#Layout).

| Field | Field Type | Description |
| --- | --- | --- |
| layout | string | Required. The layout name. |
| layoutType | string |  |
| sections | LayoutSectionTranslation[] | An array of layout section translations. |

## LayoutSectionTranslation

LayoutSectionTranslation contains details for a page layout section translation. For more details, see [LayoutSection](atlas.en-us.api_meta.meta/api_meta/meta_layouts.htm#LayoutSection).

| Field | Field Type | Description |
| --- | --- | --- |
| label | string | Required. Translation for the label. Maximum of 765 characters. |
| section | string | Required. The section name. |

## LookupFilterTranslation

LookupFilterTranslation shows a translation for a lookup filter error message associated with the custom object. Replaces NamedFilterTranslation.

LookupFilterTranslation is available in API version 30.0 and later.

| Field | Field Type | Description |
| --- | --- | --- |
| errorMessage | string | The error message that appears if the lookup filter fails. |
| informationalMessage | string | The information message displayed on the page. Use to describe things some users don't understand, such as why certain items are excluded in the lookup filter. |

## NamedFilterTranslation

NamedFilterTranslation has been removed as of API version 30.0 and is only available in previous API versions.

NamedFilterTranslation shows a list of translations for lookup filter error messages associated with the custom object. See [NamedFilter](atlas.en-us.api_meta.meta/api_meta/namedfilter.htm "Represents the metadata associated with a lookup filter. This metadata type is used to create, update, or delete lookup filter definitions. This component has been removed as of API version 30.0 and is only available in previous API versions. The metadata associated with a lookup filter is now represented by the lookupFilter field in the CustomField component.") for more information.

| Field | Field Type | Description |
| --- | --- | --- |
| errorMessage | string | The error message that appears if the lookup filter fails. |
| informationalMessage | string | The information message displayed on the page. Use to describe things the user doesn’t understand, such as why certain items are excluded in the lookup filter. |
| name | string | Required. The name of the lookup filter. If you create this field in the user interface, a name is automatically assigned. If you create this field through Metadata API, you must include the name field. |

## ObjectNameCaseValue

ObjectNameCaseValue supports multiple cases and definitions of the custom object name to allow usage in various grammatical contexts.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=api_meta)

#### Note

Not every language supports all the possible values for the fields in ObjectNameCaseValue. For language-specific supported values, see the [fully supported languages](atlas.en-us.api_meta.meta/api_meta/customobjectranslation_language_support_standard.htm) and [end-user languages](atlas.en-us.api_meta.meta/api_meta/customobjectranslation_language_support_enduser.htm) appendices.

| Field | Field Type | Description |
| --- | --- | --- |
| article | Article (enumeration of type string) | English has two types of articles: definite (the) and indefinite (a, an). The usage of these articles depends mainly on whether you're referring to any member of a group, or to a specific member of a group. The valid values are:DefiniteIndefiniteNone |
| caseType | CaseType (enumeration of type string) | The case of the custom object name. The valid values are:AblativeAccusativeAdessiveAllativeCausalfinalDativeDelativeDistributiveElativeEssiveEssiveformalGenitiveIllativeInessiveInstrumentalLativeLocativeNominativeObjectivePartitivePrepositionalSubjectiveSublativeSuperessiveTermanativeTranslativeVocative |
| plural | boolean | Indicates whether the value field is plural (true) or singular (false). |
| possessive | Possessive (enumeration of type string) | The possessive case of a language is a grammatical case used to indicate a relationship of possession. The valid values are:FirstNoneSecond |
| value | string | Required. The value or label in this grammatical context. |

## PicklistValueTranslation

PicklistValueTranslation contains details for translation of a picklist value from a local, custom picklist field. For more details, see [Picklist (Including Dependent Picklist)](atlas.en-us.api_meta.meta/api_meta/meta_picklist.htm "Deprecated. Represents a picklist (or dependent picklist) definition for a custom field in a custom object or a custom or standard field in a standard object, such as an account.").

| Field | Field Type | Description |
| --- | --- | --- |
| masterLabel | string | Required. The picklist value defined on the setup page in the application. Displayed wherever a translated label isn't available. |
| translation | string | Required. Translation for the value. |

## QuickActionTranslation

QuickActionTranslation contains details for an action label in the user interface. For more information, see [QuickAction](atlas.en-us.api_meta.meta/api_meta/meta_quickaction.htm "Represents a specified create or update quick action for an object that then becomes available in the Chatter publisher. For example, you can create an action that, on the detail page of an account, allows a user to create a contact related to that account from the Chatter feed on that page. QuickAction can be created on objects that permit custom fields.").

| Field | Field Type | Description |
| --- | --- | --- |
| aspect | string | Identifies which quick action label the translated text belongs to. Use this field only when you want to use different strings for the quick action's field label and informational message. Valid values are Master and InfoMessage. Available in API version 53.0 and later. |
| label | string | Required. Translation for the label. Maximum of 765 characters. |
| name | string | Required. The quick action name. |

## RecordTypeTranslation

RecordTypeTranslation contains details for a record type name translation. For more details, see [RecordType](atlas.en-us.api_meta.meta/api_meta/meta_recordtype.htm "Represents the metadata associated with a record type. Record types let you offer different business processes, picklist values, and page layouts to different users. Use this metadata type to create, update, or delete record type definitions for a custom object.").

| Field | Field Type | Description |
| --- | --- | --- |
| label | string | Required. Translation for the label. Maximum of 765 characters. |
| name | string | Required. The record type name. |
| description | string | Translation for the record type description. Available in API version 42.0 and later. |

## SharingReasonTranslation

SharingReasonTranslation contains details for a sharing reason translation. For more details, see [SharingReason](atlas.en-us.api_meta.meta/api_meta/meta_apexsharingreason.htm "Represents an Apex sharing reason, which is used to indicate why sharing was implemented for a custom object. Apex managed sharing allows developers to use Apex to programmatically share custom objects. When you use Apex managed sharing to share a custom object, only users with the “Modify All Data” permission can add or change the sharing on the custom object's record, and the sharing access is maintained across record owner changes.").

| Field | Field Type | Description |
| --- | --- | --- |
| label | string | Required. Translation for the sharing reason. |
| name | string | Required. The sharing reason name. |

## ValidationRuleTranslation

ValidationRuleTranslation contains details for a validation rule translation. For more details, see [ValidationRule](atlas.en-us.api_meta.meta/api_meta/meta_validationformulas.htm "Represents a validation rule, which is used to verify that the data a user enters in a record is valid and can be saved. A validation rule contains a formula or expression that evaluates the data in one or more fields and returns a value of true or false. Validation rules also include an error message that your client application can display to the user when the rule returns a value of true due to invalid data.").

| Field | Field Type | Description |
| --- | --- | --- |
| errorMessage | string | Required. Translation for the error message associated with the validation rule failure. |
| name | string | Required. The validation rule name. |

## WebLinkTranslation

WebLinkTranslation contains details for a web link translation. For more details, see [WebLink](atlas.en-us.api_meta.meta/api_meta/meta_weblink.htm "Represents a custom button or link defined in a custom object.").

| Field | Field Type | Description |
| --- | --- | --- |
| label | string | Required. Translation for the web link label. Maximum of 765 characters. |
| name | string | Required. The web link name. |

## WorkflowTaskTranslation

WorkflowTaskTranslation contains details for a workflow task translation. For more details, see [Workflow](atlas.en-us.api_meta.meta/api_meta/meta_workflow.htm "Represents the metadata associated with a workflow rule. A workflow rule sets workflow actions into motion when its designated conditions are met. You can configure workflow actions to execute immediately when a record meets the conditions in your workflow rule, or set time triggers that execute the workflow actions on a specific day. Use this metadata type to create, update, or delete workflow rule definitions.").

| Field | Field Type | Description |
| --- | --- | --- |
| description | string | Translation for the workflow task description. |
| name | string | Required. The workflow task name. |
| subject | string | Translation for the workflow task subject. |

## Declarative Metadata Sample Definitions

This sample XML definition shows a CustomObjectTranslation for the Description\_\_c object in German, with one custom field, Summary\_\_c. The name and location of the file containing this definition would be objectTranslations/Description\_\_c-de.objectTranslation.

```

```

This sample XML definition shows a CustomObjectTranslation for the Account object, renaming Account to Client (Kunde) in German. The Account object has one standard field, account\_number, and one custom field, Account\_Code\_\_c. The name and location of the file containing this definition would be objectTranslations/Account-de.objectTranslation.

```

```

## Wildcard Support in the Manifest File

This metadata type supports the wildcard character \* (asterisk) in the package.xml manifest file. For information about using the manifest file, see [Deploying and Retrieving Metadata with the Zip File](atlas.en-us.api_meta.meta/api_meta/file_based_zip_file.htm "The deploy() and retrieve() calls are used to deploy and retrieve a .zip file. Within the .zip file is a project manifest (package.xml) that lists what to retrieve or deploy, and one or more XML components that are organized into folders.").

#### See Also

-   [CustomObject](atlas.en-us.api_meta.meta/api_meta/customobject.htm "Represents a custom object that stores data unique to your org or an external object that maps to data stored outside your org.")

-   [Translations](atlas.en-us.api_meta.meta/api_meta/meta_translations.htm "Metadata type that enables work with translations for various supported languages. The ability to translate component labels is part of the Translation Workbench.")

## Code Examples

```
<?xml version="1.0" encoding="UTF-8"?>
<CustomObjectTranslation xmlns="http://soap.sforce.com/2006/04/metadata">
    <caseValues>
        <caseType>Nominative</caseType>
        <plural>false</plural>
        <value>Beschreibung</value>
    </caseValues>
    <caseValues>
        <caseType>Nominative</caseType>
        <plural>true</plural>
        <value>Beschreibungen</value>
    </caseValues>
    <caseValues>
        <caseType>Accusative</caseType>
        <plural>false</plural>
        <value>Beschreibung</value>
    </caseValues>
    <caseValues>
        <caseType>Accusative</caseType>
        <plural>true</plural>
        <value>Beschreibungen</value>
    </caseValues>
    <caseValues>
        <caseType>Genitive</caseType>
        <plural>false</plural>
        <value>Beschreibung</value>
    </caseValues>
    <caseValues>
        <caseType>Genitive</caseType>
        <plural>true</plural>
        <value>Beschreibungen</value>
    </caseValues>
    <caseValues>
        <caseType>Dative</caseType>
        <plural>false</plural>
        <value>Beschreibung</value>
    </caseValues>
    <caseValues>
        <caseType>Dative</caseType>
        <plural>true</plural>
        <value>Beschreibungen</value>
    </caseValues>
    <fields>
        <label>Zusammenfassung</label>
        <name>Summary__c</name>
    </fields>
    <gender>Feminine</gender>
    <nameFieldLabel>Beschreibungen</nameFieldLabel>
</CustomObjectTranslation>
```

```
<?xml version="1.0" encoding="UTF-8"?>
<CustomObjectTranslation xmlns="http://soap.sforce.com/2006/04/metadata">
    <caseValues>
        <caseType>Nominative</caseType>
        <plural>false</plural>
        <value>Kunde</value>
    </caseValues>
    <caseValues>
        <caseType>Nominative</caseType>
        <plural>true</plural>
        <value>Kunden</value>
    </caseValues>
    <caseValues>
        <caseType>Accusative</caseType>
        <plural>false</plural>
        <value>Kunden</value>
    </caseValues>
    <caseValues>
        <caseType>Accusative</caseType>
        <plural>true</plural>
        <value>Kunden</value>
    </caseValues>
    <caseValues>
        <caseType>Genitive</caseType>
        <plural>false</plural>
        <value>Kunden</value>
    </caseValues>
    <caseValues>
        <caseType>Genitive</caseType>
        <plural>true</plural>
        <value>Kunden</value>
    </caseValues>
    <caseValues>
        <caseType>Dative</caseType>
        <plural>false</plural>
        <value>Kunden</value>
    </caseValues>
    <caseValues>
        <caseType>Dative</caseType>
        <plural>true</plural>
        <value>Kunden</value>
    </caseValues>
    <fields>
        <caseValues>
            <caseType>Nominative</caseType>
            <plural>false</plural>
            <value>Kundennummer</value>
        </caseValues>
        <caseValues>
            <caseType>Nominative</caseType>
            <plural>true</plural>
            <value>Kundennummern</value>
        </caseValues>
        <gender>Feminine</gender>
        <name>account_number</name>
    </fields>
    <fields>
        <label>Kunden-Code</label>
        <name>Account_Code__c</name>
    </fields>
    <gender>Masculine</gender>
</CustomObjectTranslation>
```

## Related Topics

- Metadata (atlas.en-us.api_meta.meta/api_meta/metadata.htm)
- createMetadata() (atlas.en-us.api_meta.meta/api_meta/meta_createMetadata.htm)
- enumeration (atlas.en-us.api_meta.meta/api_meta/meta_objects_intro.htm)
- CustomField (atlas.en-us.api_meta.meta/api_meta/customfield.htm)
- fully supported
                    languages (atlas.en-us.api_meta.meta/api_meta/customobjectranslation_language_support_standard.htm)
- end-user languages (atlas.en-us.api_meta.meta/api_meta/customobjectranslation_language_support_enduser.htm)
- PicklistValue (atlas.en-us.api_meta.meta/api_meta/meta_globalpicklistvalue.htm)
- FieldSet (atlas.en-us.api_meta.meta/api_meta/meta_fieldset.htm)
- Fields (atlas.en-us.api_meta.meta/api_meta/meta_layouts.htm)
- LayoutSection (atlas.en-us.api_meta.meta/api_meta/meta_layouts.htm)
