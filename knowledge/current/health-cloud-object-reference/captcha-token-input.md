---
title: "Captcha Token Input"
domain: health-cloud-object-reference
topic: captcha-token-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:32.777Z
estimatedTokens: 113
keywords: [Captcha, Token, Input, representation, Google, verification]
---

# Captcha Token Input

> Input representation of a Google captcha verification token.

# Captcha Token Input

Input representation of a Google captcha verification token.

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| siteKeyDeveloperName | String | Registered Salesforce key pair name. | Required | 60.0 |
| token | String | Captcha token to verify. | Required | 60.0 |
| type | String | Captcha token type. Possible values are:HCaptchaReCaptcha | Required | 60.0 |
