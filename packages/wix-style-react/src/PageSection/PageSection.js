import React from 'react';
import PropTypes from 'prop-types';
import Heading from '../Heading';
import Text from '../Text';
import Divider from '../Divider';
import Box from '../Box';
import { st, classes } from './PageSection.st.css';
import { dataHooks } from './constants';

/** Page Section */
class PageSection extends React.PureComponent {
  render() {
    const {
      dataHook,
      showDivider,
      title,
      subtitle,
      actionsBar,
      className,
    } = this.props;

    return (
      <div className={st(classes.root, {}, className)} data-hook={dataHook}>
        <div className={classes.content}>
          <div className={classes.titleColumn}>
            {title && (
              <Heading
                appearance="H2"
                dataHook={dataHooks.pageSectionTitle}
                ellipsis={typeof title === 'string'}
              >
                {title}
              </Heading>
            )}
            {subtitle && (
              <Text
                weight="thin"
                ellipsis={typeof subtitle === 'string'}
                dataHook={dataHooks.pageSectionSubtitle}
              >
                {subtitle}
              </Text>
            )}
          </div>
          {actionsBar && (
            <Box dataHook={dataHooks.pageSectionActionsBar}>
              {typeof actionsBar === 'function' ? actionsBar() : actionsBar}
            </Box>
          )}
        </div>
        {showDivider && <Divider />}
      </div>
    );
  }
}

PageSection.displayName = 'PageSection';

PageSection.propTypes = {
  /** Applied as data-hook HTML attribute that can be used in the tests */
  dataHook: PropTypes.string,
  /** A css class to be applied to the component's root element */
  className: PropTypes.string,
  /** The main title text */
  title: PropTypes.oneOfType([PropTypes.node, PropTypes.func]),
  /** The subtitle text */
  subtitle: PropTypes.node,
  /** A placeholder for a component that can contain actions / anything else. It should be a React component that receives `minimized` and `hasBackgroundImage` props. */
  actionsBar: PropTypes.oneOfType([PropTypes.node, PropTypes.func]),

  showDivider: PropTypes.bool,
};

PageSection.defaultProps = {};

export default PageSection;
