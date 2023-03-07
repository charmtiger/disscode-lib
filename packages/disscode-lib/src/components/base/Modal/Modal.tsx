import React from 'react';
import { observer } from 'mobx-react';
import { observable } from 'mobx';
import { CrossPageNavigation } from '../Layout/Page.PropType';

import View from '../View';

import { ModalProps } from './Modal.PropType';

@observer
class Modal<C extends React.Component> extends React.Component<ModalProps<C>> {
  @observable childrenProps: C['props'] = {};
  @observable visible = false;

  navigation: CrossPageNavigation = {
    goBack: () => {
      this.close();
    },
    navigate: (_pageName, _params) => {},
    redirect: (_pageName, _params) => {},
  };

  componentDidMount(): void {
    if ((this.props as any).__designMode === 'design') {
      // 低代码编辑态中强制显示，将控制权交给引擎侧
      this.visible = true;
    }
  }

  open = (childrenProps: C['props'] = {}) => {
    this.childrenProps = {
      isModal: true,
      navigation: this.navigation,
      ...childrenProps,
    };
    this.visible = true;
    this.forceUpdate();
  };

  close = () => {
    if ((this.props as any).__designMode) return;
    this.visible = false;
    this.props?.onClose?.();
    this.forceUpdate();
  };

  render() {
    const { animate = 'slide-bottom', renderView, width, height, style, zIndex } = this.props;
    const animateClassName = `cs-dialog--${animate}`;
    const visible = this.visible || (this.props as any).__designMode;
    return (
      <View className={`cs-dialog ${animateClassName} ${visible ? 'cs-dialog--show' : ''}`} style={{ zIndex: zIndex || 1003 }}>
        <View className='cs-dialog__mask' onClick={this.close} />
        <View className='cs-dialog__container M-flexbox-vertical' style={{ width: style?.width || width, height: style?.height || height }}>
          {renderView && visible ? renderView(this.childrenProps) : null}
        </View>
      </View>
    );
  }
}

export default Modal;
