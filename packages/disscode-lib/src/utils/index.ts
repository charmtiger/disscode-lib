export {
  Current,
  reLaunch,
  // openEmbeddedMiniProgram,
  navigateToMiniProgram,
  navigateBackMiniProgram,
  exitMiniProgram,
  updateShareMenu,
  // showShareImageMenu,
  showShareMenu,
  // shareVideoMessage,
  // shareFileMessage,
  // onCopyUrl,
  // offCopyUrl,
  hideShareMenu,
  getShareInfo,
  // authPrivateMessage,
  showToast,
  showModal,
  showActionSheet,
  hideToast,
  hideLoading,
  enableAlertBeforeUnload,
  disableAlertBeforeUnload,
  showNavigationBarLoading,
  setNavigationBarTitle,
  setNavigationBarColor,
  hideNavigationBarLoading,
  hideHomeButton,
  setBackgroundTextStyle,
  setBackgroundColor,
  showTabBarRedDot,
  showTabBar,
  setTabBarStyle,
  setTabBarItem,
  setTabBarBadge,
  removeTabBarBadge,
  hideTabBarRedDot,
  hideTabBar,
  stopPullDownRefresh,
  startPullDownRefresh,
  pageScrollTo,
  createAnimation,
  Animation,
  setTopBarText,
  nextTick,
  getMenuButtonBoundingClientRect,
  // setWindowSize,
  onWindowResize,
  offWindowResize,
  request,
  downloadFile,
  uploadFile,
  sendSocketMessage,
  onSocketOpen,
  onSocketMessage,
  onSocketError,
  onSocketClose,
  connectSocket,
  closeSocket,
  requestPayment,
  // requestOrderPayment,
  setStorage,
  setStorageSync,
  removeStorage,
  removeSavedFile,
  removeStorageSync,
  getStorage,
  getStorageInfo,
  getStorageInfoSync,
  getStorageSync,
  clearStorage,
  clearStorageSync,
  chooseAddress,
  chooseImage,
  chooseLocation,
  chooseMedia,
  chooseVideo,
  saveFile,
  // saveFileToDisk,
  saveImageToPhotosAlbum,
  saveVideoToPhotosAlbum,
} from '@tarojs/taro';
import Taro from '@tarojs/taro';

export const showLoading: typeof Taro.showLoading = (opts) => {
  return Taro.showLoading(opts || { title: '请稍等' });
}

export * from './utils';
export * from './storage';
export * from './ui';
export * from './event';
export * from './data';
export * from './uuid';
export * from './loadsh';
export * from './time';
export * from './navigation';
export * from './safeValue';
