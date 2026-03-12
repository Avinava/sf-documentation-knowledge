---
title: "chatteranswers:registration"
domain: pages
topic: chatteranswersregistration
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:22.278Z
estimatedTokens: 328
keywords: [chatteranswers, registration, Displays, Chatter, Answers, component, Attributes]
---

# chatteranswers:registration

> Displays the Chatter Answers registration page.

# chatteranswers:registration

Displays the Chatter Answers registration page.

## This example displays the Chatter Answers registration component.

```

```

## Attributes

| Attribute Name | Attribute Type | Description | Required? | API Version | Access |
| --- | --- | --- | --- | --- | --- |
| hideTerms | Boolean | Flag to hide Terms and Conditions section. |  | 24.0 |  |
| id | String | An identifier that allows the component to be referenced by other components in the page. |  | 14.0 | global |
| profileId | id | If this component is accessed through a Salesforce Community, it represents the profile ID of the self-registered user. This profile is used only for Salesforce Community site registration and not for standalone Force.com site registration. |  | 24.0 |  |
| registrationClassName | String | The name of the Apex class that implements the ChatterAnswers.AccountCreator Apex interface. If unused, Chatter Answers registration uses the generated ChatterAnswers or ChatterAnswersRegistration Apex class. |  | 24.0 |  |
| rendered | Boolean | A Boolean value that specifies whether the component is rendered on the page. If not specified, this value defaults to true. |  | 14.0 | global |
| useUrlRewriter | Boolean | A flag that rewrites urls based on the Sites URL Rewriter. |  | 24.0 |  |

## Code Examples

```
<apex:page showHeader="true">
                <chatteranswers:registration hideTerms="false" useUrlRewriter="false" profileId="00exx0000000000" registrationClassName="ChatterAnswersRegistration"/>               
            </apex:page>
```
