---
title: "Find Products Action"
domain: revenue-cloud
topic: find-products-action
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:05.907Z
estimatedTokens: 1873
keywords: [Products, Action, Search, catalog, category, subcategory, term, Special, Access, Rules, REST, HTTP, Inputs, Outputs, Usage]
---

# Find Products Action

> Search for the products from a catalog, category, or subcategory by
			using the specified search term.

# Find Products Action

Search for the products from a catalog, category, or subcategory by using the specified search term.

This action is available in API version 62.0 and later.

## Special Access Rules

The Find Products action is available in Enterprise, Unlimited, and Developer Editions where Product Discovery is enabled.

## Supported REST HTTP Methods

URI

/services/data/v66.0/actions/standard/findProducts

Formats

JSON, XML

HTTP Methods

POST

Authentication

Authorization: Bearer token

## Inputs

| Input | Details |
| --- | --- |
| additionalContextData | TypeApex-definedDescriptionAn array of Apex runtime_industries_cpq.AdditionalContextData records that contain the additional nodes that are used along with the context definition nodes for data hydration.The maximum number of supported nodes is 10. |
| additionalFields | TypeApex-definedDescriptionAn Apex runtime_industries_cpq.AdditionalFields record that contains an array of additional standard or custom fields to include in the response.The supported objects are:Product2ProductAttributeDefinition—If the fields defined for the ProductAttributeDefinition object aren’t available for the ProductClassificationAttr object, then the API request fails. |
| catalogId | TypestringDescriptionCatalog ID that’s used to find and retrieve the products. |
| categoryId | TypestringDescriptionID of the category or subcategory to get the products for. |
| contextDefinition | TypestringDescriptionAPI name of the context definition used for context creation. If you don’t specify a value, the context selected on the Product Discovery Settings page from Setup is used. |
| contextMapping | TypestringDescriptionAPI name of the context mapping that’s used for data hydration. The value of this parameter is used only if it belongs to the specified context definition. |
| correlationId | TypestringDescriptionCurrency code that’s used to calculate and show prices. Only the products with the currency code matching the specified currency code are fetched. |
| currencyCode | TypestringDescriptionCurrency code that’s used to calculate and show prices. |
| cursor | TypestringDescriptionA unique identifier that represents the position of the product from which the next set of results are retrieved. |
| enablePricing | TypebooleanDescriptionIndicates whether the pricing procedure must run (true) or not (false).The default value is true. To use this parameter, you must enable the Pricing Procedure setting from Setup. |
| enableQualification | TypebooleanDescriptionIndicates whether the qualification procedure must run (true) or not (false).The default value is true. To use this parameter, you must enable the Qualification Procedure setting from Setup. |
| filter | TypeApex-definedDescriptionA collection of Apex runtime_industries_cpq.FilterInputRepresentation records where each record contains a related object and the filter criteria that’s applied on the object.The filter parameter supports only the name property.The supported operators are:eqincontainsIf this parameter contains multiple criteria, all the criteria are applied. |
| includeCatalogDetails | TypebooleanDescriptionIndicates whether catalog details must be included in the response (true) or not (false). |
| limit | TypeintegerDescriptionMaximum number of results to be returned in the response. Enter a value from 1 through 100.The default value is 10. |
| orderBy | TypestringDescriptionComma-separated string of key-value pairs that specify how results are sorted. Each string must contain a field name and its sort order. For example, ["name:asc",”custom_field:asc”]. |
| priceBookId | TypestringDescriptionID of the pricebook from which you wan to retrieve the pricing details. |
| productClassificationId | TypestringDescriptionID of the product classification that’s used to filter products. |
| pricingProcedure | TypestringDescriptionAPI name of the pricing procedure to calculate product prices. If you don’t specify a value, the pricing procedure selected on the Product Discovery Settings page from Setup is used. |
| qualificationProcedure | TypestringDescriptionAPI name of the qualification procedure to evaluate product eligibility. If you don’t specify a value, the qualification procedure selected on the Product Discovery Settings page from Setup is used. |
| relatedObjectFilters | TypeApex-definedDescriptionA collection of Apex runtime_industries_cpq.RelatedObjectFilterInputRepresentation records, where each record contains a related object and the filter criteria that’s applied on the object. |
| searchTerm | TypestringDescriptionRequired.Search term to find and retrieve products. |
| userContext | TypeApex-definedDescriptionAn Apex ConnectApi.UserContextInputRepresentation record that contains the user details to evaluate product eligibility and calculate prices. |

