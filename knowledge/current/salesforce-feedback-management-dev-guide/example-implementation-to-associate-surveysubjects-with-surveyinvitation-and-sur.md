---
title: "Example Implementation to Associate SurveySubjects with SurveyInvitation and
        SurveyResponses"
domain: salesforce-feedback-management-dev-guide
topic: example-implementation-to-associate-surveysubjects-with-surveyinvitation-and-sur
apiVersion: 67.0
release: summer-26-v67
docType: example
lastCollected: 2026-03-12T09:35:41.394Z
estimatedTokens: 83
keywords: [Implementation, Associate, SurveySubjects, SurveyInvitation, SurveyResponses, survey, responses, populated, custom, code]
---

# Example Implementation to Associate SurveySubjects with SurveyInvitation and
        SurveyResponses

> If no survey responses are populated, create a custom code to associate
   SurveySubjects with SurveyInvitation and SurveyResponses.

# Example Implementation to Associate SurveySubjects with SurveyInvitation and SurveyResponses

If no survey responses are populated, create a custom code to associate SurveySubjects with SurveyInvitation and SurveyResponses.

This example shows how to associate SurveySubjects with SurveyInvitation and SurveyResponses.

```

```

## Code Examples

```apex
public class CreateEntriesInSurveyInvitationRespRL {
    // Utility to create SurveyInvitation and SurveySubject record
    public static void addEntry(String associatedRecordId, String surveyId, String participantId) {
        String invitationId = createSurveyInvitation(surveyId, participantId);
 
        createSurveySubject(invitationId, associatedRecordId);
    }
 
    // Create an unauthenticated invitation by setting the surveyId and participantId
    private static String createSurveyInvitation(String surveyId, String participantId) {
        SurveyInvitation surveyInv = new SurveyInvitation();
        surveyInv.Name = 'SurveyInvitationForCase'; // add your survey invitation name here
        surveyInv.ParticipantId = participantId;
        surveyInv.CommunityId = '0DBRM0000004n4y'; //add your community id here
        surveyInv.OptionsAllowGuestUserResponse = true;
        surveyInv.SurveyId = surveyId;
 
        // Insert the SurveyInvitation Record
        insert surveyInv;
 
        return surveyInv.Id;
    }
 
    // Associate the above invitation to the required record (eg: Case, Opportunity...)
    private static void createSurveySubject(String invitationId, String associatedRecordId) {
        SurveySubject subj = new SurveySubject();
        subj.Name = 'Sur_Subject_for_invitation';
        subj.ParentId = invitationId; // similary you can use survey response id to associate survey subject to a response record.
        subj.SubjectId = associatedRecordId;
 
        // Insert the SurveySubject Record
        insert subj;
    }
}
 
 
 
//Use this trigger to create a survey subject record associated to
//the Survey Response record
 
trigger SurveyResponseForCaseTrigger on SurveyResponse (after insert) {
        
    System.debug('Inside Survey response trigger ');
     for(SurveyResponse sr: Trigger.New)
    {
      SurveySubject subj = new SurveySubject();
        subj.Name = 'Sur_Subject_for_response';
        subj.ParentId = sr.id; //Associating survey response id
        
       //Get the associatedRecordId recordId (like Case, Opportunity etc) using the SurveyInvitation Id and 
       //assigning it to SubjectId, assuming we inserted SurveySubject record for the associated invitation 
       //using the previous code
       
       List<SurveySubject> SurSubj=[select subjectid from SurveySubject where parentid = :sr.invitationId];
        for(SurveySubject sub:SurSubj){
            String ids=String.valueOf(sub.subjectid).substring(0,3);
            if('500'.equals(ids)){
                
                subj.SubjectId =sub.subjectid;
        // Insert the SurveySubject Record
            insert subj;
                break;
        
            }
    
}
```
