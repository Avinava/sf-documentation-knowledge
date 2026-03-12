---
title: "$Network"
domain: pages
topic: network
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:24.390Z
estimatedTokens: 667
keywords: [$Network, merge, referencing, Experience, Cloud, site, Visualforce, email, template, Usage]
---

# $Network

> A global merge field type to use when referencing Experience Cloud site details in a
  Visualforce email template.

# $Network

A global merge field type to use when referencing Experience Cloud site details in a Visualforce email template.

## Usage

Use dot notation to access your Experience Cloud site’s name and login page URL.The login page URL depends on whether the site uses the standard or a custom login page.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=pages)

#### Note

The $Network global merge field type works only in the context of Visualforce emails for Experience Cloud sites.

For more flexibility, you can create custom Experience Cloud site email templates in Visualforce. For a Visualforce email template, use the $Network global merge field type and its properties, as described in this table. These fields are populated only in Visualforce Experience Cloud site email templates.

| Field Name | Description |
| --- | --- |
| $Network.ActionForVerificationEmail | Used in one-time password (OTP) and device activation emails to specify the action that prompted sending a verification email. |
| $Network.AsyncVerificationLink | Used in asynchronous emails to send a verification link (URL) to users. Users click the link to verify their email address with Salesforce. After verifying their email address, external users can log in with a one-time password (OTP) via email (passwordless login). |
| $Network.BrowserForVerificationEmail | Used in OTP and device activation emails to specify the browser where the action occurred that prompted sending a verification email. |
| $Network.CodeForVerificationEmail | The verification code sent in the OTP or device activation email. |
| $Network.ChgEmailVerOldEmail | The user’s old email address, when they change it. |
| $Network.ChgEmailVerNewEmail | The user’s new email address, when they change it. |
| $Network.ChgEmailVerLink | The link, sent to the user’s new email address, that the user follows to verify their email address change. |
| $Network.Name | The name of the Experience Cloud site. |
| $Network.NetworkUrlForUserEmails | The URL to the login page of the Experience Cloud site, for example, https://MyDomainName.my.site.com/partners/login.If this merge field is in the welcome email to new members, the URL is appended with a link to a reset password page. |
| $Network.OperatingSystemForVerificationEmail | Used in OTP and device activation emails to specify the operating system where the action occurred that prompted sending a verification email. |
| $Network.passwordLockTimeOR{!PASSWORD_LOCK_TIME} | Used in the formula field for lockout emails to specify how long a user must wait until logging in again after being locked out. |

## Example

```

```

## Code Examples

```
{!$Network.Name}
{!$Network.NetworkUrlForUserEmails}
```
