---
title: "Metadata Field Types"
domain: metadata-api
topic: metadata-field-types
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-11T15:45:52.642Z
keywords: [Metadata, Field, Types, Important, ValueSet, ValueSetValuesDefinition, ValueSettings]
---

# Metadata Field Types

# Metadata Field Types

These field types extend the field types described in the *Salesforce Object Reference*.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=api_meta)

#### Important

Where possible, we changed noninclusive terms to align with our company value of Equality. We maintained certain terms to avoid any effect on customer implementations.

| Field Type | Objects | What the Field Contains |
| --- | --- | --- |
| CustomField | Custom objectCustom field | Represents a custom field. |
| DeleteConstraint | Custom field | A string that represents deletion options for lookup relationships. Valid values are:SetNullRestrictCascade |
| DeploymentStatus | Custom objectCustom field | A string that represents the deployment status of a custom object or field. Valid values are:InDevelopmentDeployed |
| FieldType | Custom field | Indicates the type of a custom field. Valid values are:AddressAutoNumberLookupMasterDetailMetadataRelationshipCheckboxCurrencyDateDateTimeEmailEncryptedTextNoteThis page is about Classic Encryption, not Shield Platform Encryption. What's the difference?ExternalLookupIndirectLookupNumber1PercentPhonePicklistMultiselectPicklistSummaryTextTextAreaLongTextAreaUrlHierarchyFileHtmlLocation (use for geolocation fields)TimeArrayIntegerLong1 A Number custom field, internally represented as a field of type double. Setting the scale of the Number field to 0 gives you a double that behaves like an int. |
| Gender | Custom object | Indicates the gender of the noun that represents the object. Used for languages where words need different treatment depending on their gender. Valid values are:MasculineFeminineNeuterAnimateMasculine (Slavic languages—currently Czech, Polish, Russian, Slovak, Slovenian, and Ukrainian)ClassI, ClassIII, ClassV, ClassVII, ClassIX, ClassXI, ClassXIV, ClassXV, ClassXVI, ClassXVII, ClassXVIII (African languages—currently Afrikaans, Xhosa, and Zulu)NoteThe following genders appear on the Rename Tabs and Labels page in Setup but are stored internally as “Feminine”. When setting them through the Metadata API, use “Feminine”.Euter (Swedish)Common (Dutch) |
| Picklist (Including Dependent Picklist) | Custom field | (This field type isn’t used in Metadata API. CustomField includes this field type for Tooling API support). Represents a picklist, a set of labels and values that can be selected from a picklist. |
| SharingModel | Custom object | Represents the sharing model for the custom object. Depending on the object, valid values are:PrivateReadReadWriteReadWriteTransferFullAccessControlledByParentControlledByCampaignControlledByLeadOrContactFor example, the User object supports Private and Read values. Accounts, opportunities, and custom objects support Private, Read and ReadWrite values. Campaign members support ControlledByCampaign and ControlledByLeadOrContact. |
| StartsWith | Custom objectCustom field | Indicates whether the noun starts with a vowel, consonant, or is a special character. This is used for languages where words need different treatment depending on the first character. Valid values are:ConsonantVowelSpecial (for nouns starting with z, or s plus consonants) |
| TreatBlanksAs | Custom field | Indicates how blanks should be treated. Valid values are:BlankAsBlankBlankAsZero |
| ValueSet | Custom field | Represents a set of values that can be selected from a custom picklist field. Defines the valueSet of a custom picklist field. |

## ValueSet

Represents a set of values that can be selected from a custom picklist field. Defines the valueSet of a custom picklist field.

| Field Type | Field Type | Description |
| --- | --- | --- |
| controllingField | string | The fullname of the controlling field if this is a dependent picklist. A controlling field can be a checkbox or picklist field, but in this case it’s a picklist. The controlling picklist filters the available values in the dependent picklist. |
| restricted | boolean | Whether the picklist’s values are limited to only the values defined by a Salesforce admin. Values are true or false. |
| valueSetDefinition | ValueSetValuesDefinition | Defines value-specific settings for a custom dependent picklist. Indicates whether the value set of the custom picklist field is sorted alphabetically. |
| valueSetName | string | The masterLabel of the global value set to be used for this picklist field. |
| valueSettings | ValueSettings | Used for the settings that describe a value in a custom picklist field. The picklist can have its own unique value set, or inherit the values from a global value set. You can add field dependency values via the Metadata API but not remove them. |

## ValueSetValuesDefinition

| Field Name | Field Type | Description |
| --- | --- | --- |
| sorted | boolean | Whether the picklist’s value set is displayed in alphabetical order in the user interface. |
| value | CustomValue | Required. The list of values for this local, custom picklist. |

## ValueSettings

| Field Name | Field Type | Description |
| --- | --- | --- |
| controllingFieldValue | stringstring[] | Applies only to dependent custom picklists. A list of values in the controlling or parent picklist (that the custom picklist values depend on). You can add field dependency values via the Metadata API but not remove them. |
| valueName | string | Defines the values in the custom dependent picklist. |

-   [← Previous](atlas.en-us.api_meta.meta/api_meta/meta_weblink.htm "WebLink")