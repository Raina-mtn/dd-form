Component({
  mixins: [],
  data: {
    hideList: true,
        tabs: [
            {
              icon: 'AlipayCircleFill',
              activeIcon: 'HeartFill',
              text: '首页',
            },
            {
              icon: 'StarOutline',
              activeIcon: 'StarFill',
              text: '待办',
              badge: { type: 'number', text: 9999 },
            },
            {
              icon: 'UserContactOutline',
              activeIcon: 'HeartFill',
              text: '我的',
            },
          ],
          tabsIndex:0,
  },
  props: {},
  didMount() {},
  didUpdate() {},
  didUnmount() {},
  methods: {
    handleChangeTabs(_, index) {
      this.setData({
        tabsIndex: index,
      });
    },
  },
});
