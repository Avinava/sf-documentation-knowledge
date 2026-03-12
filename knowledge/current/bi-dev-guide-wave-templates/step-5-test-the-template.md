---
title: "Step 5: Test the Template"
domain: bi-dev-guide-wave-templates
topic: step-5-test-the-template
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:34:07.693Z
estimatedTokens: 1277
keywords: [Step, Test, Template, throughout, development, process, creating, exporting, files, edit, deploy, testing, results, reexport, again]
---

# Step 5: Test the Template

> Test the template throughout the development process. After creating the template and
  exporting its files, you edit them, and then deploy them for testing. Based on the results,
  reexport the files and edit, deploy, and test again until you’ve achieved the result that you
  want.

# Step 5: Test the Template

Test the template throughout the development process. After creating the template and exporting its files, you edit them, and then deploy them for testing. Based on the results, reexport the files and edit, deploy, and test again until you’ve achieved the result that you want.

1.  Create the source app.
2.  Create the template object with CRM Analytics Studio, CLI, or VS Code.

    **→ Test 1**—Create an app from the unmodified template to make sure that everything works.

    ![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=bi_dev_guide_wave_templates)

    #### Note

    CRM Analytics usually tokenizes the template correctly, but there are occasionally problems that require manual editing. Incorrect tokens in the template cause app creation to fail because CRM Analytics doesn't know what to substitute for the incorrect token. When app creation fails, you usually see a message like the following: Expression error occurred \[Error processing expression "${App.Dashboards.SupportingDashboard..Name}". Variable part \[SupportingDashboard\] not found in context map, check for typo in EL Expression.\]. The message indicates that the referenced piece of the context doesn't exist. To fix that, edit template-info.json to add the context piece with the correct name.

3.  Create an app from your template.
    1.  For app templates, create the app from the template in Analytics Studio. You can view the app creation log after app creation completes. With the app open, select **Details**. The **App Log** shows each asset that was created in the order it that was created, the asset status, and the overall app status. If app creation fails, the error messages are logged here.
    2.  For data templates, create the data assets from the template in Data Manager.
    3.  For embedded app and data templates, the installation process can be monitored on the Auto-Installed Apps page. For more details on how to find and use this page, see [Monitor, Update, and Delete Auto-Installed Apps](https://help.salesforce.com/s/articleView?id=analytics.bi_auto_install_overview.htm&type=5&language=en_US)
4.  To inspect and debug the app in detail, use the App Install History page in Setup. This page contains detailed logs and the runtime state for each install task. For more details, see the [Use the App Install History Page](atlas.en-us.bi_dev_guide_wave_templates.meta/bi_dev_guide_wave_templates/bi_templatesdev_app_install_history.htm "Use the App Install History page to monitor installations in progress, track the assets created for the app, and view logs to troubleshoot any installation issues.").
5.  Retrieve the template object using CLI or VS Code.
6.  Edit the JSON files.
7.  Deploy the updates with CLI or VS Code.

    **→ Test 2**— To evaluate the wizard and the app assets that it creates, create an app from the updated template.

8.  Most likely you’ll make many changes, mostly to the template assets, but sometimes also to the source app.

    1.  Make changes in the source app to the dashboards, lenses, or dataset. Update the template object by using Analytics Studio to update the template, with CLI (analytics:template:update), or the VS Code **Update Analytics Template From App** command. These changes probably require more changes to the wizard or other template assets, so export the template files again and edit them. Update the template object again.

        Run **→ Test 2** again.

        OR

    2.  Make changes to the wizard, rules, or variables. Update the template object again.

        Run **→ Test 2** again.


9.  If you’re using Smart Wizard functionality, test the Apex class after you have a fully functional template wizard. Test it to make sure that the Apex class is working as expected; giving variables programmatically assigned values, hiding or changing the visibility of variables and UI pages, giving feedback to the user, and so forth.

    Save your template in the source control system of your choice, such as GitHub.


-   **[Use the App Install History Page](atlas.en-us.bi_dev_guide_wave_templates.meta/bi_dev_guide_wave_templates/bi_templatesdev_app_install_history.htm)**
    Use the App Install History page to monitor installations in progress, track the assets created for the app, and view logs to troubleshoot any installation issues.
-   **[Debug the Template](atlas.en-us.bi_dev_guide_wave_templates.meta/bi_dev_guide_wave_templates/bi_templatesdev_debug_template_steps.htm)**
    CRM Analytics provides debug logs for templated apps to inspect the app creation lifecycle. These debug logs give you visibility into asset creation and the processing of any rules or Apex configuration modifier classes that you created. Use the debug logs during template testing when app creation isn’t working as expected.
-   **[Reading the Template Debug Logs](atlas.en-us.bi_dev_guide_wave_templates.meta/bi_dev_guide_wave_templates/bi_templatesdev_read_debug_log.htm)**
    Each Analytics Templated App Poller log contains multiple log lines generated from different log events.

## Related Topics

- Use the App Install History
     Page (atlas.en-us.bi_dev_guide_wave_templates.meta/bi_dev_guide_wave_templates/bi_templatesdev_app_install_history.htm)
- Use the App Install History Page (atlas.en-us.bi_dev_guide_wave_templates.meta/bi_dev_guide_wave_templates/bi_templatesdev_app_install_history.htm)
- Debug the Template (atlas.en-us.bi_dev_guide_wave_templates.meta/bi_dev_guide_wave_templates/bi_templatesdev_debug_template_steps.htm)
- Reading the Template Debug Logs (atlas.en-us.bi_dev_guide_wave_templates.meta/bi_dev_guide_wave_templates/bi_templatesdev_read_debug_log.htm)
