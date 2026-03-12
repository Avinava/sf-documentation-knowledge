---
title: "Move the License Management App to Another Salesforce Org"
domain: pkg2-dev
topic: move-the-license-management-app-to-another-salesforce-org
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:26.167Z
estimatedTokens: 531
keywords: [Move, License, Management, App, Another, Salesforce, Org, LMA, different, package, records, don’t, automatically, manually, relink]
---

# Move the License Management App to Another Salesforce Org

> You can move an LMA to a different org, but your package and license records don’t
    automatically move with it. You must manually relink your packages and refresh the licenses.

# Move the License Management App to Another Salesforce Org

You can move an LMA to a different org, but your package and license records don’t automatically move with it. You must manually relink your packages and refresh the licenses.


| User Permissions Needed |
| --- |
| To install packages: | Download AppExchange Packages |
| To manage licenses in the Partner Community: | Manage Listings |

It’s not possible to have Slack or the Declarative Lookup Rollup Summary (DLRS) package installed in the same org as the LMA. If the org in which you plan to install the LMA has either Slack or the DLRS package installed, uninstall them before you install the LMA. Alternatively, install the LMA in a different org.

1.  To remove the association between the LMA and the org where it’s currently installed, log a case with [Salesforce Partner Support](atlas.en-us.pkg2_dev.meta/pkg2_dev/pkg2_feature_enablement.htm "Certain packaging features can only be enabled by Salesforce Partner Support.").
2.  [Install the LMA in the new org](atlas.en-us.pkg2_dev.meta/pkg2_dev/lma_install_app.htm#lma_install_app "The License Management App (LMA) is a managed package that is installed in all partner business orgs. The org that the LMA is installed in is called the License Management Org (LMO).").
3.  [Associate your packages with the new org](atlas.en-us.pkg2_dev.meta/pkg2_dev/lma_associate_package.htm#lma_associate_package "To receive lead and license records for your package, you connect your License Management Org (LMO), your package, and the Salesforce Partner Console. Your LMO is the Salesforce org where the License Management App (LMA) is installed.").
4.  [Refresh licenses for your packages](atlas.en-us.pkg2_dev.meta/pkg2_dev/lma_refresh_licenses.htm#lma_refresh_licenses "To sync all license records for a package across all subscriber installations, you refresh the license. Refreshing the license can also resolve discrepancies between the number of licenses in a subscriber’s org and the number displayed in the License Management App (LMA). Refreshing is required when you move the LMA to a different org.").

## Related Topics

- Salesforce Partner Support (atlas.en-us.pkg2_dev.meta/pkg2_dev/pkg2_feature_enablement.htm)
- Install the LMA in the new
          org (atlas.en-us.pkg2_dev.meta/pkg2_dev/lma_install_app.htm)
- Associate your packages
            with the new org (atlas.en-us.pkg2_dev.meta/pkg2_dev/lma_associate_package.htm)
- Refresh licenses for your
            packages (atlas.en-us.pkg2_dev.meta/pkg2_dev/lma_refresh_licenses.htm)
