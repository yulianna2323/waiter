;(function (application, BB) {
    application.views.CategoryView =BB.View.extend({
    
        tagName: 'li', 
        className: 'span2',   

    template: _.template($("#category").html()),
    initialize: function () {
        this.render();
    },
        render: function () {
            this.$el.html(this.template(this.model.toJSON()));
            this.$el.attr('categoryIndex', this.model.cid);
            return this;
        }
});
} (APP, Backbone));