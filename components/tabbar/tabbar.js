Component({
  mixins: [],
  data: {
    hideList: true,
    tabsBadge: [
      {
        icon: 'AlipayCircleFill',
        activeIcon: 'AlipayCircleFill',
        text: '首页',
      },
      {
        icon: 'StarOutline',
        activeIcon: 'StarFill',
        text: '待办',
        badge: { type: 'number', text: 9999 },
      },
      {
        icon: 'UserOutline',
        activeIcon: 'TeamFill',
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
    handleChange(index) {
      this.setData({ tabsIndex: index });
    },
  },
});
