---
title: "Restrict Login IP Addresses in Profiles"
domain: securityImplGuide
topic: restrict-login-ip-addresses-in-profiles
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:35:44.799Z
estimatedTokens: 916
keywords: [Restrict, Login, Addresses, Profiles, Control, access, user, level, specifying, range, allowed, user’s, profile, define, address]
---

# Restrict Login IP Addresses in Profiles

> Control login access at the user level by specifying a range of
   allowed IP addresses on a user’s profile. When you define IP address restrictions for a profile,
   a login from any other IP address is denied.

# Restrict Login IP Addresses in Profiles

Control login access at the user level by specifying a range of allowed IP addresses on a user’s profile. When you define IP address restrictions for a profile, a login from any other IP address is denied.

| Available in: Salesforce Classic (not available in all orgs) and Lightning Experience |
| --- |
| Available in: All Editions |


| User Permissions Needed |
| --- |
| To view login IP ranges: | View Setup and Configuration |
| To edit and delete login IP ranges: | Manage Profiles and Permission Sets |

How you restrict the range of valid IP addresses on a profile depends on your Salesforce edition.

-   If you’re using an Enterprise, Unlimited, Performance, or Developer Edition, manage valid IP addresses in profiles.
-   If you’re using a Group, or Personal Edition, from Setup, manage valid IP addresses on the Session Settings page.
-   In a Professional Edition, the location of IP ranges depends on whether you have the "Edit Profiles & Page Layouts" org preference enabled as an add-on feature. With the "Edit Profiles & Page Layouts" org preference enabled, IP ranges are on individual profiles. Without the "Edit Profiles & Page Layouts" org preference enabled, IP ranges are on the Session Settings page.

To restrict IP addresses in profiles:

1.  From Setup, in the Quick Find box, enter Profiles, and then select **Profiles**.
2.  Depending on which user interface you're using, do one of the following:
    -   In the enhanced profile user interface, click **Login IP Ranges**, and then click **Add IP ranges**.
    -   In the original profile user interface, scroll down to the Login IP Ranges related list, and then click **New**.
3.  Specify allowed IP addresses for the profile. Enter a valid IP address in the IP Start Address field and a higher-numbered IP address in the IP End Address field. To allow logins from a single IP address, enter the same address in both fields.

    The IP addresses in a range must be either IPv4 or IPv6. In ranges, IPv4 addresses exist in the IPv4-mapped IPv6 address space ::ffff:0:0 to ::ffff:ffff:ffff, where ::ffff:0:0 is 0.0.0.0 and ::ffff:ffff:ffff is 255.255.255.255. A range can’t include IP addresses both inside and outside of the IPv4-mapped IPv6 address space. Ranges like 255.255.255.255 to ::1:0:0:0 or :: to ::1:0:0:0 aren’t allowed.

    ![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=securityImplGuide)

    #### Note

    Partner User profiles are limited to five IP addresses. To increase this limit, contact Salesforce.

4.  Optionally enter a description for the range. If you maintain multiple ranges, use the Description field to provide details, such as which part of your network corresponds to this range.
5.  Click **Save**.

You can further restrict access to Salesforce to only those IPs in Login IP Ranges. To enable this option, in Setup, in the Quick Find box, enter Session Settings, and then select **Session Settings**. Select **Enforce login IP ranges on every request**. This option affects all user profiles that have login IP restrictions.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=securityImplGuide)

#### Note

Cache settings on static resources are set to private when accessed via a Salesforce Site whose guest user's profile has restrictions based on IP range or login hours. Sites with guest user profile restrictions cache static resources only within the browser. Also, if a previously unrestricted site becomes restricted, it can take up to 45 days for the static resources to expire from the Salesforce cache and any intermediate caches.
