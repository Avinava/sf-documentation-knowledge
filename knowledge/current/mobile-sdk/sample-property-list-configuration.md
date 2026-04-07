---
title: "Sample Property List Configuration"
domain: mobile-sdk
topic: sample-property-list-configuration
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-04-07T18:40:27.497Z
estimatedTokens: 119
keywords: [Sample, Configuration, Setting, key-value, pair, assignments, plist, iOS]
---

> Setting key-value pair assignments through a plist is only available on iOS.

# Sample Property List Configuration

![Note](/docs/resources/img/en-us/noversion?doc_id=images%2Ficon_note.png&folder=mobile_sdk)

#### Note

Setting key-value pair assignments through a plist is only available on iOS.

One method of setting key-value pair assignments is through an XML property list, or plist. The plist contains the key-value pair assignments that an MDM provider sends to a mobile app to enforce security configurations.

Here is a sample plist:

```

```

## Code Examples

```
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">
<plist version="1.0">
<dict>
	<key>AppServiceHosts</key>
	<array>
		<string>host1</string>
		<string>host2</string>
	</array>
	<key>AppServiceHostLabels</key>
	<array>
		<string>Production</string>
		<string>Sandbox</string>
	</array>
	<key>RequireCertAuth</key>
	<true/>
	<key>ClearClipboardOnBackground</key>
	<false/>
	<key>OnlyShowAuthorizedHosts</key>
	<false/>
</dict>
</plist>
```