## Outputs

| Output | Details |
| --- | --- |
| apiStatus | TypeApex-definedDescriptionAn Apex runtime_industries_cpq.ApiStatusRepresentation record that contains a status code and message. |
| contextId | TypestringDescriptionID of the context that’s created by using the specified context definition. |
| correlationId | TypestringDescriptionID to reference a series of related actions. |
| cursor | TypestringDescriptionUnique identifier that represents the position of the next product in the dataset. It’s used as an input to retrieve the next set of products. |
| facets | TypeApex-definedDescriptionCollection of Apex ProductFacetsRepresentation records that contain details of the facet that's retrieved. |
| results | TypeApex-definedDescriptionAn Apex runtime_industries_cpq.SearchProductsRepresentation record that contains the products that match the query. |
| userContext | TypeApex-definedDescriptionAn Apex ConnectApi.UserContextRepresentation record that includes the user details. |

## Example

POST

This sample request is for the Find Products action.

```

```

This is the sample response for the Find Products action.

```

```

## Usage of an Apex-Defined Data Type in a Flow

To use an Apex-defined input parameter in a flow, follow these guidelines.

Create an Apex Class

Create an Apex class defining the input and output parameters. In the flow, include the Apex-defined input parameters for which you want to add the details. In this example, we’ve created a class named ProductServiceAction that takes an object’s API name and record ID as input, and returns the additional context data.

```

```

Create a Flow with the Necessary Variables and Components

Create a flow that enables users to add a search term to find products. Add the ProductService action that you’ve created above by using Apex. When a flow is invoked from a record, the flow sends the record's objectApiName and recordId to the Apex class, which then generates the flow output. The flow passes the objectApiName and recordId of the record that the flow is invoked from to the Apex class to generate the flow output. See [Example of How to Create a Flow for Product Discovery](https://help.salesforce.com/s/articleView?id=ind.product_catalog_example_create_custom_flow_for_browsing_and_adding_products.htm&type=5&language=en_US "HTML (New Window)").

Configure the Action

Configure the action (for example, Find Products action) to add values for the Apex-defined input parameters. Use the output of the created Apex class as the input of the Apex-defined parameter in the Find Products action, which users can use to find products.

## Code Examples

```
{
  "inputs": [
    {
      "searchTerm": "firstproduct",
      "additionalContextData": [
        {
          "nodeName": "Contract",
          "nodeData": {
            "id": "xxxxx231",
            "name": "Contract1"
          }
        },
        {
          "nodeName": "Lead",
          "nodeData": {
            "id": "lllllll31",
            "name": "Lead1"
          }
        }
      ],
      "additionalFields": {
        "Product2": {
          "fields": [
            "CustomField1__c",
            "StandardField1"
          ]
        }
      },
      "correlationId": "9cbb9650-48c5-11ed-96d1-0afcf185843b",
      "catalogId": "0ZSxx0000000001GAA",
      "categoryId": "0ZGxx0000000004TAJ",
      "currencyCode": "USD",
      "priceBookId": "01sxx0000005puLAAQ",
      "productClassificationId": "11BRO00000000222AA",
      "limit": 10,
      "cursor": "MTAwMDAwMDAwNg==",
      "orderBy": [
        "name:asc"
      ],
      "userContext": {
        "accountId": "001xx0000000001AAA"
      },
      "enableQualification": true,
      "enablePricing": true,
      "qualificationProcedure": "QualificationProcedure",
      "pricingProcedure": "Preview",
      "contextDefinition": "TestDefinition",
      "contextMapping": "TestDefinitionNode",
      "includeCatalogDetails": false,
      "filter": {
        "criteria": [
          {
            "property": "name",
            "operator": "eq",
            "value": "Catalog_Name_1"
          }
        ]
      },
      "relatedObjectFilters": [
        {
          "objectName": "ProductSpecificationRecType",
          "criteria": [
            {
              "property": "IsCommercial",
              "operator": "eq",
              "value": true
            }
          ]
        }
      ]
    }
  ]
}
```

