---
title: "Document Template Update Input"
domain: clm-developer-guide
topic: document-template-update-input
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:22.118Z
estimatedTokens: 623
keywords: [Document, Template, Input, representation]
---

# Document Template Update Input

> Input representation to update a document template.

# Document Template Update Input

Input representation to update a document template.

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| content​Document​Id | String | ID of the document associated with a document template. | Optional | 60.0 |
| contextDefinition​Name | String | Name of the context definition that contains the mapping details used for extraction in the Context Service token mapping type. | Required if the tokenMappingMethodTypeproperty is set to ContextService. | 64.0 |
| contextMapping​Name | String | Name of the context mapping used for extraction in the Context Service token mapping type. | Required if the tokenMappingMethodTypeproperty is set to ContextService. | 64.0 |
| contextFilter​Name | String | Name of the context filter that’s used to filter, order, or limit the data extracted from the context service at run time. This property is available only when tokenMappingMethodType property value is ContextService. | Optional | 66.0 |
| customClass​Name | String | Name of a custom Apex class that’s used to transform token data before document generation. This property is available only when tokenMappingMethodType property value is ContextService. | Optional | 66.0 |
| document​Generation​Mechanism | String | Specifies the method for generating the document. Possible values are:Client-sideServer-sideThe default value is Client-side. | Optional | 60.0 |
| extract​OmniData​Transform​Name | String | Name of the OmniDataTransform bundle of the extract type. | Optional | 60.0 |
| isActive | Boolean | Indicates whether the document template is set to active (true) or inactive (false). | Optional | 60.0 |
| mapper​OmniData​Transform​Name | String | Name of the OmniDataTransform bundle of the mapper type. | Optional | 60.0 |
| should​Display​Unmapped​Token | Boolean | Indicates whether the document template unmapped tokens be displayed (true) or not (false). | Optional | 60.0 |
| status | String | Status to be set for the document template. | Optional | 60.0 |
| tokenList | String | List of tokens present in the document template. | Optional | 60.0 |
| token​Mapping​MethodType | String | Processing method for data that can originate from the same source object. Possible values are:ContextServiceOmniDataTransformThe default value is ContextService | Required | 60.0 |
| usageType | String | Usage type of the document template. | Optional | 60.0 |

## Code Examples

```
{
  "isActive": "false",
  "status": "Draft",
  "documentGenerationMechanism": "ClientSide",
  "extractOmniDataTransformName": "Extractor",
  "mapperOmniDataTransformName": "Mapper",
  "shouldDisplayUnmappedToken": "false",
  "tokenList": "token1,token2,token3",
  "tokenMappingMethodType": "ContextService",
  "contextDefinitionName": "QuoteProposal",
  "contextMappingName": "QuoteToContextMapping",
  "customClassName": "QuoteBundleTransformer", 
  "contextFilterName": "QuoteWithLargeQtyLineItems",
  "usageType": "Contract_Lifecycle_Management",
  "contentDocumentId": "069xxxxxxxxxxxxxxx"
}
```
