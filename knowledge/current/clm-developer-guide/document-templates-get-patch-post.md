---
title: "Document Templates (GET, PATCH, POST)"
domain: clm-developer-guide
topic: document-templates-get-patch-post
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:22.304Z
estimatedTokens: 1859
keywords: [Document, Templates, PATCH, POST, Access, template, actions, including, creation, Designer]
---

# Document Templates (GET, PATCH, POST)

> Access document template actions, including template creation with
      the
      Document
      Template Designer.

# Document Templates (GET, PATCH, POST)

Access document template actions, including template creation with the Document Template Designer.

Resource

```

```

GET Example

```

```

PATCH Example

```

```

POST Example

```

```

Available version

60.0

HTTP methods

GET, PATCH, POST

Request parameters for GET

| Parameter Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| cloneOnly | String | Filters the results to return only the document templates that can be cloned. | Optional | 66.0 |
| limit | String | Number of document templates per page. The default value is 20. | Optional | 60.0 |
| offset | String | Number of records to skip. The default value is 0. | Optional | 60.0 |
| searchString | String | Search term that is used to retrieve a list of document templates. | Optional | 60.0 |
| type | String | Filters the list of document templates by the file type. | Optional | 66.0 |
| usageType | String | Filters the list of document templates by the usage type. | Optional | 66.0 |

Response body for GET

[Document Template List](atlas.en-us.clm_developer_guide.meta/clm_developer_guide/connect_responses_document_template_list.htm "Output representation for the document template list.")

Request body for PATCH

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

Request parameters for PATCH

| Parameter Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| documentTemplateId | String | ID of the document template for operations like cloning or creating a new version. | Required | 60.0 |
| documentTemplateUpdateInput | Object | Specifies the details to modify an existing document template. | Optional | 64.0 |

Response body for PATCH

[Document Template](atlas.en-us.clm_developer_guide.meta/clm_developer_guide/connect_responses_document_template.htm "Output representation for the document template record.")

Request body for POST

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

Request parameters for POST

| Parameter Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| action | String | Action to be performed on the document template. Possible values are:CloneNewVersion | Optional | 60.0 |
| documentTemplate | Object | Specifies the details of a new document template resource. | Optional | 64.0 |
| documentTemplateId | String | ID of the document template for operations like cloning or creating a new version. | Optional | 60.0 |

Response body for POST

[Document Template](atlas.en-us.clm_developer_guide.meta/clm_developer_guide/connect_responses_document_template.htm "Output representation for the document template record.")

## Code Examples

```
/connect/docgen/document-templates
```

```
https://yourInstance.salesforce.com/services/data/v66.0/connect/docgen/document-templates?offset=${offset}&limit=${limit}&searchString=${searchString}
```

```
https://yourInstance.salesforce.com/services/data/v66.0/connect/docgen/document-templates?documentTemplateId=${documentTemplateId}
```

```
https://yourInstance.salesforce.com/services/data/v66.0/connect/docgen/document-templates?documentTemplateId=${documentTemplateId}&action=${action}
```

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

## Related Topics

- Document Template List (atlas.en-us.clm_developer_guide.meta/clm_developer_guide/connect_responses_document_template_list.htm)
- Document Template (atlas.en-us.clm_developer_guide.meta/clm_developer_guide/connect_responses_document_template.htm)
