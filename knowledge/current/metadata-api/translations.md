---
title: "Translations"
domain: metadata-api
topic: translations
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:45:54.943Z
keywords: [Translations, Important, Language, Note, Declarative, Metadata, File, Suffix, Directory, Location, Version, Fields, AiCoachAgentScnrDefTranslation, BotBlockTranslation, BotBlockVersionTranslation, BotTemplateTranslation, BotTranslation, BotVersionTranslation, BotDialogTranslation, BotStepTranslation]
---

# Translations

# Translations

Metadata type that enables work with translations for various supported languages. The ability to translate component labels is part of the Translation Workbench.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=api_meta)

#### Important

Where possible, we changed noninclusive terms to align with our company value of Equality. We maintained certain terms to avoid any effect on customer implementations.

This type extends the [Metadata](atlas.en-us.api_meta.meta/api_meta/metadata.htm "The base class for all metadata types. You can’t edit this object. A component is an instance of a metadata type.") metadata type and inherits its fullName field.

## Language

A two-character language code identifies each language, such as en. A five-character code is used for languages that differ depending on location. For example, en\_AU.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=api_meta)

#### Note

Setting a default language is different from setting a default locale. For more information, see Select Your Language, Locale, and Currency in Salesforce Help.

Salesforce offers full support for these languages.

-   Chinese (Simplified): zh\_CN
-   Chinese (Traditional): zh\_TW
-   Danish: da
-   Dutch: nl\_NL
-   English: en\_US
-   Finnish: fi
-   French: fr
-   German: de
-   Italian: it
-   Japanese: ja
-   Korean: ko
-   Norwegian: no
-   Portuguese (Brazil): pt\_BR
-   Russian: ru
-   Spanish: es
-   Spanish (Mexico): es\_MX Spanish (Mexico) defaults to Spanish for customer-defined translations.
-   Swedish: sv
-   Thai: th The Salesforce user interface is fully translated to Thai, but Help is in English.

End-user languages are useful if you have a multilingual organization or partners who speak languages other than your company’s default language. For end-user languages, Salesforce provides translated labels for standard objects and pages, except admin pages, Setup, and Help. Some clouds and features support a subset of these languages in the UI. For details, see User Interface Language Support in Salesforce Help. When you select an end-user language, labels that aren’t translated and Salesforce Help appear in English. End-user languages are intended only for personal use by end users. Don’t use end-user languages as corporate languages. Salesforce doesn’t provide customer support in end-user languages.

End-user languages include:

-   Arabic: ar
-   Bulgarian: bg
-   Croatian: hr
-   Czech: cs
-   English (UK): en\_GB
-   Greek: el
-   Hebrew: iw
-   Hungarian: hu
-   Indonesian: in
-   Polish: pl
-   Portuguese (European): pt\_PT
-   Romanian: ro
-   Slovak: sk
-   Slovenian: sl
-   Turkish: tr
-   Ukrainian: uk
-   Vietnamese: vi

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=api_meta)

#### Important

Before enabling end-user languages Arabic and Hebrew, review the right-to-left language support limitations.

In situations where Salesforce doesn’t provide default translations, use platform-only languages to localize apps and custom functionality that you build on the Salesforce Platform. You can translate items such as custom labels, custom objects, and field names. You can also rename most standard objects, labels, and fields. Informational text and non-field label text aren’t translatable.

Platform-only languages are available in all places where you can select a language in the application. However, when you select a platform-only language, all standard Salesforce labels default to English or, in select cases, to an end-user or fully supported language.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=api_meta)

#### Note

Language support is closely tied to the API version. For example, we introduced support for Belgian Dutch (nl\_BE) in API version 40.0. To take advantage of this language, you must use API version 40.0 or later. In general, we recommend using the most recent version of the API to make the most of our language features.

Platform-only languages include:

