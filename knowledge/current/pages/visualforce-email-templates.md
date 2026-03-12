---
title: "Visualforce Email Templates"
domain: pages
topic: visualforce-email-templates
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:23.574Z
estimatedTokens: 555
keywords: [Visualforce, Email, Templates, Developers, administrators, advantage, over, standard, HTML, gives, ability, perform, advanced, operations, data]
---

# Visualforce Email Templates

> Developers and administrators can use Visualforce to create email templates. The
  advantage of using Visualforce over standard HTML email templates is that Visualforce gives you
  the ability to perform advanced operations on data that is sent to a recipient.

# Visualforce Email Templates

Developers and administrators can use Visualforce to create email templates. The advantage of using Visualforce over standard HTML email templates is that Visualforce gives you the ability to perform advanced operations on data that is sent to a recipient.

Although Visualforce email templates use standard Visualforce components, they are not created in the same way. Visualforce email templates always use components that are prefaced with the messaging namespace. In addition, these topics provide more details.

-   All Visualforce email templates must be contained within a single <messaging:emailTemplate\> tag. This is analogous to regular Visualforce pages being defined within a single <apex:page\> tag.
-   The <messaging:emailTemplate\> tag must contain either a single <messaging:htmlEmailBody\> tag or a single <messaging:plainTextEmailBody\> tag.
-   Several standard Visualforce components are not available for use within <messaging:emailTemplate\>. These include <apex:detail\>, <apex:pageBlock\> and all related pageBlock components, and all input components such as <apex:form\>. If you attempt to save a Visualforce email template with these components, an error message displays.

-   [Create a Visualforce Email Template](atlas.en-us.pages.meta/pages/pages_email_templates_creating.htm "Use the Visualforce programming language to create email templates.")
-   [Use a Custom Stylesheet in a Visualforce Email Template](atlas.en-us.pages.meta/pages/pages_email_templates_stylesheets.htm "By default, Visualforce email templates always use the standard look and feel of other Salesforce components. However, you can extend or overwrite these styles by defining your own stylesheet.")
-   [Add Attachments to a Visualforce Email Template](atlas.en-us.pages.meta/pages/pages_email_templates_attachments.htm "You can add attachments to your Visualforce email templates. Each attachment is encapsulated within a single <messaging:attachment> component. Code within <messaging:attachment> can be a combination of HTML and Visualforce tags.")
-   [Using Custom Controllers within Visualforce Email Templates](atlas.en-us.pages.meta/pages/pages_email_templates_with_apex.htm)

## Related Topics

- Create a Visualforce Email Template (atlas.en-us.pages.meta/pages/pages_email_templates_creating.htm)
- Use a Custom Stylesheet in a Visualforce Email Template (atlas.en-us.pages.meta/pages/pages_email_templates_stylesheets.htm)
- Add Attachments to a Visualforce Email Template (atlas.en-us.pages.meta/pages/pages_email_templates_attachments.htm)
- Using Custom Controllers within Visualforce Email Templates (atlas.en-us.pages.meta/pages/pages_email_templates_with_apex.htm)
