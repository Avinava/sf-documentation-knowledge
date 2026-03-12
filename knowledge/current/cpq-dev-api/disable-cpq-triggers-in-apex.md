---
title: "Disable CPQ Triggers in Apex"
domain: cpq-dev-api
topic: disable-cpq-triggers-in-apex
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:23.649Z
estimatedTokens: 343
keywords: [Disable, CPQ, Triggers, Apex, manually, Salesforce, Billing, application, logic, records, process, helpful, you’re, updating, own]
---

# Disable CPQ Triggers in Apex

> You can manually disable Salesforce CPQ and Salesforce Billing application logic when
  you update records. This process is helpful when you’re updating your own custom field. It’s also
  helpful when you update a record several times in one transaction and want triggers to run only on
  the last iteration.

# Disable CPQ Triggers in Apex

You can manually disable Salesforce CPQ and Salesforce Billing application logic when you update records. This process is helpful when you’re updating your own custom field. It’s also helpful when you update a record several times in one transaction and want triggers to run only on the last iteration.

| Available in: Salesforce CPQ Summer ’16 and later |
| --- |


To ensure that operational issues don’t affect your org when triggers are disabled, test thoroughly. Use the global Apex API TriggerControl—the same mechanism that Salesforce CPQ uses internally—to manually disable triggers for the CPQ and Billing and the Service Cloud for CPQ packages.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=cpq_dev_api)

#### Note

TriggerControl disables only triggers in CPQ and Billing and in the Service Cloud for CPQ package. Other triggers or Salesforce logic, or your own triggers, validations, workflow rules, or processes, are unaffected.

## Methods

global static void disable();

Disables built-in CPQ triggers within the current transaction.

global static void enable();

Enables built-in CPQ triggers if they had previously been disabled.

global static Boolean isEnabled()

Returns true if CPQ triggers are currently enabled. Otherwise, returns false.

## Example

```

```

## Example

```

```

## Code Examples

```
SBQQ.TriggerControl.disable();
try {
	// Do something simple and interesting without
	// running triggers.
	quote.MyStatus__c = ‘Red’;
	update quote;
} finally {
SBQQ.TriggerControl.enable();
}
```

```
if (SBQQ.TriggerControl.isEnabled()) {
	// Only run our logic if CPQ trigger logic is also enabled.
	myRelatedObject.Quote__c = quote.Id;
	insert myRelatedObject;
}
```
