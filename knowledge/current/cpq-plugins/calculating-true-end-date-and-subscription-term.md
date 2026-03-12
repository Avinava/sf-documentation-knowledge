---
title: "Calculating True End Date and Subscription Term"
domain: cpq-plugins
topic: calculating-true-end-date-and-subscription-term
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:23.944Z
estimatedTokens: 261
keywords: [Calculating, End, Date, Subscription, Term, JavaScript, Quote, Line, Calculator, plugin, calculates, stores, maximum, custom, Effective, sample, script, calculate, store]
---

# Calculating True End Date and Subscription Term

> The sample JavaScript script can be used in the Quote Line Calculator to calculate
        values and store maximum values for the custom quote line fields True Effective End Date and
        True Effective Term.

# Calculating True End Date and Subscription Term

The sample JavaScript script can be used in the Quote Line Calculator to calculate values and store maximum values for the custom quote line fields True Effective End Date and True Effective Term.

| Available in: Salesforce CPQ Winter ’16 and later |
| --- |


![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=cpq_plugins)

#### Note

Salesforce CPQ no longer provides support for Legacy Quote Calculator plugins. Check out the [Javascript Quote Calculator Plugin](atlas.en-us.cpq_plugins.meta/cpq_plugins/cpq_dev_jsqcp_parent.htm "Add extra functionality to the quote line editor in Salesforce CPQ with custom JavaScript code. Seven available methods allow you to change how calculations are performed and manage page-level security such as field visibility.") for support and improved features.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=cpq_plugins)

#### Note

The sample script assumes the Salesforce admin created custom fields True Effective End Date and True Effective Term on the Quote Line object.

## Example

```

```

## Code Examples

```
export function onAfterCalculate(quote, lineModels) {

    var maxEffectiveEndDate = null;
    var maxEffectiveTerm = 0;
    if (lineModels != null) {
        lineModels.forEach(function (line) {
            var trueEndDate = calculateEndDate(quote, line);
            var trueTerm = getEffectiveSubscriptionTerm(quote, line);
            if (maxEffectiveEndDate == null || (maxEffectiveEndDate < trueEndDate)) {
                maxEffectiveEndDate = trueEndDate;
            }
            if (maxEffectiveTerm < trueTerm) {
                maxEffectiveTerm = trueTerm;
            }
            line.record["True_Effective_End_Date__c"] = toApexDate(trueEndDate);
            line.record["True_Effective_Term__c"] = trueTerm;
        });
        quote.record["True_Effective_End_Date__c"] = toApexDate(maxEffectiveEndDate);
        quote.record["True_Effective_Term__c"] = maxEffectiveTerm;
    }
    return Promise.resolve()
}

function calculateEndDate(quote, line) {
    var sd = new Date(line.record["SBQQ__EffectiveStartDate__c"]);
    var ed = new Date(line.record["SBQQ__EffectiveEndDate__c"]);
    if (sd != null && ed != null ) {
        ed = sd;
        ed.setUTCMonth(ed.getUTCMonth() + getEffectiveSubscriptionTerm(quote, line));
        ed.setUTCDate(ed.getUTCDate() - 1);
    }
    return ed;
}

function getEffectiveSubscriptionTerm(quote, line) {
   if (line.record["SBQQ__EffectiveStartDate__c"] != null){
        var sd = new Date(line.record["SBQQ__EffectiveStartDate__c"]);
   }
    if (line.record["SBQQ__EffectiveEndDate__c"] != null){
       var ed = new Date(line.record["SBQQ__EffectiveEndDate__c"]);
   }
    if (sd != null && ed != null ) {
        ed.setUTCDate(ed.getUTCDate() + 1);
        return monthsBetween(sd, ed);
    } else if (line.SubscriptionTerm__c != null) {
        return line.SubscriptionTerm__c;
    } else if (quote.SubscriptionTerm__c != null) {
        return quote.SubscriptionTerm__c;
    } else {
        return line.DefaultSubscriptionTerm__c;
    }
}

/**
 * Takes a JS Date object and turns it into a string of the type 'YYYY-MM-DD', which is what Apex is expecting.
 * @param {Date} date The date to be stringified
 * @returns {string}
 */
function toApexDate(/*Date*/ date) {
    if (date == null) {
        return null;
    }
    // Get the ISO formatted date string.
    // This will be formatted: YYYY-MM-DDTHH:mm:ss.sssZ
    var dateIso = date.toISOString();

    // Replace everything after the T with an empty string
    return dateIso.replace(new RegExp('[Tt].*'), "");
}

function monthsBetween(/*Date*/ startDate, /*Date*/ endDate) {
    if(startDate != null && endDate != null ){
    // If the start date is actually after the end date, reverse the arguments and multiply the result by -1
    if (startDate  > endDate) {
        return -1 * this.monthsBetween(endDate, startDate);
    }
    var result = 0;
    // Add the difference in years * 12
    result += ((endDate.getUTCFullYear() - startDate.getUTCFullYear()) * 12);
    // Add the difference in months. Note: If startDate was later in the year than endDate, this value will be
    // subtracted.
    result += (endDate.getUTCMonth() - startDate.getUTCMonth());
    return result;
    }
    return 0;
}
```