```
{
    "apiStatus": {
      "messages": [],
      "statusCode": "FETCHED_DETAILS_SUCCESSFULLY"
    },
    "contextId": "0U3RM00000000SR0AY",
    "correlationId": "9cbb9650-48c5-11ed-96d1-0afcf185843b",
    "cursor": "MTAwMDAwMDAwNg==",
    "result": [
      {
        "additionalFields": {
          "CustomField1__c": "TextValue",
          "CustomField2__c": "10",
          "StandardField1": "false"
        },
        "description": "IPhone-13",
        "id": "01txx0000006kYwAAI",
        "name": "Sample product 1",
        "prices": [
          {
            "price": 150,
            "priceBookEntryId": "12Axx0000004DF7EAM",
            "priceBookId": "01sxx0000005puLAAQ",
            "pricingModel": {
              "frequency": "Monthly",
              "id": "12Bxx000000CiCDEA0",
              "name": "IPhone-13",
              "occurrence": 6,
              "pricingModelType": "Recurring"
            }
          },
          {
            "price": 400,
            "priceBookEntryId": "12Axx0000004DGjEAM",
            "priceBookId": "01sxx0000005puLAAQ",
            "pricingModel": {
              "id": "12Bxx000000CiCCEA0",
              "name": "IPhone-13",
              "pricingModelType": "OneTime"
            }
          }
        ],
        "qualificationContext": {
          "isQualified": true
        }
      },
      {
        "additionalFields": {
          "CustomField1__c": "TextValue",
          "CustomField2__c": "10",
          "StandardField1": "false"
        },
        "description": "Sample product 2",
        "name": "Sample product 2",
        "id": "01txx0000006kYwAAI",
        "prices": [],
        "qualificationContext": {
          "isQualified": false
        }
      },
      {
        "description": "Sample product 3",
        "name": "Sample product 3",
        "id": "01txx0000006kYwAAI",
        "prices": [],
        "qualificationContext": {
          "isQualified": true
        }
      }
    ],
    "userContext": {
      "accountId": "001xx0000000001AAA"
    }
  }
```

```apex
public class ProductServiceAction {
    // Define input parameters
    public class FlowInput{
        @InvocableVariable(required=false)
        public String objectApiName;
        
        @InvocableVariable(required=false)
        public String recordId;
    }
    
    // Define output parameters
    public class FlowOutput{
        @invocableVariable
        public runtime_industries_cpq.AdditionalContextData additionalContextDataFinalOutput = new runtime_industries_cpq.AdditionalContextData();
    }
    
    // This method is invoked from a Flow
    @InvocableMethod(label='Process Input' description='Creates the Array of ContextDataInput for additional Context Data')
    public static List<FlowOutput> processContextData(List<FlowInput> inputs){
        String apiName;
        String recId;
        FlowOutput output = new FlowOutput();
        
    // Capture input from the flow
        for(FlowInput input: inputs){
            apiName = input.objectApiName;
            recId = input.recordId;
            }
    // Populate the ContextDataInput list to store additional context data    
        List<runtime_industries_cpq.ContextDataInput> listContextData = new List<runtime_industries_cpq.ContextDataInput>();
        runtime_industries_cpq.ContextDataInput cd1 = new runtime_industries_cpq.ContextDataInput();
        cd1.nodeName = apiName;
        cd1.nodeData = new Map<String, Object>();
        cd1.nodeData.put('id',recId);
        listContextData.add(cd1);
       
        output.additionalContextDataFinalOutput.additionalContextData = listContextData;
        List<FlowOutput> flowOutputs = new List<FlowOutput>();
        flowOutputs.add(output);
        
        List<runtime_industries_cpq.RelatedObjectFilter> relatedObjectFilterList = new List<runtime_industries_cpq.RelatedObjectFilter>();
       
        runtime_industries_cpq.RelatedObjectFilter relatedObjectFilter = new runtime_industries_cpq.RelatedObjectFilter();

        relatedObjectFilter.objectName = 'ProductSpecificationRecType';
        List<runtime_industries_cpq.FilterCriteriaInputRepresentation> criteriaList = new  List<runtime_industries_cpq.FilterCriteriaInputRepresentation>();
        runtime_industries_cpq.FilterCriteriaInputRepresentation criteria = new runtime_industries_cpq.FilterCriteriaInputRepresentation();
        criteria.property = 'IsCommercial';
        criteria.operator = 'eq';
        criteria.value = 'true';
        criteriaList.add(criteria);
        relatedObjectFilter.criteria = criteriaList;

        relatedObjectFilterList.add(relatedObjectFilter);
        output.relatedObjectFilter.relatedObjectFilter  = relatedObjectFilterList;
         
		output.userContext.accountId = '001DU000001nx9BYAQ';
        
        return flowOutputs;
       
    }

}
```
