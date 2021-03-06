// components/Item/Item.js
Component({
    /**
     * 组件的属性列表
     */
    properties: {
        content: {
            type: String,
            value: ''
        },
        tags: {
            type: Array,
            value: []
        },
        extra: {
            type: String,
            value: ''
        },
        finished: {
            type: Boolean,
            value: false
        },
        action: {
            type: String,
            value: ''
        }
    },

    /**
     * 组件的初始数据
     */
    data: {
        collapsed: true
    },

    attached: function() {
        console.log('component attached!')
    },

    detached: function() {
        console.log('componens detached!')
    } ,

    /**
     * 组件的方法列表
     */
    methods: {
        removeTodo: function() {
            this.triggerEvent('itemremove');
        },
        toggleExtra: function() {
            this.setData({
                collapsed: !this.data.collapsed
            })
        }
    }
})
