---
title: "Create Insurance Rating Action"
domain: insurance-developer-guide
topic: create-insurance-rating-action
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:38.537Z
estimatedTokens: 508
keywords: [Insurance, Rating, Action, runtime, context, quote, REST, HTTP, Inputs, Outputs]
---

# Create Insurance Rating Action

> Create a runtime context that contains the details to create a
      quote.

# Create Insurance Rating Action

Create a runtime context that contains the details to create a quote.

This action is available in API version 66.0 and later.

## Supported REST HTTP Methods

URI

/services/data/v66.0/actions/standard/createInsuranceRating

Formats

JSON

HTTP Methods

POST

Authentication

Bearer Token

## Inputs

| Input | Details |
| --- | --- |
| additionalFields | TypeStringDescriptionAdditional fields to include in the rating context. |
| effectiveDate | TypeDateDescriptionRequired.Date from which the insurance policy coverage becomes effective. |
| executeRating | TypeStringDescriptionIndicates whether rating must be executed (true) or not (false). The default value is true. |
| ratingDate | TypeDateDescriptionDate that's used for rating calculations and rule evaluations. If not specified, the current date is used. |
| ratingInputs | TypeMap<String, Object>DescriptionRequired.JSON string that contains the rating input nodes with product codes and attributes. |
| ratingOptions | TypeApex-definedDescriptionAn Apex runtime_industries_insurance.CreateInsuranceRatingOptions record that contains rating execution options to create insurance rating. |
| rootProductCodes | TypeStringDescriptionArray of root product codes to include in the rating process. |
| salesTransactionTypeId | TypeStringDescriptionID of the sales transaction type. |
| transactionType | TypeStringDescriptionType of insurance transaction, such as NewBusiness, Renewal, and Endorsement. |

## Outputs

| Output | Details |
| --- | --- |
| contextId | TypeStringDescriptionContext ID of the insurance quote. |
| pricingResults | TypeMap<String, Object>DescriptionRecalculated pricing details of the insurance product. |
| productRatingOutput | TypeApex-definedDescriptionAn Apex ConnectApi__ProductRatingOutputRepresentation record that contains the product rating details. |

## Example

Sample Request

```

```

This is a sample request to call this invocable action from Apex code.

```

```

Sample Response

```

```

## Code Examples

```
{
  "inputs": [
    {
      "effectiveDate": "2024-10-18",
      "ratingInputs": "[{"instanceKeys":["AutoRoot","AutoBundle","NewDriver"],"productCode":"autoDriver","attributes":{"DriverAccidents":4},"targetRecords":["003xx000004WhKhAAK"]}]",
      "ratingOptions": {
        "returnRatingResults": true,
        "returnContextJson": true,
        "returnProductDetails": true
      }
    }
  ]
}
```

