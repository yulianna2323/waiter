;(function (application, BB) {
    application.views.OrdersView = BB.View.extend({
        el: '.order',
        views: [],
        renderOrderView: function (model) {
            var orderView = new application.views.OrderView({model: model});
            this.views.push(orderView);
            this.$el.append(orderView.render().el);
        },
        initialize: function () {
            this.orderCollection = new application.collections.OrderCollection();
            this.listenTo(this.orderCollection,
                "reset", this.render);

            this.listenTo(this.orderCollection,
                "add", this.renderOrderView);
        },
        render: function () {
            this.orderCollection.each(this.renderOrderView);

            return this;
        }
    });


} (APP, Backbone));