```apex
global class QCPWinter16Legacy2 implements SBQQ.QuoteCalculatorPlugin, SBQQ.QuoteCalculatorPlugin2 {

/* This QCP examples calculates and stores the effective end date on each quote line, as well as the effective term.
   It also stores the max(effective end date) and max(effective term) on the Quote object
*/


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
            String.valueOf(SBQQ__QuoteLine__c.True_Effective_End_Date__c),
            String.valueOf(SBQQ__QuoteLine__c.True_Effective_Term__c),
            
            String.valueOf(SBQQ__Quote__c.True_Effective_End_Date__c),
            String.valueOf(SBQQ__Quote__c.True_Effective_Term__c),
            
            String.valueOf(SBQQ__QuoteLine__c.SBQQ__EffectiveStartDate__c),
            String.valueOf(SBQQ__QuoteLine__c.SBQQ__EffectiveEndDate__c),
            String.valueOf(SBQQ__QuoteLine__c.SBQQ__SubscriptionTerm__c),
            String.valueOf(SBQQ__QuoteLine__c.SBQQ__DefaultSubscriptionTerm__c),
            
            String.valueOf(SBQQ__Quote__c.SBQQ__SubscriptionTerm__c)
        };
    }

    global void onBeforePriceRules(SObject quote, SObject[] lines) {
    }
    
    global void onAfterPriceRules(SObject quote, SObject[] lines) {
    }
    
    global void onBeforeCalculate(SObject quote, SObject[] lines) {
    }
    
    global void onAfterCalculate(SObject quote, SObject[] lines) {
        Date maxEffectiveEndDate = null;
        Decimal maxEffectiveTerm = 0;
        for(SObject line : lines) {
            Date trueEndDate = calculateEndDate(quote, line);
            Decimal trueTerm = getEffectiveSubscriptionTerm(quote, line);
            if(maxEffectiveEndDate == null || maxEffectiveEndDate < trueEndDate) {
                maxEffectiveEndDate = trueEndDate;
            }
            if(maxEffectiveTerm < trueTerm) {
                maxEffectiveTerm = trueTerm;
            }
            line.put(SBQQ__QuoteLine__c.True_Effective_End_Date__c, trueEndDate);
            line.put(SBQQ__QuoteLine__c.True_Effective_Term__c, trueTerm);
        }
        quote.put(SBQQ__Quote__c.True_Effective_End_Date__c, maxEffectiveEndDate);
        quote.put(SBQQ__Quote__c.True_Effective_Term__c, maxEffectiveTerm);
    }
    
    global void onInit(SObject[] lines) {
    }
    
    private Date calculateEndDate(SObject quote, SObject line) {
        Date startDate = (Date)line.get(String.valueOf(SBQQ__QuoteLine__c.SBQQ__EffectiveStartDate__c));
        Date endDate = (Date)line.get(String.valueOf(SBQQ__QuoteLine__c.SBQQ__EffectiveEndDate__c));
        if ((startDate != null) && (endDate == null)) {
            /* Note: we are assuming that Subscription Term Unit is Month in the package settings */
            endDate = startDate.addMonths(getEffectiveSubscriptionTerm(quote, line).intValue()).addDays(-1);
            /* Note: we are assuming that Subscription Term Unit is Day in the package settings */
//          endDate = startDate.addDays(getEffectiveSubscriptionTerm(line).intValue() - 1);
        }
        return endDate;
    }
    
    private Decimal getEffectiveSubscriptionTerm(SObject quote, SObject line) {
        Decimal lineTerm = null;
        Date startDate = (Date)line.get(String.valueOf(SBQQ__QuoteLine__c.SBQQ__EffectiveStartDate__c));
        Date endDate = (Date)line.get(String.valueOf(SBQQ__QuoteLine__c.SBQQ__EffectiveEndDate__c));
        if ((startDate != null) && (endDate != null)) {
            /* Note: we are assuming that Subscription Term Unit is Month in the package settings */
            lineTerm = startDate.monthsBetween(endDate.addDays(1));
            /* Note: we are assuming that Subscription Term Unit is Day in the package settings */
//            lineTerm = startDate.daysBetween(endDate.addDays(1));
        } else {
            lineTerm = (Decimal)line.get(String.valueOf(SBQQ__QuoteLine__c.SBQQ__SubscriptionTerm__c));
            if (lineTerm == null) {
                lineterm = (Decimal)quote.get(String.valueOf(SBQQ__Quote__c.SBQQ__SubscriptionTerm__c));
                if (lineTerm == null) {
                    return (Decimal)line.get(String.valueOf(SBQQ__QuoteLine__c.SBQQ__DefaultSubscriptionTerm__c));
                }
            }
        }
        return lineTerm;
    }
    
}
```

## Related Topics

- Javascript Quote Calculator Plugin (atlas.en-us.cpq_plugins.meta/cpq_plugins/cpq_dev_jsqcp_parent.htm)
