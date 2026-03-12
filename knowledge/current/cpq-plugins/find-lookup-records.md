---
title: "Find Lookup Records"
domain: cpq-plugins
topic: find-lookup-records
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:23.925Z
estimatedTokens: 187
keywords: [Lookup, Records, sample, JavaScript, script, Quote, Line, Calculator, query, plugin, line’s, Method-Chaining, Apex, Legacy, **Find, Records**]
---

# Find Lookup Records

> The sample Apex class can be used in the Legacy Quote Line Calculator to query
        records within the plugin and use fields from those records to set each quote line’s
        Description field.

# **Find Lookup Records**

The sample Apex class can be used in the Legacy Quote Line Calculator to query records within the plugin and use fields from those records to set each quote line’s Description field.

| Available in: Salesforce CPQ Winter ’16 and later |
| --- |


![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=cpq_plugins)

#### Note

Salesforce CPQ no longer provides support for Legacy Quote Calculator plugins. Check out the [Javascript Quote Calculator Plugin](atlas.en-us.cpq_plugins.meta/cpq_plugins/cpq_dev_jsqcp_parent.htm "Add extra functionality to the quote line editor in Salesforce CPQ with custom JavaScript code. Seven available methods allow you to change how calculations are performed and manage page-level security such as field visibility.") for support and improved features.

## Example

```

```

## Code Examples

```
export function onAfterCalculate(quote, lines, conn) {
	if (lines.length > 0) {
		var productCodes = [];
		lines.forEach(function(line) {
			if (line.record['SBQQ__ProductCode__c']) {
				productCodes.push(line.record['SBQQ__ProductCode__c']);
			}
		});
		if (productCodes.length) {
			var codeList = "('" + productCodes.join("', '") + "')";
			/*
			 * conn.query() returns a Promise that resolves when the query completes.
			 */
			return conn.query('SELECT Id, SBQQ__Category__c, SBQQ__Value__c FROM SBQQ__LookupData__c WHERE SBQQ__Category__C IN ' + codeList)
				.then(function(results) {
					/*
					 * conn.query()'s Promise resolves to an object with three attributes:
					 * - totalSize: an integer indicating how many records were returned
					 * - done: a boolean indicating whether the query has completed
					 * - records: a list of all records returned
					 */
					if (results.totalSize) {
						var valuesByCategory = {};
						results.records.forEach(function(record) {
							valuesByCategory[record.SBQQ__Category__c] = record.SBQQ__Value__c;
						});
						lines.forEach(function(line) {
							if (line.record['SBQQ__ProductCode__c']) {
								line.record['SBQQ__Description__c'] = valuesByCategory[line.record['SBQQ__ProductCode__c']] || '';
							}
						});
					}
				});
		}
	}
	return Promise.resolve();
}
```

```
/**
 * Created on 9/27/16.
 */
export function onAfterCalculate(quote, lines, conn) {
	if (lines.length) {
		var codes = [];
		lines.forEach(function(line) {
			var code = line.record['SBQQ__ProductCode__c'];
			if (code) {
				codes.push(code);
			}
		});
		if (codes.length) {
			var conditions = {
				SBQQ__Category__c: {$in: codes}
			};
			var fields = ['Id', 'Name', 'SBQQ__Category__c', 'SBQQ__Value__c'];
			/*
			 * Queries can also be constructed in a method-chaining style.
			 */
			return conn.sobject('SBQQ__LookupData__c')
				.find(conditions, fields)
				.execute(function(err, records) {
					if (err) {
						return Promise.reject(err);
					} else {
						var valuesByCategory = {};
						records.forEach(function(record) {
							valuesByCategory[record.SBQQ__Category__c] = record.SBQQ__Value__c;
						});
						lines.forEach(function(line) {
							if (line.record['SBQQ__ProductCode__c']) {
								line.record['SBQQ__Description__c'] = valuesByCategory[line.record['SBQQ__ProductCode__c']] || '';
							}
						});
					}
				});
		}
	}
	return Promise.resolve();
}
```

```apex
global class QCPForFindingLookupRecords implements SBQQ.QuoteCalculatorPlugin, SBQQ.QuoteCalculatorPlugin2 {
 global set<String> getReferencedFields() {
 return new Set<String> {
 String.valueOf(SBQQ__QuoteLine__c.SBQQ__ProductCode__c),
 String.valueOf(SBQQ__QuoteLine__c.SBQQ__Description__c)
 };
 }

 global void onInit(SObject[] lines) {}

 global void onBeforeCalculate(SObject quote, SObject[] lines) {}

 global void onBeforePriceRules(SObject quote, SObject[] lines) {}

 global void onAfterPriceRules(SObject quote, SObject[] lines) {}

 global void onAfterCalculate(SObject quote, SObject[] lines) {
 if (!lines.isEmpty()) {
 String[] productCodes = new String[0];
 for (SObject line : lines) {
 String productCode = (String)line.get(String.valueOf(SBQQ__QuoteLine__c.SBQQ__ProductCode__c));
 if (productCode != null && !productCode.isWhitespace()) {
 productCodes.add(productCode);
 }
 }
 SBQQ__LookupData__c[] ds = [SELECT Id, SBQQ__Category__c, SBQQ__Value__c FROM SBQQ__LookupData__c WHERE SBQQ__Category__c IN :productCodes];
 if (!ds.isEmpty()) {
 Map<String,String> valuesByCategory = new Map<String,String>();
 for (SBQQ__LookupData__c d : ds) {
 valuesByCategory.put(d.SBQQ__Category__c, d.SBQQ__Value__c);
 }
 for (SObject line : lines) {
 String productCode = (String)line.get(String.valueOf(SBQQ__QuoteLine__c.SBQQ__ProductCode__c));
 if (productCode != null && !productCode.isWhitespace()) {
 line.put(String.valueOf(SBQQ__QuoteLine__c.SBQQ__Description__c), valuesByCategory.get(productCode));
 }
 }
 }
 }
 }
}
```

## Related Topics

- Javascript Quote Calculator Plugin (atlas.en-us.cpq_plugins.meta/cpq_plugins/cpq_dev_jsqcp_parent.htm)
