if (Meteor.isClient) {
  var arr = [{name: "A"},{name: "B"},{name: "C"}];
  var dep = new Tracker.Dependency();

  Template.body.helpers({
    people: function() {
      dep.depend();
      return arr;
    }
  })

  Template.body.events({
    'click button': function(){
      arr.splice(0, 1);
      dep.changed();
    }
  })

  Template.person.onCreated(function(){
    this.name = this.data.name;
  })

  Template.person.helpers({
    name: function(){
      return Template.instance().name;
    }
  })
}