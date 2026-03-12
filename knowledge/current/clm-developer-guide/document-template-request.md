---
title: "Document Template Request"
domain: clm-developer-guide
topic: document-template-request
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:22.109Z
estimatedTokens: 620
keywords: [Document, Template, Input, representation, resource]
---

# Document Template Request

> Input representation of a document template resource.

# Document Template Request

Input representation of a document template resource.

JSON example

```

```

This example shows a sample request with ContextService as the value of the tokenMappingMethodType property.

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| content​DocumentId | String | ID of the Document associated with a document template. | Optional | 60.0 |
| contextDefinition​Name | String | Name of the context definition that contains the mapping details used for extraction in the Context Service token mapping type. | Required if the tokenMappingMethodTypeproperty is set to ContextService. | 64.0 |
| contextMapping​Name | String | Name of the context mapping used for extraction in the Context Service token mapping type. | Required if the tokenMappingMethodTypeproperty is set to ContextService. | 64.0 |
| contextFilter​Name | String | Name of the context filter that’s used to filter, order, or limit the data extracted from the context service at run time. This property is available only when the tokenMappingMethodType property value is ContextService. | Optional | 66.0 |
| customClass​Name | String | Name of a custom Apex class that’s used to transform token data before document generation. This property is available only when the tokenMappingMethodType property value is ContextService. | Optional | 66.0 |
| document​Generation​Mechanism | String | Specifies the method for generating the document. Possible values are:Client-sideServer-sideThe default value is Client-side. | Optional | 60.0 |
| extractOmniDataTransformName | String | Name of the OmniDataTransform bundle of the extract type. | Optional | 60.0 |
| mapper​OmniData​Transform​Name | String | Name of the OmniDataTransform bundle of the mapper type. | Optional | 60.0 |
| name | String | Name of the document template. | Required | 60.0 |
| tokenList | String | List of tokens present in the document template. | Optional | 60.0 |
| token​Mapping​MethodType | String | Processing method for the data that can originate from same source object. Possible values are:ContextServiceOmniDataTransformThe default value is ContextService. | Required | 60.0 |
| token​Mapping​Type | String | Mapping type for tokens of the document template. | Required | 60.0 |
| type | String | Type of document template. | Required | 60.0 |
| usageType | String | Usage type of the document template. | Optional | 60.0 |

## Code Examples

```
{
  "name": "TemplateName",
  "type": "MicrosoftWord/MicrosoftPowerpoint/Microsoft365Word",
  "tokenMappingMethodType": "OmniDataTransform",
  "tokenMappingType": "JSON",
  "extractOmniDataTransformName": "ExtractName",
  "mapperOmniDataTransformName": "MapperName",
  "contentDocumentId": "069xx0000004CyeAAE",
  "documentGenerationMechanism": "ServerSide",
  "usageType": "Contract_Lifecycle_Management",
  "tokenList": "token1,token2,token3"
}
```

```
{
  "name": "TemplateName",
  "type": "MicrosoftWord/MicrosoftPowerpoint/Microsoft365Word",
  "tokenMappingMethodType": "ContextService",
  "contextDefinitionName": "QuoteProposal",
  "contextMappingName": "QuoteToContextMapping", 
  "customClassName": "QuoteBundleTransformer", 
  "contextFilterName": "QuoteWithLargeQtyLineItems",
  "tokenMappingType": "JSON",
  "extractOmniDataTransformName": "ExtractName",
  "mapperOmniDataTransformName": "MapperName",
  "contentDocumentId": "069xx0000004CyeAAE",
  "documentGenerationMechanism": "ClientSide",
  "usageType": "Contract_Lifecycle_Management",
  "tokenList": "token1,token2,token3"
}
```
