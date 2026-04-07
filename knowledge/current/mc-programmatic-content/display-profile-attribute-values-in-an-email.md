---
title: "Display Profile Attribute Values in an Email"
domain: mc-programmatic-content
topic: display-profile-attribute-values-in-an-email
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-04-07T18:40:23.082Z
estimatedTokens: 217
keywords: [Display, Profile, Attribute, Email, sample, server-side, JavaScript, demonstrates, how, subscriber, attributes, inside, message, Code]
---

> This sample server-side JavaScript demonstrates how to display subscriber profile attributes inside an email message.

# Display Profile Attribute Values in an Email

This sample server-side JavaScript demonstrates how to display subscriber profile attributes inside an email message.

## Sample Code

The sample code describes how to build a server-side JavaScript variable with values from two profile attributes and display it in the email:

```
<script runat=server>
    var subFullName = Platform.Recipient.GetAttributeValue("First Name") + " " + Platform.Recipient.GetAttributeValue("Last Name");
</script>
<br />
<br />
Hello <ctrl:var name="subFullName" />,
The subFullName variable contains the information taken from the First Name and Last Name profile attributes.

This sample code demonstrates how to display the value of the profile attributes directly in the email:

Dear <ctrl:field name="First Name" />,
<br />
Your email address is <ctrl:field name="emailaddr" />.
```
