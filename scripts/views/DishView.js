;(function (application, BB){
    application.views.DishView = BB.View.extend({

        tagName: 'li',
        className: 'span2',

        template: _.template($("#dishes").html()),

        initialize: function () {
            this.render();
        },
              
        render: function () {
            this.$el.html(this.template(this.model.toJSON()));
            this.$el.attr('dishIndex', this.model.cid);
            return this;

        }
    });
} (APP, Backbone));
