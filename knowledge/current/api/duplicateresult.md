---
title: "DuplicateResult"
domain: api
topic: duplicateresult
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:33:57.766Z
estimatedTokens: 276
keywords: [DuplicateResult, duplicate, rule, detected, records, Usage, Java, Sample]
---

# DuplicateResult

> Represents the details of a duplicate rule that detected duplicate records and information about those duplicate records.

# DuplicateResult

Represents the details of a duplicate rule that detected duplicate records and information about those duplicate records.

## Fields

| Field | Details |
| --- | --- |
| allowSave | TypebooleanDescriptiontrue if duplicates are allowed to be saved. false if duplicates are not allowed to be saved. |
| duplicateRule | TypestringDescriptionThe name of the duplicate rule that detected duplicate records. |
| duplicateRuleEntityType | TypestringDescriptionThe name of the duplicate rule that detected duplicate records. |
| errorMessage | TypestringDescriptionThe error message configured by the administrator to warn users they are potentially creating duplicate records. This message is associated with a duplicate rule. |
| matchResults | TypeMatchResultDescriptionThe duplicate records and related match information. |

## Usage

DuplicateResult and its constituent objects are available to organizations that use duplicate rules.

## Java Sample

Here is a sample that shows how to block users from entering duplicate leads and display an alert and a list of duplicates.

```

```

## Code Examples

```apex
package com.doc.example;

import java.io.FileNotFoundException;

import com.sforce.soap.partner.*;
import com.sforce.soap.partner.Error;
import com.sforce.soap.partner.sobject.SObject;
import com.sforce.ws.ConnectionException;
import com.sforce.ws.ConnectorConfig;

public class SaveResultsWithDupeHeader {

    private PartnerConnection partnerConnection = null;
    static SaveResultsWithDupeHeader tester;

    public static void main(String[] args) {
        tester = new SaveResultsWithDupeHeader();
        try {
            tester.demoDuplicateRuleHeader();
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    /*
     * Make sure that you have an active lead duplicate rule linked to an active matching rule. This method tries to save
     * an array of leads and inspects whether any duplicates were detected
     */
    public void demoDuplicateRuleHeader() throws FileNotFoundException, ConnectionException {
        // Create the configuration for the partner connection
        ConnectorConfig config = new ConnectorConfig();
        config.setUsername("user@domain.com");
        config.setPassword("secret");
        config.setAuthEndpoint("authEndPoint");
        config.setTraceFile("traceLogs.txt");
        config.setTraceMessage(true);
        config.setPrettyPrintXml(true);

        // Initialize the connection
        partnerConnection = new PartnerConnection(config);

        // Get the leads that have to be saved
        SObject[] leads = getLeadsForInsertOrUpdate();

        /* Set a duplicate rule header to return a result if duplicates are detected
         * This sets the allowSave, includeRecordDetails, and runAsCurrentUser flags to true
         */
        partnerConnection.setDuplicateRuleHeader(true, true, true);

        // Save the leads
        SaveResult[] saveResults = partnerConnection.create(leads);

        // Check the results to see if duplicates were detected
        for (int i = 0; i < leads.length; i++) {
            SaveResult saveResult = saveResults[i];
            if (!saveResult.isSuccess()) {
                for (Error e : saveResult.getErrors()) {
                // See if there are any errors on the saveResult with a data type of DuplicateError
                    if (e instanceof DuplicateError) {
                        System.out.println("Duplicate(s) Detected for lead with ID: " + leads[i].getId());
                        System.out.println("ERROR MESSAGE: " + e.getMessage());
                        System.out.println("STATUS CODE: " + e.getStatusCode());
                        DuplicateResult dupeResult = ((DuplicateError)e).getDuplicateResult();
                        System.out.println("Found the following duplicates...");
                        for (MatchResult m : dupeResult.getMatchResults()) {
                            if (m.isSuccess()) {
                                System.out.println("The match rule that was triggered was " + m.getRule());
                                for (MatchRecord mr : m.getMatchRecords()) {
                                    System.out.println("Your record matched " + mr.getRecord().getId() + " of type "
                                            + mr.getRecord().getType());
                                    System.out.println("The match confidence is " + mr.getMatchConfidence());
                                    for (FieldDiff f : mr.getFieldDiffs()) {
                                        System.out.println("For field " + f.getName() + " field difference is "
                                                + f.getDifference().name());
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }

        // Clear the duplicate rule header
        partnerConnection.clearDuplicateRuleHeader();
    }

    /**
     * The assumption here is that this method is retrieving leads from either UI, a data source, etc
     */
    private SObject[] getLeadsForInsertOrUpdate() {
        return new SObject[0];
    }

}
```

## Related Topics

- MatchResult (atlas.en-us.api.meta/api/sforce_api_objects_matchresult.htm)
