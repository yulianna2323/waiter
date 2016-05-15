;(function (application, BB) {
    application.views.OrderView =BB.View.extend({

        tagName: 'li',

        template: _.template($("#order").html()),
        initialize: function () {
            this.render();
        },
        render: function () {
            this.$el.html(this.template(this.model.toJSON()));
            return this;
        }
    });
} (APP, Backbone));