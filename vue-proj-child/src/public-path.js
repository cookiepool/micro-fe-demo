// 为了避免微应用加载的资源会 404
if (window.__POWERED_BY_QIANKUN__) {
  // 在微应用 bootstrap 之前注入一个运行时的 publicPath 变量
  // eslint-disable-next-line no-undef
  __webpack_public_path__ = window.__INJECTED_PUBLIC_PATH_BY_QIANKUN__;
}
