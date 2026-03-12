---
title: "Promotion Configuration Output"
domain: loyalty
topic: promotion-configuration-output
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:51.572Z
estimatedTokens: 214
keywords: [Promotion, Configuration, Output, representation, promotion’s]
---

# Promotion Configuration Output

> Output representation of the promotion’s details and its configuration.

# Promotion Configuration Output

Output representation of the promotion’s details and its configuration.

JSON Example

```

```

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| apiExecutedDateTime | String | The date and time on which the API was executed. | Small, 61.0 | 61.0 |
| promotionDetails | Unified Promotions Output[] | The details of the promotion. | Small, 61.0 | 61.0 |
| promotionLastModifiedDateTime | String | The date and time on which the promotion was last modified. | Small, 61.0 | 61.0 |
| promotionRuleList | Promotion Rule[] | The rules of the promotion. The rules are represented as context rules in the response. | Small, 61.0 | 61.0 |
| relatedRuleLibrary | Rule Library[] | The rule library that's associated with the promotion. | Small, 61.0 | 61.0 |

## Code Examples

```
{
    "apiExecutedDateTime": "2024-05-29T09:02:38.809Z",
    "promotionDetails": {
        "additionalFieldValues": {
            "attributes": {}
        },
        "displayName": "Tea Time",
        "endDateTime": "2024-07-31T08:58:00.000Z",
        "name": "Tea Time",
        "priorityNumber": 1,
        "promotionCode": "TEATIME",
        "promotionLimits": {},
        "startDateTime": "2024-05-01T08:58:00.000Z"
    },
    "promotionLastModifiedDateTime": "2024-05-29T09:01:51.000Z",
    "promotionRuleList": [
        {
            "apiName": "Eligibility_Rule_Unified_Promotions_0c8xx000000034L",
            "isEligibilityRule": true,
            "name": "Eligibility_Rule_Unified_Promotions_0c8xx000000034L_v1",
            "ruleActionList": [],
            "ruleFilterCriteriaList": [
                {
                    "conditionLogic": "1",
                    "name": "FilterCriteria1",
                    "ruleActionList": [],
                    "ruleConditionList": [
                        {
                            "operator": "Equals",
                            "parameterName": "CurrencyISOCode",
                            "sequenceNumber": 1,
                            "valueList": [
                                "USD"
                            ],
                            "valueType": "Literal"
                        }
                    ],
                    "sequenceNumber": 1,
                    "type": "Exists"
                },
                {
                    "conditionLogic": "1 AND 2",
                    "name": "FilterCriteria2",
                    "parentFilterCriteria": "FilterCriteria1",
                    "ruleActionList": [],
                    "ruleConditionList": [
                        {
                            "operator": "GreaterThanOrEquals",
                            "parameterName": "ActivityStartDateTime",
                            "sequenceNumber": 1,
                            "valueList": [
                                "2024-05-01 08:58:00"
                            ],
                            "valueType": "Literal"
                        },
                        {
                            "operator": "LessThanOrEquals",
                            "parameterName": "ActivityStartDateTime",
                            "sequenceNumber": 2,
                            "valueList": [
                                "2024-07-31 08:58:00"
                            ],
                            "valueType": "Literal"
                        }
                    ],
                    "sequenceNumber": 2,
                    "type": "Exists"
                },
                {
                    "conditionLogic": "1 AND 2",
                    "name": "FilterCriteria3",
                    "parentFilterCriteria": "FilterCriteria2",
                    "ruleActionList": [],
                    "ruleConditionList": [
                        {
                            "operator": "Equals",
                            "parameterName": "ProductCatalog",
                            "sequenceNumber": 1,
                            "valueList": [
                                "Beverages"
                            ],
                            "valueType": "Literal"
                        },
                        {
                            "operator": "In",
                            "parameterName": "EligibleCartLineProduct",
                            "sequenceNumber": 2,
                            "valueList": [
                                "Tea"
                            ],
                            "valueType": "Literal"
                        }
                    ],
                    "sequenceNumber": 3,
                    "type": "Exists"
                }
            ],
            "ruleParameterList": [
                {
                    "contextTag": "cartLineProductCatalogId",
                    "dataType": "Text",
                    "decimalPlaces": 0,
                    "hasContextTagMapping": true,
                    "isCollection": true,
                    "isInput": true,
                    "isOutput": false,
                    "name": "ProductCatalog",
                    "type": "Tag"
                },
                {
                    "contextTag": "activityStartDate",
                    "dataType": "DateTime",
                    "decimalPlaces": 0,
                    "hasContextTagMapping": true,
                    "isCollection": true,
                    "isInput": true,
                    "isOutput": false,
                    "name": "ActivityStartDateTime",
                    "type": "Tag"
                },
                {
                    "contextTag": "currencyISOCode",
                    "dataType": "Text",
                    "decimalPlaces": 0,
                    "hasContextTagMapping": true,
                    "isCollection": true,
                    "isInput": true,
                    "isOutput": false,
                    "name": "CurrencyISOCode",
                    "type": "Tag"
                },
                {
                    "contextTag": "cartLineProductId",
                    "dataType": "Text",
                    "decimalPlaces": 0,
                    "hasContextTagMapping": true,
                    "isCollection": true,
                    "isInput": true,
                    "isOutput": false,
                    "name": "EligibleCartLineProduct",
                    "type": "Tag"
                }
            ],
            "sequenceNumber": 2147483647
        },
        {
            "apiName": "DiscountTea10Unified_Promotions_0c8xx000000034L",
            "isEligibilityRule": false,
            "name": "DiscountTea10Unified_Promotions_0c8xx000000034L_v1",
            "ruleActionList": [],
            "ruleFilterCriteriaList": [
                {
                    "conditionLogic": "1",
                    "name": "FinalFilterCriteria",
                    "ruleActionList": [],
                    "ruleConditionList": [
                        {
                            "operator": "GreaterThanOrEquals",
                            "parameterName": "TransactionAmount",
                            "sequenceNumber": 1,
                            "valueList": [
                                "25.0"
                            ],
                            "valueType": "Literal"
                        }
                    ],
                    "sequenceNumber": 1,
                    "type": "Exists"
                },
                {
                    "conditionLogic": "1",
                    "name": "NonLoyaltyMemberCriteria",
                    "parentFilterCriteria": "BranchCriteria",
                    "ruleActionList": [
                        {
                            "actionType": "SetValue",
                            "name": "pricingReward1",
                            "ruleActionParameterList": [
                                {
                                    "name": "type",
                                    "sequenceNumber": 1,
                                    "value": "ProvideDiscount",
                                    "valueType": "Literal"
                                },
                                {
                                    "name": "discountLevel",
                                    "sequenceNumber": 2,
                                    "value": "Cart",
                                    "valueType": "Literal"
                                },
                                {
                                    "name": "discountValue",
                                    "sequenceNumber": 3,
                                    "value": "10.0",
                                    "valueType": "Literal"
                                },
                                {
                                    "name": "discountType",
                                    "sequenceNumber": 4,
                                    "value": "PercentageOff",
                                    "valueType": "Literal"
                                }
                            ],
                            "sequenceNumber": 1
                        }
                    ],
                    "ruleConditionList": [
                        {
                            "operator": "GreaterThanOrEquals",
                            "parameterName": "ActivityStartDateTime",
                            "sequenceNumber": 1,
                            "valueList": [
                                "1970-01-01 08:00:00"
                            ],
                            "valueType": "Literal"
                        }
                    ],
                    "sequenceNumber": 3,
                    "type": "Exists"
                },
                {
                    "name": "BranchCriteria",
                    "parentFilterCriteria": "FinalFilterCriteria",
                    "ruleActionList": [],
                    "ruleConditionList": [],
                    "sequenceNumber": 2,
                    "type": "Branch"
                }
            ],
            "ruleParameterList": [
                {
                    "contextTag": "transactionAmount",
                    "dataType": "Currency",
                    "decimalPlaces": 0,
                    "hasContextTagMapping": true,
                    "isCollection": true,
                    "isInput": true,
                    "isOutput": false,
                    "name": "TransactionAmount",
                    "type": "Tag"
                },
                {
                    "dataType": "Text",
                    "decimalPlaces": 0,
                    "hasContextTagMapping": false,
                    "isCollection": false,
                    "isInput": false,
                    "isOutput": true,
                    "name": "discountLevel",
                    "type": "Variable"
                },
                {
                    "dataType": "Text",
                    "decimalPlaces": 0,
                    "hasContextTagMapping": false,
                    "isCollection": false,
                    "isInput": false,
                    "isOutput": true,
                    "name": "discountType",
                    "type": "Variable"
                },
                {
                    "contextTag": "activityStartDate",
                    "dataType": "DateTime",
                    "decimalPlaces": 0,
                    "hasContextTagMapping": true,
                    "isCollection": true,
                    "isInput": true,
                    "isOutput": false,
                    "name": "ActivityStartDateTime",
                    "type": "Tag"
                },
                {
                    "dataType": "Text",
                    "decimalPlaces": 0,
                    "hasContextTagMapping": false,
                    "isCollection": false,
                    "isInput": false,
                    "isOutput": true,
                    "name": "type",
                    "type": "Variable"
                },
                {
                    "dataType": "Numeric",
                    "decimalPlaces": 0,
                    "hasContextTagMapping": false,
                    "isCollection": false,
                    "isInput": false,
                    "isOutput": true,
                    "name": "discountValue",
                    "type": "Variable"
                }
            ],
            "sequenceNumber": 1
        },
        {
            "apiName": "TeaAndCoffeeDiscount10Unified_Promotions_0c8xx000000034L",
            "isEligibilityRule": false,
            "name": "TeaAndCoffeeDiscount10Unified_Promotions_0c8xx000000034L_v1",
            "ruleActionList": [],
            "ruleFilterCriteriaList": [
                {
                    "conditionLogic": "1",
                    "name": "NonLoyaltyMemberCriteria",
                    "parentFilterCriteria": "BranchCriteria",
                    "ruleActionList": [
                        {
                            "actionType": "SetValue",
                            "name": "pricingLineLevelReward1",
                            "ruleActionParameterList": [
                                {
                                    "name": "type",
                                    "sequenceNumber": 1,
                                    "value": "ProvideDiscount",
                                    "valueType": "Literal"
                                },
                                {
                                    "name": "discountType",
                                    "sequenceNumber": 2,
                                    "value": "PercentageOff",
                                    "valueType": "Literal"
                                },
                                {
                                    "name": "discountLevel",
                                    "sequenceNumber": 3,
                                    "value": "Line",
                                    "valueType": "Literal"
                                },
                                {
                                    "name": "discountValue",
                                    "sequenceNumber": 4,
                                    "value": "10.0",
                                    "valueType": "Literal"
                                },
                                {
                                    "name": "discountProduct",
                                    "sequenceNumber": 5,
                                    "value": "Tea",
                                    "valueType": "Literal"
                                },
                                {
                                    "name": "discountProductId",
                                    "sequenceNumber": 6,
                                    "value": "Tea",
                                    "valueType": "Literal"
                                },
                                {
                                    "name": "discountAppliedAt",
                                    "sequenceNumber": 7,
                                    "value": "LineItem",
                                    "valueType": "Literal"
                                }
                            ],
                            "sequenceNumber": 1
                        },
                        {
                            "actionType": "SetValue",
                            "name": "pricingLineLevelReward2",
                            "ruleActionParameterList": [
                                {
                                    "name": "type",
                                    "sequenceNumber": 1,
                                    "value": "ProvideDiscount",
                                    "valueType": "Literal"
                                },
                                {
                                    "name": "discountType",
                                    "sequenceNumber": 2,
                                    "value": "PercentageOff",
                                    "valueType": "Literal"
                                },
                                {
                                    "name": "discountLevel",
                                    "sequenceNumber": 3,
                                    "value": "Line",
                                    "valueType": "Literal"
                                },
                                {
                                    "name": "discountValue",
                                    "sequenceNumber": 4,
                                    "value": "10.0",
                                    "valueType": "Literal"
                                },
                                {
                                    "name": "discountProduct",
                                    "sequenceNumber": 5,
                                    "value": "Coffee",
                                    "valueType": "Literal"
                                },
                                {
                                    "name": "discountProductId",
                                    "sequenceNumber": 6,
                                    "value": "Coffee",
                                    "valueType": "Literal"
                                },
                                {
                                    "name": "discountAppliedAt",
                                    "sequenceNumber": 7,
                                    "value": "LineItem",
                                    "valueType": "Literal"
                                }
                            ],
                            "sequenceNumber": 2
                        }
                    ],
                    "ruleConditionList": [
                        {
                            "operator": "GreaterThanOrEquals",
                            "parameterName": "ActivityStartDateTime",
                            "sequenceNumber": 1,
                            "valueList": [
                                "1970-01-01 08:00:00"
                            ],
                            "valueType": "Literal"
                        }
                    ],
                    "sequenceNumber": 4,
                    "type": "Exists"
                },
                {
                    "conditionLogic": "1",
                    "name": "ProductFilter1",
                    "ruleActionList": [],
                    "ruleConditionList": [
                        {
                            "operator": "In",
                            "parameterName": "CartLineProduct",
                            "sequenceNumber": 1,
                            "valueList": [
                                "Tea"
                            ],
                            "valueType": "Literal"
                        }
                    ],
                    "sequenceNumber": 1,
                    "type": "Loop"
                },
                {
                    "name": "BranchCriteria",
                    "parentFilterCriteria": "FinalFilterCriteria",
                    "ruleActionList": [],
                    "ruleConditionList": [],
                    "sequenceNumber": 3,
                    "type": "Branch"
                },
                {
                    "conditionLogic": "1",
                    "name": "FinalFilterCriteria",
                    "ruleActionList": [],
                    "ruleConditionList": [
                        {
                            "matchType": "Any",
                            "operator": "GreaterThanOrEquals",
                            "parameterName": "FilterProducts1",
                            "sequenceNumber": 1,
                            "valueList": [
                                "6.0"
                            ],
                            "valueType": "Literal"
                        }
                    ],
                    "sequenceNumber": 2,
                    "type": "Exists"
                }
            ],
            "ruleParameterList": [
                {
                    "dataType": "Text",
                    "decimalPlaces": 0,
                    "hasContextTagMapping": false,
                    "isCollection": false,
                    "isInput": false,
                    "isOutput": true,
                    "name": "discountLevel",
                    "type": "Variable"
                },
                {
                    "dataType": "Text",
                    "decimalPlaces": 0,
                    "hasContextTagMapping": false,
                    "isCollection": false,
                    "isInput": false,
                    "isOutput": true,
                    "name": "discountProduct",
                    "type": "Variable"
                },
                {
                    "dataType": "Text",
                    "decimalPlaces": 0,
                    "hasContextTagMapping": false,
                    "isCollection": false,
                    "isInput": false,
                    "isOutput": true,
                    "name": "discountProductId",
                    "type": "Variable"
                },
                {
                    "dataType": "Text",
                    "decimalPlaces": 0,
                    "hasContextTagMapping": false,
                    "isCollection": false,
                    "isInput": false,
                    "isOutput": true,
                    "name": "discountType",
                    "type": "Variable"
                },
                {
                    "contextTag": "activityStartDate",
                    "dataType": "DateTime",
                    "decimalPlaces": 0,
                    "hasContextTagMapping": true,
                    "isCollection": true,
                    "isInput": true,
                    "isOutput": false,
                    "name": "ActivityStartDateTime",
                    "type": "Tag"
                },
                {
                    "contextTag": "cartLineProductId",
                    "dataType": "Text",
                    "decimalPlaces": 0,
                    "hasContextTagMapping": true,
                    "isCollection": true,
                    "isInput": true,
                    "isOutput": false,
                    "name": "CartLineProduct",
                    "type": "Tag"
                },
                {
                    "dataType": "Text",
                    "decimalPlaces": 0,
                    "hasContextTagMapping": false,
                    "isCollection": false,
                    "isInput": false,
                    "isOutput": true,
                    "name": "type",
                    "type": "Variable"
                },
                {
                    "dataType": "Numeric",
                    "decimalPlaces": 0,
                    "hasContextTagMapping": false,
                    "isCollection": false,
                    "isInput": false,
                    "isOutput": true,
                    "name": "discountValue",
                    "type": "Variable"
                },
                {
                    "aggregateFunction": "Sum",
                    "dataType": "Tuple",
                    "decimalPlaces": 0,
                    "groupByContextTag": "cartLineProductId",
                    "hasContextTagMapping": true,
                    "isCollection": true,
                    "isInput": true,
                    "isOutput": true,
                    "name": "FilterProducts1",
                    "relatedFilterCriteriaName": "ProductFilter1",
                    "type": "Accumulate",
                    "value": "cartLineItemQuantity"
                },
                {
                    "dataType": "Text",
                    "decimalPlaces": 0,
                    "hasContextTagMapping": false,
                    "isCollection": false,
                    "isInput": false,
                    "isOutput": true,
                    "name": "discountAppliedAt",
                    "type": "Variable"
                }
            ],
            "sequenceNumber": 2
        }
    ],
    "relatedRuleLibrary": {
        "apiName": "GPMRuleLibrary",
        "description": "GPMRuleLibrary",
        "name": "GPMRuleLibrary_v1",
        "relatedContextDefinitionDeveloperName": "GPMContext"
    }
}
```

## Related Topics

- Unified Promotions Output (atlas.en-us.loyalty.meta/loyalty/connect_responses_unified_promotions_output.htm)
- Promotion Rule (atlas.en-us.loyalty.meta/loyalty/connect_responses_promotion_rule.htm)
- Rule Library (atlas.en-us.loyalty.meta/loyalty/connect_responses_rule_library.htm)
