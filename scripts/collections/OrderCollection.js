;(function (application, BB) {
    application.collections.OrderCollection = BB.Collection.extend({
        model: application.models.OrderModel,
        initialize: function() {Backbone.on("order", function(model){
           this.add(model) 
        }, this)}

    });
} (APP, Backbone));