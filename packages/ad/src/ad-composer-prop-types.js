import PropTypes from "prop-types";

export const propTypes = {
  adConfig: PropTypes.shape({
    networkId: PropTypes.string.isRequired,
    adUnit: PropTypes.string.isRequired,
    pageTargeting: PropTypes.shape({}),
    slotTargeting: PropTypes.shape({}),
    biddersConfig: PropTypes.shape({}),
    bidderSlots: PropTypes.arrayOf(PropTypes.string)
  }),
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element)
  ]).isRequired
};

// @TODO: check these are sensible
export const defaultProps = {
  adConfig: {
    networkId: "25436805",
    adUnit: "d.thetimes.co.uk",
    pageTargeting: {
      title: "This is title",
      label: "This is label"
    },
    slotTargeting: {
      section: "news"
    },
    biddersConfig: {
      timeout: 3000,
      minPrice: 0.01,
      maxBid: 15,
      bucketSize: 0.25,
      bidders: {
        appnexus: {
          placementId: "5823281"
        },
        rubicon: {
          accountId: "14062",
          siteId: "70608",
          zoneId: "335918"
        },
        amazon: {
          accountId: "3360"
        },
        indexExchange: {
          siteId: "188830"
        }
      }
    },
    bidderSlots: ["ad-header", "ad-article-inline"]
  }
};
