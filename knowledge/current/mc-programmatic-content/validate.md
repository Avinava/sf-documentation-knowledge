---
title: "Validate"
domain: mc-programmatic-content
topic: validate
apiVersion: 67.0
release: summer-26-v67
docType: concept
lastCollected: 2026-04-07T18:40:23.119Z
estimatedTokens: 130
keywords: [Validate, **Overview**, **Syntax**]
---

# Validate

## **Overview**

Runs validation checks on the initialized email and returns a JSON object indicating the result of the validation and any identified issues

### **Syntax**

Validate()

## Example

This sample code calls Validate() on the initialized email object and writes out the results from the returned JSON object:

```
var myEmail = Email.Init("myEmail");
var results = myEmail.Validate();
Write(results.Task.ValidationStatus);
Write(results.Task.ValidationMessages);
```

Last Updated: Jun 8, 2021
