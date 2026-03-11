---
title: "signXML(algorithmName, node, idAttributeName, certDevName)"
domain: apex-reference
topic: signxmlalgorithmname-node-idattributename-certdevname
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:36.436Z
keywords: [signXML, algorithmName, node, idAttributeName, certDevName, Envelops, signature, XML, document., Signature, Parameters, Return, Value, Example]
---

# signXML(algorithmName, node, idAttributeName, certDevName)

> Envelops the signature into an XML document.

### signXML(algorithmName, node, idAttributeName, certDevName)

Envelops the signature into an XML document.

#### Signature

public Void signXML(String algorithmName, [Dom.XmlNode](atlas.en-us.apexref.meta/apexref/apex_classes_xml_dom_xmlnode.htm#apex_classes_xml_dom_xmlnode "Use the XmlNode class to work with a node in an XML document.") node, String idAttributeName, String certDevName)

#### Parameters

algorithmName

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

signWithCertificate supports all these values for algorithmName. See [Crypto Class](#apex_classes_restful_crypto "Provides methods for creating digests, message authentication codes, and signatures, as well as encrypting and decrypting information.") for details on each algorithm.

RSA, RSA-SHA1, RSA-SHA256, RSA-SHA384, RSA-SHA512, ECDSA-SHA256, ECDSA-SHA256-PLAIN, ECDSA-SHA384, and ECDSA-SHA512

node

Type: [Dom.XmlNode](atlas.en-us.apexref.meta/apexref/apex_classes_xml_dom_xmlnode.htm#apex_classes_xml_dom_xmlnode "Use the XmlNode class to work with a node in an XML document.")

The XML node to sign and insert the signature into.

idAttributeName

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

The full name (including the namespace) of the attribute on the node (XmlNode) to use as the reference ID. If null, this method uses the ID attribute on the node. If there’s no ID attribute, Salesforce generates a new ID and adds it to the node.

certDevName

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

The unique name for a certificate stored in the Salesforce org’s Certificate and Key Management page to use for signing.

To access the Certificate and Key Management page from Setup, enter Certificate and Key Management in the **Quick Find** box, then select **Certificate and Key Management**.

#### Return Value

Type: void

This method doesn’t return a value. The signature envelope is inserted within node.

#### Example

You can use your preferred [Salesforce development environment](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/apex_intro_writing_apex.htm "HTML (New Window)") to test this function. Create the following Apex class. For the testCertName variable, use the unique name value for a self-signed or CA certificate that you have created in the org in which you run this test.

public class TestSignXML { public void testSignXML() { String algorithmName = 'RSA'; String testCertName = 'your-cert-unique-name'; Dom.Document doc = new Dom.Document(); String docToLoad = '<?xml version="1.0"?> ' + '<customers> ' + ' <customer id="2"> ' + ' <name>Company One</name> ' + ' </customer> ' + '</customers>'; doc.load(docToLoad); System.Crypto.signXML(algorithmName, doc.getRootElement(), null, testCertName); //dump the content of the signed XML document to the debug log System.Debug(doc.toXmlString()); } }

To invoke this method, run the following:

```

```