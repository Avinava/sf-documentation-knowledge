---
title: "Assign Record Types to Profiles in the Original Profile User Interface"
domain: securityImplGuide
topic: assign-record-types-to-profiles-in-the-original-profile-user-interface
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:35:44.577Z
estimatedTokens: 655
keywords: [Assign, Record, Profiles, Original, Profile, User, include, picklist, add]
---

# Assign Record Types to Profiles in the Original Profile User Interface

> After you create record types and include picklist values in them, add record types to
  user profiles.

# Assign Record Types to Profiles in the Original Profile User Interface

After you create record types and include picklist values in them, add record types to user profiles.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=securityImplGuide)

#### Note

Users can view records of any record type, even if the record type isn’t associated with their profile.

You can associate several record types with a profile. For example, a user needs to create hardware and software sales opportunities. In this case, you can create and add both ”Hardware” and “Software” record types to the user’s profile.

1.  From Setup, in the Quick Find box, enter Profiles, and then select **Profiles**.
2.  Select a profile. The record types available for that profile are listed in the Record Type Settings section.
3.  Click **Edit** next to the appropriate type of record.
4.  Select a record type from the Available Record Types list and add it to the Selected Record Types list.

    **Master** is a system-generated record type that's used when a record has no custom record type associated with it. When you assign Master, users can't set a record type to a record, such as during record creation. All other record types are custom record types.

5.  From Default, choose a default record type.

    If your organization uses person accounts, this setting also controls which account fields display in the Quick Create area of the accounts home page.

6.  If your organization uses person accounts, set default record type options for both person accounts and business accounts. From the Business Account Default Record Type and then the Person Account Default Record Type drop-down list, choose a default record type.

    These settings are used when defaults are needed for both kinds of accounts, such as when converting leads.

7.  Click **Save**.

Options in the Record Type Settings section are blank wherever no record types exist. For example, if you have two record types for opportunities but no record types for accounts, the **Edit** link only displays for opportunities. In this example, the picklist values and default value for the master are available in all accounts.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=securityImplGuide)

#### Note

If your organization uses person accounts, you can view the record type defaults for business accounts and person accounts. Go to Account Record Type Settings in the profile detail page. Clicking **Edit** in the Account Record Type Settings is another way to begin setting record type defaults for accounts.
