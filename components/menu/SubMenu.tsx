import React from 'react';
import PropTypes from 'prop-types';
import { SubMenu as RcSubMenu } from 'rc-menu';
import classNames from 'classnames';

class SubMenu extends React.Component<any, any> {
  static contextTypes = {
    antdMenuTheme: PropTypes.string,
  };
  render() {
    const { rootPrefixCls, className } = this.props;
    const theme = this.context.antdMenuTheme;
    return (
      <RcSubMenu
        {...this.props}
        className={classNames(`${rootPrefixCls}-${theme}`, className)}
      />
    );
  }
}

export default SubMenu;
