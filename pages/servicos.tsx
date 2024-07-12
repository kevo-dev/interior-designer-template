import websitePageHOC from "@ninjas/components/wrappers/WebsitePage/hoc";
import servicesScreen from "@ninjas/components/screens/ServicesScreen";

export default websitePageHOC(servicesScreen, {
  seoProps: {
    headTitle: "Services",
  },
  menuProps: {
    display: true,
  },
});