-   Albanian: sq
-   Afrikaans: af
-   Amharic: am
-   Arabic (Algeria): ar\_DZ
-   Arabic (Bahrain): ar\_BH
-   Arabic (Egypt): ar\_EG
-   Arabic (Iraq): ar\_IQ
-   Arabic (Jordan): ar\_JO
-   Arabic (Kuwait): ar\_KW
-   Arabic (Lebanon): ar\_LB
-   Arabic (Libya): ar\_LY
-   Arabic (Morocco): ar\_MA
-   Arabic (Oman): ar\_OM
-   Arabic (Qatar): ar\_QA
-   Arabic (Saudi Arabia): ar\_SA
-   Arabic (Sudan): ar\_SD
-   Arabic (Syria): ar\_SY
-   Arabic (Tunisia): ar\_TN
-   Arabic (United Arab Emirates): ar\_AE
-   Arabic (Yemen): ar\_YE
-   Armenian: hy
-   Basque: eu
-   Bosnian: bs
-   Bengali: bn
-   Burmese: my
-   Catalan: ca
-   Chinese (Hong Kong): zh\_HK
-   Chinese (Singapore): zh\_SG
-   Chinese (Malaysia): zh\_MY
-   Dutch (Belgium): nl\_BE
-   English (Australia): en\_AU
-   English (Belgium): en\_BE
-   English (Canada): en\_CA
-   English (Cyprus): en\_CY
-   English (Germany): en\_DE
-   English (Hong Kong): en\_HK
-   English (India): en\_IN
-   English (Ireland): en\_IE
-   English (Israel): en\_IL
-   English (Malaysia): en\_MY
-   English (Malta): en\_MT
-   English (Netherlands): en\_NL
-   English (New Zealand): en\_NZ
-   English (Philippines): en\_PH
-   English (Singapore): en\_SG
-   English (South Africa): en\_ZA
-   English (United Arab Emirates): en\_AE
-   Estonian: et
-   Farsi: fa
-   French (Belgium): fr\_BE
-   French (Canada): fr\_CA
-   French (Luxembourg): fr\_LU
-   French (Morocco): fr\_MA
-   French (Switzerland): fr\_CH
-   Georgian: ka
-   German (Austria): de\_AT
-   German (Belgium): de\_BE
-   German (Luxembourg): de\_LU
-   German (Switzerland): de\_CH
-   Greek (Cyprus): el\_CY
-   Greenlandic: kl
-   Gujarati: gu
-   Hawaiian: haw
-   Haitian Creole: ht
-   Hindi: hi
-   Hmong: hmn
-   Icelandic: is
-   Irish: ga
-   Italian (Switzerland): it\_CH
-   Kannada: kn
-   Kazakh: kk
-   Khmer: km
-   Latvian: lv
-   Lithuanian: lt
-   Luxembourgish: lb
-   Macedonian: mk
-   Malay: ms
-   Malayalam: ml
-   Maltese: mt
-   Marathi: mr
-   Montenegrin: sh\_ME
-   Punjabi: pa
-   Romanian (Moldova): ro\_MD
-   Romansh: rm
-   Russian (Armenia): ru\_AM
-   Russian (Belarus): ru\_BY
-   Russian (Kazakhstan): ru\_KZ
-   Russian (Kyrgyzstan): ru\_KG
-   Russian (Lithuania): ru\_LT
-   Russian (Moldova): ru\_MD
-   Russian (Poland): ru\_PL
-   Russian (Ukraine): ru\_UA
-   Samoan: sm
-   Serbian (Cyrillic): sr
-   Serbian (Latin): sh
-   Spanish (Argentina): es\_AR
-   Spanish (Bolivia): es\_BO
-   Spanish (Chile): es\_CL
-   Spanish (Colombia): es\_CO
-   Spanish (Costa Rica): es\_CR
-   Spanish (Dominican Republic): es\_DO
-   Spanish (Ecuador): es\_EC
-   Spanish (El Salvador): es\_SV
-   Spanish (Guatemala): es\_GT
-   Spanish (Honduras): es\_HN
-   Spanish (Nicaragua): es\_NI
-   Spanish (Panama): es\_PA
-   Spanish (Paraguay): es\_PY
-   Spanish (Peru): es\_PE
-   Spanish (Puerto Rico): es\_PR
-   Spanish (United States): es\_US
-   Spanish (Uruguay): es\_UY
-   Spanish (Venezuela): es\_VE
-   Swahili: sw
-   Tagalog: tl
-   Tamil: ta
-   Te reo: mi
-   Telugu: te
-   Urdu: ur
-   Welsh: cy
-   Xhosa: xh
-   Yiddish: ji
-   Zulu: zu

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=api_meta)

#### Important

Before enabling Urdu as a platform-only language, review the right-to-left language support limitations.

## Declarative Metadata File Suffix and Directory Location

