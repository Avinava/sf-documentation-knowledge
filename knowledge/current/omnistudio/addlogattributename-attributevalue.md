---
title: "addLog(attributeName, attributeValue)"
domain: omnistudio
topic: addlogattributename-attributevalue
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:25:07.603Z
keywords: [addLog, attributeName, attributeValue, Add, log, entry, name, value., Maximum, number, entries, 25., Signature, Parameters, Return, Value]
---

# addLog(attributeName, attributeValue)

> Add a log entry with a name and value. Maximum number of log entries is 25.

### addLog(attributeName, attributeValue)

Add a log entry with a name and value. Maximum number of log entries is 25.

#### Signature

public void addLog(String attributeName, String attributeValue)

```

```

#### Parameters

attributeName

Type: String

Name of the log entry. The maximum size is 100 characters.

attributeValue

Type: String

Value of the log entry. The maximum size is 1024 characters.

#### Return Value

Type: void