```apex
// Sample Apex call for createInsuranceRating invocable action
public class CreateInsuranceRatingInvoke {
    private static final String ACTION_NAME = 'createInsuranceRating';

    public static Boolean invokeMethod(
        Map<String, Object> inputs,
        Map<String, Object> output,
        Map<String, Object> options
    ) {
        Map<String, Object> postPayload = (Map<String, Object>) getValueFromMap('postPayload', inputs, options);
        System.debug('Rating post Input: ' + postPayload);

        if (postPayload == null) {
            output.put('success', false);
            output.put('errorMessage', 'postPayload is required for rating patch');
            output.put('errorType', 'VALIDATION_ERROR');
            return false;
        }

        try {
            System.debug('Calling Invocable Action: createInsuranceRating');

            Invocable.Action action = Invocable.Action.createStandardAction(ACTION_NAME);

            System.debug('RatingInputs: ' + postPayload.get('ratingInputs'));
            setInvocationParameter(action, postPayload, 'ratingInputs', true);

            action.setInvocationParameter('transactionType', postPayload.get('transactionType'));

            setInvocationParameter(action, postPayload, 'additionalFields', true);

            action.setInvocationParameter('effectiveDate', postPayload.get('effectiveDate'));

            if (postPayload.containsKey('ratingOptions')) {
                System.debug('Options:' + postPayload.get('ratingOptions'));
                Map<String, Object> ratingOptions = (Map<String, Object>) postPayload.get('ratingOptions');
                action.setInvocationParameter('ratingOptions', ratingOptions);
            }

            List<Invocable.Action.Result> results = action.invoke();

            if (results != null && !results.isEmpty()) {
                Invocable.Action.Result result = results[0];

                if (result.isSuccess()) {
                    System.debug('Rating post successfully via Invocable Action');
                    output.put('ratingData', result.getOutputParameters());

                    List<Invocable.Action.Error> actionErrors = result.getErrors();
                    if (actionErrors != null && !actionErrors.isEmpty()) {
                        output.put('success', false);
                        output.put('error', result.getErrors());
                        return false;
                    }
                    output.put('success', true);
                    return true;

                } else {
                    List<Invocable.Action.Error> actionErrors = result.getErrors();
                    String errorMessage = 'Rating post Invocable Action failed';

                    if (actionErrors != null && !actionErrors.isEmpty()) {
                        List<String> errorMessages = new List<String>();
                        List<Map<String, Object>> errorDetailsList = new List<Map<String, Object>>();

                        for (Invocable.Action.Error actionError : actionErrors) {
                            errorMessages.add(actionError.getMessage());
                            errorDetailsList.add(new Map<String, Object>{
                                'message' => actionError.getMessage(),
                                'code' => actionError.getCode()
                            });
                        }

                        errorMessage = String.join(errorMessages, '; ');
                        output.put('actionErrors', errorDetailsList);
                    }

                    output.put('success', false);
                    output.put('errorMessage', errorMessage);

                    System.debug(LoggingLevel.ERROR, 'Rating post Invocable Action failed: ' + errorMessage);
                    return false;
                }

            } else {
                output.put('success', false);
                output.put('errorMessage', 'Rating post Invocable Action returned null or empty results');
                System.debug(LoggingLevel.WARN, 'Rating post Invocable Action returned null/empty results');
                return false;
            }

        } catch (Exception e) {
            String errorMsg = 'Exception: ' + e.getMessage();
            output.put('success', false);
            output.put('errorMessage', errorMsg);
            output.put('errorType', 'EXCEPTION');
            System.debug(LoggingLevel.ERROR, 'Exception while rating post: ' + errorMsg);
            return false;
        }
    }

    private static Object getValueFromMap(String key, Map<String, Object> inputs, Map<String, Object> options) {
        if (inputs != null && inputs.get(key) != null && String.isNotBlank(String.valueOf(inputs.get(key)))) {
            return inputs.get(key);
        }
        else if (options != null && options.get(key) != null && String.isNotBlank(String.valueOf(options.get(key)))) {
            return options.get(key);
        }

        return null;
    }

    private static void setInvocationParameter(
        Invocable.Action action,
        Map<String, Object> payload,
        String inputAttribute,
        Boolean serializeJSON
    ) {
        if (payload.containsKey(inputAttribute) && payload.get(inputAttribute) != null) {
            System.debug(inputAttribute + ': ' + JSON.serialize(payload.get(inputAttribute)));
            if (serializeJSON) {
                action.setInvocationParameter(inputAttribute, JSON.serialize(payload.get(inputAttribute)));
            } else {
                action.setInvocationParameter(inputAttribute, payload.get(inputAttribute));
            }
        } else {
            System.debug('payload does not contain attribute: ' + inputAttribute);
        }
    }
}
```