Local translations are stored in a file with a format of localeCode.translation, where localeCode is the locale code of the translation language. For example, the file name for German translations is de.translation. Packaged translations are stored in a file with a format of pkgNamespace\_ \_localeCode.translation. For example, if the package namespace is Acme, the file name for German translations installed by the package is Acme\_ \_de.translation. The supported locale codes are listed in [Language](#translation_languages).

Custom object translations are stored in the objectTranslations folder in the corresponding package directory.

## Version

Translations components are available in API version 14.0 and later.

## Fields

| Field | Field Type | Description |
| --- | --- | --- |
| aiCoachAgentScnrDefs | AiCoachAgentScnrDefTranslation[] | A list of AI Coach agent scenario definition translations. Available in API version 64.0 and later. |
| botBlocks | BotBlockTranslation[] | A list of bot block translations. Available in API version 59.0 and later. |
| botTemplates | BotTemplateTranslation[] | A list of bot template translations. Available in API version 59.0 and later. |
| bots | BotTranslation[] | A list of bot translations. Available in API version 53.0 and later. |
| conversationMessageDefinitions | ConversationMessageDefinitionTranslation[] | A list of conversation message definition translations. Available in API version 61.0 and later. |
| customApplications | CustomApplicationTranslation[] | A list of custom application translations. |
| customLabels | CustomLabelTranslation[] | A list of custom label translations. |
| customPageWebLinks | CustomPageWebLinkTranslation[] | A list of translations for web links defined in a home page component. |
| customTabs | CustomTabTranslation[] | A list of custom tab translations. |
| dataConnectors | DataConnectorTranslation[] | A list of data connector translations. Available in API version 64.0 and later. |
| desFieldTemplateMessages | ExplainabilityMsgTemplateFieldTranslation[] | A list of admin-configured explainability message templates. |
| flowDefinitions | FlowDefinitionTranslation[] | A list of flow translations.Only Flow and AutolaunchedFlow types are supported for translation.This field is available in API version 41.0 and later. |
| identityVerificationCustomFieldLabels | IdentityVerificationFieldTranslation | A list of identity verification translation fields.This field is available in API version 54.0 and later. |
| fullName | string | Required. The language code. For example, de for German.Inherited from Metadata, this field is defined in the WSDL for this metadata type. It must be specified when creating, updating, or deleting. For an example of this field specified for a call, see createMetadata(). |
| globalPicklists | GlobalPicklistTranslation[] | A list of global picklist translations. A global picklist’s value set is inherited by all the custom picklist fields that are based on it.This field is available in API version 37.0 only and is removed from later versions. |
| pipelineInspMetricConfigs | PipelineInspMetricConfigTranslation | A list of translations of Pipeline Inspection forecast category metric settings. This field is available in API version 57.0 and later. |
| productSpecificationTypes | ProductSpecificationTypeTranslation | A list of product specification type translations. This field is available in API version 66.0 and later. |
| prompts | PromptTranslation | A list of In-App Guidance prompt translations. This field is available in API version 48.0 and later. |
| quickActions | GlobalQuickActionTranslation[] | A list of global rather than object-specific quick actions. |
| recordAlertCategories | RecordAlertCategoryTranslation[] | A list of record alert category translations. Available in API version 66.0 and later. |
| recordAlertTemplates | RecordAlertTemplateTranslation[] | A list of record alert template translations. Available in API version 66.0 and later. |
| reportTypes | ReportTypeTranslation[] | A list of report type translations. |
| scontrols | ScontrolTranslation[] | A list of s-control translations. |
| svcCatalogItemAttributes | ServiceProcessAttributeTranslation[] | A list of service catalog item attribute translations. Available in API version 64.0 and later. |
| svcCatalogItemGroups | ServiceProcessItemGroupTranslation[] | A list of service catalog item group translations. Available in API version 64.0 and later. |
| timelineObjectDefinitions | TimelineObjectDefinitionTranslation[] | A list of timeline object definition translations. Available in API version 66.0 and later. |

## AiCoachAgentScnrDefTranslation

AiCoachAgentScnrDefTranslation contains details for the translation of Agentforce Sales Coach scenarios. Available in API version 64.0 and later.

| Field | Field Type | Description |
| --- | --- | --- |
| description | string | The description of the coaching scenario. |
| label | string | The title of the coaching scenario. |
| name | string | Required. Name of the coaching scenario. |
| infoMessage | string | The instructions that the rep has to follow before starting the coaching session. |

## BotBlockTranslation

BotBlockTranslation contains details for a translation of a bot block. Available in API version 59.0 and later.

| Field | Field Type | Description |
| --- | --- | --- |
| botBlockVersions | BotBlockVersionTranslation[] | A list of bot block version translations. |
| fullName | string | Required. The name of the bot block. |

## BotBlockVersionTranslation

BotBlockVersionTranslation contains details for a translation of a bot block version. Available in API version 59.0 and later.

| Field | Field Type | Description |
| --- | --- | --- |
| botDialogs | BotDialogTranslation[] | A list of bot dialog translations for the bot block version. |
| fullName | string | Required. The name of the bot block version. |

## BotTemplateTranslation

BotTemplateTranslation contains details for a translation of a bot template. Available in API version 59.0 and later.

| Field | Field Type | Description |
| --- | --- | --- |
| botDialogs | BotDialogTranslation[] | A list of bot dialog translations for the bot template. |
| fullName | string | Required. The name of the bot template. |

## BotTranslation

BotTranslation contains details for a translation of a bot. Available in API version 53.0 and later.

| Field | Field Type | Description |
| --- | --- | --- |
| botVersions | BotVersionTranslation[] | A list of bot version translations. |
| fullName | string | Required. Name of the bot.The fullName for the translation must match the fullName inherited by the original Bot type. |

## BotVersionTranslation

BotVersionTranslation contains details for a translation of a bot version. Available in API version 53.0 and later.

| Field | Field Type | Description |
| --- | --- | --- |
| botDialogs | BotDialogTranslation[] | A translated list of dialogs in this bot version. |
| fullName | string | Required. Name of a bot version.The fullName for the translation must match the fullName inherited by the original BotVersion type. |

## BotDialogTranslation

BotDialogTranslation contains details for a translation of a bot dialog. Available in API version 53.0 and later.

| Field | Field Type | Description |
| --- | --- | --- |
| botSteps | BotStepTranslation[] | A translated list of steps that are executed as part of the dialog. |
| developerName | string | Required. This unique name prevents conflicts with other dialogs associated with the same bot version.The developerName for the translation must match the developerName on the original BotDialog subtype of BotVersion. |
| label | string | A translated label that identifies the dialog throughout the Salesforce user interface. |

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=api_meta)

#### Note

In Metadata Deployment of Translations, it's expected that blank values cannot be used to delete existing translations. If a translation label is left blank, it's skipped during deployment, and no error will be shown.

## BotStepTranslation

BotStepTranslation contains details for a translation of a bot step. Available in API version 53.0 and later.

| Field | Field Type | Description |
| --- | --- | --- |
| botMessages | BotMessageTranslation[] | A translated list of bot messages used by a BotStep of type Message. |
| botSteps | BotStepTranslation[] | A translated list of bot steps associated with a BotStep of type Group. |
| botVariableOperation | BotVariableOperationTranslation | A translated bot variable operation used by a BotStep of type VariableOperation. |
| stepIdentifier | string | Required. A unique key that identifies a step within a dialog. This key is used to link translated labels to labels within the step. This field is recommended for all step records and is required for translated step labels.The stepIdentifier for the translation must match the stepIdentifier on the original BotStep subtype of BotVersion. |
| type | BotStepType (enumeration of type string) | Required. Valid values are:NavigationInvocationVariableOperationMessageWaitGroupRecordLookup (Available in API version 48.0 and later.)The type for the translation must match the type on the original BotStep subtype of BotVersion. |

## BotMessageTranslation

BotMessageTranslation contains details for a translation of a bot message step. Available in API version 53.0 and later.

