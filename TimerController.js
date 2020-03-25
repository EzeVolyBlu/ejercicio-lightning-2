({
    handlePlay : function(component, event, helper) {
        if(!component.get("v.timerOn")){
            component.set("v.timerOn", true);
            helper.helperPlayBtn(component, event, helper);
        }
    },
    
    handlePause : function(component, event, helper) {
        if(component.get("v.timerOn")){
            component.set("v.timerOn", false);
        }
    },

    handleStop : function(component, event, helper) {
        if(component.get("v.time") > 10800000){
            helper.helperStopBtn(component, event, helper);
        }
    },

    closemessage: function(component, event, helper){

        var div1 = component.find("div1");
        div1.set("v.body", "");        
    },
})
