// pages/top/top.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    current: 0,
    indomitable: [
      {
        avatar: '/static/images/avatar.jpg',
        name: '微风吹过的秋天',
        times: 11894
      },
      {
        avatar: '/static/images/avatar.jpg',
        name: 'Judy',
        times: 343434
      }, {
        avatar: '/static/images/avatar.jpg',
        name: 'Judy',
        times: 3344
      }, {
        avatar: '/static/images/avatar.jpg',
        name: 'Judy',
        times: 100
      }, {
        avatar: '/static/images/avatar.jpg',
        name: 'Judy',
        times: 95
      }, {
        avatar: '/static/images/avatar.jpg',
        name: 'Judy',
        times: 95
      }, {
        avatar: '/static/images/avatar.jpg',
        name: 'Judy',
        times: 95
      }, {
        avatar: '/static/images/avatar.jpg',
        name: 'Judy',
        times: 95
      }, {
        avatar: '/static/images/avatar.jpg',
        name: 'Judy',
        times: 95
      }, {
        avatar: '/static/images/avatar.jpg',
        name: 'Judy',
        times: 95
      }
    ],
    success: [{
        avatar: '/static/images/avatar.jpg',
        name: '微风吹过的秋天',
        times: 95
      },
      {
        avatar: '/static/images/avatar.jpg',
        name: 'Judy',
        times: 95
      }, {
        avatar: '/static/images/avatar.jpg',
        name: 'Judy',
        times: 95
      }, {
        avatar: '/static/images/avatar.jpg',
        name: 'Judy',
        times: 95
      }, {
        avatar: '/static/images/avatar.jpg',
        name: 'Judy',
        times: 95
      }, {
        avatar: '/static/images/avatar.jpg',
        name: 'Judy',
        times: 95
      }, {
        avatar: '/static/images/avatar.jpg',
        name: 'Judy',
        times: 95
      }, {
        avatar: '/static/images/avatar.jpg',
        name: 'Judy',
        times: 95
      }, {
        avatar: '/static/images/avatar.jpg',
        name: 'Judy',
        times: 95
      }, {
        avatar: '/static/images/avatar.jpg',
        name: 'Judy',
        times: 95
      }
    ]
  },

  /**
   * 组件的方法列表
   */
  methods: {
    handleChange(event) {
      if(event.detail.source==='touch'){
        this.setData({
          current: event.detail.current
        });
      }
    },
    handleSuccess() {
      this.setData({
        current: 0
      });
    },
    handleIndomitable() {
      this.setData({
        current: 1
      });
    }
  }
})