| Field | Field Type | Description |
| --- | --- | --- |
| message | string | A translated message to display as part of an outgoing message from the bot to the customer. |
| messageIdentifier | string | Required. A unique key that identifies a message within a dialog. This key is used to link translated labels to labels within the message. This field is recommended for all message records and is required for translated message labels.The messageIdentifier for the translation must match the messageIdentifier on the original BotMessage subtype of BotVersion. |

## BotVariableOperationTranslation

BotVariableOperationTranslation contains details for a translation of a bot variable operation (question) step. Available in API version 53.0 and later.

| Field | Field Type | Description |
| --- | --- | --- |
| botMessages | BotMessageTranslation[] | A translated list of bot messages used as prompt messages by a BotVariableOperation of type Collect. |
| botQuickReplyOptions | BotQuickReplyOptionTranslation[] | A translated list of static choice options used by a BotVariableOperation of type Collect and quickReplyType of Static. |
| quickReplyOptionTemplate | string | A translated formula template used to resolve a label for Dynamic choice options of type Object. |
| retryMessages | BotMessageTranslation[] | In Conversation Repair, the translated messages assigned to repair attempts. |
| successMessages | BotMessageTranslation[] | In a File dialog step, the translated message displayed to the customer as part of type CollectAttachment to confirm a successful file upload. Available in API version 57.0 and later. |
| type | BotVariableOperationType (enumeration of type string) | Required. Valid values are:SetUnsetCollectSetConversationLanguage |
| variableOperationIdentifier | string | Required. A unique key that identifies a variable operation within a dialog. This key is used to link translated labels to labels within the variable operation. This field is recommended for all variable operation records and is required for translated variable operation labels.The variableOperationIdentifier for the translation must match the variableOperationIdentifier on the original BotVariableOperation subtype of BotVersion. |

## BotQuickReplyOptionTranslation

BotQuickReplyOptionTranslation contains details for a translation of a bot quick reply option within a bot variable operation (question) step. Available in API version 53.0 and later.

| Field | Field Type | Description |
| --- | --- | --- |
| literalValue | string | A translated value to be displayed as a menu or button choice to your customer. |
| quickReplyOptionIdentifier | string | Required. A unique key that identifies a quick reply option within a dialog. This key is used to link translated labels to labels within the quick reply option. This field is recommended for all quick reply option records and is required for translated quick reply option labels.The quickReplyOptionIdentifier for the translation must match the quickReplyOptionIdentifier on the original BotQuickReplyOption subtype of BotVersion. |

## CustomApplicationTranslation

CustomApplicationTranslation contains details for a custom application translation. For more details, see [CustomApplication](atlas.en-us.api_meta.meta/api_meta/meta_customapplication.htm "CustomApplication represents a custom or standard application. In API version 29.0 and earlier, CustomApplication represents only a custom application. An application is a list of tab references, with a description and a logo. This type extends the Metadata metadata type and inherits its fullName field.").

| Field | Field Type | Description |
| --- | --- | --- |
| description | string | Description text for the application translation. |
| label | string | The translated custom application name. Maximum of 765 characters. |
| name | string | Required. The name of the custom application. |

## CustomLabelTranslation

CustomLabelTranslation contains details for a custom label translation. For more details, see [CustomLabels](atlas.en-us.api_meta.meta/api_meta/meta_customlabels.htm "The CustomLabels metadata type allows you to create custom labels that can be localized for use in different languages, countries, and currencies.").

| Field | Field Type | Description |
| --- | --- | --- |
| label | string | Required. The translated custom label name. Maximum of 765 characters. |
| name | string | Required. The custom label name. |

## CustomPageWebLinkTranslation

CustomPageWebLinkTranslation contains details for a translation of a web link defined in a home page component. For more details, see [CustomPageWebLink](atlas.en-us.api_meta.meta/api_meta/custompageweblink.htm "Represents a custom link defined in a home page component.").

| Field | Field Type | Description |
| --- | --- | --- |
| label | string | Required. The translated web link. |
| name | string | Required. The name of the web link. |

## CustomTabTranslation

CustomTabTranslation contains details for a translation of a custom tab. For more details, see [CustomTab](atlas.en-us.api_meta.meta/api_meta/meta_tab.htm "Represents a custom tab. Custom tabs let you display custom object data or other web content in Salesforce. When you add a custom tab to an app in Salesforce Classic, it appears as a tab. When you add a custom tab to an app in Lightning Experience, it appears as an item in the app’s navigation bar and in the App Launcher. When a tab displays a custom object, the tab name is the same as the custom object name. For page, s-control, or URL tabs, the name is arbitrary.").

| Field | Field Type | Description |
| --- | --- | --- |
| label | string | Required. The translated custom tab name. |
| name | string | Required. The custom tab name. |

## ExplainabilityMsgTemplateFieldTranslation

Represents the template that contains the decision explanation message for a specified step element type.

| Field Name | Field Type | Description |
| --- | --- | --- |
| description | string | The explainability message field description. |
| label | string | A user-friendly name for ExplainabilityMsgTemplateFieldTranslation. |
| name | string | Required.The name of the decision explanation message for a specified step element type. |
| templateMessage | string | The message associated with the template for a specific expression set step type. |

## Declarative Metadata Sample Definition

This is an example of an ExplainabilityMsgTemplateFieldTranslation component.

```

```

## FlowDefinitionTranslation

FlowDefinitionTranslation contains details for a translation of a flow definition. For more details, see [FlowDefinition](atlas.en-us.api_meta.meta/api_meta/meta_flowdefinition.htm "Represents the flow definition’s description and active flow version number.").

Available in API version 41.0 and later.

