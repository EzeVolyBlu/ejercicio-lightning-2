({
    helperPlayBtn : function(component, event, helper) {

        component.set("v.timeInterval", 10800000);
        let time = component.get("v.time");
        const intr = setInterval( () => {
            
            if (!component.get("v.timerOn")) {
                clearInterval(intr)
            } else {
                time+=1000;
                component.set("v.time", time);
            }
        }, 1000);
    },

    helperStopBtn: function(component, event, helper) {

        $A.createComponents([
            ["ui:message",
             {
                "title" : "Done",
                "severity" : "confirm",
                 "closable" : "true"
             }],
            ["ui:outputText",
             {
             "value" : "the cases were succesfuly closed"
              }]
            ],
            function(components, status, errorMessage){
                if (status === "SUCCESS") {
                    var message = components[0];
                    var outputText = components[1];
                    
                    // set the body of the ui:message to be the ui:outputText
                    message.set("v.body", outputText);
                    var div1 = component.find("div1");
                    
                    // Replace div body with the dynamic component
                    div1.set("v.body", message);
                }else if (status === "INCOMPLETE" || status === "ERROR") {
                    console.log("Error from helper: " + errorMessage);
                }
            }
        );


        component.set("v.timerOn", false);
        component.set("v.timeInterval", component.get("v.time"));
        component.set("v.time", 10800000);
    },
})
