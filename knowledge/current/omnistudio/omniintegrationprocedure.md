---
title: "OmniIntegrationProcedure"
domain: omnistudio
topic: omniintegrationprocedure
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:51.072Z
estimatedTokens: 2039
keywords: [OmniIntegrationProcedure, Omnistudio, Integration, Procedure, Discovery, Framework, declarative, server-side, processing, perform, multiple, actions, server, call, supporting]
---

# OmniIntegrationProcedure

> Represents an Omnistudio Integration Procedure for the
			Discovery Framework. It enables declarative, server-side processing to perform multiple
			actions in a single server call, supporting sales, service, and other business
			workflows. For Discovery Framework, the customization type is
				discoveryframework.

# OmniIntegrationProcedure

Represents an Omnistudio Integration Procedure for the Discovery Framework. It enables declarative, server-side processing to perform multiple actions in a single server call, supporting sales, service, and other business workflows. For Discovery Framework, the customization type is discoveryframework.

## Parent Type

This type extends the [Metadata](https://developer.salesforce.com/docs/atlas.en-us.260.0.api_meta.meta/api_meta/metadata.htm "HTML (New Window)") metadata type and inherits its fullName field.

## File Suffix and Directory Location

OmniIntegrationProcedure components have the suffix .omniIntegrationProcedure and are stored in the omnistudio/<Namespace>/omniIntegrationProcedures folder.

## Version

OmniIntegrationProcedure components are available in API version 56.0 and later.

## Special Access Rules

To use this metadata type, you must have an Omnistudio license and the Discovery Framework feature enabled in your Salesforce org.

## Fields

| Field Name | Description |
| --- | --- |
| customHtmlTemplates | Field TypestringDescriptionThe angular Omniscript template definitions. |
| customJavaScript | Field TypestringDescriptionThe custom JavaScript used for integration procedure. |
| description | Field TypestringDescriptionThe description of the integration procedure. |
| designerCustomizationType | Field TypestringDescriptionThe Omnistudio designer customization type. |
| elementTypeComponentMapping | Field TypestringDescriptionOverrides all elements of one type with a custom Lightning web component by mapping the element type to the Custom LWC. |
| integrationProcedureInput | Field TypestringDescriptionThe input for the integration procedure in JSON format. |
| integrationProcedureOutput | Field TypestringDescriptionThe output for the integration procedure in JSON format. |
| isActive | Field TypebooleanDescriptionIndicates whether the integration procedure is active (true) or not (false). The default value is false. |
| isIntegProcdSignatureAvl | Field TypebooleanDescriptionIndicates whether the integration procedure has a signature (true) or not (false). The default value is false. |
| isIntegrationProcedure | Field TypebooleanDescriptionIndicates whether Omniscript is an Integration Procedure (true) or Omniscript metadata (false). |
| isManagedUsingStdDesigner | Field TypebooleanDescriptionIndicates whether the integration procedure is managed using standard designer (true) or not (false). |
| isMetadataCacheDisabled | Field TypebooleanDescriptionIndicates whether metadata cache for the integration procedure is disabled (true) or not (false). The default value is false. |
| isOmniScriptEmbeddable | Field TypebooleanDescriptionIndicates whether the Omniscript can be embedded in other Omniscripts (true) or not (false). The default value is false |
| isTestProcedure | Field TypebooleanDescriptionIndicates whether OmniIntegrationProcedure is a test procedure setting (true) or not (false). The default value is false |
| isWebCompEnabled | Field TypebooleanDescriptionIndicates whether web component Omniscript (not Angular) is enabled (true) or not (false). The default value is false |
| language | Field TypestringDescriptionRequired.The language of the integration procedure. |
| lastPreviewPage | Field TypestringDescriptionThe last page previewed in the Omniscript designer. |
| name | Field TypestringDescriptionRequired.The name of the integration procedure. |
| nameSpace | Field TypestringDescriptionThe namespace associated with the integration procedure record. |
| omniProcessElements | Field TypeOmniProcessElement[]DescriptionThe OmniProcessElements associated with the OmniIntegrationProcedure. |
| omniProcessKey | Field TypestringDescriptionThe integration procedure Type_SubType value. |
| omniProcessType | Field TypeOmniProcessType (enumeration of type string)DescriptionRequired. Integration Procedure or Omniscript.Possible value is:Integration Procedure |
| overrideKey | Field TypestringDescriptionReserved for future use. |
| propertySetConfig | Field TypestringDescriptionThe configuration information associated with the OmniIntegrationProcedure. |
| requiredPermission | Field TypestringDescriptionThe required permissions to execute the integration procedure. |
| responseCacheType | Field TypestringDescriptionResponse cache used for the integration procedure (session or Org). |
| subType | Field TypestringDescriptionRequired.The subtype value that's used with type and language to create a unique identifier for integration procedure. Integration Procedure subtype can contain only alphanumeric characters. |
| type | Field TypestringDescriptionRequired.The type value that's used with subtype and language to create a unique identifier for integration procedure. Integration Procedure type can contain only alphanumeric characters. |
| uniqueName | Field TypestringDescriptionRequired.The unique name for the integration procedure as Type_SubType_Language_VersionNumber. |
| versionNumber | Field TypestringDescriptionRequired.A numeric version that's used with subtype, type, and language to create a unique identifier for integration procedure. |
| webComponentKey | Field TypestringDescriptionInternal unique key for the generated Lightning Web Components (LWC). |

## OmniProcessElement

Represents the Omnistudio Process Element associated with the Omnistudio Integration Procedure.

| Field Name | Description |
| --- | --- |
| childElements | Field TypeOmniProcessElement[]DescriptionThe child elements associated with the OmniProcessElement. |
| description | Field TypestringDescriptionThe description of the OmniProcessElement. |
| designerCustomizationType | Field TypestringDescriptionThe Omnistudio designer customization type. |
| discoveryFrameworkUsageType | Field TypestringDescriptionThe usage type for industries that use the Discovery Framework. For example, the value for Health Cloud is HcUsageType. The value for no specific industry is Default. |
| embeddedOmniScriptKey | Field TypestringDescriptionThe ID of the embedded Omniscript. |
| isActive | Field TypebooleanDescriptionIndicates whether the status of the OmniProcessElement is active (true) or not (false). |
| isOmniScriptEmbeddable | Field TypebooleanDescriptionIndicates whether the Omniscript with the OmniProcessElement can be embedded in other Omniscript (true) or not (false). |
| level | Field TypedoubleDescriptionThe vertical level in which the OmniProcessElement occurs on the Omniscript. |
| name | Field TypestringDescriptionRequired.The name of the OmniProcessElement. |
| omniProcessVersionNumber | Field TypedoubleDescriptionThe version number of Omnistudio process element. |
| parentElementName | Field TypestringDescriptionThe name of the parent OmniProcessElement. |
| parentElementType | Field TypestringDescriptionThe type of the parent OmniProcessElement. |
| propertySetConfig | Field TypetextareaDescriptionThe property set of the OmniProcessElement. |
| sequenceNumber | Field TypedoubleDescriptionThe horizontal level in which the OmniProcessElement occurs on the Omniscript. |
| type | Field TypestringDescriptionThe OmniProcessElement type. For example, Text and TextArea. |
| uniqueIndex | Field TypestringDescriptionA unique index number for the Omniscript. |

## Declarative Metadata Sample Definition

The following is an example of an OmniIntegrationProcedure component.

```

```

The following is an example package.xml that references the previous definition.

```

```

## Wildcard Support in the Manifest File

This metadata type supports the wildcard character \* (asterisk) in the package.xml manifest file. For information about using the manifest file, see [Deploying and Retrieving Metadata with the Zip File](https://developer.salesforce.com/docs/atlas.en-us.260.0.api_meta.meta/api_meta/file_based_zip_file.htm "HTML (New Window)").

## Usage Type

Before you retrieve or deploy Discovery Framework OmniScripts, we recommend that you review this consideration.

-   When deploying the OmniIntegrationProcedure of type Discovery Framework, enable Discovery Framework Metadata Enabled setting.

## Code Examples

```
<?xml version="1.0" encoding="UTF-8"?>
<OmniIntegrationProcedure xmlns="http://soap.sforce.com/2006/04/metadata">
    <customJavaScript>{&quot;salary&quot;:332}</customJavaScript>
    <elementTypeComponentMapping>{&quot;ElementTypeToHTMLTemplateList&quot;:[]}</elementTypeComponentMapping>
    <integrationProcedureInput>{
  &quot;properties&quot;: {
    &quot;salary&quot;: {
      &quot;type&quot;: &quot;integer&quot;
    }
  },
  &quot;type&quot;: &quot;object&quot;,
  &quot;title&quot;: &quot;Data&quot;,
  &quot;$schema&quot;: &quot;https://json-schema.org/draft/2020-12/schema&quot;
}</integrationProcedureInput>
    <integrationProcedureOutput>{
  &quot;properties&quot;: {
    &quot;tax&quot;: {
      &quot;type&quot;: &quot;double&quot;
    }
  },
  &quot;type&quot;: &quot;object&quot;,
  &quot;title&quot;: &quot;Data&quot;,
  &quot;$schema&quot;: &quot;https://json-schema.org/draft/2020-12/schema&quot;
}</integrationProcedureOutput>
    <isActive>true</isActive>
    <isIntegProcdSignatureAvl>true</isIntegProcdSignatureAvl>
    <isIntegrationProcedure>true</isIntegrationProcedure>
    <isManagedUsingStdDesigner>false</isManagedUsingStdDesigner>
    <isMetadataCacheDisabled>false</isMetadataCacheDisabled>
    <isOmniScriptEmbeddable>false</isOmniScriptEmbeddable>
    <isTestProcedure>false</isTestProcedure>
    <isWebCompEnabled>false</isWebCompEnabled>
    <language>English</language>
    <name>Calc</name>
    <omniProcessElements>
        <description>Response Action</description>
        <isActive>true</isActive>
        <isOmniScriptEmbeddable>false</isOmniScriptEmbeddable>
        <level>0.0</level>
        <name>Response</name>
        <omniProcessVersionNumber>0.0</omniProcessVersionNumber>
        <propertySetConfig>{
  &quot;responseJSONPath&quot; : &quot;&quot;,
  &quot;responseJSONNode&quot; : &quot;&quot;,
  &quot;executionConditionalFormula&quot; : &quot;&quot;,
  &quot;returnFullDataJSON&quot; : false,
  &quot;additionalOutput&quot; : {
    &quot;tax&quot; : &quot;=%salary%*0.3&quot;
  },
  &quot;returnOnlyAdditionalOutput&quot; : false,
  &quot;sendJSONPath&quot; : &quot;&quot;,
  &quot;responseFormat&quot; : &quot;&quot;,
  &quot;id&quot; : &quot;&quot;,
  &quot;isActive&quot; : true,
  &quot;restOptions&quot; : { },
  &quot;sendJSONNode&quot; : &quot;&quot;
}</propertySetConfig>
        <sequenceNumber>1.0</sequenceNumber>
        <type>Response Action</type>
    </omniProcessElements>
    <omniProcessKey>calc_calc</omniProcessKey>
    <omniProcessType>Integration Procedure</omniProcessType>
    <propertySetConfig>{
  &quot;transientValues&quot; : {
    &quot;deactivateConsent&quot; : false
  }
}</propertySetConfig>
    <subType>calc</subType>
    <type>calc</type>
    <uniqueName>calc_calc_English_1</uniqueName>
    <versionNumber>1.0</versionNumber>
</OmniIntegrationProcedure>
```

```
<?xml version="1.0" encoding="UTF-8"?>
<Package
    xmlns="http://soap.sforce.com/2006/04/metadata">
    <types>
        <members>*</members>
        <name>OmniIntegrationProcedure</name>
    </types>
    <version>66.0</version>
</Package>
```
