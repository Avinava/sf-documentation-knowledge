---
title: "KnowledgeSettings"
domain: metadata-api
topic: knowledgesettings
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T05:14:40.694Z
estimatedTokens: 3191
keywords: [KnowledgeSettings, Represents, metadata, used, manage, settings, Salesforce, Knowledge., File, Suffix, Directory, Location, Version, Fields, KnowledgeAnswerSettings, KnowledgeCaseSettings, KnowledgeSitesSettings, KnowledgeLanguageSettings, KnowledgeLanguage, KnowledgeSuggestedArticlesSettings]
---

# KnowledgeSettings

> Represents the metadata used to manage settings for
      Salesforce Knowledge.

# KnowledgeSettings

Represents the metadata used to manage settings for Salesforce Knowledge.

This type extends the [Metadata](atlas.en-us.api_meta.meta/api_meta/metadata.htm "The base class for all metadata types. You can’t edit this object. A component is an instance of a metadata type.") metadata type and inherits its fullName field.

In the package manifest, all organization settings metadata types are accessed using the Settings name. See [Settings](atlas.en-us.api_meta.meta/api_meta/meta_settings.htm "Represents the organization settings related to a feature. For example, your password policies, session settings and network access controls are all available in the SecuritySettings component type.") for more details.

## File Suffix and Directory Location

KnowledgeSettings values are stored in a single file named Knowledge.settings in the settings directory. The .settings files are different from other named components because there’s only one settings file for each settings component.

## Version

KnowledgeSettings is available in API version 27.0 and later.

## Fields

| Field Name | Field Type | Description |
| --- | --- | --- |
| answers | KnowledgeAnswerSettings | Represents the metadata used to manage settings for Salesforce Knowledge and Answers. |
| cases | KnowledgeCaseSettings | Represents the metadata used to manage settings for Salesforce Knowledge and Cases. |
| defaultLanguage | string | Required. The default language for Salesforce Knowledge. Use the abbreviation for the language, for example, en_US for United States English. |
| enableChatterQuestionKBDeflection | boolean | Indicates whether tracking for case deflection via Chatter is enabled (true) or not (false). |
| enableCreateEditOnArticlesTab | boolean | Indicates whether users can create and edit articles on the articles tab (true) or not (false). |
| enableExternalMediaContent | boolean | Indicates whether connecting to external media is enabled (true) or not (false). |
| enableKbStandardSharing | boolean | Indicates whether standard Salesforce sharing is enabled (true) or not (false). |
| enableKnowledge | boolean | Indicates whether Salesforce Knowledge is enabled (true) or not (false). This field is false by default. |
| enableKnowledgeAgentContribution | boolean | Indicates whether a user can create an article from a case (true) or not (false). (Classic only) |
| enableKnowledgeArticleTextHighlights | boolean | Indicates whether text snippet highlights in Salesforce Knowledge search results are enabled (true) or not (false). This field is true by default. Available in API version 47.0 and later. |
| enableKnowledgeAnswersPromotion | boolean | Indicates whether a user can create an article from a reply (true) or not (false). (Classic Only) |
| enableKnowledgeCaseRL | boolean | Indicates whether creating a list of cases linked to an article is enabled (true) or not (false). (Classic Only) |
| enableKnowledgeKeywordAutoComplete | boolean | Indicates whether auto-complete for keywords is enabled (true) or not (false) when searching Salesforce Knowledge. This field is true by default. Available in API version 47.0 and later. |
| enableKnowledgeTitleAutoComplete | boolean | Indicates whether auto-complete for article titles is enabled (true) or not (false) when searching Salesforce Knowledge. This field is true by default. Available in API version 47.0 and later. |
| enableLightningKbAutoLoadRichTextField | boolean | Indicates whether rich text fields are enabled for editing when an article loads in Lightning Knowledge (true) or not (false). This field is false by default. Available in API version 47.0 and later. |
| enableLightningKnowledge | boolean | Indicates whether Lightning Knowledge is enabled (true) or not (false). |
| languages | KnowledgeLanguageSettings | A list of languages enabled for Salesforce Knowledge. |
| showArticleSummariesCustomerPortal | boolean | Indicates whether article summaries appear in the Customer Portal (true) or not (false). |
| showArticleSummariesInternalApp | boolean | Indicates whether article summaries appear in the internal knowledge base (true) or not (false). |
| showArticleSummariesPartnerPortal | boolean | Indicates whether article summaries appear in the partner portal (true) or not (false). |
| showValidationStatusField | boolean | Indicates whether validation status appears on articles (true) or not (false). |
| suggestedArticles | KnowledgeSuggestedArticlesSettings | Represents the metadata used to manage settings for the case fields used to suggest articles for cases. Available in API version 37.0 and later. |
| votingEnabled | boolean | When true, enables users to vote for a product or feature that uses Vote, such as Articles in Knowledge. Available in API version 50.0 and later. |

