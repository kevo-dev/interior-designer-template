import websitePageHOC from "@ninjas/components/wrappers/WebsitePage/hoc";
import contactScreen from "@ninjas/components/screens/ContactScreen";

export default websitePageHOC(contactScreen, {
  seoProps: {
    headTitle: "Contact us",
  },
  menuProps: {
    display: true,
  },
});
