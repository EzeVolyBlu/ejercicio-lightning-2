({
    handleButtonClick: function (component, event) {
      var event = component.getEvent("onclick");
      event.setParams({
        type: component.get("v.type")
      });
      event.fire();
    }
  })