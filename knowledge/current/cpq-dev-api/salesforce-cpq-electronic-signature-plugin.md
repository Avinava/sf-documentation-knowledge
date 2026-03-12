---
title: "Salesforce CPQ Electronic Signature Plugin"
domain: cpq-dev-api
topic: salesforce-cpq-electronic-signature-plugin
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:23.778Z
estimatedTokens: 89
keywords: [Salesforce, CPQ, Electronic, Plugin, lets, developers, add, functionality, their, orgs, useful, organizations, wish, streamline, processes]
---

# Salesforce CPQ Electronic Signature Plugin

> An electronic signature plugin lets developers add electronic signature functionality to
  their orgs. This is useful for organizations who wish to streamline processes involving
  signatures, such as finalizing purchases and contracts.

# Salesforce CPQ Electronic Signature Plugin

An electronic signature plugin lets developers add electronic signature functionality to their orgs. This is useful for organizations who wish to streamline processes involving signatures, such as finalizing purchases and contracts.

| Available in: All Salesforce CPQ Editions |
| --- |


## Example

```

```

## Code Examples

```apex
global virtual interface ElectronicSignaturePlugin {
	void send(QuoteDocument__c[] documents);
	
	void updateStatus(QuoteDocument__c[] documents);
	
	void revoke(QuoteDocument__c[] documents);
	
	String getSendButtonLabel();
}


global interface ElectronicSignaturePlugin2 extends ElectronicSignaturePlugin {
	Boolean isSendButtonEnabled();
}
```
