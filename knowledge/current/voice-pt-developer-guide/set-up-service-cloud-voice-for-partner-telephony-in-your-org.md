---
title: "Set Up Service Cloud Voice for Partner Telephony in Your Org"
domain: voice-pt-developer-guide
topic: set-up-service-cloud-voice-for-partner-telephony-in-your-org
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:36:22.155Z
estimatedTokens: 2576
keywords: [Service, Cloud, Voice, Partner, Telephony, Org, licenses, added, Salesforce, admins, open, Setup, follow, steps, their]
---

# Set Up Service Cloud Voice for Partner Telephony in Your Org

> When Service Cloud Voice for Partner Telephony licenses are added to an org, Salesforce
    admins in the org can open the Partner Telephony Setup page and follow the steps to set up their
    contact center. This guide describes how you can customize that experience.

# Set Up Service Cloud Voice for Partner Telephony in Your Org

When Service Cloud Voice for Partner Telephony licenses are added to an org, Salesforce admins in the org can open the Partner Telephony Setup page and follow the steps to set up their contact center. This guide describes how you can customize that experience.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=voice_pt_developer_guide)

#### Important

This guide is for telephony providers who are creating a solution that integrates Service Cloud Voice with their telephony system. If that’s not you, see the [Service Cloud Voice Implementation Guide](https://developer.salesforce.com/docs/atlas.en-us.260.0.voice_developer_guide.meta/voice_developer_guide/voice_intro.htm) or [Salesforce Help](https://help.salesforce.com/articleView?id=service.voice_about.htm&type=5&language=en_US). To update your solution to include Bring Your Own Channel for CCaaS Messaging capabilities along with Service Cloud Voice, see the [Bring Your Own Channel Developer Guide](https://developer.salesforce.com/docs/service/messaging-byoc-ccaas/guide/add-messaging-to-voice.html).

![Service Cloud Voice setup page.](/docs/resources/img/en-us/260.0?doc_id=voice_pt%2Fimages%2Fsetup_telephony.png&folder=voice_pt_developer_guide)

Customers can install the managed package from the App Exchange or from an external URL provided by the telephony partner. Telephony partners can skip installing the managed package from the App Exchange, because they would install the managed package in their scratch orgs in [Create an SFDX Project](atlas.en-us.voice_pt_developer_guide.meta/voice_pt_developer_guide/voice_pt_sfdx_project.htm "Allow Service Cloud Voice to communicate with your telephony provider. The package you’re creating includes a connector, contact center, settings metadata, and more."). Telephony partners can also follow these steps to set up contact centers in their scratch orgs.

After the admin completes the initial step of enabling Omni-Channel, they can enable Voice in their org. The next steps require assigning the contact center permissions and creating the contact center.

1.  Both customers and telephony partners can follow the setup wizard to create a contact center.

    ![New contact center provider](/docs/resources/img/en-us/260.0?doc_id=voice_pt%2Fimages%2Fnew_contact_center_provider.png&folder=voice_pt_developer_guide)

2.  After selecting the available vendor from the installed packages, there are two options. Either enter the contact center display name and internal name, or import an XML file to create a contact center.

    ![New contact center name](/docs/resources/img/en-us/260.0?doc_id=voice_pt%2Fimages%2Fnew_contact_center_name.png&folder=voice_pt_developer_guide)

    ![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=voice_pt_developer_guide)

    #### Note

    As you type text into the text field, the **Upload an XML definition file** link becomes disabled. Clear the text field to re-enable the link.

    The next several steps describe the flow if you choose to enter the contact center name (rather than importing the XML).

3.  The next setup step shows custom settings based on a custom object you can specify in the ConversationVendorInfo setup object. If you don’t have a custom object specified in ConversationVendorInfo, this step is skipped.

    ![New contact center configure](/docs/resources/img/en-us/260.0?doc_id=voice_pt%2Fimages%2Fnew_contact_center_configure.png&folder=voice_pt_developer_guide)

    If the partner wants to allow customers to provide some non-standard settings, the partner can create a custom object and specify it in the ConversationVendorInfo object customConfig field. In this step, the setup wizard loads all the fields from the default layout to allow customers to provide values for settings. It creates a record of this custom object and stores the record ID in the contact center. When reps log in to the contact center, the record details are loaded as part of the contact center settings.

4.  If the partner wants to have an advanced feature that would require the server-to-server communication with a named credential, it must be declared in the ConversationVendorInfo object namedCredentialSupported field. If the partner doesn’t support this feature, this step is skipped.

    ![New contact center telephony account](/docs/resources/img/en-us/260.0?doc_id=voice_pt%2Fimages%2Fnew_contact_center_account.png&folder=voice_pt_developer_guide)

    This functionality can be used for Einstein Conversation Insights, user syncing, or retrieving the external queue ID for queue mapping. These features require named credentials for the server-to-server authentication. In this step, the screen allows customers to choose which named credentials to use. It shows all the available named credentials in this org, either from local creation or an installed managed package. After clicking the **Next** button, it invokes the connect method from the Apex class that implements the [service\_cloud\_voice.PartnerConnector](atlas.en-us.voice_pt_developer_guide.meta/voice_pt_developer_guide/voice_pt_apex_reference.htm "Service Cloud Voice for Partner Telephony uses several Apex classes.") interface. If the response is successful, it stores the named credential ID in the contact center.

    1.  If the partner also supports the rep SSO authentication, it must be declared in the ConversationVendorInfo object agentSSOSupported field. You must also provide an Apex class, which implements the [service\_cloud\_voice.PartnerSSO](atlas.en-us.voice_pt_developer_guide.meta/voice_pt_developer_guide/voice_pt_apex_reference.htm "Service Cloud Voice for Partner Telephony uses several Apex classes.") interface. This step invokes the Apex class methods to get the required parameters and create the connected app to set up the SAML identity provider.
    2.  If the partner supports named credentials, and there are multiple contact center instances in the vendor’s system, and you want to let the customer choose which one to connect to, this information must be declared in the ConversationVendorInfo object partnerContactCenterListSupported field. This information also must be declared in the connect method from the Apex class that implements the [service\_cloud\_voice.PartnerConnector](atlas.en-us.voice_pt_developer_guide.meta/voice_pt_developer_guide/voice_pt_apex_reference.htm "Service Cloud Voice for Partner Telephony uses several Apex classes.") interface. This interface returns the list of the contact centers, with external IDs and labels. This step allows the customer to choose which external contact center to connect to. If this feature isn’t supported, this step is skipped.

        ![Connect a telephony account](/docs/resources/img/en-us/260.0?doc_id=voice_pt%2Fimages%2Fnew_contact_center_select_partner.png&folder=voice_pt_developer_guide)

5.  When importing XML, the content contains two mandatory sections and some optional, vendor-specific sections.

    -   General Info Section:
        -   Contains the Display Name and Internal Name. Use alphanumeric characters for the internal name of contact center. The internal name must be unique.
        -   Set the reqVendorInfoApiName to <namespace prefix of managed package>\_\_<developer name of the Conversation Vendor Info component>. You can check the namespace prefix and developer name from View Components inside the managed package.![Service Cloud Voice installed packages](/docs/resources/img/en-us/260.0?doc_id=voice_pt%2Fimages%2Fimport_ontact_center_definition.png&folder=voice_pt_developer_guide)
    -   SCV Settings Section:
        -   Set the reqTelephonyIntegrationCertificate to the certificate as generated in [Generate a Self-Signed Certificate with OpenSSL](atlas.en-us.voice_pt_developer_guide.meta/voice_pt_developer_guide/voice_pt_generate_certificate.htm "Use OpenSSL to generate an RSA private key and certificate."). Customers can use this info as provided by the telephony partner.
        -   Update reqLongDistPrefix to the desired area code prefix. The Omni-Channel softphone uses this area code for outbound calls.
    -   Partner Settings Sections:
        -   Telephony partners can include their specific configurations in the rest of the sections with a name other than reqGeneralInfo/reqHvcc. Customers don’t must change the configurations specified by the telephony partner.
    -   There’s a maximum limit of 500 sections per XML file and 1,000 items per section.

        ```

        ```


6.  After the setup flow is completed, the contact center appears in the Partner Telephony Contact Centers node and the admin can add users to the contact center.

    ![Partner Telephony Contact Centers](/docs/resources/img/en-us/260.0?doc_id=voice_pt%2Fimages%2Fpartner_telephony_contact_center.png&folder=voice_pt_developer_guide)

    ![Add users to contact center.](/docs/resources/img/en-us/260.0?doc_id=voice_pt%2Fimages%2Fadd_contact_center_users.png&folder=voice_pt_developer_guide)


Other details about the setup process:

-   The admin clicks **Create Contact Center** to launch the wizard.![Update Your Contact Center Page](/docs/resources/img/en-us/260.0?doc_id=voice_pt%2Fimages%2Fpartner_telephony_setup.png&folder=voice_pt_developer_guide)
-   You can change the values on the contact center details page after the contact center is created.
-   If the setup flow is canceled before completion, the steps can still be completed on the contact center details page. The custom settings can be edited in the second section of the contact center details page. The connect button is on the top-right corner, which allows the admin to launch the wizard to select the named credential to connect to the telephony account. In the create contact center wizard, it doesn’t ask the public key, so the admin must update the contact center to provide the public key.![Partner telephony settings](/docs/resources/img/en-us/260.0?doc_id=voice_pt%2Fimages%2Fpartner_telephony_settings.png&folder=voice_pt_developer_guide)
-   After this step is completed, the contact center appears in the Partner Telephony Contact Centers node and the admin can add users to the contact center.

## Code Examples

```
<callCenter>

    <!-- General Info Section. This is a required section. -->
    <section sortOrder="0" name="reqGeneralInfo" label="General Information">
        <item sortOrder="1" name="reqDisplayName" label="Display Name">Quick Start Partner Telephony</item>
        <item sortOrder="0" name="reqInternalName" label="InternalName">quickStartPartnerTelephony</item>
       
         <!-- Provide Full API Name of the Conversation Vendor Info Component present in installed vendor managed package -->
        <item sortOrder="2" name="reqVendorInfoApiName" label="Conversation Vendor Info Developer Name">quickStartPT__quickStartPartnerTelephony</item>
    </section>

    <!-- SCV Settings. This is a required section. -->    
    <section sortOrder="1" name="reqHvcc" label="SCV Settings">
        <item sortOrder="0" 
            name="reqTelephonyIntegrationCertificate" label="Telephony Integration Certificate">-----BEGIN CERTIFICATE-----
{PASTE CERTIFICATE CONTENTS HERE}
-----END CERTIFICATE-----</item>
        <item sortOrder="1" name="reqLongDistPrefix" label="Long Distance Prefix">+1</item>
    </section>


    <!-- All below sections below contain vendor settings-->
    <section sortOrder="2" name="providerSettings1" label="Button Assignment">
        <item sortOrder="0" name="custom2" label="custom2">Custom2 </item>
        <item sortOrder="2" name="custom0" label="custom0">custom0</item>
        <item sortOrder="1" name="custom1" label="custom1">Custom1</item>
        
    </section>
    <section sortOrder="3" name="providerSettings2" label="Dialing Options">
        <item sortOrder="2" name="custom0" label="custom0">custom0</item>
        <item sortOrder="0" name="custom2" label="custom2">Custom2</item>
        <item sortOrder="1" name="custom1" label="custom1">Custom1</item>
        
    </section>
</callCenter>
```

## Related Topics

- Create an SFDX Project (atlas.en-us.voice_pt_developer_guide.meta/voice_pt_developer_guide/voice_pt_sfdx_project.htm)
- service_cloud_voice.PartnerConnector (atlas.en-us.voice_pt_developer_guide.meta/voice_pt_developer_guide/voice_pt_apex_reference.htm)
- service_cloud_voice.PartnerSSO (atlas.en-us.voice_pt_developer_guide.meta/voice_pt_developer_guide/voice_pt_apex_reference.htm)
- Generate a Self-Signed Certificate with OpenSSL (atlas.en-us.voice_pt_developer_guide.meta/voice_pt_developer_guide/voice_pt_generate_certificate.htm)
