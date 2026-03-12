---
title: "Custom Package Total Calculation"
domain: cpq-dev-api
topic: custom-package-total-calculation
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:23.762Z
estimatedTokens: 166
keywords: [Custom, Package, Total, Calculation, sample, JavaScript, script, Quote, Line, Calculator, calculate, price, components, store, Apex, calculates, quote, line, stores]
---

# Custom Package Total Calculation

> The sample Apex class calculates the total price for all components in a quote line
        and then stores that value in a custom field.

# Custom Package Total Calculation

The sample Apex class calculates the total price for all components in a quote line and then stores that value in a custom field.

| Available in: Salesforce CPQ Winter ’16 and later |
| --- |


![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=cpq_dev_api)

#### Note

Salesforce CPQ no longer provides support for Legacy Quote Calculator plugins. Check out the [Javascript Quote Calculator Plugin](atlas.en-us.cpq_dev_api.meta/cpq_dev_api/cpq_dev_jsqcp_parent.htm "Add extra functionality to the quote line editor in Salesforce CPQ with custom JavaScript code. Seven available methods allow you to change how calculations are performed and manage page-level security such as field visibility.") for support and improved features.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=cpq_dev_api)

#### Note

The sample script assumes the Salesforce admin created a custom field Component Custom Total on the Quote Line object.

## Example

```

```

## Code Examples

```
export function onInit(lines) {
    if (lines != null) {
        lines.forEach(function (line) {
            line.record["Component_Custom_Total__c"] = 0;
        });
    }
};

export function onAfterCalculate(quoteModel, quoteLines) {
    if (quoteLines != null) {
        quoteLines.forEach(function (line) {
            var parent = line.parentItem;
            if (parent != null) {
                var pComponentCustomTotal = parent.record["Component_Custom_Total__c"] || 0;
                var cListPrice = line.ProratedListPrice__c || 0;
                var cQuantity = line.Quantity__c == null ? 1 : line.Quantity__c;
                var cPriorQuantity = line.PriorQuantity__c || 0;
                var cPricingMethod = line.PricingMethod__c == null ? "List" : line.PricingMethod__c;
                var cDiscountScheduleType = line.DiscountScheduleType__c || '';
                var cRenewal = line.Renewal__c || false;
                var cExisting = line.Existing__c || false;
                var cSubscriptionPricing = line.SubscriptionPricing__c || '';

                var cTotalPrice = getTotal(cListPrice, cQuantity, cPriorQuantity, cPricingMethod, cDiscountScheduleType, cRenewal, cExisting, cSubscriptionPricing, cListPrice);
                pComponentCustomTotal += cTotalPrice;

                parent.record["Component_Custom_Total__c"] = pComponentCustomTotal;
            }
        });
    }
};

function getTotal(price, qty, priorQty, pMethod, dsType, isRen, isExist, subPricing, listPrice) {
    if ((isRen === true) && (isExist === false) && (priorQty == null)) {
        // Personal note: In onAfterCalculate, we specifically make sure that priorQuantity can't be null.
        // So isn't this loop pointless?
        return 0;
    } else {
        return price * getEffectiveQuantity(qty, priorQty, pMethod, dsType, isRen, isExist, subPricing, listPrice);
    }
}

function getEffectiveQuantity(qty, priorQty, pMethod, dsType, isRen, exists, subPricing, listPrice) {
    var delta = qty - priorQty;

    if (pMethod == 'Block' && delta == 0) {
        return 0;
    } else if (pMethod == 'Block') {
        return 1;
    } else if (dsType == 'Slab' && (delta == 0 || (qty == 0 && isRen == true))) {
        return 0;
    } else if (dsType == 'Slab') {
        return 1;
    } else if (exists == true && subPricing == '' && delta < 0) {
        return 0;
    } else if (exists == true && subPricing == 'Percent Of Total' && listPrice != 0 && delta >= 0) {
        return qty;
    } else if (exists == true) {
        return delta;
    } else {
        return qty;
    }
}
```

