---
title: "The Process at a Glance"
domain: bi-dev-guide-wave-templates
topic: the-process-at-a-glance
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:34:07.602Z
estimatedTokens: 590
keywords: [Process, Glance, creating, source, app, CRM, Analytics, follow, steps, work, template, sections, developer, provide, step]
---

# The Process at a Glance

> After creating a source app in CRM Analytics, follow these steps to create and work with
    a template. The next sections of the developer guide provide details about each
    step.

# The Process at a Glance

After creating a source app in CRM Analytics, follow these steps to create and work with a template. The next sections of the developer guide provide details about each step.

Start by developing an app in CRM Analytics Studio. That becomes the source app you use as the basis for your template. We recommend that you complete Steps 1 through 4 and 8 in Microsoft Visual Studio (VS) Code, issuing command line interface (CLI) commands from the tool’s Command Palette and using its JSON editor.

1.  **Create the WaveTemplate object and files.** Create the first version of the template from the source app.
2.  **Retrieve (export) the WaveTemplate object and files.** Make the files available on your local file system for editing.
3.  **Edit the JSON files.** Build the configuration wizard user interface, variables, conditions, and rules into your template by editing the JSON files. You can also customize the wizard with VisualForce and add other enhancements. Use your preferred Integrated Development Environment (IDE) to edit the files, regardless of whether you create them using CLI or VS Code.
4.  **Deploy the WaveTemplate object.** After editing the files in an IDE, push the them back to your development org for testing. Deploy the object every time you edit the JSON. Pulling the template files back from the development org overwrites the files on your local workstation.
5.  **Test the template.** Testers can now create apps from the template in Analytics Studio for testing. After getting test results, retrieve the template object files again (Step 2), make further edits (Step 3), and redeploy them (Step 4). It’s an iterative cycle. And every time you change the JSON files, and deploy your template, test the template again.
6.  **Share the template with users.** Enables creation of apps from the template.
7.  **Create apps from the template.** Users create apps in Analytics Studio or by installing a managed package. Based on their feedback, continue iterative development of the app and template.
8.  **Update an existing template.** Update the template after editing source app assets, including dashboards, lenses, datasets, recipes, and dataflows in Analytics Studio.

#### See Also

-   [Create an App](https://help.salesforce.com/s/articleView?id=analytics.bi_app_create.htm&type=5&language=en_US)