## KnowledgeAnswerSettings

Represents the metadata used to manage settings for Salesforce Knowledge and Answers.

| Field Name | Field Type | Description |
| --- | --- | --- |
| assignTo | string | Specifies the username an article is assigned to from Answers. |
| defaultArticleType | string | The default article type for articles created from Answers. Uses the API name of the article type. |
| enableArticleCreation | boolean | Indicates whether users can create articles from Answers (true) or not (false). |

## KnowledgeCaseSettings

Represents the metadata used to manage settings for Salesforce Knowledge and Cases.

| Field Name | Field Type | Description |
| --- | --- | --- |
| articlePDFCreationProfile | string | The profile used to create a PDF of an article from Cases. |
| articlePublicSharingSites | KnowledgeSitesSettings | Represents the metadata used to manage settings for Salesforce Knowledge and Sites. |
| articlePublicSharingCommunities | KnowledgeSitesSettings | Represents the metadata used to manage settings for Salesforce Knowledge and Experience Cloud sites. |
| articlePublicSharingSitesChatterAnswers | KnowledgeSitesSettings | Represents the metadata used to manage settings for Salesforce Knowledge and Sites with Chatter Answers. |
| assignTo | string | Specifies the username an article is assigned to from Cases. |
| customizationClass | string | Specifies the Apex class used for customization. |
| defaultContributionArticleType | string | The default article type for articles created from Cases. |
| editor | KnowledgeCaseEditor (enumeration of type string) | Indicates the rich text editor type. Valid values are:simplestandard |
| enableArticleCreation | boolean | Indicates whether users can create articles from Cases (true) or not (false). Controls whether other fields on KnowledgeCaseSettings can be set. |
| enableArticlePublicSharingSites | boolean | Indicates whether articles can be shared via a public site (URL) from Cases (true) or not (false). |
| enableCaseDataCategoryMapping | boolean | Indicates whether Case Data Category mapping is enabled (true) or not (false). |
| useProfileForPDFCreation | boolean | Indicates whether a profile is used to create a PDF of an article from Cases (true) or not (false). |

## KnowledgeSitesSettings

Represents the metadata used to manage settings for Salesforce Knowledge and Sites.

| Field Name | Field Type | Description |
| --- | --- | --- |
| site | string[] | Specifies the site used for Salesforce Knowledge and Sites. |

## KnowledgeLanguageSettings

A list of languages enabled for Salesforce Knowledge. KnowledgeLanguageSettings is available in API version 28.0 and later.

| Field Name | Field Type | Description |
| --- | --- | --- |
| language | KnowledgeLanguage[] | Represents the metadata used to manage settings for the languages enabled for Salesforce Knowledge. |

## KnowledgeLanguage

Represents the metadata used to manage settings for the languages enabled for Salesforce Knowledge. KnowledgeLanguage is available in API version 28.0 and later.

| Field Name | Field Type | Description |
| --- | --- | --- |
| active | boolean | Indicates whether the language is enabled (true) or not (false). |
| defaultAssignee | string | The default assignee for articles in the language. |
| defaultAssigneeType | KnowledgeLanguageLookupValueType (enumeration of type string) | Indicates the default assignee type. Valid values are:UserQueue |
| defaultReviewer | string | The default reviewer for articles in the language. |
| defaultReviewerType | KnowledgeLanguageLookupValueType (enumeration of type string) | Indicates the default reviewer type. Valid values are:UserQueue |
| name | string | The code for the language name, for example: English is en. See “What languages does Salesforce support?” in the Salesforce Help for a list of supported languages and their codes. |

## KnowledgeSuggestedArticlesSettings

Represents the metadata used to manage settings for the articles suggested for cases, work orders, and work order line items. The Work Order and Work Order Line Item objects must be enabled in the org to use the associated fields.

| Field Name | Field Type | Description |
| --- | --- | --- |
| caseFields | KnowledgeCaseFieldsSettings | Represents a list of the case fields used to suggest articles for the case. |
| useSuggestedArticlesForCase | boolean | Indicates whether case content is used to suggest articles for cases (true) or not (false). |
| workOrderFields | KnowledgeWorkOrderFieldsSettings | Represents a list of the work order fields used to suggest articles for the work order. |
| workOrderLineItemFields | KnowledgeWorkOrderLineItemFieldsSettings | Represents a list of the work order line item fields used to suggest articles for the work order line item. |

## KnowledgeCaseFieldsSettings

Represents a list of the case fields used to suggest articles for the case. Available in API version 37.0 and later.

| Field Name | Field Type | Description |
| --- | --- | --- |
| field | KnowledgeCaseField[] | Specifies the names of the case fields used to suggest articles for the case. |

## KnowledgeCaseField