```apex
global class QCPWinter16Legacy implements SBQQ.QuoteCalculatorPlugin, SBQQ.QuoteCalculatorPlugin2 {

    /* NOTE: the getReferencedFields method is no longer required if you use the ReferencedFields field set on
 the Quote Line object. 
             This field set must be created as it's not a managed one.
       NOTE: if you need to access Quote fields, you can create the ReferencedFields field set on the Quote object as well.
       NOTE: if you do not use the getReferencedFields method, you can remove SBQQ.QuoteCalculatorPlugin2 from the class declaration.
    */
    global Set<String> getReferencedFields() {
        return new Set<String>{
            /* Note: add fields using the following format - Only add fields referenced
                               
               by the plugin and not in the Line Editor field set on the Quote Line object
            String.valueOf(SBQQ__QuoteLine__c.My_Field_API_Name__c)
            */
            String.valueOf(SBQQ__QuoteLine__c.Component_Custom_Total__c),
            
            String.valueOf(SBQQ__QuoteLine__c.SBQQ__ProratedListPrice__c),
            String.valueOf(SBQQ__QuoteLine__c.SBQQ__PriorQuantity__c),
            String.valueOf(SBQQ__QuoteLine__c.SBQQ__PricingMethod__c),
            String.valueOf(SBQQ__QuoteLine__c.SBQQ__DiscountScheduleType__c),
            String.valueOf(SBQQ__QuoteLine__c.SBQQ__Renewal__c),
            String.valueOf(SBQQ__QuoteLine__c.SBQQ__Existing__c),
            String.valueOf(SBQQ__QuoteLine__c.SBQQ__SubscriptionPricing__c)
        };
    }

    global void onBeforePriceRules(SObject quote, SObject[] lines) {
    }
    
    global void onAfterPriceRules(SObject quote, SObject[] lines) {
    }
    
    global void onBeforeCalculate(SObject quote, SObject[] lines) {
    }
    
    global void onAfterCalculate(SObject quote, SObject[] lines) {
        for(SObject line : lines) {
            SObject parent = line.getSObject(SBQQ__QuoteLine__c.SBQQ__RequiredBy__c.getDescribe().getRelationshipName());
            if(parent != null) {
              Decimal pComponentCustomTotal = (Decimal)parent.get(String.valueOf(SBQQ__QuoteLine__c.Component_Custom_Total__c));
              
              Decimal cListPrice = (Decimal)line.get(String.valueOf(SBQQ__QuoteLine__c.SBQQ__ProratedListPrice__c));
              Decimal cQuantity = (Decimal)line.get(String.valueOf(SBQQ__QuoteLine__c.SBQQ__Quantity__c));
              Decimal cPriorQuantity = (Decimal)line.get(String.valueOf(SBQQ__QuoteLine__c.SBQQ__PriorQuantity__c));
              String cPricingMethod = (String)line.get(String.valueOf(SBQQ__QuoteLine__c.SBQQ__PricingMethod__c));
              String cDiscountScheduleType = (String)line.get(String.valueOf(SBQQ__QuoteLine__c.SBQQ__DiscountScheduleType__c));
              Boolean cRenewal = (Boolean)line.get(String.valueOf(SBQQ__QuoteLine__c.SBQQ__Renewal__c));
              Boolean cExisting = (Boolean)line.get(String.valueOf(SBQQ__QuoteLine__c.SBQQ__Existing__c));
              String cSubscriptionPricing = (String)line.get(String.valueOf(SBQQ__QuoteLine__c.SBQQ__SubscriptionPricing__c));
              
              pComponentCustomTotal = (pComponentCustomTotal == null) ? 0 : pComponentCustomTotal;
              
              cListPrice = (cListPrice == null) ? 0 : cListPrice;
              cQuantity = (cQuantity == null) ? 1 : cQuantity;
              cPriorQuantity = (cPriorQuantity == null) ? 0 : cPriorQuantity;
              cPricingMethod = (cPricingMethod == null) ? 'List' : cPricingMethod;
              cDiscountSCheduleType = (cDiscountSCheduleType == null) ? '' : cDiscountSCheduleType;
              cRenewal = (cRenewal == null) ? false : cRenewal;
              cExisting = (cExisting == null) ? false : cExisting;
              cSubscriptionPricing = (cSubscriptionPricing == null) ? '' : cSubscriptionPricing;
              
              Decimal cTotalPrice = getTotal(cListPrice, cQuantity, cPriorQuantity, cPricingMethod, cDiscountScheduleType, cRenewal, cExisting, cSubscriptionPricing, cListPrice);
              pComponentCustomTotal += cTotalPrice;
              
              parent.put(SBQQ__QuoteLine__c.Component_Custom_Total__c, pComponentCustomTotal);
              
            }
        }
    }
    
    global void onInit(SObject[] lines) {
        for(SObject line : lines) {
            line.put(SBQQ__QuoteLine__c.Component_Custom_Total__c, 0);
        }
    }
    
    private Decimal getTotal(Decimal price, Decimal quantity, Decimal priorQuantity, String pricingMethod, String discountScheduleType, Boolean renewal, Boolean existing, String subscriptionPricing, Decimal ListPrice) {
        price = (price == null) ? 0 : price;
        renewal = (renewal == null) ? false : renewal;
        existing = (existing == null) ? false : existing;
        
        if(renewal == true && existing == false && priorQuantity == null) {
            return 0;
        } else {
            return price * getEffectiveQuantity(quantity, priorQuantity, pricingMethod, discountScheduleType, renewal, existing, subscriptionPricing, listPrice);
        }
        
    }
    
    private Decimal getEffectiveQuantity(Decimal quantity, Decimal priorQuantity, String pricingMethod, String discountScheduleType, Boolean renewal, Boolean existing, String subscriptionPricing, Decimal ListPrice) {
        Decimal result = 0;
        Decimal deltaQuantity = 0;
        
        quantity = (quantity == null) ? 0 : quantity;
        priorQuantity = (priorQuantity == null) ? 0 : priorQuantity;
        pricingMethod = (pricingMethod == null) ? '' : pricingMethod;
        discountScheduleType = (discountScheduleType == null) ? '' : discountScheduleType;
        subscriptionPricing = (subscriptionPricing == null) ? '' : subscriptionPricing;
        renewal = (renewal == null) ? false : renewal;
        existing = (existing == null) ? false : existing;
        listPrice = (listPrice == null) ? 0 : listPrice;
        
        deltaQuantity = quantity - priorQuantity;
        
        if(pricingMethod == 'Block' && deltaQuantity == 0) {
            result = 0;
        } else {
            if(pricingMethod == 'Block') {
                result = 1;
            } else {
                if(discountScheduleType == 'Slab' && (deltaQuantity == 0 || (quantity == 0 && renewal == true))) {
                    result = 0;
                } else {
                    if(discountScheduleType == 'Slab') {
                        result = 1;
                    } else {
                        if(existing == true && subscriptionPricing == '' && deltaQuantity < 0) {
                            result = 0;
                        } else {
                            if(existing == true && subscriptionPricing == 'Percent Of Total' && listPrice != 0 && deltaQuantity >= 0) {
                                result = quantity;
                            } else {
                                if(existing == true) {
                                    result = deltaQuantity;
                                } else {
                                    result = quantity;
                                }
                            }
                        }
                    }
                }
            }
        }
        
        return result;
    }
    
}
```

## Related Topics

- Javascript Quote Calculator Plugin (atlas.en-us.cpq_dev_api.meta/cpq_dev_api/cpq_dev_jsqcp_parent.htm)