```
[
  {
    "actionName": "repriceInsuranceProduct",
    "errors": null,
    "invocationId": null,
    "isSuccess": true,
    "outcome": null,
    "outputValues": {
      "contextId": "273e01fdfb6f9f21428869eb784ee756976afb0e9bdc49f2a360be397a10ca12",
      "productRatingOutput": {
        "ratingResult": {
          "childNodes": [
            {
              "childNodes": [
                {
                  "childNodes": [
                    {
                      "childNodes": [],
                      "details": {
                        "NetUnitPrice": null,
                        "InstanceKey": "Driver",
                        "ProductCode": "driver",
                        "NetTotalPrice": 0,
                        "Driver_Accident_Points": 15,
                        "ProratedQLITaxAmount": 0,
                        "Driver_MVR_Points": 8,
                        "Age_First_Licensed": 16
                      }
                    },
                    {
                      "childNodes": [],
                      "details": {
                        "NetUnitPrice": 501.84,
                        "InstanceKey": "Comprehensive",
                        "ProductCode": "comprehensive",
                        "NetTotalPrice": 501.84,
                        "ProratedQLITaxAmount": 0
                      }
                    }
                  ],
                  "details": {
                    "NetUnitPrice": 501.84,
                    "InstanceKey": "Auto1",
                    "ProductCode": "auto",
                    "NetTotalPrice": 501.84,
                    "ProratedQLITaxAmount": 0
                  }
                }
              ],
              "details": {
                "NetUnitPrice": 1485.84,
                "InstanceKey": "AutoSilver",
                "ProductCode": "autoSilver",
                "NetTotalPrice": 1485.84,
                "ProratedQLITaxAmount": 0
              }
            }
          ],
          "details": {}
        },
        "productDetails": [
          {
            "productSpecificationType": {
              "productSpecificationRecordType": {},
              "name": "InsuredParty"
            },
            "childProducts": [],
            "additionalFields": {
              "ProductCode": "driver",
              "SpecificationType": "InsuredParty",
              "BasedOnId": "11Bxx000002C1kZEAS",
              "Name": "Driver"
            },
            "availabilityDate": null,
            "description": null,
            "productInformation": null,
            "childVariationIds": [],
            "isActive": true,
            "qualificationContext": null,
            "productClassification": {
              "id": "11Bxx000002C1kZEAS"
            },
            "productComponentGroups": [],
            "configureDuringSale": "Allowed",
            "productRelatedComponent": null,
            "id": "01txx0000006i3iAAA",
            "prices": [],
            "isComponentRequired": null,
            "productType": null,
            "isAssetizable": true,
            "isSoldOnlyWithOtherProds": false,
            "attributeCategories": [
              {
                "code": "Driving History",
                "records": [
                  {
                    "isRequired": false,
                    "code": "AgeFirstLicensed",
                    "additionalFields": {},
                    "attributeCategoryId": "0v3xx0000000001AAA",
                    "hidden": false,
                    "isConfigurable": false,
                    "dataType": "NUMBER",
                    "label": "Age First Licensed",
                    "isReadOnly": false,
                    "isCloneable": false,
                    "name": "Age First Licensed",
                    "id": "0tjxx000000001FAAQ",
                    "attributeNameOverride": "Age First Licensed",
                    "isPriceImpacting": true,
                    "developerName": "Age_First_Licensed",
                    "status": "Active"
                  }
                ],
                "name": "Driving History"
              }
            ],
            "nodeType": "simpleProduct",
            "displayUrl": null,
            "productSellingModelOptions": [
              {
                "productSellingModel": {
                  "sellingModelType": "OneTime",
                  "name": "One Time",
                  "id": "0jPxx0000000001EAA",
                  "doesAutoRenewByDefault": false,
                  "status": "Active"
                },
                "productSellingModelId": "0jPxx0000000001EAA",
                "isDefault": true,
                "productId": "01txx0000006i3iAAA",
                "id": "0iOxx000000000zEAA"
              }
            ],
            "productQuantity": null,
            "productCode": "driver",
            "name": "Driver"
          }
        ],
        "contextJSON": {
          "salesTransactions": [
            {
              "salesTransactionItems": [
                {
                  "salesTransactionItemClauses": [],
                  "childNodes": [
                    {
                      "salesTransactionItemClauses": [],
                      "childNodes": [],
                      "salesTransactionItemAttributes": [
                        {
                          "fields": {
                            "AttributeKey": "0tjxx000000000PAAQ",
                            "AttributeValue": "50",
                            "ParentReference": "ref_681c203e_5491_4d5f_a296_02a0b3dfa181",
                            "hasObjectRef": null,
                            "AttributePicklistValue": "0v6xx000000000ZAAQ",
                            "IsPriceImpacting": false,
                            "businessObjectType": "QuoteLineItemAttribute",
                            "AttributeName": "Deductible",
                            "AttributeDefinitionCode": "Deductible",
                            "id": "ref_fdd78e30_1258_4ea3_9f56_c74245ae58d6",
                            "SalesTransactionItemAttrParent": "ref_681c203e_5491_4d5f_a296_02a0b3dfa181",
                            "AttributeDeveloperName": "Deductible"
                          }
                        }
                      ]
                    }
                  ],
                  "salesTransactionItemRelatedObjects": [],
                  "salesTransactionItemTaxes": [],
                  "fields": {
                    "LevelTwoBasePremium": 120,
                    "IntermediateVariableTwo": null,
                    "Product": "01txx0000006i3UAAQ",
                    "businessObjectType": "QuoteLineItem",
                    "DYN__License_State": null,
                    "RevenueCloudPackagingFlag": "C",
                    "ValidationResult": null,
                    "DYN__AssetRecordName": null,
                    "PolicyPremium": 1485.84,
                    "PeriodBoundaryStartMonth": null,
                    "SalesTransactionSourceAsset": null,
                    "ProratedQLITaxAmount": 0,
                    "id": "ref_681c203e_5491_4d5f_a296_02a0b3dfa181",
                    "TaxTreatment": null,
                    "Subtotal": null,
                    "LineItemPath": "ref_e112c127_367c_41c8_a5ce_1d7e69ac58bc/ref_681c203e_5491_4d5f_a296_02a0b3dfa181",
                    "DiscountAmount": null,
                    "PricebookEntry": null,
                    "NetUnitPrice": 590.4,
                    "ParentSalesTransactionItem": "ref_e112c127_367c_41c8_a5ce_1d7e69ac58bc",
                    "ObligatedAmount": null,
                    "DYN__Age_First_Licensed": null,
                    "LevelThreePremium": null,
                    "ProductName": "Bodily Injury &amp; Property Damage",
                    "ProformaBillingPeriodAmount": null,
                    "CommissionAmount": null,
                    "ProductSpec": "Coverage",
                    "DYN__Last_Name": null,
                    "PricingTermCount": null,
                    "DYN__ContactRecordName": null,
                    "RoundedLineAmount": null,
                    "SalesTransactionAction": null,
                    "TransactionType": null,
                    "PricingTermUnit": null,
                    "BasisTransactionItem": null,
                    "PricingSource": null,
                    "StockKeepingUnit": null,
                    "DYN__Year": null,
                    "PartnerUnitPrice": null,
                    "ItemTotalAdjustmentAmount": null,
                    "ArePartialPeriodsAllowed": false,
                    "DYN__Bodily_Injury_Per_Person_Limit": 1000,
                    "DYN__Colour": null,
                    "FactorP": null,
                    "FactorO": null,
                    "CustomProductName": null,
                    "SalesTransactionItemParent": "ref_ed3d9643_12e4_4709_9f74_69c8292d65b4",
                    "Quantity": 1,
                    "ContractId": null,
                    "ItemGroupSummarySubtotal": null,
                    "DYN__AccountRecordName": null,
                    "DYN__E_Mail": null,
                    "DYN__First_Name": null,
                    "DYN__Bodily_Injury_Per_Accident_Limit": 1000,
                    "DYN__Driver_Accident_Points": null,
                    "SalesItemType": null,
                    "ItemPath": "01txx0000006i3DAAQ/01txx0000006i3UAAQ"
                  },
                  "salesTransactionItemRelationships": [
                    {
                      "fields": {
                        "ParentReference": "ref_681c203e_5491_4d5f_a296_02a0b3dfa181",
                        "AssociatedItem": "ref_681c203e_5491_4d5f_a296_02a0b3dfa181",
                        "MainItemRole": null,
                        "ProductRelatedComponent": "0dSxx000000000XEAQ",
                        "businessObjectType": "QuoteLineRelationship",
                        "AssociatedItemPricing": "IncludedInBundlePrice",
                        "ProductRelationshipType": "0yoxx0000000001AAA",
                        "RootItemProductCode": "autoSilver",
                        "IsPriceInclusive": true,
                        "RootItem": "ref_e112c127_367c_41c8_a5ce_1d7e69ac58bc",
                        "RootItemProductSellingModel": null,
                        "AssociatedQuantScaleMethod": null,
                        "MainItem": "ref_e112c127_367c_41c8_a5ce_1d7e69ac58bc",
                        "AssociatedItemRole": null,
                        "SalesTrnItemRelationshipParent": null,
                        "id": "ref_80623cb4_3abd_4ee0_876a_c5ca9ecc07fc",
                        "MainItemProduct": "01txx0000006i3DAAQ",
                        "MainItemProductSellingModel": null,
                        "RootItemProduct": "01txx0000006i3DAAQ"
                      }
                    }
                  ]
                }
              ],
              "salesTransactionItemAttributes": [],
              "salesTransactionItemRelatedObjects": [],
              "salesTransactionItemTaxes": [],
              "fields": {
                "LevelTwoBasePremium": null,
                "IntermediateVariableTwo": null,
                "Product": "01txx0000006i3DAAQ",
                "businessObjectType": "QuoteLineItem",
                "DYN__License_State": null,
                "RevenueCloudPackagingFlag": "C",
                "ValidationResult": null,
                "DYN__AssetRecordName": null,
                "PolicyPremium": 1485.84,
                "PeriodBoundaryStartMonth": null,
                "SalesTransactionSourceAsset": null,
                "ProratedQLITaxAmount": 0,
                "id": "ref_e112c127_367c_41c8_a5ce_1d7e69ac58bc",
                "DYN__Age": null,
                "DYN__Property_Damage_Per_Accident_Limit": null,
                "DYN__Deductible": null,
                "STICurrencyIsoCode__std": null,
                "IntermediateVariableOne": null,
                "BillingFrequency": null,
                "DYN__State": null,
                "DYN__DOB": null,
                "ProductCode": "autoSilver",
                "DerivedPricingAttribute": false,
                "ItemPath": "01txx0000006i3DAAQ"
              },
              "salesTransactionItemRelationships": []
            }
          ],
          "fields": {
            "Account": null,
            "BillingCity": null,
            "businessObjectType": "Quote",
            "SalesTransactionName": null,
            "StatusCode": null,
            "ProratedAmount": 1485.84,
            "StartDate": "2025-11-04",
            "CurrencyIsoCode__std": null,
            "BillingPostalCode": null,
            "id": "ref_ed3d9643_12e4_4709_9f74_69c8292d65b4",
            "BillingState": null,
            "CensusRatingType__std": null,
            "TransactionType": "AutoTransactionType",
            "UserProfile": "System Administrator",
            "QuoteAccount": null,
            "TotalProratedAmount": 1485.84,
            "CensusType__std": null,
            "GroupCensus": null,
            "SalesTransactionType": null,
            "Pricebook": null,
            "Opportunity": null,
            "ShippingCountry": null,
            "ShippingCity": null,
            "StandardAmount": 1485.84,
            "ProratedTaxAmount": 0,
            "RatingDate": null,
            "SalesTransactionSource": "ref_ed3d9643_12e4_4709_9f74_69c8292d65b4",
            "EffectiveDate": "2025-11-04T00:00:00.000Z",
            "TotalStandardAmount": 1485.84
          },
          "appUsageAssignments": []
        }
      }
    },
    "sortOrder": -1,
    "version": 1
  }
]
```
