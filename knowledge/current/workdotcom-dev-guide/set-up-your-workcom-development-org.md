---
title: "Set Up Your Work.com Development Org"
domain: workdotcom-dev-guide
topic: set-up-your-workcom-development-org
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:36:22.327Z
estimatedTokens: 958
keywords: [Work.com, Development, Org, develop, test, solution, enabled, Partner, Developer, Edition, scratch]
---

# Set Up Your Work.com Development Org

> To develop and test your Work.com solution, you need an org with Work.com enabled. You
    can use a Partner Developer Edition org or a scratch org.

# Set Up Your Work.com Development Org

To develop and test your Work.com solution, you need an org with Work.com enabled. You can use a Partner Developer Edition org or a scratch org.

Use the following steps to enable the Work.com data model in your development org.

1.  **If you’re using a new Partner Developer Edition org** created from the Environment Hub in Partner Business Org, the Work.com add-on feature should be enabled by default. Contact Salesforce if the add-on feature is not enabled in your Partner Developer Edition org.

    ![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=workdotcom_dev_guide)

    #### Note

    To add a Work.com permission set license to an existing Partner Developer Edition org, [log a case for a license request in the Partner Community](https://partners.salesforce.com/newPartnerCase?subtopic=LicenseRequest) (Partner Community login required).

    **If you’re using a scratch org**, enable the “WorkplaceCommandCenterUser”, “Communities”, and “ForceComPlatform” add-on features. To use Workplace Command Center in your scratch org, enable Surveys and Communities settings. For example, your scratch org scratch-def.json configuration file might look like:

    ```

    ```

2.  For Workplace Command Center development, install both the [Workplace Command Center](http://work.force.com/workplacecommandcenter) and [Wellness Check](http://work.force.com/employeewellnesssurveysamples) packages (org login required).

    For Employee Workspace development, install the [Employee Workspace](https://work.force.com/employeeworkspace) package.

3.  For Workplace Command Center development, create and assign the Workplace Command Center permissions in your org. To create all the permission sets and permission set groups for all Workplace personas, [use the Update Permissions option](https://help.salesforce.com/articleView?id=wcc_setup_update_perms.htm&type=5&language=en_US) from within the Command Center Settings tab. Then assign your user the permission set group called Workplace Admin Access Group.

    For information on Employee Workspace users and permissions, see [Meet the Employee Workspace Personas](https://help.salesforce.com/articleView?id=employee_workspace_setup_meet_personas.htm&language=en_US).


We provide an example script that sets up a scratch org for Work.com. See [https://github.com/forcedotcom/WorkDotCom-Partners/blob/master/orgInit.sh](https://github.com/forcedotcom/WorkDotCom-Partners/blob/master/orgInit.sh).

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=workdotcom_dev_guide)

#### Note

For a more streamlined setup process, create a scratch org and use the [Work.com installer service](https://help.salesforce.com/articleView?id=wcc_setup_install_man_pack.htm&type=5&language=en_US) to add and partially configure the Workplace Command Center, Wellness Check, or Employee Workspace packages in your org. For reference, see [Verify Command Center and Wellness Check Installation and Auto-Configuration](https://help.salesforce.com/articleView?id=wcc_setup_verify_install.htm&type=5&language=en_US) or [Verify Employee Workspace Installation and Auto-Configuration](https://help.salesforce.com/articleView?id=employee_workspace_setup_personas.htm&language=en_US).

#### See Also

-   [*Salesforce Help*: Create Permission Sets](https://help.salesforce.com/articleView?id=perm_sets_create.htm&type=5&language=en_US "
    Salesforce Help: Create Permission Sets - HTML (New Window)")

-   [*Salesforce Help*: Assign a Feature Permission Set License and Permission Set](https://help.salesforce.com/articleView?id=users_permissionset_licenses_and_perm_sets.htm&type=5&language=en_US "
    Salesforce Help: Assign a Feature Permission Set License and Permission Set - HTML (New Window)")

## Code Examples

```
{
  "orgName": "my company",
  "edition": "Enterprise",
  "features": [
    "Communities",
    "WorkplaceCommandCenterUser",
    "ForceComPlatform"
  ],
  "settings": {
    "lightningExperienceSettings": {
      "enableS1DesktopEnabled": true
    },
    "surveySettings": {
      "enableSurvey": true
    },
    "communitiesSettings": {
      "enableNetworksEnabled": true
    }
  }
}
```
