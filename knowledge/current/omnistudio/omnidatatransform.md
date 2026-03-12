---
title: "OmniDataTransform"
domain: omnistudio
topic: omnidatatransform
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:52.460Z
estimatedTokens: 2961
keywords: [OmniDataTransform, Represents, header, configuration, DataRaptor., Parent, File, Suffix, Directory, Location, Version, Special, Access, Rules, Fields, OmniDataTransformItem, Declarative, Metadata, Sample, Definition]
---

# OmniDataTransform

> Represents the header configuration of a DataRaptor.

# OmniDataTransform

Represents the header configuration of a DataRaptor.

## Parent Type

This type extends the [Metadata](https://developer.salesforce.com/docs/atlas.en-us.260.0.api_meta.meta/api_meta/metadata.htm "HTML (New Window)") metadata type and inherits its fullName field.

## File Suffix and Directory Location

OmniDataTransform components have the suffix .omniDataTransform and are stored in the OmniDataTransforms folder.

## Version

OmniDataTransform components are available in API version 54.0 and later.

## Special Access Rules

To use this metadata type, you must have an Omnistudio license and the Discovery Framework feature enabled in your Salesforce org.

## Fields

| Field Name | Description |
| --- | --- |
| active | Field TypebooleanDescriptionIndicates whether the omni data transformation is active (true) or not (false). The default value is false. |
| assignmentRulesUsed | Field TypebooleanDescriptionIndicates whether Salesforce Assignment Rules must be used (true) or not (false). The default value is false. |
| deletedOnSuccess | Field TypebooleanDescriptionIndicates whether bulk records must be deleted after successfully processed on bulk loading (true) or not (false). |
| description | Field TypestringDescriptionThe comment added in the Omni Data Transformation. |
| errorIgnored | Field TypebooleanDescriptionIndicates whether the Omni Data Transformation must continue processing if there are errors (true) or not (false). |
| expectedInputJson | Field TypestringDescriptionThe expected JSON input payload format to assist in the Omni Data Transformation configuration. |
| expectedInputOtherData | Field TypestringDescriptionThe expected custom input payload format to assist in the Omni Data Transformation configuration. |
| expectedInputXml | Field TypestringDescriptionThe expected XML input payload format to assist in the Omni Data Transformation configuration. |
| expectedOutputJson | Field TypestringDescriptionThe expected JSON output payload format to assist in the Omni Data Transformation configuration. |
| expectedOutputOtherData | Field TypestringDescriptionThe expected custom output payload format to assist in the Omni Data Transformation configuration. |
| expectedOutputXml | Field TypestringDescriptionThe expected XML output payload format to assist in the Omni Data Transformation configuration. |
| fieldLevelSecurityEnabled | Field TypebooleanDescriptionIndicates whether the Omni Data Transformation must check the user field-level access (true) or not (false). |
| inputParsingClass | Field TypestringDescriptionCustom class that's used to deserialize input to support any serialization format. |
| inputType | Field TypeOmniDataTransformInputType (enumeration of type string)DescriptionThe data format in the input.Values are:CustomJSONSObjectXML |
| isManagedUsingStdDesigner | Field TypebooleanDescriptionIndicates whether the Omni Data Transformation is managed using standard designer (true) or not (false). |
| name | Field TypestringDescriptionRequired.The name that uniquely identifies a Omni Data Transformation. |
| namespace | Field TypestringDescriptionThe namespace associated with the omni data transformation record. |
| nullInputsIncludedInOutput | Field TypebooleanDescriptionIndicates whether fields missing in the input (or null) must nullify the values in the record (true) or ignore the missing input and only update the fields that were provided in the input (false). |
| omniDataTransformItem | Field TypeOmniDataTransformItem[]DescriptionThe configuration of a component inside a DataRaptor. |
| outputParsingClass | Field TypestringDescriptionCustom class that's used to serialize output to support any serialization format. |
| outputType | Field TypestringDescriptionThe data format or object that's used in the output (JSON, XML, SObejct, PDF, Document). |
| overrideKey | Field TypestringDescriptionReserved for future use. |
| preprocessorClassName | Field TypestringDescriptionThe Apex class name to be executed before the Omni Data Transformation (acting as a before insert trigger/process). |
| previewJsonData | Field TypestringDescriptionThe preview of input JSON. |
| previewOtherData | Field TypestringDescriptionThe preview of input other data. |
| previewSourceObjectData | Field TypestringDescriptionThe preview of input source object records. |
| previewXmlData | Field TypestringDescriptionThe preview of input XML. |
| processSuperBulk | Field TypebooleanDescriptionIndicates whether the load Omni Data Transformation process the record upsert spread over multiple Salesforce Apex batch jobs (true) or not (false). |
| requiredPermission | Field TypestringDescriptionThe list of custom permissions required to execute the Omni Data Transformation. |
| responseCacheTtlMinutes | Field TypedoubleDescriptionThe number of minutes the Omni Data Transformation response must stay in the platform cache. |
| responseCacheType | Field TypestringDescriptionThe platform cache used to store the Omni Data Transformation response, either org cache or session cache. |
| rollbackOnError | Field TypebooleanDescriptionIndicates whether the Omni Data Transformation must not commit if there is an error (true) or commit what has been executed (false). |
| sourceObject | Field TypestringDescriptionThe SObject that's used as input in a Load Omni Data Transformation. |
| sourceObjectDefault | Field TypebooleanDescriptionIndicates whether it's the default Omni Data Transformation setting for the specified interface object (true) or not (false). |
| synchronousProcessThreshold | Field TypedoubleDescriptionThe number of input records that can be processed synchronously in a Load Omni Data Transformation. If it's more than this number, then it uses a batch job. |
| targetOutputDocumentIdentifier | Field TypestringDescriptionThe envelope ID of the document template. |
| targetOutputFileName | Field TypestringDescriptionThe document name that receives the output of the Omni Data Transformation. |
| type | Field TypestringDescriptionRequired.The definition of what the Omni Data Transformation performs: extract (SOQL), transform, or load (DML). |
| uniqueName | Field TypestringDescriptionThe unique name for the Omni Data Transformation. |
| versionNumber | Field TypedoubleDescriptionA numeric version that's used with subtype, type, and language to create a unique identifier for Omni Data Transformation. |
| xmlDeclarationRemoved | Field TypebooleanDescriptionIndicates whether the XML declaration (e.g. <?xml version="1.0" encoding="UTF-8"?>) must be removed (true) or not (false). |
| xmlOutputTagsOrder | Field TypestringDescriptionThe XML tag sequence to be used in the output. |

## OmniDataTransformItem

Represents the configuration of a component inside a DataRaptor.

| Field Name | Description |
| --- | --- |
| defaultValue | Field TypestringDescriptionThe default value that's used in output map. |
| disabled | Field TypebooleanDescriptionIndicates whether the output must not be generated (true) or is active and must be generated (false). |
| filterDataType | Field TypeODTItemFilterDataType (enumeration of type string)DescriptionThe field data type that's used in a Turbo Omni Data Transformation.Values are:ADDRESSANYTYPEBASE64BOOLEANCOMBOBOXCURRENCYDATACATEGORYDATEDATETIMEDOUBLEEMAILENCRYPTEDSTRINGGROUPREFERENCEIDINTEGERLONGMULTIPICKLISTPERCENTPHONEPICKLISTREFERENCESTRINGTEXTAREATIMEURL |
| filterGroup | Field TypedoubleDescriptionThe grouping of WHERE clauses in the SOQL. |
| filterOperator | Field TypestringDescriptionThe operator in the WHERE clause of the SOQL. |
| filterValue | Field TypestringDescriptionThe field in the WHERE clause of the SOQL. |
| formulaConverted | Field TypestringDescriptionThe reverse polish notation of the formula. |
| formulaExpression | Field TypestringDescriptionThe formula that the user typed in. |
| formulaResultPath | Field TypestringDescriptionThe variable name where the formula output is stored. |
| formulaSequence | Field TypedoubleDescriptionThe sequence of execution of the formulas. |
| globalKey | Field TypestringDescriptionThe globally unique identifier of the Omni Data Transformation Item that's used to identify the product across Salesforce orgs. |
| inputFieldName | Field TypestringDescriptionThe field or variable path that's used in the configuration of the inputs. |
| inputObjectName | Field TypestringDescriptionThe object that's used in the configuration of the inputs. |
| inputObjectQuerySequence | Field TypedoubleDescriptionThe execution sequence of the inputs. |
| linkedFieldName | Field TypestringDescriptionThe field name that's used to look up another object in a Load Omni Data Transformation. |
| linkedObjectSequence | Field TypedoubleDescriptionThe UI number (sequence number) associated with the object that's used in the lookup in a Load Omni Data Transformation. |
| lookupByFieldName | Field TypestringDescriptionThe field name that's used to look up a record in a Load Omni Data Transformation output. |
| lookupObjectName | Field TypestringDescriptionThe object name that's used to look up a record in a Load Omni Data Transformation output. |
| lookupReturnedFieldName | Field TypestringDescriptionThe field name that must be returned and used in the lookup in a Load Omni Data Transformation output. |
| migrationAttribute | Field TypestringDescriptionField that's used for DataPacks. |
| migrationCategory | Field TypestringDescriptionField that's used for DataPacks. |
| migrationGroup | Field TypestringDescriptionField that's used for DataPacks. |
| migrationKey | Field TypestringDescriptionField that's used for DataPacks. |
| migrationPattern | Field TypestringDescriptionField that's used for DataPacks. |
| migrationProcess | Field TypestringDescriptionField that's used for DataPacks. |
| migrationType | Field TypestringDescriptionField that's used for DataPacks. |
| migrationValue | Field TypestringDescriptionField that's used for DataPacks. |
| name | Field TypestringDescriptionRequired.The Omni Data Transformation name where this configuration belongs to. |
| omniDataTransformation | Field TypestringDescriptionOmni Data Transformation associated with the item configuration |
| omniDataTransformationId | Field TypestringDescriptionThe ID of the Omni Data Transformation associated with this item configuration. |
| outputCreationSequence | Field TypedoubleDescriptionThe sequence of the output path items. |
| outputFieldFormat | Field TypestringDescriptionThe data type of the field, node, or tag in the output path. |
| outputFieldName | Field TypestringDescriptionThe field, node, or tag in the object that's used in the output path. |
| outputObjectName | Field TypestringDescriptionThe name of the object that's used in the output path. |
| requiredForUpsert | Field TypebooleanDescriptionIndicates whether the field is mandatory for the upsert (true) or not (false). |
| transformValuesMappings | Field TypestringDescriptionThe key-value pair JSON list that's used to convert output values into another value. |
| upsertKey | Field TypebooleanDescriptionIndicates whether the field is the key to find the records to upsert in the object (true) or is a value that's to be used during the upsert (false). |

## Declarative Metadata Sample Definition

The following is an example of an OmniDataTransform component.

```

```

The following is an example package.xml that references the previous definition.

```

```

## Wildcard Support in the Manifest File

This metadata type supports the wildcard character \* (asterisk) in the package.xml manifest file. For information about using the manifest file, see [Deploying and Retrieving Metadata with the Zip File](https://developer.salesforce.com/docs/atlas.en-us.260.0.api_meta.meta/api_meta/file_based_zip_file.htm "HTML (New Window)").

## Code Examples

```apex
<?xml version="1.0" encoding="UTF-8"?>
<OmniDataTransform xmlns="http://soap.sforce.com/2006/04/metadata">
    <active>false</active>
    <assignmentRulesUsed>false</assignmentRulesUsed>
    <deletedOnSuccess>false</deletedOnSuccess>
    <errorIgnored>false</errorIgnored>
    <fieldLevelSecurityEnabled>true</fieldLevelSecurityEnabled>
    <inputType>JSON</inputType>
    <isManagedUsingStdDesigner>false</isManagedUsingStdDesigner>
    <name>COODMtest</name>
    <nullInputsIncludedInOutput>false</nullInputsIncludedInOutput>
    <omniDataTransformItem>
        <disabled>false</disabled>
        <filterGroup>0.0</filterGroup>
        <globalKey>c7622d95-6995-4b57-8102-716e034e15e4</globalKey>
        <inputFieldName>Account:Type</inputFieldName>
        <inputObjectQuerySequence>0.0</inputObjectQuerySequence>
        <linkedObjectSequence>0.0</linkedObjectSequence>
        <name>COODMtest</name>
        <outputCreationSequence>1.0</outputCreationSequence>
        <outputFieldName>Type</outputFieldName>
        <outputObjectName>json</outputObjectName>
        <requiredForUpsert>false</requiredForUpsert>
        <transformValuesMappings>{ }</transformValuesMappings>
        <upsertKey>false</upsertKey>
    </omniDataTransformItem>
    <omniDataTransformItem>
        <disabled>false</disabled>
        <filterGroup>0.0</filterGroup>
        <filterOperator>&lt;&gt;</filterOperator>
        <filterValue>&apos;&apos;</filterValue>
        <globalKey>fffd4cd6-7ad8-4e90-adaa-d534a8f75dde</globalKey>
        <inputFieldName>Id</inputFieldName>
        <inputObjectName>Account</inputObjectName>
        <inputObjectQuerySequence>1.0</inputObjectQuerySequence>
        <linkedObjectSequence>0.0</linkedObjectSequence>
        <name>COODMtest</name>
        <outputCreationSequence>0.0</outputCreationSequence>
        <outputFieldName>Account</outputFieldName>
        <outputObjectName>json</outputObjectName>
        <requiredForUpsert>false</requiredForUpsert>
        <upsertKey>false</upsertKey>
    </omniDataTransformItem>
    <omniDataTransformItem>
        <disabled>false</disabled>
        <filterGroup>0.0</filterGroup>
        <globalKey>34b482a6-b64e-4d7f-9610-ef1c4f613b44</globalKey>
        <inputFieldName>Account:Id</inputFieldName>
        <inputObjectQuerySequence>0.0</inputObjectQuerySequence>
        <linkedObjectSequence>0.0</linkedObjectSequence>
        <name>COODMtest</name>
        <outputCreationSequence>1.0</outputCreationSequence>
        <outputFieldName>Id</outputFieldName>
        <outputObjectName>json</outputObjectName>
        <requiredForUpsert>false</requiredForUpsert>
        <transformValuesMappings>{ }</transformValuesMappings>
        <upsertKey>false</upsertKey>
    </omniDataTransformItem>
    <omniDataTransformItem>
        <disabled>false</disabled>
        <filterGroup>0.0</filterGroup>
        <globalKey>5e7ae38a-0cb1-4383-aab9-43e4d88caff2</globalKey>
        <inputFieldName>Account:Name</inputFieldName>
        <inputObjectQuerySequence>0.0</inputObjectQuerySequence>
        <linkedObjectSequence>0.0</linkedObjectSequence>
        <name>COODMtest</name>
        <outputCreationSequence>1.0</outputCreationSequence>
        <outputFieldName>Name</outputFieldName>
        <outputObjectName>json</outputObjectName>
        <requiredForUpsert>false</requiredForUpsert>
        <transformValuesMappings>{ }</transformValuesMappings>
        <upsertKey>false</upsertKey>
    </omniDataTransformItem>
    <omniDataTransformItem>
        <disabled>false</disabled>
        <filterGroup>0.0</filterGroup>
        <globalKey>1a6f7464-1157-4ec3-b62f-f795c5caceb2</globalKey>
        <inputFieldName>Account:BillingStreet</inputFieldName>
        <inputObjectQuerySequence>0.0</inputObjectQuerySequence>
        <linkedObjectSequence>0.0</linkedObjectSequence>
        <name>COODMtest</name>
        <outputCreationSequence>1.0</outputCreationSequence>
        <outputFieldName>BS</outputFieldName>
        <outputObjectName>json</outputObjectName>
        <requiredForUpsert>false</requiredForUpsert>
        <transformValuesMappings>{ }</transformValuesMappings>
        <upsertKey>false</upsertKey>
    </omniDataTransformItem>
    <outputType>JSON</outputType>
    <processSuperBulk>false</processSuperBulk>
    <responseCacheTtlMinutes>0.0</responseCacheTtlMinutes>
    <rollbackOnError>false</rollbackOnError>
    <sourceObjectDefault>false</sourceObjectDefault>
    <synchronousProcessThreshold>0.0</synchronousProcessThreshold>
    <type>Extract</type>
    <uniqueName>COODMtest_1</uniqueName>
    <versionNumber>1.0</versionNumber>
    <xmlDeclarationRemoved>false</xmlDeclarationRemoved>
</OmniDataTransform>
```

```
<?xml version="1.0" encoding="UTF-8"?>
<Package xmlns="http://soap.sforce.com/2006/04/metadata">
    <types>
        <members>*</members>
        <name>OmniDataTransform</name>
    </types>
    <version>66.0</version>
</Package>
```