Represents the name of the case field used to suggest articles for the case. Available in API version 37.0 and later.

| Field Name | Field Type | Description |
| --- | --- | --- |
| name | string | Specifies the name of the case field used to suggest articles for the case. |

## KnowledgeWorkOrderFieldsSettings

Represents a list of the work order fields used to suggest articles for the work order. Available in API version 39.0 and later.

| Field Name | Field Type | Description |
| --- | --- | --- |
| field | KnowledgeWorkOrderField[] | Specifies the names of the work order fields used to suggest articles for the work order. |

## KnowledgeWorkOrderField

Represents the name of the work order field used to suggest articles for the work order. Available in API version 39.0 and later.

| Field Name | Field Type | Description |
| --- | --- | --- |
| name | string | Specifies the name of the work order field used to suggest articles for the work order. |

## KnowledgeWorkOrderLineItemFieldsSettings

Represents a list of the work order line item fields used to suggest articles for the work order line item. Available in API version 39.0 and later.

| Field Name | Field Type | Description |
| --- | --- | --- |
| field | KnowledgeWorkOrderLineItemField[] | Specifies the names of the work order line item fields used to suggest articles for the work order line item. |

## KnowledgeWorkOrderLineItemField

Represents the name of the work order line item field used to suggest articles for the work order line item. Available in API version 39.0 and later.

| Field Name | Field Type | Description |
| --- | --- | --- |
| name | string | Specifies the name of the work order line item field used to suggest articles for the work order line item. |

## Declarative Metadata Sample Definition

This is a sample Knowledge settings file.

```

```

## Wildcard Support in the Manifest File

The wildcard character \* (asterisk) in the package.xml manifest file doesn’t apply to metadata types for feature settings. The wildcard applies only when retrieving all settings, not for an individual setting. For details, see [Settings](atlas.en-us.api_meta.meta/api_meta/meta_settings.htm "Represents the organization settings related to a feature. For example, your password policies, session settings and network access controls are all available in the SecuritySettings component type."). For information about using the manifest file, see [Deploying and Retrieving Metadata with the Zip File](atlas.en-us.api_meta.meta/api_meta/file_based_zip_file.htm "The deploy() and retrieve() calls are used to deploy and retrieve a .zip file. Within the .zip file is a project manifest (package.xml) that lists what to retrieve or deploy, and one or more XML components that are organized into folders.").

## Code Examples

```
<?xml version="1.0" encoding="UTF-8"?>
<KnowledgeSettings xmlns="http://soap.sforce.com/2006/04/metadata">
    <answers>
        <enableArticleCreation>false</enableArticleCreation>
    </answers>
    <cases>
        <articlePDFCreationProfile>partner portal knowledge profile</articlePDFCreationProfile>
        <articlePublicSharingSites>
            <site>KnowledgeSite</site>
            <site>PKB2Site</site>
            <site>ChatterAnswersSite</site>
        </articlePublicSharingSites>
        <articlePublicSharingSitesChatterAnswers>
            <site>ChatterAnswersSite</site>
        </articlePublicSharingSitesChatterAnswers>
        <assignTo>testall@kb.org</assignTo>
        <defaultContributionArticleType>Support</defaultContributionArticleType>
        <editor>simple</editor>
        <enableArticleCreation>true</enableArticleCreation>
        <enableArticlePublicSharingSites>true</enableArticlePublicSharingSites>
        <useProfileForPDFCreation>true</useProfileForPDFCreation>
    </cases>
    <defaultLanguage>ja</defaultLanguage>
    <enableCreateEditOnArticlesTab>true</enableCreateEditOnArticlesTab>
    <enableExternalMediaContent>true</enableExternalMediaContent>
    <enableKnowledge>true</enableKnowledge>
    <showArticleSummariesCustomerPortal>true</showArticleSummariesCustomerPortal>
    <showArticleSummariesInternalApp>true</showArticleSummariesInternalApp>
    <showArticleSummariesPartnerPortal>true</showArticleSummariesPartnerPortal>
    <showValidationStatusField>true</showValidationStatusField>
    <suggestedArticles>
      <caseFields>
         <field>
            <name>Subject</name>
         </field>
         <field>
            <name>SuppliedEmail</name>
         </field>
      </caseFields>
      <useSuggestedArticlesForCase>true</useSuggestedArticlesForCase>
    </suggestedArticles>
</KnowledgeSettings>
```

## Related Topics

- Metadata (atlas.en-us.api_meta.meta/api_meta/metadata.htm)
- Settings (atlas.en-us.api_meta.meta/api_meta/meta_settings.htm)
- enumeration (atlas.en-us.api_meta.meta/api_meta/meta_objects_intro.htm)
- Deploying and Retrieving Metadata with the Zip File (atlas.en-us.api_meta.meta/api_meta/file_based_zip_file.htm)
