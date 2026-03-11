---
title: "OmniScript"
domain: omnistudio
topic: omniscript
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T15:25:11.046Z
keywords: [OmniScript, Important, Parent, Type, File, Suffix, Directory, Location, Version, Special, Access, Rules, Fields, AssessmentDefinitionMetadata, OmniAssessmentTaskMetadata, OmniProcessElement, Declarative, Metadata, Sample, Definition]
---

# OmniScript

# OmniScript

Represents an OmniScript for the Discovery Framework, which guides users through sales, service, and other business processes. For Discovery Framework, the customization type is discoveryframework.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=industries_reference)

#### Important

Where possible, we changed noninclusive terms to align with our company value of Equality. We maintained certain terms to avoid any effect on customer implementations.

## Parent Type

This type extends the [Metadata](https://developer.salesforce.com/docs/atlas.en-us.260.0.api_meta.meta/api_meta/metadata.htm "HTML (New Window)") metadata type and inherits its fullName field.

## File Suffix and Directory Location

OmniScript components have the suffix omniScript and are stored in the omniScripts folder.

## Version

OmniScript components are available in API version 56.0 and later.

## Special Access Rules

To use this metadata type, you must have an Omnistudio license and the Discovery Framework feature enabled in your Salesforce org.

## Fields

| Field Name | Description |
| --- | --- |
| assessmentDefinitionMetadata | Field TypeAssessmentDefinitionMetadata[]DescriptionMetadata associated with an assessment definition. Available in API version 64.0 and later. |
| customHtmlTemplates | Field TypestringDescriptionThe angular OmniScript template definitions. |
| customJavaScript | Field TypestringDescriptionThe custom JavaScript used for an OmniScript. |
| designerCustomizationType | Field TypestringDescriptionThe Omnistudio designer customization type. |
| elementTypeComponentMapping | Field TypestringDescriptionOverrides all elements of one type with a custom Lightning web component by mapping the element type to the Custom LWC. |
| isActive | Field TypebooleanDescriptionIndicates whether the OmniScript is active (true) or not (false). The default value is false. |
| isIntegrationProcedure | Field TypebooleanDescriptionIndicates whether OmniScript is an Integration Procedure (true) or OmniScript metadata (false). The default value is false. |
| isManagedUsingStdDesigner | Field TypebooleanDescriptionIndicates whether Omniscript is managed using standard designer (true) or not (false). Available in API version 64.0 and later. |
| isMetadataCacheDisabled | Field TypebooleanDescriptionIndicates whether metadata cache for the integration procedure is disabled (true) or not (false). The default value is false. |
| isOmniScriptEmbeddable | Field TypebooleanDescriptionIndicates whether the OmniScript can be embedded in other OmniScripts (true) or not (false). The default value is false |
| isTestProcedure | Field TypebooleanDescriptionIndicates whether OmniScript is a test procedure setting (true) or not (false). The default value is false |
| isWebCompEnabled | Field TypebooleanDescriptionIndicates whether web component OmniScript (not Angular) is enabled (true) or not (false). The default value is false |
| language | Field TypestringDescriptionRequired.The language of the OmniScript. |
| lastPreviewPage | Field TypestringDescriptionThe last page previewed in the OmniScript designer. |
| name | Field TypestringDescriptionRequired.The name of the OmniScript. |
| namespace | Field TypestringDescriptionThe namespace associated with this OmniScript record. |
| omniAssessmentTasks | Field TypeOmniAssessmentTaskMetadata[]DescriptionThe omniAssessmentTasks associated with the OmniScript. Available in API version 63.0 and later.This field is available only if the Dynamic Assessment Access license is enabled. |
| omniProcessElements | Field TypeOmniProcessElement[]DescriptionThe OmniProcessElements associated with the OmniScript. |
| omniProcessKey | Field TypestringDescriptionThe integration procedure Type_SubType value. |
| omniProcessType | Field TypeOmniProcessType (enumeration of type string)DescriptionRequired. Integration Procedure or OmniScript.Possible value is:OmniScript |
| overrideKey | Field TypestringDescriptionReserved for future use. |
| propertySetConfig | Field TypestringDescriptionThe configuration information associated with the OmniScript. |
| uniqueIndex | Field TypestringDescriptionThe developer name of the assessment question in the OmniScript.This field is relevant only for Omniscripts with designerCustomizationType as discoveryframework. |
| requiredPermission | Field TypestringDescriptionThe required permissions to execute the integration procedure. |
| responseCacheType | Field TypestringDescriptionResponse cache used for the integration procedure (session or Org). |
| subType | Field TypestringDescriptionRequired.The OmniScript sub type value. |
| type | Field TypestringDescriptionRequired.The OmniScript type value. |
| uniqueName | Field TypestringDescriptionRequired.The unique name for the OmniScript as Type_SubType_Language_VersionNumber. |
| versionNumber | Field TypestringDescriptionRequired.The OmniScript version number. |
| webComponentKey | Field TypestringDescriptionInternal unique key for the generated Lightning Web Components (LWC). |

## AssessmentDefinitionMetadata

Represents the metadata associated with the assessment definition.

| Field Name | Description |
| --- | --- |
| approvalDateTime | Field TypedateTimeDescriptionThe date and time when this version of the assessment definition was approved. |
| displayType | Field TypestringDescriptionThe way this assessment is displayed in a user interface. |
| effectiveFromDate | Field TypedateTimeDescriptionThe date and time from which the assessment definition becomes active and can be used. |
| effectiveToDate | Field TypedateTimeDescriptionThe date and time until when this assessment definition is effective. |
| lastRevisedDateTime | Field TypedateTimeDescriptionThe date and time when this assessment definition was last modified. |
| performerType | Field TypestringDescriptionThe type of user, role, or system qualified or intended to complete the assessment. |
| purpose | Field TypestringDescriptionReason for the assessment. |

## OmniAssessmentTaskMetadata

Represents the omni assessment tasks associated with the OmniScript.

| Field Name | Description |
| --- | --- |
| name | Field TypestringDescriptionRequired.The name of the omni assessment task. |
| status | Field TypepicklistDescriptionThe status of the omni assessment task.Possible values are:CompletedInProgress—In ProgressIsDefined—Is DefinedNotStarted—Not StartedThe default value is IsDefined. |
| uniqueName | Field TypestringDescriptionA unique name for the omni assessment task. |

## OmniProcessElement

Represents the OmniScript element associated with the OmniScript.

| Field Name | Description |
| --- | --- |
| childElements | Field TypeOmniProcessElement[]DescriptionThe child elements associated with the OmniProcessElement. |
| description | Field TypestringDescriptionThe description of the OmniProcessElement. |
| designerCustomizationType | Field TypestringDescriptionThe Omnistudio designer customization type.To create assessment questions using the Discovery Framework feature, use the customization type as discoveryframework. |
| discoveryFrameworkUsageType | Field TypestringDescriptionThe usage type for industries that use the Discovery Framework. For example, the value for Health Cloud is HcUsageType. The value for no specific industry is Default. |
| embeddedOmniScriptKey | Field TypestringDescriptionThe ID of the embedded OmniScript |
| isActive | Field TypebooleanDescriptionIndicates whether the status of the OmniProcessElement is active (true) or not (false). |
| isOmniScriptEmbeddable | Field TypebooleanDescriptionIndicates whether the OmniScript with the OmniProcessElement can be embedded in other OmniScripts (true) or not (false). |
| level | Field TypedoubleDescriptionThe vertical level in which the OmniProcessElement occurs on the OmniScript. |
| name | Field TypestringDescriptionRequired.The name of the OmniProcessElement. |
| omniProcessVersionNumber | Field TypedoubleDescriptionThe related OmniProcess version. |
| parentElementName | Field TypestringDescriptionThe name of the parent OmniProcessElement. |
| parentElementType | Field TypestringDescriptionThe type of the parent OmniProcessElement. |
| propertySetConfig | Field TypetextareaDescriptionThe property set of the OmniProcessElement. |
| sequenceNumber | Field TypedoubleDescriptionThe horizontal level in which the OmniProcessElement occurs on the OmniScript. |
| type | Field TypestringDescriptionThe OmniProcessElement type. For example, Text and TextArea. |
| uniqueIndex | Field TypestringDescriptionThe developer name of the assessment question in the OmniScript.This field is relevant only for Omniscripts with designerCustomizationType as discoveryframework. |

## Declarative Metadata Sample Definition

Here’s an example of an Omniscript component.

```

```

The following is an example package.xml that references the previous definition.

```

```

## Wildcard Support in the Manifest File

This metadata type supports the wildcard character \* (asterisk) in the package.xml manifest file. For information about using the manifest file, see [Deploying and Retrieving Metadata with the Zip File](https://developer.salesforce.com/docs/atlas.en-us.260.0.api_meta.meta/api_meta/file_based_zip_file.htm "HTML (New Window)").

## Usage Type

Before you retrieve or deploy Discovery Framework OmniScripts, we recommend that you review these considerations.

-   If the DesignerCustomizationType of the OmniScript is discoveryframework, then the questions in the OmniScript must be within the <uniqueIndex> tag in the metadata definition file.
-   When deploying the OmniScript of type Discovery Framework, enable Discovery Framework Metadata Enabled setting.
-   OmniScripts of type Discovery Framework don't support IDX Workbench.
-   If any question associated with the OmniScript doesn’t exist in the target org or, if the active version of that question doesn’t exist in the target org, then deploying the OmniScript fails.