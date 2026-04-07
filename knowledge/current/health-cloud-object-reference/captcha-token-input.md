---
title: "Captcha Token Input"
domain: health-cloud-object-reference
topic: captcha-token-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-04-07T18:37:40.492Z
estimatedTokens: 113
keywords: [Captcha, Token, Google, verification]
---

> Input representation of a Google captcha verification token.

# Captcha Token Input

Input representation of a Google captcha verification token.

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| siteKeyDeveloperName | String | Registered Salesforce key pair name. | Required | 60.0 |
| token | String | Captcha token to verify. | Required | 60.0 |
| type | String | Captcha token type. Possible values are:HCaptchaReCaptcha | Required | 60.0 |