| Field | Field Type | Description |
| --- | --- | --- |
| flows | FlowTranslation[] | A list of flow version translations for the flow definition. |
| fullName | string | Required. The API name for the flow definition. |
| label | string | A translated label for the flow definition.By default, flow definitions inherit the label of the active flow version. If you provide a label here, the definition label no longer inherits changes to the active version label. |

## FlowTranslation

FlowTranslation contains details for a translation of a flow version. For more details, see [Flow](atlas.en-us.api_meta.meta/api_meta/meta_visual_workflow.htm "Represents the metadata associated with a flow that encompasses the flow's structure, logic, and run-time behavior. It allows you to build dynamic applications that guide users through interactive screens, automate processes, and connect with various Salesforce and external services. This includes managing data operations like creating, updating, or deleting records, handling complex decisions, looping through collections, and invoking actions like Apex or external services to extend functionality. A flow contains options for API versioning, various execution environments, and detailed configuration of elements to design powerful automation solutions.").

Available in API version 41.0 and later.

| Field | Field Type | Description |
| --- | --- | --- |
| choices | FlowChoiceTranslation[] | A list of choice translations for the flow version. |
| fullName | string | The API name for the flow version.A unique name for the flow that contains only underscores and alphanumeric characters. The name must be unique across the org, begin with a letter, not include spaces, not end with an underscore, and not contain two consecutive underscores.To deploy or retrieve a version, you can specify the version number. For example, sampleFlow-3 specifies version 3 of the flow whose unique name is sampleFlow. If you don't specify a version number, the flow is the latest version.In API version 43.0 and earlier, this field included the version number. In API version 44 and later, this field no longer includes the version number. |
| label | string | A translated label for the flow version. |
| orchestrationStages | FlowOrchestrationStageTranslation | A list of orchestration stage translations for the flow version. Available in API version 63.0 and later. |
| orchestrationSteps | FlowOrchestrationStepTranslation | A list of orchestration step translations for the flow version. Available in API version 63.0 and later. |
| screens | FlowScreenTranslation[] | A list of screen translations for the flow version. |
| stages | FlowStageTranslation[] | A list of stage translations for the flow version. Available in API version 43.0 and later. |

## FlowChoiceTranslation

FlowChoiceTranslation contains details for a translation of a choice in a flow version. For more details, see FlowChoice in [Flow](atlas.en-us.api_meta.meta/api_meta/meta_visual_workflow.htm "Represents the metadata associated with a flow that encompasses the flow's structure, logic, and run-time behavior. It allows you to build dynamic applications that guide users through interactive screens, automate processes, and connect with various Salesforce and external services. This includes managing data operations like creating, updating, or deleting records, handling complex decisions, looping through collections, and invoking actions like Apex or external services to extend functionality. A flow contains options for API versioning, various execution environments, and detailed configuration of elements to design powerful automation solutions.").

Available in API version 41.0 and later.

| Field | Field Type | Description |
| --- | --- | --- |
| choiceText | string | A translated label for the choice. |
| name | string | Required. A unique name for the choice. |
| userInput | FlowChoiceUserInputTranslation | A translated choice input for the choice. |

## FlowChoiceUserInputTranslation

FlowChoiceUserInputTranslation contains details for a translation of a choice input. For more details, see FlowChoiceUserInput in [Flow](atlas.en-us.api_meta.meta/api_meta/meta_visual_workflow.htm "Represents the metadata associated with a flow that encompasses the flow's structure, logic, and run-time behavior. It allows you to build dynamic applications that guide users through interactive screens, automate processes, and connect with various Salesforce and external services. This includes managing data operations like creating, updating, or deleting records, handling complex decisions, looping through collections, and invoking actions like Apex or external services to extend functionality. A flow contains options for API versioning, various execution environments, and detailed configuration of elements to design powerful automation solutions.").

Available in API version 41.0 and later.

| Field | Field Type | Description |
| --- | --- | --- |
| promptText | string | A translated label for the choice input. |
| validationRule | FlowInputValidationRuleTranslation | A translated validation rule for the choice input. |

## FlowInputValidationRuleTranslation

FlowInputValidationRuleTranslation contains details for a translation of a validation rule. For more details, see FlowInputValidationRule in [Flow](atlas.en-us.api_meta.meta/api_meta/meta_visual_workflow.htm "Represents the metadata associated with a flow that encompasses the flow's structure, logic, and run-time behavior. It allows you to build dynamic applications that guide users through interactive screens, automate processes, and connect with various Salesforce and external services. This includes managing data operations like creating, updating, or deleting records, handling complex decisions, looping through collections, and invoking actions like Apex or external services to extend functionality. A flow contains options for API versioning, various execution environments, and detailed configuration of elements to design powerful automation solutions.").

Available in API version 41.0 and later.

| Field | Field Type | Description |
| --- | --- | --- |
| errorMessage | string | A translated error message for the validation rule. |

## FlowOrchestrationStageTranslation

FlowOrchestrationStageTranslation contains details for a translation of an orchestration stage in an orchestration version. For more details, see FlowOrchestratedStage in [Flow](atlas.en-us.api_meta.meta/api_meta/meta_visual_workflow.htm "Represents the metadata associated with a flow that encompasses the flow's structure, logic, and run-time behavior. It allows you to build dynamic applications that guide users through interactive screens, automate processes, and connect with various Salesforce and external services. This includes managing data operations like creating, updating, or deleting records, handling complex decisions, looping through collections, and invoking actions like Apex or external services to extend functionality. A flow contains options for API versioning, various execution environments, and detailed configuration of elements to design powerful automation solutions.").

Available in API version 64.0 and later.

| Field | Field Type | Description |
| --- | --- | --- |
| name | string | Required. The unique name of the orchestration stage translation. |
| stageLabel | string | A translated label for the orchestration stage. |

