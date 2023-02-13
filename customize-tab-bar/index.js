Component({
  data: {
    selected: 0,
    textColor: "#7A7E83",
    selectedColor: "#2f54eb",
    list: [
      {
        pagePath: "/pages/index/index",
        name: "customize1",
      },
      {
        pagePath: "/pages/index2/index",
        name: "customize2",
      },
    ],
  },
  methods: {
    tap(e) {
      const data = e.target.dataset;
      my.switchTab({
        url: data.value.pagePath,
      });
    },
  },
});
