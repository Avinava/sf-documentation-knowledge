---
title: "Calling the Revenue Recognition Service with APEX Triggers"
domain: blng-dev
topic: calling-the-revenue-recognition-service-with-apex-triggers
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:08.070Z
estimatedTokens: 265
keywords: [Calling, Revenue, Recognition, Service, APEX, Triggers, call, custom, trigger]
---

# Calling the Revenue Recognition Service with APEX Triggers

> You can call the Revenue Recognition service with a custom APEX trigger.

# Calling the Revenue Recognition Service with APEX Triggers

You can call the Revenue Recognition service with a custom APEX trigger.

For a list of input and output parameters, see [Revenue Recognition Service Developer Guide](atlas.en-us.blng_dev.meta/blng_dev/apex_blng_RevenueRecognition_intro.htm "Salesforce Billing Revenue Recognition API lets you run revenue recognition for any Salesforce object in response to triggers, process builders, and REST API calls. The service uses Salesforce Billing revenue recognition rules, treatments, and distribution methods to create a revenue schedule and transaction hierarchy.").

## Example

In this example, we want to create a revenue schedule for an invoice line after its status changes to Posted. The org uses legal entities, so we included the legal entity in an input.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=blng_dev)

#### Important

Always review field validations and mapping to ensure you can trigger your process without any errors.

```

```

## Code Examples

```apex
//In this example, we want to create a revenue schedule for an invoice line after its status changes to Posted.
//The example uses the InvoiceLine object in the billing package, where the API name is blng__InvoiceLine__c.
//For your specific use case, replace blng__InvoiceLine__c with the desired API name object.

trigger GenerateRevenueOnInvoiceLineActivation on blng__InvoiceLine__c (before insert) {
   
    blng__InvoiceLine__c[] newInvoiceLine = Trigger.new;
    blng__InvoiceLine__c[] oldInvoiceLine = Trigger.old;
    
    blng.RevenueRecognitionInput[] inputs = new List<blng.RevenueRecognitionInput>();
    
    Integer i = 0;
    for (blng__InvoiceLine__c newInvoiceLine : newInvoiceLine) {
        if (newInvoiceLine.blng__InvoiceLineStatus__c != oldInvoiceLine[i].blng__InvoiceLineStatus__c && 
            newInvoiceLine.blng__InvoiceLineStatus__c == 'Posted') {
            blng.RevenueRecognitionInput input = new blng.RevenueRecognitionInput();
            input.source = newInvoiceLine.ID;
            input.sourceFieldName = 'InvoiceLine';
            input.revenueAmount = newInvoiceLine.blng__Balance__c;
            input.startDate = newInvoiceLine.blng__StartDate__c;
            input.endDate = (Date.today()).addMonths(2);
            input.revenueRecognitionRuleId = newInvoiceLine.blng__Product__r.blng__RevenueRecognitionRule__c;
            input.legalEntityId = newInvoiceLine.blng__LegalEntity__c;
            inputs.add(input);
        }
        i++;
    }
    
    if (inputs != null && inputs.size() > 0) {
        List<blng.RevenueRecognitionResponse> response = blng.RevenueRecognition.recognizeRevenue(inputs);
    }
 
}
```

## Related Topics

- Revenue Recognition Service Developer Guide (atlas.en-us.blng_dev.meta/blng_dev/apex_blng_RevenueRecognition_intro.htm)