## FlowOrchestrationStepTranslation

FlowOrchestrationStepTranslation contains details for a translation of an orchestration step in an orchestration version. For more details, see FlowStageStep in [Flow](atlas.en-us.api_meta.meta/api_meta/meta_visual_workflow.htm "Represents the metadata associated with a flow that encompasses the flow's structure, logic, and run-time behavior. It allows you to build dynamic applications that guide users through interactive screens, automate processes, and connect with various Salesforce and external services. This includes managing data operations like creating, updating, or deleting records, handling complex decisions, looping through collections, and invoking actions like Apex or external services to extend functionality. A flow contains options for API versioning, various execution environments, and detailed configuration of elements to design powerful automation solutions.").

Available in API version 63.0 and later.

| Field | Field Type | Description |
| --- | --- | --- |
| name | string | Required. The unique name of the orchestration step translation. |
| stepLabel | string | A translated label for the orchestration step. |

## FlowScreenTranslation

FlowScreenTranslation contains details for a translation of a screen. For more details, see FlowScreen in [Flow](atlas.en-us.api_meta.meta/api_meta/meta_visual_workflow.htm "Represents the metadata associated with a flow that encompasses the flow's structure, logic, and run-time behavior. It allows you to build dynamic applications that guide users through interactive screens, automate processes, and connect with various Salesforce and external services. This includes managing data operations like creating, updating, or deleting records, handling complex decisions, looping through collections, and invoking actions like Apex or external services to extend functionality. A flow contains options for API versioning, various execution environments, and detailed configuration of elements to design powerful automation solutions.").

Available in API version 41.0 and later.

| Field | Field Type | Description |
| --- | --- | --- |
| backButtonLabel | string | A translated label for the Back button. Available in API version 54.0 and later. |
| fields | FlowScreenFieldTranslation[] | A list of screen component translations for the screen. |
| helpText | string | Translated help text for the screen. |
| name | string | Required. An API name for the screen. |
| nextOrFinishButtonLabel | string | A translated label for the Next or Finish button. Available in API version 54.0 and later. |
| pauseButtonLabel | string | A translated label for the Pause button. Available in API version 54.0 and later. |
| pausedText | string | A translated pause confirmation message for the screen. |

## FlowScreenFieldTranslation

FlowScreenFieldTranslation contains details for a translation of a screen component. For more details, see FlowScreenField in [Flow](atlas.en-us.api_meta.meta/api_meta/meta_visual_workflow.htm "Represents the metadata associated with a flow that encompasses the flow's structure, logic, and run-time behavior. It allows you to build dynamic applications that guide users through interactive screens, automate processes, and connect with various Salesforce and external services. This includes managing data operations like creating, updating, or deleting records, handling complex decisions, looping through collections, and invoking actions like Apex or external services to extend functionality. A flow contains options for API versioning, various execution environments, and detailed configuration of elements to design powerful automation solutions.").

Available in API version 41.0 and later.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=api_meta)

#### Note

Translation isn’t supported for screen components that require Lightning runtime.

| Field | Field Type | Description |
| --- | --- | --- |
| fieldText | string | A translated label for the screen component. |
| helpText | string | Translated help text for the screen component. |
| inputParameters | FlowInputParameterTranslation | Reserved for internal use. |
| name | string | Required. An API name for the screen component. |
| validationRule | FlowInputValidationRuleTranslation | Translated validation rule for the screen component. |

## FlowInputParameterTranslation

FlowInputParameterTranslation is reserved for internal use.

| Field | Field Type | Description |
| --- | --- | --- |
| name | string | Reserved for internal use. |
| value | FlowFerovTranslation | Reserved for internal use. |

## FlowFerovTranslation

FlowFerovTranslation is reserved for internal use.

| Field | Field Type | Description |
| --- | --- | --- |
| complexValues | FlowComplexLiteralTranslation | Reserved for internal use. |
| stringValues | string | Reserved for internal use. |

## FlowComplexLiteralTranslation

FlowComplexLiteralTranslation is reserved for internal use.

| Field | Field Type | Description |
| --- | --- | --- |
| customAspectKey | string | Reserved for internal use. |
| value | string | Reserved for internal use. |

## FlowStageTranslation

FlowStageTranslation contains details for a translation of a stage in a flow version. For more details, see FlowStage in [Flow](atlas.en-us.api_meta.meta/api_meta/meta_visual_workflow.htm "Represents the metadata associated with a flow that encompasses the flow's structure, logic, and run-time behavior. It allows you to build dynamic applications that guide users through interactive screens, automate processes, and connect with various Salesforce and external services. This includes managing data operations like creating, updating, or deleting records, handling complex decisions, looping through collections, and invoking actions like Apex or external services to extend functionality. A flow contains options for API versioning, various execution environments, and detailed configuration of elements to design powerful automation solutions.").

Available in API version 43.0 and later.

| Field | Field Type | Description |
| --- | --- | --- |
| label | string | A translated label for the stage. |
| name | string | Required. An API name for the stage. |

## FlowTextTemplateTranslation

FlowTextTemplateTranslation is available only in flows created via Salesforce Surveys and represents the translation details for the text on all the pages of a survey.

Available in API version 45.0 and later.

| Field | Field Type | Description |
| --- | --- | --- |
| name | string | Required. Unique name for the text template. |
| text | string | Translated text for the text template. |

## IdentityVerificationFieldTranslation

Translates the UI components associated with identity verification fields.

Available in API version 54.0 and later.

