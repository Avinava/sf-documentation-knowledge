---
title: "Insert Records"
domain: cpq-dev-api
topic: insert-records
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:23.750Z
estimatedTokens: 79
keywords: [Insert, Records, sample, JavaScript, script, Quote, Line, Calculator]
---

# Insert Records

> The sample JavaScript script can be used in the Quote Line Calculator to insert
		records.

# Insert Records

The sample JavaScript script can be used in the Quote Line Calculator to insert records.

| Available in: Salesforce CPQ Winter ’16 and later |
| --- |


This sample JavaSciprt code exports all of the methods that the calculator looks for, and documents their parameters and return types.

```

```

## Code Examples

```
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
			return conn.sobject('SBQQ__LookupData__c')
				.find(conditions, fields)
				.execute(function(err, records) {
					console.log(records);
					if (err) {
						return Promise.reject(err);
					} else {
						var valuesByCategory = {};
						records.forEach(function(record) {
							valuesByCategory[record.SBQQ__Category__c] = record.SBQQ__Value__c;
						});
						var newRecords = [];
						lines.forEach(function(line) {
							var code = line.record['SBQQ__ProductCode__c'];
							var desc = line.record['SBQQ__Description__c'];
							if (code && desc && !valuesByCategory[code]) {
								newRecords.push({
									SBQQ__Category__c: code,
									SBQQ__Value__c: line.record['SBQQ__Description__c']
								});
							}
						});
						if (newRecords.length) {
							return conn.sobject('SBQQ__LookupData__c')
								.create(newRecords, function(err, ret) {
									console.log(ret);
								});
						}
					}
				});
		}
	}
	return Promise.resolve();
}
```
