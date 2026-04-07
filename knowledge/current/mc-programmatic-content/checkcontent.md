---
title: "CheckContent"
domain: mc-programmatic-content
topic: checkcontent
apiVersion: 67.0
release: summer-26-v67
docType: concept
lastCollected: 2026-04-07T18:40:23.097Z
estimatedTokens: 131
keywords: [CheckContent, **Overview**, **Syntax**]
---

# CheckContent

## **Overview**

Runs content checks on the initialized email and returns a JSON object indicating the result of the content check and any identified issues

### **Syntax**

CheckContent()

## Example

This sample code calls CheckContent() on the initialized email object and writes out the results from the returned JSON object:

```
var myEmail = Email.Init("myEmail");
var results = myEmail.CheckContent();
Write(results.Task.CheckPassed);
Write(results.Task.ResultMessage);
```

Last Updated: Jun 8, 2021