| Field | Field Type | Description |
| --- | --- | --- |
| customFieldLabel | string | The custom label for the field that contains the verification data. |
| description | string | The identity verification field description. |
| label | string | A user-friendly name for IdentityVerificationFieldTranslation. |
| name | string | Required. The name of the identity verification field. |

## TimelineObjectDefinitionTranslation

Contains details for a translation of a timeline object definition. Available in API version 66.0 and later.

| Field | Field Type | Description |
| --- | --- | --- |
| label | string | Translated label for the timeline object definition. |
| name | string | Required. Name of the timeline object definition. |

## Declarative Metadata Sample Definition

This is an example of an IdentityVerificationFieldTranslation component.

```

```

## GlobalPicklistTranslation

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=api_meta)

#### Note

GlobalPicklistTranslation is available in API version 37.0 only and is removed from later versions.

GlobalPicklistTranslation contains details for a global picklist translation.

Translations are stored in a file with a format of globalPicklistName\_\_e\-lang.objectTranslation, where globalPicklistName\_\_e is the global picklist name and lang is the translation language. To reference a global picklist translation value, use globalPicklistName\_\_e.value1, where value1 is the translated value for the user interface.

Here’s what translations look like for a global picklist.

```

```

| Field | Field Type | Description |
| --- | --- | --- |
| name | string | Required. Represents the name of a global picklist to be translated. |
| picklistValues | PicklistValueTranslation[] | A list of picklist values from global picklists to be translated. |

## GlobalQuickActionTranslation

GlobalQuickActionTranslation contains details for the global translation of a quick action. For more information, see [QuickAction](atlas.en-us.api_meta.meta/api_meta/meta_quickaction.htm "Represents a specified create or update quick action for an object that then becomes available in the Chatter publisher. For example, you can create an action that, on the detail page of an account, allows a user to create a contact related to that account from the Chatter feed on that page. QuickAction can be created on objects that permit custom fields.").

| Field | Field Type | Description |
| --- | --- | --- |
| aspect | string | Identifies which quick action label the translated text belongs to. Use this field only when you want to use different strings for the quick action’s field label and informational message. Valid values are Master and InfoMessage. Available in API version 53.0 and later. |
| label | string | Required. The translated quick action name, globally. |
| name | string | Required. The quick action name. |

## PipelineInspMetricConfigTranslation

PipelineInspMetricConfigTranslation contains details for the translation of Pipeline Inspection forecast category metric settings. Available in API version 57.0 and later.

| Field | Field Type | Description |
| --- | --- | --- |
| label | string | Required. The translated Pipeline Inspection metric configuration name. |
| name | string | Required. The name of the Pipeline Inspection metric configuration. |

## ProductSpecificationTypeTranslation

ProductSpecificationTypeTranslation contains details for a translation of a product specification type. For more details, see [ProductSpecificationType](https://developer.salesforce.com/docs/atlas.en-us.260.0.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/meta_productspecificationtype.htm "HTML (New Window)"). Available in API version 66.0 and later.

| Field | Field Type | Description |
| --- | --- | --- |
| description | string | The translated product specification type description. |
| label | string | The translated product specification type name. |
| name | string | Required. The name of the product specification type. |

## PromptTranslation

PromptTranslation contains metadata for the translation of a prompt, which is part of In-App Guidance. Available in API Version 48.0 and later.

| Field | Field Type | Description |
| --- | --- | --- |
| description | string | The prompt description. |
| label | string | The translated prompt name. |
| name | string | Required. The name of the prompt. |
| promptVersions | PromptVersionTranslation | A list of the prompt version translations. |

## PromptVersionTranslation

PromptVersionTranslation contains details for translation of a prompt, which is part of In-App Guidance. Available in API Version 48.0 and later.

| Field | Field Type | Description |
| --- | --- | --- |
| actionButtonLabel | string | The label for the prompt’s action button. |
| actionButtonLink | string | The URL for the prompt’s action button. |
| body | string | The body text of the prompt. |
| description | string | The prompt description. |
| dismissButtonLabel | string | The label for the floating prompt’s dismiss button. |
| header | string | The header for the docked prompt. |
| imageAltText | string | The alt text for a prompt’s image. Available in API version 53.0 and later. |
| imageLink | string | The URL for a prompt’s image. Available in API version 53.0 and later. |
| label | string | The translated prompt name. |
| name | string | Required. The name of the prompt. |
| title | string | The title of the prompt. |
| videoLink | string | The URL for the docked prompt’s video. |

## ReportTypeTranslation

ReportTypeTranslation contains details for a translation of a custom report type. For more details, see [ReportType](atlas.en-us.api_meta.meta/api_meta/meta_reporttype.htm "Represents the metadata associated with a custom report type. Custom report types allow you to build a framework from which users can create and customize reports.").

| Field | Field Type | Description |
| --- | --- | --- |
| description | string | The translated report type description. |
| label | string | The translated report type name. |
| name | string | Required. The name of the report type. |
| sections | ReportTypeSectionTranslation[] | A list of report type section translations. |

## ReportTypeSectionTranslation

ReportTypeSectionTranslation contains details for a report type section translation.

| Field | Field Type | Description |
| --- | --- | --- |
| columns | ReportTypeColumnTranslation[] | A list of report type column translations. |
| label | string | The translated report type section name. |
| name | string | Required. The name of the report type section. |

## ReportTypeColumnTranslation

ReportTypeColumnTranslation contains details for a report type column translation.

| Field | Field Type | Description |
| --- | --- | --- |
| label | string | Required. The translated report type column name. |
| name | string | Required. The report type column name. |

## ScontrolTranslation

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=api_meta)

#### Important

Visualforce pages supersede s-controls. Organizations that haven't previously used s-controls can’t create them. Existing s-controls are unaffected and can still be edited.

