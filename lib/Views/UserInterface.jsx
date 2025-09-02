import Box from "terriajs/lib/Styled/Box";
import PropTypes from "prop-types";
import combine from "terriajs-cesium/Source/Core/combine";
import { ContextProviders } from "terriajs/lib/ReactViews/Context";
import { TerriaViewerWrapper } from "terriajs/lib/ReactViews/Map/TerriaViewerWrapper";
import { terriaTheme } from "terriajs/lib/ReactViews/StandardUserInterface";

export const TerriaUserInterface = ({ terria, viewState, themeOverrides }) => {
  // Merge theme in order of highest priority: themeOverrides props -> theme config parameter -> default terriaTheme
  const mergedTheme = combine(
    themeOverrides,
    combine(terria.configParameters.theme, terriaTheme, true),
    true
  );

  return (
    <ContextProviders viewState={viewState} theme={mergedTheme}>
      <Box position="absolute" css={{ top: 0, zIndex: 0 }} fullWidth fullHeight>
        <TerriaViewerWrapper />
      </Box>
    </ContextProviders>
  );
};

TerriaUserInterface.propTypes = {
  terria: PropTypes.object.isRequired,
  viewState: PropTypes.object.isRequired,
  themeOverrides: PropTypes.object
};