ScontrolTranslation contains details for a translation of an s-control. For more information, see “About S-Controls” in Salesforce Help.

| Field | Field Type | Description |
| --- | --- | --- |
| label | string | Required. The translated s-control name. |
| name | string | Required. The name of the s-control. |

## ConversationMessageDefinitionTranslation

ConversationMessageDefinitionTranslation contains details for a translation of a conversation message definition. Available in API version 61.0 and later.

| Field | Field Type | Description |
| --- | --- | --- |
| constantValueTranslations | ConversationMessageConstantValueTranslation[] | A list of conversation message constant value translations. |
| label | string | Required. The translated label for the conversation message definition. |
| name | string | Required. The name of the conversation message definition. |

## ConversationMessageConstantValueTranslation

ConversationMessageConstantValueTranslation contains details for a translation of a conversation message constant value. Available in API version 61.0 and later.

| Field | Field Type | Description |
| --- | --- | --- |
| name | string | Required. The name of the conversation message constant value. |
| value | string | Required. The translated constant value. |

## DataConnectorTranslation

DataConnectorTranslation contains details for a translation of a data connector. Available in API version 64.0 and later.

| Field | Field Type | Description |
| --- | --- | --- |
| attributes | DataConnectorAttributeTranslation[] | A list of data connector attribute translations. |
| description | string | The translated description for the data connector. |
| errors | DataConnectorErrorTranslation[] | A list of data connector error translations. |
| help | string | The translated help text for the data connector. |
| label | string | The translated label for the data connector. |
| language | string | The language for the data connector translation. |
| name | string | The name of the data connector. |

## DataConnectorAttributeTranslation

DataConnectorAttributeTranslation contains details for a translation of a data connector attribute. Available in API version 64.0 and later.

| Field | Field Type | Description |
| --- | --- | --- |
| errorMessage | string | The translated error message for the attribute. |
| infoMessage | string | The translated info message for the attribute. |
| inputLabel | string | The translated input label for the attribute. |
| label | string | Required. The translated label for the attribute. |
| name | string | Required. The name of the attribute. |
| options | DataConnectorAttributeOptTranslation[] | A list of data connector attribute option translations. |

## DataConnectorAttributeOptTranslation

DataConnectorAttributeOptTranslation contains details for a translation of a data connector attribute option. Available in API version 64.0 and later.

| Field | Field Type | Description |
| --- | --- | --- |
| label | string | Required. The translated label for the attribute option. |
| name | string | Required. The name of the attribute option. |

## DataConnectorErrorTranslation

DataConnectorErrorTranslation contains details for a translation of a data connector error. Available in API version 64.0 and later.

| Field | Field Type | Description |
| --- | --- | --- |
| label | string | Required. The translated label for the error. |
| name | string | Required. The name of the error. |

## RecordAlertCategoryTranslation

RecordAlertCategoryTranslation contains details for a translation of a record alert category. Available in API version 66.0 and later.

| Field | Field Type | Description |
| --- | --- | --- |
| description | string | The translated description for the record alert category. |
| label | string | Required. The translated label for the record alert category. |
| name | string | Required. The name of the record alert category. |

## RecordAlertTemplateTranslation

RecordAlertTemplateTranslation contains details for a translation of a record alert template. Available in API version 66.0 and later.

| Field | Field Type | Description |
| --- | --- | --- |
| description | string | The translated description for the record alert template. |
| label | string | The translated label for the record alert template. |
| name | string | Required. The name of the record alert template. |
| subject | string | The translated subject for the record alert template. |

## ServiceProcessAttributeTranslation

ServiceProcessAttributeTranslation contains details for a translation of a service process attribute. Available in API version 64.0 and later.

| Field | Field Type | Description |
| --- | --- | --- |
| label | string | Required. The translated label for the service process attribute. |
| name | string | Required. The name of the service process attribute. |
| serviceProcessName | string | Required. The name of the service process. |

## ServiceProcessItemGroupTranslation

ServiceProcessItemGroupTranslation contains details for a translation of a service process item group. Available in API version 64.0 and later.

| Field | Field Type | Description |
| --- | --- | --- |
| groupName | string | Required. The name of the service process item group. |
| name | string | Required. The name of the service process item group translation. |
| serviceProcessName | string | Required. The name of the service process. |

## Declarative Metadata Sample Definition

This sample XML definition shows a translations component.

```

```

## Usage

When you use the [retrieve()](atlas.en-us.api_meta.meta/api_meta/meta_retrieve.htm "The retrieve() call retrieves XML file representations of components in an organization.") call to get translations, the files returned in the .translations folder only include translations for the other metadata types referenced in package.xml. For example, this package.xml file contains types elements that match all custom applications, custom labels, web links defined in home page components, custom tabs, report types, and s-controls. Translations for all these metadata types are returned because each metadata type is explicitly listed in package.xml.

```

```

## Wildcard Support in the Manifest File

This metadata type supports the wildcard character \* (asterisk) in the package.xml manifest file. For information about using the manifest file, see [Deploying and Retrieving Metadata with the Zip File](atlas.en-us.api_meta.meta/api_meta/file_based_zip_file.htm "The deploy() and retrieve() calls are used to deploy and retrieve a .zip file. Within the .zip file is a project manifest (package.xml) that lists what to retrieve or deploy, and one or more XML components that are organized into folders.").

#### See Also

-   [CustomLabels](atlas.en-us.api_meta.meta/api_meta/meta_customlabels.htm "The CustomLabels metadata type allows you to create custom labels that can be localized for use in different languages, countries, and currencies.")